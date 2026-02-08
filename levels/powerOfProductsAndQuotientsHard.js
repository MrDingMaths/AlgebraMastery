class PowerOfProductsAndQuotientsHardLevel {
    constructor() {
        this.key = 'powerOfProductsAndQuotientsHard';
        this.name = 'Power of a Product and Quotient (Hard)';
        this.usedQuestionIndices = new Set();
        
        // Predefined questions covering hard-level power of products and quotients
        this.questions = [
            // Very complex quotient powers
            {problem: "(\\frac{3x^2}{5y})^3", answer: "\\frac{27x^6}{125y^3}"},
            {problem: "(\\frac{3a^2b}{2xy^3})^2", answer: "\\frac{9a^4b^2}{4x^2y^6}"},
            {problem: "(\\frac{ax^3}{3y^4})^3", answer: "\\frac{a^3x^9}{27y^{12}}"},
            {problem: "(\\frac{4x^2y^3}{3a})^4", answer: "\\frac{256x^8y^{12}}{81a^4}"},
            {problem: "(\\frac{2x^3y^2}{5a^4})^3", answer: "\\frac{8x^9y^6}{125a^{12}}"},
            
            // High power products
            {problem: "(5x^2y^3)^4", answer: "625x^8y^{12}"},
            {problem: "(2x^3y^2)^5", answer: "32x^{15}y^{10}"},
            {problem: "(3a^4b^2x)^3", answer: "27a^{12}b^6x^3"},
            {problem: "(4x^2y^3a^4)^2", answer: "16x^4y^6a^8"},
            {problem: "(2x^5y^2a^3)^4", answer: "16x^{20}y^8a^{12}"},
            
            // Complex coefficient interactions
            {problem: "-3(2a^3b^4)^2", answer: "-12a^6b^8"},
            {problem: "2(3x^2y)^3", answer: "54x^6y^3"},
            {problem: "4(2x^3y^2)^4", answer: "64x^{12}y^8"},
            {problem: "-5(2x^4y)^3", answer: "-40x^{12}y^3"},
            {problem: "6(-x^2y^3)^2", answer: "6x^4y^6"},
            
            // Negative bases with complex powers
            {problem: "(-4b^2x^5y)^3", answer: "-64b^6x^{15}y^3"},
            {problem: "5a^3(-2a^4b)^3", answer: "-40a^{15}b^3"},
            {problem: "-5(-2x^3ya^2)^5", answer: "160x^{15}y^5a^{10}"},
            {problem: "-(-7x^2y^4a)^2", answer: "-49x^4y^8a^2"},
            {problem: "3(-2x^2y^3a)^4", answer: "48x^8y^{12}a^4"},
            
            // Powers of powers with complex expressions
            {problem: "-2(-2^3x^4ya^3)^3", answer: "1024x^{12}y^3a^9"},
            {problem: "-4a^2b^3(-2a^3b^2)^2", answer: "-16a^8b^7"},
            {problem: "(a^2b)^5(ab^2)^3", answer: "a^{13}b^{11}"},
            {problem: "3x^2(2x^3y)^4", answer: "48x^{14}y^4"},
            {problem: "-2y^3(-3xy^2)^3", answer: "54x^3y^9"},
            
            // Division with power expressions
            {problem: "\\frac{(2x^3y)^3}{x^4}", answer: "8x^5y^3"},
            {problem: "\\frac{3(2x^4y^3)^3}{(2xy^2)^4}", answer: "\\frac{3}{2}x^8y"},
            {problem: "\\frac{(3x^2y)^4}{(xy^2)^3}", answer: "\\frac{81x^5}{y^2}"},
            {problem: "\\frac{4(a^3b^2)^3}{(2ab)^4}", answer: "\\frac{a^5b^2}{4}"},
            {problem: "\\frac{(5x^2y)^2}{(xy^3)^2}", answer: "\\frac{25x^2}{y^4}"},
            
            // Very complex quotients
            {problem: "(\\frac{3x^2}{2y^4})^3", answer: "\\frac{27x^6}{8y^{12}}"},
            {problem: "(\\frac{-3x}{2^3y^5})^2", answer: "\\frac{9x^2}{64y^{10}}"},
            {problem: "(\\frac{-3x}{2y^3a^5})^2", answer: "\\frac{9x^2}{4y^6a^{10}}"},
            {problem: "(\\frac{3xy^3}{4a^7})^3", answer: "\\frac{27x^3y^9}{64a^{21}}"},
            {problem: "(\\frac{2a^3b^2}{5x^4y})^4", answer: "\\frac{16a^{12}b^8}{625x^{16}y^4}"},
            
            // Negative quotient powers
            {problem: "-(\\frac{5a^4y}{2x^3})^2", answer: "-\\frac{25a^8y^2}{4x^6}"},
            {problem: "-(\\frac{3a^2}{4b^3})^3", answer: "-\\frac{27a^6}{64b^9}"},
            {problem: "-(\\frac{2x^3y}{a^4})^4", answer: "-\\frac{16x^{12}y^4}{a^{16}}"},
            {problem: "4(\\frac{-x^2}{3y})^3", answer: "-\\frac{4x^6}{27y^3}"},
            {problem: "-7(\\frac{2a}{b^2})^3", answer: "-\\frac{56a^3}{b^6}"},
            
            // Multiplication of power expressions
            {problem: "(\\frac{x^2}{y^3})^3 \\times \\frac{2x}{y^4}", answer: "\\frac{2x^7}{y^{13}}"},
            {problem: "(\\frac{a^2b}{x^2})^4 \\times (\\frac{b^2x}{a^2})^3", answer: "\\frac{a^2b^{10}}{x^5}"},
            {problem: "(\\frac{xy^3}{a^2})^2 \\times (\\frac{x^0y^2}{a})^4", answer: "\\frac{x^2y^{14}}{a^8}"},
            {problem: "(\\frac{a^3b}{x^3})^2 \\times (\\frac{ax^4}{b})^4", answer: "\\frac{a^{10}x^{10}}{b^2}"},
            {problem: "(\\frac{x^2a}{y^2})^4 \\times (\\frac{xy}{a^2})^3", answer: "\\frac{x^{11}}{y^5a^2}"},
            
            // Division of power expressions
            {problem: "(\\frac{x^3y}{a})^2 \\div (\\frac{y}{x^4})^3", answer: "\\frac{x^{18}}{ya^2}"},
            {problem: "(\\frac{a^4b^2}{x})^3 \\div (\\frac{ab}{x^2})^4", answer: "a^8b^2x^5"},
            {problem: "(\\frac{x^3y}{a^2})^4 \\div (\\frac{xy^2}{a})^2", answer: "\\frac{x^{10}}{a^6}"},
            {problem: "(\\frac{x^2y^4}{a^3})^3 \\div (\\frac{xy}{a})^5", answer: "\\frac{xy^7}{a^4}"},
            {problem: "(\\frac{x^5y^2}{a^4})^2 \\div (\\frac{x^2y}{a})^3", answer: "\\frac{x^4y}{a^5}"},
            
            // Mixed operations with brackets
            {problem: "2(3a^2b)^3 - (ab)^4", answer: "54a^6b^3 - a^4b^4"},
            {problem: "(2x^2y)^3 + 3(xy^2)^2", answer: "8x^6y^3 + 3x^2y^4"},
            {problem: "5(xy^2)^2 - 2(x^2y)^3", answer: "5x^2y^4 - 2x^6y^3"},
            {problem: "(3ab^2)^2 + (a^2b)^3", answer: "9a^2b^4 + a^6b^3"},
            {problem: "4(xy)^3 - (x^2y^2)^2", answer: "4x^3y^3 - x^4y^4"},
            
            // Powers with fractions and mixed operations
            {problem: "(\\frac{2x^3}{y^2})^3 \\times (\\frac{y^4}{4x})^2", answer: "\\frac{x^7y^2}{2}"},
            {problem: "(\\frac{3a^2}{b})^3 \\div (\\frac{9a}{b^2})^2", answer: "\\frac{a^4b}{3}"},
            {problem: "(\\frac{4x^2y}{a^3})^2 \\times (\\frac{a^2}{2xy^2})^3", answer: "\\frac{2x}{y^4}"},
            {problem: "\\frac{(5x^2y)^3}{(xy^2)^4} \\times (\\frac{y^3}{x})^2", answer: "125y"},
            {problem: "(\\frac{a^3b^2}{x^4})^2 \\div (\\frac{ab}{x^2})^3 \\times x^2", answer: "a^3b"},
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
window.AlgebraLevels.powerOfProductsAndQuotientsHard = new PowerOfProductsAndQuotientsHardLevel();