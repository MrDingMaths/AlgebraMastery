// algebra-modules/algebraEngine.js

/**
 * AlgebraEngine - Expression Comparison and Validation System
 * * PRIMARY GOAL:
 * Check if user input matches the given answer through direct structural comparison.
 * * CORE PRINCIPLES:
 * 1. Accept expressions that are commutatively equivalent.
 * 2. REJECT expressions that are not fully simplified.
 * 3. REJECT expressions in the wrong form (factorized vs. expanded).
 * * REFACTORED COMPARISON STRATEGY:
 * - A single, robust canonicalization pass transforms any set of equivalent expressions
 * into an identical Abstract Syntax Tree (AST) structure.
 * - The final comparison is a direct structural equality check of the canonical ASTs.
 * * FINAL CANONICALIZATION RULES:
 * 1. Subtraction to Addition: `a-b` becomes `a + (-1*b)`.
 * 2. Unary Minus to Multiplication: `-a` becomes `-1 * a`.
 * 3. Distributive Property: `-(a+b)` is distributed to `(-a) + (-b)`.
 * 4. Fraction Normalization: An external negative sign `-(a/b)` is merged into the numerator `(-a)/b`.
 * 5. Commutative Sorting: Terms in addition and multiplication are flattened and sorted.
 * * DEBUGGING POLICY:
 * - Verbose console logging is enabled to trace the entire canonicalization process.
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
                        this.logDepth--; return canonicalizeNode(transformedNode);
                    }
                    if (transformedNode.fn === 'add' || transformedNode.fn === 'multiply') {
                        let terms = this.flatten(transformedNode, transformedNode.fn);
                        
                        if (transformedNode.fn === 'multiply') {
                            const negOneNode = terms.find(t => t.isConstantNode && t.value === -1);
                            const addNode = terms.find(t => t.isOperatorNode && t.fn === 'add');
                            const fractionNode = terms.find(t => t.isOperatorNode && t.fn === 'divide');

                            if (negOneNode && addNode) {
                                this.log(`[TRANSFORM] Applying distributive property for -1.`);
                                const otherTerms = terms.filter(t => t !== negOneNode && t !== addNode);
                                const addTerms = this.flatten(addNode, 'add');
                                const distributedTerms = addTerms.map(term => new math.OperatorNode('multiply', 'multiply', [new math.ConstantNode(-1), term]));
                                let newExpr = this.rebuildTree(distributedTerms, 'add');
                                if (otherTerms.length > 0) {
                                    newExpr = this.rebuildTree([...otherTerms, newExpr], 'multiply');
                                }
                                this.logDepth--; return canonicalizeNode(newExpr);
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
        expr = expr.replace(/\\times|×/g, '*');
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