// levels/evaluatingFractionalIndicesEasy.js
class EvaluatingFractionalIndicesEasyLevel {
    constructor() {
        this.key = 'evaluatingFractionalIndicesEasy';
        this.name = 'Fractional Indices (Easy)';
        this.usedQuestionIndices = new Set();
        
        // Easy level: Basic fractional indices (roots) - simple perfect powers
        // Categories: Square roots, cube roots, fourth roots, fifth roots, zero powers
        this.questions = [
            // Perfect square roots (1/2 power)
            {problem: "25^{\\frac{1}{2}}", answer: "5"},
            {problem: "49^{\\frac{1}{2}}", answer: "7"},
            {problem: "81^{\\frac{1}{2}}", answer: "9"},
            {problem: "169^{\\frac{1}{2}}", answer: "13"},
            {problem: "100^{\\frac{1}{2}}", answer: "10"},
            {problem: "36^{\\frac{1}{2}}", answer: "6"},
            {problem: "400^{\\frac{1}{2}}", answer: "20"},
            {problem: "1^{\\frac{1}{2}}", answer: "1"},
            {problem: "9^{\\frac{1}{2}}", answer: "3"},
            {problem: "4^{\\frac{1}{2}}", answer: "2"},
            {problem: "16^{\\frac{1}{2}}", answer: "4"},
            {problem: "64^{\\frac{1}{2}}", answer: "8"},
            {problem: "121^{\\frac{1}{2}}", answer: "11"},
            {problem: "144^{\\frac{1}{2}}", answer: "12"},
            {problem: "225^{\\frac{1}{2}}", answer: "15"},
            {problem: "289^{\\frac{1}{2}}", answer: "17"},
            {problem: "361^{\\frac{1}{2}}", answer: "19"},
            
            // Perfect cube roots (1/3 power)
            {problem: "8^{\\frac{1}{3}}", answer: "2"},
            {problem: "64^{\\frac{1}{3}}", answer: "4"},
            {problem: "125^{\\frac{1}{3}}", answer: "5"},
            {problem: "1000^{\\frac{1}{3}}", answer: "10"},
            {problem: "343^{\\frac{1}{3}}", answer: "7"},
            {problem: "27^{\\frac{1}{3}}", answer: "3"},
            {problem: "27000^{\\frac{1}{3}}", answer: "30"},
            {problem: "1^{\\frac{1}{3}}", answer: "1"},
            {problem: "216^{\\frac{1}{3}}", answer: "6"},
            
            // Fourth roots (1/4 power)
            {problem: "16^{\\frac{1}{4}}", answer: "2"},
            {problem: "81^{\\frac{1}{4}}", answer: "3"},
            {problem: "625^{\\frac{1}{4}}", answer: "5"},
            {problem: "1^{\\frac{1}{4}}", answer: "1"},
            {problem: "256^{\\frac{1}{4}}", answer: "4"},
            
            // Fifth roots (1/5 power)
            {problem: "32^{\\frac{1}{5}}", answer: "2"},
            {problem: "1^{\\frac{1}{5}}", answer: "1"},
            
            // Zero power cases (always equal to 1)
            {problem: "27^{\\frac{0}{3}}", answer: "1"},
            {problem: "25^{\\frac{0}{2}}", answer: "1"},
            
            // Simple sixth roots
            {problem: "64^{\\frac{1}{6}}", answer: "2"},
            
            // Additional practice questions for variety
            {problem: "196^{\\frac{1}{2}}", answer: "14"},
            {problem: "324^{\\frac{1}{2}}", answer: "18"},
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
window.AlgebraLevels.evaluatingFractionalIndicesEasy = new EvaluatingFractionalIndicesEasyLevel();