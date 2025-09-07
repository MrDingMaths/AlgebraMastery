// levels/factorisingMonicQuadraticTrinomialsHard.js
class FactorisingMonicQuadraticTrinomialsHardLevel {
    constructor() {
        this.key = 'factorisingMonicQuadraticTrinomialsHard';
        this.name = 'Factorising Monic Quadratic Trinomials (Hard)';
        this.usedQuestionIndices = new Set();
        
        // Predefined questions - Hard level requires factoring out common factors first, more complex patterns
        this.questions = [
            // Original textbook questions
            {problem: "2x^2 + 10x + 8", answer: "2(x+1)(x+4)"},
            {problem: "2x^2 + 22x + 20", answer: "2(x+1)(x+10)"},
            {problem: "3x^2 + 18x + 24", answer: "3(x+2)(x+4)"},
            {problem: "2x^2 + 14x - 60", answer: "2(x+10)(x-3)"},
            {problem: "2x^2 - 14x - 36", answer: "2(x-9)(x+2)"},
            {problem: "4x^2 - 8x + 4", answer: "4(x-1)^2"},
            {problem: "2x^2 + 2x - 12", answer: "2(x+3)(x-2)"},
            {problem: "6x^2 - 30x - 36", answer: "6(x-6)(x+1)"},
            {problem: "5x^2 - 30x + 40", answer: "5(x-2)(x-4)"},
            {problem: "3x^2 - 33x + 90", answer: "3(x-5)(x-6)"},
            {problem: "2x^2 - 6x - 20", answer: "2(x-5)(x+2)"},
            {problem: "3x^2 - 3x - 36", answer: "3(x-4)(x+3)"},

            // Additional generated questions - Factor of 2
            {problem: "2x^2 + 6x + 4", answer: "2(x+1)(x+2)"},
            {problem: "2x^2 + 8x + 6", answer: "2(x+1)(x+3)"},
            {problem: "2x^2 + 12x + 10", answer: "2(x+1)(x+5)"},
            {problem: "2x^2 + 16x + 14", answer: "2(x+1)(x+7)"},
            {problem: "2x^2 + 4x - 6", answer: "2(x+3)(x-1)"},
            {problem: "2x^2 + 8x - 10", answer: "2(x+5)(x-1)"},
            {problem: "2x^2 + 12x - 14", answer: "2(x+7)(x-1)"},
            {problem: "2x^2 - 4x - 6", answer: "2(x-3)(x+1)"},
            {problem: "2x^2 - 8x + 6", answer: "2(x-1)(x-3)"},
            {problem: "2x^2 - 12x + 10", answer: "2(x-1)(x-5)"},
            {problem: "2x^2 - 16x + 14", answer: "2(x-1)(x-7)"},

            // Additional generated questions - Factor of 3
            {problem: "3x^2 + 9x + 6", answer: "3(x+1)(x+2)"},
            {problem: "3x^2 + 15x + 12", answer: "3(x+1)(x+4)"},
            {problem: "3x^2 + 21x + 18", answer: "3(x+1)(x+6)"},
            {problem: "3x^2 + 12x + 9", answer: "3(x+1)(x+3)"},
            {problem: "3x^2 + 6x - 9", answer: "3(x+3)(x-1)"},
            {problem: "3x^2 + 12x - 15", answer: "3(x+5)(x-1)"},
            {problem: "3x^2 + 18x - 21", answer: "3(x+7)(x-1)"},
            {problem: "3x^2 - 6x - 9", answer: "3(x-3)(x+1)"},
            {problem: "3x^2 - 12x + 9", answer: "3(x-1)(x-3)"},
            {problem: "3x^2 - 18x + 15", answer: "3(x-1)(x-5)"},
            {problem: "3x^2 - 24x + 21", answer: "3(x-1)(x-7)"},

            // Additional generated questions - Factor of 4
            {problem: "4x^2 + 12x + 8", answer: "4(x+1)(x+2)"},
            {problem: "4x^2 + 20x + 16", answer: "4(x+1)(x+4)"},
            {problem: "4x^2 + 16x + 12", answer: "4(x+1)(x+3)"},
            {problem: "4x^2 + 8x - 12", answer: "4(x+3)(x-1)"},
            {problem: "4x^2 + 16x - 20", answer: "4(x+5)(x-1)"},
            {problem: "4x^2 - 8x - 12", answer: "4(x-3)(x+1)"},
            {problem: "4x^2 - 16x + 12", answer: "4(x-1)(x-3)"},
            {problem: "4x^2 - 20x + 16", answer: "4(x-1)(x-4)"},
            {problem: "4x^2 + 12x + 4", answer: "4(x^2+3x+1)"},

            // Additional generated questions - Factor of 5
            {problem: "5x^2 + 15x + 10", answer: "5(x+1)(x+2)"},
            {problem: "5x^2 + 25x + 20", answer: "5(x+1)(x+4)"},
            {problem: "5x^2 + 20x + 15", answer: "5(x+1)(x+3)"},
            {problem: "5x^2 + 10x - 15", answer: "5(x+3)(x-1)"},
            {problem: "5x^2 + 20x - 25", answer: "5(x+5)(x-1)"},
            {problem: "5x^2 - 10x - 15", answer: "5(x-3)(x+1)"},
            {problem: "5x^2 - 20x + 15", answer: "5(x-1)(x-3)"},
            {problem: "5x^2 - 25x + 20", answer: "5(x-1)(x-4)"},

            // Additional generated questions - Factor of 6
            {problem: "6x^2 + 18x + 12", answer: "6(x+1)(x+2)"},
            {problem: "6x^2 + 24x + 18", answer: "6(x+1)(x+3)"},
            {problem: "6x^2 + 30x + 24", answer: "6(x+1)(x+4)"},
            {problem: "6x^2 + 12x - 18", answer: "6(x+3)(x-1)"},
            {problem: "6x^2 + 24x - 30", answer: "6(x+5)(x-1)"},
            {problem: "6x^2 - 12x - 18", answer: "6(x-3)(x+1)"},
            {problem: "6x^2 - 24x + 18", answer: "6(x-1)(x-3)"},
            {problem: "6x^2 - 36x + 30", answer: "6(x-1)(x-5)"},

            // Perfect squares with factors
            {problem: "2x^2 + 4x + 2", answer: "2(x+1)^2"},
            {problem: "3x^2 + 6x + 3", answer: "3(x+1)^2"},
            {problem: "4x^2 + 16x + 16", answer: "4(x+2)^2"},
            {problem: "5x^2 + 10x + 5", answer: "5(x+1)^2"},
            {problem: "3x^2 + 18x + 27", answer: "3(x+3)^2"},
            {problem: "2x^2 + 8x + 8", answer: "2(x+2)^2"},

            // Different variables for variety
            {problem: "2a^2 + 10a + 8", answer: "2(a+1)(a+4)"},
            {problem: "3b^2 + 15b + 18", answer: "3(b+2)(b+3)"},
            {problem: "4c^2 - 16c + 12", answer: "4(c-1)(c-3)"},
            {problem: "5d^2 + 25d - 30", answer: "5(d+6)(d-1)"},
            {problem: "6e^2 - 18e - 24", answer: "6(e-4)(e+1)"},

            // Larger common factors
            {problem: "8x^2 + 24x + 16", answer: "8(x+1)(x+2)"},
            {problem: "9x^2 - 27x + 18", answer: "9(x-1)(x-2)"},
            {problem: "10x^2 + 30x - 40", answer: "10(x+4)(x-1)"},
            {problem: "12x^2 + 36x + 24", answer: "12(x+1)(x+2)"}
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
window.AlgebraLevels.factorisingMonicQuadraticTrinomialsHard = new FactorisingMonicQuadraticTrinomialsHardLevel();