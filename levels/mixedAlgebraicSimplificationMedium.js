// levels/mixedAlgebraicSimplificationMedium.js
class MixedAlgebraicSimplificationMediumLevel {
    constructor() {
        this.key = 'mixedAlgebraicSimplificationMedium';
        this.name = 'Mixed Algebraic Simplification (Medium)';
        this.usedQuestionIndices = new Set();
        
        // Predefined questions covering intermediate algebraic simplification
        this.questions = [
            // Your textbook questions
            {problem: "4xy + 3xy", answer: "7xy"},
            {problem: "16xy - 3xy", answer: "13xy"},
            {problem: "10ab + 4ba", answer: "14ab"},
            {problem: "3x + 15x - 2x", answer: "16x"},
            {problem: "15x - 2x - 3x", answer: "10x"},
            {problem: "7x + 2x + 8 + 4", answer: "9x + 12"},
            {problem: "3x \\times 2y", answer: "6xy"},
            {problem: "3x \\times 6y", answer: "18xy"},
            {problem: "-2x \\times 7y", answer: "-14xy"},
            {problem: "-4x \\times 3y", answer: "-12xy"},
            {problem: "b \\times a \\times b", answer: "ab^2"},
            {problem: "b + a + b", answer: "a + 2b"},
            {problem: "b + 3 + b", answer: "2b + 3"},
            {problem: "3b \\times 2b", answer: "6b^2"},
            {problem: "3a \\times 2b", answer: "6ab"},
            {problem: "3a \\times b^2", answer: "3ab^2"},
            {problem: "3a \\times a^3", answer: "3a^4"},
            {problem: "2 \\times b \\times a", answer: "2ab"},
            {problem: "2 + b + a", answer: "a + b + 2"},
            {problem: "2 \\times b + a", answer: "a + 2b"},
            {problem: "2 + b \\times a", answer: "2 + ab"},
            {problem: "9x \\times 3x", answer: "27x^2"},
            {problem: "4ab \\times 2ab", answer: "8a^2b^2"},
            {problem: "\\frac{4ab}{2ab}", answer: "2"},
            {problem: "4a^2b \\times 2ab^2", answer: "8a^3b^3"},
            {problem: "\\frac{4a^2b}{2a^2b}", answer: "2"},
            {problem: "\\frac{24a^3b}{6ab}", answer: "4a^2"},
            {problem: "24a^3b \\times 6ab", answer: "144a^4b^2"},
            {problem: "12xy + 6xy", answer: "18xy"},
            {problem: "\\frac{12xy}{6}", answer: "2xy"},
            {problem: "12xy \\times 6y", answer: "72xy^2"},
            {problem: "12xy \\times 6x", answer: "72x^2y"},
            {problem: "12xy \\times 6xy", answer: "72x^2y^2"},
            {problem: "\\frac{12xy}{6x}", answer: "2y"},
            {problem: "\\frac{12xy}{6xy}", answer: "2"},
            {problem: "12x^2y \\times 6xy", answer: "72x^3y^2"},
            {problem: "\\frac{12x^2y}{6xy}", answer: "2x"},
            {problem: "\\frac{9ab}{4b}", answer: "\\frac{9a}{4}"},
            {problem: "\\frac{2ab}{5a}", answer: "\\frac{2b}{5}"},
            {problem: "\\frac{4xy}{2x}", answer: "2y"},
            {problem: "\\frac{9x}{3xy}", answer: "\\frac{3}{y}"},
            {problem: "\\frac{-21x}{-3x}", answer: "7"},
            {problem: "4x \\times 6x", answer: "24x^2"},
            {problem: "5x \\times 2x", answer: "10x^2"},
            {problem: "7a \\times 3ab", answer: "21a^2b"},
            {problem: "-4b \\times 2x", answer: "-8bx"},
            {problem: "5xy \\times (-3y)", answer: "-15xy^2"},
            {problem: "-3xy \\times (-6x)", answer: "18x^2y"},
            {problem: "3xy \\times 4xy", answer: "12x^2y^2"},
            {problem: "-4ab \\times (-2ab)", answer: "8a^2b^2"},
            {problem: "-2xy \\times 3x", answer: "-6x^2y"},
            {problem: "5x^2 - 4xy^2", answer: "5x^2 - 4xy^2"},
            {problem: "3a^2b + 4ba^2", answer: "7a^2b"},

            // Additional generated questions for variety
            // Multi-variable like terms
            {problem: "5xy + 7xy", answer: "12xy"},
            {problem: "8xy - 2xy", answer: "6xy"},
            {problem: "3xy + 6xy", answer: "9xy"},
            {problem: "11xy - 4xy", answer: "7xy"},
            {problem: "2ab + 9ab", answer: "11ab"},
            {problem: "15xy - 8xy", answer: "7xy"},

            // Three-term combinations with multi-variables
            {problem: "2xy + 5xy + 3xy", answer: "10xy"},
            {problem: "7ab - 2ab + 4ab", answer: "9ab"},
            {problem: "3xy + xy - 2xy", answer: "2xy"},
            {problem: "6xy - 4xy + 8xy", answer: "10xy"},

            // Multi-variable multiplication
            {problem: "5x \\times 3y", answer: "15xy"},
            {problem: "4a \\times 7b", answer: "28ab"},
            {problem: "2x \\times 8y", answer: "16xy"},
            {problem: "6x \\times 2y", answer: "12xy"},
            {problem: "-3x \\times 4y", answer: "-12xy"},
            {problem: "5x \\times (-2y)", answer: "-10xy"},

            // Powers with multi-variables  
            {problem: "x \\times y \\times x", answer: "x^2y"},
            {problem: "a \\times b \\times a \\times b", answer: "a^2b^2"},
            {problem: "x \\times y \\times x \\times x", answer: "x^3y"},

            // More complex coefficient multiplication
            {problem: "2x \\times 3x", answer: "6x^2"},
            {problem: "4y \\times 5y", answer: "20y^2"},
            {problem: "3x \\times 7x", answer: "21x^2"},
            {problem: "-2a \\times 6a", answer: "-12a^2"},
            {problem: "8b \\times (-3b)", answer: "-24b^2"},

            // Division with multi-variables
            {problem: "\\frac{15xy}{3x}", answer: "5y"},
            {problem: "\\frac{20ab}{4a}", answer: "5b"},
            {problem: "\\frac{18xy}{6x}", answer: "3y"},
            {problem: "\\frac{24xy}{8x}", answer: "3y"},
            {problem: "\\frac{-30xy}{-5x}", answer: "6y"},

            // Fraction simplification with multi-variables
            {problem: "\\frac{12xy}{18x}", answer: "\\frac{2y}{3}"},
            {problem: "\\frac{16ab}{20a}", answer: "\\frac{4b}{5}"},
            {problem: "\\frac{21xy}{14x}", answer: "\\frac{3y}{2}"},
            {problem: "\\frac{25xy}{15x}", answer: "\\frac{5y}{3}"},

            // Mixed operations with constants
            {problem: "3x + 2y + 5x", answer: "8x + 2y"},
            {problem: "4a + 7 + 2a", answer: "6a + 7"},
            {problem: "5b - 3 + 6b", answer: "11b - 3"},
            {problem: "2x + 8y + 4", answer: "2x + 8y + 4"},
            {problem: "7x + 3y - 2x", answer: "5x + 3y"},

            // Higher powers
            {problem: "2x^2 \\times 3x", answer: "6x^3"},
            {problem: "4y \\times 5y^2", answer: "20y^3"},
            {problem: "3a^2 \\times 2a^2", answer: "6a^4"},
            {problem: "x^3 + 4x^3", answer: "5x^3"},
            {problem: "7y^2 - 2y^2", answer: "5y^2"},

            // Complex multi-variable terms
            {problem: "3x^2y + 5x^2y", answer: "8x^2y"},
            {problem: "7a^2b - 3a^2b", answer: "4a^2b"},
            {problem: "2xy^2 + 6xy^2", answer: "8xy^2"},
            {problem: "9x^2y - 4x^2y", answer: "5x^2y"}
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
window.AlgebraLevels.mixedAlgebraicSimplificationMedium = new MixedAlgebraicSimplificationMediumLevel();