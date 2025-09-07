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
            {problem: "3(p^2 - 4)", answer: "3(p - 2)(p + 2)"},
            
            // Additional questions for cognitive complexity progression
            {problem: "(2x + 8)(x + 1)", answer: "2(x + 4)(x + 1)"},
            {problem: "(3y + 9)(y + 2)", answer: "3(y + 3)(y + 2)"},
            {problem: "(4a + 12)(a + 3)", answer: "4(a + 3)^2"},
            {problem: "(6x + 18)(x + 4)", answer: "6(x + 3)(x + 4)"},
            {problem: "(5p + 15)(p + 7)", answer: "5(p + 3)(p + 7)"},
            {problem: "2(x^2 - 1)", answer: "2(x - 1)(x + 1)"},
            {problem: "4(y^2 - 9)", answer: "4(y - 3)(y + 3)"},
            {problem: "5(a^2 - 16)", answer: "5(a - 4)(a + 4)"},
            {problem: "(3x + 12)^2", answer: "9(x + 4)^2"},
            {problem: "(4y - 8)^2", answer: "16(y - 2)^2"},
            {problem: "(6a + 12)(a + 1)", answer: "6(a + 2)(a + 1)"},
            {problem: "(8x + 16)(x + 3)", answer: "8(x + 2)(x + 3)"},
            {problem: "7(m^2 - 25)", answer: "7(m - 5)(m + 5)"},
            {problem: "(10p - 20)(p + 6)", answer: "10(p - 2)(p + 6)"},
            {problem: "6(n^2 - 36)", answer: "6(n - 6)(n + 6)"},
            {problem: "(12x + 24)(x + 5)", answer: "12(x + 2)(x + 5)"},
            {problem: "(9y + 27)^2", answer: "81(y + 3)^2"},
            {problem: "8(t^2 - 49)", answer: "8(t - 7)(t + 7)"},
            {problem: "(15a - 30)(a + 8)", answer: "15(a - 2)(a + 8)"},
            {problem: "(14x + 28)(x + 9)", answer: "14(x + 2)(x + 9)"},
            {problem: "9(k^2 - 64)", answer: "9(k - 8)(k + 8)"},
            {problem: "(18p + 36)^2", answer: "324(p + 2)^2"},
            {problem: "(20y - 40)(y + 12)", answer: "20(y - 2)(y + 12)"},
            {problem: "11(x^2 - 81)", answer: "11(x - 9)(x + 9)"},
            {problem: "(16m + 48)(m + 7)", answer: "16(m + 3)(m + 7)"},
            {problem: "(21x - 42)^2", answer: "441(x - 2)^2"},
            {problem: "13(w^2 - 100)", answer: "13(w - 10)(w + 10)"},
            {problem: "(24a + 72)(a + 11)", answer: "24(a + 3)(a + 11)"},
            {problem: "(25y - 50)(y + 15)", answer: "25(y - 2)(y + 15)"},
            {problem: "17(s^2 - 121)", answer: "17(s - 11)(s + 11)"},
            {problem: "(28x + 84)^2", answer: "784(x + 3)^2"},
            {problem: "(30p - 60)(p + 13)", answer: "30(p - 2)(p + 13)"},
            {problem: "19(r^2 - 144)", answer: "19(r - 12)(r + 12)"},
            {problem: "(32m + 96)(m + 14)", answer: "32(m + 3)(m + 14)"},
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