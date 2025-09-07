// levels/indexFormToSurdFormHard.js
class IndexFormToSurdFormHardLevel {
    constructor() {
        this.key = 'indexFormToSurdFormHard';
        this.name = 'Index Form to Surd Form (Hard)';
        this.usedQuestionIndices = new Set();
        
        // Predefined questions covering complex index to surd form conversions
        this.questions = [
            // Multi-variable expressions with complex fractional indices
            {problem: "x^{-\\frac{7}{5}}y^{\\frac{1}{5}}", answer: "\\frac{\\sqrt[5]{y}}{\\sqrt[5]{x^7}}"},
            {problem: "(64x^3)^{\\frac{1}{3}}", answer: "4x"},
            {problem: "(64x)^{-\\frac{1}{3}}", answer: "\\frac{1}{4\\sqrt[3]{x}}"},
            {problem: "(64x^2)^{\\frac{3}{2}}", answer: "512x^3"},
            {problem: "(64x^3)^{\\frac{1}{2}}", answer: "8x\\sqrt{x}"},
            {problem: "(64x^3)^{\\frac{1}{6}}", answer: "2\\sqrt{x}"},
            {problem: "\\frac{x^2}{\\sqrt{x}} \\times \\frac{\\sqrt{x}}{x\\sqrt{x}}", answer: "\\sqrt{x}"},
            
            // Complex multi-variable expressions
            {problem: "x^{\\frac{2}{3}}y^{-\\frac{1}{4}}", answer: "\\frac{\\sqrt[3]{x^2}}{\\sqrt[4]{y}}"},
            {problem: "a^{-\\frac{3}{2}}b^{\\frac{5}{3}}", answer: "\\frac{b\\sqrt[3]{b^2}}{a\\sqrt{a}}"},
            {problem: "(xy)^{\\frac{2}{3}}", answer: "\\sqrt[3]{x^2y^2}"},
            {problem: "(2x^2y^3)^{\\frac{1}{2}}", answer: "xy\\sqrt{2y}"},
            {problem: "(8x^3y^6)^{\\frac{1}{3}}", answer: "2xy^2"},
            
            // Complex powers of powers
            {problem: "((x^2)^{\\frac{3}{4}})^{\\frac{2}{3}}", answer: "x"},
            {problem: "(x^{\\frac{2}{5}})^{\\frac{5}{2}}", answer: "x"},
            {problem: "((2x)^{\\frac{1}{2}})^4", answer: "4x^2"},
            {problem: "(x^{-\\frac{1}{3}})^{-6}", answer: "x^2"},
            {problem: "((ab)^{\\frac{2}{3}})^{\\frac{9}{4}}", answer: "ab\\sqrt{ab}"},
            
            // Complex perfect power evaluations
            {problem: "(32x^5y^{10})^{\\frac{1}{5}}", answer: "2xy^2"},
            {problem: "(125x^9)^{\\frac{2}{3}}", answer: "25x^6"},
            
            // Complex index law applications with multiple variables
            {problem: "x^{\\frac{3}{4}}y^{\\frac{1}{2}} \\times x^{\\frac{1}{4}}y^{\\frac{1}{2}}", answer: "xy"},
            {problem: "\\frac{a^{\\frac{5}{3}}b^{\\frac{2}{3}}}{a^{\\frac{2}{3}}b^{-\\frac{1}{3}}}", answer: "ab"},
            {problem: "\\frac{x^{\\frac{7}{4}}y^{\\frac{3}{2}}}{x^{\\frac{3}{4}}y^{\\frac{1}{2}}}", answer: "xy"},
            {problem: "(x^{\\frac{1}{2}}y^{\\frac{2}{3}})^6", answer: "x^3y^4"},
            
            // Very complex fractional operations
            {problem: "\\frac{(x^{\\frac{2}{3}})^{\\frac{3}{4}}}{(x^{\\frac{1}{2}})^{\\frac{1}{3}}}", answer: "\\sqrt[3]{x}"},
            {problem: "\\frac{x^{\\frac{7}{6}}y^{\\frac{5}{4}}}{x^{\\frac{1}{6}}y^{\\frac{1}{4}}}", answer: "xy"},
            {problem: "x^{-\\frac{2}{3}} \\times (x^{\\frac{1}{2}})^{\\frac{4}{3}}", answer: "1"},
            {problem: "\\frac{(2x)^{\\frac{3}{2}}}{(2x)^{\\frac{1}{2}}}", answer: "2x"},
            
            // Complex coefficient manipulations
            {problem: "(\\frac{1}{27}x^3)^{\\frac{1}{3}}", answer: "\\frac{x}{3}"},
            {problem: "(\\frac{16}{81}x^4y^8)^{\\frac{1}{4}}", answer: "\\frac{2xy^2}{3}"},
            {problem: "(\\frac{8}{125}x^6)^{\\frac{1}{3}}", answer: "\\frac{2x^2}{5}"},
            {problem: "(0.001x^3)^{\\frac{1}{3}}", answer: "0.1x"},
            
            // Multi-step complex operations
            {problem: "\\frac{(8x^6)^{\\frac{1}{3}}}{(2x^2)^{\\frac{1}{2}}}", answer: "x\\sqrt{2}"},
            {problem: "(x^{-\\frac{1}{2}}y^{\\frac{3}{4}})^{-4}", answer: "\\frac{x^2}{y^3}"},
            {problem: "\\sqrt{\\frac{x^3}{y}} \\times \\sqrt{\\frac{y}{x}}", answer: "x"},
            
            // Extremely complex mixed operations
            {problem: "((x^{\\frac{1}{2}})^{\\frac{2}{3}})^{\\frac{3}{4}} \\times x^{-\\frac{1}{4}}", answer: "1"},
            
            // Additional complex expressions
            {problem: "(x^{\\frac{3}{8}}y^{\\frac{5}{12}})^{24}", answer: "x^9y^{10}"},
            {problem: "\\frac{x^{\\frac{11}{6}}}{x^{\\frac{5}{6}}} \\times x^{-\\frac{1}{3}}", answer: "\\sqrt[3]{x^2}"},
            {problem: "(\\frac{x^{\\frac{2}{3}}}{y^{\\frac{1}{4}}})^{12}", answer: "\\frac{x^8}{y^3}"},
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
window.AlgebraLevels.indexFormToSurdFormHard = new IndexFormToSurdFormHardLevel();