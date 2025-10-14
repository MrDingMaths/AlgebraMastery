// algebra-modules/algebraEngine.js

/**
 * ================================================================================
 * AlgebraEngine - Expression Comparison and Validation System
 * ================================================================================
 *
 * PRIMARY GOAL:
 * -------------
 * Check if user input matches the given answer through direct structural comparison.
 * Expressions must be in the same form (factorized vs. expanded) and fully simplified.
 *
 * CORE PRINCIPLES:
 * ----------------
 * 1. ✓ ACCEPT: Expressions that are commutatively equivalent
 *    Example: (x+a)(x+b) = (x+b)(x+a) ✓
 *    Example: -(x+a)(x+b) = -(x+b)(x+a) ✓
 *
 * 2. ✗ REJECT: Expressions that are not fully simplified
 *    Example: 2x + 3x ≠ 5x
 *
 * 3. ✗ REJECT: Expressions in the wrong form (factorized vs. expanded)
 *    Example: (x+a)(x+b) ≠ x² + (a+b)x + ab
 *
 * COMPARISON STRATEGY:
 * --------------------
 * 1. Parse LaTeX into Math.js expressions
 * 2. Convert to Abstract Syntax Trees (AST)
 * 3. Apply canonicalization transformations to create a standard form
 * 4. Compare canonical ASTs using string equality
 *
 * CANONICALIZATION PROCESS:
 * -------------------------
 * The canonicalization process transforms equivalent expressions into identical
 * canonical forms through a series of deterministic transformations:
 *
 * Step 1: PRE-PROCESSING (for multiplication nodes only)
 *   - Expand unaryMinus children before recursive processing
 *   - Example: multiply([unaryMinus((x+a)), (x+b)])
 *             → multiply([-1, (x+a), (x+b)])
 *   - Purpose: Ensures all multiplication factors are visible together for
 *              proper commutativity handling and distribution decisions
 *
 * Step 2: RECURSIVE CANONICALIZATION (bottom-up tree traversal)
 *   All child nodes are canonicalized before processing the parent.
 *
 *   2a. Subtraction → Addition:
 *       - Transform: a - b → a + (unaryMinus(b))
 *       - Then recursively canonicalize the new addition
 *
 *   2b. Unary Minus → Multiplication:
 *       - Transform: -a → -1 * a
 *       - Falls through to multiplication handling (no immediate recursion)
 *
 *   2c. Flatten Commutative Operations (addition & multiplication):
 *       - Recursively flatten nested operations of the same type
 *       - Example: (a + (b + c)) → [a, b, c]
 *       - Example: (a * (b * c)) → [a, b, c]
 *
 *   2d. Constant Folding:
 *       - Multiplication: 2 * 3 * x → 6 * x
 *       - Addition: 2 + 3 + x → 5 + x
 *
 *   2e. Identity Elimination:
 *       - Multiplication: 1 * x → x
 *       - Addition: 0 + x → x
 *
 *   2f. Selective Distributive Property for -1:
 *       This is the most complex rule, designed to handle multiple edge cases:
 *
 *       Rule A: Single addition factor with -1
 *         - When: -1 * (sum) with no other factors being additions
 *         - Action: Always distribute
 *         - Example: -1 * (x + a) → (-1*x) + (-1*a)
 *         - Purpose: Standard simplification
 *
 *       Rule B: Multiple addition factors WITHOUT negatives
 *         - When: -1 * (a+x) * (b+x) where sums contain no (-1*...) terms
 *         - Action: DO NOT distribute (preserve commutativity)
 *         - Example: -(x+a)(x+b) keeps -1 as separate factor
 *         - Purpose: Ensures -(x+a)(x+b) and -(x+b)(x+a) match after sorting
 *
 *       Rule C: Multiple addition factors WITH negatives (double negative case)
 *         - When: -1 * (...) * (sum) where sum contains terms like (-1*a)
 *         - Action: Distribute into the sum with negatives
 *         - Example: -1 * ((-1*a) + x) → (a + (-1*x))
 *         - Purpose: Simplifies double negatives to match forms like (a-x)
 *         - Key case: Makes (a-x)(x-b) match -(x-a)(x-b)
 *
 *   2g. Fraction-Multiplication Normalization:
 *       - Transform: (a*b)/c → (a/c)*b
 *       - Ensures consistent fraction form
 *
 *   2h. Commutative Sorting:
 *       - Sort all terms/factors alphabetically by their string representation
 *       - Example: (b + a) → (a + b)
 *       - Example: x * 2 → 2 * x
 *       - Purpose: Ensures unique canonical ordering
 *
 * Step 3: COMPARISON
 *   - Convert both canonical ASTs to strings
 *   - Compare strings for exact equality
 *
 * KEY EXAMPLES:
 * -------------
 * Example 1: Commutativity in factorized forms
 *   Input:  -(x+a)(x+b) vs -(x+b)(x+a)
 *   Step 1: Expand unaryMinus: [-1, (x+a), (x+b)] vs [-1, (x+b), (x+a)]
 *   Step 2: Canonicalize sums: [-1, (a+x), (b+x)] vs [-1, (a+x), (b+x)]
 *   Step 3: No distribution (Rule B - no negatives in sums)
 *   Step 4: Sort factors: [-1, (a+x), (b+x)] = [-1, (a+x), (b+x)] ✓ MATCH
 *
 * Example 2: Double negative simplification
 *   Input:  (a-x)(x-b) vs -(x-a)(x-b)
 *   First:  (a-x) → (a + (-1*x)) → ((-1*x) + a)
 *           (x-b) → (x + (-1*b)) → ((-1*b) + x)
 *           Result: (((-1*x) + a) * ((-1*b) + x))
 *   Second: Expand unaryMinus: [-1, (x-a), (x-b)]
 *           (x-a) → (x + (-1*a)) → ((-1*a) + x)
 *           (x-b) → ((-1*b) + x)
 *           After canonicalization: [-1, ((-1*a) + x), ((-1*b) + x)]
 *           Detect: ((-1*a) + x) contains negative term
 *           Distribute (Rule C): -1 * ((-1*a) + x) → (a + (-1*x)) → ((-1*x) + a)
 *           Result: (((-1*x) + a) * ((-1*b) + x)) ✓ MATCH
 *
 * DEBUGGING:
 * ----------
 * Verbose console logging traces the entire canonicalization process.
 * Use debug-algebra-engine.html to test and visualize transformations.
 *
 * ================================================================================
 */
class AlgebraEngine {
    constructor() {
        this.logDepth = 0;
    }

    log(message, ...args) {
        console.log(`${'  '.repeat(this.logDepth)}${message}`, ...args);
    }
    
    astToString(node) {
        if (!node) return 'null';
        switch (node.type) {
            case 'ConstantNode':
                return node.value.toString();
            case 'SymbolNode':
                return node.name;
            case 'OperatorNode':
                const opMap = { 'add': '+', 'subtract': '-', 'multiply': '*', 'divide': '/', 'pow': '^' };
                const op = opMap[node.fn] || node.fn;
                const args = node.args.map(arg => this.astToString(arg));
                if (node.isUnary()) return `${op}(${args[0]})`;
                return `(${args.join(` ${op} `)})`;
            case 'ParenthesisNode':
                return `(${this.astToString(node.content)})`;
            case 'FunctionNode':
                 return `${node.name}(${node.args.map(arg => this.astToString(arg)).join(', ')})`;
            default:
                return node.toString();
        }
    }

    compareExpressions(userLatex, correctLatex) {
        try {
            this.log(`[START] Comparing expressions:`);
            this.log(`  User LaTeX:    "${userLatex}"`);
            this.log(`  Correct LaTeX: "${correctLatex}"`);

            const userExpr = this.latexToMathJS(userLatex);
            this.log(`[PARSE] User LaTeX to Math.js: "${userExpr}"`);
            const correctExpr = this.latexToMathJS(correctLatex);
            this.log(`[PARSE] Correct LaTeX to Math.js: "${correctExpr}"`);

            const userAST = math.parse(userExpr);
            const correctAST = math.parse(correctExpr);
            this.log(`[AST] Initial User AST:    `, this.astToString(userAST));
            this.log(`[AST] Initial Correct AST: `, this.astToString(correctAST));

            this.log(`\n[CANONICALIZE USER]`);
            const userCanonical = this.toCanonicalForm(userAST);
            this.log(`\n[CANONICALIZE CORRECT]`);
            const correctCanonical = this.toCanonicalForm(correctAST);

            this.log(`\n[RESULT] User Canonical Form:   `, this.astToString(userCanonical));
            this.log(`[RESULT] Correct Canonical Form:`, this.astToString(correctCanonical));

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

    toCanonicalForm(ast) {
        this.logDepth = 0;
        const canonicalizeNode = (node) => {
            if (!node || !node.type) return node;
            this.log(`[ENTER] Node: ${this.astToString(node)}`);
            this.logDepth++;

            let transformedNode = node;

            // Special handling for multiply nodes: expand unaryMinus children BEFORE canonicalizing
            if (transformedNode.isOperatorNode && transformedNode.fn === 'multiply') {
                const expandedArgs = [];
                for (const arg of transformedNode.args) {
                    if (arg.isOperatorNode && arg.fn === 'unaryMinus') {
                        // Convert -(expr) to -1 * expr inline
                        expandedArgs.push(new math.ConstantNode(-1));
                        expandedArgs.push(arg.args[0]);
                    } else {
                        expandedArgs.push(arg);
                    }
                }
                if (expandedArgs.length !== transformedNode.args.length) {
                    // We expanded some unaryMinus nodes, rebuild the multiply
                    transformedNode = new math.OperatorNode('multiply', 'multiply', expandedArgs);
                }
            }

            if (transformedNode.args) {
                transformedNode.args = transformedNode.args.map(canonicalizeNode);
            }
            if (transformedNode.content) {
                transformedNode.content = canonicalizeNode(transformedNode.content);
            }

            switch (transformedNode.type) {
                case 'OperatorNode':
                    if (transformedNode.fn === 'subtract') {
                        const negTerm = new math.OperatorNode('unaryMinus', 'unaryMinus', [transformedNode.args[1]]);
                        transformedNode = new math.OperatorNode('add', 'add', [transformedNode.args[0], negTerm]);
                        this.logDepth--; return canonicalizeNode(transformedNode);
                    }
                    if (transformedNode.fn === 'unaryMinus') {
                        const negOne = new math.ConstantNode(-1);
                        transformedNode = new math.OperatorNode('multiply', 'multiply', [negOne, transformedNode.args[0]]);
                        // Fall through to multiplication handling below
                    }
                    if (transformedNode.fn === 'add' || transformedNode.fn === 'multiply') {
                        let terms = this.flatten(transformedNode, transformedNode.fn);

                        if (transformedNode.fn === 'multiply') {
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

                            // Constant folding: multiply all constants together
                            const constants = terms.filter(t => t.isConstantNode);
                            const nonConstants = terms.filter(t => !t.isConstantNode);

                            if (constants.length > 1) {
                                this.log(`[TRANSFORM] Folding ${constants.length} constants in multiplication.`);
                                const product = constants.reduce((acc, c) => acc * c.value, 1);
                                if (product !== 1) {
                                    terms = [new math.ConstantNode(product), ...nonConstants];
                                } else {
                                    terms = nonConstants.length > 0 ? nonConstants : [new math.ConstantNode(1)];
                                }
                            }

                            // Identity elimination: remove 1 from multiplication
                            const oneNode = terms.find(t => t.isConstantNode && t.value === 1);
                            if (oneNode && terms.length > 1) {
                                this.log(`[TRANSFORM] Removing identity 1 from multiplication.`);
                                terms = terms.filter(t => !(t.isConstantNode && t.value === 1));
                            }

                            const negOneNode = terms.find(t => t.isConstantNode && t.value === -1);
                            const addNode = terms.find(t => t.isOperatorNode && t.fn === 'add');
                            const fractionNode = terms.find(t => t.isOperatorNode && t.fn === 'divide');

                            // Selective distributive property for -1:
                            // 1. Always distribute if there's exactly ONE addition node
                            // 2. For multiple addition nodes: distribute into those containing negative terms
                            //    to simplify double negatives like: -1 * ((-1*a) + x) → (a + (-1*x))
                            // Example: -(x+a)(x+b) stays as -1*(sum1)*(sum2) for commutativity
                            // But: -(x-a)(x-b) → distribute into (x-a) to match (a-x)(x-b)
                            if (negOneNode && addNode) {
                                const additionNodes = terms.filter(t => t.isOperatorNode && t.fn === 'add');

                                if (additionNodes.length === 1) {
                                    // Single addition node: always distribute
                                    this.log(`[TRANSFORM] Applying distributive property for -1 (single addition factor).`);
                                    const otherTerms = terms.filter(t => t !== negOneNode && t !== addNode);
                                    const addTerms = this.flatten(addNode, 'add');
                                    const distributedTerms = addTerms.map(term => new math.OperatorNode('multiply', 'multiply', [new math.ConstantNode(-1), term]));
                                    let newExpr = this.rebuildTree(distributedTerms, 'add');
                                    if (otherTerms.length > 0) {
                                        newExpr = this.rebuildTree([...otherTerms, newExpr], 'multiply');
                                    }
                                    this.logDepth--; return canonicalizeNode(newExpr);
                                } else {
                                    // Multiple addition nodes: check if any contain negative terms
                                    const nodesWithNegatives = additionNodes.filter(addNode => {
                                        const addTerms = this.flatten(addNode, 'add');
                                        return addTerms.some(term =>
                                            term.isOperatorNode &&
                                            term.fn === 'multiply' &&
                                            term.args.some(arg => arg.isConstantNode && arg.value === -1)
                                        );
                                    });

                                    if (nodesWithNegatives.length > 0) {
                                        // Distribute into the first addition node with negatives to simplify
                                        const targetNode = nodesWithNegatives[0];
                                        this.log(`[TRANSFORM] Applying distributive property for -1 (to simplify double negatives in one factor).`);
                                        const otherTerms = terms.filter(t => t !== negOneNode && t !== targetNode);
                                        const addTerms = this.flatten(targetNode, 'add');
                                        const distributedTerms = addTerms.map(term => new math.OperatorNode('multiply', 'multiply', [new math.ConstantNode(-1), term]));
                                        let newExpr = this.rebuildTree(distributedTerms, 'add');
                                        if (otherTerms.length > 0) {
                                            newExpr = this.rebuildTree([...otherTerms, newExpr], 'multiply');
                                        }
                                        this.logDepth--; return canonicalizeNode(newExpr);
                                    } else {
                                        this.log(`[SKIP] Distributive property skipped: ${additionNodes.length} addition factors without negatives (preserving commutativity).`);
                                    }
                                }
                            }

                            if (negOneNode && fractionNode) {
                                this.log(`[TRANSFORM] Merging -1 into fraction numerator.`);
                                const otherTerms = terms.filter(t => t !== negOneNode && t !== fractionNode);
                                const newNumerator = new math.OperatorNode('multiply', 'multiply', [new math.ConstantNode(-1), fractionNode.args[0]]);
                                let newExpr = new math.OperatorNode('divide', 'divide', [newNumerator, fractionNode.args[1]]);
                                if (otherTerms.length > 0) {
                                    newExpr = this.rebuildTree([...otherTerms, newExpr], 'multiply');
                                }
                                this.logDepth--; return canonicalizeNode(newExpr);
                            }
                        }

                        if (transformedNode.fn === 'add') {
                            // Constant folding: add all constants together
                            const constants = terms.filter(t => t.isConstantNode);
                            const nonConstants = terms.filter(t => !t.isConstantNode);

                            if (constants.length > 1) {
                                this.log(`[TRANSFORM] Folding ${constants.length} constants in addition.`);
                                const sum = constants.reduce((acc, c) => acc + c.value, 0);
                                if (sum !== 0) {
                                    terms = [...nonConstants, new math.ConstantNode(sum)];
                                } else {
                                    terms = nonConstants.length > 0 ? nonConstants : [new math.ConstantNode(0)];
                                }
                            }

                            // Identity elimination: remove 0 from addition
                            const zeroNode = terms.find(t => t.isConstantNode && t.value === 0);
                            if (zeroNode && terms.length > 1) {
                                this.log(`[TRANSFORM] Removing identity 0 from addition.`);
                                terms = terms.filter(t => !(t.isConstantNode && t.value === 0));
                            }
                        }

                        terms.sort(this.compareNodes.bind(this));
                        transformedNode = this.rebuildTree(terms, transformedNode.fn);
                    }
                    
                    if (transformedNode.fn === 'divide') {
                        const numerator = transformedNode.args[0];
                        const denominator = transformedNode.args[1];
                        
                        // Handle fraction-multiplication normalization: (a*b)/c -> (a/c)*b
                        if (numerator.isOperatorNode && numerator.fn === 'multiply') {
                            this.log(`[TRANSFORM] Normalizing fraction with multiplication in numerator.`);
                            const multiplyTerms = this.flatten(numerator, 'multiply');
                            
                            if (multiplyTerms.length > 1) {
                                // Take first factor and create (first_factor/denominator)
                                const firstFactor = multiplyTerms[0];
                                const remainingFactors = multiplyTerms.slice(1);
                                
                                const newFraction = new math.OperatorNode('divide', 'divide', [firstFactor, denominator]);
                                let newExpr;
                                
                                if (remainingFactors.length === 1) {
                                    newExpr = new math.OperatorNode('multiply', 'multiply', [newFraction, remainingFactors[0]]);
                                } else {
                                    const remainingMultiply = this.rebuildTree(remainingFactors, 'multiply');
                                    newExpr = new math.OperatorNode('multiply', 'multiply', [newFraction, remainingMultiply]);
                                }
                                
                                this.logDepth--; return canonicalizeNode(newExpr);
                            }
                        }
                    }
                    break;
                case 'ParenthesisNode':
                    transformedNode = transformedNode.content;
                    break;
            }
            this.logDepth--;
            this.log(`[EXIT] Node: ${this.astToString(transformedNode)}`);
            return transformedNode;
        };
        return canonicalizeNode(ast.clone());
    }

    flatten(node, op) {
        const terms = [];
        const collect = (n) => {
            if (n.isOperatorNode && n.fn === op) n.args.forEach(collect);
            else terms.push(n);
        };
        collect(node);
        return terms;
    }

    rebuildTree(terms, op) {
        if (terms.length === 1) return terms[0];
        let tree = new math.OperatorNode(op, op, [terms[0], terms[1]]);
        for (let i = 2; i < terms.length; i++) {
            tree = new math.OperatorNode(op, op, [tree, terms[i]]);
        }
        return tree;
    }

    compareNodes(a, b) {
        return this.astToString(a).localeCompare(this.astToString(b));
    }

    astEquals(ast1, ast2) {
        const str1 = this.astToString(ast1);
        const str2 = this.astToString(ast2);
        const areEqual = str1 === str2;
        this.log(`[COMPARE] Comparing final strings:\n    - A: ${str1}\n    - B: ${str2}\n    - Equal: ${areEqual}`);
        return areEqual;
    }

    latexToMathJS(latex) {
        let expr = latex.trim();
        const superscriptMap = {'²':'^2','³':'^3','⁴':'^4','⁵':'^5','⁶':'^6','⁷':'^7','⁸':'^8','⁹':'^9','¹':'^1','⁰':'^0'};
        for (const [unicode, replacement] of Object.entries(superscriptMap)) {
            expr = expr.replace(new RegExp(unicode, 'g'), replacement);
        }
        expr = expr.replace(/\\left|\\right/g, '');
        expr = expr.replace(/\\times|\\cdot|×/g, '*');
        expr = expr.replace(/÷/g, '/');
        expr = expr.replace(/\\sqrt\[(\d+)\]\{([^{}]*(?:\{[^{}]*\}[^{}]*)*)\}/g, '(($2)^(1/$1))');
        expr = expr.replace(/\\sqrt\{([^{}]*(?:\{[^{}]*\}[^{}]*)*)\}/g, 'sqrt($1)');
        while (expr.includes('\\frac')) {
             expr = expr.replace(/\\frac\{([^{}]*(?:\{[^{}]*\}[^{}]*)*)\}\{([^{}]*(?:\{[^{}]*\}[^{}]*)*)\}/g, '(($1)/($2))');
        }
        expr = expr.replace(/\^{([^}]*)}/g, '^($1)');
        expr = expr.replace(/\\/g, '');
        expr = expr.replace(/\s+/g, '');
        return this.insertImpliedMultiplication(expr);
    }
    
    insertImpliedMultiplication(expr) {
        let result = '';
        if (expr.length === 0) return '';
        for (let i = 0; i < expr.length; i++) {
            const char = expr[i];
            result += char;
            if (i === expr.length - 1) break;
            const nextChar = expr[i + 1];
            if (char.match(/\d/) && nextChar.match(/[a-zA-Z(]/)) result += '*';
            else if (char === ')' && nextChar.match(/[a-zA-Z\d(]/)) result += '*';
            else if (char.match(/[a-zA-Z]/) && nextChar.match(/[a-zA-Z(]/)) result += '*';
        }
        return result;
    }
}

if (typeof module !== 'undefined' && module.exports) {
    const math = require('mathjs');
    module.exports = AlgebraEngine;
}