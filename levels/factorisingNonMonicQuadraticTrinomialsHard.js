// levels/factorisingNonMonicQuadraticTrinomialsHard.js
class FactorisingNonMonicQuadraticTrinomialsHardLevel {
    constructor() {
        this.key = 'factorisingNonMonicQuadraticTrinomialsHard';
        this.name = 'Factorising Non-monic Quadratic Trinomials (Hard)';
        this.usedQuestionIndices = new Set();
        
        // Predefined questions - Hard level includes common factors and complex patterns
        this.questions = [
            // Original textbook questions
            {problem: "6x^2 + 38x + 40", answer: "2(x + 5)(3x + 4)"},
            {problem: "6x^2 - 15x - 36", answer: "3(x - 4)(2x + 3)"},
            {problem: "48x^2 - 18x - 3", answer: "3(2x - 1)(8x + 1)"},
            {problem: "16x^2 - 24x + 8", answer: "8(x - 1)(2x - 1)"},
            {problem: "90x^2 + 90x - 100", answer: "10(3x + 5)(3x - 2)"},
            {problem: "-50x^2 - 115x - 60", answer: "-5(2x + 3)(5x + 4)"},
            {problem: "-24x^2 + 6x + 45", answer: "-3(4x + 5)(2x - 3)"},
            {problem: "-30x^2 + 55x + 50", answer: "-5(3x + 2)(2x - 5)"},
            {problem: "-24x^2 + 26x + 8", answer: "-2(4x + 1)(3x - 4)"},
            {problem: "-32x^2 + 72x - 36", answer: "-4(4x - 3)(2x - 3)"},
            {problem: "-84x^2 + 234x - 60", answer: "-6(7x - 2)(2x - 5)"},
            {problem: "-105x^2 - 7x + 42", answer: "-7(5x - 3)(3x + 2)"},
            {problem: "60x^2 + 130x + 60", answer: "10(2x + 3)(3x + 2)"},
            {problem: "24x^2 - 88x - 32", answer: "8(3x + 1)(x - 4)"},
            {problem: "108x^2 + 9x - 54", answer: "9(4x + 3)(3x - 2)"},
            {problem: "30x^2 - 33x - 18", answer: "3(2x - 3)(5x + 2)"},
            {problem: "42x^2 - 40x + 8", answer: "2(3x - 2)(7x - 2)"},
            {problem: "75x^2 - 65x + 10", answer: "5(3x - 2)(5x - 1)"},
            {problem: "52x^2 - 28x - 24", answer: "4(13x + 6)(x - 1)"},
            {problem: "14x^2 + 35x - 84", answer: "7(x + 4)(2x - 3)"},
            {problem: "36x^2 - 78x + 36", answer: "6(2x - 3)(3x - 2)"},
            {problem: "72x^2 + 72x - 80", answer: "8(3x + 5)(3x - 2)"},
    
            // Additional generated questions - Complex factorisation with common factors
            {problem: "8x^2 + 24x + 16", answer: "8(x + 1)(x + 2)"},
            {problem: "12x^2 + 30x + 18", answer: "6(x + 1)(2x + 3)"},
            {problem: "18x^2 + 42x + 24", answer: "6(x + 1)(3x + 4)"},
            {problem: "24x^2 + 56x + 32", answer: "8(x + 1)(3x + 4)"},
            {problem: "30x^2 + 72x + 42", answer: "6(x + 1)(5x + 7)"},
    
            // Large coefficients with common factors
            {problem: "50x^2 + 85x + 35", answer: "5(2x + 1)(5x + 7)"},
            {problem: "60x^2 + 102x + 42", answer: "6(2x + 1)(5x + 7)"},
    
            // Negative common factors
            {problem: "-8x^2 - 24x - 16", answer: "-8(x + 1)(x + 2)"},
            {problem: "-12x^2 - 30x - 18", answer: "-6(x + 1)(2x + 3)"},
            {problem: "-18x^2 - 42x - 24", answer: "-6(x + 1)(3x + 4)"},
            {problem: "-24x^2 - 56x - 32", answer: "-8(x + 1)(3x + 4)"},
            {problem: "-30x^2 - 72x - 42", answer: "-6(x + 1)(5x + 7)"},
    
            // Mixed signs with common factors
            {problem: "14x^2 - 35x + 21", answer: "7(x - 1)(2x - 3)"},
            {problem: "20x^2 - 50x + 30", answer: "10(x - 1)(2x - 3)"},
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
window.AlgebraLevels.factorisingNonMonicQuadraticTrinomialsHard = new FactorisingNonMonicQuadraticTrinomialsHardLevel();