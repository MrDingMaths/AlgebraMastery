// levels/mixedSimplificationHard.js
class MixedSimplificationHardLevel {
    constructor() {
        this.key = 'mixedSimplificationHard';
        this.name = 'Mixed Algebraic Simplification (Hard)';
        this.usedQuestionIndices = new Set();
        
        // Predefined questions covering advanced algebraic simplification
        this.questions = [
            // Your textbook questions
            {problem: "11ab - 5ba + ab", answer: "7ab"},
            {problem: "10x + 3x + 5y + 3y", answer: "13x + 8y"},
            {problem: "2a + 5a + 13b - 2b", answer: "7a + 11b"},
            {problem: "10 + 5x - 2 + 7x", answer: "12x + 8"},
            {problem: "10x + 31y - y + 4x", answer: "14x + 30y"},
            {problem: "7x^2y + 5x + 10yx^2", answer: "17x^2y + 5x"},
            {problem: "12xy - 3yx + 5xy - yx", answer: "13xy"},
            {problem: "-2a + 4b - 7ab + 4a", answer: "2a + 4b - 7ab"},
            {problem: "2a \\times 3b \\times 5", answer: "30ab"},
            {problem: "-4x \\times 3 \\times 2y", answer: "-24xy"},
            {problem: "5x \\times (-4) \\times 2y", answer: "-40xy"},
            {problem: "3a \\times ba^2", answer: "3a^3b"},
            {problem: "\\frac{-5x}{10ya^2}", answer: "\\frac{-x}{2ya^2}"},
            {problem: "\\frac{12y^2}{-18y}", answer: "\\frac{-2y}{3}"},
            {problem: "\\frac{-4a^2}{8ab}", answer: "\\frac{-a}{2b}"},
            {problem: "\\frac{12x}{-3y}", answer: "\\frac{-4x}{y}"},
            {problem: "\\frac{-15x}{-20x^2}", answer: "\\frac{3}{4x}"},
            {problem: "-3xy \\times xy \\times 4y", answer: "-12x^2y^3"},
            {problem: "5xy \\times (-4x) \\times 2a", answer: "-40x^2ya"},
            {problem: "\\frac{-3xy}{6y}", answer: "\\frac{-x}{2}"},
            {problem: "\\frac{21xa}{-7xy}", answer: "\\frac{-3a}{y}"},
            {problem: "\\frac{-12y}{-3y^2}", answer: "\\frac{4}{y}"},
            {problem: "8x^2y - 6yx^2 + x^2y", answer: "3x^2y"},
            {problem: "7x^2y^2 - 2x^2y^2 - 4x^2y^2", answer: "x^2y^2"},
            {problem: "2x^2y - 4xy^2 + 5yx^2", answer: "7x^2y - 4xy^2"},
            {problem: "10xy^2 + 3xy^2 - 6x^2y", answer: "13xy^2 - 6x^2y"},
            {problem: "x^2 - 7x - 3x^2", answer: "-2x^2 - 7x"},
            {problem: "a^2b - 4ab^2 + 3a^2b + b^2a", answer: "4a^2b - 3ab^2"},
            {problem: "10xy^2 - 2yx - 3x^2y - 6", answer: "10xy^2 - 2xy - 3x^2y - 6"},

            // Additional generated questions for variety
            // Complex multi-variable combinations
            {problem: "5xy + 3yx - 2xy + 7yx", answer: "13xy"},
            {problem: "8ab - 4ba + 6ab - 2ba", answer: "8ab"},
            {problem: "3xy + 7yx - 5xy + 2yx", answer: "7xy"},
            {problem: "12xy - 8yx + 4xy - 3yx", answer: "5xy"},
            
            // Multiple variable types with constants
            {problem: "4x + 7y - 2x + 5y + 3", answer: "2x + 12y + 3"},
            {problem: "6a - 3b + 8a + 2b - 5", answer: "14a - b - 5"},
            {problem: "9x + 4y - 6x - y + 7", answer: "3x + 3y + 7"},
            {problem: "5x + 8y - 3x + 2y - 4", answer: "2x + 10y - 4"},
            
            // Complex multiplication chains
            {problem: "2x \\times 3y \\times 4a", answer: "24xya"},
            {problem: "-3a \\times 2b \\times 5x", answer: "-30abx"},
            {problem: "4x \\times (-2y) \\times 3a", answer: "-24xya"},
            {problem: "-5x \\times (-3y) \\times 2a", answer: "30xya"},
            {problem: "6x \\times 2y \\times (-a)", answer: "-12xya"},
            
            // Complex division with multiple variables
            {problem: "\\frac{24x^2y^3}{6xy^2}", answer: "4xy"},
            {problem: "\\frac{30a^3b^2}{5a^2b}", answer: "6ab"},
            {problem: "\\frac{-18x^4y^2}{9x^2y}", answer: "-2x^2y"},
            {problem: "\\frac{45x^3y^4}{-15x^2y^3}", answer: "-3xy"},
            
            // Mixed operations with negatives
            {problem: "-7x + 4y - 2x - 9y", answer: "-9x - 5y"},
            {problem: "8a - 3b - 12a + 7b", answer: "-4a + 4b"},
            {problem: "-5x + 9y + 2x - 6y", answer: "-3x + 3y"},
            {problem: "6x - 8y - 4x + 12y", answer: "2x + 4y"},
            
            // Complex coefficient operations
            {problem: "7y^3 - 4y^3 + 9y^3 - 6y^3", answer: "6y^3"},
            
            // Multi-variable powers with different terms
            {problem: "5x^2y + 3xy^2 - 2x^2y + 7xy^2", answer: "3x^2y + 10xy^2"},
            {problem: "8a^2b - 4ab^2 + 2a^2b - 6ab^2", answer: "10a^2b - 10ab^2"},
            {problem: "6x^3y - 9xy^3 - 2x^3y + 5xy^3", answer: "4x^3y - 4xy^3"},
            
            // Complex fraction simplifications
            {problem: "\\frac{36x^3y^2}{12x^2y}", answer: "3xy"},
            {problem: "\\frac{-42a^4b^3}{14a^2b^2}", answer: "-3a^2b"},
            {problem: "\\frac{56x^5y^2}{-8x^3y}", answer: "-7x^2y"},
            
            // Advanced mixed expressions
            {problem: "4xy - 7yx + 3x^2 + 2xy", answer: "-xy + 3x^2"},
            {problem: "9ab + 5a^2 - 6ba + 3ab", answer: "6ab + 5a^2"},
            {problem: "8xy^2 - 4x^2y + 6y^2x - 2xy^2", answer: "12xy^2 - 4x^2y"},
            
            // Expressions with multiple power combinations
            {problem: "5x^2y^2 + 3x^2y^2 - 2x^2y^2", answer: "6x^2y^2"},
            {problem: "7a^3b^2 - 4a^3b^2 + 9a^3b^2", answer: "12a^3b^2"},
            {problem: "-3x^2y^3 + 8x^2y^3 - 5x^2y^3", answer: "0"},
            
            // Very complex mixed operations
            {problem: "12xya + 8ayx - 5xya + 3axy", answer: "18xya"},
            {problem: "15abx - 9bxa + 6abx - 4xab", answer: "8abx"},
            {problem: "20xya - 12yax + 8axy - 6xay", answer: "10xya"}
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
window.AlgebraLevels.mixedSimplificationHard = new MixedSimplificationHardLevel();