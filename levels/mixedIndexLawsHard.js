// levels/mixedIndexLawsHard.js
class MixedIndexLawsHardLevel {
    constructor() {
        this.key = 'mixedIndexLawsHard';
        this.name = 'Mixed Index Laws (Hard)';
        this.usedQuestionIndices = new Set();
        
        // Predefined questions covering advanced index laws
        // Cognitive complexity: Multiple power operations, algebraic fractions with coefficients
        this.questions = [
            // Multiple power operations combined
            {problem: "(5^2)^3 \\times (5^4)^2 \\div 5^{11}", answer: "5^3"},
            {problem: "(4^5)^2 \\times (4^3)^3 \\div (4^6)^2", answer: "4^7"},
            {problem: "(5^3)^2 \\times (5^2)^0 \\div (5^2)^3", answer: "1"},
            {problem: "(9^2)^3 \\times (9^4)^2 \\times 9^0", answer: "9^{14}"},
            {problem: "(7^6)^2 \\div (7^3)^4 \\times 7", answer: "7"},
            {problem: "(6^5)^4 \\div (6^3)^3 \\times (6^8)^0", answer: "6^{11}"},
            {problem: "(2^3)^4 \\times (2^2)^3 \\div (2^5)^2", answer: "2^8"},
            {problem: "(3^4)^2 \\times (3^1)^5 \\div (3^3)^3", answer: "3^4"},
            {problem: "(8^2)^3 \\div (8^1)^4 \\times (8^3)^1", answer: "8^5"},
            
            // Algebraic fractions with coefficients
            {problem: "\\frac{6x^3y^2 \\times 4xy}{8x^2y}", answer: "3x^2y^2"},
            {problem: "\\frac{12b^3}{3x^2} \\times \\frac{2x^3}{4b}", answer: "2b^2x"},
            {problem: "\\frac{8x^4y^3}{2x^2y} \\times \\frac{3xy^2}{6x}", answer: "2x^2y^4"},
            {problem: "\\frac{x^3y^2}{xy} \\times \\frac{x^4y^3}{x^2y}", answer: "x^4y^3"},
            {problem: "\\frac{6a^2}{2x^2} \\times \\frac{4a^3}{3x^2}", answer: "\\frac{4a^5}{x^4}"},
            {problem: "\\frac{2x^3 \\times 6x^4}{4x^2}", answer: "3x^5"},
            {problem: "\\frac{3x^2b \\times 8x^2b}{6xb}", answer: "4x^3b"},
            {problem: "\\frac{4x^3y^2}{2xy} \\times \\frac{6xy}{3x}", answer: "4x^2y^2"},
            {problem: "\\frac{9x^4y^2}{3x^2y} \\times \\frac{4xy^2}{6x}", answer: "2x^2y^3"},
            {problem: "\\frac{6x^3y^2 \\times 4xy}{8xy \\times 2x^2y}", answer: "\\frac{3xy}{2}"},
            {problem: "\\frac{5x^4 \\times 3x^2}{x^3}", answer: "15x^3"},
            {problem: "\\frac{4x^6 \\times 6x^2}{8x^5}", answer: "3x^3"},
            {problem: "\\frac{12y^3 \\times 2y^4}{6y^2}", answer: "4y^5"},
            {problem: "\\frac{10a^5}{2a^2} \\times \\frac{3a^4}{5a}", answer: "3a^6"},
            {problem: "\\frac{9x^7}{3x^3} \\times \\frac{2x^2}{x}", answer: "6x^5"},
            {problem: "\\frac{8b^5 \\times 3b}{6b^2}", answer: "4b^4"},
            {problem: "\\frac{7x^4}{x} \\times \\frac{4x^2}{14x^3}", answer: "2x^2"},
            {problem: "\\frac{15x^8}{5x^2} \\times \\frac{2x}{3x^4}", answer: "2x^3"},
            {problem: "\\frac{3x^5 \\times 8x^2}{12x^3}", answer: "2x^4"},
            {problem: "\\frac{16x^6}{4x} \\times \\frac{3x^2}{6x^3}", answer: "2x^4"},
            {problem: "\\frac{5a^2b \\times 6ab^3}{3ab^2}", answer: "10a^2b^2"},
            {problem: "\\frac{7x^5y^3 \\times 4x^2y}{14xy^2}", answer: "2x^6y^2"},
            {problem: "\\frac{15x^4y^2}{5xy} \\times \\frac{2x^2y^3}{3xy}", answer: "2x^4y^3"},
            {problem: "\\frac{10x^3y^5 \\times 3x^2y}{5xy^2 \\times 2x^3y}", answer: "3xy^3"},
            {problem: "\\frac{18x^3y}{9xy} \\times \\frac{4x^2y^4}{8x^3y^2}", answer: "xy^2"},
            {problem: "\\frac{8x^5y^2}{12xy^4} \\times \\frac{9x^2y^3}{4x^3y}", answer: "\\frac{3x^3}{2}"},
            {problem: "\\frac{20x^4y^2}{4xy} \\times \\frac{3x^2y^3}{5x^3y}", answer: "3x^2y^3"},
            {problem: "\\frac{16x^4y^3}{10x^2y^4} \\times \\frac{5xy^2}{4x^3y}", answer: "2"},

            // Advanced algebraic expressions
            {problem: "\\frac{12x^4y^2}{3xy} \\times \\frac{2xy^2}{4x^2}", answer: "2x^2y^3"},
            {problem: "\\frac{15a^4b^2}{3ab} \\times \\frac{4ab^2}{5a^2b}", answer: "4a^2b^2"},
            {problem: "\\frac{18x^5y^3}{6x^2y} \\div \\frac{3xy}{2x}", answer: "2x^3y"},
            {problem: "\\frac{12x^4y^3}{4x^2y} \\div \\frac{3xy}{6x}", answer: "6x^2y"},
            
            // Power combinations with variables
            {problem: "(x^2y^2)^3 \\div (x^2y)^2", answer: "x^2y^4"},
            {problem: "(a^2b^2)^3 \\times (ab^2)^2", answer: "a^8b^{10}"},
            {problem: "(x^3y^2)^2 \\div (xy^2)^2", answer: "x^4"},
            {problem: "(x^3y^2)^2 \\div (x^2y^2)^2", answer: "x^2"},
            
            // Nested power operations
            {problem: "((2^2)^3)^2 \\div (2^4)^2", answer: "2^4"},
            {problem: "((3^1)^4)^2 \\times (3^2)^3", answer: "3^{14}"},
            {problem: "((x^2)^3)^2 \\div (x^4)^2", answer: "x^4"},
            {problem: "((a^3)^2)^4 \\div (a^5)^4", answer: "a^4"},
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
window.AlgebraLevels.mixedIndexLawsHard = new MixedIndexLawsHardLevel();