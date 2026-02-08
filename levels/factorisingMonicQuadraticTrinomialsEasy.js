// levels/factorisingMonicQuadraticTrinomialsEasy.js
class FactorisingMonicQuadraticTrinomialsEasyLevel {
    constructor() {
        this.key = 'factorisingMonicQuadraticTrinomialsEasy';
        this.name = 'Factorising Monic Quadratic Trinomials (Easy)';
        this.usedQuestionIndices = new Set();
        
        // Predefined questions - Easy level focuses on positive coefficients, small numbers, and perfect squares
        this.questions = [
            // Original textbook questions
            {problem: "x^2 + 7x + 6", answer: "(x+1)(x+6)"},
            {problem: "x^2 + 5x + 6", answer: "(x+2)(x+3)"},
            {problem: "x^2 + 6x + 9", answer: "(x+3)^2"},
            {problem: "x^2 + 7x + 10", answer: "(x+2)(x+5)"},
            {problem: "x^2 + 7x + 12", answer: "(x+3)(x+4)"},
            {problem: "x^2 + 11x + 18", answer: "(x+2)(x+9)"},
            {problem: "x^2 + 8x + 12", answer: "(x+2)(x+6)"},
            {problem: "x^2 + 10x + 9", answer: "(x+1)(x+9)"},
            {problem: "x^2 + 8x + 15", answer: "(x+3)(x+5)"},
            {problem: "x^2 + 9x + 20", answer: "(x+4)(x+5)"},
            {problem: "a^2 + 3a + 2", answer: "(a+1)(a+2)"},
            {problem: "y^2 + 9y + 20", answer: "(y+4)(y+5)"},
            {problem: "x^2 + 12x + 20", answer: "(x+2)(x+10)"},

            // Additional generated questions - Perfect squares
            {problem: "x^2 + 2x + 1", answer: "(x+1)^2"},
            {problem: "x^2 + 4x + 4", answer: "(x+2)^2"},
            {problem: "x^2 + 8x + 16", answer: "(x+4)^2"},
            {problem: "x^2 + 10x + 25", answer: "(x+5)^2"},
            {problem: "a^2 + 6a + 9", answer: "(a+3)^2"},
            {problem: "b^2 + 8b + 16", answer: "(b+4)^2"},
            // Additional generated questions - Simple factorisation patterns
            {problem: "x^2 + 3x + 2", answer: "(x+1)(x+2)"},
            {problem: "x^2 + 4x + 3", answer: "(x+1)(x+3)"},
            {problem: "x^2 + 6x + 5", answer: "(x+1)(x+5)"},
            {problem: "x^2 + 6x + 8", answer: "(x+2)(x+4)"},
            {problem: "x^2 + 9x + 8", answer: "(x+1)(x+8)"},
            {problem: "x^2 + 9x + 14", answer: "(x+2)(x+7)"},
            {problem: "x^2 + 10x + 16", answer: "(x+2)(x+8)"},
            {problem: "x^2 + 11x + 10", answer: "(x+1)(x+10)"},
            {problem: "x^2 + 12x + 11", answer: "(x+1)(x+11)"},

            // Different variables for variety            {problem: "x^2 + 9x + 18", answer: "(x+3)(x+6)"},
            {problem: "x^2 + 11x + 24", answer: "(x+3)(x+8)"},
            {problem: "x^2 + 13x + 12", answer: "(x+1)(x+12)"},

            // More practice with small coefficients
            {problem: "x^2 + 5x + 4", answer: "(x+1)(x+4)"},
            {problem: "x^2 + 8x + 7", answer: "(x+1)(x+7)"},
            {problem: "x^2 + 12x + 35", answer: "(x+5)(x+7)"},
            {problem: "x^2 + 13x + 36", answer: "(x+4)(x+9)"}
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
window.AlgebraLevels.factorisingMonicQuadraticTrinomialsEasy = new FactorisingMonicQuadraticTrinomialsEasyLevel();