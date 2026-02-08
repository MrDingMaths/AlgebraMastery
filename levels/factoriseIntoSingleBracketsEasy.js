class FactoriseIntoSingleBracketsEasyLevel {
    constructor() {
        this.questions = [
            // Simple numerical factoring
            {problem: "2x + 8", answer: "2(x + 4)"},
            {problem: "3x + 3", answer: "3(x + 1)"},
            {problem: "3x + 6", answer: "3(x + 2)"},
            {problem: "3x - 18", answer: "3(x - 6)"},
            {problem: "4x + 20", answer: "4(x + 5)"},
            {problem: "4x - 4", answer: "4(x - 1)"},
            {problem: "5x - 5", answer: "5(x - 1)"},
            {problem: "5x - 15", answer: "5(x - 3)"},
            {problem: "5x - 20", answer: "5(x - 4)"},
            {problem: "5x - 30", answer: "5(x - 6)"},
            {problem: "6a + 30", answer: "6(a + 5)"},
            {problem: "7x + 7", answer: "7(x + 1)"},
            {problem: "8x + 40", answer: "8(x + 5)"},
            
            // Constant first patterns
            {problem: "4 + 8y", answer: "4(1 + 2y)"},
            {problem: "10 + 5a", answer: "5(2 + a)"},
            {problem: "3 - 9b", answer: "3(1 - 3b)"},
            {problem: "6 - 2x", answer: "2(3 - x)"},
            {problem: "8 + 4x", answer: "4(2 + x)"},
            {problem: "12 + 6x", answer: "6(2 + x)"},
            {problem: "15 - 5x", answer: "5(3 - x)"},
            {problem: "20 - 4x", answer: "4(5 - x)"},
            
            // Single variable squared patterns
            {problem: "x^2 + 2x", answer: "x(x + 2)"},
            {problem: "x^2 + 3x", answer: "x(x + 3)"},
            {problem: "a^2 - 4a", answer: "a(a - 4)"},
            {problem: "y^2 - 7y", answer: "y(y - 7)"},
            {problem: "x - x^2", answer: "x(1 - x)"},
            {problem: "y^2 + 9y", answer: "y(y + 9)"},
            {problem: "a^2 - 3a", answer: "a(a - 3)"},
            {problem: "x^2 - 4x", answer: "x(x - 4)"},
            {problem: "4x^2 + x", answer: "x(4x + 1)"},
            {problem: "5x^2 - 2x", answer: "x(5x - 2)"},
            {problem: "b^2 + 5b", answer: "b(b + 5)"},
            {problem: "x^2 - 6x", answer: "x(x - 6)"},
            {problem: "x^2 + 8x", answer: "x(x + 8)"},
            {problem: "x^2 - x", answer: "x(x - 1)"},
            
            // Two-term factoring with larger coefficients
            {problem: "6a - 15", answer: "3(2a - 5)"},
            {problem: "8b + 18", answer: "2(4b + 9)"},
            {problem: "9a - 15", answer: "3(3a - 5)"},
            {problem: "9b - 15", answer: "3(3b - 5)"},
            {problem: "10x + 25", answer: "5(2x + 5)"},
            {problem: "12 - 16x", answer: "4(3 - 4x)"},
            {problem: "15x + 35", answer: "5(3x + 7)"},
            {problem: "40 + 4x", answer: "4(10 + x)"},
            {problem: "14x + 21", answer: "7(2x + 3)"},
            {problem: "18x - 12", answer: "6(3x - 2)"},
            {problem: "24 + 8x", answer: "8(3 + x)"},
            {problem: "30y - 45", answer: "15(2y - 3)"},
            
            // Two variables - simple
            {problem: "6x + 6y", answer: "6(x + y)"},
            {problem: "7a + 7b", answer: "7(a + b)"},
            {problem: "10x + 4y", answer: "2(5x + 2y)"},
            {problem: "10x - 8y", answer: "2(5x - 4y)"},
            {problem: "12a + 3b", answer: "3(4a + b)"},
            {problem: "4a - 20b", answer: "4(a - 5b)"},
            {problem: "21x - 6y", answer: "3(7x - 2y)"},
            {problem: "30x - 20y", answer: "10(3x - 2y)"},
            {problem: "5x + 5y", answer: "5(x + y)"},
            {problem: "8x - 8y", answer: "8(x - y)"},
            {problem: "9x + 18y", answer: "9(x + 2y)"},
            {problem: "16x - 12y", answer: "4(4x - 3y)"}
        ];
    }

    getQuestions() {
        return this.questions;
    }

    generateQuestion() {
        const randomIndex = Math.floor(Math.random() * this.questions.length);
        return this.questions[randomIndex];
    }
}

// Register the level
window.AlgebraLevels = window.AlgebraLevels || {};
window.AlgebraLevels.factoriseIntoSingleBracketsEasy = new FactoriseIntoSingleBracketsEasyLevel();