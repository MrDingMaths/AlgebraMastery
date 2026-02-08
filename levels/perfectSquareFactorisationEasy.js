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
            {problem: "x^2 - 8x + 16", answer: "(x-4)^2"},
            {problem: "x^2 + 6x + 9", answer: "(x+3)^2"},
            {problem: "a^2 - 10a + 25", answer: "(a-5)^2"},
            {problem: "x^2 - 4x + 4", answer: "(x-2)^2"},
            {problem: "x^2 + 10x + 25", answer: "(x+5)^2"},
            {problem: "x^2 - 12x + 36", answer: "(x-6)^2"},
            
            // Additional questions for variety
            {problem: "b^2 + 8b + 16", answer: "(b+4)^2"},
            {problem: "x^2 - 16x + 64", answer: "(x-8)^2"},
            {problem: "x^2 + 18x + 81", answer: "(x+9)^2"},
            {problem: "x^2 - 20x + 100", answer: "(x-10)^2"},
            {problem: "x^2 + 12x + 36", answer: "(x+6)^2"},
            {problem: "x^2 - 14x + 49", answer: "(x-7)^2"},
            {problem: "x^2 + 16x + 64", answer: "(x+8)^2"},
            {problem: "x^2 - 18x + 81", answer: "(x-9)^2"},
            {problem: "x^2 + 20x + 100", answer: "(x+10)^2"},
            {problem: "x^2 - 22x + 121", answer: "(x-11)^2"},
            {problem: "x^2 + 24x + 144", answer: "(x+12)^2"},
            {problem: "x^2 - 26x + 169", answer: "(x-13)^2"},
            {problem: "x^2 + 28x + 196", answer: "(x+14)^2"},
            {problem: "x^2 - 30x + 225", answer: "(x-15)^2"}
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