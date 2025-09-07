// levels/factorisingNonMonicQuadraticTrinomialsEasy.js
class FactorisingNonMonicQuadraticTrinomialsEasyLevel {
    constructor() {
        this.key = 'factorisingNonMonicQuadraticTrinomialsEasy';
        this.name = 'Factorising Non-monic Quadratic Trinomials (Easy)';
        this.usedQuestionIndices = new Set();
        
        // Predefined questions - Easy level focuses on small coefficients and perfect squares
        this.questions = [
            // Original textbook questions
            {problem: "2x^2 + 3x + 1", answer: "(2x + 1)(x + 1)"},
            {problem: "2x^2 - 3x + 1", answer: "(2x - 1)(x - 1)"},
            {problem: "2x^2 - 3x - 2", answer: "(2x + 1)(x - 2)"},
            {problem: "2x^2 + 3x - 2", answer: "(2x - 1)(x + 2)"},
            {problem: "2x^2 + 5x + 2", answer: "(2x + 1)(x + 2)"},
            {problem: "2x^2 - 5x + 3", answer: "(2x - 3)(x - 1)"},
            {problem: "2x^2 + 5x + 3", answer: "(2x + 3)(x + 1)"},
            {problem: "2x^2 - x - 3", answer: "(2x - 3)(x + 1)"},
            {problem: "2x^2 + x - 3", answer: "(2x + 3)(x - 1)"},
            {problem: "2x^2 + x - 1", answer: "(2x - 1)(x + 1)"},
            {problem: "2x^2 - x - 1", answer: "(2x + 1)(x - 1)"},
            {problem: "4x^2 - 1", answer: "(2x + 1)(2x - 1)"},
            {problem: "4x^2 + 4x + 1", answer: "(2x + 1)^2"},
            {problem: "4x^2 - 4x + 1", answer: "(2x - 1)^2"},
            {problem: "4x^2 + 5x + 1", answer: "(4x + 1)(x + 1)"},
            {problem: "4x^2 - 5x + 1", answer: "(4x - 1)(x - 1)"},
            {problem: "4x^2 + 3x - 1", answer: "(4x - 1)(x + 1)"},
            {problem: "4x^2 - 3x - 1", answer: "(4x + 1)(x - 1)"},

            // Additional generated questions - Basic patterns with coefficient 2
            {problem: "2x^2 + 7x + 3", answer: "(2x + 1)(x + 3)"},
            {problem: "2x^2 + 7x + 5", answer: "(2x + 5)(x + 1)"},
            {problem: "2x^2 + 9x + 4", answer: "(2x + 1)(x + 4)"},
            {problem: "2x^2 - 7x + 3", answer: "(2x - 1)(x - 3)"},
            {problem: "2x^2 - 7x + 5", answer: "(2x - 5)(x - 1)"},
            {problem: "2x^2 - 9x + 4", answer: "(2x - 1)(x - 4)"},

            // Basic patterns with coefficient 3
            {problem: "3x^2 + 4x + 1", answer: "(3x + 1)(x + 1)"},
            {problem: "3x^2 + 5x + 2", answer: "(3x + 2)(x + 1)"},
            {problem: "3x^2 + 7x + 2", answer: "(3x + 1)(x + 2)"},
            {problem: "3x^2 - 4x + 1", answer: "(3x - 1)(x - 1)"},
            {problem: "3x^2 - 5x + 2", answer: "(3x - 2)(x - 1)"},
            {problem: "3x^2 - 7x + 2", answer: "(3x - 1)(x - 2)"},

            // Perfect squares with coefficient 2 and 3
            {problem: "9x^2 + 6x + 1", answer: "(3x + 1)^2"},
            {problem: "9x^2 - 6x + 1", answer: "(3x - 1)^2"},
            {problem: "4x^2 + 12x + 9", answer: "(2x + 3)^2"},
            {problem: "4x^2 - 12x + 9", answer: "(2x - 3)^2"},

            // Different variables for variety
            {problem: "2a^2 + 3a + 1", answer: "(2a + 1)(a + 1)"},
            {problem: "2b^2 + 5b + 2", answer: "(2b + 1)(b + 2)"},
            {problem: "3c^2 + 4c + 1", answer: "(3c + 1)(c + 1)"},
            {problem: "2d^2 - 3d + 1", answer: "(2d - 1)(d - 1)"},
            {problem: "3e^2 - 5e + 2", answer: "(3e - 2)(e - 1)"},

            // More basic patterns
            {problem: "2x^2 + 11x + 5", answer: "(2x + 1)(x + 5)"},
            {problem: "2x^2 - 11x + 5", answer: "(2x - 1)(x - 5)"},
            {problem: "3x^2 + 8x + 5", answer: "(3x + 5)(x + 1)"},
            {problem: "3x^2 - 8x + 5", answer: "(3x - 5)(x - 1)"},
            {problem: "2x^2 + 13x + 6", answer: "(2x + 1)(x + 6)"},
            {problem: "2x^2 - 13x + 6", answer: "(2x - 1)(x - 6)"},

            // Simple coefficient 5 patterns
            {problem: "5x^2 + 6x + 1", answer: "(5x + 1)(x + 1)"},
            {problem: "5x^2 - 6x + 1", answer: "(5x - 1)(x - 1)"},
            {problem: "5x^2 + 7x + 2", answer: "(5x + 2)(x + 1)"},
            {problem: "5x^2 - 7x + 2", answer: "(5x - 2)(x - 1)"},

            // More patterns with different variables
            {problem: "2y^2 + 3y + 1", answer: "(2y + 1)(y + 1)"},
            {problem: "3z^2 + 4z + 1", answer: "(3z + 1)(z + 1)"},
            {problem: "2m^2 + 5m + 2", answer: "(2m + 1)(m + 2)"},
            {problem: "3n^2 + 5n + 2", answer: "(3n + 2)(n + 1)"}
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
window.AlgebraLevels.factorisingNonMonicQuadraticTrinomialsEasy = new FactorisingNonMonicQuadraticTrinomialsEasyLevel();