// levels/expandingAndSimplifyingHard.js
class ExpandingAndSimplifyingHardLevel {
    constructor() {
        this.key = 'expandingAndSimplifyingHard';
        this.name = 'Expanding & Simplifying (Hard)';
        this.usedQuestionIndices = new Set();
        
        this.questions = [
            // Textbook questions
            {problem: "3(2 + 5f) + 2(3f + 1)", answer: "21f + 8"},
            {problem: "4(2 + 5g) + 3(4 - 2g)", answer: "14g + 20"},
            {problem: "2 - 3(x + 2)", answer: "-3x - 4"},
            {problem: "1 - 5(x + 4)", answer: "-5x - 19"},
            {problem: "-3(2x + 1) + (2x - 3)", answer: "-4x - 6"},
            {problem: "-2(x + 2) + 3(x - 1)", answer: "x - 7"},
            {problem: "2(4x - 3) - 2(3x - 1)", answer: "2x - 4"},
            {problem: "-2(3x + 4) - 3(2x - 1)", answer: "-12x - 5"},
            {problem: "-(x + 3) - 3(x + 5)", answer: "-4x - 18"},
            {problem: "-2(2x - 3) - 3(x + 2)", answer: "-7x"},
            {problem: "3(3x - 1) - 2(2 - x)", answer: "11x - 7"},
            {problem: "-4(5 - x) - (2x - 5)", answer: "2x - 15"},
            {problem: "b + c - (b - c)", answer: "2c"},
            {problem: "(2x - 3y) - (3x - 2y)", answer: "-x - y"},
            {problem: "3(x - 2) - 2(x - 5)", answer: "x + 4"},
            {problem: "3(2a - 3b) - 2(a + 2b)", answer: "4a - 13b"},
            {problem: "4(s - t) - 6(s + t)", answer: "-2s - 10t"},
            {problem: "3(x + 2y) - (x - y)", answer: "2x + 7y"},
            {problem: "3(2a - 3b) - 4(-a - 2b)", answer: "10a - b"},
            {problem: "2(2 + 6b) - 3(4b - 2)", answer: "10"},
            {problem: "3(2t + 3) - 5(2 - t)", answer: "11t - 1"},
            {problem: "2(x + 4) + 3(x + 2)", answer: "5x + 14"},
            {problem: "4(3z - 2) - 3(2z - 1)", answer: "6z - 5"},
            {problem: "3(x^2 + 2y) - 2(x^2 - 3y)", answer: "x^2 + 12y"},
            {problem: "4xy + 2x^2 - 5yx + 3x^2", answer: "5x^2 - xy"},
            {problem: "5(2a - 3b) - 2(a - 4b)", answer: "8a - 7b"},
            {problem: "2x(x + 3y) + 3x(x - y)", answer: "5x^2 + 3xy"},
            {problem: "-3(a + 2b) - (2a - b)", answer: "-5a - 5b"},
            {problem: "4(3p + q) - 2(5p - 3q)", answer: "2p + 10q"},
            
            // Additional hard problems with negative coefficients and complex structures
            {problem: "-2(3x - 4) + 5(x + 1)", answer: "-x + 13"},
            {problem: "-4(2y + 3) - 3(y - 2)", answer: "-11y - 6"},
            {problem: "6(a - 2b) - 4(3a + b)", answer: "-6a - 16b"},
            {problem: "-3(2m - n) + 2(m + 3n)", answer: "-4m + 9n"},
            {problem: "5(x^2 - 2x) - 3(x^2 + x)", answer: "2x^2 - 13x"},
            {problem: "-2(3a^2 + 4a) + 5(a^2 - 2a)", answer: "-a^2 - 18a"},
                        
            // Complex expressions with quadratic terms
            {problem: "2x^2 + 3(x^2 - 4x) - (2x^2 + x)", answer: "3x^2 - 13x"},
            {problem: "4y^2 - 2(y^2 + 3y) + 5(y - 1)", answer: "2y^2 - y - 5"},
            {problem: "3(a^2 + 2a) - 2(a^2 - a) + 4a", answer: "a^2 + 12a"},
            {problem: "5x^2 - 3(x^2 - 2x) - 2(x + 3)", answer: "2x^2 + 4x - 6"},
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

// Register the level
window.AlgebraLevels = window.AlgebraLevels || {};
window.AlgebraLevels.expandingAndSimplifyingHard = new ExpandingAndSimplifyingHardLevel();