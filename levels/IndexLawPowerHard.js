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
            {problem: "z^4 \\times (z^3)^2 \\times (z^5)^3", answer: "z^{25}"},
            {problem: "a^3f^2 \\times (a^4)^2 \\times (f^4)^3", answer: "a^{11}f^{14}"},
            {problem: "x^2y \\times (x^3)^4 \\times (y^2)^2", answer: "x^{14}y^5"},
            {problem: "(s^2)^3 \\times s \\times (r^0)^3 \\times rs^2", answer: "rs^9"},
            {problem: "3(a^5)^2y^0a^2", answer: "3a^{12}"},
            {problem: "m^5n^3 \\times (m^2)^4 \\times (n^3)^2", answer: "m^{13}n^9"},
            {problem: "p^2q \\times (p^4)^3 \\times (q^2)^5", answer: "p^{14}q^{11}"},
            {problem: "(t^3)^2 \\times t^4 \\times (t^2)^3 \\times t", answer: "t^{17}"},
            {problem: "x^3y^2z \\times (x^2)^5 \\times (y^4)^2 \\times (z^3)^4", answer: "x^{13}y^{10}z^{13}"},
            
            // Cognitive Level 2: Coefficient Power of a Power Products
            {problem: "(2k^2)^2 \\times (3k^3)^2", answer: "36k^{10}"},
            {problem: "(m^2)^3 \\times (2m^2)^2", answer: "4m^{10}"},
            {problem: "2(x^2)^2 \\times 3(x^3)^3", answer: "6x^{13}"},
            {problem: "3(p^2)^3 \\times (2p^2)^3", answer: "24p^{12}"},
            {problem: "2(a^3)^2 \\times 3(a^2)^3", answer: "6a^{12}"},
            {problem: "4(x^3)^3 \\times 3(x^2)^2", answer: "12x^{13}"},
            {problem: "(2y^2)^2 \\times (3y^2)^2", answer: "36y^{8}"},
            {problem: "2(m^3)^4 \\times (3m^2)^2", answer: "18m^{16}"},
            {problem: "(2z^2)^3 \\times 3(z^2)^2", answer: "24z^{10}"},
            
            // Cognitive Level 3: Simple Fraction with Power of a Power
            {problem: "\\frac{(2p^2)^3}{2p^2}", answer: "4p^4"},
            {problem: "\\frac{(3x^2)^2}{3x}", answer: "3x^3"},
            {problem: "\\frac{(2m^3)^2}{4m^2}", answer: "m^4"},
            {problem: "\\frac{(3a^2)^3}{9a^3}", answer: "3a^3"},
            {problem: "\\frac{12(x^2)^2}{4x}", answer: "3x^3"},
            {problem: "\\frac{8(y^2)^3}{2y^2}", answer: "4y^4"},
            {problem: "\\frac{(2a^2)^2}{4a}", answer: "a^3"},
            {problem: "\\frac{9(z^3)^2}{3z^3}", answer: "3z^3"},
            {problem: "\\frac{(4b^2)^2}{8b}", answer: "2b^3"},
            
            // Cognitive Level 4: Simple Multi-step Expressions
            {problem: "\\frac{(x^2)^3}{x^2} \\times \\frac{x^4}{(x^2)^1}", answer: "x^6"},
            {problem: "\\frac{(a^2)^3}{a^2} \\times \\frac{(b^2)^2}{b}", answer: "a^4b^3"},
            {problem: "\\frac{(x^2)^3 \\times (x^3)^2}{x^6}", answer: "x^6"},
            {problem: "\\frac{(2a^2)^2 \\times (3a)^2}{6a^2}", answer: "6a^4"},
            {problem: "\\frac{(2m^2)^3}{4m} \\times \\frac{n^3}{(n^2)^1}", answer: "2m^5n"},
            {problem: "\\frac{(3p^2)^2}{9} \\times \\frac{(q^3)^2}{q^2}", answer: "p^4q^4"},
            
            // Cognitive Level 4: Zero Powers and Simple Expressions
            {problem: "\\frac{6x^3 \\times 4x^2}{8x^4}", answer: "3x"},
            {problem: "\\frac{12a^4 \\times 3b^2}{9a^2b}", answer: "4a^2b"},
            {problem: "2(xy^2z^3)^0 \\times 3x^2", answer: "6x^2"},
            {problem: "\\frac{8(a^2b)^2}{4ab^2} \\times (3a)^0", answer: "2a^3"},
            {problem: "3(m^3n^2)^0 \\times 4", answer: "12"}
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