// levels/surdToIndexEasy.js
class SurdToIndexEasyLevel {
    constructor() {
        this.key = 'surdToIndexEasy';
        this.name = 'Surd Form to Index Form (Easy)';
        this.usedQuestionIndices = new Set();
        
        // Easy level questions - Basic conversions between surd and index form
        this.questions = [

            // Basic fraction to negative index conversions
            {problem: "\\frac{4}{x}", answer: "4x^{-1}"},
            {problem: "\\frac{4}{x^2}", answer: "4x^{-2}"},
            {problem: "\\frac{5}{x^3}", answer: "5x^{-3}"},
            {problem: "\\frac{1}{x}", answer: "x^{-1}"},
            {problem: "\\frac{2}{x}", answer: "2x^{-1}"},
            {problem: "\\frac{3}{x^2}", answer: "3x^{-2}"},
            {problem: "\\frac{6}{x^4}", answer: "6x^{-4}"},
            {problem: "\\frac{7}{x^5}", answer: "7x^{-5}"},
            {problem: "\\frac{8}{y}", answer: "8y^{-1}"},
            {problem: "\\frac{9}{y^2}", answer: "9y^{-2}"},
            
            // Basic square root conversions
            {problem: "\\sqrt{x}", answer: "x^{\\frac{1}{2}}"},
            {problem: "\\sqrt{y}", answer: "y^{\\frac{1}{2}}"},
            {problem: "\\sqrt{z}", answer: "z^{\\frac{1}{2}}"},
            {problem: "\\sqrt{a}", answer: "a^{\\frac{1}{2}}"},
            {problem: "\\sqrt{b}", answer: "b^{\\frac{1}{2}}"},
            
            // Basic cube root conversions
            {problem: "\\sqrt[3]{x}", answer: "x^{\\frac{1}{3}}"},
            {problem: "\\sqrt[3]{y}", answer: "y^{\\frac{1}{3}}"},
            {problem: "\\sqrt[3]{z}", answer: "z^{\\frac{1}{3}}"},
            {problem: "\\sqrt[3]{a}", answer: "a^{\\frac{1}{3}}"},
            {problem: "\\sqrt[3]{b}", answer: "b^{\\frac{1}{3}}"},
            
            // Basic higher roots
            {problem: "\\sqrt[4]{x}", answer: "x^{\\frac{1}{4}}"},
            {problem: "\\sqrt[5]{x}", answer: "x^{\\frac{1}{5}}"},
            {problem: "\\sqrt[6]{x}", answer: "x^{\\frac{1}{6}}"},
            
            // Root of powers
            {problem: "\\sqrt[3]{x^2}", answer: "x^{\\frac{2}{3}}"},
            {problem: "\\sqrt[5]{x^3}", answer: "x^{\\frac{3}{5}}"},
            {problem: "\\sqrt[4]{x^3}", answer: "x^{\\frac{3}{4}}"},
            {problem: "\\sqrt{x^3}", answer: "x^{\\frac{3}{2}}"},
            {problem: "\\sqrt{x^5}", answer: "x^{\\frac{5}{2}}"},
            {problem: "\\sqrt[3]{x^4}", answer: "x^{\\frac{4}{3}}"},
            {problem: "\\sqrt[6]{x^5}", answer: "x^{\\frac{5}{6}}"},
            
            // Perfect power simplifications
            {problem: "3\\sqrt[4]{y^{12}}", answer: "3y^3"},
            {problem: "\\sqrt{25s^4}", answer: "5s^2"},
            {problem: "\\sqrt[3]{27t^6}", answer: "3t^2"},
            {problem: "\\sqrt[4]{16t^8}", answer: "2t^2"},
            {problem: "\\sqrt[3]{125t^{12}}", answer: "5t^4"},
            {problem: "\\sqrt{9x^2}", answer: "3x"},
            {problem: "\\sqrt{16x^4}", answer: "4x^2"},
            {problem: "\\sqrt[3]{8x^3}", answer: "2x"},
            {problem: "\\sqrt[3]{64x^6}", answer: "4x^2"},
            {problem: "\\sqrt{49x^6}", answer: "7x^3"},
            
            // Power of power simplifications
            {problem: "(x^3)^{\\frac{1}{3}}", answer: "x"},
            {problem: "(b^{12})^{\\frac{1}{3}}", answer: "b^4"},
            {problem: "(x^2)^{\\frac{1}{2}}", answer: "x"},
            {problem: "(x^4)^{\\frac{1}{2}}", answer: "x^2"},
            {problem: "(x^6)^{\\frac{1}{3}}", answer: "x^2"},
            {problem: "(x^8)^{\\frac{1}{4}}", answer: "x^2"},
            {problem: "(x^{10})^{\\frac{1}{5}}", answer: "x^2"},
            {problem: "(x^9)^{\\frac{1}{3}}", answer: "x^3"},
            
            // Simple coefficient cases
            {problem: "2\\sqrt{x}", answer: "2x^{\\frac{1}{2}}"},
            {problem: "3\\sqrt{x}", answer: "3x^{\\frac{1}{2}}"},
            {problem: "4\\sqrt[3]{x}", answer: "4x^{\\frac{1}{3}}"},
            {problem: "5\\sqrt[4]{x}", answer: "5x^{\\frac{1}{4}}"},
            {problem: "6\\sqrt{x^3}", answer: "6x^{\\frac{3}{2}}"},
            {problem: "7\\sqrt[3]{x^2}", answer: "7x^{\\frac{2}{3}}"},
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
window.AlgebraLevels.surdToIndexEasy = new SurdToIndexEasyLevel();