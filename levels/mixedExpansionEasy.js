class MixedExpansionEasy {
    constructor() {
        this.key = 'mixedExpansionEasy';
        this.name = 'Mixed Expansion (Easy)';
        this.usedQuestionIndices = new Set();
        
        // Predefined questions covering mixed expansion techniques
        this.questions = [
            
            // Basic single term expansions
            {problem: "3(x + 2)", answer: "3x + 6"},
            {problem: "x(x - 1)", answer: "x^2 - x"},
            {problem: "-2(3 - x)", answer: "2x - 6"},
            {problem: "-2x(5 - 3x)", answer: "6x^2 - 10x"},
            {problem: "x^2(x - 3)", answer: "x^3 - 3x^2"},
            {problem: "x^2(x^2 - 3x)", answer: "x^4 - 3x^3"},
            
            // Basic double bracket expansions
            {problem: "(x + 1)(x + 2)", answer: "x^2 + 3x + 2"},
            {problem: "(x - 3)(x + 2)", answer: "x^2 - x - 6"},
            {problem: "(x - 5)(x - 4)", answer: "x^2 - 9x + 20"},
            {problem: "x(x + 4)", answer: "x^2 + 4x"},
            {problem: "(x + 1)(x + 4)", answer: "x^2 + 5x + 4"},
            
            // Perfect squares (basic)
            {problem: "(x + 1)^2", answer: "x^2 + 2x + 1"},
            {problem: "(2 - x)^2", answer: "x^2 - 4x + 4"},
            {problem: "(x + 4)^2", answer: "x^2 + 8x + 16"},
            {problem: "(x - 4)^2", answer: "x^2 - 8x + 16"},
            {problem: "(x - 1)^2", answer: "x^2 - 2x + 1"},
            {problem: "(t + 4)^2", answer: "t^2 + 8t + 16"},
            {problem: "(z - 6)^2", answer: "z^2 - 12z + 36"},
            {problem: "(y + 8)^2", answer: "y^2 + 16y + 64"},
            {problem: "(q + 3)^2", answer: "q^2 + 6q + 9"},
            {problem: "(k - 7)^2", answer: "k^2 - 14k + 49"},
            {problem: "(n + 1)^2", answer: "n^2 + 2n + 1"},
            
            // Difference of two squares (basic)
            {problem: "(x + 4)(x - 4)", answer: "x^2 - 16"},
            {problem: "(t + 4)(t - 4)", answer: "t^2 - 16"},
            {problem: "(x - 3)(x + 3)", answer: "x^2 - 9"},
            {problem: "(p + 1)(p - 1)", answer: "p^2 - 1"},
            {problem: "(r + 6)(r - 6)", answer: "r^2 - 36"},
            {problem: "(x - 10)(x + 10)", answer: "x^2 - 100"},
            
            // Basic coefficients with perfect squares
            {problem: "(2b + 5)^2", answer: "4b^2 + 20b + 25"},
            {problem: "(3 - x)^2", answer: "x^2 - 6x + 9"},
            {problem: "(3y - 1)^2", answer: "9y^2 - 6y + 1"},
            
            // Two variables (basic)
            {problem: "(x + y)^2", answer: "x^2 + 2xy + y^2"},
            {problem: "(3a - b)^2", answer: "9a^2 - 6ab + b^2"},
            {problem: "(4d + 5e)^2", answer: "16d^2 + 40de + 25e^2"},
            
            // Difference of squares with coefficients
            {problem: "(2a + 3)(2a - 3)", answer: "4a^2 - 9"},
            {problem: "(x - 5y)(x + 5y)", answer: "x^2 - 25y^2"},
            {problem: "(4a + 1)(4a - 1)", answer: "16a^2 - 1"},
            
            // Simple combined operations
            {problem: "(x + 2)^2 - 4", answer: "x^2 + 4x"},
            {problem: "(x + 3)(x - 3) + 6x", answer: "x^2 + 6x - 9"},
            {problem: "(x^2 + 2)(x^2 - 2)", answer: "x^4 - 4"},
            {problem: "(x^2 + 5)^2", answer: "x^4 + 10x^2 + 25"},
            
            // Additional basic expansions for variety
            {problem: "2(y + 3)", answer: "2y + 6"},
            {problem: "4(a - 2)", answer: "4a - 8"},
            {problem: "5(2x + 1)", answer: "10x + 5"},
            {problem: "3(4 - b)", answer: "12 - 3b"},
            {problem: "a(a + 5)", answer: "a^2 + 5a"},
            {problem: "b(3b - 2)", answer: "3b^2 - 2b"},
            {problem: "2x(x + 3)", answer: "2x^2 + 6x"},
            {problem: "3y(2 - y)", answer: "6y - 3y^2"},
            
            // Simple double brackets
            {problem: "(a + 2)(a + 3)", answer: "a^2 + 5a + 6"},
            {problem: "(b - 1)(b + 4)", answer: "b^2 + 3b - 4"},
            {problem: "(c + 5)(c - 2)", answer: "c^2 + 3c - 10"},
            {problem: "(d - 3)(d - 1)", answer: "d^2 - 4d + 3"},
            
            // More perfect squares
            {problem: "(a + 2)^2", answer: "a^2 + 4a + 4"},
            {problem: "(b - 3)^2", answer: "b^2 - 6b + 9"},
            {problem: "(c + 5)^2", answer: "c^2 + 10c + 25"},
            {problem: "(d - 1)^2", answer: "d^2 - 2d + 1"},
            
            // More difference of squares
            {problem: "(a + 2)(a - 2)", answer: "a^2 - 4"},
            {problem: "(b + 5)(b - 5)", answer: "b^2 - 25"},
            {problem: "(c - 7)(c + 7)", answer: "c^2 - 49"},
            {problem: "(d + 8)(d - 8)", answer: "d^2 - 64"},
            
            // Simple coefficient variations
            {problem: "(2x + 1)^2", answer: "4x^2 + 4x + 1"},
            {problem: "(3a - 2)^2", answer: "9a^2 - 12a + 4"},
            {problem: "(2b + 3)(2b - 3)", answer: "4b^2 - 9"},
            {problem: "(3c + 4)(3c - 4)", answer: "9c^2 - 16"}
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
window.AlgebraLevels.mixedExpansionEasy = new MixedExpansionEasy();