// levels/expandingAndSimplifyingEasy.js
class ExpandingAndSimplifyingEasyLevel {
    constructor() {
        this.key = 'expandingAndSimplifyingEasy';
        this.name = 'Expanding & Simplifying (Easy)';
        this.usedQuestionIndices = new Set();
        
        this.questions = [
            // Basic expanding with constants and single variables
            {problem: "3 + 2(x + 4)", answer: "2x + 11"},
            {problem: "5 + (3x - 4)", answer: "3x + 1"},
            {problem: "2(x + 1) - x", answer: "x + 2"},
            
            // Simple addition after expanding
            {problem: "x + 2(x + 1)", answer: "3x + 2"},
            {problem: "3 + (2x + 5)", answer: "2x + 8"},
            {problem: "2a + (a + 3)", answer: "3a + 3"},
            {problem: "5 + 2(y + 1)", answer: "2y + 7"},
            {problem: "4(x + 2) + 3", answer: "4x + 11"},
            {problem: "3(y + 1) + y", answer: "4y + 3"},
            {problem: "5(a + 2) + 2", answer: "5a + 12"},
            {problem: "6 + 2(p + 3)", answer: "2p + 12"},
            {problem: "x + 4(x + 1)", answer: "5x + 4"},
            {problem: "2(b - 1) + 5", answer: "2b + 3"},
            {problem: "7 + (4x - 1)", answer: "4x + 6"},
            {problem: "3(m + 5) - 10", answer: "3m + 5"},
            {problem: "2(n - 3) + n", answer: "3n - 6"},
            {problem: "8 + 3(q - 2)", answer: "3q + 2"},
            // Constants with simple expansion
            {problem: "1 + 2(x + 1)", answer: "2x + 3"},
            {problem: "4 + 3(y + 2)", answer: "3y + 10"},
            {problem: "6 + 2(a - 1)", answer: "2a + 4"},
            {problem: "8 - 2(x - 3)", answer: "14 - 2x"},
            {problem: "5(x + 2) - 3x", answer: "2x + 10"},
            {problem: "10 - 2(y + 3)", answer: "4 - 2y"},
            {problem: "4(a - 1) - a", answer: "3a - 4"},
            {problem: "3(2x + 1) + 4", answer: "6x + 7"},
            {problem: "2y + 3(y - 2)", answer: "5y - 6"},
            {problem: "12 - (x + 5)", answer: "7 - x"},
            {problem: "5(b - 3) + 2b", answer: "7b - 15"},
            {problem: "9 - 4(p - 1)", answer: "13 - 4p"},
            {problem: "2(3m + 4) - 5m", answer: "m + 8"},
            {problem: "6 - (2 - 3x)", answer: "3x + 4"},
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
window.AlgebraLevels.expandingAndSimplifyingEasy = new ExpandingAndSimplifyingEasyLevel();