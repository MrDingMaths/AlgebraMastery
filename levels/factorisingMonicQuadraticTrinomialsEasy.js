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
            {problem: "k^2 + 5k + 6", answer: "(k+2)(k+3)"},
            {problem: "m^2 + 7m + 6", answer: "(m+1)(m+6)"},
            {problem: "y^2 + 9y + 20", answer: "(y+4)(y+5)"},
            {problem: "t^2 + 12t + 20", answer: "(t+2)(t+10)"},

            // Additional generated questions - Perfect squares
            {problem: "x^2 + 2x + 1", answer: "(x+1)^2"},
            {problem: "x^2 + 4x + 4", answer: "(x+2)^2"},
            {problem: "x^2 + 8x + 16", answer: "(x+4)^2"},
            {problem: "x^2 + 10x + 25", answer: "(x+5)^2"},
            {problem: "a^2 + 6a + 9", answer: "(a+3)^2"},
            {problem: "b^2 + 8b + 16", answer: "(b+4)^2"},
            {problem: "c^2 + 10c + 25", answer: "(c+5)^2"},

            // Additional generated questions - Simple factorisation patterns
            {problem: "x^2 + 3x + 2", answer: "(x+1)(x+2)"},
            {problem: "x^2 + 4x + 3", answer: "(x+1)(x+3)"},
            {problem: "x^2 + 4x + 4", answer: "(x+2)^2"},
            {problem: "x^2 + 6x + 5", answer: "(x+1)(x+5)"},
            {problem: "x^2 + 6x + 8", answer: "(x+2)(x+4)"},
            {problem: "x^2 + 9x + 8", answer: "(x+1)(x+8)"},
            {problem: "x^2 + 9x + 14", answer: "(x+2)(x+7)"},
            {problem: "x^2 + 10x + 16", answer: "(x+2)(x+8)"},
            {problem: "x^2 + 11x + 10", answer: "(x+1)(x+10)"},
            {problem: "x^2 + 12x + 11", answer: "(x+1)(x+11)"},

            // Different variables for variety
            {problem: "p^2 + 4p + 3", answer: "(p+1)(p+3)"},
            {problem: "q^2 + 7q + 12", answer: "(q+3)(q+4)"},
            {problem: "r^2 + 6r + 8", answer: "(r+2)(r+4)"},
            {problem: "s^2 + 8s + 15", answer: "(s+3)(s+5)"},
            {problem: "u^2 + 9u + 18", answer: "(u+3)(u+6)"},
            {problem: "v^2 + 11v + 24", answer: "(v+3)(v+8)"},
            {problem: "w^2 + 13w + 12", answer: "(w+1)(w+12)"},

            // More practice with small coefficients
            {problem: "n^2 + 5n + 4", answer: "(n+1)(n+4)"},
            {problem: "z^2 + 6z + 5", answer: "(z+1)(z+5)"},
            {problem: "h^2 + 7h + 6", answer: "(h+1)(h+6)"},
            {problem: "j^2 + 8j + 7", answer: "(j+1)(j+7)"},
            {problem: "l^2 + 9l + 8", answer: "(l+1)(l+8)"},
            {problem: "d^2 + 10d + 9", answer: "(d+1)(d+9)"},
            {problem: "f^2 + 11f + 10", answer: "(f+1)(f+10)"},
            {problem: "g^2 + 12g + 35", answer: "(g+5)(g+7)"},
            {problem: "e^2 + 13e + 36", answer: "(e+4)(e+9)"}
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