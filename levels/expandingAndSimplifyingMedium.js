// levels/expandingAndSimplifyingMedium.js
class ExpandingAndSimplifyingMediumLevel {
    constructor() {
        this.key = 'expandingAndSimplifyingMedium';
        this.name = 'Expanding & Simplifying (Medium)';
        this.usedQuestionIndices = new Set();
        
        this.questions = [
            // Textbook questions
            {problem: "7(9f + 10) + 2f", answer: "65f + 70"},
            {problem: "8(2 + 5x) + 4x", answer: "16 + 44x"},
            {problem: "4(2a + 8) + 7a", answer: "15a + 32"},
            {problem: "6(3v + 10) + 6v", answer: "24v + 60"},
            {problem: "7(10a + 10) + 6a", answer: "76a + 70"},
            {problem: "6(3q - 5) + 2q", answer: "20q - 30"},
            {problem: "6(4m - 5) + 8m", answer: "32m - 30"},
            {problem: "4(8 + 7m) - 6m", answer: "32 + 22m"},
            {problem: "3(3 + 5d) + 4(10d + 7)", answer: "55d + 37"},
            {problem: "2(9 + 10j) + 4(3j + 3)", answer: "32j + 30"},
            {problem: "2(9 + 6d) + 7(2 + 9d)", answer: "75d + 32"},
            {problem: "6(10 - 6j) + 4(10j - 5)", answer: "4j + 40"},
            {problem: "4 + 6(x - 3)", answer: "6x - 14"},
            {problem: "2 + 5(3x - 1)", answer: "15x - 3"},
            {problem: "3 + 4(x - 2)", answer: "4x - 5"},
            {problem: "7 + 2(x - 3)", answer: "2x + 1"},
            {problem: "5 - (x - 6)", answer: "11 - x"},
            {problem: "9 - (x - 3)", answer: "12 - x"},
            {problem: "5 - (3 + 2x)", answer: "2 - 2x"},
            {problem: "4 - (3x - 2)", answer: "6 - 3x"},
            {problem: "2(x + 3) + 3(x + 2)", answer: "5x + 12"},
            {problem: "2(x - 3) + 2(x - 1)", answer: "4x - 8"},
            {problem: "3(2x + 1) + 5(x - 1)", answer: "11x - 2"},
            {problem: "4(3x + 2) + 5(x - 3)", answer: "17x - 7"},
            {problem: "3a + 5 + 4(a - 2)", answer: "7a - 3"},
            {problem: "2 + 2(x - 3)", answer: "2x - 4"},
            {problem: "-3(a + 2) + 10", answer: "-3a + 4"},
            {problem: "3 - (x + 1)", answer: "2 - x"},
            {problem: "2(x + 4) + 3(x + 5)", answer: "5x + 23"},
            {problem: "4(a + 2) + 6(a + 3)", answer: "10a + 26"},
            {problem: "6(3y + 2) + 3(y - 3)", answer: "21y + 3"},
            {problem: "3(2m + 3) + 3(3m - 1)", answer: "15m + 6"},
            
            // Additional medium complexity problems
            {problem: "5(2x + 3) - 3x", answer: "7x + 15"},
            {problem: "3(4y - 1) + 2y", answer: "14y - 3"},
            {problem: "4(x + 5) - 2(x - 1)", answer: "2x + 22"},
            {problem: "6(2a - 3) + 3(a + 4)", answer: "15a - 6"},
            {problem: "2(3b + 7) - (b - 5)", answer: "5b + 19"},
            {problem: "5(x - 2) + 3(2x + 1)", answer: "11x - 7"},
            {problem: "7(2y + 1) - 4(y - 3)", answer: "10y + 19"},
            {problem: "3(4m - 5) + 2(3m + 7)", answer: "18m - 1"},
            
            // Problems with mixed operations
            {problem: "2x + 3(x + 4) - 5", answer: "5x + 7"},
            {problem: "4y - 2(y - 3) + 1", answer: "2y + 7"},
            {problem: "6 + 3(2a - 1) - a", answer: "5a + 3"},
            {problem: "8 - 2(3x + 1) + x", answer: "6 - 5x"},
            {problem: "5(p + 2) - 3p + 4", answer: "2p + 14"},
            {problem: "7q - 4(q - 2) - 3", answer: "3q + 5"},
            
            // Double brackets
            {problem: "2(x + 1) + 4(x + 3)", answer: "6x + 14"},
            {problem: "3(y - 2) + 5(y + 1)", answer: "8y - 1"},
            {problem: "4(2a + 3) + 2(a - 5)", answer: "10a + 2"},
            {problem: "6(b - 1) + 3(2b + 4)", answer: "12b + 6"},
            {problem: "5(3x + 2) - 2(x + 7)", answer: "13x - 4"},
            {problem: "7(y + 4) - 3(2y - 1)", answer: "y + 31"},
            
            // More challenging combinations
            {problem: "3(2x + 5) + 4x - 7", answer: "10x + 8"},
            {problem: "5(a - 3) - 2a + 10", answer: "3a - 5"},
            {problem: "4(3y + 1) - 6y + 2", answer: "6y + 6"},
            {problem: "2(5b - 4) + 3b - 1", answer: "13b - 9"},
            {problem: "6(x + 2) - 4x + 5", answer: "2x + 17"},
            {problem: "8(2m - 3) - 10m + 12", answer: "6m - 12"},
            
            // Additional expanding and simplifying problems
            {problem: "3 + 2(x + 4)", answer: "2x + 11"},
            {problem: "3 - 4(x - 2)", answer: "11 - 4x"},
            {problem: "1 - 5(x + 4)", answer: "-5x - 19"},
            {problem: "3(x - 4) + 1", answer: "3x - 11"},
            {problem: "3(x - 4) - 2", answer: "3x - 14"},
            {problem: "3(x - 4) - x", answer: "2x - 12"},
            {problem: "3(x - 4) - 3x", answer: "-12"},
            {problem: "-3 + 3(x - 4)", answer: "3x - 15"},
            {problem: "x + 3(x - 4)", answer: "4x - 12"},
            {problem: "-2x + 3(x - 4)", answer: "x - 12"},
            {problem: "3x(x - 4) + 2x", answer: "3x^2 - 10x"},
            {problem: "2x + 3x(x - 4)", answer: "3x^2 - 10x"},
            {problem: "-2x + 3x(x - 4)", answer: "3x^2 - 14x"},
            {problem: "-3(x - 4) + 1", answer: "13 - 3x"},
            {problem: "-3(x - 4) - 2", answer: "10 - 3x"},
            {problem: "-3(x - 4) - x", answer: "12 - 4x"},
            {problem: "-3(x - 4) - 3x", answer: "12 - 6x"},
            {problem: "2 - 3(x - 4)", answer: "14 - 3x"},
            {problem: "-3 - 3(x - 4)", answer: "9 - 3x"},
            {problem: "x - 3(x - 4)", answer: "12 - 2x"},
            {problem: "-2x - 3(x - 4)", answer: "12 - 5x"},
            {problem: "-3x(x - 4) + 2x", answer: "-3x^2 + 14x"},
            {problem: "2x - 3x(x - 4)", answer: "-3x^2 + 14x"},
            {problem: "-2x - 3x(x - 4)", answer: "-3x^2 + 10x"}
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
window.AlgebraLevels.expandingAndSimplifyingMedium = new ExpandingAndSimplifyingMediumLevel();