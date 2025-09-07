class MixedExpansionMedium {
    constructor() {
        this.key = 'mixedExpansionMedium';
        this.name = 'Mixed Expansion (Medium)';
        this.usedQuestionIndices = new Set();
        
        // Predefined questions covering more complex mixed expansion techniques
        this.questions = [
            
            // Multi-variable expansions
            {problem: "3xy(3x - y)", answer: "9x^2y - 3xy^2"},
            {problem: "-3xy(4y^2 - 2xy)", answer: "6x^2y^2 - 12xy^3"},
            
            // Coefficient expansions with brackets
            {problem: "2(x + 1)(x - 2)", answer: "2x^2 - 2x - 4"},
            {problem: "x(x - 3)(x + 2)", answer: "x^3 - x^2 - 6x"},
            {problem: "-(x + 3)(2 - x)", answer: "x^2 + x - 6"},
            
            // Higher order expansions
            {problem: "(x + 3)(x^2 + 3)", answer: "x^3 + 3x^2 + 3x + 9"},
            {problem: "(2x - 3)(x^2 - 3)", answer: "2x^3 - 3x^2 - 6x + 9"},
            {problem: "-(2x^2 - 3)^2", answer: "-4x^4 + 12x^2 - 9"},
            
            // Coefficient perfect squares
            {problem: "2(x + 3)^2", answer: "2x^2 + 12x + 18"},
            {problem: "4(m + 5)^2", answer: "4m^2 + 40m + 100"},
            {problem: "2(a - 7)^2", answer: "2a^2 - 28a + 98"},
            {problem: "-3(y + 5)^2", answer: "-3y^2 - 30y - 75"},
            {problem: "3(2b - 1)^2", answer: "12b^2 - 12b + 3"},
            {problem: "-3(2y - 6)^2", answer: "-12y^2 + 72y - 108"},
            {problem: "2(x - 3)^2", answer: "2x^2 - 12x + 18"},
            {problem: "-4(x + 9)^2", answer: "-4x^2 - 72x - 324"},
            
            // Coefficient difference of squares
            {problem: "-2(x + 8)(x - 8)", answer: "-2x^2 + 128"},
            {problem: "-2(x - 7)(x + 7)", answer: "-2x^2 + 98"},
            {problem: "6(3x - 4)(3x + 4)", answer: "54x^2 - 96"},
            
            // Mixed coefficient expansions
            {problem: "3(x + 5)(x - 3)", answer: "3x^2 + 6x - 45"},
            {problem: "-3(a + 2)(a - 7)", answer: "-3a^2 + 15a + 42"},
            {problem: "3(2x + 3)^2", answer: "12x^2 + 36x + 27"},
            {problem: "-2(x + 4)(3x - 7)", answer: "-6x^2 - 10x + 56"},
            
            // Multi-term expressions
            {problem: "3a^2(4a^3 - b^4) + 2a^2(5a^3 + 3b^4)", answer: "22a^5 + 3a^2b^4"},
            {problem: "(x + 4)(x + 3) + x - 4", answer: "x^2 + 8x + 8"},
            {problem: "3x^2 + (2x - 1)(x - 2)", answer: "5x^2 - 5x + 2"},
            {problem: "(2a + 3)(a - 5) - (a + 6)", answer: "2a^2 - 8a - 21"},
            {problem: "x^2 + 2x - 3 + (x + 2)^2", answer: "2x^2 + 6x + 1"},
            
            // Difference expressions
            {problem: "x^2 - (x + 1)(x - 1)", answer: "1"},
            {problem: "(3x - 2)(3x + 2) - (3x + 2)^2", answer: "-12x - 8"},
            {problem: "(2x - 3)^2 + (2x + 3)^2", answer: "8x^2 + 18"},
            {problem: "(5x - 1)^2 - (5x + 1)(5x - 1)", answer: "-10x + 2"},
            {problem: "2(x + y)^2 - 2(x - y)^2", answer: "8xy"},
            {problem: "(2 - x)^2 - (2 + x)^2", answer: "-8x"},
            {problem: "(a + 3)^2 - (a - 3)^2", answer: "12a"},
            {problem: "16 - (z - 4)(z + 4)", answer: "32 - z^2"},
            
            // Two-variable expansions
            {problem: "(3ab - 4c)(3ab + 4c)", answer: "9a^2b^2 - 16c^2"},
            {problem: "(2a^2 + 5b^3)^2", answer: "4a^4 + 20a^2b^3 + 25b^6"},
            
            // Additional medium complexity questions
            {problem: "3x(2x - 5) + 4x", answer: "6x^2 - 11x"},
            {problem: "2y(3y + 4) - 5y", answer: "6y^2 + 3y"},
            {problem: "-4a(2a - 3) + 7a", answer: "-8a^2 + 19a"},
            {problem: "5b(b + 2) - 3b(b - 1)", answer: "2b^2 + 13b"},
            
            // Coefficient variations with multiple terms
            {problem: "2(3x - 4)(x + 2)", answer: "6x^2 + 4x - 16"},
            {problem: "3(2a + 1)(a - 3)", answer: "6a^2 - 15a - 9"},
            {problem: "-2(x - 5)(2x + 3)", answer: "-4x^2 + 14x + 30"},
            {problem: "4(a + 1)(a - 4)", answer: "4a^2 - 12a - 16"},
            
            // Perfect squares with coefficients and variables
            {problem: "3(2x + 5)^2", answer: "12x^2 + 60x + 75"},
            {problem: "-2(3y - 4)^2", answer: "-18y^2 + 48y - 32"},
            {problem: "4(a - 2b)^2", answer: "4a^2 - 16ab + 16b^2"},
            {problem: "5(2m + 3n)^2", answer: "20m^2 + 60mn + 45n^2"},
            
            // Combined operations with simpler expressions
            {problem: "(x + 2)^2 + (x - 2)^2", answer: "2x^2 + 8"},
            {problem: "(a + 5)^2 - (a - 1)^2", answer: "12a + 24"},
            {problem: "(b - 3)(b + 3) + (b + 1)^2", answer: "2b^2 + 2b - 8"},
            {problem: "(c + 4)(c - 2) + (c - 1)(c + 3)", answer: "2c^2 + 4c - 11"},
            
            // Three-term coefficient expansions
            {problem: "2xy(3x + 4y - 2)", answer: "6x^2y + 8xy^2 - 4xy"},
            {problem: "-3ab(2a - b + 3)", answer: "-6a^2b + 3ab^2 - 9ab"},
            {problem: "4pq(p - 2q + 1)", answer: "4p^2q - 8pq^2 + 4pq"}
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
window.AlgebraLevels.mixedExpansionMedium = new MixedExpansionMedium();