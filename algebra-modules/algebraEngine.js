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
 *   2i. Division Denominator Canonicalization (Two Rules):
 *
 *       Rule 1: Extract Negative from Denominator
 *       - Purpose: Always prefer positive denominator in canonical form
 *       - Handles: (numerator)/(-denominator) → (-numerator)/denominator
 *       - Detects negative denominators in three ways:
 *         * Negative constant: (expr)/(-3) → (-expr)/3
 *         * Multiplication with -1: (expr)/(-1*e) → (-expr)/e
 *       - Example: (a-b+c-d)/e and (b-a-c+d)/(-e) both become (-...)/e form
 *       - This ensures: numerator/(-denom) and (-numerator)/denom match
 *
 *       Rule 2: Binary Difference Denominator Canonicalization
 *       - Purpose: Ensures expressions like 3/(a-x) and -3/(x-a) match
 *       - Applies AFTER Rule 1, to denominators with binary differences
 *       - Rule: For denominators with exactly 2 terms where 1 is negative:
 *         * Extract positive versions of both terms
 *         * Compare positive versions alphabetically
 *         * If negative term's positive version comes first alphabetically,
 *           factor out -1 from denominator and merge into numerator
 *       - Example: 3/(a-x) where denominator is ((-1*x) + a)
 *         * Positive versions: x and a
 *         * Compare: "a" < "x" alphabetically
 *         * Result: "a" should be positive, "x" should be negative
 *         * Transform: 3/((-1*x) + a) → (-3)/(a + (-1*x))
 *       - This creates stable canonical form for subtraction-like denominators
 *       - Mathematical equivalence: 3/(a-x) = 3/(-(x-a)) = -3/(x-a)
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
 * Example 3: Denominator canonicalization with negative terms
 *   Input:  3/(a-x) vs -3/(x-a)
 *   Mathematical equivalence: 3/(a-x) = 3/(-(x-a)) = -3/(x-a)
 *
 *   Processing 3/(a-x):
 *     Step 1: Parse: (a-x) → (a + (-1*x))
 *     Step 2: Canonicalize and sort: ((-1*x) + a)
 *     Step 3: Check denominator: 2 terms, 1 negative [(-1*x), a]
 *     Step 4: Identify: negativeTerm = (-1*x) with posVersion "x"
 *                      positiveTerm = a with posVersion "a"
 *     Step 5: Compare: "x" vs "a" → "x" > "a", so "x" comes AFTER
 *     Step 6: Condition check: negStr < posStr? → "x" < "a"? → FALSE
 *     Step 7: NO transformation applied
 *     Result: 3 / ((-1*x) + a)
 *
 *   Processing -3/(x-a):
 *     Step 1: Parse: (x-a) → (x + (-1*a))
 *     Step 2: Canonicalize and sort: ((-1*a) + x)
 *     Step 3: Check denominator: 2 terms, 1 negative [(-1*a), x]
 *     Step 4: Identify: negativeTerm = (-1*a) with posVersion "a"
 *                      positiveTerm = x with posVersion "x"
 *     Step 5: Compare: "a" vs "x" → "a" < "x", so "a" comes BEFORE
 *     Step 6: Condition check: negStr < posStr? → "a" < "x"? → TRUE
 *     Step 7: Transform: Swap signs in denominator, negate numerator
 *             New denominator: (a + (-1*x)) → sorts to ((-1*x) + a)
 *             New numerator: -1 * -3 = 3
 *     Result: 3 / ((-1*x) + a)
 *
 *   Both expressions converge to: 3 / ((-1*x) + a) ✓ MATCH
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

                        // RULE 2: Check if denominator is an addition node
                        if (denominator.isOperatorNode && denominator.fn === 'add') {
                            const denomTerms = this.flatten(denominator, 'add');

                            // Only apply this rule for binary differences (2 terms, 1 negative, 1 positive)
                            if (denomTerms.length === 2) {
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
                                if (negativeTerms.length === 1) {
                                    const positiveTerm = termInfo.find(t => !t.isNegative);
                                    const negativeTerm = negativeTerms[0];

                                    // Compare the positive versions alphabetically
                                    const posStr = this.astToString(positiveTerm.positiveVersion);
                                    const negStr = this.astToString(negativeTerm.positiveVersion);

                                    // If the negative term's positive version comes BEFORE the positive term,
                                    // factor out -1 from denominator
                                    if (negStr.localeCompare(posStr) < 0) {
                                        this.log(`[TRANSFORM] Denominator: negative term "${negStr}" comes before positive term "${posStr}" - factoring out -1.`);

                                        // Build new denominator: swap the signs
                                        const newDenomTerms = [
                                            negativeTerm.positiveVersion,  // The previously negative term, now positive
                                            new math.OperatorNode('multiply', 'multiply', [
                                                new math.ConstantNode(-1),
                                                positiveTerm.positiveVersion  // The previously positive term, now negative
                                            ])
                                        ];

                                        const newDenominator = this.rebuildTree(newDenomTerms, 'add');

                                        // Multiply numerator by -1
                                        const newNumerator = new math.OperatorNode('multiply', 'multiply', [
                                            new math.ConstantNode(-1),
                                            numerator
                                        ]);

                                        transformedNode = new math.OperatorNode('divide', 'divide', [newNumerator, newDenominator]);
                                        this.logDepth--;
                                        return canonicalizeNode(transformedNode);
                                    }
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