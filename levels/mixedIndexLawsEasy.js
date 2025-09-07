// levels/mixedIndexLawsEasy.js
class MixedIndexLawsEasyLevel {
    constructor() {
        this.key = 'mixedIndexLawsEasy';
        this.name = 'Mixed Index Laws (Easy)';
        this.usedQuestionIndices = new Set();
        
        // Predefined questions covering basic index laws
        // Cognitive complexity: Basic application of single index laws
        this.questions = [
            // Basic multiplication law (a^m × a^n = a^(m+n))
            {problem: "5^8 \\times 5^2", answer: "5^{10}"},
            {problem: "6^7 \\times 6^9", answer: "6^{16}"},
            {problem: "10^{11} \\times 10^4", answer: "10^{15}"},
            {problem: "4^9 \\times 4^3", answer: "4^{12}"},
            {problem: "12^7 \\times 12^2", answer: "12^9"},
            {problem: "9^{15} \\times 9^2", answer: "9^{17}"},
            {problem: "a^8 \\times a^7", answer: "a^{15}"},
            {problem: "x^5 \\times x^5 \\times x^5", answer: "x^{15}"},
            {problem: "2^3 \\times 2^4", answer: "2^7"},
            {problem: "3^2 \\times 3^6", answer: "3^8"},
            {problem: "7^1 \\times 7^8", answer: "7^9"},
            {problem: "8^4 \\times 8^5", answer: "8^9"},
            
            // Basic division law (a^m ÷ a^n = a^(m-n))
            {problem: "12^6 \\div 12^2", answer: "12^4"},
            {problem: "8^7 \\div 8^2", answer: "8^5"},
            {problem: "3^6 \\div 3^1", answer: "3^5"},
            {problem: "2^{18} \\div 2^{15}", answer: "2^3"},
            {problem: "14^{10} \\div 14^4", answer: "14^6"},
            {problem: "17^8 \\div 17^5", answer: "17^3"},
            {problem: "7^8 \\div 7^3", answer: "7^5"},
            {problem: "y^{12} \\div y", answer: "y^{11}"},
            {problem: "9^{12} \\div 9^7", answer: "9^5"},
            {problem: "5^9 \\div 5^4", answer: "5^5"},
            {problem: "11^{15} \\div 11^8", answer: "11^7"},
            {problem: "6^{10} \\div 6^3", answer: "6^7"},
            
            // Power of a power law ((a^m)^n = a^(mn))
            {problem: "(4^2)^3", answer: "4^6"},
            {problem: "(5^3)^6", answer: "5^{18}"},
            {problem: "(9^2)^{11}", answer: "9^{22}"},
            {problem: "(8^4)^3", answer: "8^{12}"},
            {problem: "(5^2)^{14}", answer: "5^{28}"},
            {problem: "(6^8)^3", answer: "6^{24}"},
            {problem: "(x^5)^3", answer: "x^{15}"},
            {problem: "(z^2)^7", answer: "z^{14}"},
            {problem: "(3^3)^4", answer: "3^{12}"},
            {problem: "(7^2)^5", answer: "7^{10}"},
            {problem: "(2^4)^6", answer: "2^{24}"},
            {problem: "(a^3)^8", answer: "a^{24}"},
            
            // Zero power law (a^0 = 1)
            {problem: "7^0", answer: "1"},
            {problem: "12^0", answer: "1"},
            {problem: "5.6^0", answer: "1"},
            {problem: "(\\frac{1}{4})^0", answer: "1"},
            {problem: "(59)^0", answer: "1"},
            {problem: "(136)^0", answer: "1"},
            {problem: "(9^5)^0", answer: "1"},
            {problem: "(3a)^0", answer: "1"},
            {problem: "100^0", answer: "1"},
            {problem: "(-5)^0", answer: "1"},
            {problem: "(xy)^0", answer: "1"},
            
            // Equal base division resulting in 1
            {problem: "2^8 \\div 2^8", answer: "1"},
            {problem: "3^7 \\div 3^7", answer: "1"},
            {problem: "x^4 \\div x^4", answer: "1"},
            {problem: "7^{15} \\div 7^{15}", answer: "1"},
            
            // Additional practice questions
            {problem: "2^5 \\times 2^3", answer: "2^8"},
            {problem: "3^4 \\times 3^2", answer: "3^6"},
            {problem: "4^7 \\div 4^3", answer: "4^4"},
            {problem: "6^9 \\div 6^4", answer: "6^5"},
            {problem: "(2^3)^2", answer: "2^6"},
            {problem: "(3^4)^3", answer: "3^{12}"},
            {problem: "8^0", answer: "1"},
            {problem: "15^0", answer: "1"},
            {problem: "m^6 \\times m^2", answer: "m^8"},
            {problem: "n^8 \\div n^5", answer: "n^3"},
            {problem: "(y^2)^4", answer: "y^8"},
            {problem: "b^{11} \\div b^{11}", answer: "1"}
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
window.AlgebraLevels.mixedIndexLawsEasy = new MixedIndexLawsEasyLevel();