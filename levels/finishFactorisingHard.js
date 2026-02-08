// levels/finishFactorisingHard.js
class FinishFactorisingHard {
    constructor() {
        this.key = 'finishFactorisingHard';
        this.name = 'Finish Factorising (Hard)';
        this.usedQuestionIndices = new Set();
        
        this.questions = [
            // From provided questions - complex multi-step factorisation
            {problem: "(x + 3)(4x^2 + 8x + 4)", answer: "4(x + 3)(x + 1)^2"},
            {problem: "(x + 3)(4x^2 - 8x + 4)", answer: "4(x + 3)(x - 1)^2"},
            {problem: "5(x + 3)(4x^2 + 8x - 5)", answer: "5(x + 3)(2x - 1)(2x + 5)"},
            {problem: "5(x + 3)(4x^2 + 8x - 12)", answer: "20(x + 3)^2(x - 1)"},
            {problem: "(9x + 6)(15x + 10)", answer: "15(3x + 2)^2"},
            {problem: "2(9x + 6)(15x + 10)", answer: "30(3x + 2)^2"},
            {problem: "2(6x - 9x^2)(15x + 10)", answer: "30x(2 - 3x)(3x + 2)"},
            {problem: "2x^3(6x - 9x^2)(15x + 10)", answer: "30x^4(2 - 3x)(3x + 2)"},
            {problem: "(25a^2 - 1)(5a - 1)", answer: "(5a - 1)^2(5a + 1)"},
            {problem: "(x^2 - 8x + 16)(x - 4)", answer: "(x - 4)^3"},
            {problem: "(3x - 12)(x^2 - 16)", answer: "3(x - 4)^2(x + 4)"},
            {problem: "x^2(x^2 - 4) - 9(x^2 - 4)", answer: "(x - 2)(x + 2)(x - 3)(x + 3)"},
            
            // Additional questions for hard complexity progression
            {problem: "(x + 4)(9x^2 + 12x + 4)", answer: "(x + 4)(3x + 2)^2"},
            {problem: "3(x + 2)(16x^2 - 24x + 9)", answer: "3(x + 2)(4x - 3)^2"},
            {problem: "(y^2 - 10y + 25)(y - 5)", answer: "(y - 5)^3"},
            {problem: "4x(x^2 - 1)(3x + 6)", answer: "12x(x - 1)(x + 1)(x + 2)"},
            {problem: "(36b^2 - 1)(6b - 1)", answer: "(6b - 1)^2(6b + 1)"},
            {problem: "(2x + 6)(4x^2 - 12x + 9)", answer: "2(x + 3)(2x - 3)^2"},
            {problem: "x^2(x^2 - 4) - 9(x^2 - 4)", answer: "(x - 3)(x + 3)(x - 2)(x + 2)"},
            {problem: "5(x + 1)(25x^2 - 10x + 1)", answer: "5(x + 1)(5x - 1)^2"},
            {problem: "(x^2 - 6x + 9)(x - 3)", answer: "(x - 3)^3"},
            {problem: "2y^2(y^2 - 16)(5y - 10)", answer: "10y^2(y - 4)(y + 4)(y - 2)"},
            {problem: "(49x^2 - 4)(7x - 2)", answer: "(7x - 2)^2(7x + 2)"},
            {problem: "7(x + 5)(9x^2 + 30x + 25)", answer: "7(x + 5)(3x + 5)^2"},
            {problem: "(x^2 - 12x + 36)(x - 6)", answer: "(x - 6)^3"},
            {problem: "3x^3(x^2 - 25)(2x + 8)", answer: "6x^3(x - 5)(x + 5)(x + 4)"},
            {problem: "(64x^2 - 9)(8x - 3)", answer: "(8x - 3)^2(8x + 3)"},
            {problem: "4(x + 7)(16x^2 + 56x + 49)", answer: "4(x + 7)(4x + 7)^2"},
            {problem: "(x^2 - 14x + 49)(x - 7)", answer: "(x - 7)^3"},
            {problem: "6x^2(x^2 - 36)(3x - 15)", answer: "18x^2(x - 6)(x + 6)(x - 5)"},
            {problem: "(81x^2 - 16)(9x - 4)", answer: "(9x - 4)^2(9x + 4)"},
            {problem: "8(x + 8)(25x^2 + 80x + 64)", answer: "8(x + 8)(5x + 8)^2"},
            {problem: "(x^2 - 16x + 64)(x - 8)", answer: "(x - 8)^3"},
            {problem: "5x^3(x^2 - 49)(4x + 20)", answer: "20x^3(x - 7)(x + 7)(x + 5)"},
            {problem: "(100x^2 - 25)(10x - 5)", answer: "125(2x - 1)^2(2x + 1)"},
            {problem: "9(x + 9)(36x^2 + 108x + 81)", answer: "81(x + 9)(2x + 3)^2"},
            {problem: "(x^2 - 18x + 81)(x - 9)", answer: "(x - 9)^3"},
            {problem: "7x^2(x^2 - 64)(2x - 14)", answer: "14x^2(x - 8)(x + 8)(x - 7)"},
            {problem: "(121x^2 - 36)(11x - 6)", answer: "(11x - 6)^2(11x + 6)"},
            {problem: "6(x + 10)(49x^2 + 140x + 100)", answer: "6(x + 10)(7x + 10)^2"},
            {problem: "(y^2 - 20y + 100)(y - 10)", answer: "(y - 10)^3"},
            {problem: "8x^3(x^2 - 81)(3x + 24)", answer: "24x^3(x - 9)(x + 9)(x + 8)"},
            {problem: "(144a^2 - 49)(12a - 7)", answer: "(12a - 7)^2(12a + 7)"},
            {problem: "10(b + 11)(64b^2 + 176b + 121)", answer: "10(b + 11)(8b + 11)^2"},
            {problem: "(x^2 - 22x + 121)(x - 11)", answer: "(x - 11)^3"},
            {problem: "9x^2(x^2 - 100)(5x - 45)", answer: "45x^2(x - 10)(x + 10)(x - 9)"}
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
window.AlgebraLevels.finishFactorisingHard = new FinishFactorisingHard();