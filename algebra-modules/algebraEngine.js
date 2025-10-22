// algebra-modules/algebraEngine.js
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

    /**
     * Check if an AST contains unsimplified constant patterns.
     * Returns an object with:
     * - hasIssues: boolean indicating if unsimplified patterns found
     * - issues: array of descriptive strings about what needs simplification
     */
    hasUnsimplifiedConstants(ast) {
        const issues = [];

        const checkNode = (node) => {
            if (!node || !node.type) return;

            // Helper to collect all constants from a node tree (handles both add and subtract)
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

            // Check addition/subtraction nodes for multiple constants
            if (node.isOperatorNode && (node.fn === 'add' || node.fn === 'subtract')) {
                const constants = collectConstants(node);

                if (constants.length >= 2) {
                    issues.push(`Multiple constants in addition/subtraction should be combined`);
                }
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
                            // STEP 0: Normalize negated sums FIRST
                            // Check for addition factors that are negations of each other
                            // Example: (5-x) vs -(x-5) should both become -(x-5) with an extra -1 factor
                            const additionNodes = terms.filter(t => t.isOperatorNode && t.fn === 'add');
                            if (additionNodes.length >= 2) {
                                for (let i = 0; i < additionNodes.length; i++) {
                                    for (let j = i + 1; j < additionNodes.length; j++) {
                                        if (this.areSumsNegations(additionNodes[i], additionNodes[j])) {
                                            this.log(`[TRANSFORM] Detected negated sums - normalizing to canonical form.`);
                                            // Rebuild the terms list, adding a -1 factor
                                            const otherTerms = terms.filter(t => t !== additionNodes[i]);
                                            const hasNegOne = otherTerms.some(t => t.isConstantNode && t.value === -1);
                                            if (!hasNegOne) {
                                                terms = [new math.ConstantNode(-1), ...otherTerms];
                                            } else {
                                                // Already have -1, so the negations cancel
                                                terms = otherTerms.filter(t => !(t.isConstantNode && t.value === -1));
                                            }
                                            // Recursively canonicalize the negated sum and rebuild
                                            transformedNode = this.rebuildTree(terms, 'multiply');
                                            this.logDepth--;
                                            return canonicalizeNode(transformedNode);
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

                            // PRIORITY 1: Merge -1 into fraction numerator FIRST
                            // This ensures consistent handling of -2/3*(...) vs -2*(...)/3
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

                            // PRIORITY 2: Multiplication-Division Consolidation: (a/b)*c*d → (a*c*d)/b
                            // This ensures consistent canonical form for all fraction-multiplication patterns
                            const divisionNodes = terms.filter(t => t.isOperatorNode && t.fn === 'divide');
                            if (divisionNodes.length > 0) {
                                // We have at least one division in the multiplication
                                // Consolidate: move all non-division terms into the first division's numerator
                                const firstDivision = divisionNodes[0];
                                const otherDivisions = divisionNodes.slice(1);
                                const nonDivisionTerms = terms.filter(t => !divisionNodes.includes(t));

                                if (nonDivisionTerms.length > 0 && otherDivisions.length === 0) {
                                    // Simple case: (a/b) * c * d → (a*c*d)/b
                                    this.log(`[TRANSFORM] Consolidating division with multiplication: (a/b)*c*d → (a*c*d)/b`);
                                    const numeratorTerms = [firstDivision.args[0], ...nonDivisionTerms];
                                    const newNumerator = this.rebuildTree(numeratorTerms, 'multiply');
                                    const newExpr = new math.OperatorNode('divide', 'divide', [newNumerator, firstDivision.args[1]]);
                                    this.logDepth--; return canonicalizeNode(newExpr);
                                }
                            }

                            // PRIORITY 3: Selective distributive property for negative constants
                            // Only apply AFTER fraction handling is complete
                            // 1. Always distribute if there's exactly ONE addition node WITHOUT a fraction
                            // 2. For multiple addition nodes: distribute into those containing negative terms
                            //    to simplify double negatives like: -1 * ((-1*a) + x) → (a + (-1*x))
                            //    or: -2 * (a-x) → -2 * ((-1*x) + a) → split to -1 * 2 and distribute
                            // Example: -(x+a)(x+b) stays as -1*(sum1)*(sum2) for commutativity
                            // But: -(x-a)(x-b) → distribute into (x-a) to match (a-x)(x-b)
                            // And: -2(a-x)(x-b) → split -2 into -1*2, distribute -1 to match 2(x-a)(x-b)

                            // Find ANY negative constant (not just -1)
                            const negativeConstant = terms.find(t => t.isConstantNode && t.value < 0);
                            if (negativeConstant && addNode && !fractionNode) {
                                const additionNodes = terms.filter(t => t.isOperatorNode && t.fn === 'add');

                                // Helper function to check if an addition node contains negative terms
                                const hasNegativeTerms = (addNode) => {
                                    const addTerms = this.flatten(addNode, 'add');
                                    return addTerms.some(term => {
                                        // Check for -1*x patterns
                                        if (term.isOperatorNode && term.fn === 'multiply') {
                                            return term.args.some(arg => arg.isConstantNode && arg.value === -1);
                                        }
                                        // Also check for negative constants like -5
                                        if (term.isConstantNode && term.value < 0) {
                                            return true;
                                        }
                                        return false;
                                    });
                                };

                                if (additionNodes.length === 1) {
                                    // Single addition node: only distribute if it contains negative terms (double negative case)
                                    if (hasNegativeTerms(addNode)) {
                                        this.log(`[TRANSFORM] Applying distributive property for negative constant ${negativeConstant.value} (single addition factor with negatives).`);
                                        const otherTerms = terms.filter(t => t !== negativeConstant && t !== addNode);

                                        // Split the negative constant: -2 → -1 * 2
                                        const magnitude = Math.abs(negativeConstant.value);
                                        const addTerms = this.flatten(addNode, 'add');
                                        const distributedTerms = addTerms.map(term => new math.OperatorNode('multiply', 'multiply', [new math.ConstantNode(-1), term]));
                                        let newExpr = this.rebuildTree(distributedTerms, 'add');

                                        // Include the magnitude if it's not 1
                                        const newTerms = magnitude !== 1 ? [new math.ConstantNode(magnitude), ...otherTerms, newExpr] : [...otherTerms, newExpr];
                                        if (newTerms.length > 1) {
                                            newExpr = this.rebuildTree(newTerms, 'multiply');
                                        } else if (newTerms.length === 1) {
                                            newExpr = newTerms[0];
                                        }
                                        this.logDepth--; return canonicalizeNode(newExpr);
                                    } else {
                                        this.log(`[SKIP] Distributive property skipped: single addition factor without negatives (no double negative to simplify).`);
                                    }
                                } else {
                                    // Multiple addition nodes: check if any contain negative terms
                                    const nodesWithNegatives = additionNodes.filter(hasNegativeTerms);

                                    if (nodesWithNegatives.length > 0) {
                                        // Distribute the negative part into the first addition node with negatives
                                        const targetNode = nodesWithNegatives[0];
                                        this.log(`[TRANSFORM] Applying distributive property for negative constant ${negativeConstant.value} (to simplify double negatives in one factor).`);
                                        const otherTerms = terms.filter(t => t !== negativeConstant && t !== targetNode);

                                        // Split the negative constant: -2 → -1 * 2
                                        const magnitude = Math.abs(negativeConstant.value);
                                        const addTerms = this.flatten(targetNode, 'add');
                                        const distributedTerms = addTerms.map(term => new math.OperatorNode('multiply', 'multiply', [new math.ConstantNode(-1), term]));
                                        let newExpr = this.rebuildTree(distributedTerms, 'add');

                                        // Include the magnitude if it's not 1
                                        const newTerms = magnitude !== 1 ? [new math.ConstantNode(magnitude), ...otherTerms, newExpr] : [...otherTerms, newExpr];
                                        if (newTerms.length > 1) {
                                            newExpr = this.rebuildTree(newTerms, 'multiply');
                                        } else if (newTerms.length === 1) {
                                            newExpr = newTerms[0];
                                        }
                                        this.logDepth--; return canonicalizeNode(newExpr);
                                    } else {
                                        this.log(`[SKIP] Distributive property skipped: ${additionNodes.length} addition factors without negatives (preserving commutativity).`);
                                    }
                                }
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

                            // Factor out -1 if ALL terms are negative
                            // This creates a canonical form: (-a) + (-b) → -1 * (a + b)
                            const allNegative = terms.every(term => {
                                // Check for negative constant
                                if (term.isConstantNode) {
                                    return term.value < 0;
                                }
                                // Check for multiplication by -1 or negative constant
                                if (term.isOperatorNode && term.fn === 'multiply') {
                                    const factors = this.flatten(term, 'multiply');
                                    return factors.some(f => f.isConstantNode && f.value < 0);
                                }
                                return false;
                            });

                            if (allNegative && terms.length > 0) {
                                this.log(`[TRANSFORM] Factoring out -1 from addition (all terms negative).`);
                                // Negate each term
                                const positiveTerms = terms.map(term => {
                                    if (term.isConstantNode) {
                                        return new math.ConstantNode(-term.value);
                                    }
                                    if (term.isOperatorNode && term.fn === 'multiply') {
                                        const factors = this.flatten(term, 'multiply');
                                        // Remove or negate the negative constant
                                        const newFactors = factors.flatMap(f => {
                                            if (f.isConstantNode) {
                                                const negated = -f.value;
                                                return negated === 1 ? [] : [new math.ConstantNode(negated)];
                                            }
                                            return [f];
                                        });
                                        if (newFactors.length === 0) return new math.ConstantNode(1);
                                        if (newFactors.length === 1) return newFactors[0];
                                        return this.rebuildTree(newFactors, 'multiply');
                                    }
                                    return term;
                                });

                                const positiveSum = this.rebuildTree(positiveTerms, 'add');
                                transformedNode = new math.OperatorNode('multiply', 'multiply', [
                                    new math.ConstantNode(-1),
                                    positiveSum
                                ]);
                                this.logDepth--;
                                return canonicalizeNode(transformedNode);
                            }
                        }

                        terms.sort(this.compareNodes.bind(this));
                        transformedNode = this.rebuildTree(terms, transformedNode.fn);
                    }

                    // Handle division nodes: canonicalize denominators where first term is negative
                    // This ensures expressions like 3/(a-x) and -3/(x-a) match
                    // Strategy: When denominator has exactly 2 terms with exactly 1 negative, normalize
                    // so that the positive term comes first (alphabetically earlier positive version wins)
                    if (transformedNode.fn === 'divide') {
                        const numerator = transformedNode.args[0];
                        const denominator = transformedNode.args[1];

                        // RULE 1: Extract negative from denominator to create canonical form
                        // Transform: (numerator)/(-denominator) → (-numerator)/denominator
                        // This handles cases like (a-b+c-d)/e vs (b-a-c+d)/(-e)
                        let isNegativeDenominator = false;
                        let positiveDenominator = denominator;

                        // Check if denominator is negative constant
                        if (denominator.isConstantNode && denominator.value < 0) {
                            isNegativeDenominator = true;
                            positiveDenominator = new math.ConstantNode(-denominator.value);
                            this.log(`[TRANSFORM] Denominator is negative constant - extracting -1.`);
                        }
                        // Check if denominator is multiplication with -1 factor
                        else if (denominator.isOperatorNode && denominator.fn === 'multiply') {
                            const factors = this.flatten(denominator, 'multiply');
                            const negOne = factors.find(f => f.isConstantNode && f.value === -1);
                            if (negOne) {
                                isNegativeDenominator = true;
                                const otherFactors = factors.filter(f => f !== negOne);
                                if (otherFactors.length === 0) {
                                    positiveDenominator = new math.ConstantNode(1);
                                } else if (otherFactors.length === 1) {
                                    positiveDenominator = otherFactors[0];
                                } else {
                                    positiveDenominator = this.rebuildTree(otherFactors, 'multiply');
                                }
                                this.log(`[TRANSFORM] Denominator has -1 factor - extracting to numerator.`);
                            }
                        }

                        // If denominator is negative, negate both numerator and denominator
                        if (isNegativeDenominator) {
                            const newNumerator = new math.OperatorNode('multiply', 'multiply', [
                                new math.ConstantNode(-1),
                                numerator
                            ]);
                            transformedNode = new math.OperatorNode('divide', 'divide', [newNumerator, positiveDenominator]);
                            this.logDepth--;
                            return canonicalizeNode(transformedNode);
                        }

                        // RULE 2: Canonicalize denominators with binary differences
                        // This handles both simple additions (a-x) and products containing additions ((a-x)(x+b))

                        // Helper function to canonicalize a binary difference (2 terms, 1 negative)
                        const canonicalizeBinaryDifference = (addNode) => {
                            if (!addNode.isOperatorNode || addNode.fn !== 'add') return { transformed: false, result: addNode };

                            const denomTerms = this.flatten(addNode, 'add');
                            if (denomTerms.length !== 2) return { transformed: false, result: addNode };

                            // Identify which terms are negative
                            const termInfo = denomTerms.map(term => {
                                let isNegative = false;
                                let positiveVersion = term;

                                if (term.isConstantNode && term.value < 0) {
                                    isNegative = true;
                                    positiveVersion = new math.ConstantNode(-term.value);
                                } else if (term.isOperatorNode && term.fn === 'multiply') {
                                    const factors = this.flatten(term, 'multiply');
                                    const negOne = factors.find(f => f.isConstantNode && f.value === -1);
                                    if (negOne) {
                                        isNegative = true;
                                        const otherFactors = factors.filter(f => f !== negOne);
                                        if (otherFactors.length === 0) {
                                            positiveVersion = new math.ConstantNode(1);
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
                            if (negativeTerms.length !== 1) return { transformed: false, result: addNode };

                            const positiveTerm = termInfo.find(t => !t.isNegative);
                            const negativeTerm = negativeTerms[0];

                            // Compare the positive versions alphabetically
                            const posStr = this.astToString(positiveTerm.positiveVersion);
                            const negStr = this.astToString(negativeTerm.positiveVersion);

                            // If the negative term's positive version comes BEFORE the positive term,
                            // we need to swap signs
                            if (negStr.localeCompare(posStr) < 0) {
                                // Build new addition: swap the signs
                                const newAddTerms = [
                                    negativeTerm.positiveVersion,  // The previously negative term, now positive
                                    new math.OperatorNode('multiply', 'multiply', [
                                        new math.ConstantNode(-1),
                                        positiveTerm.positiveVersion  // The previously positive term, now negative
                                    ])
                                ];

                                return {
                                    transformed: true,
                                    result: this.rebuildTree(newAddTerms, 'add'),
                                    needsNumeratorFlip: true
                                };
                            }

                            return { transformed: false, result: addNode };
                        };

                        // Case 1: Denominator is a simple addition (e.g., a-x)
                        if (denominator.isOperatorNode && denominator.fn === 'add') {
                            const canonResult = canonicalizeBinaryDifference(denominator);
                            if (canonResult.transformed) {
                                this.log(`[TRANSFORM] Denominator binary difference canonicalized - flipping numerator sign.`);

                                const newNumerator = new math.OperatorNode('multiply', 'multiply', [
                                    new math.ConstantNode(-1),
                                    numerator
                                ]);

                                transformedNode = new math.OperatorNode('divide', 'divide', [newNumerator, canonResult.result]);
                                this.logDepth--;
                                return canonicalizeNode(transformedNode);
                            }
                        }

                        // Case 2: Denominator is a product containing additions (e.g., (a-x)*(x+b))
                        else if (denominator.isOperatorNode && denominator.fn === 'multiply') {
                            const factors = this.flatten(denominator, 'multiply');
                            const additionFactors = factors.filter(f => f.isOperatorNode && f.fn === 'add');

                            if (additionFactors.length > 0) {
                                let anyTransformed = false;
                                let numeratorFlipCount = 0;

                                const newFactors = factors.map(factor => {
                                    if (factor.isOperatorNode && factor.fn === 'add') {
                                        const canonResult = canonicalizeBinaryDifference(factor);
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
                                    this.log(`[TRANSFORM] Denominator product contains ${numeratorFlipCount} binary difference(s) that needed canonicalization.`);

                                    let newNumerator = numerator;

                                    // Flip numerator sign for each binary difference that was transformed
                                    if (numeratorFlipCount % 2 === 1) {
                                        newNumerator = new math.OperatorNode('multiply', 'multiply', [
                                            new math.ConstantNode(-1),
                                            numerator
                                        ]);
                                    }

                                    const newDenominator = this.rebuildTree(newFactors, 'multiply');
                                    transformedNode = new math.OperatorNode('divide', 'divide', [newNumerator, newDenominator]);
                                    this.logDepth--;
                                    return canonicalizeNode(transformedNode);
                                }
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

    /**
     * Check if two addition nodes are negations of each other.
     * Example: (5 + (-1*x)) and ((-1*5) + x) are negations
     * This handles cases like (5-x) vs -(x-5)
     *
     * This is a simple structural check - it doesn't recursively canonicalize.
     */
    areSumsNegations(sum1, sum2) {
        if (!sum1.isOperatorNode || sum1.fn !== 'add') return false;
        if (!sum2.isOperatorNode || sum2.fn !== 'add') return false;

        const terms1 = this.flatten(sum1, 'add');
        const terms2 = this.flatten(sum2, 'add');

        if (terms1.length !== terms2.length) return false;

        // Create negated versions of all terms in sum1
        const negatedTerms1 = terms1.map(term => {
            // Simple negation: if term is -1*x, return x; if term is x, return -1*x
            if (term.isOperatorNode && term.fn === 'multiply') {
                const flatTerms = this.flatten(term, 'multiply');
                const hasNegOne = flatTerms.some(t => t.isConstantNode && t.value === -1);
                if (hasNegOne) {
                    // Remove -1 from the multiplication
                    const withoutNegOne = flatTerms.filter(t => !(t.isConstantNode && t.value === -1));
                    if (withoutNegOne.length === 0) return this.astToString(new math.ConstantNode(1));
                    if (withoutNegOne.length === 1) return this.astToString(withoutNegOne[0]);
                    return this.astToString(this.rebuildTree(withoutNegOne, 'multiply'));
                }
            }
            // For constant nodes, just negate the value
            if (term.isConstantNode) {
                return this.astToString(new math.ConstantNode(-term.value));
            }
            // Otherwise, add -1 multiplication
            return this.astToString(new math.OperatorNode('multiply', 'multiply', [new math.ConstantNode(-1), term]));
        }).sort();

        // Get string versions of sum2 terms
        const terms2Strings = terms2.map(term => this.astToString(term)).sort();

        // Check if they match
        return JSON.stringify(negatedTerms1) === JSON.stringify(terms2Strings);
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