class PowerProductQuotientEasy {
    constructor() {
        this.key = 'powerProductQuotientEasy';
        this.name = 'Power of a Product and Quotient (Easy)';
        this.usedQuestionIndices = new Set();
        
        // Predefined questions covering basic power of products and quotients
        this.questions = [
            // Basic power of a power
            {problem: "(x^5)^2", answer: "x^{10}"},
            {problem: "(t^3)^2", answer: "t^6"},
            {problem: "(y^4)^3", answer: "y^{12}"},
            {problem: "(a^2)^4", answer: "a^8"},
            {problem: "(m^6)^2", answer: "m^{12}"},
            
            // Coefficient with power of variable
            {problem: "4(a^2)^3", answer: "4a^6"},
            {problem: "5(y^5)^3", answer: "5y^{15}"},
            {problem: "3(x^3)^2", answer: "3x^6"},
            {problem: "7(t^4)^2", answer: "7t^8"},
            {problem: "2(b^7)^2", answer: "2b^{14}"},
            
            // Power of coefficient and variable
            {problem: "(2u^2)^2", answer: "4u^4"},
            {problem: "(3x^2)^2", answer: "9x^4"},
            {problem: "(5y^3)^2", answer: "25y^6"},
            {problem: "(4a^2)^2", answer: "16a^4"},
            {problem: "(2t^4)^3", answer: "8t^{12}"},
            
            // Zero power
            {problem: "(8t^2u^9v^4)^0", answer: "1"},
            {problem: "(3x^5y^2)^0", answer: "1"},
            {problem: "(ab^3c^2)^0", answer: "1"},
            {problem: "(5m^4n^7)^0", answer: "1"},
            {problem: "(xyz)^0", answer: "1"},
            
            // Simple power of products
            {problem: "(5y)^2", answer: "25y^2"},
            {problem: "(4a)^3", answer: "64a^3"},
            {problem: "(3r)^2", answer: "9r^2"},
            {problem: "(2x)^3", answer: "8x^3"},
            {problem: "(6t)^2", answer: "36t^2"},
            {problem: "(3m)^3", answer: "27m^3"},
            {problem: "(5b)^2", answer: "25b^2"},
            {problem: "(2y)^4", answer: "16y^4"},
            
            // Simple quotients
            {problem: "(\\frac{p}{q})^3", answer: "\\frac{p^3}{q^3}"},
            {problem: "(\\frac{x}{y})^4", answer: "\\frac{x^4}{y^4}"},
            {problem: "(\\frac{a}{b})^2", answer: "\\frac{a^2}{b^2}"},
            {problem: "(\\frac{m}{n})^3", answer: "\\frac{m^3}{n^3}"},
            {problem: "(\\frac{u}{v})^2", answer: "\\frac{u^2}{v^2}"},
            
            // Quotients with coefficients
            {problem: "(\\frac{4}{y})^3", answer: "\\frac{64}{y^3}"},
            {problem: "(\\frac{3}{x})^2", answer: "\\frac{9}{x^2}"},
            {problem: "(\\frac{5}{t})^2", answer: "\\frac{25}{t^2}"},
            {problem: "(\\frac{2}{a})^4", answer: "\\frac{16}{a^4}"},
            {problem: "(\\frac{6}{b})^2", answer: "\\frac{36}{b^2}"},
            
            // Quotients with powers in denominator
            {problem: "(\\frac{2}{r^3})^2", answer: "\\frac{4}{r^6}"},
            {problem: "(\\frac{3}{x^2})^3", answer: "\\frac{27}{x^6}"},
            {problem: "(\\frac{4}{y^4})^2", answer: "\\frac{16}{y^8}"},
            {problem: "(\\frac{5}{t^2})^2", answer: "\\frac{25}{t^4}"},
            
            // Variables with powers in quotients
            {problem: "(\\frac{s^3}{t})^2", answer: "\\frac{s^6}{t^2}"},
            {problem: "(\\frac{x^2}{y})^3", answer: "\\frac{x^6}{y^3}"},
            {problem: "(\\frac{a^4}{b})^2", answer: "\\frac{a^8}{b^2}"},
            {problem: "(\\frac{m^3}{n^2})^2", answer: "\\frac{m^6}{n^4}"},
            
            // More coefficient powers
            {problem: "(3x)^2", answer: "9x^2"},
            {problem: "(5a)^3", answer: "125a^3"},
            {problem: "(2c)^6", answer: "64c^6"},
            {problem: "(4b)^2", answer: "16b^2"},
            {problem: "(3y)^4", answer: "81y^4"},
            
            // Unit fractions
            {problem: "(\\frac{1}{x})^5", answer: "\\frac{1}{x^5}"},
            {problem: "(\\frac{1}{y})^3", answer: "\\frac{1}{y^3}"},
            {problem: "(\\frac{1}{t})^4", answer: "\\frac{1}{t^4}"},
            {problem: "(\\frac{1}{a})^2", answer: "\\frac{1}{a^2}"},
            
            // Variable over coefficient
            {problem: "(\\frac{y}{5})^2", answer: "\\frac{y^2}{25}"},
            {problem: "(\\frac{x}{3})^3", answer: "\\frac{x^3}{27}"},
            {problem: "(\\frac{t}{4})^2", answer: "\\frac{t^2}{16}"},
            {problem: "(\\frac{a}{2})^4", answer: "\\frac{a^4}{16}"},
            
            // Variable with coefficient over coefficient
            {problem: "(\\frac{7a}{5})^2", answer: "\\frac{49a^2}{25}"},
            {problem: "(\\frac{3x}{4})^2", answer: "\\frac{9x^2}{16}"},
            {problem: "(\\frac{2y}{3})^3", answer: "\\frac{8y^3}{27}"},
            {problem: "(\\frac{5t}{2})^2", answer: "\\frac{25t^2}{4}"},
            
            // Additional simple cases for variety
            {problem: "(xy)^2", answer: "x^2y^2"},
            {problem: "(ab)^3", answer: "a^3b^3"},
            {problem: "(pq)^4", answer: "p^4q^4"},
            {problem: "(mn)^2", answer: "m^2n^2"},
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
window.AlgebraLevels.powerProductQuotientEasy = new PowerProductQuotientEasy();