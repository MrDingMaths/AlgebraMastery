// levels/factorisingMonicQuadraticTrinomialsMedium.js
class FactorisingMonicQuadraticTrinomialsMediumLevel {
    constructor() {
        this.key = 'factorisingMonicQuadraticTrinomialsMedium';
        this.name = 'Factorising Monic Quadratic Trinomials (Medium)';
        this.usedQuestionIndices = new Set();
        
        // Predefined questions - Medium level introduces negative terms and requires more systematic approach
        this.questions = [
            // Original textbook questions
            {problem: "x^2 + 5x - 6", answer: "(x+6)(x-1)"},
            {problem: "x^2 + x - 6", answer: "(x+3)(x-2)"},
            {problem: "x^2 + 2x - 8", answer: "(x+4)(x-2)"},
            {problem: "x^2 + 3x - 4", answer: "(x+4)(x-1)"},
            {problem: "x^2 + 7x - 30", answer: "(x+10)(x-3)"},
            {problem: "x^2 - 7x + 10", answer: "(x-2)(x-5)"},
            {problem: "x^2 - 6x + 8", answer: "(x-2)(x-4)"},
            {problem: "x^2 - 7x + 12", answer: "(x-3)(x-4)"},
            {problem: "x^2 - 2x + 1", answer: "(x-1)^2"},
            {problem: "x^2 - 9x + 18", answer: "(x-3)(x-6)"},
            {problem: "x^2 - 4x - 12", answer: "(x-6)(x+2)"},
            {problem: "x^2 - x - 20", answer: "(x-5)(x+4)"},
            {problem: "x^2 - 5x - 14", answer: "(x-7)(x+2)"},
            {problem: "x^2 - x - 12", answer: "(x-4)(x+3)"},
            {problem: "x^2 - 3x - 10", answer: "(x-5)(x+2)"},
            {problem: "x^2 - 5x + 6", answer: "(x-2)(x-3)"},
            {problem: "c^2 - 7c + 10", answer: "(c-2)(c-5)"},
            {problem: "a^2 - 7a + 12", answer: "(a-3)(a-4)"},
            {problem: "t^2 + t - 2", answer: "(t+2)(t-1)"},
            {problem: "u^2 - u - 2", answer: "(u-2)(u+1)"},
            {problem: "p^2 - 2p - 15", answer: "(p-5)(p+3)"},
            {problem: "y^2 + 3y - 28", answer: "(y+7)(y-4)"},
            {problem: "x^2 - x - 90", answer: "(x-10)(x+9)"},
            {problem: "x^2 + 3x - 40", answer: "(x+8)(x-5)"},
            {problem: "u^2 - 16u - 80", answer: "(u-20)(u+4)"},

            // Additional generated questions - Mixed positive/negative middle terms
            {problem: "x^2 + 4x - 5", answer: "(x+5)(x-1)"},
            {problem: "x^2 + 6x - 7", answer: "(x+7)(x-1)"},
            {problem: "x^2 + 8x - 9", answer: "(x+9)(x-1)"},
            {problem: "x^2 + 2x - 3", answer: "(x+3)(x-1)"},
            {problem: "x^2 + 4x - 12", answer: "(x+6)(x-2)"},
            {problem: "x^2 + 6x - 16", answer: "(x+8)(x-2)"},
            {problem: "x^2 + 8x - 20", answer: "(x+10)(x-2)"},

            // Additional generated questions - Both terms negative
            {problem: "x^2 - 3x + 2", answer: "(x-1)(x-2)"},
            {problem: "x^2 - 4x + 3", answer: "(x-1)(x-3)"},
            {problem: "x^2 - 5x + 4", answer: "(x-1)(x-4)"},
            {problem: "x^2 - 8x + 7", answer: "(x-1)(x-7)"},
            {problem: "x^2 - 8x + 12", answer: "(x-2)(x-6)"},
            {problem: "x^2 - 9x + 8", answer: "(x-1)(x-8)"},
            {problem: "x^2 - 10x + 9", answer: "(x-1)(x-9)"},
            {problem: "x^2 - 11x + 10", answer: "(x-1)(x-10)"},
            {problem: "x^2 - 8x + 15", answer: "(x-3)(x-5)"},
            {problem: "x^2 - 10x + 16", answer: "(x-2)(x-8)"},

            // Additional generated questions - Negative constant term
            {problem: "x^2 - 2x - 3", answer: "(x-3)(x+1)"},
            {problem: "x^2 - 3x - 4", answer: "(x-4)(x+1)"},
            {problem: "x^2 - 4x - 5", answer: "(x-5)(x+1)"},
            {problem: "x^2 - 6x - 7", answer: "(x-7)(x+1)"},
            {problem: "x^2 - 8x - 9", answer: "(x-9)(x+1)"},
            {problem: "x^2 - 10x - 11", answer: "(x-11)(x+1)"},
            {problem: "x^2 - 6x - 16", answer: "(x-8)(x+2)"},
            {problem: "x^2 - 8x - 20", answer: "(x-10)(x+2)"},
            {problem: "x^2 - 10x - 24", answer: "(x-12)(x+2)"},

            // Different variables for variety
            {problem: "a^2 + 2a - 8", answer: "(a+4)(a-2)"},
            {problem: "b^2 - 5b + 6", answer: "(b-2)(b-3)"},
            {problem: "c^2 + 6c - 27", answer: "(c+9)(c-3)"},
            {problem: "d^2 - 9d + 14", answer: "(d-2)(d-7)"},
            {problem: "e^2 + 4e - 21", answer: "(e+7)(e-3)"},
            {problem: "f^2 - 6f - 7", answer: "(f-7)(f+1)"},
            {problem: "g^2 + 8g - 33", answer: "(g+11)(g-3)"},
            {problem: "h^2 - 11h + 18", answer: "(h-2)(h-9)"},

            // Perfect squares with negative terms
            {problem: "x^2 - 6x + 9", answer: "(x-3)^2"},
            {problem: "x^2 - 8x + 16", answer: "(x-4)^2"},
            {problem: "x^2 - 10x + 25", answer: "(x-5)^2"},
            {problem: "a^2 - 12a + 36", answer: "(a-6)^2"},
            {problem: "b^2 - 14b + 49", answer: "(b-7)^2"},

            // Larger coefficients for challenge
            {problem: "x^2 - 12x + 35", answer: "(x-5)(x-7)"},
            {problem: "x^2 - 13x + 36", answer: "(x-4)(x-9)"},
            {problem: "x^2 - 15x + 44", answer: "(x-4)(x-11)"},
            {problem: "x^2 + 14x - 32", answer: "(x+16)(x-2)"},
            {problem: "x^2 + 15x - 34", answer: "(x+17)(x-2)"}
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
window.AlgebraLevels.factorisingMonicQuadraticTrinomialsMedium = new FactorisingMonicQuadraticTrinomialsMediumLevel();