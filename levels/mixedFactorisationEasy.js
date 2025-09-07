class MixedFactorisationEasy {
    constructor() {
        this.key = 'mixedFactorisationEasy';
        this.name = 'Mixed Factorisation (Easy)';
        this.usedQuestionIndices = new Set();
        
        this.questions = [
            // Basic common factor extraction
            {problem: "4x + 4", answer: "4(x + 1)"},
            {problem: "4x + 8", answer: "4(x + 2)"},
            {problem: "x^2 + x", answer: "x(x + 1)"},
            {problem: "4x^2 + 2x", answer: "2x(2x + 1)"},
            {problem: "-4x - 4", answer: "-4(x + 1)"},
            {problem: "-4x^2 - 8x", answer: "-4x(x + 2)"},
            {problem: "x^3 + x^2", answer: "x^2(x + 1)"},
            {problem: "-4x^3 - 8x^4", answer: "-4x^3(1 + 2x)"},
            {problem: "4xy + 8x", answer: "4x(y + 2)"},
            {problem: "4xy^2 + 8xy", answer: "4xy(y + 2)"},
            {problem: "-4x^2y - 8xy^2", answer: "-4xy(x + 2y)"},
            
            // Simple difference of squares
            {problem: "a^2 - 25", answer: "(a - 5)(a + 5)"},
            {problem: "16 - f^2", answer: "(4 - f)(4 + f)"},
            {problem: "49p^2 - 121q^2", answer: "(7p - 11q)(7p + 11q)"},
            {problem: "9 - 16x^2", answer: "(3 - 4x)(3 + 4x)"},
            {problem: "36x^2 - y^2", answer: "(6x - y)(6x + y)"},
            {problem: "4a^2 - 81b^2", answer: "(2a - 9b)(2a + 9b)"},
            
            // Basic common factor with remaining expression
            {problem: "b^2 - 25b", answer: "b(b - 25)"},
            {problem: "16g^2 - g^3", answer: "g^2(16 - g)"},
            {problem: "6m^3n^4 + 9m^2n^5", answer: "3m^2n^4(2m + 3n)"},
            {problem: "5t^3 + 10t^2 + 15t", answer: "5t(t^2 + 2t + 3)"},
            
            // Perfect square factorisation (simple)
            {problem: "h^2 + 16h + 64", answer: "(h + 8)^2"},
            {problem: "4a^2 - 12a + 9", answer: "(2a - 3)^2"},
            {problem: "49y^2 + 14y + 1", answer: "(7y + 1)^2"},
            {problem: "9y^2 - 30y + 25", answer: "(3y - 5)^2"},
            {problem: "16k^2 - 24k + 9", answer: "(4k - 3)^2"},
            
            // Simple quadratic factorisation
            {problem: "r^2 - 12r + 32", answer: "(r - 4)(r - 8)"},
            {problem: "u^2 + 15u - 54", answer: "(u + 18)(u - 3)"},
            
            // Common factor with grouped terms
            {problem: "x(y - 1) + 3(y - 1)", answer: "(x + 3)(y - 1)"},
            
            // Additional questions for comprehensive practice
            {problem: "6x + 12", answer: "6(x + 2)"},
            {problem: "8x - 24", answer: "8(x - 3)"},
            {problem: "3x^2 + 9x", answer: "3x(x + 3)"},
            {problem: "2x^3 - 6x^2", answer: "2x^2(x - 3)"},
            {problem: "12xy + 18x", answer: "6x(2y + 3)"},
            {problem: "15x^2y - 10xy^2", answer: "5xy(3x - 2y)"},
            {problem: "x^2 - 9", answer: "(x - 3)(x + 3)"},
            {problem: "25 - y^2", answer: "(5 - y)(5 + y)"},
            {problem: "4x^2 - 1", answer: "(2x - 1)(2x + 1)"},
            {problem: "x^2 + 6x + 9", answer: "(x + 3)^2"},
            {problem: "x^2 - 8x + 16", answer: "(x - 4)^2"},
            {problem: "4x^2 + 4x + 1", answer: "(2x + 1)^2"},
            {problem: "x^2 + 5x + 6", answer: "(x + 2)(x + 3)"},
            {problem: "x^2 - 7x + 12", answer: "(x - 3)(x - 4)"},
            {problem: "x^2 - x - 6", answer: "(x - 3)(x + 2)"},
            {problem: "x^2 + x - 12", answer: "(x + 4)(x - 3)"},
            {problem: "2x + 2y", answer: "2(x + y)"},
            {problem: "3a - 3b", answer: "3(a - b)"},
            {problem: "4m^2 + 8mn", answer: "4m(m + 2n)"},
            {problem: "6p^2 - 9pq", answer: "3p(2p - 3q)"}
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
window.AlgebraLevels.mixedFactorisationEasy = new MixedFactorisationEasy();