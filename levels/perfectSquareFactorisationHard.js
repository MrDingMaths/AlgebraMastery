class PerfectSquareFactorisationHard {
    constructor() {
        this.key = 'perfectSquareFactorisationHard';
        this.name = 'Perfect Square Factorisation (Hard)';
        this.usedQuestionIndices = new Set();
        
        this.questions = [
            {problem: "25a^4 - 10a^2 + 1", answer: "(5a^2-1)^2"},
            {problem: "16x^4 + 24x^2 + 9", answer: "(4x^2+3)^2"},
            {problem: "36 - 12x + x^2", answer: "(x-6)^2"},
            {problem: "49x^6 - 14x^3 + 1", answer: "(7x^3-1)^2"},
            {problem: "81x^2 - 36xz + 4z^2", answer: "(9x-2z)^2"},
            {problem: "144m^6 - 72m^3 + 9", answer: "(12m^3-3)^2"},
            {problem: "t^2 + t + \\frac{1}{4}", answer: "(t+\\frac{1}{2})^2"},
            {problem: "x^2 - \\frac{4x}{3} + \\frac{4}{9}", answer: "(x-\\frac{2}{3})^2"},
            {problem: "9y^2 + \\frac{6y}{5} + \\frac{1}{25}", answer: "(3y+\\frac{1}{5})^2"},
            {problem: "x^2 + 2 + \\frac{1}{x^2}", answer: "(x+\\frac{1}{x})^2"},
            {problem: "25k^2 - 20 + \\frac{4}{k^2}", answer: "(5k-\\frac{2}{k})^2"},
            
            // Additional questions for variety
            {problem: "9t^4 + 6t^2 + 1", answer: "(3t^2+1)^2"},
            {problem: "64x^6 - 16x^3 + 1", answer: "(8x^3-1)^2"},
            {problem: "100y^8 + 20y^4 + 1", answer: "(10y^4+1)^2"},
            {problem: "121a^4 - 22a^2 + 1", answer: "(11a^2-1)^2"},
            {problem: "169b^6 + 26b^3 + 1", answer: "(13b^3+1)^2"},
            {problem: "196c^4 - 28c^2 + 1", answer: "(14c^2-1)^2"},
            {problem: "225d^8 + 30d^4 + 1", answer: "(15d^4+1)^2"},
            {problem: "256e^6 - 32e^3 + 1", answer: "(16e^3-1)^2"},
            {problem: "289f^4 + 34f^2 + 1", answer: "(17f^2+1)^2"},
            {problem: "324g^6 - 36g^3 + 1", answer: "(18g^3-1)^2"},
            {problem: "361h^4 + 38h^2 + 1", answer: "(19h^2+1)^2"},
            {problem: "400j^8 - 40j^4 + 1", answer: "(20j^4-1)^2"},
            {problem: "x^2 - \\frac{2x}{3} + \\frac{1}{9}", answer: "(x-\\frac{1}{3})^2"},
            {problem: "4y^2 + \\frac{4y}{3} + \\frac{1}{9}", answer: "(2y+\\frac{1}{3})^2"},
            {problem: "9z^2 - \\frac{12z}{5} + \\frac{4}{25}", answer: "(3z-\\frac{2}{5})^2"},
            {problem: "16a^2 + \\frac{8a}{7} + \\frac{1}{49}", answer: "(4a+\\frac{1}{7})^2"},
            {problem: "25b^2 - \\frac{10b}{3} + \\frac{1}{9}", answer: "(5b-\\frac{1}{3})^2"},
            {problem: "36c^2 + \\frac{12c}{5} + \\frac{1}{25}", answer: "(6c+\\frac{1}{5})^2"},
            {problem: "49d^2 - \\frac{14d}{9} + \\frac{1}{81}", answer: "(7d-\\frac{1}{9})^2"},
            {problem: "64e^2 + \\frac{16e}{7} + \\frac{1}{49}", answer: "(8e+\\frac{1}{7})^2"}
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
window.AlgebraLevels.perfectSquareFactorisationHard = new PerfectSquareFactorisationHard();