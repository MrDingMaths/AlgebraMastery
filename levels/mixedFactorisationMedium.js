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
            {problem: "c^2 - 25c + 100", answer: "(c - 5)(c - 20)"},
            {problem: "2d^2 + 25d + 50", answer: "(2d + 5)(d + 10)"},
            {problem: "t^2 - 16t - 36", answer: "(t - 18)(t + 2)"},
            {problem: "5j^2 + 16j - 16", answer: "(5j - 4)(j + 4)"},
            {problem: "4k^2 - 16k - 9", answer: "(2k - 9)(2k + 1)"},
            {problem: "3t^2 + 2t - 40", answer: "(3t - 10)(t + 4)"},
            {problem: "5t^2 + 54t + 40", answer: "(5t + 4)(t + 10)"},
            {problem: "5t^2 + 33t + 40", answer: "(5t + 8)(t + 5)"},
            
            // Grouping by pairs and common factors
            {problem: "e^3 + 5e^2 + 5e + 25", answer: "(e^2 + 5)(e + 5)"},
            {problem: "2k^3 - 16k^2 - 3k + 24", answer: "(k - 8)(2k^2 - 3)"},
            {problem: "2a^2 + ab - 4a - 2b", answer: "(a - 2)(2a + b)"},
            {problem: "3x^3 - 2x^2y - 15x + 10y", answer: "(x^2 - 5)(3x - 2y)"},
            
            // Difference of squares with common factors
            {problem: "(p + q)^2 - r^2", answer: "(p + q - r)(p + q + r)"},
            {problem: "3a^2 - 12", answer: "3(a - 2)(a + 2)"},
            {problem: "x^3 - x", answer: "x(x - 1)(x + 1)"},
            {problem: "25y - y^3", answer: "y(5 - y)(5 + y)"},
            {problem: "3x^4 - 27p^2", answer: "3(x^2 - 3p)(x^2 + 3p)"},
            
            // Complex factorisation with common factors
            {problem: "4x^2 + 14x - 30", answer: "2(x + 5)(2x - 3)"},
            {problem: "x^3 - 8x^2 + 7x", answer: "x(x - 1)(x - 7)"},
            {problem: "4a^3 - 36a", answer: "4a(a - 3)(a + 3)"},
            {problem: "2x^2 - 18", answer: "2(x - 3)(x + 3)"},
            {problem: "3p^2 - 3p - 36", answer: "3(p - 4)(p + 3)"},
            {problem: "5y^2 - 5", answer: "5(y - 1)(y + 1)"},
            {problem: "5a^2 - 10a + 5", answer: "5(a - 1)^2"},
            {problem: "3z^3 + 27z^2 + 60z", answer: "3z(z + 4)(z + 5)"},
            {problem: "6x^2 + 8x - 8", answer: "2(x + 2)(3x - 2)"},
            
            // Higher degree factorisation
            {problem: "y^6 - 4", answer: "(y^3 - 2)(y^3 + 2)"},
            {problem: "x^3 - 3x^2 - 10x", answer: "x(x - 5)(x + 2)"},
            {problem: "4x^2y^3 - y", answer: "y(2xy - 1)(2xy + 1)"},
            {problem: "24 - 6b^2", answer: "6(2 - b)(2 + b)"},
            {problem: "3x^2 - 6x + 3", answer: "3(x - 1)^2"},
            
            // Perfect squares with fractions
            {problem: "t^2 + t + \\frac{1}{4}", answer: "(t + \\frac{1}{2})^2"},
            {problem: "x^2 - \\frac{4x}{3} + \\frac{4}{9}", answer: "(x - \\frac{2}{3})^2"},
            {problem: "9y^2 + \\frac{6y}{5} + \\frac{1}{25}", answer: "(3y + \\frac{1}{5})^2"},
            
            // Difference of squares with expressions
            {problem: "(x + 2)^2 - y^2", answer: "(x - y + 2)(x + y + 2)"},
            {problem: "z^2 - (1 + w)^2", answer: "(z - w - 1)(z + w + 1)"},
            
            // Higher degree differences of squares
            {problem: "x^4 - 1", answer: "(x - 1)(x + 1)(x^2 + 1)"},
            {problem: "9x^6 - 4y^2", answer: "(3x^3 - 2y)(3x^3 + 2y)"},
            {problem: "125a^2b^2 - 20v^2", answer: "5(5ab - 2v)(5ab + 2v)"},
            {problem: "16 - a^4", answer: "(2 - a)(2 + a)(4 + a^2)"},
            {problem: "54g^3p - 6gp^3", answer: "6gp(3g - p)(3g + p)"},
            {problem: "28c - 63cw^2", answer: "7c(2 - 3w)(2 + 3w)"},
            {problem: "x^4 - y^4", answer: "(x - y)(x + y)(x^2 + y^2)"},
            
            // Mixed fractions
            {problem: "c^2 - 1\\frac{7}{9}", answer: "(c - \\frac{4}{3})(c + \\frac{4}{3})"},
            {problem: "\\frac{1}{25} - x^2", answer: "(\\frac{1}{5} - x)(\\frac{1}{5} + x)"},
            
            // Complex grouped expressions
            {problem: "(m + 3)^2 - 25", answer: "(m - 2)(m + 8)"},
            {problem: "(x - y)^2 - y^2", answer: "x(x - 2y)"},
            {problem: "a^2(a + 2) - 4(a + 2)", answer: "(a - 2)(a + 2)^2"},
            
            // Non-monic quadratics
            {problem: "6x^2 - 5x - 6", answer: "(2x - 3)(3x + 2)"},
            {problem: "6x^2 - 5xy - 6y^2", answer: "(2x - 3y)(3x + 2y)"},
            
            // Factorisation with sign changes
            {problem: "3x(y - 2) + 5(2 - y)", answer: "(y - 2)(3x - 5)"},
            {problem: "(m - n)^2 - (m - n)", answer: "(m - n)(m - n - 1)"},
            {problem: "4p^2 - (q + r)^2", answer: "(2p - q - r)(2p + q + r)"},
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