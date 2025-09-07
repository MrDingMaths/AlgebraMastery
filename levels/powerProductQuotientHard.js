class PowerProductQuotientHard {
    constructor() {
        this.key = 'powerProductQuotientHard';
        this.name = 'Power of a Product and Quotient (Hard)';
        this.usedQuestionIndices = new Set();
        
        // Predefined questions covering hard-level power of products and quotients
        this.questions = [
            // Very complex quotient powers
            {problem: "(\\frac{3f^2}{5g})^3", answer: "\\frac{27f^6}{125g^3}"},
            {problem: "(\\frac{3a^2b}{2pq^3})^2", answer: "\\frac{9a^4b^2}{4p^2q^6}"},
            {problem: "(\\frac{at^3}{3g^4})^3", answer: "\\frac{a^3t^9}{27g^{12}}"},
            {problem: "(\\frac{4p^2q^3}{3r})^4", answer: "\\frac{256p^8q^{12}}{81r^4}"},
            {problem: "(\\frac{2x^3y^2}{5z^4})^3", answer: "\\frac{8x^9y^6}{125z^{12}}"},
            
            // High power products
            {problem: "(5c^2d^3)^4", answer: "625c^8d^{12}"},
            {problem: "(2x^3y^2)^5", answer: "32x^{15}y^{10}"},
            {problem: "(3a^4b^2c)^3", answer: "27a^{12}b^6c^3"},
            {problem: "(4p^2q^3r^4)^2", answer: "16p^4q^6r^8"},
            {problem: "(2m^5n^2p^3)^4", answer: "16m^{20}n^8p^{12}"},
            
            // Complex coefficient interactions
            {problem: "-3(2a^3b^4)^2", answer: "-12a^6b^8"},
            {problem: "2(3x^2y)^3", answer: "54x^6y^3"},
            {problem: "4(2p^3q^2)^4", answer: "64p^{12}q^8"},
            {problem: "-5(2m^4n)^3", answer: "-40m^{12}n^3"},
            {problem: "6(-x^2y^3)^2", answer: "6x^4y^6"},
            
            // Negative bases with complex powers
            {problem: "(-4b^2c^5d)^3", answer: "-64b^6c^{15}d^3"},
            {problem: "5a^3(-2a^4b)^3", answer: "-40a^{15}b^3"},
            {problem: "-5(-2m^3pt^2)^5", answer: "160m^{15}p^5t^{10}"},
            {problem: "-(-7d^2f^4g)^2", answer: "-49d^4f^8g^2"},
            {problem: "3(-2x^2y^3z)^4", answer: "48x^8y^{12}z^4"},
            
            // Powers of powers with complex expressions
            {problem: "-2(-2^3x^4yz^3)^3", answer: "1024x^{12}y^3z^9"},
            {problem: "-4a^2b^3(-2a^3b^2)^2", answer: "-16a^8b^7"},
            {problem: "(a^2b)^5(ab^2)^3", answer: "a^{13}b^{11}"},
            {problem: "3x^2(2x^3y)^4", answer: "48x^{14}y^4"},
            {problem: "-2y^3(-3xy^2)^3", answer: "54x^3y^9"},
            
            // Division with power expressions
            {problem: "\\frac{(2m^3n)^3}{m^4}", answer: "8m^5n^3"},
            {problem: "\\frac{3(2c^4d^3)^3}{(2cd^2)^4}", answer: "\\frac{3}{2}c^8d"},
            {problem: "\\frac{(3x^2y)^4}{(xy^2)^3}", answer: "\\frac{81x^5}{y^2}"},
            {problem: "\\frac{4(a^3b^2)^3}{(2ab)^4}", answer: "\\frac{a^5b^2}{4}"},
            {problem: "\\frac{(5p^2q)^2}{(pq^3)^2}", answer: "\\frac{25p^2}{q^4}"},
            
            // Very complex quotients
            {problem: "(\\frac{3n^2}{2m^4})^3", answer: "\\frac{27n^6}{8m^{12}}"},
            {problem: "(\\frac{-3f}{2^3g^5})^2", answer: "\\frac{9f^2}{64g^{10}}"},
            {problem: "(\\frac{-3x}{2y^3s^5})^2", answer: "\\frac{9x^2}{4y^6s^{10}}"},
            {problem: "(\\frac{3km^3}{4n^7})^3", answer: "\\frac{27k^3m^9}{64n^{21}}"},
            {problem: "(\\frac{2a^3b^2}{5c^4d})^4", answer: "\\frac{16a^{12}b^8}{625c^{16}d^4}"},
            
            // Negative quotient powers
            {problem: "-(\\frac{5w^4y}{2x^3})^2", answer: "-\\frac{25w^8y^2}{4x^6}"},
            {problem: "-(\\frac{3a^2}{4b^3})^3", answer: "-\\frac{27a^6}{64b^9}"},
            {problem: "-(\\frac{2p^3q}{r^4})^4", answer: "-\\frac{16p^{12}q^4}{r^{16}}"},
            {problem: "4(\\frac{-x^2}{3y})^3", answer: "-\\frac{4x^6}{27y^3}"},
            {problem: "-7(\\frac{2a}{b^2})^3", answer: "-\\frac{56a^3}{b^6}"},
            
            // Multiplication of power expressions
            {problem: "(\\frac{x^2}{y^3})^3 \\times \\frac{2x}{y^4}", answer: "\\frac{2x^7}{y^{13}}"},
            {problem: "(\\frac{a^2b}{c^2})^4 \\times (\\frac{b^2c}{a^2})^3", answer: "\\frac{a^2b^{10}}{c^5}"},
            {problem: "(\\frac{pq^3}{r^2})^2 \\times (\\frac{p^0q^2}{r})^4", answer: "\\frac{p^2q^{14}}{r^8}"},
            {problem: "(\\frac{a^3b}{c^3})^2 \\times (\\frac{ac^4}{b})^4", answer: "\\frac{a^{10}c^{10}}{b^2}"},
            {problem: "(\\frac{x^2z}{y^2})^4 \\times (\\frac{xy}{z^2})^3", answer: "\\frac{x^{11}}{y^5z^2}"},
            
            // Division of power expressions
            {problem: "(\\frac{r^3s}{t})^2 \\div (\\frac{s}{r^4})^3", answer: "\\frac{r^{18}}{st^2}"},
            {problem: "(\\frac{a^4b^2}{c})^3 \\div (\\frac{ab}{c^2})^4", answer: "a^8b^2c^5"},
            {problem: "(\\frac{x^3y}{z^2})^4 \\div (\\frac{xy^2}{z})^2", answer: "\\frac{x^{10}}{z^6}"},
            {problem: "(\\frac{p^2q^4}{r^3})^3 \\div (\\frac{pq}{r})^5", answer: "\\frac{pq^7}{r^4}"},
            {problem: "(\\frac{m^5n^2}{p^4})^2 \\div (\\frac{m^2n}{p})^3", answer: "\\frac{m^4n}{p^5}"},
            
            // Mixed operations with brackets
            {problem: "2(3a^2b)^3 - (ab)^4", answer: "54a^6b^3 - a^4b^4"},
            {problem: "(2x^2y)^3 + 3(xy^2)^2", answer: "8x^6y^3 + 3x^2y^4"},
            {problem: "5(pq^2)^2 - 2(p^2q)^3", answer: "5p^2q^4 - 2p^6q^3"},
            {problem: "(3ab^2)^2 + (a^2b)^3", answer: "9a^2b^4 + a^6b^3"},
            {problem: "4(xy)^3 - (x^2y^2)^2", answer: "4x^3y^3 - x^4y^4"},
            
            // Powers with fractions and mixed operations
            {problem: "(\\frac{2x^3}{y^2})^3 \\times (\\frac{y^4}{4x})^2", answer: "\\frac{x^7y^2}{2}"},
            {problem: "(\\frac{3a^2}{b})^3 \\div (\\frac{9a}{b^2})^2", answer: "\\frac{a^4b}{3}"},
            {problem: "(\\frac{4p^2q}{r^3})^2 \\times (\\frac{r^2}{2pq^2})^3", answer: "\\frac{2p}{q^4}"},
            {problem: "\\frac{(5x^2y)^3}{(xy^2)^4} \\times (\\frac{y^3}{x})^2", answer: "125y"},
            {problem: "(\\frac{a^3b^2}{c^4})^2 \\div (\\frac{ab}{c^2})^3 \\times c^2", answer: "a^3b"},
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
window.AlgebraLevels.powerProductQuotientHard = new PowerProductQuotientHard();