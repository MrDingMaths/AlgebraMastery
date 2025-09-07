// levels/negativeIndicesEasy.js
class NegativeIndicesEasyLevel {
    constructor() {
        this.key = 'negativeIndicesEasy';
        this.name = 'Negative Indices (Easy)';
        this.usedQuestionIndices = new Set();
        
        // Easy Level: Foundational negative exponent concepts
        this.questions = [
            // Basic single variable negative exponents
            {problem: "x^{-1}", answer: "\\frac{1}{x}"},
            {problem: "y^{-2}", answer: "\\frac{1}{y^2}"},
            {problem: "a^{-3}", answer: "\\frac{1}{a^3}"},
            {problem: "b^{-4}", answer: "\\frac{1}{b^4}"},
            {problem: "m^{-5}", answer: "\\frac{1}{m^5}"},
            {problem: "t^{-6}", answer: "\\frac{1}{t^6}"},
            {problem: "p^{-7}", answer: "\\frac{1}{p^7}"},
            {problem: "n^{-8}", answer: "\\frac{1}{n^8}"},
            {problem: "k^{-9}", answer: "\\frac{1}{k^9}"},
            {problem: "r^{-10}", answer: "\\frac{1}{r^{10}}"},
            
            // Small numerical bases with negative exponents
            {problem: "2^{-1}", answer: "\\frac{1}{2}"},
            {problem: "3^{-1}", answer: "\\frac{1}{3}"},
            {problem: "4^{-1}", answer: "\\frac{1}{4}"},
            {problem: "5^{-1}", answer: "\\frac{1}{5}"},
            {problem: "2^{-2}", answer: "\\frac{1}{4}"},
            {problem: "3^{-2}", answer: "\\frac{1}{9}"},
            {problem: "4^{-2}", answer: "\\frac{1}{16}"},
            {problem: "5^{-2}", answer: "\\frac{1}{25}"},
            {problem: "2^{-3}", answer: "\\frac{1}{8}"},
            {problem: "3^{-3}", answer: "\\frac{1}{27}"},
            {problem: "2^{-4}", answer: "\\frac{1}{16}"},
            {problem: "10^{-1}", answer: "\\frac{1}{10}"},
            {problem: "10^{-2}", answer: "\\frac{1}{100}"},
            {problem: "10^{-3}", answer: "\\frac{1}{1000}"},
            
            // Simple coefficients with negative exponents
            {problem: "2x^{-1}", answer: "\\frac{2}{x}"},
            {problem: "3y^{-1}", answer: "\\frac{3}{y}"},
            {problem: "4a^{-1}", answer: "\\frac{4}{a}"},
            {problem: "5b^{-1}", answer: "\\frac{5}{b}"},
            {problem: "2m^{-2}", answer: "\\frac{2}{m^2}"},
            {problem: "3t^{-2}", answer: "\\frac{3}{t^2}"},
            {problem: "4p^{-2}", answer: "\\frac{4}{p^2}"},
            {problem: "5n^{-2}", answer: "\\frac{5}{n^2}"},
            {problem: "2k^{-3}", answer: "\\frac{2}{k^3}"},
            {problem: "3r^{-3}", answer: "\\frac{3}{r^3}"},
            {problem: "6x^{-2}", answer: "\\frac{6}{x^2}"},
            {problem: "7y^{-3}", answer: "\\frac{7}{y^3}"},
            {problem: "8a^{-4}", answer: "\\frac{8}{a^4}"},
            {problem: "9b^{-5}", answer: "\\frac{9}{b^5}"},
            
            // Basic reciprocal forms (negative exponent in denominator)
            {problem: "\\frac{1}{x^{-1}}", answer: "x"},
            {problem: "\\frac{1}{y^{-2}}", answer: "y^2"},
            {problem: "\\frac{1}{a^{-3}}", answer: "a^3"},
            {problem: "\\frac{1}{b^{-4}}", answer: "b^4"},
            {problem: "\\frac{1}{m^{-5}}", answer: "m^5"},
            {problem: "\\frac{2}{x^{-1}}", answer: "2x"},
            {problem: "\\frac{3}{y^{-2}}", answer: "3y^2"},
            {problem: "\\frac{4}{a^{-3}}", answer: "4a^3"},
            {problem: "\\frac{5}{b^{-4}}", answer: "5b^4"},
            {problem: "\\frac{6}{m^{-5}}", answer: "6m^5"},
            
            // Simple fractions with negative exponents in denominator
            {problem: "\\frac{x}{y^{-1}}", answer: "xy"},
            {problem: "\\frac{a}{b^{-2}}", answer: "ab^2"},
            {problem: "\\frac{m}{n^{-3}}", answer: "mn^3"},
            {problem: "\\frac{p}{q^{-4}}", answer: "pq^4"},
            {problem: "\\frac{2x}{y^{-1}}", answer: "2xy"},
            {problem: "\\frac{3a}{b^{-2}}", answer: "3ab^2"},
            {problem: "\\frac{4m}{n^{-3}}", answer: "4mn^3"},
            {problem: "\\frac{x^2}{y^{-1}}", answer: "x^2y"},
            {problem: "\\frac{a^3}{b^{-2}}", answer: "a^3b^2"},
            {problem: "\\frac{m^4}{n^{-3}}", answer: "m^4n^3"},
            
            // Additional practice with signed numbers
            {problem: "(-2)^{-2}", answer: "\\frac{1}{4}"},
            {problem: "(-3)^{-2}", answer: "\\frac{1}{9}"},
            {problem: "-2^{-2}", answer: "-\\frac{1}{4}"},
            {problem: "-3^{-2}", answer: "-\\frac{1}{9}"},
            {problem: "(-5)^{-1}", answer: "-\\frac{1}{5}"},
            {problem: "-5^{-1}", answer: "-\\frac{1}{5}"},
            
            // Review questions
            {problem: "z^{-1}", answer: "\\frac{1}{z}"},
            {problem: "w^{-4}", answer: "\\frac{1}{w^4}"},
            {problem: "c^{-9}", answer: "\\frac{1}{c^9}"},
            {problem: "6^{-1}", answer: "\\frac{1}{6}"},
            {problem: "8^{-2}", answer: "\\frac{1}{64}"},
            {problem: "\\frac{7}{q^{-1}}", answer: "7q"}
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
window.AlgebraLevels.negativeIndicesEasy = new NegativeIndicesEasyLevel();