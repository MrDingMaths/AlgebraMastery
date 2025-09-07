class ExpandingDifferenceOfTwoSquaresHard {
    constructor() {
        this.key = 'expandingDifferenceOfTwoSquaresHard';
        this.name = 'Expanding Difference of Two Squares (Hard)';
        this.usedQuestionIndices = new Set();
        
        // Questions covering fractions, complex expressions, and advanced patterns
        this.questions = [
            
            // Textbook questions with fractions
            {problem: "(x+\\frac{1}{3})(x-\\frac{1}{3})", answer: "x^2-\\frac{1}{9}"},
            {problem: "(x+\\frac{3}{4})(x-\\frac{3}{4})", answer: "x^2-\\frac{9}{16}"},
            {problem: "(\\frac{x}{3}+\\frac{4}{5})(\\frac{x}{3}-\\frac{4}{5})", answer: "\\frac{x^2}{9}-\\frac{16}{25}"},
            {problem: "(\\frac{x}{2}+\\frac{y}{7})(\\frac{x}{2}-\\frac{y}{7})", answer: "\\frac{x^2}{4}-\\frac{y^2}{49}"},
            {problem: "(2x-\\frac{3}{7})(2x+\\frac{3}{7})", answer: "4x^2-\\frac{9}{49}"},
            {problem: "(\\frac{7}{3}-5x)(\\frac{7}{3}+5x)", answer: "\\frac{49}{9}-25x^2"},
            
            // Reciprocal terms
            {problem: "(t+\\frac{1}{t})(t-\\frac{1}{t})", answer: "t^2-\\frac{1}{t^2}"},
            {problem: "(\\frac{4}{m}-m)(\\frac{4}{m}+m)", answer: "\\frac{16}{m^2}-m^2"},
            {problem: "(3g+\\frac{1}{g})(3g-\\frac{1}{g})", answer: "9g^2-\\frac{1}{g^2}"},
            {problem: "(\\frac{4a}{3}+2)(\\frac{4a}{3}-2)", answer: "\\frac{16a^2}{9}-4"},
            {problem: "(xy-\\frac{1}{y})(xy+\\frac{1}{y})", answer: "x^2y^2-\\frac{1}{y^2}"},
            
            // Complex expressions with parentheses
            {problem: "[x+(y-2)][x-(y-2)]", answer: "x^2-(y-2)^2"},
            
            // Additional fraction patterns
            {problem: "(x+\\frac{2}{5})(x-\\frac{2}{5})", answer: "x^2-\\frac{4}{25}"},
            {problem: "(x+\\frac{5}{6})(x-\\frac{5}{6})", answer: "x^2-\\frac{25}{36}"},
            {problem: "(x-\\frac{7}{8})(x+\\frac{7}{8})", answer: "x^2-\\frac{49}{64}"},
            {problem: "(\\frac{2}{3}+x)(\\frac{2}{3}-x)", answer: "\\frac{4}{9}-x^2"},
            {problem: "(\\frac{5}{4}-x)(\\frac{5}{4}+x)", answer: "\\frac{25}{16}-x^2"},
            {problem: "(\\frac{9}{7}+x)(\\frac{9}{7}-x)", answer: "\\frac{81}{49}-x^2"},
            
            // Fractions with coefficients
            {problem: "(3x+\\frac{1}{2})(3x-\\frac{1}{2})", answer: "9x^2-\\frac{1}{4}"},
            {problem: "(4x-\\frac{2}{3})(4x+\\frac{2}{3})", answer: "16x^2-\\frac{4}{9}"},
            {problem: "(5x+\\frac{3}{8})(5x-\\frac{3}{8})", answer: "25x^2-\\frac{9}{64}"},
            {problem: "(2x-\\frac{5}{9})(2x+\\frac{5}{9})", answer: "4x^2-\\frac{25}{81}"},
            {problem: "(6x+\\frac{1}{7})(6x-\\frac{1}{7})", answer: "36x^2-\\frac{1}{49}"},
            
            // Two-variable fractions
            {problem: "(\\frac{x}{2}+\\frac{y}{3})(\\frac{x}{2}-\\frac{y}{3})", answer: "\\frac{x^2}{4}-\\frac{y^2}{9}"},
            {problem: "(\\frac{a}{5}+\\frac{b}{4})(\\frac{a}{5}-\\frac{b}{4})", answer: "\\frac{a^2}{25}-\\frac{b^2}{16}"},
            {problem: "(\\frac{p}{7}-\\frac{q}{6})(\\frac{p}{7}+\\frac{q}{6})", answer: "\\frac{p^2}{49}-\\frac{q^2}{36}"},
            {problem: "(\\frac{2x}{3}+\\frac{3y}{4})(\\frac{2x}{3}-\\frac{3y}{4})", answer: "\\frac{4x^2}{9}-\\frac{9y^2}{16}"},
            {problem: "(\\frac{3a}{8}-\\frac{2b}{5})(\\frac{3a}{8}+\\frac{2b}{5})", answer: "\\frac{9a^2}{64}-\\frac{4b^2}{25}"},
            
            // Complex reciprocal patterns
            {problem: "(\\frac{2}{x}+x)(\\frac{2}{x}-x)", answer: "\\frac{4}{x^2}-x^2"},
            {problem: "(\\frac{3}{y}-y)(\\frac{3}{y}+y)", answer: "\\frac{9}{y^2}-y^2"},
            {problem: "(\\frac{5}{z}+2z)(\\frac{5}{z}-2z)", answer: "\\frac{25}{z^2}-4z^2"},
            {problem: "(\\frac{1}{2a}+3a)(\\frac{1}{2a}-3a)", answer: "\\frac{1}{4a^2}-9a^2"},
            {problem: "(\\frac{4}{3b}-2b)(\\frac{4}{3b}+2b)", answer: "\\frac{16}{9b^2}-4b^2"},
            
            // Mixed complex fractions
            {problem: "(2x+\\frac{y}{3})(2x-\\frac{y}{3})", answer: "4x^2-\\frac{y^2}{9}"},
            {problem: "(\\frac{x}{4}+3y)(\\frac{x}{4}-3y)", answer: "\\frac{x^2}{16}-9y^2"},
            {problem: "(5a-\\frac{b}{2})(5a+\\frac{b}{2})", answer: "25a^2-\\frac{b^2}{4}"},
            {problem: "(\\frac{p}{6}+4q)(\\frac{p}{6}-4q)", answer: "\\frac{p^2}{36}-16q^2"},
            {problem: "(3r-\\frac{s}{5})(3r+\\frac{s}{5})", answer: "9r^2-\\frac{s^2}{25}"},
            
            // Advanced reciprocal with variables
            {problem: "(ab+\\frac{1}{ab})(ab-\\frac{1}{ab})", answer: "a^2b^2-\\frac{1}{a^2b^2}"},
            {problem: "(\\frac{xy}{2}-\\frac{2}{xy})(\\frac{xy}{2}+\\frac{2}{xy})", answer: "\\frac{x^2y^2}{4}-\\frac{4}{x^2y^2}"},
            {problem: "(\\frac{3}{pq}+pq)(\\frac{3}{pq}-pq)", answer: "\\frac{9}{p^2q^2}-p^2q^2"},
            
            // Nested fraction expressions
            {problem: "(\\frac{x+1}{2}+\\frac{x-1}{3})(\\frac{x+1}{2}-\\frac{x-1}{3})", answer: "\\frac{(x+1)^2}{4}-\\frac{(x-1)^2}{9}"},
            {problem: "(\\frac{2a+3}{4}+\\frac{a-2}{5})(\\frac{2a+3}{4}-\\frac{a-2}{5})", answer: "\\frac{(2a+3)^2}{16}-\\frac{(a-2)^2}{25}"}
        ];
    }

    generateQuestion() {
        // Reset if we've used all questions in this session
        if (this.usedQuestionIndices.size >= this.questions.length) {
            this.usedQuestionIndices.clear();
        }
        
        // Pick a random unused question
        let questionIndex;
        do {
            questionIndex = Math.floor(Math.random() * this.questions.length);
        } while (this.usedQuestionIndices.has(questionIndex));
        
        this.usedQuestionIndices.add(questionIndex);
        return this.questions[questionIndex];
    }

    getQuestions() {
        return this.questions;
    }
}

// Register the level
window.AlgebraLevels = window.AlgebraLevels || {};
window.AlgebraLevels.expandingDifferenceOfTwoSquaresHard = new ExpandingDifferenceOfTwoSquaresHard();