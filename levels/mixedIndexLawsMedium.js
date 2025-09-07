// levels/mixedIndexLawsMedium.js
class MixedIndexLawsMediumLevel {
    constructor() {
        this.key = 'mixedIndexLawsMedium';
        this.name = 'Mixed Index Laws (Medium)';
        this.usedQuestionIndices = new Set();
        
        // Predefined questions covering medium complexity index laws
        // Cognitive complexity: Combining multiple laws, multi-step problems
        // Note: Negative exponent questions have been moved to negativeIndicesMedium.js
        this.questions = [
            // Zero power with multiplication
            {problem: "2^0 \\times 2^5", answer: "2^5"},
            {problem: "3^0 \\times 3^7", answer: "3^7"},
            {problem: "5^0 \\times 5^4", answer: "5^4"},
            {problem: "x^0 \\times x^8", answer: "x^8"},
            {problem: "7^0 \\times 7^3", answer: "7^3"},
            
            
            // Multi-step operations (multiplication and division)
            {problem: "3^6 \\times 3^4 \\div 3^5", answer: "3^5"},
            {problem: "2^5 \\times 2^8 \\div 2^6", answer: "2^7"},
            {problem: "7^{10} \\times 7^8 \\div 7^{16}", answer: "7^2"},
            {problem: "5^{12} \\times 5^2 \\div 5^4", answer: "5^{10}"},
            {problem: "4^9 \\times 4^3 \\div 4^8", answer: "4^4"},
            {problem: "6^{15} \\times 6^5 \\div 6^{12}", answer: "6^8"},
            {problem: "8^7 \\times 8^9 \\div 8^{11}", answer: "8^5"},
            
            // Power of a power with division
            {problem: "(5^6)^3 \\div 5^{10}", answer: "5^8"},
            {problem: "(4^5)^2 \\div 4^7", answer: "4^3"},
            {problem: "(3^3)^5 \\div 3^7", answer: "3^8"},
            {problem: "(2^4)^3 \\div 2^9", answer: "2^3"},
            {problem: "(6^2)^4 \\div 6^5", answer: "6^3"},
            {problem: "(7^3)^2 \\div 7^4", answer: "7^2"},
            
            // Division then multiplication
            {problem: "5^8 \\div 5^3 \\times 5^4", answer: "5^9"},
            {problem: "3^6 \\div 3^3 \\times 3^4", answer: "3^7"},
            {problem: "2^{10} \\div 2^4 \\times 2^3", answer: "2^9"},
            {problem: "3^{10} \\div 3^8 \\times 3^5", answer: "3^7"},
            {problem: "2^6 \\times 2^4 \\div 2^7", answer: "2^3"},
            {problem: "4^{12} \\div 4^5 \\times 4^2", answer: "4^9"},
            
            // Multiple divisions
            {problem: "3^{20} \\div 3^8 \\div 3^7", answer: "3^5"},
            {problem: "7^{25} \\div (7^3)^5", answer: "7^{10}"},
            {problem: "5^{18} \\div 5^6 \\div 5^4", answer: "5^8"},
            {problem: "2^{15} \\div 2^5 \\div 2^3", answer: "2^7"},
            
            // Power of a power with multiplication
            {problem: "(2^4)^3 \\times 2^2", answer: "2^{14}"},
            {problem: "(6^5)^2 \\times 6^3", answer: "6^{13}"},
            {problem: "(8^2)^2 \\times 8^4", answer: "8^8"},
            {problem: "(3^3)^4 \\times 3^1", answer: "3^{13}"},
            {problem: "(5^2)^3 \\times 5^5", answer: "5^{11}"},
            
            // Zero power combinations
            {problem: "(7^0)^2 \\times 3", answer: "3"},
            {problem: "(8^0)^3 \\times 4", answer: "4"},
            {problem: "(3^2)^0 \\times (5^4)^0", answer: "1"},
            {problem: "5^0 \\times 4^0 \\times 2^3", answer: "2^3"},
            {problem: "(x^5)^0 \\times y^7", answer: "y^7"},
            
            // Variable expressions
            {problem: "b^5 \\times b^2 \\div b", answer: "b^6"},
            {problem: "y^5 \\times y^4 \\div y^3", answer: "y^6"},
            {problem: "c^4 \\div c \\times c^4", answer: "c^7"},
            {problem: "x^4 \\times x^2 \\div x^5", answer: "x"},
            {problem: "(t^4 \\times t^3) \\div t^6", answer: "t"},
            {problem: "(p^2 \\times p^7) \\div p^3", answer: "p^6"},
            {problem: "(d^5 \\times d^3) \\div d^2", answer: "d^6"},
            {problem: "(x^9 \\times x^2) \\div x", answer: "x^{10}"},
            {problem: "m^8 \\div m^3 \\times m^2", answer: "m^7"},
            // Additional complex combinations (without negative indices)
            {problem: "(x^3)^2 \\div x^4", answer: "x^2"},
            {problem: "(a^4)^3 \\div a^{10}", answer: "a^2"}
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
window.AlgebraLevels.mixedIndexLawsMedium = new MixedIndexLawsMediumLevel();