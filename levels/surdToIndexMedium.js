// levels/surdToIndexMedium.js
class SurdToIndexMediumLevel {
    constructor() {
        this.key = 'surdToIndexMedium';
        this.name = 'Surd Form to Index Form (Medium)';
        this.usedQuestionIndices = new Set();
        
        // Medium level questions - More complex conversions with fractions and combinations
        this.questions = [
            // Fractions with coefficients to negative indices
            {problem: "\\frac{3}{4x^2}", answer: "\\frac{3}{4}x^{-2}"},
            {problem: "\\frac{1}{4x^2}", answer: "\\frac{1}{4}x^{-2}"},
            {problem: "\\frac{5}{2x^3}", answer: "\\frac{5}{2}x^{-3}"},
            {problem: "\\frac{7}{3x^4}", answer: "\\frac{7}{3}x^{-4}"},
            {problem: "\\frac{2}{5x}", answer: "\\frac{2}{5}x^{-1}"},
            {problem: "\\frac{4}{3x^5}", answer: "\\frac{4}{3}x^{-5}"},
            {problem: "\\frac{6}{7x^2}", answer: "\\frac{6}{7}x^{-2}"},
            {problem: "\\frac{8}{9x^3}", answer: "\\frac{8}{9}x^{-3}"},
            
            // Coefficients with surds
            {problem: "5\\sqrt{x^3}", answer: "5x^{\\frac{3}{2}}"},
            {problem: "3\\sqrt{x^5}", answer: "3x^{\\frac{5}{2}}"},
            {problem: "4\\sqrt{x^7}", answer: "4x^{\\frac{7}{2}}"},
            {problem: "2\\sqrt{x^9}", answer: "2x^{\\frac{9}{2}}"},
            {problem: "6\\sqrt{x^{11}}", answer: "6x^{\\frac{11}{2}}"},
            {problem: "8\\sqrt{x^{13}}", answer: "8x^{\\frac{13}{2}}"},
            
            // Fractions under square roots
            {problem: "\\frac{1}{\\sqrt{x}}", answer: "x^{-\\frac{1}{2}}"},
            {problem: "\\frac{1}{\\sqrt[4]{x}}", answer: "x^{-\\frac{1}{4}}"},
            {problem: "\\frac{1}{\\sqrt[3]{x}}", answer: "x^{-\\frac{1}{3}}"},
            {problem: "\\frac{1}{\\sqrt[5]{x}}", answer: "x^{-\\frac{1}{5}}"},
            {problem: "\\frac{1}{\\sqrt[6]{x}}", answer: "x^{-\\frac{1}{6}}"},
            {problem: "\\frac{2}{\\sqrt{x}}", answer: "2x^{-\\frac{1}{2}}"},
            {problem: "\\frac{3}{\\sqrt[3]{x}}", answer: "3x^{-\\frac{1}{3}}"},
            {problem: "\\frac{5}{\\sqrt[4]{x}}", answer: "5x^{-\\frac{1}{4}}"},
            
            // Fractions with powers under roots
            {problem: "\\frac{4}{\\sqrt[3]{x^2}}", answer: "4x^{-\\frac{2}{3}}"},
            {problem: "\\frac{2}{3\\sqrt{x}}", answer: "\\frac{2}{3}x^{-\\frac{1}{2}}"},
            {problem: "\\frac{1}{4\\sqrt[3]{x^2}}", answer: "\\frac{1}{4}x^{-\\frac{2}{3}}"},
            {problem: "\\frac{4}{5\\sqrt[5]{x^3}}", answer: "\\frac{4}{5}x^{-\\frac{3}{5}}"},
            {problem: "\\frac{3}{7\\sqrt[4]{x^3}}", answer: "\\frac{3}{7}x^{-\\frac{3}{4}}"},
            {problem: "\\frac{5}{2\\sqrt{x^3}}", answer: "\\frac{5}{2}x^{-\\frac{3}{2}}"},
            {problem: "\\frac{7}{6\\sqrt[3]{x^4}}", answer: "\\frac{7}{6}x^{-\\frac{4}{3}}"},
            {problem: "\\frac{2}{9\\sqrt[5]{x^2}}", answer: "\\frac{2}{9}x^{-\\frac{2}{5}}"},
            
            // Higher coefficients with surds
            {problem: "7\\sqrt{x^5}", answer: "7x^{\\frac{5}{2}}"},
            {problem: "6\\sqrt[3]{n^7}", answer: "6n^{\\frac{7}{3}}"},
            {problem: "9\\sqrt{x^9}", answer: "9x^{\\frac{9}{2}}"},
            {problem: "10\\sqrt[4]{x^7}", answer: "10x^{\\frac{7}{4}}"},
            {problem: "12\\sqrt[5]{x^8}", answer: "12x^{\\frac{8}{5}}"},
            {problem: "15\\sqrt[3]{x^{10}}", answer: "15x^{\\frac{10}{3}}"},
            {problem: "8\\sqrt{x^{11}}", answer: "8x^{\\frac{11}{2}}"},
            
            // Constants under surds
            {problem: "6\\sqrt{5}", answer: "6 \\times 5^{\\frac{1}{2}}"},
            {problem: "7\\sqrt{6}", answer: "7 \\times 6^{\\frac{1}{2}}"},
            {problem: "5\\sqrt[3]{4}", answer: "5 \\times 4^{\\frac{1}{3}}"},
            {problem: "8\\sqrt{7}", answer: "8 \\times 7^{\\frac{1}{2}}"},
            {problem: "9\\sqrt[4]{3}", answer: "9 \\times 3^{\\frac{1}{4}}"},
            {problem: "4\\sqrt[5]{2}", answer: "4 \\times 2^{\\frac{1}{5}}"},
            {problem: "11\\sqrt{10}", answer: "11 \\times 10^{\\frac{1}{2}}"},
            {problem: "13\\sqrt[3]{8}", answer: "26"},
            
            // Perfect power with fractional indices
            {problem: "(16a^2b^8)^{\\frac{1}{2}}", answer: "4ab^4"},
            {problem: "(32x^{10}y^{15})^{\\frac{1}{5}}", answer: "2x^2y^3"},
            {problem: "(27x^6y^9)^{\\frac{1}{3}}", answer: "3x^2y^3"},
            {problem: "(81x^8y^{12})^{\\frac{1}{4}}", answer: "3x^2y^3"},
            {problem: "(64x^9y^{12})^{\\frac{1}{3}}", answer: "4x^3y^4"},
            {problem: "(25x^4y^6)^{\\frac{1}{2}}", answer: "5x^2y^3"},
            
            // Fraction under surds
            {problem: "\\sqrt[3]{\\frac{8x^3}{27}}", answer: "\\frac{2x}{3}"},
            {problem: "\\sqrt{\\frac{4x^2}{9}}", answer: "\\frac{2x}{3}"},
            {problem: "\\sqrt{\\frac{25x^4}{16}}", answer: "\\frac{5x^2}{4}"},
            {problem: "\\sqrt[3]{\\frac{27x^6}{8}}", answer: "\\frac{3x^2}{2}"},
            {problem: "\\sqrt{\\frac{36x^6}{49}}", answer: "\\frac{6x^3}{7}"},
            
            // Multiplication of terms with surds
            {problem: "x^2 \\sqrt{x}", answer: "x^{\\frac{5}{2}}"},
            {problem: "x^3 \\sqrt{x}", answer: "x^{\\frac{7}{2}}"},
            {problem: "x^4 \\sqrt{x}", answer: "x^{\\frac{9}{2}}"},
            {problem: "x \\sqrt[3]{x}", answer: "x^{\\frac{4}{3}}"},
            {problem: "x^2 \\sqrt[3]{x}", answer: "x^{\\frac{7}{3}}"},
            {problem: "x^5 \\sqrt{x}", answer: "x^{\\frac{11}{2}}"},
            
            // Division of terms with surds
            {problem: "\\frac{\\sqrt{x}}{x^3}", answer: "x^{-\\frac{5}{2}}"},
            {problem: "\\frac{\\sqrt{x}}{x^2}", answer: "x^{-\\frac{3}{2}}"},
            {problem: "\\frac{\\sqrt{x}}{x}", answer: "x^{-\\frac{1}{2}}"},
            {problem: "\\frac{\\sqrt[3]{x}}{x^2}", answer: "x^{-\\frac{5}{3}}"},
            {problem: "\\frac{\\sqrt[4]{x}}{x^3}", answer: "x^{-\\frac{11}{4}}"},
            
            // Same base expressions
            {problem: "2\\sqrt{2}", answer: "2^{\\frac{3}{2}}"},
            {problem: "3\\sqrt{3}", answer: "3^{\\frac{3}{2}}"},
            {problem: "4\\sqrt{4}", answer: "8"},
            {problem: "5\\sqrt{5}", answer: "5^{\\frac{3}{2}}"},
            {problem: "2\\sqrt[3]{2}", answer: "2^{\\frac{4}{3}}"},
            {problem: "3\\sqrt[3]{3}", answer: "3^{\\frac{4}{3}}"}
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
window.AlgebraLevels.surdToIndexMedium = new SurdToIndexMediumLevel();