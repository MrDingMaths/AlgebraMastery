class FactorisePerfectSquaresMediumLevel {
    constructor() {
        this.key = 'factorisePerfectSquaresMedium';
        this.name = 'Perfect Square Factorisation (Medium)';
        this.usedQuestionIndices = new Set();
        
        this.questions = [
            {problem: "9x^2 + 48x + 64", answer: "(3x+8)^2"},
            {problem: "9x^2 - 30x + 25", answer: "(3x-5)^2"},
            {problem: "4x^2 + 44x + 121", answer: "(2x+11)^2"},
            {problem: "49x^2 + 140x + 100", answer: "(7x+10)^2"},
            {problem: "25x^2 - 20x + 4", answer: "(5x-2)^2"},
            {problem: "x^2 - 2xy + y^2", answer: "(x-y)^2"},
            {problem: "x^2 + 2xy + y^2", answer: "(x+y)^2"},
            {problem: "9x^2 + 12xy + 4y^2", answer: "(3x+2y)^2"},
            {problem: "4x^2 + 12x + 9", answer: "(2x+3)^2"},
            {problem: "16b^2 - 8b + 1", answer: "(4b-1)^2"},
            {problem: "9a^2 + 12a + 4", answer: "(3a+2)^2"},
            {problem: "25x^2 - 40x + 16", answer: "(5x-4)^2"},
            {problem: "49y^2 + 14y + 1", answer: "(7y+1)^2"},
            {problem: "9y^2 - 30y + 25", answer: "(3y-5)^2"},
            {problem: "16x^2 - 24x + 9", answer: "(4x-3)^2"},
            {problem: "25x^2 + 10x + 1", answer: "(5x+1)^2"},
            {problem: "81a^2 - 36a + 4", answer: "(9a-2)^2"},
            {problem: "49x^2 + 84x + 36", answer: "(7x+6)^2"},
            
            // Additional questions for variety
            {problem: "36x^2 + 60x + 25", answer: "(6x+5)^2"},
            {problem: "64x^2 - 16x + 1", answer: "(8x-1)^2"},
            {problem: "100x^2 + 20x + 1", answer: "(10x+1)^2"},
            {problem: "121x^2 - 44x + 4", answer: "(11x-2)^2"},
            {problem: "144x^2 + 24x + 1", answer: "(12x+1)^2"},
            {problem: "169x^2 - 26x + 1", answer: "(13x-1)^2"},
            {problem: "4x^2 + 20x + 25", answer: "(2x+5)^2"},
            {problem: "36x^2 - 12x + 1", answer: "(6x-1)^2"},
            {problem: "64x^2 + 80x + 25", answer: "(8x+5)^2"},
            {problem: "81x^2 - 18x + 1", answer: "(9x-1)^2"},
            {problem: "a^2 + 2ab + b^2", answer: "(a+b)^2"},
            {problem: "4x^2 + 12xy + 9y^2", answer: "(2x+3y)^2"},
            {problem: "25x^2 - 30xy + 9y^2", answer: "(5x-3y)^2"},
            {problem: "16x^2 + 24xy + 9y^2", answer: "(4x+3y)^2"},
            {problem: "49y^2 - 42yx + 9x^2", answer: "(7y-3x)^2"}
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
window.AlgebraLevels.factorisePerfectSquaresMedium = new FactorisePerfectSquaresMediumLevel();