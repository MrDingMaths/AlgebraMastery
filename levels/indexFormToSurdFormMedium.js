// levels/indexFormToSurdFormMedium.js
class IndexFormToSurdFormMediumLevel {
    constructor() {
        this.key = 'indexFormToSurdFormMedium';
        this.name = 'Index Form to Surd Form (Medium)';
        this.usedQuestionIndices = new Set();
        
        // Predefined questions covering medium complexity index to surd form conversions
        this.questions = [
            // Mixed fractional indices with surds
            {problem: "x^{\\frac{3}{2}}", answer: "x\\sqrt{x}"},
            {problem: "3x^{\\frac{5}{2}}", answer: "3x^2\\sqrt{x}"},
            {problem: "x^{-\\frac{1}{2}}", answer: "\\frac{1}{\\sqrt{x}}"},
            {problem: "x^{-\\frac{3}{4}}", answer: "\\frac{1}{\\sqrt[4]{x^3}}"},
            {problem: "3x^{-\\frac{2}{3}}", answer: "\\frac{3}{\\sqrt[3]{x^2}}"},
            {problem: "\\frac{1}{6}x^{-\\frac{3}{4}}", answer: "\\frac{1}{6\\sqrt[4]{x^3}}"},
            {problem: "x^{\\frac{4}{3}}", answer: "x\\sqrt[3]{x}"},
            {problem: "x^{-\\frac{4}{3}}", answer: "\\frac{1}{x\\sqrt[3]{x}}"},
            
            // Perfect power evaluations with coefficients
            {problem: "(64x)^{\\frac{1}{3}}", answer: "4\\sqrt[3]{x}"},
            {problem: "64x^{-\\frac{1}{3}}", answer: "\\frac{64}{\\sqrt[3]{x}}"},
            {problem: "(64x)^{\\frac{1}{2}}", answer: "8\\sqrt{x}"},
            {problem: "(64x^2)^{\\frac{1}{3}}", answer: "4\\sqrt[3]{x^2}"},
            {problem: "64(x^2)^{\\frac{1}{6}}", answer: "64\\sqrt[3]{x}"},
            
            // Index law multiplication with mixed forms
            {problem: "a^2 \\times a^{\\frac{1}{2}}", answer: "a^2\\sqrt{a}"},
            {problem: "(x^{\\frac{2}{3}})^4", answer: "x^2\\sqrt[3]{x^2}"},
            {problem: "(a^{\\frac{2}{5}})^{\\frac{1}{3}}", answer: "\\sqrt[15]{a^2}"},
            {problem: "(a^{\\frac{3}{4}})^{\\frac{1}{2}}", answer: "\\sqrt[8]{a^3}"},
            {problem: "(n^{\\frac{2}{5}})^{\\frac{10}{3}}", answer: "n\\sqrt[3]{n}"},
            {problem: "a \\times a^{\\frac{1}{3}}", answer: "a\\sqrt[3]{a}"},
            {problem: "a^{\\frac{1}{2}} \\times a^{\\frac{1}{5}}", answer: "\\sqrt[10]{a^7}"},
            {problem: "a^{\\frac{2}{3}} \\times a^{\\frac{3}{7}}", answer: "a\\sqrt[21]{a^2}"},
            
            // Index law division with mixed forms
            {problem: "a^5 \\div a^{\\frac{7}{3}}", answer: "a^2\\sqrt[3]{a^2}"},
            {problem: "x^2 \\times \\sqrt{x}", answer: "x^2\\sqrt{x}"},
            {problem: "x^3 \\times \\sqrt{x}", answer: "x^3\\sqrt{x}"},
            {problem: "x^2 \\times \\sqrt[3]{x}", answer: "x^2\\sqrt[3]{x}"},
            {problem: "\\sqrt{x} \\times \\sqrt[3]{x}", answer: "\\sqrt[6]{x^5}"},
            {problem: "x\\sqrt{x} \\times x", answer: "x^2\\sqrt{x}"},
            {problem: "x\\sqrt{x} \\times x\\sqrt{x}", answer: "x^3"},
            {problem: "\\frac{1}{\\sqrt{x}} \\times \\frac{1}{\\sqrt{x}}", answer: "\\frac{1}{x}"},
            {problem: "\\frac{1}{\\sqrt{x}} \\times x", answer: "\\sqrt{x}"},
            {problem: "\\frac{1}{\\sqrt{x}} \\times \\frac{x}{\\sqrt{x}}", answer: "1"},
            
            // Additional mixed fractional indices
            {problem: "2x^{\\frac{3}{2}}", answer: "2x\\sqrt{x}"},
            {problem: "4x^{\\frac{5}{2}}", answer: "4x^2\\sqrt{x}"},
            {problem: "x^{\\frac{5}{3}}", answer: "x\\sqrt[3]{x^2}"},
            {problem: "x^{\\frac{7}{4}}", answer: "x\\sqrt[4]{x^3}"},
            {problem: "5x^{\\frac{3}{4}}", answer: "5\\sqrt[4]{x^3}"},
            {problem: "3x^{\\frac{4}{3}}", answer: "3x\\sqrt[3]{x}"},
            
            // Negative fractional indices
            {problem: "2x^{-\\frac{1}{2}}", answer: "\\frac{2}{\\sqrt{x}}"},
            {problem: "5x^{-\\frac{3}{2}}", answer: "\\frac{5}{x\\sqrt{x}}"},
            {problem: "x^{-\\frac{5}{3}}", answer: "\\frac{1}{x\\sqrt[3]{x^2}}"},
            {problem: "4x^{-\\frac{2}{3}}", answer: "\\frac{4}{\\sqrt[3]{x^2}}"},
            
            // Perfect power with fractional exponents
            {problem: "25^{\\frac{1}{2}}", answer: "5"},
            {problem: "125^{\\frac{1}{3}}", answer: "5"},
            {problem: "32^{\\frac{1}{5}}", answer: "2"},
            {problem: "16^{\\frac{3}{4}}", answer: "8"},
            {problem: "27^{\\frac{2}{3}}", answer: "9"},
            
            // More complex index law applications
            {problem: "x^{\\frac{2}{3}} \\times x^{\\frac{1}{6}}", answer: "\\sqrt[6]{x^5}"},
            {problem: "x^{\\frac{3}{4}} \\times x^{\\frac{1}{4}}", answer: "x"},
            {problem: "\\frac{x^{\\frac{5}{6}}}{x^{\\frac{1}{6}}}", answer: "\\sqrt[3]{x^2}"},
            {problem: "\\frac{x^{\\frac{7}{4}}}{x^{\\frac{3}{4}}}", answer: "x"},
            
            // Power of powers with surds
            {problem: "(x^3)^{\\frac{1}{2}}", answer: "x\\sqrt{x}"},
            {problem: "(x^4)^{\\frac{3}{4}}", answer: "x^3"},
            {problem: "(x^6)^{\\frac{1}{3}}", answer: "x^2"},
            {problem: "(x^{\\frac{3}{2}})^2", answer: "x^3"},
            
            // Mixed operations with coefficients
            {problem: "2\\sqrt{x} \\times 3\\sqrt{x}", answer: "6x"},
            {problem: "\\frac{8\\sqrt{x}}{2\\sqrt{x}}", answer: "4"},
            {problem: "5\\sqrt[3]{x} \\times \\sqrt[3]{x}", answer: "5\\sqrt[3]{x^2}"},
            {problem: "\\sqrt{x} \\times 4\\sqrt[3]{x}", answer: "4\\sqrt[6]{x^5}"}
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
window.AlgebraLevels.indexFormToSurdFormMedium = new IndexFormToSurdFormMediumLevel();