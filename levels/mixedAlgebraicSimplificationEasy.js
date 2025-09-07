// levels/mixedAlgebraicSimplificationEasy.js
class MixedAlgebraicSimplificationEasyLevel {
    constructor() {
        this.key = 'mixedAlgebraicSimplificationEasy';
        this.name = 'Mixed Algebraic Simplification (Easy)';
        this.usedQuestionIndices = new Set();
        
        // Predefined questions covering basic algebraic simplification
        this.questions = [
            // Your textbook questions
            {problem: "3x + 2x", answer: "5x"},
            {problem: "7a + 12a", answer: "19a"},
            {problem: "15x - 6x", answer: "9x"},
            {problem: "-4x^2 + 3x^2", answer: "-x^2"},
            {problem: "5 \\times 2m", answer: "10m"},
            {problem: "3 \\times 5p", answer: "15p"},
            {problem: "3 + b", answer: "3 + b"},
            {problem: "3 \\times b", answer: "3b"},
            {problem: "b + b + b", answer: "3b"},
            {problem: "b \\times b \\times b", answer: "b^3"},
            {problem: "b \\times 3", answer: "3b"},
            {problem: "2b \\times 3", answer: "6b"},
            {problem: "3 \\times 2b", answer: "6b"},
            {problem: "3b + 2b", answer: "5b"},
            {problem: "3a + 2b", answer: "3a + 2b"},
            {problem: "9m + m", answer: "10m"},
            {problem: "9m \\times m", answer: "9m^2"},
            {problem: "\\frac{9m}{m}", answer: "9"},
            {problem: "9m + 3m", answer: "12m"},
            {problem: "9m \\div 3m", answer: "3"},
            {problem: "\\frac{2x}{5x}", answer: "\\frac{2}{5}"},
            {problem: "\\frac{5a}{9a}", answer: "\\frac{5}{9}"},
            {problem: "\\frac{2x}{4}", answer: "\\frac{x}{2}"},
            {problem: "\\frac{9x}{12}", answer: "\\frac{3x}{4}"},
            {problem: "\\frac{10a}{15a}", answer: "\\frac{2}{3}"},
            {problem: "\\frac{30y}{40y}", answer: "\\frac{3}{4}"},
            {problem: "\\frac{4a}{2}", answer: "2a"},
            {problem: "\\frac{21x}{7x}", answer: "3"},
            {problem: "9k \\times (-7)", answer: "-63k"},

            // Additional generated questions for variety
            // Basic like terms combining
            {problem: "4x + 6x", answer: "10x"},
            {problem: "8y - 3y", answer: "5y"},
            {problem: "2z + 7z", answer: "9z"},
            {problem: "11p - 5p", answer: "6p"},
            {problem: "3q + q", answer: "4q"},
            {problem: "10r - 4r", answer: "6r"},
            {problem: "5s + 8s", answer: "13s"},
            {problem: "12t - 7t", answer: "5t"},

            // Simple multiplication with coefficients
            {problem: "4 \\times 3n", answer: "12n"},
            {problem: "2 \\times 7w", answer: "14w"},
            {problem: "6 \\times 2v", answer: "12v"},
            {problem: "5 \\times 4u", answer: "20u"},
            {problem: "3c \\times 4", answer: "12c"},
            {problem: "7d \\times 2", answer: "14d"},

            // Basic power operations
            {problem: "x \\times x", answer: "x^2"},
            {problem: "y \\times y \\times y", answer: "y^3"},
            {problem: "a \\times a \\times a \\times a", answer: "a^4"},
            {problem: "c + c", answer: "2c"},
            {problem: "d + d + d", answer: "3d"},

            // Simple division with same variables
            {problem: "\\frac{8x}{4x}", answer: "2"},
            {problem: "\\frac{12y}{3y}", answer: "4"},
            {problem: "\\frac{15z}{5z}", answer: "3"},
            {problem: "\\frac{20a}{4a}", answer: "5"},
            {problem: "\\frac{18b}{6b}", answer: "3"},

            // Basic fraction simplification
            {problem: "6x \\div 8", answer: "\\frac{3x}{4}"},
            {problem: "12y \\div 16", answer: "\\frac{3y}{4}"},
            {problem: "\\frac{8a}{12}", answer: "\\frac{2a}{3}"},
            {problem: "\\frac{15b}{25}", answer: "\\frac{3b}{5}"},
            {problem: "\\frac{14c}{21}", answer: "\\frac{2c}{3}"},

            // Negative coefficient handling
            {problem: "-3x + 5x", answer: "2x"},
            {problem: "6y - 9y", answer: "-3y"},
            {problem: "-2z \\times 4", answer: "-8z"},
            {problem: "3 \\times (-5w)", answer: "-15w"},
            {problem: "\\frac{-8p}{4}", answer: "-2p"},

            // Constants with variables
            {problem: "5 + 2x", answer: "5 + 2x"},
            {problem: "3y + 7", answer: "3y + 7"},
            {problem: "4 \\times z", answer: "4z"},
            {problem: "6 \\div a", answer: "\\frac{6}{a}"},

            // Quadratic terms
            {problem: "2x^2 + 3x^2", answer: "5x^2"},
            {problem: "7y^2 - 4y^2", answer: "3y^2"},
            {problem: "-2z^2 + 8z^2", answer: "6z^2"},
            {problem: "5a^2 - 5a^2", answer: "0"}
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
window.AlgebraLevels.mixedAlgebraicSimplificationEasy = new MixedAlgebraicSimplificationEasyLevel();