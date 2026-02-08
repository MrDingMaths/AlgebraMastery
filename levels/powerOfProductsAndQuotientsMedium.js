class PowerOfProductsAndQuotientsMediumLevel {
    constructor() {
        this.key = 'powerOfProductsAndQuotientsMedium';
        this.name = 'Power of a Product and Quotient (Medium)';
        this.usedQuestionIndices = new Set();
        
        // Predefined questions covering medium-level power of products and quotients
        this.questions = [
            // Multi-coefficient powers
            {problem: "(4x^2)^3", answer: "64x^6"},
            {problem: "(3x^3)^3", answer: "27x^9"},
            {problem: "(3x^4)^4", answer: "81x^{16}"},
            {problem: "(2x^5)^3", answer: "8x^{15}"},
            {problem: "(5y^2)^4", answer: "625y^8"},
            
            // Multi-variable quotients
            {problem: "(\\frac{a^2}{b^3})^2", answer: "\\frac{a^4}{b^6}"},
            {problem: "(\\frac{x^3}{y^4})^3", answer: "\\frac{x^9}{y^{12}}"},
            {problem: "(\\frac{x^5}{y^2})^2", answer: "\\frac{x^{10}}{y^4}"},
            {problem: "(\\frac{x^4}{y^3})^3", answer: "\\frac{x^{12}}{y^9}"},
            {problem: "(\\frac{x^6}{y^5})^2", answer: "\\frac{x^{12}}{y^{10}}"},
            
            // Complex numerator quotients
            {problem: "(\\frac{x^2y^3}{a^4})^2", answer: "\\frac{x^4y^6}{a^8}"},
            {problem: "(\\frac{x^4y^2}{a^2})^4", answer: "\\frac{x^{16}y^8}{a^8}"},
            {problem: "(\\frac{a^3b^2}{x^5})^3", answer: "\\frac{a^9b^6}{x^{15}}"},
            {problem: "(\\frac{x^2y^4}{a^3})^2", answer: "\\frac{x^4y^8}{a^6}"},
            {problem: "(\\frac{xy^2a}{b^3})^3", answer: "\\frac{x^3y^6a^3}{b^9}"},
            
            // Negative signs and powers
            {problem: "-(3b)^4", answer: "-81b^4"},
            {problem: "-(7x)^3", answer: "-343x^3"},
            {problem: "-(2x)^5", answer: "-32x^5"},
            {problem: "-(4y)^2", answer: "-16y^2"},
            {problem: "-(5x)^4", answer: "-625x^4"},
            
            // Negative bases with even powers
            {problem: "(-2x^2)^4", answer: "16x^8"},
            {problem: "(-3x)^2", answer: "9x^2"},
            {problem: "(-4y^3)^2", answer: "16y^6"},
            {problem: "(-5a^2)^4", answer: "625a^8"},
            {problem: "(-x^4)^2", answer: "x^8"},
            
            // Coefficient multiplication with powers
            {problem: "9(x^2y^4)^3", answer: "9x^6y^{12}"},
            {problem: "-4(x^3ya)^2", answer: "-4x^6y^2a^2"},
            {problem: "-(5x^7y)^2", answer: "-25x^{14}y^2"},
            {problem: "6(x^2y^3)^2", answer: "6x^4y^6"},
            {problem: "8(a^3b)^3", answer: "8a^9b^3"},
            
            // Variable coefficient multiplication
            {problem: "a(3b)^2", answer: "9ab^2"},
            {problem: "a(3b^2)^3", answer: "27ab^6"},
            {problem: "a(2a)^3", answer: "8a^4"},
            {problem: "a(3a^2)^2", answer: "9a^5"},
            {problem: "x(4x^3)^2", answer: "16x^7"},
            {problem: "y(2y^2)^4", answer: "16y^9"},
            {problem: "x(5x)^2", answer: "25x^3"},
            {problem: "b(3b^4)^3", answer: "27b^{13}"},
            
            // Complex quotient powers with coefficients
            {problem: "(\\frac{2x}{y})^5", answer: "\\frac{32x^5}{y^5}"},
            {problem: "(\\frac{-2x}{y})^4", answer: "\\frac{16x^4}{y^4}"},
            {problem: "(\\frac{3x^2}{y^3})^2", answer: "\\frac{9x^4}{y^6}"},
            {problem: "(\\frac{4a^3}{b^2})^3", answer: "\\frac{64a^9}{b^6}"},
            {problem: "(\\frac{5x^2}{y})^2", answer: "\\frac{25x^4}{y^2}"},
            
            // Multi-variable products
            {problem: "(3xy)^4", answer: "81x^4y^4"},
            {problem: "(7xya)^2", answer: "49x^2y^2a^2"},
            {problem: "(2abx)^3", answer: "8a^3b^3x^3"},
            {problem: "(4xya)^2", answer: "16x^2y^2a^2"},
            {problem: "(5xya)^3", answer: "125x^3y^3a^3"},
            
            // Mixed coefficient and variable quotients
            {problem: "(\\frac{3x}{2y})^3", answer: "\\frac{27x^3}{8y^3}"},
            {problem: "(\\frac{4a}{3b})^2", answer: "\\frac{16a^2}{9b^2}"},
            {problem: "(\\frac{5x}{2y})^2", answer: "\\frac{25x^2}{4y^2}"},
            {problem: "(\\frac{2x}{5y})^4", answer: "\\frac{16x^4}{625y^4}"},
            {problem: "(\\frac{6x}{y})^2", answer: "\\frac{36x^2}{y^2}"},
            
            // Products with multiple variables and powers
            {problem: "(x^2y)^3", answer: "x^6y^3"},
            {problem: "(a^3b^2)^2", answer: "a^6b^4"},
            {problem: "(x^4y^3)^3", answer: "x^{12}y^9"},
            {problem: "(x^2y^5)^2", answer: "x^4y^{10}"},
            {problem: "(x^3y^4a)^2", answer: "x^6y^8a^2"},
            
            // More complex negative cases
            {problem: "(-x^2)^3", answer: "-x^6"},
            {problem: "(-y^4)^2", answer: "y^8"},
            {problem: "(-a^3)^4", answer: "a^{12}"},
            {problem: "(-2x^3)^3", answer: "-8x^9"},
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
window.AlgebraLevels.powerOfProductsAndQuotientsMedium = new PowerOfProductsAndQuotientsMediumLevel();