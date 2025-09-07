class PerfectSquareFactorisationEasy {
    constructor() {
        this.key = 'perfectSquareFactorisationEasy';
        this.name = 'Perfect Square Factorisation (Easy)';
        this.usedQuestionIndices = new Set();
        
        this.questions = [
            {problem: "x^2 + 14x + 49", answer: "(x+7)^2"},
            {problem: "x^2 + 2x + 1", answer: "(x+1)^2"},
            {problem: "y^2 - 6y + 9", answer: "(y-3)^2"},
            {problem: "y^2 - 2y + 1", answer: "(y-1)^2"},
            {problem: "x^2 + 4x + 4", answer: "(x+2)^2"},
            {problem: "p^2 - 8p + 16", answer: "(p-4)^2"},
            {problem: "m^2 + 6m + 9", answer: "(m+3)^2"},
            {problem: "a^2 - 10a + 25", answer: "(a-5)^2"},
            {problem: "x^2 - 4x + 4", answer: "(x-2)^2"},
            {problem: "x^2 + 6x + 9", answer: "(x+3)^2"},
            {problem: "m^2 + 10m + 25", answer: "(m+5)^2"},
            {problem: "t^2 - 4t + 4", answer: "(t-2)^2"},
            {problem: "x^2 - 12x + 36", answer: "(x-6)^2"},
            
            // Additional questions for variety
            {problem: "b^2 + 8b + 16", answer: "(b+4)^2"},
            {problem: "c^2 - 16c + 64", answer: "(c-8)^2"},
            {problem: "d^2 + 18d + 81", answer: "(d+9)^2"},
            {problem: "k^2 - 20k + 100", answer: "(k-10)^2"},
            {problem: "n^2 + 12n + 36", answer: "(n+6)^2"},
            {problem: "r^2 - 14r + 49", answer: "(r-7)^2"},
            {problem: "s^2 + 16s + 64", answer: "(s+8)^2"},
            {problem: "v^2 - 18v + 81", answer: "(v-9)^2"},
            {problem: "w^2 + 20w + 100", answer: "(w+10)^2"},
            {problem: "z^2 - 22z + 121", answer: "(z-11)^2"},
            {problem: "h^2 + 24h + 144", answer: "(h+12)^2"},
            {problem: "j^2 - 26j + 169", answer: "(j-13)^2"},
            {problem: "l^2 + 28l + 196", answer: "(l+14)^2"},
            {problem: "q^2 - 30q + 225", answer: "(q-15)^2"}
        ];
    }

    generateQuestion() {
        if (this.usedQuestionIndices.size >= this.questions.length) {
            this.usedQuestionIndices.clear();
        }
        
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

window.AlgebraLevels = window.AlgebraLevels || {};
window.AlgebraLevels.perfectSquareFactorisationEasy = new PerfectSquareFactorisationEasy();