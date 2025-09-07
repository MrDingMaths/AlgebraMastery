// levels/indexFormToSurdFormEasy.js
class IndexFormToSurdFormEasyLevel {
    constructor() {
        this.key = 'indexFormToSurdFormEasy';
        this.name = 'Index Form to Surd Form (Easy)';
        this.usedQuestionIndices = new Set();
        
        // Predefined questions covering basic index to surd form conversions
        this.questions = [
            // Basic negative indices
            {problem: "x^{-3}", answer: "\\frac{1}{x^3}"},
            {problem: "3x^{-1}", answer: "\\frac{3}{x}"},
            {problem: "(3x)^{-1}", answer: "\\frac{1}{3x}"},
            {problem: "5x^{-2}", answer: "\\frac{5}{x^2}"},
            {problem: "\\frac{2}{3}x^{-4}", answer: "\\frac{2}{3x^4}"},
            {problem: "\\frac{4}{5}x^{-3}", answer: "\\frac{4}{5x^3}"},
            {problem: "\\frac{4x^{-3}}{5}", answer: "\\frac{4}{5x^3}"},
            {problem: "\\frac{1}{5}x^{-3}", answer: "\\frac{1}{5x^3}"},
            {problem: "\\frac{x^{-3}}{5}", answer: "\\frac{1}{5x^3}"},
            
            // Basic fractional indices - simple radicals
            {problem: "x^{\\frac{1}{2}}", answer: "\\sqrt{x}"},
            {problem: "x^{\\frac{3}{4}}", answer: "\\sqrt[4]{x^3}"},
            {problem: "2x^{\\frac{1}{5}}", answer: "2\\sqrt[5]{x}"},
            {problem: "(2x)^{\\frac{1}{5}}", answer: "\\sqrt[5]{2x}"},
            {problem: "64x^{\\frac{1}{3}}", answer: "64\\sqrt[3]{x}"},
            {problem: "64x^{\\frac{1}{2}}", answer: "64\\sqrt{x}"},
            {problem: "64x^2", answer: "64x^2"},
            
            // Simple index law applications with radicals
            {problem: "a^{\\frac{1}{2}} \\times a^{\\frac{1}{2}}", answer: "a"},
            {problem: "a^{\\frac{1}{3}} \\times a^{\\frac{1}{3}}", answer: "\\sqrt[3]{a^2}"},
            {problem: "a^{\\frac{2}{3}} \\times a^{\\frac{4}{3}}", answer: "a^2"},
            {problem: "\\frac{x^{\\frac{2}{3}}}{x^{\\frac{1}{3}}}", answer: "\\sqrt[3]{x}"},
            {problem: "\\frac{x^{\\frac{3}{2}}}{x^{\\frac{1}{2}}}", answer: "x"},
            {problem: "\\frac{x^{\\frac{7}{6}}}{x^{\\frac{2}{6}}}", answer: "\\sqrt[6]{x^5}"},
            {problem: "\\frac{x^{\\frac{4}{3}}}{x^{\\frac{1}{3}}}", answer: "x"},
            
            // Power of a power - simple cases
            {problem: "(y^2)^{\\frac{1}{2}}", answer: "y"},
            {problem: "(y^3)^{\\frac{2}{3}}", answer: "y^2"},
            {problem: "(y^2)^{\\frac{1}{3}}", answer: "\\sqrt[3]{y^2}"},
            {problem: "(x^{\\frac{1}{2}})^{\\frac{1}{2}}", answer: "\\sqrt[4]{x}"},
            
            // Simple integer index applications
            {problem: "x^3 \\times x", answer: "x^4"},
            {problem: "\\sqrt{x} \\times \\sqrt{x}", answer: "x"},
            {problem: "\\frac{1}{x} \\times \\frac{1}{x}", answer: "\\frac{1}{x^2}"},
            {problem: "\\frac{1}{x} \\times x", answer: "1"},
            {problem: "\\frac{x^3}{x} \\times x", answer: "x^3"},
            {problem: "\\frac{x^2}{\\sqrt{x}} \\times \\sqrt{x}", answer: "x^2"},
            
            // Additional basic negative indices
            {problem: "2x^{-1}", answer: "\\frac{2}{x}"},
            {problem: "4x^{-3}", answer: "\\frac{4}{x^3}"},
            {problem: "x^{-1}", answer: "\\frac{1}{x}"},
            {problem: "x^{-2}", answer: "\\frac{1}{x^2}"},
            {problem: "6x^{-1}", answer: "\\frac{6}{x}"},
            {problem: "3x^{-4}", answer: "\\frac{3}{x^4}"},
            
            // Additional simple fractional indices
            {problem: "x^{\\frac{1}{3}}", answer: "\\sqrt[3]{x}"},
            {problem: "x^{\\frac{1}{4}}", answer: "\\sqrt[4]{x}"},
            {problem: "x^{\\frac{1}{6}}", answer: "\\sqrt[6]{x}"},
            {problem: "3x^{\\frac{1}{2}}", answer: "3\\sqrt{x}"},
            {problem: "5x^{\\frac{1}{3}}", answer: "5\\sqrt[3]{x}"},
            {problem: "2x^{\\frac{1}{4}}", answer: "2\\sqrt[4]{x}"},
            
            // Simple coefficient combinations
            {problem: "4x^{\\frac{1}{2}}", answer: "4\\sqrt{x}"},
            {problem: "9x^{\\frac{1}{3}}", answer: "9\\sqrt[3]{x}"},
            {problem: "8x^{\\frac{1}{4}}", answer: "8\\sqrt[4]{x}"},
            
            // Basic mixed operations
            {problem: "x^{\\frac{1}{2}} \\times x^{\\frac{1}{3}}", answer: "\\sqrt[6]{x^5}"},
            {problem: "x^{\\frac{1}{4}} \\times x^{\\frac{1}{4}}", answer: "\\sqrt{x}"},
            {problem: "\\frac{x^{\\frac{1}{2}}}{x^{\\frac{1}{4}}}", answer: "\\sqrt[4]{x}"},
            
            // Simple perfect power cases
            {problem: "4^{\\frac{1}{2}}", answer: "2"},
            {problem: "8^{\\frac{1}{3}}", answer: "2"},
            {problem: "16^{\\frac{1}{4}}", answer: "2"},
            {problem: "9^{\\frac{1}{2}}", answer: "3"},
            {problem: "27^{\\frac{1}{3}}", answer: "3"}
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
window.AlgebraLevels.indexFormToSurdFormEasy = new IndexFormToSurdFormEasyLevel();