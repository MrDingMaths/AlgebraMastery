// levels/IndexLawPowerMedium.js
class IndexLawPowerMediumLevel {
    constructor() {
        this.key = 'indexLawPowerMedium';
        this.name = 'Power of a Power & Zero Laws (Medium)';
        this.usedQuestionIndices = new Set();
        
        // Questions organized by cognitive complexity levels
        this.questions = [
            // Cognitive Level 1: Power of a Power with Coefficients
            // Coefficient remains outside the power rule
            {problem: "4(q^7)^3", answer: "4q^{21}"},
            {problem: "3(m^2)^5", answer: "3m^{10}"},
            {problem: "-3(c^2)^5", answer: "-3c^{10}"},
            {problem: "-4(a^7)^3", answer: "-4a^{21}"},
            {problem: "5(x^4)^6", answer: "5x^{24}"},
            {problem: "7(y^3)^4", answer: "7y^{12}"},
            {problem: "-2(b^5)^3", answer: "-2b^{15}"},
            {problem: "6(p^6)^2", answer: "6p^{12}"},
            {problem: "-8(t^4)^5", answer: "-8t^{20}"},
            {problem: "9(s^8)^2", answer: "9s^{16}"},
            
            // Cognitive Level 1: Zero Power with Coefficients and Variables
            {problem: "-(4^0)", answer: "-1"},
            {problem: "4y^0", answer: "4"},
            {problem: "5m^0", answer: "5"},
            {problem: "-3p^0", answer: "-3"},
            {problem: "8x^0", answer: "8"},
            {problem: "3t^0", answer: "3"},
            {problem: "5(g^3h^5)^0", answer: "5"},
            {problem: "7(ab^2c)^0", answer: "7"},
            {problem: "-6(xyz)^0", answer: "-6"},
            {problem: "10(2mn)^0", answer: "10"},
            
            // Cognitive Level 2: Zero Power in Expressions
            {problem: "6x^0 - 2x^0", answer: "4"},
            {problem: "-5n^0 - (8n)^0", answer: "-6"},
            {problem: "(3x^4)^0 + 3x^0", answer: "4"},
            {problem: "1^0 + 2^0 + 3^0", answer: "3"},
            {problem: "(1+2+3)^0", answer: "1"},
            {problem: "100^0 - a^0", answer: "0"},
            {problem: "4^0 + 7^0", answer: "2"},
            {problem: "11^0 - 6^0", answer: "0"},
            {problem: "3 \\times 5^0", answer: "3"},
            {problem: "5^0 \\times 3^0", answer: "1"},
            {problem: "8x^0 - 5", answer: "3"},
            {problem: "4b^0 - 9", answer: "-5"},
            
            // Cognitive Level 2: Power of a Power in Products
            {problem: "4 \\times (x^3)^2", answer: "4x^6"},
            {problem: "x \\times (x^0)^5", answer: "x"},
            {problem: "y^5 \\times (y^2)^4", answer: "y^{13}"},
            {problem: "b^5 \\times (b^3)^3", answer: "b^{14}"},
            {problem: "(a^2)^3 \\times a^4", answer: "a^{10}"},
            {problem: "(d^3)^4 \\times (d^2)^6", answer: "d^{24}"},
            {problem: "(x^2)^6 \\times (y^4)^4", answer: "x^{12}y^{16}"},
            {problem: "(m^5)^2 \\times m^3", answer: "m^{13}"},
            {problem: "z^4 \\times (z^6)^3", answer: "z^{22}"},
            {problem: "(p^4)^5 \\times (p^2)^3", answer: "p^{26}"},
            
            // Cognitive Level 3: Power of a Power in Division
            {problem: "7^8 \\div (7^3)^2", answer: "7^2"},
            {problem: "(4^2)^3 \\div 4^5", answer: "4"},
            {problem: "(3^6)^3 \\div (3^5)^2", answer: "3^8"},
            {problem: "(m^3)^6 \\div (m^2)^9", answer: "1"},
            {problem: "(y^5)^3 \\div (y^6)^2", answer: "y^3"},
            {problem: "(h^{11})^2 \\div (h^5)^4", answer: "h^2"},
            {problem: "\\frac{(b^2)^5}{b^4}", answer: "b^6"},
            {problem: "\\frac{(x^4)^3}{x^7}", answer: "x^5"},
            {problem: "\\frac{(y^3)^3}{y^3}", answer: "y^6"},
            {problem: "\\frac{(z^6)^4}{(z^3)^5}", answer: "z^9"},
            
            // Cognitive Level 3: Coefficient Power of a Power
            {problem: "(3x^5)^2", answer: "9x^{10}"},
            {problem: "(2u^4)^3", answer: "8u^{12}"},
            {problem: "(4x^4)^2", answer: "16x^8"},
            {problem: "(7x^2)^2", answer: "49x^4"},
            {problem: "(2z^6)^3", answer: "8z^{18}"},
            {problem: "(6a^2)^2", answer: "36a^4"},
            {problem: "(4b^5)^3", answer: "64b^{15}"},
            {problem: "(5c^3)^2", answer: "25c^6"},
            
            // Cognitive Level 4: Complex Power Combinations
            {problem: "(3^4)^2 \\times 3", answer: "3^9"},
            {problem: "(x^3)^2 \\times (x^5)^3", answer: "x^{21}"},
            {problem: "(y^2)^6 \\times (y^3)^2", answer: "y^{18}"},
            {problem: "\\frac{(y^3)^4}{y^2}", answer: "y^{10}"},
            {problem: "\\frac{(p^7)^2}{(p^3)^2}", answer: "p^8"},
            {problem: "\\frac{(q^2)^{10}}{(q^3)^6}", answer: "q^2"},
            {problem: "\\frac{(7^8)^9}{(7^{10})^7}", answer: "7^2"},
            {problem: "\\frac{(7^6)^5}{(7^5)^6}", answer: "1"},
            {problem: "\\frac{5^{11} \\times 5^{13}}{(5^2)^{11}}", answer: "5^2"},
            
            // More complex zero power expressions
            {problem: "5b^0", answer: "5"},
            {problem: "12x^0y^3z^0", answer: "12y^3"},
            {problem: "13(m+3n)^0", answer: "13"},
            {problem: "2(x^0y)^2", answer: "2y^2"},
            {problem: "4x^0(4x)^0", answer: "4"},
            {problem: "7x^0 - 4(2y)^0", answer: "3"},
            {problem: "9a^0b^0c^3", answer: "9c^3"},
            
            // Advanced power of a power combinations
            {problem: "(9x^7)^{10}", answer: "9^{10}x^{70}"},
            {problem: "(10x^2)^5", answer: "10^5x^{10}"},
            {problem: "\\frac{(3x^2)^{10}}{(x^3)^2}", answer: "3^{10}x^{14}"},
            {problem: "\\frac{8h^{20}}{(h^3)^5}", answer: "8h^5"},
            {problem: "\\frac{24(x^4)^4}{8(x^4)^2}", answer: "3x^8"},
            
            // Multi-step combinations
            {problem: "2(a^3)^2 \\times 3(a^2)^4", answer: "6a^{14}"},
            {problem: "5(x^4)^3 \\div (x^6)^2", answer: "5"},
            {problem: "4(y^2)^5 \\times (y^3)^0", answer: "4y^{10}"},
            {problem: "\\frac{6(m^5)^3}{2(m^3)^5}", answer: "3"},
            {problem: "8(p^4)^2 \\div 4(p^2)^4", answer: "2"}
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
window.AlgebraLevels.indexLawPowerMedium = new IndexLawPowerMediumLevel();