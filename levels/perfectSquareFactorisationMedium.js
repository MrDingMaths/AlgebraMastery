class PerfectSquareFactorisationMedium {
    constructor() {
        this.key = 'perfectSquareFactorisationMedium';
        this.name = 'Perfect Square Factorisation (Medium)';
        this.usedQuestionIndices = new Set();
        
        this.questions = [
            {problem: "9x^2 + 48x + 64", answer: "(3x+8)^2"},
            {problem: "9x^2 - 30x + 25", answer: "(3x-5)^2"},
            {problem: "4x^2 + 44x + 121", answer: "(2x+11)^2"},
            {problem: "49x^2 + 140x + 100", answer: "(7x+10)^2"},
            {problem: "25x^2 - 20x + 4", answer: "(5x-2)^2"},
            {problem: "m^2 - 2mn + n^2", answer: "(m-n)^2"},
            {problem: "r^2 + 2rt + t^2", answer: "(r+t)^2"},
            {problem: "9x^2 + 12xy + 4y^2", answer: "(3x+2y)^2"},
            {problem: "4x^2 + 12x + 9", answer: "(2x+3)^2"},
            {problem: "16b^2 - 8b + 1", answer: "(4b-1)^2"},
            {problem: "9a^2 + 12a + 4", answer: "(3a+2)^2"},
            {problem: "25x^2 - 40x + 16", answer: "(5x-4)^2"},
            {problem: "49y^2 + 14y + 1", answer: "(7y+1)^2"},
            {problem: "9y^2 - 30y + 25", answer: "(3y-5)^2"},
            {problem: "16k^2 - 24k + 9", answer: "(4k-3)^2"},
            {problem: "25x^2 + 10x + 1", answer: "(5x+1)^2"},
            {problem: "81a^2 - 36a + 4", answer: "(9a-2)^2"},
            {problem: "49m^2 + 84m + 36", answer: "(7m+6)^2"},
            
            // Additional questions for variety
            {problem: "36x^2 + 60x + 25", answer: "(6x+5)^2"},
            {problem: "64t^2 - 16t + 1", answer: "(8t-1)^2"},
            {problem: "100p^2 + 20p + 1", answer: "(10p+1)^2"},
            {problem: "121q^2 - 44q + 4", answer: "(11q-2)^2"},
            {problem: "144r^2 + 24r + 1", answer: "(12r+1)^2"},
            {problem: "169s^2 - 26s + 1", answer: "(13s-1)^2"},
            {problem: "4u^2 + 20u + 25", answer: "(2u+5)^2"},
            {problem: "36v^2 - 12v + 1", answer: "(6v-1)^2"},
            {problem: "64w^2 + 80w + 25", answer: "(8w+5)^2"},
            {problem: "81z^2 - 18z + 1", answer: "(9z-1)^2"},
            {problem: "a^2 + 2ab + b^2", answer: "(a+b)^2"},
            {problem: "x^2 - 2xy + y^2", answer: "(x-y)^2"},
            {problem: "4p^2 + 12pq + 9q^2", answer: "(2p+3q)^2"},
            {problem: "25s^2 - 30st + 9t^2", answer: "(5s-3t)^2"},
            {problem: "16u^2 + 24uv + 9v^2", answer: "(4u+3v)^2"},
            {problem: "49w^2 - 42wx + 9x^2", answer: "(7w-3x)^2"}
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
window.AlgebraLevels.perfectSquareFactorisationMedium = new PerfectSquareFactorisationMedium();