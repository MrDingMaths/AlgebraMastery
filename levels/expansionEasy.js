class ExpansionEasy {
    constructor() {
        this.key = 'expansionEasy';
        this.name = 'Expanding Brackets (Easy)';
        this.usedQuestionIndices = new Set();
        
        // Predefined questions covering basic expansion
        this.questions = [
            
            // Single term multiplied by bracketed expression (positive coefficients)
            {problem: "2(x + 3)", answer: "2x + 6"},
            {problem: "3(a + 4)", answer: "3a + 12"},
            {problem: "4(b + 2)", answer: "4b + 8"},
            {problem: "5(y + 1)", answer: "5y + 5"},
            {problem: "3(m + 5)", answer: "3m + 15"},
            {problem: "2(p + 7)", answer: "2p + 14"},
            {problem: "4(x + 3)", answer: "4x + 12"},
            {problem: "6(n + 2)", answer: "6n + 12"},
            {problem: "3(z + 6)", answer: "3z + 18"},
            {problem: "5(r + 4)", answer: "5r + 20"},
            
            // Single term with subtraction
            {problem: "2(x - 3)", answer: "2x - 6"},
            {problem: "3(a - 2)", answer: "3a - 6"},
            {problem: "4(b - 1)", answer: "4b - 4"},
            {problem: "5(y - 4)", answer: "5y - 20"},
            {problem: "3(m - 6)", answer: "3m - 18"},
            {problem: "2(p - 5)", answer: "2p - 10"},
            {problem: "6(x - 2)", answer: "6x - 12"},
            {problem: "4(n - 3)", answer: "4n - 12"},
            {problem: "5(z - 1)", answer: "5z - 5"},
            {problem: "7(r - 4)", answer: "7r - 28"},
            
            // Variable coefficients
            {problem: "x(x + 2)", answer: "x^2 + 2x"},
            {problem: "a(a + 3)", answer: "a^2 + 3a"},
            {problem: "b(b + 4)", answer: "b^2 + 4b"},
            {problem: "y(y + 1)", answer: "y^2 + y"},
            {problem: "m(m + 5)", answer: "m^2 + 5m"},
            {problem: "p(p + 6)", answer: "p^2 + 6p"},
            {problem: "x(x - 2)", answer: "x^2 - 2x"},
            {problem: "a(a - 3)", answer: "a^2 - 3a"},
            {problem: "b(b - 1)", answer: "b^2 - b"},
            {problem: "y(y - 4)", answer: "y^2 - 4y"},
            
            // Mixed variable and constant multiplication
            {problem: "2x(x + 1)", answer: "2x^2 + 2x"},
            {problem: "3a(a + 2)", answer: "3a^2 + 6a"},
            {problem: "4b(b + 3)", answer: "4b^2 + 12b"},
            {problem: "2y(y - 1)", answer: "2y^2 - 2y"},
            {problem: "3m(m - 2)", answer: "3m^2 - 6m"},
            {problem: "5p(p + 1)", answer: "5p^2 + 5p"},
            {problem: "2x(x - 3)", answer: "2x^2 - 6x"},
            {problem: "4n(n + 2)", answer: "4n^2 + 8n"},
            {problem: "3z(z - 4)", answer: "3z^2 - 12z"},
            {problem: "6r(r + 1)", answer: "6r^2 + 6r"},
            
            // Basic two-term expansions
            {problem: "x(2 + y)", answer: "2x + xy"},
            {problem: "a(3 + b)", answer: "3a + ab"},
            {problem: "m(4 + n)", answer: "4m + mn"},
            {problem: "p(1 + q)", answer: "p + pq"},
            {problem: "x(5 - y)", answer: "5x - xy"},
            {problem: "a(2 - b)", answer: "2a - ab"},
            {problem: "m(3 - n)", answer: "3m - mn"},
            {problem: "p(6 - q)", answer: "6p - pq"},
            {problem: "r(4 + s)", answer: "4r + rs"},
            {problem: "t(2 - u)", answer: "2t - tu"},
            
            // Simple brackets with different variables
            {problem: "2(3x + 4)", answer: "6x + 8"},
            {problem: "3(2a + 5)", answer: "6a + 15"},
            {problem: "4(3b + 1)", answer: "12b + 4"},
            {problem: "5(2y + 3)", answer: "10y + 15"},
            {problem: "2(4m + 3)", answer: "8m + 6"},
            {problem: "3(5p + 2)", answer: "15p + 6"},
            {problem: "6(2x + 1)", answer: "12x + 6"},
            {problem: "4(3n + 2)", answer: "12n + 8"},
            {problem: "5(2z + 4)", answer: "10z + 20"},
            {problem: "3(4r + 1)", answer: "12r + 3"},
            
            // Subtraction in brackets
            {problem: "2(3x - 4)", answer: "6x - 8"},
            {problem: "3(2a - 1)", answer: "6a - 3"},
            {problem: "4(5b - 2)", answer: "20b - 8"},
            {problem: "5(2y - 3)", answer: "10y - 15"},
            {problem: "2(4m - 5)", answer: "8m - 10"},
            {problem: "3(6p - 1)", answer: "18p - 3"},
            {problem: "4(2x - 3)", answer: "8x - 12"},
            {problem: "6(3n - 2)", answer: "18n - 12"},
            {problem: "5(4z - 1)", answer: "20z - 5"},
            {problem: "7(2r - 4)", answer: "14r - 28"},

            // Textbook questions
            {problem: "3(x - 2)", answer: "3x - 6"},
            {problem: "2(x - 3)", answer: "2x - 6"},
            {problem: "5(x + 1)", answer: "5x + 5"},
            {problem: "2(x + 4)", answer: "2x + 8"},
            {problem: "3(x - 5)", answer: "3x - 15"},
            {problem: "2(x + 3)", answer: "2x + 6"},
            {problem: "5(x + 12)", answer: "5x + 60"},
            {problem: "2(x + 7)", answer: "2x + 14"},
            {problem: "7(x - 9)", answer: "7x - 63"},
            {problem: "2(x - 6)", answer: "2x - 12"},
            {problem: "4(7 - x)", answer: "28 - 4x"},
            {problem: "7(3 - x)", answer: "21 - 7x"},
            {problem: "3(v + 6)", answer: "3v + 18"},
            {problem: "2(8 - c)", answer: "16 - 2c"},
            {problem: "6(y + 8)", answer: "6y + 48"},
            {problem: "7(l + 4)", answer: "7l + 28"},
            {problem: "8(s + 7)", answer: "8s + 56"},
            {problem: "4(2 + a)", answer: "8 + 4a"},
            {problem: "7(x + 5)", answer: "7x + 35"},
            {problem: "3(6 + a)", answer: "18 + 3a"},
            {problem: "4(x - 3)", answer: "4x - 12"},
            {problem: "5(j - 4)", answer: "5j - 20"},
            {problem: "8(y - 8)", answer: "8y - 64"},
            {problem: "8(e - 7)", answer: "8e - 56"},
            {problem: "6(3 - e)", answer: "18 - 6e"},
            {problem: "10(8 - y)", answer: "80 - 10y"},
            {problem: "5(k - 10)", answer: "5k - 50"},
            {problem: "9(o + 7)", answer: "9o + 63"},
            {problem: "7(q - 7)", answer: "7q - 49"},
            {problem: "(x + 4) \\times 2", answer: "2x + 8"},
            {problem: "(m - 2) \\times 3", answer: "3m - 6"},
            
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
window.AlgebraLevels.expansionEasy = new ExpansionEasy();