// levels/surdToIndexHard.js
class SurdToIndexHardLevel {
    constructor() {
        this.key = 'surdToIndexHard';
        this.name = 'Surd Form to Index Form (Hard)';
        this.usedQuestionIndices = new Set();
        
        // Hard level questions - Complex multi-variable and advanced conversions
        this.questions = [
            // Complex multi-variable surds
            {problem: "\\sqrt[5]{10t^2}", answer: "10^{\\frac{1}{5}}t^{\\frac{2}{5}}"},
            {problem: "\\sqrt[8]{8m^4}", answer: "8^{\\frac{1}{8}}m^{\\frac{1}{2}}"},
            {problem: "\\sqrt[4]{7x^7}", answer: "7^{\\frac{1}{4}}x^{\\frac{7}{4}}"},
            {problem: "5\\sqrt[3]{p^2r}", answer: "5p^{\\frac{2}{3}}r^{\\frac{1}{3}}"},
            {problem: "2\\sqrt[3]{a^4b^2}", answer: "2a^{\\frac{4}{3}}b^{\\frac{2}{3}}"},
            {problem: "2\\sqrt[4]{g^3h^5}", answer: "2g^{\\frac{3}{4}}h^{\\frac{5}{4}}"},
            {problem: "3\\sqrt[5]{x^7y^3}", answer: "3x^{\\frac{7}{5}}y^{\\frac{3}{5}}"},
            {problem: "4\\sqrt[6]{a^5b^7}", answer: "4a^{\\frac{5}{6}}b^{\\frac{7}{6}}"},
            {problem: "6\\sqrt[7]{m^8n^{12}}", answer: "6m^{\\frac{8}{7}}n^{\\frac{12}{7}}"},
            {problem: "7\\sqrt[3]{x^{10}y^8z^5}", answer: "7x^{\\frac{10}{3}}y^{\\frac{8}{3}}z^{\\frac{5}{3}}"},
            
            // Multi-variable with constants
            {problem: "\\sqrt[4]{81x^8y^{12}}", answer: "3x^2y^3"},
            {problem: "\\sqrt[3]{125x^6y^9}", answer: "5x^2y^3"},
            {problem: "\\sqrt[5]{243x^{10}y^{15}}", answer: "3x^2y^3"},
            {problem: "\\sqrt[6]{64x^{12}y^{18}}", answer: "2x^2y^3"},
            {problem: "\\sqrt[7]{128x^{14}y^{21}}", answer: "2x^2y^3"},
            {problem: "\\sqrt[8]{256x^{16}y^{24}}", answer: "2x^2y^3"},
            
            // Complex multiplication of surds and powers
            {problem: "x^3 \\sqrt[3]{x^2}", answer: "x^{\\frac{11}{3}}"},
            {problem: "x^4 \\sqrt[4]{x^3}", answer: "x^{\\frac{19}{4}}"},
            {problem: "x^5 \\sqrt[5]{x^2}", answer: "x^{\\frac{27}{5}}"},
            {problem: "x^2 \\sqrt[6]{x^7}", answer: "x^{\\frac{19}{6}}"},
            {problem: "x^7 \\sqrt[3]{x^5}", answer: "x^{\\frac{26}{3}}"},
            {problem: "x^6 \\sqrt[4]{x^9}", answer: "x^{\\frac{33}{4}}"},
            
            // Complex division of surds and powers
            {problem: "\\frac{x}{\\sqrt[3]{x^2}}", answer: "x^{\\frac{1}{3}}"},
            {problem: "\\frac{x^2}{\\sqrt[4]{x^3}}", answer: "x^{\\frac{5}{4}}"},
            {problem: "\\frac{x^3}{\\sqrt[5]{x^4}}", answer: "x^{\\frac{11}{5}}"},
            {problem: "\\frac{x^4}{\\sqrt[6]{x^7}}", answer: "x^{\\frac{17}{6}}"},
            {problem: "\\frac{x^5}{\\sqrt[3]{x^8}}", answer: "x^{\\frac{7}{3}}"},
            {problem: "\\frac{x^7}{\\sqrt[4]{x^{11}}}", answer: "x^{\\frac{17}{4}}"},
            
            // Complex same base expressions with high powers
            {problem: "25\\sqrt{5}", answer: "5^{\\frac{5}{2}}"},
            {problem: "27\\sqrt{3}", answer: "3^{\\frac{7}{2}}"},
            {problem: "16\\sqrt{2}", answer: "2^{\\frac{9}{2}}"},
            {problem: "49\\sqrt{7}", answer: "7^{\\frac{5}{2}}"},
            {problem: "64\\sqrt{8}", answer: "8^{\\frac{5}{2}}"},
            {problem: "81\\sqrt{9}", answer: "9^{\\frac{5}{2}}"},
            {problem: "32\\sqrt{2}", answer: "2^{\\frac{11}{2}}"},
            {problem: "125\\sqrt{5}", answer: "5^{\\frac{7}{2}}"},
            
            // Cube and higher same base
            {problem: "8\\sqrt[3]{2}", answer: "2^{\\frac{10}{3}}"},
            {problem: "9\\sqrt[3]{3}", answer: "3^{\\frac{7}{3}}"},
            {problem: "27\\sqrt[3]{3}", answer: "3^{\\frac{10}{3}}"},
            {problem: "125\\sqrt[3]{5}", answer: "5^{\\frac{10}{3}}"},
            {problem: "16\\sqrt[4]{2}", answer: "2^{\\frac{17}{4}}"},
            {problem: "81\\sqrt[4]{3}", answer: "3^{\\frac{17}{4}}"},
            
            // Complex nested operations
            {problem: "\\frac{\\sqrt[3]{x^7}}{x^2 \\sqrt{x}}", answer: "x^{-\\frac{1}{6}}"},
            {problem: "\\frac{x^3 \\sqrt{x}}{\\sqrt[4]{x^7}}", answer: "x^{\\frac{7}{4}}"},
            {problem: "\\frac{\\sqrt[5]{x^8}}{x \\sqrt[3]{x^2}}", answer: "x^{-\\frac{1}{15}}"},
            {problem: "\\frac{x^4 \\sqrt[3]{x^5}}{\\sqrt{x^7}}", answer: "x^{\\frac{13}{6}}"},
            
            // Multi-variable fractions under surds
            {problem: "\\sqrt[3]{\\frac{64x^9}{27y^6}}", answer: "\\frac{4x^3}{3y^2}"},
            {problem: "\\sqrt[4]{\\frac{81x^{12}}{16y^8}}", answer: "\\frac{3x^3}{2y^2}"},
            {problem: "\\sqrt[5]{\\frac{32x^{15}}{243y^{10}}}", answer: "\\frac{2x^3}{3y^2}"},
            {problem: "\\sqrt{\\frac{144x^8}{49y^6}}", answer: "\\frac{12x^4}{7y^3}"},
            {problem: "\\sqrt[6]{\\frac{729x^{18}}{64y^{12}}}", answer: "\\frac{3x^3}{2y^2}"},
                        
            // Powers of multi-variable expressions
            {problem: "(125x^{15}y^{21}z^9)^{\\frac{1}{3}}", answer: "5x^5y^7z^3"},
            {problem: "(256x^{20}y^{16}z^{12})^{\\frac{1}{4}}", answer: "4x^5y^4z^3"},
            {problem: "(243x^{25}y^{15}z^{10})^{\\frac{1}{5}}", answer: "3x^5y^3z^2"},
            {problem: "(729x^{18}y^{24}z^{30})^{\\frac{1}{6}}", answer: "3x^3y^4z^5"},
            
            // Complex constant expressions
            {problem: "\\sqrt[7]{128x^{21}}", answer: "2x^3"},
            {problem: "\\sqrt[9]{512x^{27}}", answer: "2x^3"},
            {problem: "\\sqrt[{10}]{1024x^{30}}", answer: "2x^3"},
            {problem: "\\sqrt[{11}]{2048x^{33}}", answer: "2x^3"},
            
            // Extreme multi-step conversions
            {problem: "\\frac{x^3\\sqrt[4]{x^7}}{\\sqrt[3]{x^8}}", answer: "x^{\\frac{25}{12}}"},
            {problem: "\\frac{\\sqrt[5]{x^{12}}}{x^2\\sqrt{x^3}}", answer: "x^{-\\frac{11}{10}}"},
            {problem: "\\frac{x\\sqrt[6]{x^{11}}}{\\sqrt[4]{x^9}}", answer: "\\x^{\\frac{7}{12}}"}
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
window.AlgebraLevels.surdToIndexHard = new SurdToIndexHardLevel();