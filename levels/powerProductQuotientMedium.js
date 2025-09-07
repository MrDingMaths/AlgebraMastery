class PowerProductQuotientMedium {
    constructor() {
        this.key = 'powerProductQuotientMedium';
        this.name = 'Power of a Product and Quotient (Medium)';
        this.usedQuestionIndices = new Set();
        
        // Predefined questions covering medium-level power of products and quotients
        this.questions = [
            // Multi-coefficient powers
            {problem: "(4t^2)^3", answer: "64t^6"},
            {problem: "(3r^3)^3", answer: "27r^9"},
            {problem: "(3p^4)^4", answer: "81p^{16}"},
            {problem: "(2x^5)^3", answer: "8x^{15}"},
            {problem: "(5y^2)^4", answer: "625y^8"},
            
            // Multi-variable quotients
            {problem: "(\\frac{a^2}{b^3})^2", answer: "\\frac{a^4}{b^6}"},
            {problem: "(\\frac{x^3}{y^4})^3", answer: "\\frac{x^9}{y^{12}}"},
            {problem: "(\\frac{m^5}{n^2})^2", answer: "\\frac{m^{10}}{n^4}"},
            {problem: "(\\frac{p^4}{q^3})^3", answer: "\\frac{p^{12}}{q^9}"},
            {problem: "(\\frac{u^6}{v^5})^2", answer: "\\frac{u^{12}}{v^{10}}"},
            
            // Complex numerator quotients
            {problem: "(\\frac{x^2y^3}{z^4})^2", answer: "\\frac{x^4y^6}{z^8}"},
            {problem: "(\\frac{u^4w^2}{v^2})^4", answer: "\\frac{u^{16}w^8}{v^8}"},
            {problem: "(\\frac{a^3b^2}{c^5})^3", answer: "\\frac{a^9b^6}{c^{15}}"},
            {problem: "(\\frac{p^2q^4}{r^3})^2", answer: "\\frac{p^4q^8}{r^6}"},
            {problem: "(\\frac{xy^2z}{w^3})^3", answer: "\\frac{x^3y^6z^3}{w^9}"},
            
            // Negative signs and powers
            {problem: "-(3b)^4", answer: "-81b^4"},
            {problem: "-(7r)^3", answer: "-343r^3"},
            {problem: "-(2x)^5", answer: "-32x^5"},
            {problem: "-(4y)^2", answer: "-16y^2"},
            {problem: "-(5t)^4", answer: "-625t^4"},
            
            // Negative bases with even powers
            {problem: "(-2k^2)^4", answer: "16k^8"},
            {problem: "(-3x)^2", answer: "9x^2"},
            {problem: "(-4y^3)^2", answer: "16y^6"},
            {problem: "(-5a^2)^4", answer: "625a^8"},
            {problem: "(-t^4)^2", answer: "t^8"},
            
            // Coefficient multiplication with powers
            {problem: "9(p^2q^4)^3", answer: "9p^6q^{12}"},
            {problem: "-4(p^3qr)^2", answer: "-4p^6q^2r^2"},
            {problem: "-(5s^7t)^2", answer: "-25s^{14}t^2"},
            {problem: "6(x^2y^3)^2", answer: "6x^4y^6"},
            {problem: "8(a^3b)^3", answer: "8a^9b^3"},
            
            // Variable coefficient multiplication
            {problem: "a(3b)^2", answer: "9ab^2"},
            {problem: "a(3b^2)^3", answer: "27ab^6"},
            {problem: "a(2a)^3", answer: "8a^4"},
            {problem: "a(3a^2)^2", answer: "9a^5"},
            {problem: "x(4x^3)^2", answer: "16x^7"},
            {problem: "y(2y^2)^4", answer: "16y^9"},
            {problem: "t(5t)^2", answer: "25t^3"},
            {problem: "b(3b^4)^3", answer: "27b^{13}"},
            
            // Complex quotient powers with coefficients
            {problem: "(\\frac{2m}{n})^5", answer: "\\frac{32m^5}{n^5}"},
            {problem: "(\\frac{-2r}{n})^4", answer: "\\frac{16r^4}{n^4}"},
            {problem: "(\\frac{3x^2}{y^3})^2", answer: "\\frac{9x^4}{y^6}"},
            {problem: "(\\frac{4a^3}{b^2})^3", answer: "\\frac{64a^9}{b^6}"},
            {problem: "(\\frac{5p^2}{q})^2", answer: "\\frac{25p^4}{q^2}"},
            
            // Multi-variable products
            {problem: "(3st)^4", answer: "81s^4t^4"},
            {problem: "(7xyz)^2", answer: "49x^2y^2z^2"},
            {problem: "(2abc)^3", answer: "8a^3b^3c^3"},
            {problem: "(4pqr)^2", answer: "16p^2q^2r^2"},
            {problem: "(5uvw)^3", answer: "125u^3v^3w^3"},
            
            // Mixed coefficient and variable quotients
            {problem: "(\\frac{3x}{2y})^3", answer: "\\frac{27x^3}{8y^3}"},
            {problem: "(\\frac{4a}{3b})^2", answer: "\\frac{16a^2}{9b^2}"},
            {problem: "(\\frac{5m}{2n})^2", answer: "\\frac{25m^2}{4n^2}"},
            {problem: "(\\frac{2p}{5q})^4", answer: "\\frac{16p^4}{625q^4}"},
            {problem: "(\\frac{6x}{y})^2", answer: "\\frac{36x^2}{y^2}"},
            
            // Products with multiple variables and powers
            {problem: "(x^2y)^3", answer: "x^6y^3"},
            {problem: "(a^3b^2)^2", answer: "a^6b^4"},
            {problem: "(p^4q^3)^3", answer: "p^{12}q^9"},
            {problem: "(m^2n^5)^2", answer: "m^4n^{10}"},
            {problem: "(u^3v^4w)^2", answer: "u^6v^8w^2"},
            
            // More complex negative cases
            {problem: "(-x^2)^3", answer: "-x^6"},
            {problem: "(-y^4)^2", answer: "y^8"},
            {problem: "(-a^3)^4", answer: "a^{12}"},
            {problem: "(-2t^3)^3", answer: "-8t^9"},
            {problem: "(-3x^2y)^2", answer: "9x^4y^2"},
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
window.AlgebraLevels.powerProductQuotientMedium = new PowerProductQuotientMedium();