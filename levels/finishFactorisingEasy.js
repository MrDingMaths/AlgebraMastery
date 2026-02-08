// levels/finishFactorisingEasy.js
class FinishFactorisingEasy {
    constructor() {
        this.key = 'finishFactorisingEasy';
        this.name = 'Finish Factorising (Easy)';
        this.usedQuestionIndices = new Set();
        
        this.questions = [
            // From provided questions - basic common factor extraction
            {problem: "(2x + 4)(x + 5)", answer: "2(x + 2)(x + 5)"},
            {problem: "(x + 2)(2x + 10)", answer: "2(x + 2)(x + 5)"},
            {problem: "(3x + 6)(2x + 11)", answer: "3(x + 2)(2x + 11)"},
            {problem: "(2x + 6)^2", answer: "4(x + 3)^2"},
            {problem: "(5y - 10)^2", answer: "25(y - 2)^2"},
            {problem: "3(x^2 - 4)", answer: "3(x - 2)(x + 2)"},
            
            // Additional questions for cognitive complexity progression
            {problem: "(2x + 8)(x + 1)", answer: "2(x + 4)(x + 1)"},
            {problem: "(3y + 9)(y + 2)", answer: "3(y + 3)(y + 2)"},
            {problem: "(4a + 12)(a + 3)", answer: "4(a + 3)^2"},
            {problem: "(6x + 18)(x + 4)", answer: "6(x + 3)(x + 4)"},
            {problem: "(5x + 15)(x + 7)", answer: "5(x + 3)(x + 7)"},
            {problem: "2(x^2 - 1)", answer: "2(x - 1)(x + 1)"},
            {problem: "4(y^2 - 9)", answer: "4(y - 3)(y + 3)"},
            {problem: "5(a^2 - 16)", answer: "5(a - 4)(a + 4)"},
            {problem: "(3x + 12)^2", answer: "9(x + 4)^2"},
            {problem: "(4y - 8)^2", answer: "16(y - 2)^2"},
            {problem: "(6a + 12)(a + 1)", answer: "6(a + 2)(a + 1)"},
            {problem: "(8x + 16)(x + 3)", answer: "8(x + 2)(x + 3)"},
            {problem: "7(x^2 - 25)", answer: "7(x - 5)(x + 5)"},
            {problem: "(10x - 20)(x + 6)", answer: "10(x - 2)(x + 6)"},
            {problem: "6(x^2 - 36)", answer: "6(x - 6)(x + 6)"},
            {problem: "(12x + 24)(x + 5)", answer: "12(x + 2)(x + 5)"},
            {problem: "(9y + 27)^2", answer: "81(y + 3)^2"},
            {problem: "8(x^2 - 49)", answer: "8(x - 7)(x + 7)"},
            {problem: "(15a - 30)(a + 8)", answer: "15(a - 2)(a + 8)"},
            {problem: "(14x + 28)(x + 9)", answer: "14(x + 2)(x + 9)"},
            {problem: "9(x^2 - 64)", answer: "9(x - 8)(x + 8)"},
            {problem: "(18x + 36)^2", answer: "324(x + 2)^2"},
            {problem: "(20y - 40)(y + 12)", answer: "20(y - 2)(y + 12)"},
            {problem: "11(x^2 - 81)", answer: "11(x - 9)(x + 9)"},
            {problem: "(16x + 48)(x + 7)", answer: "16(x + 3)(x + 7)"},
            {problem: "(21x - 42)^2", answer: "441(x - 2)^2"},
            {problem: "13(x^2 - 100)", answer: "13(x - 10)(x + 10)"},
            {problem: "(24a + 72)(a + 11)", answer: "24(a + 3)(a + 11)"},
            {problem: "(25y - 50)(y + 15)", answer: "25(y - 2)(y + 15)"},
            {problem: "17(x^2 - 121)", answer: "17(x - 11)(x + 11)"},
            {problem: "(28x + 84)^2", answer: "784(x + 3)^2"},
            {problem: "(30x - 60)(x + 13)", answer: "30(x - 2)(x + 13)"},
            {problem: "19(x^2 - 144)", answer: "19(x - 12)(x + 12)"},
            {problem: "(32x + 96)(x + 14)", answer: "32(x + 3)(x + 14)"},
            {problem: "(35x - 70)^2", answer: "1225(x - 2)^2"}
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
window.AlgebraLevels.finishFactorisingEasy = new FinishFactorisingEasy();