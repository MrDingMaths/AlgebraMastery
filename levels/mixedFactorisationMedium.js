class MixedFactorisationMedium {
    constructor() {
        this.key = 'mixedFactorisationMedium';
        this.name = 'Mixed Factorisation (Medium)';
        this.usedQuestionIndices = new Set();
        
        this.questions = [
            // Complex common factors with grouped terms
            {problem: "(x + 4)(x + 8) + x + 4", answer: "(x + 4)(x + 9)"},
            {problem: "(x + 4)(x + 8) + (x + 4)(x - 2)", answer: "2(x + 3)(x + 4)"},
            {problem: "(x + 4)(x + 8) + (x + 4)(x + 8)", answer: "2(x + 4)(x + 8)"},
            {problem: "(x + 4)(x + 8) - (-x - 4)(x + 8)", answer: "2(x + 4)(x + 8)"},
            
            // Moderate quadratic factorisation
            {problem: "x^2 - 25x + 100", answer: "(x - 5)(x - 20)"},
            {problem: "2x^2 + 25x + 50", answer: "(2x + 5)(x + 10)"},
            {problem: "x^2 - 16x - 36", answer: "(x - 18)(x + 2)"},
            {problem: "5x^2 + 16x - 16", answer: "(5x - 4)(x + 4)"},
            {problem: "4x^2 - 16x - 9", answer: "(2x - 9)(2x + 1)"},
            {problem: "3x^2 + 2x - 40", answer: "(3x - 10)(x + 4)"},
            {problem: "5x^2 + 54x + 40", answer: "(5x + 4)(x + 10)"},
            {problem: "5x^2 + 33x + 40", answer: "(5x + 8)(x + 5)"},
            
            // Grouping by pairs and common factors
            {problem: "x^3 + 5x^2 + 5x + 25", answer: "(x^2 + 5)(x + 5)"},
            {problem: "2x^3 - 16x^2 - 3x + 24", answer: "(x - 8)(2x^2 - 3)"},
            {problem: "2a^2 + ab - 4a - 2b", answer: "(a - 2)(2a + b)"},
            {problem: "3x^3 - 2x^2y - 15x + 10y", answer: "(x^2 - 5)(3x - 2y)"},
            
            // Difference of squares with common factors
            {problem: "(x + y)^2 - a^2", answer: "(x + y - a)(x + y + a)"},
            {problem: "3a^2 - 12", answer: "3(a - 2)(a + 2)"},
            {problem: "x^3 - x", answer: "x(x - 1)(x + 1)"},
            {problem: "25y - y^3", answer: "y(5 - y)(5 + y)"},
            {problem: "3x^4 - 27y^2", answer: "3(x^2 - 3y)(x^2 + 3y)"},
            
            // Complex factorisation with common factors
            {problem: "4x^2 + 14x - 30", answer: "2(x + 5)(2x - 3)"},
            {problem: "x^3 - 8x^2 + 7x", answer: "x(x - 1)(x - 7)"},
            {problem: "4a^3 - 36a", answer: "4a(a - 3)(a + 3)"},
            {problem: "2x^2 - 18", answer: "2(x - 3)(x + 3)"},
            {problem: "3x^2 - 3x - 36", answer: "3(x - 4)(x + 3)"},
            {problem: "5y^2 - 5", answer: "5(y - 1)(y + 1)"},
            {problem: "5a^2 - 10a + 5", answer: "5(a - 1)^2"},
            {problem: "3x^3 + 27x^2 + 60x", answer: "3x(x + 4)(x + 5)"},
            {problem: "6x^2 + 8x - 8", answer: "2(x + 2)(3x - 2)"},
            
            // Higher degree factorisation
            {problem: "y^6 - 4", answer: "(y^3 - 2)(y^3 + 2)"},
            {problem: "x^3 - 3x^2 - 10x", answer: "x(x - 5)(x + 2)"},
            {problem: "4x^2y^3 - y", answer: "y(2xy - 1)(2xy + 1)"},
            {problem: "24 - 6b^2", answer: "6(2 - b)(2 + b)"},
            {problem: "3x^2 - 6x + 3", answer: "3(x - 1)^2"},
            
            // Perfect squares with fractions
            {problem: "x^2 + x + \\frac{1}{4}", answer: "(x + \\frac{1}{2})^2"},
            {problem: "x^2 - \\frac{4x}{3} + \\frac{4}{9}", answer: "(x - \\frac{2}{3})^2"},
            {problem: "9y^2 + \\frac{6y}{5} + \\frac{1}{25}", answer: "(3y + \\frac{1}{5})^2"},
            
            // Difference of squares with expressions
            {problem: "(x + 2)^2 - y^2", answer: "(x - y + 2)(x + y + 2)"},
            {problem: "x^2 - (1 + y)^2", answer: "(x - y - 1)(x + y + 1)"},
            
            // Higher degree differences of squares
            {problem: "x^4 - 1", answer: "(x - 1)(x + 1)(x^2 + 1)"},
            {problem: "9x^6 - 4y^2", answer: "(3x^3 - 2y)(3x^3 + 2y)"},
            {problem: "125a^2b^2 - 20x^2", answer: "5(5ab - 2x)(5ab + 2x)"},
            {problem: "16 - a^4", answer: "(2 - a)(2 + a)(4 + a^2)"},
            {problem: "54x^3y - 6xy^3", answer: "6xy(3x - y)(3x + y)"},
            {problem: "28x - 63xy^2", answer: "7x(2 - 3y)(2 + 3y)"},
            {problem: "x^4 - y^4", answer: "(x - y)(x + y)(x^2 + y^2)"},
            
            // Mixed fractions
            {problem: "x^2 - 1\\frac{7}{9}", answer: "(x - \\frac{4}{3})(x + \\frac{4}{3})"},
            {problem: "\\frac{1}{25} - x^2", answer: "(\\frac{1}{5} - x)(\\frac{1}{5} + x)"},
            
            // Complex grouped expressions
            {problem: "(x + 3)^2 - 25", answer: "(x - 2)(x + 8)"},
            {problem: "(x - y)^2 - y^2", answer: "x(x - 2y)"},
            {problem: "a^2(a + 2) - 4(a + 2)", answer: "(a - 2)(a + 2)^2"},
            
            // Non-monic quadratics
            {problem: "6x^2 - 5x - 6", answer: "(2x - 3)(3x + 2)"},
            {problem: "6x^2 - 5xy - 6y^2", answer: "(2x - 3y)(3x + 2y)"},
            
            // Factorisation with sign changes
            {problem: "3x(y - 2) + 5(2 - y)", answer: "(y - 2)(3x - 5)"},
            {problem: "(x - y)^2 - (x - y)", answer: "(x - y)(x - y - 1)"},
            {problem: "4x^2 - (y + a)^2", answer: "(2x - y - a)(2x + y + a)"},
            {problem: "a^2 - b^2 - a + b", answer: "(a - b)(a + b - 1)"},
            
            // Higher degree with multiple variables
            {problem: "a^3 - 10a^2b + 24ab^2", answer: "a(a - 4b)(a - 6b)"},
            {problem: "6x^4 - x^3 - 2x^2", answer: "x^2(3x - 2)(2x + 1)"},
            {problem: "x^2 + 2ax + a^2 - b^2", answer: "(x + a - b)(x + a + b)"}
        ];
    }

    generateQuestion() {
        // Reset if all questions used
        if (this.usedQuestionIndices.size >= this.questions.length) {
            this.usedQuestionIndices.clear();
        }
        
        // Select random unused question
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

// Registration
window.AlgebraLevels = window.AlgebraLevels || {};
window.AlgebraLevels.mixedFactorisationMedium = new MixedFactorisationMedium();