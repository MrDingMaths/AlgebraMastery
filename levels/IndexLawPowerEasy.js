// levels/IndexLawPowerEasy.js
class IndexLawPowerEasyLevel {
    constructor() {
        this.key = 'indexLawPowerEasy';
        this.name = 'Power of a Power & Zero Laws (Easy)';
        this.usedQuestionIndices = new Set();
        
        // Questions organized by cognitive complexity levels
        this.questions = [
            // Cognitive Level 1: Basic Power of a Power Rules
            // Single variable, simple powers
            {problem: "(x^2)^5", answer: "x^{10}"},
            {problem: "(b^3)^4", answer: "b^{12}"},
            {problem: "(a^4)^5", answer: "a^{20}"},
            {problem: "(m^6)^2", answer: "m^{12}"},
            {problem: "(d^3)^3", answer: "d^9"},
            {problem: "(k^8)^3", answer: "k^{24}"},
            {problem: "(m^5)^{10}", answer: "m^{50}"},
            {problem: "(y^2)^6", answer: "y^{12}"},
            {problem: "(p^7)^2", answer: "p^{14}"},
            {problem: "(s^4)^3", answer: "s^{12}"},
            {problem: "(t^5)^4", answer: "t^{20}"},
            {problem: "(w^6)^5", answer: "w^{30}"},
            
            // Cognitive Level 1: Basic Zero Power Rules
            // Simple zero power applications
            {problem: "5^0", answer: "1"},
            {problem: "9^0", answer: "1"},
            {problem: "(-6)^0", answer: "1"},
            {problem: "(-3)^0", answer: "1"},
            {problem: "3^0", answer: "1"},
            {problem: "7^0", answer: "1"},
            {problem: "100^0", answer: "1"},
            {problem: "(-8)^0", answer: "1"},
            {problem: "2^0", answer: "1"},
            
            // Cognitive Level 2: Numeric Power of a Power
            // Power of a power with numbers
            {problem: "(3^2)^3", answer: "3^6"},
            {problem: "(4^3)^5", answer: "4^{15}"},
            {problem: "(3^5)^6", answer: "3^{30}"},
            {problem: "(7^5)^2", answer: "7^{10}"},
            {problem: "(2^3)^4", answer: "2^{12}"},
            {problem: "(5^2)^8", answer: "5^{16}"},
            {problem: "(6^4)^9", answer: "6^{36}"},
            {problem: "(2^4)^3", answer: "2^{12}"},
            {problem: "(5^3)^2", answer: "5^6"},
            {problem: "(3^4)^2", answer: "3^8"},
            {problem: "(4^2)^4", answer: "4^8"},
            {problem: "(2^5)^3", answer: "2^{15}"},
            
            // Cognitive Level 2: Fractional Zero Powers
            {problem: "(\\frac{3}{4})^0", answer: "1"},
            {problem: "(-\\frac{1}{7})^0", answer: "1"},
            {problem: "(\\frac{2}{5})^0", answer: "1"},
            {problem: "(-\\frac{4}{9})^0", answer: "1"},
            {problem: "(\\frac{7}{3})^0", answer: "1"},
            {problem: "(-\\frac{5}{8})^0", answer: "1"},
            {problem: "(\\frac{1}{2})^0", answer: "1"},
            {problem: "(-\\frac{3}{5})^0", answer: "1"},
            
            // Cognitive Level 3: Expression Zero Powers
            // Zero power with algebraic expressions
            {problem: "(3x^2)^0", answer: "1"},
            {problem: "(5z)^0", answer: "1"},
            {problem: "(10ab^2)^0", answer: "1"},
            {problem: "(7xy)^0", answer: "1"},
            {problem: "(4a^3b)^0", answer: "1"},
            {problem: "(2x^4y^2)^0", answer: "1"},
            {problem: "(9pq^3)^0", answer: "1"},
            {problem: "(6m^2n)^0", answer: "1"},
            {problem: "(8rst)^0", answer: "1"},
            {problem: "(3a^5b^2c)^0", answer: "1"},
            
            // Cognitive Level 3: Higher Order Powers
            // Power of a power with larger exponents
            {problem: "(x^7)^5", answer: "x^{35}"},
            {problem: "(a^9)^3", answer: "a^{27}"},
            {problem: "(b^{10})^4", answer: "b^{40}"},
            {problem: "(c^{12})^2", answer: "c^{24}"},
            {problem: "(d^8)^6", answer: "d^{48}"},
            {problem: "(e^{11})^3", answer: "e^{33}"},
            {problem: "(f^{15})^2", answer: "f^{30}"},
            {problem: "(g^6)^8", answer: "g^{48}"},
            
            // Additional reinforcement questions
            {problem: "(y^3)^5", answer: "y^{15}"},
            {problem: "(z^4)^7", answer: "z^{28}"},
            {problem: "(h^5)^6", answer: "h^{30}"},
            {problem: "(j^2)^9", answer: "j^{18}"},
            {problem: "(n^7)^4", answer: "n^{28}"},
            {problem: "(r^8)^5", answer: "r^{40}"},
            
            // Power of a power with unit exponents
            {problem: "(x^1)^8", answer: "x^8"},
            {problem: "(a^6)^1", answer: "a^6"},
            {problem: "(b^1)^5", answer: "b^5"},
            {problem: "(c^4)^1", answer: "c^4"},
            {problem: "(d^1)^3", answer: "d^3"},
            {problem: "(e^7)^1", answer: "e^7"}
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
window.AlgebraLevels.indexLawPowerEasy = new IndexLawPowerEasyLevel();