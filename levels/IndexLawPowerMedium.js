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
            {problem: "4(x^7)^3", answer: "4x^{21}"},
            {problem: "3(x^2)^5", answer: "3x^{10}"},
            {problem: "-3(x^2)^5", answer: "-3x^{10}"},
            {problem: "-4(a^7)^3", answer: "-4a^{21}"},
            {problem: "5(x^4)^6", answer: "5x^{24}"},
            {problem: "7(y^3)^4", answer: "7y^{12}"},
            {problem: "-2(b^5)^3", answer: "-2b^{15}"},
            {problem: "6(x^6)^2", answer: "6x^{12}"},
            {problem: "-8(x^4)^5", answer: "-8x^{20}"},
            {problem: "9(x^8)^2", answer: "9x^{16}"},
            
            // Cognitive Level 1: Zero Power with Coefficients and Variables
            {problem: "-(4^0)", answer: "-1"},
            {problem: "4y^0", answer: "4"},
            {problem: "5x^0", answer: "5"},
            {problem: "-3x^0", answer: "-3"},
            {problem: "8x^0", answer: "8"},
            {problem: "3x^0", answer: "3"},
            {problem: "5(x^3y^5)^0", answer: "5"},
            {problem: "7(ab^2x)^0", answer: "7"},
            {problem: "-6(xya)^0", answer: "-6"},
            {problem: "10(2xy)^0", answer: "10"},
            
            // Cognitive Level 2: Zero Power in Expressions
            {problem: "6x^0 - 2x^0", answer: "4"},
            {problem: "-5x^0 - (8x)^0", answer: "-6"},
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
            {problem: "(x^3)^4 \\times (x^2)^6", answer: "x^{24}"},
            {problem: "(x^2)^6 \\times (y^4)^4", answer: "x^{12}y^{16}"},
            {problem: "(x^5)^2 \\times x^3", answer: "x^{13}"},
            {problem: "x^4 \\times (x^6)^3", answer: "x^{22}"},
            {problem: "(x^4)^5 \\times (x^2)^3", answer: "x^{26}"},
            
            // Cognitive Level 3: Power of a Power in Division
            {problem: "7^8 \\div (7^3)^2", answer: "7^2"},
            {problem: "(4^2)^3 \\div 4^5", answer: "4"},
            {problem: "(3^6)^3 \\div (3^5)^2", answer: "3^8"},
            {problem: "(x^3)^6 \\div (x^2)^9", answer: "1"},
            {problem: "(y^5)^3 \\div (y^6)^2", answer: "y^3"},
            {problem: "(x^{11})^2 \\div (x^5)^4", answer: "x^2"},
            {problem: "\\frac{(b^2)^5}{b^4}", answer: "b^6"},
            {problem: "\\frac{(x^4)^3}{x^7}", answer: "x^5"},
            {problem: "\\frac{(y^3)^3}{y^3}", answer: "y^6"},
            {problem: "\\frac{(x^6)^4}{(x^3)^5}", answer: "x^9"},
            
            // Cognitive Level 3: Coefficient Power of a Power
            {problem: "(3x^5)^2", answer: "9x^{10}"},
            {problem: "(2x^4)^3", answer: "8x^{12}"},
            {problem: "(4x^4)^2", answer: "16x^8"},
            {problem: "(7x^2)^2", answer: "49x^4"},
            {problem: "(2x^6)^3", answer: "8x^{18}"},
            {problem: "(6a^2)^2", answer: "36a^4"},
            {problem: "(4b^5)^3", answer: "64b^{15}"},
            {problem: "(5x^3)^2", answer: "25x^6"},
            
            // Cognitive Level 4: Complex Power Combinations
            {problem: "(3^4)^2 \\times 3", answer: "3^9"},
            {problem: "(x^3)^2 \\times (x^5)^3", answer: "x^{21}"},
            {problem: "(y^2)^6 \\times (y^3)^2", answer: "y^{18}"},
            {problem: "\\frac{(y^3)^4}{y^2}", answer: "y^{10}"},
            {problem: "\\frac{(x^7)^2}{(x^3)^2}", answer: "x^8"},
            {problem: "\\frac{(x^2)^{10}}{(x^3)^6}", answer: "x^2"},
            {problem: "\\frac{(7^8)^9}{(7^{10})^7}", answer: "7^2"},
            {problem: "\\frac{(7^6)^5}{(7^5)^6}", answer: "1"},
            {problem: "\\frac{5^{11} \\times 5^{13}}{(5^2)^{11}}", answer: "5^2"},
            
            // More complex zero power expressions
            {problem: "5b^0", answer: "5"},
            {problem: "12x^0y^3a^0", answer: "12y^3"},
            {problem: "13(x+3y)^0", answer: "13"},
            {problem: "2(x^0y)^2", answer: "2y^2"},
            {problem: "4x^0(4x)^0", answer: "4"},
            {problem: "7x^0 - 4(2y)^0", answer: "3"},
            {problem: "9a^0b^0x^3", answer: "9x^3"},
            
            // Advanced power of a power combinations
            {problem: "(9x^7)^{10}", answer: "9^{10}x^{70}"},
            {problem: "(10x^2)^5", answer: "10^5x^{10}"},
            {problem: "\\frac{(3x^2)^{10}}{(x^3)^2}", answer: "3^{10}x^{14}"},
            {problem: "\\frac{8x^{20}}{(x^3)^5}", answer: "8x^5"},
            {problem: "\\frac{24(x^4)^4}{8(x^4)^2}", answer: "3x^8"},
            
            // Multi-step combinations
            {problem: "2(a^3)^2 \\times 3(a^2)^4", answer: "6a^{14}"},
            {problem: "5(x^4)^3 \\div (x^6)^2", answer: "5"},
            {problem: "4(y^2)^5 \\times (y^3)^0", answer: "4y^{10}"},
            {problem: "\\frac{6(x^5)^3}{2(x^3)^5}", answer: "3"},
            {problem: "8(x^4)^2 \\div 4(x^2)^4", answer: "2"}
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