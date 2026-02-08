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
            {problem: "16 - x^2", answer: "(4 - x)(4 + x)"},
            {problem: "49x^2 - 121y^2", answer: "(7x - 11y)(7x + 11y)"},
            {problem: "9 - 16x^2", answer: "(3 - 4x)(3 + 4x)"},
            {problem: "36x^2 - y^2", answer: "(6x - y)(6x + y)"},
            {problem: "4a^2 - 81b^2", answer: "(2a - 9b)(2a + 9b)"},
            
            // Basic common factor with remaining expression
            {problem: "b^2 - 25b", answer: "b(b - 25)"},
            {problem: "16x^2 - x^3", answer: "x^2(16 - x)"},
            {problem: "6x^3y^4 + 9x^2y^5", answer: "3x^2y^4(2x + 3y)"},
            {problem: "5x^3 + 10x^2 + 15x", answer: "5x(x^2 + 2x + 3)"},
            
            // Perfect square factorisation (simple)
            {problem: "x^2 + 16x + 64", answer: "(x + 8)^2"},
            {problem: "4a^2 - 12a + 9", answer: "(2a - 3)^2"},
            {problem: "49y^2 + 14y + 1", answer: "(7y + 1)^2"},
            {problem: "9y^2 - 30y + 25", answer: "(3y - 5)^2"},
            {problem: "16x^2 - 24x + 9", answer: "(4x - 3)^2"},
            
            // Simple quadratic factorisation
            {problem: "x^2 - 12x + 32", answer: "(x - 4)(x - 8)"},
            {problem: "x^2 + 15x - 54", answer: "(x + 18)(x - 3)"},
            
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
            {problem: "4x^2 + 8xy", answer: "4x(x + 2y)"},
            {problem: "6x^2 - 9xy", answer: "3x(2x - 3y)"}
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