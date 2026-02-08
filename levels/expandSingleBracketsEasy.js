class ExpandSingleBracketsEasyLevel {
    constructor() {
        this.key = 'expandSingleBracketsEasy';
        this.name = 'Expanding Brackets (Easy)';
        this.usedQuestionIndices = new Set();
        
        // Predefined questions covering basic expansion
        this.questions = [
            
            // Single term multiplied by bracketed expression (positive coefficients)
            {problem: "2(x + 3)", answer: "2x + 6"},
            {problem: "3(a + 4)", answer: "3a + 12"},
            {problem: "4(b + 2)", answer: "4b + 8"},
            {problem: "5(y + 1)", answer: "5y + 5"},
            {problem: "3(x + 5)", answer: "3x + 15"},
            {problem: "2(x + 7)", answer: "2x + 14"},
            {problem: "4(x + 3)", answer: "4x + 12"},
            {problem: "6(x + 2)", answer: "6x + 12"},
            {problem: "3(x + 6)", answer: "3x + 18"},
            {problem: "5(x + 4)", answer: "5x + 20"},
            
            // Single term with subtraction
            {problem: "2(x - 3)", answer: "2x - 6"},
            {problem: "3(a - 2)", answer: "3a - 6"},
            {problem: "4(b - 1)", answer: "4b - 4"},
            {problem: "5(y - 4)", answer: "5y - 20"},
            {problem: "3(x - 6)", answer: "3x - 18"},
            {problem: "2(x - 5)", answer: "2x - 10"},
            {problem: "6(x - 2)", answer: "6x - 12"},
            {problem: "4(x - 3)", answer: "4x - 12"},
            {problem: "5(x - 1)", answer: "5x - 5"},
            {problem: "7(x - 4)", answer: "7x - 28"},
            
            // Variable coefficients
            {problem: "x(x + 2)", answer: "x^2 + 2x"},
            {problem: "a(a + 3)", answer: "a^2 + 3a"},
            {problem: "b(b + 4)", answer: "b^2 + 4b"},
            {problem: "y(y + 1)", answer: "y^2 + y"},
            {problem: "x(x + 5)", answer: "x^2 + 5x"},
            {problem: "x(x + 6)", answer: "x^2 + 6x"},
            {problem: "x(x - 2)", answer: "x^2 - 2x"},
            {problem: "a(a - 3)", answer: "a^2 - 3a"},
            {problem: "b(b - 1)", answer: "b^2 - b"},
            {problem: "y(y - 4)", answer: "y^2 - 4y"},
            
            // Mixed variable and constant multiplication
            {problem: "2x(x + 1)", answer: "2x^2 + 2x"},
            {problem: "3a(a + 2)", answer: "3a^2 + 6a"},
            {problem: "4b(b + 3)", answer: "4b^2 + 12b"},
            {problem: "2y(y - 1)", answer: "2y^2 - 2y"},
            {problem: "3x(x - 2)", answer: "3x^2 - 6x"},
            {problem: "5x(x + 1)", answer: "5x^2 + 5x"},
            {problem: "2x(x - 3)", answer: "2x^2 - 6x"},
            {problem: "4x(x + 2)", answer: "4x^2 + 8x"},
            {problem: "3x(x - 4)", answer: "3x^2 - 12x"},
            {problem: "6x(x + 1)", answer: "6x^2 + 6x"},
            
            // Basic two-term expansions
            {problem: "x(2 + y)", answer: "2x + xy"},
            {problem: "a(3 + b)", answer: "3a + ab"},
            {problem: "x(4 + y)", answer: "4x + xy"},
            {problem: "x(1 + y)", answer: "x + xy"},
            {problem: "x(5 - y)", answer: "5x - xy"},
            {problem: "a(2 - b)", answer: "2a - ab"},
            {problem: "x(3 - y)", answer: "3x - xy"},
            {problem: "x(6 - y)", answer: "6x - xy"},
            {problem: "x(2 - y)", answer: "2x - xy"},
            
            // Simple brackets with different variables
            {problem: "2(3x + 4)", answer: "6x + 8"},
            {problem: "3(2a + 5)", answer: "6a + 15"},
            {problem: "4(3b + 1)", answer: "12b + 4"},
            {problem: "5(2y + 3)", answer: "10y + 15"},
            {problem: "2(4x + 3)", answer: "8x + 6"},
            {problem: "3(5x + 2)", answer: "15x + 6"},
            {problem: "6(2x + 1)", answer: "12x + 6"},
            {problem: "4(3x + 2)", answer: "12x + 8"},
            {problem: "5(2x + 4)", answer: "10x + 20"},
            {problem: "3(4x + 1)", answer: "12x + 3"},
            
            // Subtraction in brackets
            {problem: "2(3x - 4)", answer: "6x - 8"},
            {problem: "3(2a - 1)", answer: "6a - 3"},
            {problem: "4(5b - 2)", answer: "20b - 8"},
            {problem: "5(2y - 3)", answer: "10y - 15"},
            {problem: "2(4x - 5)", answer: "8x - 10"},
            {problem: "3(6x - 1)", answer: "18x - 3"},
            {problem: "4(2x - 3)", answer: "8x - 12"},
            {problem: "6(3x - 2)", answer: "18x - 12"},
            {problem: "5(4x - 1)", answer: "20x - 5"},
            {problem: "7(2x - 4)", answer: "14x - 28"},

            // Textbook questions
            {problem: "3(x - 2)", answer: "3x - 6"},
            {problem: "5(x + 1)", answer: "5x + 5"},
            {problem: "2(x + 4)", answer: "2x + 8"},
            {problem: "3(x - 5)", answer: "3x - 15"},
            {problem: "5(x + 12)", answer: "5x + 60"},
            {problem: "7(x - 9)", answer: "7x - 63"},
            {problem: "2(x - 6)", answer: "2x - 12"},
            {problem: "4(7 - x)", answer: "28 - 4x"},
            {problem: "7(3 - x)", answer: "21 - 7x"},
            {problem: "2(8 - x)", answer: "16 - 2x"},
            {problem: "6(y + 8)", answer: "6y + 48"},
            {problem: "7(x + 4)", answer: "7x + 28"},
            {problem: "8(x + 7)", answer: "8x + 56"},
            {problem: "4(2 + a)", answer: "8 + 4a"},
            {problem: "7(x + 5)", answer: "7x + 35"},
            {problem: "3(6 + a)", answer: "18 + 3a"},
            {problem: "5(x - 4)", answer: "5x - 20"},
            {problem: "8(y - 8)", answer: "8y - 64"},
            {problem: "8(x - 7)", answer: "8x - 56"},
            {problem: "6(3 - x)", answer: "18 - 6x"},
            {problem: "10(8 - y)", answer: "80 - 10y"},
            {problem: "5(x - 10)", answer: "5x - 50"},
            {problem: "9(x + 7)", answer: "9x + 63"},
            {problem: "7(x - 7)", answer: "7x - 49"},
            {problem: "(x + 4) \\times 2", answer: "2x + 8"},
            {problem: "(x - 2) \\times 3", answer: "3x - 6"},
            
            // Additional basic problems
            {problem: "3(x+4)", answer: "3x + 12"},
            {problem: "3(4+x)", answer: "3x + 12"},
            {problem: "3(4-x)", answer: "12 - 3x"},
            {problem: "3(x-4)", answer: "3x - 12"},
            {problem: "6(x-2)", answer: "6x - 12"},
            {problem: "x(x+4)", answer: "x^2 + 4x"},
            {problem: "x(4+x)", answer: "x^2 + 4x"},
            {problem: "x(4-x)", answer: "4x - x^2"},
            {problem: "x(x-4)", answer: "x^2 - 4x"},
        ];
    }

    generateQuestion() {
        // Reset if we've used all questions in this session
        if (this.usedQuestionIndices.size >= this.questions.length) {
            this.usedQuestionIndices.clear();
        }
        
        // Pick a random unused question
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
window.AlgebraLevels.expandSingleBracketsEasy = new ExpandSingleBracketsEasyLevel();