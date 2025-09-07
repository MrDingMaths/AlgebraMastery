class ExpandingDoubleBracketsMedium {
    constructor() {
        this.key = 'expandingDoubleBracketsMedium';
        this.name = 'Expanding Double Brackets (Medium)';
        this.usedQuestionIndices = new Set();
        
        // Predefined questions covering medium complexity double bracket expansion
        this.questions = [
            
            // Addition of two double bracket expressions
            {problem: "(x+1)(x+3) + (x+2)(x+4)", answer: "2x^2 + 10x + 11"},
            {problem: "(x+8)(x+3) + (x+4)(x+5)", answer: "2x^2 + 20x + 44"},
            {problem: "(y+3)(y-1) + (y-2)(y-4)", answer: "2y^2 - 4y + 5"},
            {problem: "(y-7)(y+4) + (y+5)(y-3)", answer: "2y^2 - y - 43"},
            
            // Perfect squares with constants
            {problem: "(x+5)^2 - 7", answer: "x^2 + 10x + 18"},
            {problem: "(x-7)^2 - 9", answer: "x^2 - 14x + 40"},
            
            // Scalar multiplication of double brackets
            {problem: "2(x+3)(x+4)", answer: "2x^2 + 14x + 24"},
            {problem: "3(x+2)(x+7)", answer: "3x^2 + 27x + 42"},
            {problem: "-2(x+8)(x+2)", answer: "-2x^2 - 20x - 32"},
            {problem: "-4(x+9)(x+2)", answer: "-4x^2 - 44x - 72"},
            {problem: "5(x-3)(x+4)", answer: "5x^2 + 5x - 60"},
            {problem: "3(x+5)(x-3)", answer: "3x^2 + 6x - 45"},
            {problem: "4(a-3)(a-6)", answer: "4a^2 - 36a + 72"},
            {problem: "3(y-4)(y-5)", answer: "3y^2 - 27y + 60"},
            {problem: "-2(y-3)(y-8)", answer: "-2y^2 + 22y - 48"},
            {problem: "-6(y-4)(y-3)", answer: "-6y^2 + 42y - 72"},
            
            // Scalar multiplication with coefficient brackets
            {problem: "3(2x+3)(2x+5)", answer: "12x^2 + 48x + 45"},
            {problem: "6(3x-4)(x+2)", answer: "18x^2 + 12x - 48"},
            {problem: "-2(x+4)(3x-7)", answer: "-6x^2 - 10x + 56"},
            
            // Scalar multiplication of perfect squares
            {problem: "2(x+3)^2", answer: "2x^2 + 12x + 18"},
            {problem: "4(m+5)^2", answer: "4m^2 + 40m + 100"},
            {problem: "2(a-7)^2", answer: "2a^2 - 28a + 98"},
            {problem: "-3(y-5)^2", answer: "-3y^2 + 30y - 75"},
            {problem: "3(2b-1)^2", answer: "12b^2 - 12b + 3"},
            {problem: "-3(2y-6)^2", answer: "-12y^2 + 72y - 108"},
            
            // Mixed terms and expansion
            {problem: "p(3-2p) - 3p(p-2)", answer: "-5p^2 + 9p"},
            
            // Coefficients in brackets
            {problem: "(2x+1)(3x+5)", answer: "6x^2 + 13x + 5"},
            {problem: "(4x+5)(3x+2)", answer: "12x^2 + 23x + 10"},
            {problem: "(5x+3)(2x+7)", answer: "10x^2 + 41x + 21"},
            {problem: "(3x+2)(3x-5)", answer: "9x^2 - 9x - 10"},
            {problem: "(5x+3)(4x-2)", answer: "20x^2 + 2x - 6"},
            {problem: "(2x+5)(3x-5)", answer: "6x^2 + 5x - 25"},
            
            // Difference of squares with coefficients
            {problem: "(4x-5)(4x+5)", answer: "16x^2 - 25"},
            {problem: "(2x-9)(2x+9)", answer: "4x^2 - 81"},
            {problem: "(5x-7)(5x+7)", answer: "25x^2 - 49"},
            
            // More complex coefficient patterns
            {problem: "(7x-3)(2x-4)", answer: "14x^2 - 34x + 12"},
            {problem: "(5x-3)(5x-6)", answer: "25x^2 - 45x + 18"},
            {problem: "(7x-2)(8x-2)", answer: "56x^2 - 30x + 4"},
            
            // Perfect squares with coefficients
            {problem: "(2x+5)^2", answer: "4x^2 + 20x + 25"},
            {problem: "(5x+6)^2", answer: "25x^2 + 60x + 36"},
            {problem: "(7x-1)^2", answer: "49x^2 - 14x + 1"},
            
            // Special patterns
            {problem: "(x+5)(5-x)", answer: "25 - x^2"},
            {problem: "(3x-1)(4x+4)", answer: "12x^2 + 8x - 4"},
            {problem: "(3x-1)(4x-4)", answer: "12x^2 - 16x + 4"},
            {problem: "(3x+2)(3x-2)", answer: "9x^2 - 4"},
            {problem: "(3x-2)(3x-2)", answer: "9x^2 - 12x + 4"},
            
            // More coefficient combinations
            {problem: "(4x+3)(2x+5)", answer: "8x^2 + 26x + 15"},
            {problem: "(3x+2)(2x+1)", answer: "6x^2 + 7x + 2"},
            {problem: "(3x+1)(5x+4)", answer: "15x^2 + 17x + 4"},
            {problem: "(2x-3)(3x+5)", answer: "6x^2 + x - 15"},
            {problem: "(8x-3)(3x+4)", answer: "24x^2 + 23x - 12"},
            {problem: "(3x-2)(2x+1)", answer: "6x^2 - x - 2"},
            {problem: "(5x+2)(2x-7)", answer: "10x^2 - 31x - 14"},
            {problem: "(2x+3)(3x-2)", answer: "6x^2 + 5x - 6"},
            {problem: "(4x+1)(4x-5)", answer: "16x^2 - 16x - 5"},
            {problem: "(3x-2)(6x-5)", answer: "18x^2 - 27x + 10"},
            {problem: "(5x-2)(3x-1)", answer: "15x^2 - 11x + 2"},
            {problem: "(7x-3)(3x-4)", answer: "21x^2 - 37x + 12"},
            
            // Additional medium-level questions for better coverage
            {problem: "(6x+1)(2x+3)", answer: "12x^2 + 20x + 3"},
            {problem: "(4x-1)(3x+2)", answer: "12x^2 + 5x - 2"},
            {problem: "(2x-5)(4x+1)", answer: "8x^2 - 18x - 5"},
            {problem: "(3x+4)(5x-2)", answer: "15x^2 + 14x - 8"},
            {problem: "(6x-1)(2x-3)", answer: "12x^2 - 20x + 3"},
            {problem: "(4x+7)(3x-1)", answer: "12x^2 + 17x - 7"},
            {problem: "(5x-4)(2x+3)", answer: "10x^2 + 7x - 12"},
            {problem: "(3x-6)(4x+2)", answer: "12x^2 - 18x - 12"},
            {problem: "(2x+9)(3x-4)", answer: "6x^2 + 19x - 36"},
            {problem: "(7x+2)(2x-5)", answer: "14x^2 - 31x - 10"},
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
window.AlgebraLevels.expandingDoubleBracketsMedium = new ExpandingDoubleBracketsMedium();