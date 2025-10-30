/**
 * AlgebraEngine - Refactored Mathematical Expression Comparison Engine
 *
 * Handles form-preserving comparison of algebraic expressions with support for:
 * - Commutativity (reordering of terms and factors)
 * - Sign equivalences and binary difference normalization
 * - Simplified form validation (unsimplified constants rejection)
 * - Complex canonicalization for multiplication and division
 *
 * 8-Module Architecture:
 * 1. LaTeX Parser - Convert LaTeX to Math.js expressions
 * 2. AST Utilities - Tree manipulation, flattening, string conversion
 * 3. Simplification Validator - Detect unsimplified constant patterns
 * 4. Binary Difference Canonicalization - Normalize (a-x) ≡ -(x-a)
 * 5. AST Canonicalization Engine - Transform to canonical form
 * 6. Factor Comparison - Compare factors with sign and commutativity
 * 7. Final Comparison - Orchestrate comparison logic
 * 8. Main Orchestrator - Full pipeline with logging
 */

// Import math at module level if running in Node.js
let math;
if (typeof require !== 'undefined') {
    try {
        math = require('mathjs');
    } catch (e) {
        // math might be provided globally in browser environments
    }
}

class AlgebraEngine {
    constructor(mathObj = null) {
        this.logDepth = 0;
        // Store math object - use provided math or the global one
        if (mathObj) {
            this.math = mathObj;
        } else if (typeof math !== 'undefined') {
            this.math = math;
        } else if (typeof window !== 'undefined' && window.math) {
            this.math = window.math;
        } else {
            throw new Error('Math.js library not available. Please ensure mathjs is loaded before creating AlgebraEngine.');
        }
    }

    // ==================== UTILITIES ====================
    // Basic logging and debugging utilities

    log(message, ...args) {
        const depth = Math.max(0, this.logDepth); // Prevent negative depth
        console.log(`${'  '.repeat(depth)}${message}`, ...args);
    }

    // ==================== MODULE 1: LATEX PARSER ====================

    /**
     * Convert LaTeX string to Math.js expression string
     * Handles: superscripts, fractions, roots, operators, implicit multiplication
     */
    latexToMathJS(latex) {
        let expr = latex.trim();

        // Unicode superscripts to ^exponent
        const superscriptMap = {
            '²': '^2', '³': '^3', '⁴': '^4', '⁵': '^5', '⁶': '^6',
            '⁷': '^7', '⁸': '^8', '⁹': '^9', '¹': '^1', '⁰': '^0'
        };
        for (const [unicode, replacement] of Object.entries(superscriptMap)) {
            expr = expr.replace(new RegExp(unicode, 'g'), replacement);
        }

        // Remove \left and \right
        expr = expr.replace(/\\left|\\right/g, '');

        // Convert multiplication operators
        expr = expr.replace(/\\times|\\cdot|×/g, '*');
        expr = expr.replace(/÷/g, '/');

        // Convert roots: \sqrt[n]{x} → (x^(1/n)), \sqrt{x} → sqrt(x)
        expr = expr.replace(
            /\\sqrt\[(\d+)\]\{([^{}]*(?:\{[^{}]*\}[^{}]*)*)\}/g,
            '(($2)^(1/$1))'
        );
        expr = expr.replace(
            /\\sqrt\{([^{}]*(?:\{[^{}]*\}[^{}]*)*)\}/g,
            'sqrt($1)'
        );

        // Convert fractions: \frac{a}{b} → ((a)/(b))
        while (expr.includes('\\frac')) {
            expr = expr.replace(
                /\\frac\{([^{}]*(?:\{[^{}]*\}[^{}]*)*)\}\{([^{}]*(?:\{[^{}]*\}[^{}]*)*)\}/g,
                '(($1)/($2))'
            );
        }

        // Handle explicit exponents: ^{expr} → ^(expr)
        expr = expr.replace(/\^{([^}]*)}/g, '^($1)');

        // Remove remaining backslashes
        expr = expr.replace(/\\/g, '');

        // Remove whitespace
        expr = expr.replace(/\s+/g, '');

        return this.insertImpliedMultiplication(expr);
    }

    /**
     * Insert implicit multiplication between adjacent terms
     * Examples: "2x" → "2*x", "(x)(y)" → "(x)*(y)", "xy" → "x*y"
     */
    insertImpliedMultiplication(expr) {
        let result = '';
        if (expr.length === 0) return '';

        for (let i = 0; i < expr.length; i++) {
            const char = expr[i];
            result += char;

            if (i === expr.length - 1) break;

            const nextChar = expr[i + 1];

            // Insert * between: digit and letter/paren, paren and letter/digit/paren, letter and letter/paren
            if (char.match(/\d/) && nextChar.match(/[a-zA-Z(]/)) result += '*';
            else if (char === ')' && nextChar.match(/[a-zA-Z\d(]/)) result += '*';
            else if (char.match(/[a-zA-Z]/) && nextChar.match(/[a-zA-Z(]/)) result += '*';
        }

        return result;
    }

    // ==================== MODULE 2: AST UTILITIES ====================

    /**
     * Convert AST node to readable string representation
     * Handles: Constants, Symbols, Operators, Functions, Parentheses
     */
    astToString(node) {
        if (!node) return 'null';

        switch (node.type) {
            case 'ConstantNode':
                if (node.value === undefined) {
                    // Handle invalid constants (e.g., from unparseable expressions)
                    return node.comment ? `<INVALID:${node.comment}>` : '<INVALID>';
                }
                return node.value.toString();
            case 'SymbolNode':
                return node.name;
            case 'OperatorNode': {
                const opMap = {
                    'add': '+', 'subtract': '-', 'multiply': '*',
                    'divide': '/', 'pow': '^'
                };
                const op = opMap[node.fn] || node.fn;
                const args = node.args.map(arg => this.astToString(arg));
                if (node.isUnary()) return `${op}(${args[0]})`;
                return `(${args.join(` ${op} `)})`;
            }
            case 'ParenthesisNode':
                return `(${this.astToString(node.content)})`;
            case 'FunctionNode':
                return `${node.name}(${node.args.map(arg => this.astToString(arg)).join(', ')})`;
            default:
                return node.toString();
        }
    }

    /**
     * Flatten associative operations (add/multiply) into a list of terms
     * Example: flatten((a+b)+c, 'add') → [a, b, c]
     */
    flatten(node, op) {
        const terms = [];
        const collect = (n) => {
            if (n.isOperatorNode && n.fn === op) {
                n.args.forEach(collect);
            } else {
                terms.push(n);
            }
        };
        collect(node);
        return terms;
    }

    /**
     * Rebuild binary tree from flattened terms
     * Example: rebuildTree([a, b, c], 'add') → (a+(b+c))
     */
    rebuildTree(terms, op) {
        if (terms.length === 1) return terms[0];

        let tree = new this.math.OperatorNode(op, op, [terms[0], terms[1]]);
        for (let i = 2; i < terms.length; i++) {
            tree = new this.math.OperatorNode(op, op, [tree, terms[i]]);
        }
        return tree;
    }

    /**
     * Compare nodes alphabetically by string representation
     * Used for consistent sorting of terms and factors
     */
    compareNodes(a, b) {
        return this.astToString(a).localeCompare(this.astToString(b));
    }

    /**
     * Fold constant multiplication patterns: -1 * constant → -constant
     * Used to clean up after binary difference transformations
     */
    foldConstantMultiplication(node) {
        if (!node || !node.isOperatorNode || node.fn !== 'multiply') {
            return node;
        }

        const factors = this.flatten(node, 'multiply');

        // Check if we have -1 and another constant
        const negOneIdx = factors.findIndex(f => f.isConstantNode && f.value === -1);
        if (negOneIdx === -1) return node;

        const otherConstantIdx = factors.findIndex((f, idx) =>
            idx !== negOneIdx && f.isConstantNode && typeof f.value === 'number'
        );

        if (otherConstantIdx !== -1) {
            // Found -1 and another constant, fold them
            const otherConstant = factors[otherConstantIdx];
            const newConstant = new this.math.ConstantNode(-1 * otherConstant.value);

            const remainingFactors = factors.filter((_, idx) =>
                idx !== negOneIdx && idx !== otherConstantIdx
            );

            if (remainingFactors.length === 0) {
                return newConstant;
            }

            return this.rebuildTree([newConstant, ...remainingFactors], 'multiply');
        }

        return node;
    }

    // ==================== MODULE 3: SIMPLIFICATION VALIDATOR ====================

    /**
     * Check if an AST contains unsimplified constant patterns
     * Returns: { hasIssues: boolean, issues: string[] }
     *
     * Rejects:
     * - Multiple numeric constants in addition: 2+3+x
     * - Multiple numeric constants in multiplication: 2*3*x
     * - Unsimplified like terms: x+2x (should be 3x)
     *
     * Accepts (identity operations):
     * - 1*x (identity for multiplication)
     * - 0+x (identity for addition)
     */
    hasUnsimplifiedConstants(ast) {
        const issues = [];

        const checkNode = (node) => {
            if (!node || !node.type) return;

            // Helper to collect all constants from a node tree
            const collectConstants = (n) => {
                const constants = [];

                const traverse = (current) => {
                    if (!current || !current.type) return;

                    // Direct constant
                    if (current.isConstantNode) {
                        constants.push(current);
                        return;
                    }

                    // Unary minus of constant
                    if (current.isOperatorNode && current.fn === 'unaryMinus' &&
                        current.args[0] && current.args[0].isConstantNode) {
                        constants.push(current);
                        return;
                    }

                    // For addition/subtraction, traverse both sides
                    if (current.isOperatorNode && (current.fn === 'add' || current.fn === 'subtract')) {
                        if (current.args && current.args.length >= 2) {
                            current.args.forEach(arg => traverse(arg));
                        }
                    }
                };

                traverse(n);
                return constants;
            };

            // Helper to extract the base form of a term (remove numeric coefficients)
            const getTermBase = (term) => {
                if (term.isSymbolNode) {
                    return term.name;
                }
                if (term.isConstantNode) {
                    return null; // Pure numeric constant, no variable base
                }
                if (term.isOperatorNode && term.fn === 'multiply') {
                    const factors = this.flatten(term, 'multiply');
                    const nonNumericFactors = factors.filter(f => !f.isConstantNode || typeof f.value !== 'number');
                    if (nonNumericFactors.length === 0) return null;
                    if (nonNumericFactors.length === 1) {
                        return this.astToString(nonNumericFactors[0]);
                    }
                    return this.astToString(this.rebuildTree(nonNumericFactors, 'multiply'));
                }
                if (term.isOperatorNode && term.fn === 'pow') {
                    return this.astToString(term);
                }
                return this.astToString(term);
            };

            // Helper to detect like terms in an addition/subtraction
            const checkForLikeTerms = (addNode) => {
                // Flatten all addition and subtraction operations into a single list of terms
                // Handle both add and subtract operators
                const terms = [];
                const flattenAddSub = (n) => {
                    if (n.isOperatorNode && (n.fn === 'add' || n.fn === 'subtract')) {
                        for (let i = 0; i < n.args.length; i++) {
                            const arg = n.args[i];
                            // For subtract, the second argument needs to be negated
                            if (n.fn === 'subtract' && i === 1) {
                                // Wrap in unary minus to mark it as negative
                                if (arg.isOperatorNode && arg.fn === 'multiply') {
                                    const factors = this.flatten(arg, 'multiply');
                                    const hasNegOne = factors.some(f => f.isConstantNode && f.value === -1);
                                    if (!hasNegOne) {
                                        terms.push(new this.math.OperatorNode('multiply', 'multiply',
                                            [new this.math.ConstantNode(-1), arg]));
                                    } else {
                                        const withoutNegOne = factors.filter(f => !(f.isConstantNode && f.value === -1));
                                        if (withoutNegOne.length === 1) {
                                            terms.push(withoutNegOne[0]);
                                        } else {
                                            terms.push(this.rebuildTree(withoutNegOne, 'multiply'));
                                        }
                                    }
                                } else {
                                    terms.push(new this.math.OperatorNode('multiply', 'multiply',
                                        [new this.math.ConstantNode(-1), arg]));
                                }
                            } else {
                                flattenAddSub(arg);
                            }
                        }
                    } else {
                        terms.push(n);
                    }
                };
                flattenAddSub(addNode);

                const termBases = new Map(); // Maps base form to count

                for (const term of terms) {
                    const base = getTermBase(term);
                    if (base !== null) { // Only track terms with a variable base
                        termBases.set(base, (termBases.get(base) || 0) + 1);
                    }
                }

                // Check if any base appears more than once (like terms not combined)
                for (const [base, count] of termBases.entries()) {
                    if (count >= 2) {
                        issues.push(`Like terms '${base}' appear ${count} times and should be combined`);
                    }
                }
            };

            // Check addition/subtraction nodes for multiple constants
            if (node.isOperatorNode && (node.fn === 'add' || node.fn === 'subtract')) {
                const constants = collectConstants(node);

                if (constants.length >= 2) {
                    issues.push(`Multiple constants in addition/subtraction should be combined`);
                }

                // Also check for like terms
                checkForLikeTerms(node);
            }

            // Check multiplication nodes for multiple numeric constants
            if (node.isOperatorNode && node.fn === 'multiply') {
                const factors = this.flatten(node, 'multiply');
                const numericConstants = factors.filter(f =>
                    f.isConstantNode && typeof f.value === 'number'
                );

                if (numericConstants.length >= 2) {
                    issues.push(`Multiple numeric constants in multiplication should be combined`);
                }
            }

            // Recursively check children
            if (node.args) {
                node.args.forEach(arg => checkNode(arg));
            }
            if (node.content) {
                checkNode(node.content);
            }
        };

        checkNode(ast);
        return {
            hasIssues: issues.length > 0,
            issues: issues
        };
    }

    // ==================== MODULE 4: BINARY DIFFERENCE CANONICALIZATION ====================

    /**
     * Get the degree of a term (highest power of any variable)
     *
     * Examples:
     * - 5 → 0 (constant)
     * - x → 1 (linear)
     * - x^2 → 2 (quadratic)
     * - 3*x^2 → 2
     * - x*y → 1+1 = 2 (sum of powers)
     */
    getTermDegree(term) {
        if (term.isConstantNode) return 0;
        if (term.isSymbolNode) return 1;

        if (term.isOperatorNode) {
            if (term.fn === 'pow' && term.args[1].isConstantNode) {
                return term.args[1].value;
            }
            if (term.fn === 'multiply') {
                const factors = this.flatten(term, 'multiply');
                return factors.reduce((maxDegree, factor) => {
                    return maxDegree + this.getTermDegree(factor);
                }, 0);
            }
        }

        return 0;
    }

    /**
     * Check if a polynomial (addition node) has a negative leading coefficient
     * Returns: { hasNegativeLeading: boolean, leadingTerm: node, sign: ±1 }
     */
    hasNegativeLeadingCoefficient(addNode) {
        if (!addNode.isOperatorNode || addNode.fn !== 'add') {
            return { hasNegativeLeading: false, leadingTerm: null, sign: 1 };
        }

        const terms = this.flatten(addNode, 'add');
        if (terms.length === 0) {
            return { hasNegativeLeading: false, leadingTerm: null, sign: 1 };
        }

        // Find the term with highest degree
        let leadingTerm = terms[0];
        let maxDegree = this.getTermDegree(terms[0]);

        for (let i = 1; i < terms.length; i++) {
            const degree = this.getTermDegree(terms[i]);
            if (degree > maxDegree) {
                maxDegree = degree;
                leadingTerm = terms[i];
            }
        }

        // Check if leading term has a negative coefficient
        let hasNegativeCoeff = false;

        if (leadingTerm.isConstantNode && leadingTerm.value < 0) {
            hasNegativeCoeff = true;
        } else if (leadingTerm.isOperatorNode && leadingTerm.fn === 'multiply') {
            const factors = this.flatten(leadingTerm, 'multiply');
            hasNegativeCoeff = factors.some(f => f.isConstantNode && f.value < 0);
        }

        return {
            hasNegativeLeading: hasNegativeCoeff,
            leadingTerm: leadingTerm,
            sign: hasNegativeCoeff ? -1 : 1
        };
    }

    /**
     * Normalize a polynomial by factoring out -1 if the leading coefficient is negative
     *
     * Returns: { transformed: boolean, result: node, sign: ±1 }
     *
     * Examples:
     * - (x - 15x² + 3) → sign=-1, result=(15x² - x - 3)
     * - (15x² - x - 3) → sign=1, result=(15x² - x - 3)
     */
    normalizePolynomialSign(addNode) {
        const leadingInfo = this.hasNegativeLeadingCoefficient(addNode);

        if (!leadingInfo.hasNegativeLeading) {
            return { transformed: false, result: addNode, sign: 1 };
        }

        // Factor out -1 by negating all terms
        const terms = this.flatten(addNode, 'add');
        const negatedTerms = terms.map(term => {
            if (term.isConstantNode) {
                return new this.math.ConstantNode(-term.value);
            }
            if (term.isOperatorNode && term.fn === 'multiply') {
                const factors = this.flatten(term, 'multiply');
                // Find the constant factor and flip its sign
                const constIdx = factors.findIndex(f => f.isConstantNode && typeof f.value === 'number');
                if (constIdx !== -1) {
                    const newFactors = [...factors];
                    newFactors[constIdx] = new this.math.ConstantNode(-factors[constIdx].value);

                    // If the new constant is 1, remove it (unless it's the only factor)
                    if (newFactors[constIdx].value === 1 && newFactors.length > 1) {
                        const withoutOne = newFactors.filter((_, i) => i !== constIdx);
                        if (withoutOne.length === 1) return withoutOne[0];
                        return this.rebuildTree(withoutOne, 'multiply');
                    }
                    // If the new constant is -1, keep it
                    if (newFactors.length === 1) return newFactors[0];
                    return this.rebuildTree(newFactors, 'multiply');
                } else {
                    // No constant factor, add -1
                    return new this.math.OperatorNode('multiply', 'multiply',
                        [new this.math.ConstantNode(-1), term]);
                }
            }
            // For other types (symbols, etc.), multiply by -1
            return new this.math.OperatorNode('multiply', 'multiply',
                [new this.math.ConstantNode(-1), term]);
        });

        // Sort the negated terms for consistency
        negatedTerms.sort(this.compareNodes.bind(this));
        const result = this.rebuildTree(negatedTerms, 'add');

        return { transformed: true, result: result, sign: -1 };
    }

    /**
     * Canonicalize binary differences: normalize (a-x) to -(x-a) based on alphabetical order
     *
     * Returns: { transformed: boolean, result: node, needsNumeratorFlip?: boolean, sign?: ±1 }
     *
     * Examples:
     * - (3-2x) with alphabetical sort: 3 > 2x → flip → -(2x-3), sign: -1
     * - (2x-3) with alphabetical sort: 2x < 3 → no flip → (2x-3), sign: 1
     * - (5-x): 5 > x → flip → -(x-5), sign: -1
     * - (x-5): x > 5 → no flip → (x-5), sign: 1
     */
    canonicalizeBinaryDifference(node) {
        if (!node.isOperatorNode) {
            return { transformed: false, result: node, sign: 1 };
        }

        // Convert subtract to add with unary minus
        let addNode = node;
        if (node.fn === 'subtract' && node.args.length === 2) {
            // a - b  →  a + (-b)
            const [left, right] = node.args;
            const negatedRight = new this.math.OperatorNode('multiply', 'multiply', [
                new this.math.ConstantNode(-1),
                right
            ]);
            addNode = new this.math.OperatorNode('add', 'add', [left, negatedRight]);
        } else if (node.fn !== 'add') {
            return { transformed: false, result: node, sign: 1 };
        }

        const terms = this.flatten(addNode, 'add');
        if (terms.length !== 2) {
            return { transformed: false, result: node, sign: 1 };
        }

        // Identify which terms are negative
        const termInfo = terms.map(term => {
            let isNegative = false;
            let positiveVersion = term;

            if (term.isConstantNode && term.value < 0) {
                isNegative = true;
                positiveVersion = new this.math.ConstantNode(-term.value);
            } else if (term.isOperatorNode && term.fn === 'multiply') {
                const factors = this.flatten(term, 'multiply');
                const negOne = factors.find(f => f.isConstantNode && f.value === -1);
                if (negOne) {
                    isNegative = true;
                    const otherFactors = factors.filter(f => f !== negOne);
                    if (otherFactors.length === 0) {
                        positiveVersion = new this.math.ConstantNode(1);
                    } else if (otherFactors.length === 1) {
                        positiveVersion = otherFactors[0];
                    } else {
                        positiveVersion = this.rebuildTree(otherFactors, 'multiply');
                    }
                }
            }

            return { term, isNegative, positiveVersion };
        });

        // Check if exactly one term is negative
        const negativeTerms = termInfo.filter(t => t.isNegative);
        if (negativeTerms.length !== 1) {
            return { transformed: false, result: addNode, sign: 1 };
        }

        const positiveTerm = termInfo.find(t => !t.isNegative);
        const negativeTerm = negativeTerms[0];

        // Compare the positive versions for canonical ordering
        // Rule: variables > constants (variables come first), then alphabetically
        const compareTerms = (termNode) => {
            const str = this.astToString(termNode);
            // Check if it's purely numeric
            const isNumeric = termNode.isConstantNode && typeof termNode.value === 'number';
            // Return tuple: (isVariable, str) for comparison
            return { isVariable: !isNumeric, str };
        };

        const posInfo = compareTerms(positiveTerm.positiveVersion);
        const negInfo = compareTerms(negativeTerm.positiveVersion);

        // Compare: variables before constants, then alphabetically
        let shouldFlip = false;
        if (negInfo.isVariable && !posInfo.isVariable) {
            // Negative term is variable, positive is constant → flip
            shouldFlip = true;
        } else if (negInfo.isVariable === posInfo.isVariable) {
            // Both same type → compare alphabetically
            shouldFlip = negInfo.str.localeCompare(posInfo.str) > 0;
        }
        // If negative is constant and positive is variable, don't flip

        if (shouldFlip) {
            const newAddTerms = [
                negativeTerm.positiveVersion,  // Previously negative, now positive
                new this.math.OperatorNode('multiply', 'multiply', [
                    new this.math.ConstantNode(-1),
                    positiveTerm.positiveVersion  // Previously positive, now negative
                ])
            ];

            // Fold constant multiplication patterns (e.g., -1 * 1 → -1)
            const foldedTerms = newAddTerms.map(term => this.foldConstantMultiplication(term));

            // Sort terms for consistency before rebuilding
            foldedTerms.sort(this.compareNodes.bind(this));

            return {
                transformed: true,
                result: this.rebuildTree(foldedTerms, 'add'),
                needsNumeratorFlip: true,
                sign: -1
            };
        }

        return { transformed: false, result: addNode, sign: 1 };
    }


    // ==================== MODULE 5: AST CANONICALIZATION ENGINE ====================

    /**
     * Transform AST to canonical form for consistent comparison
     *
     * Canonicalization rules:
     * 1. Convert subtract → add with unary minus
     * 2. Convert unary minus → multiply by -1
     * 3. Flatten nested operations
     * 4. Constant folding (combine numeric constants)
     * 5. Identity elimination (remove 1 from multiply, 0 from add)
     * 6. Normalize binary differences in denominators
     * 7. Consolidate division with multiplication
     * 8. Selective negation distribution (double negatives only)
     * 9. Sort terms for consistency
     */
    toCanonicalForm(ast) {
        const canonicalizeNode = (node) => {
            if (!node || !node.type) return node;

            let transformedNode = node;

            // Special handling for multiply nodes: expand unaryMinus children
            if (transformedNode.isOperatorNode && transformedNode.fn === 'multiply') {
                const expandedArgs = [];
                for (const arg of transformedNode.args) {
                    if (arg.isOperatorNode && arg.fn === 'unaryMinus') {
                        // Convert -(expr) to -1 * expr inline
                        expandedArgs.push(new this.math.ConstantNode(-1));
                        expandedArgs.push(arg.args[0]);
                    } else {
                        expandedArgs.push(arg);
                    }
                }
                if (expandedArgs.length !== transformedNode.args.length) {
                    transformedNode = new this.math.OperatorNode('multiply', 'multiply', expandedArgs);
                }
            }

            // Recursively canonicalize children
            if (transformedNode.args) {
                transformedNode.args = transformedNode.args.map(canonicalizeNode);
            }
            if (transformedNode.content) {
                transformedNode.content = canonicalizeNode(transformedNode.content);
            }

            switch (transformedNode.type) {
                case 'OperatorNode':
                    // Convert subtract to add with negation
                    if (transformedNode.fn === 'subtract') {
                        const negTerm = new this.math.OperatorNode('unaryMinus', 'unaryMinus', [transformedNode.args[1]]);
                        transformedNode = new this.math.OperatorNode('add', 'add', [transformedNode.args[0], negTerm]);
                        return canonicalizeNode(transformedNode);
                    }

                    // Convert unary minus to multiply by -1
                    if (transformedNode.fn === 'unaryMinus') {
                        const negOne = new this.math.ConstantNode(-1);
                        transformedNode = new this.math.OperatorNode('multiply', 'multiply', [negOne, transformedNode.args[0]]);
                    }

                    // Handle addition and multiplication with flattening and folding
                    if (transformedNode.fn === 'add' || transformedNode.fn === 'multiply') {
                        transformedNode = this._canonicalizeAddOrMultiply(transformedNode);
                    }

                    // Handle division
                    if (transformedNode.fn === 'divide') {
                        transformedNode = this._canonicalizeDivision(transformedNode);
                    }

                    break;

                case 'ParenthesisNode':
                    transformedNode = transformedNode.content;
                    break;
            }

            return transformedNode;
        };

        return canonicalizeNode(ast.clone());
    }

    /**
     * Canonicalize addition and multiplication operations
     */
    _canonicalizeAddOrMultiply(node) {
        let terms = this.flatten(node, node.fn);

        // For addition nodes, apply binary difference canonicalization if it's a binary difference
        // But only when sign flip isn't needed (sign=1), to avoid double negation
        if (node.fn === 'add' && terms.length === 2) {
            const canonResult = this.canonicalizeBinaryDifference(node);
            if (canonResult.transformed && canonResult.sign === 1) {
                // Already in canonical form, no sign flip needed
                return canonResult.result;
            }
            // If sign=-1, we DON'T apply it here; let the general flow handle it
        }

        if (node.fn === 'multiply') {
            // Check for addition factors that are negations of each other
            const additionNodes = terms.filter(t => t.isOperatorNode && t.fn === 'add');
            if (additionNodes.length >= 2) {
                for (let i = 0; i < additionNodes.length; i++) {
                    for (let j = i + 1; j < additionNodes.length; j++) {
                        if (this.areSumsNegations(additionNodes[i], additionNodes[j])) {
                            this.log(`[TRANSFORM] Detected negated sums - normalizing to canonical form.`);
                            const otherTerms = terms.filter(t => t !== additionNodes[i]);
                            const hasNegOne = otherTerms.some(t => t.isConstantNode && t.value === -1);
                            if (!hasNegOne) {
                                terms = [new this.math.ConstantNode(-1), ...otherTerms];
                            } else {
                                terms = otherTerms.filter(t => !(t.isConstantNode && t.value === -1));
                            }
                            let transformedNode = this.rebuildTree(terms, 'multiply');
                            return this._canonicalizeAddOrMultiply(transformedNode);
                        }
                    }
                }
            }

            // Flatten nested multiplications
            let flattenedTerms = [];
            for (const term of terms) {
                if (term.isOperatorNode && term.fn === 'multiply') {
                    flattenedTerms.push(...this.flatten(term, 'multiply'));
                } else {
                    flattenedTerms.push(term);
                }
            }
            terms = flattenedTerms;

            // Canonicalize polynomial factors in multiplication
            // This ensures polynomials with negative leading coefficients are normalized
            // e.g., (x - 15x² + 3) becomes -(15x² - x - 3)
            let negativeFactorCount = 0;
            let polynomialWasNormalized = false;  // Track if we normalized any polynomial
            const canonicalizedTerms = terms.map(term => {
                if (term.isOperatorNode && term.fn === 'add') {
                    const addTerms = this.flatten(term, 'add');

                    // Handle binary differences (2-term polynomials)
                    if (addTerms.length === 2) {
                        const canonResult = this.canonicalizeBinaryDifference(term);
                        if (canonResult.transformed && canonResult.sign === -1) {
                            negativeFactorCount++;
                            polynomialWasNormalized = true;
                            return canonResult.result;
                        } else if (canonResult.transformed) {
                            polynomialWasNormalized = true;
                            return canonResult.result;
                        }
                    }
                    // Handle general polynomials with negative leading coefficients
                    else if (addTerms.length > 2) {
                        const polyResult = this.normalizePolynomialSign(term);
                        if (polyResult.transformed && polyResult.sign === -1) {
                            negativeFactorCount++;
                            polynomialWasNormalized = true;
                            this.log(`[TRANSFORM] Normalized polynomial with negative leading coefficient.`);
                            return polyResult.result;
                        }
                    }
                }
                return term;
            });

            // If odd number of factors were flipped, apply overall negation
            if (negativeFactorCount % 2 === 1) {
                const negOneIndex = canonicalizedTerms.findIndex(t => t.isConstantNode && t.value === -1);
                if (negOneIndex !== -1) {
                    // Already have a -1, remove it (double negative)
                    terms = [...canonicalizedTerms.slice(0, negOneIndex),
                            ...canonicalizedTerms.slice(negOneIndex + 1)];
                } else {
                    // Add a -1 factor to account for the flip
                    terms = [new this.math.ConstantNode(-1), ...canonicalizedTerms];
                }
            } else {
                terms = canonicalizedTerms;
            }

            // Special: Simplify (-1 * (-1 * expr)) → expr
            if (terms.length === 2) {
                const negOne = terms.find(t => t.isConstantNode && t.value === -1);
                const mult = terms.find(t => t.isOperatorNode && t.fn === 'multiply');
                if (negOne && mult) {
                    const multFactors = this.flatten(mult, 'multiply');
                    if (multFactors.length === 2) {
                        const negOneInMult = multFactors.find(f => f.isConstantNode && f.value === -1);
                        const otherFactor = multFactors.find(f => f !== negOneInMult);
                        if (negOneInMult) {
                            // (-1 * (-1 * x)) → x
                            this.log(`[TRANSFORM] Simplifying double negation: (-1 * (-1 * term)) → term`);
                            terms = [otherFactor];
                        }
                    }
                }
            }

            // Constant folding in multiplication
            const constants = terms.filter(t => t.isConstantNode);
            const nonConstants = terms.filter(t => !t.isConstantNode);

            if (constants.length > 1) {
                this.log(`[TRANSFORM] Folding ${constants.length} constants in multiplication.`);
                const product = constants.reduce((acc, c) => acc * c.value, 1);
                if (product !== 1) {
                    terms = [new this.math.ConstantNode(product), ...nonConstants];
                } else {
                    terms = nonConstants.length > 0 ? nonConstants : [new this.math.ConstantNode(1)];
                }
            }

            // Identity elimination: remove 1 from multiplication
            const oneNode = terms.find(t => t.isConstantNode && t.value === 1);
            if (oneNode && terms.length > 1) {
                this.log(`[TRANSFORM] Removing identity 1 from multiplication.`);
                terms = terms.filter(t => !(t.isConstantNode && t.value === 1));
            }

            // Priority-based multiplication handling
            const negOneNode = terms.find(t => t.isConstantNode && t.value === -1);
            const addNode = terms.find(t => t.isOperatorNode && t.fn === 'add');
            const fractionNode = terms.find(t => t.isOperatorNode && t.fn === 'divide');

            // PRIORITY 1: Merge -1 into fraction numerator
            if (negOneNode && fractionNode) {
                this.log(`[TRANSFORM] Merging -1 into fraction numerator.`);
                const otherTerms = terms.filter(t => t !== negOneNode && t !== fractionNode);
                const newNumerator = new this.math.OperatorNode('multiply', 'multiply',
                    [new this.math.ConstantNode(-1), fractionNode.args[0]]);
                let newExpr = new this.math.OperatorNode('divide', 'divide',
                    [newNumerator, fractionNode.args[1]]);
                if (otherTerms.length > 0) {
                    newExpr = this.rebuildTree([...otherTerms, newExpr], 'multiply');
                }
                // Recursively canonicalize the new expression to fold constants
                const canonNode = (n) => {
                    if (!n || !n.type) return n;
                    if (n.args) n.args = n.args.map(canonNode);
                    if (n.content) n.content = canonNode(n.content);
                    if (n.isOperatorNode && (n.fn === 'add' || n.fn === 'multiply')) {
                        return this._canonicalizeAddOrMultiply(n);
                    }
                    return n;
                };
                return canonNode(newExpr);
            }

            // PRIORITY 2: Multiplication-Division Consolidation
            const divisionNodes = terms.filter(t => t.isOperatorNode && t.fn === 'divide');
            if (divisionNodes.length > 0) {
                const firstDivision = divisionNodes[0];
                const otherDivisions = divisionNodes.slice(1);
                const nonDivisionTerms = terms.filter(t => !divisionNodes.includes(t));

                if (nonDivisionTerms.length > 0 && otherDivisions.length === 0) {
                    this.log(`[TRANSFORM] Consolidating division with multiplication: (a/b)*c*d → (a*c*d)/b`);
                    const numeratorTerms = [firstDivision.args[0], ...nonDivisionTerms];
                    let newNumerator = this.rebuildTree(numeratorTerms, 'multiply');
                    // Canonicalize the new numerator to eliminate identity elements
                    newNumerator = this._canonicalizeAddOrMultiply(newNumerator);
                    const newExpr = new this.math.OperatorNode('divide', 'divide',
                        [newNumerator, firstDivision.args[1]]);
                    return newExpr;
                }
            }

            // PRIORITY 3: Selective distributive property for negative constants
            // Skip if we already normalized polynomials (to avoid infinite recursion)
            const negativeConstant = terms.find(t => t.isConstantNode && t.value < 0);
            const priorityAdditionNodes = terms.filter(t => t.isOperatorNode && t.fn === 'add');
            // Only apply distributive property in multiplication when:
            // 1. We have a negative constant, AND
            // 2. Exactly ONE addition factor (to avoid distributing into products of additions), AND
            // 3. We didn't already normalize polynomials (to avoid double-transformation)
            if (negativeConstant && priorityAdditionNodes.length === 1 && !polynomialWasNormalized) {
                const addNode = priorityAdditionNodes[0];

                const hasNegativeTerms = (addNode) => {
                    const addTerms = this.flatten(addNode, 'add');
                    return addTerms.some(term => {
                        if (term.isOperatorNode && term.fn === 'multiply') {
                            // Flatten to find nested negative constants
                            const factors = this.flatten(term, 'multiply');
                            return factors.some(f => f.isConstantNode && f.value < 0);
                        }
                        if (term.isConstantNode && term.value < 0) {
                            return true;
                        }
                        return false;
                    });
                };

                if (hasNegativeTerms(addNode)) {
                    const otherTerms = terms.filter(t => t !== negativeConstant && t !== addNode);
                    // Only distribute if there are no other factors (just -1 and the addition)
                    if (otherTerms.length === 0) {
                        this.log(`[TRANSFORM] Applying distributive property for negative constant ${negativeConstant.value} (single addition factor with negatives).`);
                        const magnitude = Math.abs(negativeConstant.value);
                        const addTerms = this.flatten(addNode, 'add');
                        // Negate each term by flipping signs instead of wrapping in (-1 *)
                        const distributedTerms = addTerms.map(term => {
                            if (term.isConstantNode) {
                                return new this.math.ConstantNode(-term.value);
                            }
                            if (term.isOperatorNode && term.fn === 'multiply') {
                                const factors = this.flatten(term, 'multiply');
                                // Find any constant and flip its sign
                                const constIdx = factors.findIndex(f => f.isConstantNode);
                                if (constIdx !== -1) {
                                    const newFactors = [...factors];
                                    const newValue = -newFactors[constIdx].value;
                                    newFactors[constIdx] = new this.math.ConstantNode(newValue);

                                    // If flipping resulted in 1 and there are other factors, remove it
                                    if (newValue === 1 && newFactors.length > 1) {
                                        const withoutOne = newFactors.filter((_, i) => i !== constIdx);
                                        if (withoutOne.length === 1) return withoutOne[0];
                                        return this.rebuildTree(withoutOne, 'multiply');
                                    }

                                    return this.rebuildTree(newFactors, 'multiply');
                                }
                                // If no constant, add -1 as a factor
                                const newFactors = [-1, ...factors].map(f =>
                                    typeof f === 'number' ? new this.math.ConstantNode(f) : f
                                );
                                return this.rebuildTree(newFactors, 'multiply');
                            }
                            // For other node types, wrap in (-1 *)
                            return new this.math.OperatorNode('multiply', 'multiply',
                                [new this.math.ConstantNode(-1), term]);
                        });
                        let newExpr = this.rebuildTree(distributedTerms, 'add');

                        const newTerms = magnitude !== 1
                            ? [new this.math.ConstantNode(magnitude), ...otherTerms, newExpr]
                            : [...otherTerms, newExpr];
                        if (newTerms.length > 1) {
                            newExpr = this.rebuildTree(newTerms, 'multiply');
                        } else if (newTerms.length === 1) {
                            newExpr = newTerms[0];
                        }
                        // Recursively canonicalize the result to handle further simplifications
                        if (newExpr.isOperatorNode && (newExpr.fn === 'add' || newExpr.fn === 'multiply')) {
                            return this._canonicalizeAddOrMultiply(newExpr);
                        }
                        return newExpr;
                    } else {
                        this.log(`[SKIP] Distributive property skipped: has other factors besides -1 and addition.`);
                    }
                } else {
                    this.log(`[SKIP] Distributive property skipped: single addition factor without negatives.`);
                }
            }
        }

        // Handle addition-specific canonicalization
        if (node.fn === 'add') {
            // Simplify double negations in addition terms: (-1 * (-1 * expr)) → expr
            terms = terms.map(term => {
                if (term.isOperatorNode && term.fn === 'multiply') {
                    const factors = this.flatten(term, 'multiply');
                    const negOneCount = factors.filter(f => f.isConstantNode && f.value === -1).length;
                    const otherFactors = factors.filter(f => !(f.isConstantNode && f.value === -1));

                    if (negOneCount === 2 && otherFactors.length === 0) {
                        // (-1 * -1) → 1
                        this.log(`[TRANSFORM] Simplifying (-1 * -1) → 1`);
                        return new this.math.ConstantNode(1);
                    } else if (negOneCount === 1 && otherFactors.length === 1) {
                        // Check if the other factor is itself a (-1 * ...) multiplication
                        const other = otherFactors[0];
                        if (other.isOperatorNode && other.fn === 'multiply') {
                            const innerFactors = this.flatten(other, 'multiply');
                            const innerNegOne = innerFactors.filter(f => f.isConstantNode && f.value === -1).length;
                            const innerOther = innerFactors.filter(f => !(f.isConstantNode && f.value === -1));
                            if (innerNegOne === 1 && innerOther.length === 1) {
                                // (-1 * (-1 * x)) → x
                                this.log(`[TRANSFORM] Simplifying (-1 * (-1 * x)) → x in addition`);
                                return innerOther[0];
                            } else if (innerNegOne === 1 && innerOther.length > 1) {
                                // (-1 * (-1 * a * b * ...)) → a * b * ...
                                this.log(`[TRANSFORM] Simplifying (-1 * (-1 * ...)) in addition`);
                                return this.rebuildTree(innerOther, 'multiply');
                            }
                        }
                    } else if (negOneCount >= 2 && otherFactors.length === 1) {
                        // Multiple -1's and one other factor
                        const isEvenNegOnes = negOneCount % 2 === 0;
                        if (isEvenNegOnes) {
                            // Even number of -1's cancels out: (-1 * -1 * ... * x) → x (or negated x)
                            this.log(`[TRANSFORM] Canceling ${negOneCount} -1 factors`);
                            return otherFactors[0];
                        }
                    }
                }
                return term;
            });

            // Constant folding in addition
            const constants = terms.filter(t => t.isConstantNode);
            const nonConstants = terms.filter(t => !t.isConstantNode);

            if (constants.length > 1) {
                this.log(`[TRANSFORM] Folding ${constants.length} constants in addition.`);
                const sum = constants.reduce((acc, c) => acc + c.value, 0);
                if (sum !== 0) {
                    terms = [...nonConstants, new this.math.ConstantNode(sum)];
                } else {
                    terms = nonConstants.length > 0 ? nonConstants : [new this.math.ConstantNode(0)];
                }
            }

            // Identity elimination: remove 0 from addition
            const zeroNode = terms.find(t => t.isConstantNode && t.value === 0);
            if (zeroNode && terms.length > 1) {
                this.log(`[TRANSFORM] Removing identity 0 from addition.`);
                terms = terms.filter(t => !(t.isConstantNode && t.value === 0));
            }

            // Factor out -1 if ALL terms are negative
            const allNegative = terms.every(term => {
                if (term.isConstantNode) {
                    return term.value < 0;
                }
                if (term.isOperatorNode && term.fn === 'multiply') {
                    const factors = this.flatten(term, 'multiply');
                    return factors.some(f => f.isConstantNode && f.value < 0);
                }
                return false;
            });

            if (allNegative && terms.length > 0) {
                this.log(`[TRANSFORM] Factoring out -1 from addition (all terms negative).`);
                const positiveTerms = terms.map(term => {
                    if (term.isConstantNode) {
                        return new this.math.ConstantNode(-term.value);
                    }
                    if (term.isOperatorNode && term.fn === 'multiply') {
                        const factors = this.flatten(term, 'multiply');
                        const newFactors = factors.flatMap(f => {
                            if (f.isConstantNode) {
                                const negated = -f.value;
                                return negated === 1 ? [] : [new this.math.ConstantNode(negated)];
                            }
                            return [f];
                        });
                        if (newFactors.length === 0) return new this.math.ConstantNode(1);
                        if (newFactors.length === 1) return newFactors[0];
                        return this.rebuildTree(newFactors, 'multiply');
                    }
                    return term;
                });

                // Sort multiplication factors within each positive term for consistency
                const sortedPositiveTerms = positiveTerms.map(term => {
                    if (term.isOperatorNode && term.fn === 'multiply') {
                        const multFactors = this.flatten(term, 'multiply');
                        multFactors.sort(this.compareNodes.bind(this));
                        return this.rebuildTree(multFactors, 'multiply');
                    }
                    return term;
                });

                // Sort positive terms for consistency
                sortedPositiveTerms.sort(this.compareNodes.bind(this));
                const positiveSum = this.rebuildTree(sortedPositiveTerms, 'add');
                let transformedNode = new this.math.OperatorNode('multiply', 'multiply',
                    [new this.math.ConstantNode(-1), positiveSum]);
                return transformedNode;
            }
        }

        // Sort terms for consistency (both addition and multiplication)
        terms.sort(this.compareNodes.bind(this));

        // Recursively ensure all nested operations are also sorted
        if (node.fn === 'add') {
            terms = terms.map(term => {
                if (term.isOperatorNode && term.fn === 'multiply') {
                    const multFactors = this.flatten(term, 'multiply');
                    multFactors.sort(this.compareNodes.bind(this));
                    return this.rebuildTree(multFactors, 'multiply');
                }
                return term;
            });
        }

        return this.rebuildTree(terms, node.fn);
    }

    /**
     * Canonicalize division operations
     * Handles: negative denominators, binary differences in numerator and denominators
     */
    _canonicalizeDivision(node) {
        let numerator = node.args[0];
        let denominator = node.args[1];


        // RULE 1: Extract negative from denominator
        let isNegativeDenominator = false;
        let positiveDenominator = denominator;

        if (denominator.isConstantNode && denominator.value < 0) {
            isNegativeDenominator = true;
            positiveDenominator = new this.math.ConstantNode(-denominator.value);
            this.log(`[TRANSFORM] Denominator is negative constant - extracting -1.`);
        } else if (denominator.isOperatorNode && denominator.fn === 'multiply') {
            const factors = this.flatten(denominator, 'multiply');
            const negOne = factors.find(f => f.isConstantNode && f.value === -1);
            if (negOne) {
                isNegativeDenominator = true;
                const otherFactors = factors.filter(f => f !== negOne);
                if (otherFactors.length === 0) {
                    positiveDenominator = new this.math.ConstantNode(1);
                } else if (otherFactors.length === 1) {
                    positiveDenominator = otherFactors[0];
                } else {
                    positiveDenominator = this.rebuildTree(otherFactors, 'multiply');
                }
                this.log(`[TRANSFORM] Denominator has -1 factor - extracting to numerator.`);
            }
        }

        if (isNegativeDenominator) {
            let newNumerator = new this.math.OperatorNode('multiply', 'multiply',
                [new this.math.ConstantNode(-1), numerator]);
            // Canonicalize the new numerator to fold constants
            newNumerator = this._canonicalizeAddOrMultiply(newNumerator);
            let transformedNode = new this.math.OperatorNode('divide', 'divide',
                [newNumerator, positiveDenominator]);
            return transformedNode;
        }

        // RULE 2: Canonicalize binary differences in denominator
        // But first check if BOTH numerator and denominator would flip (signs cancel)

        // Helper to check if a node or its product contains binary differences that would flip
        const getBinaryDiffFlipCount = (node) => {
            if (!node || !node.isOperatorNode) return 0;

            if (node.fn === 'add') {
                const result = this.canonicalizeBinaryDifference(node);
                return result.transformed && result.sign === -1 ? 1 : 0;
            } else if (node.fn === 'multiply') {
                const factors = this.flatten(node, 'multiply');
                let count = 0;
                for (const factor of factors) {
                    if (factor.isOperatorNode && factor.fn === 'add') {
                        const result = this.canonicalizeBinaryDifference(factor);
                        if (result.transformed && result.sign === -1) {
                            count++;
                        }
                    }
                }
                return count;
            }
            return 0;
        };

        const numFlips = getBinaryDiffFlipCount(numerator);
        const denomFlips = getBinaryDiffFlipCount(denominator);

        // If both would flip an odd number of times, the signs cancel - canonicalize both without sign flip
        if (numFlips > 0 && denomFlips > 0 && (numFlips + denomFlips) % 2 === 0) {
            this.log(`[TRANSFORM] Both numerator and denominator have binary differences - signs cancel, canonicalizing both.`);

            // Canonicalize numerator binary differences
            let newNumerator = numerator;
            if (numerator.isOperatorNode && numerator.fn === 'add') {
                const numResult = this.canonicalizeBinaryDifference(numerator);
                if (numResult.transformed) {
                    newNumerator = numResult.result;
                }
            } else if (numerator.isOperatorNode && numerator.fn === 'multiply') {
                const numFactors = this.flatten(numerator, 'multiply');
                const newNumFactors = numFactors.map(factor => {
                    if (factor.isOperatorNode && factor.fn === 'add') {
                        const result = this.canonicalizeBinaryDifference(factor);
                        return result.transformed ? result.result : factor;
                    }
                    return factor;
                });
                newNumerator = this.rebuildTree(newNumFactors, 'multiply');
            }

            // Canonicalize denominator binary differences
            let newDenominator = denominator;
            if (denominator.isOperatorNode && denominator.fn === 'add') {
                const denomResult = this.canonicalizeBinaryDifference(denominator);
                if (denomResult.transformed) {
                    newDenominator = denomResult.result;
                }
            } else if (denominator.isOperatorNode && denominator.fn === 'multiply') {
                const denomFactors = this.flatten(denominator, 'multiply');
                const newDenomFactors = denomFactors.map(factor => {
                    if (factor.isOperatorNode && factor.fn === 'add') {
                        const result = this.canonicalizeBinaryDifference(factor);
                        return result.transformed ? result.result : factor;
                    }
                    return factor;
                });
                newDenominator = this.rebuildTree(newDenomFactors, 'multiply');
            }

            return new this.math.OperatorNode('divide', 'divide', [newNumerator, newDenominator]);
        }

        // Case 1: Denominator is simple addition
        if (denominator.isOperatorNode && denominator.fn === 'add') {
            const canonResult = this.canonicalizeBinaryDifference(denominator);
            if (canonResult.transformed) {
                this.log(`[TRANSFORM] Denominator binary difference canonicalized - flipping numerator sign.`);
                let newNumerator = new this.math.OperatorNode('multiply', 'multiply',
                    [new this.math.ConstantNode(-1), numerator]);
                // Canonicalize the new numerator to fold constants
                newNumerator = this._canonicalizeAddOrMultiply(newNumerator);
                let transformedNode = new this.math.OperatorNode('divide', 'divide',
                    [newNumerator, canonResult.result]);
                return transformedNode;
            }
        }
        // Case 2: Denominator is product with additions
        else if (denominator.isOperatorNode && denominator.fn === 'multiply') {
            const factors = this.flatten(denominator, 'multiply');
            const additionFactors = factors.filter(f => f.isOperatorNode && f.fn === 'add');

            if (additionFactors.length > 0) {
                let anyTransformed = false;
                let numeratorFlipCount = 0;

                const newFactors = factors.map(factor => {
                    if (factor.isOperatorNode && factor.fn === 'add') {
                        const canonResult = this.canonicalizeBinaryDifference(factor);
                        if (canonResult.transformed) {
                            anyTransformed = true;
                            if (canonResult.needsNumeratorFlip) {
                                numeratorFlipCount++;
                            }
                        }
                        return canonResult.result;
                    }
                    return factor;
                });

                if (anyTransformed) {
                    this.log(`[TRANSFORM] Denominator product contains ${numeratorFlipCount} binary difference(s).`);
                    let newNumerator = numerator;
                    if (numeratorFlipCount % 2 === 1) {
                        newNumerator = new this.math.OperatorNode('multiply', 'multiply',
                            [new this.math.ConstantNode(-1), numerator]);
                        // Canonicalize the new numerator to fold constants
                        newNumerator = this._canonicalizeAddOrMultiply(newNumerator);
                    }
                    const newDenominator = this.rebuildTree(newFactors, 'multiply');
                    let transformedNode = new this.math.OperatorNode('divide', 'divide',
                        [newNumerator, newDenominator]);
                    return transformedNode;
                }
            }
        }

        return node;
    }

    // ==================== MODULE 6: FACTOR COMPARISON ====================

    /**
     * Extract the sign and base form of a polynomial factor
     *
     * Examples:
     * - (5-x) → { sign: -1, baseForm: (x-5) }
     * - (x-5) → { sign: 1, baseForm: (x-5) }
     * - -(2x-3) → { sign: -1, baseForm: (2x-3) }
     * - (2x-3) → { sign: 1, baseForm: (2x-3) }
     */
    extractFactorSign(factor) {
        let sign = 1;
        let node = factor;

        // Check if this is a negative constant
        if (node.isConstantNode && node.value < 0) {
            sign = -1;
            node = new this.math.ConstantNode(-node.value);
        }

        // Check if this is multiplication with -1 factor
        if (node.isOperatorNode && node.fn === 'multiply') {
            const factors = this.flatten(node, 'multiply');
            const negOneIdx = factors.findIndex(f => f.isConstantNode && f.value === -1);
            if (negOneIdx !== -1) {
                sign *= -1;
                const otherFactors = factors.filter((_, i) => i !== negOneIdx);
                if (otherFactors.length === 1) {
                    node = otherFactors[0];
                } else if (otherFactors.length > 1) {
                    node = this.rebuildTree(otherFactors, 'multiply');
                }
            }
        }

        // Check if node is addition with negative leading term
        if (node.isOperatorNode && node.fn === 'add') {
            const terms = this.flatten(node, 'add');
            if (terms.length > 0) {
                // Find first term with variable
                let firstVarTerm = null;
                for (const term of terms) {
                    if (!term.isConstantNode) {
                        firstVarTerm = term;
                        break;
                    }
                }

                // If all constants, find first negative
                if (!firstVarTerm) {
                    firstVarTerm = terms.find(t =>
                        (t.isConstantNode && t.value < 0) ||
                        (t.isOperatorNode && t.fn === 'multiply' &&
                         this.flatten(t, 'multiply').some(f => f.isConstantNode && f.value < 0))
                    );
                }

                // Check if first variable term is negative
                if (firstVarTerm) {
                    let isNegative = false;
                    if (firstVarTerm.isConstantNode && firstVarTerm.value < 0) {
                        isNegative = true;
                    } else if (firstVarTerm.isOperatorNode && firstVarTerm.fn === 'multiply') {
                        const flatFactors = this.flatten(firstVarTerm, 'multiply');
                        isNegative = flatFactors.some(f => f.isConstantNode && f.value < 0);
                    }

                    if (isNegative) {
                        sign *= -1;
                        const negatedTerms = terms.map(term => {
                            if (term.isConstantNode) {
                                return new this.math.ConstantNode(-term.value);
                            }
                            if (term.isOperatorNode && term.fn === 'multiply') {
                                const flatTerms = this.flatten(term, 'multiply');
                                const negIdxes = flatTerms
                                    .map((f, i) => (f.isConstantNode && f.value < 0) ? i : -1)
                                    .filter(i => i !== -1);

                                if (negIdxes.length > 0) {
                                    const negIdx = negIdxes[0];
                                    const newFactors = [...flatTerms];
                                    newFactors[negIdx] = new this.math.ConstantNode(-newFactors[negIdx].value);
                                    if (newFactors.length === 1) return newFactors[0];
                                    return this.rebuildTree(newFactors, 'multiply');
                                } else {
                                    return new this.math.OperatorNode('multiply', 'multiply',
                                        [new this.math.ConstantNode(-1), term]);
                                }
                            }
                            return new this.math.OperatorNode('multiply', 'multiply',
                                [new this.math.ConstantNode(-1), term]);
                        });
                        // Sort negated terms for consistency before rebuilding
                        negatedTerms.sort(this.compareNodes.bind(this));
                        node = this.rebuildTree(negatedTerms, 'add');
                    }
                }
            }
        }

        return { sign, baseForm: node };
    }

    /**
     * Check if two addition nodes are negations of each other
     * Example: (5-x) and -(x-5) are negations
     */
    areSumsNegations(sum1, sum2) {
        if (!sum1.isOperatorNode || sum1.fn !== 'add') return false;
        if (!sum2.isOperatorNode || sum2.fn !== 'add') return false;

        const terms1 = this.flatten(sum1, 'add');
        const terms2 = this.flatten(sum2, 'add');

        if (terms1.length !== terms2.length) return false;

        const negatedTerms1 = terms1.map(term => {
            if (term.isOperatorNode && term.fn === 'multiply') {
                const flatTerms = this.flatten(term, 'multiply');
                const hasNegOne = flatTerms.some(t => t.isConstantNode && t.value === -1);
                if (hasNegOne) {
                    const withoutNegOne = flatTerms.filter(t => !(t.isConstantNode && t.value === -1));
                    if (withoutNegOne.length === 0) return this.astToString(new this.math.ConstantNode(1));
                    if (withoutNegOne.length === 1) return this.astToString(withoutNegOne[0]);
                    return this.astToString(this.rebuildTree(withoutNegOne, 'multiply'));
                }
            }
            if (term.isConstantNode) {
                return this.astToString(new this.math.ConstantNode(-term.value));
            }
            return this.astToString(new this.math.OperatorNode('multiply', 'multiply',
                [new this.math.ConstantNode(-1), term]));
        }).sort();

        const terms2Strings = terms2.map(term => this.astToString(term)).sort();

        return JSON.stringify(negatedTerms1) === JSON.stringify(terms2Strings);
    }

    /**
     * Compare two addition nodes for equality accounting for term order
     */
    compareAdditionNodes(add1, add2) {
        if (!add1.isOperatorNode || add1.fn !== 'add' ||
            !add2.isOperatorNode || add2.fn !== 'add') {
            return this.astToString(add1) === this.astToString(add2);
        }

        const terms1 = this.flatten(add1, 'add');
        const terms2 = this.flatten(add2, 'add');

        if (terms1.length !== terms2.length) return false;

        const str1 = terms1.map(t => this.astToString(t)).sort();
        const str2 = terms2.map(t => this.astToString(t)).sort();

        return JSON.stringify(str1) === JSON.stringify(str2);
    }

    /**
     * Normalize a factor by simplifying -1*(expr) patterns
     */
    normalizeFactorForComparison(factor) {
        if (factor.isOperatorNode && factor.fn === 'multiply') {
            const factors = this.flatten(factor, 'multiply');
            const negOneIdx = factors.findIndex(f =>
                (f.isConstantNode && f.value === -1) ||
                (f.isOperatorNode && f.fn === 'unaryMinus' &&
                 f.args[0].isConstantNode && f.args[0].value === 1)
            );
            if (negOneIdx !== -1) {
                const otherFactors = factors.filter((_, i) => i !== negOneIdx);
                if (otherFactors.length === 1) {
                    const expr = otherFactors[0];
                    if (expr.isOperatorNode && expr.fn === 'add') {
                        const terms = this.flatten(expr, 'add');
                        const negatedTerms = terms.map(term => {
                            if (term.isConstantNode) {
                                return new this.math.ConstantNode(-term.value);
                            }
                            if (term.isOperatorNode && term.fn === 'unaryMinus') {
                                return term.args[0];
                            }
                            if (term.isOperatorNode && term.fn === 'multiply') {
                                const flatTerms = this.flatten(term, 'multiply');
                                const negIdx = flatTerms.findIndex(f =>
                                    (f.isConstantNode && f.value < 0) ||
                                    (f.isOperatorNode && f.fn === 'unaryMinus')
                                );
                                if (negIdx !== -1) {
                                    const negTerm = flatTerms[negIdx];
                                    let positivized;
                                    if (negTerm.isConstantNode) {
                                        positivized = new this.math.ConstantNode(-negTerm.value);
                                    } else if (negTerm.isOperatorNode && negTerm.fn === 'unaryMinus') {
                                        positivized = negTerm.args[0];
                                    } else {
                                        return new this.math.OperatorNode('multiply', 'multiply',
                                            [new this.math.ConstantNode(-1), term]);
                                    }
                                    const newFactors = [...flatTerms];
                                    newFactors[negIdx] = positivized;
                                    if (newFactors.length === 1) return newFactors[0];
                                    return this.rebuildTree(newFactors, 'multiply');
                                } else {
                                    return new this.math.OperatorNode('multiply', 'multiply',
                                        [new this.math.ConstantNode(-1), term]);
                                }
                            }
                            return new this.math.OperatorNode('multiply', 'multiply',
                                [new this.math.ConstantNode(-1), term]);
                        });
                        // Sort negated terms for consistency
                        negatedTerms.sort(this.compareNodes.bind(this));
                        return this.rebuildTree(negatedTerms, 'add');
                    }
                }
            }
        }
        return factor;
    }

    /**
     * Compare two multiplicative expressions accounting for:
     * - Factor sign equivalences: -(x-a) ≡ (a-x)
     * - Commutativity: (x+a)(x+b) ≡ (x+b)(x+a)
     * - Factor reordering
     */
    compareMultiplicativeExpressions(ast1, ast2) {
        const extractMultiplicationFactors = (ast) => {
            if (ast.isOperatorNode && ast.fn === 'multiply') {
                return this.flatten(ast, 'multiply');
            }
            return [ast];
        };

        const factors1 = extractMultiplicationFactors(ast1).map(f => this.normalizeFactorForComparison(f));
        const factors2 = extractMultiplicationFactors(ast2).map(f => this.normalizeFactorForComparison(f));

        const extractedFactors1 = factors1.map(f => this.extractFactorSign(f));
        const extractedFactors2 = factors2.map(f => this.extractFactorSign(f));

        const createFactorSignature = (extracted) => {
            return extracted.map(f => ({
                baseStr: this.astToString(f.baseForm),
                baseAST: f.baseForm,
                sign: f.sign
            }));
        };

        const sigs1 = createFactorSignature(extractedFactors1);
        const sigs2 = createFactorSignature(extractedFactors2);

        // Calculate overall sign parity
        const sign1 = sigs1.reduce((acc, f) => acc * f.sign, 1);
        const sign2 = sigs2.reduce((acc, f) => acc * f.sign, 1);

        if (sign1 !== sign2) return false;

        // Filter out constant bases of value 1 (they only contribute to sign, already accounted for)
        const nonTrivial1 = sigs1.filter(s => !(s.baseAST.isConstantNode && Math.abs(s.baseAST.value) === 1));
        const nonTrivial2 = sigs2.filter(s => !(s.baseAST.isConstantNode && Math.abs(s.baseAST.value) === 1));

        // Sort signatures by string for consistent matching
        const sorted1 = [...nonTrivial1].sort((a, b) => a.baseStr.localeCompare(b.baseStr));
        const sorted2 = [...nonTrivial2].sort((a, b) => a.baseStr.localeCompare(b.baseStr));

        if (sorted1.length !== sorted2.length) return false;

        // Since overall signs match, we can compare base forms without requiring individual sign matches
        // This allows equivalences like: 2*(5x-3) ≡ (-2)*(-(5x-3))
        for (let i = 0; i < sorted1.length; i++) {
            if (sorted1[i].baseStr === sorted2[i].baseStr) {
                continue;
            }

            // Try deeper AST comparison for additions
            if (sorted1[i].baseAST.isOperatorNode && sorted1[i].baseAST.fn === 'add' &&
                sorted2[i].baseAST.isOperatorNode && sorted2[i].baseAST.fn === 'add') {
                if (this.compareAdditionNodes(sorted1[i].baseAST, sorted2[i].baseAST)) {
                    continue;
                }
            }

            return false;
        }

        return true;
    }

    /**
     * Expand a multiplication expression for fallback comparison
     */
    expandAndGetTerms(ast) {
        try {
            const mathExpr = this.astToString(ast);
            const expanded = this.math.simplify(mathExpr);

            if (expanded.isOperatorNode && expanded.fn === 'add') {
                return this.flatten(expanded, 'add').map(t => this.astToString(t)).sort();
            } else {
                return [this.astToString(expanded)];
            }
        } catch (e) {
            return null;
        }
    }

    // ==================== MODULE 7: FINAL COMPARISON ====================

    /**
     * Calculate the Greatest Common Divisor of two integers
     * Used to check if a fraction is in lowest terms
     */
    gcd(a, b) {
        a = Math.abs(a);
        b = Math.abs(b);
        while (b !== 0) {
            const temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    /**
     * Check if a fraction (division node) is in simplified form
     * A fraction is simplified if GCD(numerator, denominator) === 1
     *
     * Examples:
     * - 3/10 → simplified (GCD(3,10) = 1) → true
     * - 6/20 → unsimplified (GCD(6,20) = 2) → false
     * - 12/4 → unsimplified (GCD(12,4) = 4) → false
     * - 3/1 → simplified (GCD(3,1) = 1) → true
     */
    isFractionSimplified(ast) {
        if (!ast || !ast.isOperatorNode || ast.fn !== 'divide' || ast.args.length !== 2) {
            return true; // Not a fraction, so not "unsimplified"
        }

        const numerator = ast.args[0];
        const denominator = ast.args[1];

        // Both must be integer constants
        if (!numerator.isConstantNode || !denominator.isConstantNode) {
            return true; // Can't determine, assume simplified
        }

        const numValue = numerator.value;
        const denomValue = denominator.value;

        // Both must be integers
        if (!Number.isInteger(numValue) || !Number.isInteger(denomValue)) {
            return true; // Decimal fractions assumed simplified
        }

        // Denominator cannot be zero
        if (denomValue === 0) {
            return false; // Invalid fraction
        }

        // Calculate GCD
        const g = this.gcd(numValue, denomValue);

        // Fraction is simplified if GCD === 1
        return g === 1;
    }

    /**
     * Check if two numeric values are equivalent within floating-point precision
     * Handles: decimals, fractions, and their floating-point representations
     *
     * Examples:
     * - 0.3 ≡ 0.30000000001 (with tolerance)
     * - 3/10 ≡ 0.3 (both evaluate to same value)
     */
    areNumericValuesEquivalent(val1, val2, epsilon = 1e-10) {
        if (typeof val1 !== 'number' || typeof val2 !== 'number') {
            return false;
        }
        return Math.abs(val1 - val2) < epsilon;
    }

    /**
     * Extract the numeric value from an AST node
     * Handles: ConstantNode values, division nodes (fractions)
     *
     * IMPORTANT: Only extracts values from SIMPLIFIED fractions
     * Unsimplified fractions (e.g., 12/4, 6/20) return null to block matching
     *
     * Examples:
     * - ConstantNode(0.3) → { value: 0.3, isWholeNumber: false, isFromFraction: false }
     * - ConstantNode(3) → { value: 3, isWholeNumber: true, isFromFraction: false }
     * - Division node 3/10 (simplified) → { value: 0.3, isWholeNumber: false, isFromFraction: true }
     * - Division node 3/1 (simplified) → { value: 3, isWholeNumber: true, isFromFraction: true }
     * - Division node 12/4 (unsimplified) → null (blocked)
     * - Division node 6/20 (unsimplified) → null (blocked)
     *
     * Returns: { value: number, isWholeNumber: boolean, isFromFraction: boolean } or null
     */
    extractNumericValue(ast) {
        if (!ast || !ast.type) {
            return null;
        }

        // Case 1: Direct constant
        if (ast.isConstantNode && typeof ast.value === 'number') {
            const isWholeNumber = Number.isInteger(ast.value);
            return { value: ast.value, isWholeNumber: isWholeNumber, isFromFraction: false };
        }

        // Case 2: Division node (fraction) - evaluate numerator / denominator
        if (ast.isOperatorNode && ast.fn === 'divide' && ast.args.length === 2) {
            const numerator = ast.args[0];
            const denominator = ast.args[1];

            // Both must be constants for us to evaluate
            if (numerator.isConstantNode && typeof numerator.value === 'number' &&
                denominator.isConstantNode && typeof denominator.value === 'number') {
                if (denominator.value === 0) {
                    return null; // Division by zero
                }

                // CRITICAL: Only accept simplified fractions
                if (!this.isFractionSimplified(ast)) {
                    return null; // Block unsimplified fractions
                }

                const resultValue = numerator.value / denominator.value;
                const isWholeNumber = Number.isInteger(resultValue);
                return { value: resultValue, isWholeNumber: isWholeNumber, isFromFraction: true };
            }
        }

        // Case 3: Unary minus with numeric child
        if (ast.isOperatorNode && ast.fn === 'unaryMinus' && ast.args.length === 1) {
            const innerExtraction = this.extractNumericValue(ast.args[0]);
            if (innerExtraction !== null) {
                return {
                    value: -innerExtraction.value,
                    isWholeNumber: innerExtraction.isWholeNumber,
                    isFromFraction: innerExtraction.isFromFraction
                };
            }
        }

        return null;
    }

    /**
     * Compare two canonical ASTs for equality
     * Handles: string equality, division/fraction comparison, multiplication sign equivalences, numeric equivalence
     *
     * Numeric matching rules:
     * - Decimals can match simplified fractions (e.g., 0.3 = 3/10)
     * - Whole numbers CANNOT match fractions (e.g., 3 ≠ 3/1)
     * - Unsimplified fractions are rejected (e.g., 0.3 ≠ 6/20)
     */
    astEquals(ast1, ast2) {
        const str1 = this.astToString(ast1);
        const str2 = this.astToString(ast2);
        const areEqual = str1 === str2;

        if (areEqual) {
            this.log(`[COMPARE] Comparing final strings:\n    - A: ${str1}\n    - B: ${str2}\n    - Equal: ${areEqual}`);
            return true;
        }

        // Check for numeric equivalence (e.g., 0.3 ≡ 3/10)
        const extraction1 = this.extractNumericValue(ast1);
        const extraction2 = this.extractNumericValue(ast2);
        if (extraction1 !== null && extraction2 !== null) {
            // Guard: prevent whole numbers from matching fractions (e.g., 3 ≠ 3/1)
            // Allow decimals to match simplified fractions (e.g., 0.1 ≡ 1/10)
            if (extraction1.isWholeNumber && extraction2.isFromFraction) {
                this.log(`[COMPARE] Numeric comparison blocked: whole number cannot match fraction\n    - A: ${str1} (whole number)\n    - B: ${str2} (from fraction)`);
                // Fall through to other comparison methods
            } else if (extraction2.isWholeNumber && extraction1.isFromFraction) {
                this.log(`[COMPARE] Numeric comparison blocked: whole number cannot match fraction\n    - A: ${str1} (from fraction)\n    - B: ${str2} (whole number)`);
                // Fall through to other comparison methods
            } else {
                const numericEqual = this.areNumericValuesEquivalent(extraction1.value, extraction2.value);
                if (numericEqual) {
                    this.log(`[COMPARE] Comparing numeric values:\n    - A: ${str1} → ${extraction1.value}\n    - B: ${str2} → ${extraction2.value}\n    - Numerically Equal: true`);
                    return true;
                }
            }
        }

        // Try deeper comparison for complex cases
        if (ast1.isOperatorNode && ast2.isOperatorNode) {
            // Case 1: Both are divisions
            if (ast1.fn === 'divide' && ast2.fn === 'divide') {
                const num1 = ast1.args[0];
                const denom1 = ast1.args[1];
                const num2 = ast2.args[0];
                const denom2 = ast2.args[1];

                const numeratorsEqual = this.astEquals(num1, num2);
                const denominatorsEqual = this.astEquals(denom1, denom2);

                if (numeratorsEqual && denominatorsEqual) {
                    this.log(`[COMPARE] Comparing final strings:\n    - A: ${str1}\n    - B: ${str2}\n    - Fractions Equal: true`);
                    return true;
                }
            }

            // Case 2: Both are multiplications
            if (ast1.fn === 'multiply' && ast2.fn === 'multiply') {
                const signaturesEqual = this.compareMultiplicativeExpressions(ast1, ast2);

                if (!signaturesEqual) {
                    this.log(`[COMPARE] Direct factor comparison failed, trying polynomial expansion...`);
                    const terms1 = this.expandAndGetTerms(ast1);
                    const terms2 = this.expandAndGetTerms(ast2);

                    if (terms1 && terms2) {
                        const expandedEqual = JSON.stringify(terms1) === JSON.stringify(terms2);
                        if (expandedEqual) {
                            this.log(`[COMPARE] Expressions are algebraically equivalent (same expanded form)`);
                            this.log(`[COMPARE] Comparing final strings:\n    - A: ${str1}\n    - B: ${str2}\n    - Expanded Equal: true`);
                            return true;
                        }
                    }
                }

                this.log(`[COMPARE] Comparing final strings:\n    - A: ${str1}\n    - B: ${str2}\n    - String Equal: ${areEqual}\n    - Signature Equal: ${signaturesEqual}`);
                return signaturesEqual;
            }
        }

        this.log(`[COMPARE] Comparing final strings:\n    - A: ${str1}\n    - B: ${str2}\n    - Equal: ${areEqual}`);
        return areEqual;
    }

    // ==================== MODULE 8: MAIN ORCHESTRATOR ====================

    /**
     * Full pipeline: Parse LaTeX → Build AST → Validate Simplification →
     * Canonicalize → Compare with detailed logging
     */
    compareExpressions(userLatex, correctLatex) {
        try {
            this.log(`[START] Comparing expressions:`);
            this.log(`  User LaTeX:    "${userLatex}"`);
            this.log(`  Correct LaTeX: "${correctLatex}"`);

            // Parse LaTeX to Math.js expressions
            const userExpr = this.latexToMathJS(userLatex);
            this.log(`[PARSE] User LaTeX to Math.js: "${userExpr}"`);
            const correctExpr = this.latexToMathJS(correctLatex);
            this.log(`[PARSE] Correct LaTeX to Math.js: "${correctExpr}"`);

            // Build ASTs
            const userAST = this.math.parse(userExpr);
            const correctAST = this.math.parse(correctExpr);

            // Check for invalid ASTs (e.g., from unparseable expressions with invalid characters)
            if (!userAST || (userAST.type === 'ConstantNode' && userAST.value === undefined)) {
                this.log(`[REJECT] User answer contains invalid expression`);
                return false;
            }
            if (!correctAST || (correctAST.type === 'ConstantNode' && correctAST.value === undefined)) {
                this.log(`[REJECT] Correct answer contains invalid expression`);
                return false;
            }

            this.log(`[AST] Initial User AST:    `, this.astToString(userAST));
            this.log(`[AST] Initial Correct AST: `, this.astToString(correctAST));

            // Check for unsimplified patterns BEFORE canonicalization
            this.log(`\n[SIMPLIFICATION CHECK]`);
            const userSimplification = this.hasUnsimplifiedConstants(userAST);
            if (userSimplification.hasIssues) {
                this.log(`[REJECT] User answer contains unsimplified expressions:`);
                userSimplification.issues.forEach(issue => this.log(`  - ${issue}`));
                this.log(`[RESULT] Final Match: false (not fully simplified)\n`);
                return false;
            }
            this.log(`[OK] User answer appears to be fully simplified`);

            // Canonicalize both expressions
            this.log(`\n[CANONICALIZE USER]`);
            const userCanonical = this.toCanonicalForm(userAST);
            this.log(`\n[CANONICALIZE CORRECT]`);
            const correctCanonical = this.toCanonicalForm(correctAST);

            // Log canonical forms
            this.log(`\n[RESULT] User Canonical Form:   `, this.astToString(userCanonical));
            this.log(`[RESULT] Correct Canonical Form:`, this.astToString(correctCanonical));

            // Final comparison
            const result = this.astEquals(userCanonical, correctCanonical);
            this.log(`[RESULT] Final Match: ${result}\n`);
            return result;

        } catch (error) {
            console.error('[FATAL ERROR] Error during expression comparison.');
            console.error('  Message:', error.message);
            console.error('  Stack:', error.stack);
            return false;
        }
    }
}

if (typeof module !== 'undefined' && module.exports) {
    const math = require('mathjs');
    module.exports = AlgebraEngine;
}
