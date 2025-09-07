// levels/negativeIndicesMedium.js
class NegativeIndicesMediumLevel {
    constructor() {
        this.key = 'negativeIndicesMedium';
        this.name = 'Negative Indices (Medium)';
        this.usedQuestionIndices = new Set();
        
        // Medium Level: Multi-variable expressions and intermediate operations
        this.questions = [
            // Multiple variables with mixed positive/negative exponents
            {problem: "3a^2b^{-3}", answer: "\\frac{3a^2}{b^3}"},
            {problem: "4m^3n^{-2}", answer: "\\frac{4m^3}{n^2}"},
            {problem: "p^5q^{-4}", answer: "\\frac{p^5}{q^4}"},
            {problem: "mn^{-3}", answer: "\\frac{m}{n^3}"},
            {problem: "x^4y^{-2}", answer: "\\frac{x^4}{y^2}"},
            {problem: "2a^{-2}b^3", answer: "\\frac{2b^3}{a^2}"},
            {problem: "5r^{-3}s^2", answer: "\\frac{5s^2}{r^3}"},
            {problem: "a^6b^{-5}", answer: "\\frac{a^6}{b^5}"},
            {problem: "7x^{-1}y^4", answer: "\\frac{7y^4}{x}"},
            {problem: "3m^3n^{-4}", answer: "\\frac{3m^3}{n^4}"},
            
            // Products involving negative exponents  
            {problem: "x^2 \\times x^{-5}", answer: "\\frac{1}{x^3}"},
            {problem: "a^3 \\times a^{-7}", answer: "\\frac{1}{a^4}"},
            {problem: "m^6 \\times m^{-4}", answer: "m^2"},
            {problem: "y^5 \\times y^{-5}", answer: "1"},
            {problem: "2x^{-2} \\times 3x^4", answer: "6x^2"},
            {problem: "4a^{-3} \\times 2a^2", answer: "\\frac{8}{a}"},
            {problem: "5m^{-1} \\times 3m^{-2}", answer: "\\frac{15}{m^3}"},
            {problem: "xy^{-2} \\times x^{-1}y^3", answer: "y"},
            {problem: "3a^2b^{-1} \\times 2ab^{-2}", answer: "\\frac{6a^3}{b^3}"},
            {problem: "4p^{-1}q^2 \\times pq^{-3}", answer: "\\frac{4}{q}"},
            
            // Division involving negative exponents
            {problem: "a^2 \\div a^5", answer: "\\frac{1}{a^3}"},
            {problem: "x^4 \\div x^7", answer: "\\frac{1}{x^3}"},
            {problem: "m^3 \\div m^8", answer: "\\frac{1}{m^5}"},
            {problem: "y^{10} \\div y^{-2}", answer: "y^{12}"},
            {problem: "\\frac{x^{-2}}{x^{-5}}", answer: "x^3"},
            {problem: "\\frac{a^{-3}}{a^{-7}}", answer: "a^4"},
            {problem: "\\frac{2m^{-1}}{4m^{-3}}", answer: "\\frac{m^2}{2}"},
            {problem: "\\frac{6x^{-4}}{3x^{-1}}", answer: "\\frac{2}{x^3}"},
            {problem: "\\frac{8a^{-2}}{2a^{-5}}", answer: "4a^3"},
            {problem: "\\frac{9y^{-3}}{3y^{-6}}", answer: "3y^3"},
            
            // Powers of terms with negative exponents
            {problem: "(x^{-2})^3", answer: "\\frac{1}{x^6}"},
            {problem: "(a^{-1})^4", answer: "\\frac{1}{a^4}"},
            {problem: "(m^{-3})^2", answer: "\\frac{1}{m^6}"},
            {problem: "(2y^{-1})^2", answer: "\\frac{4}{y^2}"},
            {problem: "(3x^{-2})^3", answer: "\\frac{27}{x^6}"},
            {problem: "(4a^{-3})^2", answer: "\\frac{16}{a^6}"},
            {problem: "(p^{-1})^{-2}", answer: "p^2"},
            {problem: "(q^{-3})^{-1}", answer: "q^3"},
            {problem: "(2m^{-2})^{-1}", answer: "\\frac{m^2}{2}"},
            {problem: "(3n^{-4})^{-2}", answer: "\\frac{n^8}{9}"},
            
            // Compound expressions with two variables
            {problem: "2a^{-1}b^{-2}", answer: "\\frac{2}{ab^2}"},
            {problem: "5x^{-3}y^{-1}", answer: "\\frac{5}{x^3y}"},
            {problem: "3m^{-2}n^{-4}", answer: "\\frac{3}{m^2n^4}"},
            {problem: "4p^{-1}q^{-3}", answer: "\\frac{4}{pq^3}"},
            {problem: "6r^{-4}s^{-2}", answer: "\\frac{6}{r^4s^2}"},
            {problem: "xy^{-4}", answer: "\\frac{x}{y^4}"},
            {problem: "ab^{-3}", answer: "\\frac{a}{b^3}"},
            {problem: "mn^{-5}", answer: "\\frac{m}{n^5}"},
            {problem: "pq^{-2}", answer: "\\frac{p}{q^2}"},
            {problem: "rs^{-6}", answer: "\\frac{r}{s^6}"},
            
            // Mixed fractions with negative exponents
            {problem: "\\frac{a^3}{b^{-2}}", answer: "a^3b^2"},
            {problem: "\\frac{x^2}{y^{-3}}", answer: "x^2y^3"},
            {problem: "\\frac{m^4}{n^{-1}}", answer: "m^4n"},
            {problem: "\\frac{2p^3}{q^{-2}}", answer: "2p^3q^2"},
            {problem: "\\frac{3a^5}{b^{-4}}", answer: "3a^5b^4"},
            
            // Products with coefficients and negative exponents
            {problem: "(2x)^{-1}", answer: "\\frac{1}{2x}"},
            {problem: "(3y)^{-2}", answer: "\\frac{1}{9y^2}"},
            {problem: "(4a)^{-3}", answer: "\\frac{1}{64a^3}"},
            {problem: "(5m)^{-1}", answer: "\\frac{1}{5m}"},
            {problem: "(6n)^{-2}", answer: "\\frac{1}{36n^2}"},
            
            // Three-variable expressions (simple)
            {problem: "abc^{-2}", answer: "\\frac{ab}{c^2}"},
            {problem: "x^2y^{-1}z", answer: "\\frac{x^2z}{y}"},
            {problem: "2a^{-1}bc", answer: "\\frac{2bc}{a}"},
            {problem: "3pq^{-3}r", answer: "\\frac{3pr}{q^3}"},
            {problem: "mn^{-2}p^3", answer: "\\frac{mp^3}{n^2}"},
            
            // Numerical calculations with negative exponents
            {problem: "2^3 \\times 2^{-5}", answer: "\\frac{1}{4}"},
            {problem: "3^4 \\times 3^{-6}", answer: "\\frac{1}{9}"},
            {problem: "5^2 \\times 5^{-4}", answer: "\\frac{1}{25}"},
            {problem: "2^{-3} \\times 2^5", answer: "4"},
            {problem: "3^{-2} \\times 3^4", answer: "9"},
            {problem: "4^{-1} \\times 4^3", answer: "16"},
            {problem: "5^{-2} \\times 5^3", answer: "5"},
            {problem: "6^{-3} \\times 6^5", answer: "36"},
            
            // Review and reinforcement
            {problem: "w^{-2}", answer: "\\frac{1}{w^2}"},
            {problem: "z^{-7}", answer: "\\frac{1}{z^7}"},
            {problem: "c^{-4}", answer: "\\frac{1}{c^4}"},
            {problem: "6^{-3}", answer: "\\frac{1}{216}"},
            {problem: "7^{-2}", answer: "\\frac{1}{49}"},
            {problem: "8x^{-3}", answer: "\\frac{8}{x^3}"},
            {problem: "9y^{-2}", answer: "\\frac{9}{y^2}"},
            {problem: "xy^{-5}", answer: "\\frac{x}{y^5}"},
            {problem: "\\frac{8}{z^{-3}}", answer: "8z^3"},
            {problem: "\\frac{x^4}{y^{-3}}", answer: "x^4y^3"}
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
window.AlgebraLevels.negativeIndicesMedium = new NegativeIndicesMediumLevel();