// levels/IndexLawPowerHard.js
class IndexLawPowerHardLevel {
    constructor() {
        this.key = 'indexLawPowerHard';
        this.name = 'Power of a Power & Zero Laws (Hard)';
        this.usedQuestionIndices = new Set();
        
        // Questions organized by cognitive complexity levels
        this.questions = [
            // Cognitive Level 1: Multiple Power of a Power in Products
            // Complex products with multiple power rules
            {problem: "x^4 \\times (x^3)^2 \\times (x^5)^3", answer: "x^{25}"},
            {problem: "a^3x^2 \\times (a^4)^2 \\times (x^4)^3", answer: "a^{11}x^{14}"},
            {problem: "x^2y \\times (x^3)^4 \\times (y^2)^2", answer: "x^{14}y^5"},
            {problem: "(x^2)^3 \\times x \\times (y^0)^3 \\times yx^2", answer: "yx^9"},
            {problem: "3(a^5)^2y^0a^2", answer: "3a^{12}"},
            {problem: "x^5y^3 \\times (x^2)^4 \\times (y^3)^2", answer: "x^{13}y^9"},
            {problem: "x^2y \\times (x^4)^3 \\times (y^2)^5", answer: "x^{14}y^{11}"},
            {problem: "(x^3)^2 \\times x^4 \\times (x^2)^3 \\times x", answer: "x^{17}"},
            {problem: "x^3y^2a \\times (x^2)^5 \\times (y^4)^2 \\times (a^3)^4", answer: "x^{13}y^{10}a^{13}"},
            
            // Cognitive Level 2: Coefficient Power of a Power Products
            {problem: "(2x^2)^2 \\times (3x^3)^2", answer: "36x^{10}"},
            {problem: "(x^2)^3 \\times (2x^2)^2", answer: "4x^{10}"},
            {problem: "2(x^2)^2 \\times 3(x^3)^3", answer: "6x^{13}"},
            {problem: "3(x^2)^3 \\times (2x^2)^3", answer: "24x^{12}"},
            {problem: "2(a^3)^2 \\times 3(a^2)^3", answer: "6a^{12}"},
            {problem: "4(x^3)^3 \\times 3(x^2)^2", answer: "12x^{13}"},
            {problem: "(2y^2)^2 \\times (3y^2)^2", answer: "36y^{8}"},
            {problem: "2(x^3)^4 \\times (3x^2)^2", answer: "18x^{16}"},
            {problem: "(2x^2)^3 \\times 3(x^2)^2", answer: "24x^{10}"},
            
            // Cognitive Level 3: Simple Fraction with Power of a Power
            {problem: "\\frac{(2x^2)^3}{2x^2}", answer: "4x^4"},
            {problem: "\\frac{(3x^2)^2}{3x}", answer: "3x^3"},
            {problem: "\\frac{(2x^3)^2}{4x^2}", answer: "x^4"},
            {problem: "\\frac{(3a^2)^3}{9a^3}", answer: "3a^3"},
            {problem: "\\frac{12(x^2)^2}{4x}", answer: "3x^3"},
            {problem: "\\frac{8(y^2)^3}{2y^2}", answer: "4y^4"},
            {problem: "\\frac{(2a^2)^2}{4a}", answer: "a^3"},
            {problem: "\\frac{9(x^3)^2}{3x^3}", answer: "3x^3"},
            {problem: "\\frac{(4b^2)^2}{8b}", answer: "2b^3"},
            
            // Cognitive Level 4: Simple Multi-step Expressions
            {problem: "\\frac{(x^2)^3}{x^2} \\times \\frac{x^4}{(x^2)^1}", answer: "x^6"},
            {problem: "\\frac{(a^2)^3}{a^2} \\times \\frac{(b^2)^2}{b}", answer: "a^4b^3"},
            {problem: "\\frac{(x^2)^3 \\times (x^3)^2}{x^6}", answer: "x^6"},
            {problem: "\\frac{(2a^2)^2 \\times (3a)^2}{6a^2}", answer: "6a^4"},
            {problem: "\\frac{(2x^2)^3}{4x} \\times \\frac{y^3}{(y^2)^1}", answer: "2x^5y"},
            {problem: "\\frac{(3x^2)^2}{9} \\times \\frac{(y^3)^2}{y^2}", answer: "x^4y^4"},
            
            // Cognitive Level 4: Zero Powers and Simple Expressions
            {problem: "\\frac{6x^3 \\times 4x^2}{8x^4}", answer: "3x"},
            {problem: "\\frac{12a^4 \\times 3b^2}{9a^2b}", answer: "4a^2b"},
            {problem: "2(xy^2a^3)^0 \\times 3x^2", answer: "6x^2"},
            {problem: "\\frac{8(a^2b)^2}{4ab^2} \\times (3a)^0", answer: "2a^3"},
            {problem: "3(x^3y^2)^0 \\times 4", answer: "12"}
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
window.AlgebraLevels.indexLawPowerHard = new IndexLawPowerHardLevel();