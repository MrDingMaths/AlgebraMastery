// levels/factorisingNonMonicQuadraticTrinomialsMedium.js
class FactorisingNonMonicQuadraticTrinomialsMediumLevel {
    constructor() {
        this.key = 'factorisingNonMonicQuadraticTrinomialsMedium';
        this.name = 'Factorising Non-monic Quadratic Trinomials (Medium)';
        this.usedQuestionIndices = new Set();
        
        // Predefined questions - Medium level includes negative coefficients and larger numbers
        this.questions = [
            // Original textbook questions
            {problem: "-8x^2 + 2x + 15", answer: "-(4x + 5)(2x - 3)"},
            {problem: "-6x^2 + 11x + 10", answer: "-(3x + 2)(2x - 5)"},
            {problem: "-12x^2 + 13x + 4", answer: "-(4x + 1)(3x - 4)"},
            {problem: "-8x^2 + 18x - 9", answer: "-(4x - 3)(2x - 3)"},
            {problem: "-14x^2 + 39x - 10", answer: "-(7x - 2)(2x - 5)"},
            {problem: "-15x^2 - x + 6", answer: "-(5x - 3)(3x + 2)"},
            {problem: "6x^2 + 13x + 6", answer: "(2x + 3)(3x + 2)"},
            {problem: "3x^2 - 11x - 4", answer: "(3x + 1)(x - 4)"},
            {problem: "12x^2 + x - 6", answer: "(4x + 3)(3x - 2)"},
            {problem: "10x^2 - 11x - 6", answer: "(2x - 3)(5x + 2)"},
            {problem: "21x^2 - 20x + 4", answer: "(3x - 2)(7x - 2)"},
            {problem: "15x^2 - 13x + 2", answer: "(3x - 2)(5x - 1)"},
            {problem: "13x^2 - 7x - 6", answer: "(13x + 6)(x - 1)"},
            {problem: "2x^2 + 5x - 12", answer: "(x + 4)(2x - 3)"},
            {problem: "6x^2 - 13x + 6", answer: "(2x - 3)(3x - 2)"},
            {problem: "9x^2 + 9x - 10", answer: "(3x + 5)(3x - 2)"},
    
            // Additional generated questions - More complex patterns
            {problem: "6x^2 + 7x + 2", answer: "(2x + 1)(3x + 2)"},
            {problem: "6x^2 - 7x + 2", answer: "(2x - 1)(3x - 2)"},
            {problem: "8x^2 + 10x + 3", answer: "(2x + 1)(4x + 3)"},
            {problem: "8x^2 - 10x + 3", answer: "(2x - 1)(4x - 3)"},
            {problem: "10x^2 + 13x + 3", answer: "(x + 1)(10x + 3)"},
            {problem: "10x^2 - 13x + 3", answer: "(x - 1)(10x - 3)"},
    
            // Negative leading coefficient patterns
            {problem: "-6x^2 + 7x - 2", answer: "-(2x - 1)(3x - 2)"},
            {problem: "-8x^2 + 10x - 3", answer: "-(2x - 1)(4x - 3)"},
            {problem: "-10x^2 + 13x - 3", answer: "-(x - 1)(10x - 3)"},
            {problem: "-12x^2 + 7x - 1", answer: "-(3x - 1)(4x - 1)"},
            {problem: "-15x^2 + 8x - 1", answer: "-(3x - 1)(5x - 1)"},
    
            // Mixed positive and negative terms
            {problem: "6x^2 + x - 2", answer: "(2x - 1)(3x + 2)"},
            {problem: "8x^2 + 2x - 3", answer: "(2x - 1)(4x + 3)"},
            {problem: "10x^2 + 3x - 1", answer: "(2x + 1)(5x - 1)"},
            {problem: "12x^2 - 5x - 2", answer: "(3x - 2)(4x + 1)"},
            {problem: "15x^2 - 2x - 1", answer: "(3x - 1)(5x + 1)"},
    
            // Larger coefficients
            {problem: "14x^2 + 9x + 1", answer: "(2x + 1)(7x + 1)"},
            {problem: "18x^2 + 9x + 1", answer: "(3x + 1)(6x + 1)"},
            {problem: "20x^2 + 11x + 1", answer: "20x^2 + 11x + 1"},
            {problem: "14x^2 - 9x + 1", answer: "(2x - 1)(7x - 1)"},
            {problem: "18x^2 - 9x + 1", answer: "(3x - 1)(6x - 1)"},
            {problem: "20x^2 - 11x + 1", answer: "20x^2 - 11x + 1"},
    
            // Different variables for variety
            {problem: "6a^2 + 13a + 6", answer: "(2a + 3)(3a + 2)"},
            {problem: "8b^2 + 10b + 3", answer: "(2b + 1)(4b + 3)"},
            {problem: "10c^2 - 11c - 6", answer: "(2c - 3)(5c + 2)"},
            {problem: "12d^2 + d - 6", answer: "(3d - 2)(4d + 3)"},
            {problem: "15e^2 - 13e + 2", answer: "(3e - 2)(5e - 1)"},
    
            // More negative coefficient patterns
            {problem: "-9x^2 + 6x - 1", answer: "-(3x - 1)^2"},
            {problem: "-16x^2 + 8x - 1", answer: "-(4x - 1)^2"},
            {problem: "-25x^2 + 10x - 1", answer: "-(5x - 1)^2"},
            {problem: "-6x^2 - 5x + 1", answer: "-(x + 1)(6x - 1)"},
            {problem: "-8x^2 - 6x + 2", answer: "-2(x + 1)(4x - 1)"},
    
            // Complex mixed patterns
            {problem: "21x^2 + 22x + 5", answer: "(3x + 1)(7x + 5)"},
            {problem: "28x^2 + 15x + 2", answer: "(4x + 1)(7x + 2)"},
            {problem: "35x^2 + 12x + 1", answer: "(5x + 1)(7x + 1)"},
            {problem: "21x^2 - 22x + 5", answer: "(3x - 1)(7x - 5)"},
            {problem: "28x^2 - 15x + 2", answer: "(4x - 1)(7x - 2)"},
    
            // More challenging patterns
            {problem: "9x^2 + 15x + 4", answer: "(3x + 1)(3x + 4)"},
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
window.AlgebraLevels.factorisingNonMonicQuadraticTrinomialsMedium = new FactorisingNonMonicQuadraticTrinomialsMediumLevel();