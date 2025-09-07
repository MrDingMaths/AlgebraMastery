// levels/indexLawEasy.js
class IndexLawEasyLevel {
    constructor() {
        this.key = 'indexLawEasy';
        this.name = 'Index Law Multiplication (Easy)';
        this.usedQuestionIndices = new Set();
        
        // Questions organized by cognitive complexity levels
        this.questions = [
            // Cognitive Level 1: Direct Application (Same base, add exponents)
            // Basic single variable multiplication
            {problem: "x^4 \\times x^3", answer: "x^7"},
            {problem: "a^6 \\times a^3", answer: "a^9"},
            {problem: "t^5 \\times t^3", answer: "t^8"},
            {problem: "y \\times y^4", answer: "y^5"},
            {problem: "d^2 \\times d", answer: "d^3"},
            {problem: "m^3 \\times m^4", answer: "m^7"},
            {problem: "x^2 \\times x^4", answer: "x^6"},
            {problem: "k \\times k^3", answer: "k^4"},
            {problem: "j^2 \\times j", answer: "j^3"},
            {problem: "a^5 \\times a^4", answer: "a^9"},
            {problem: "x^3 \\times x^2", answer: "x^5"},
            {problem: "b \\times b^5", answer: "b^6"},
            
            // Additional basic questions for reinforcement
            {problem: "c^2 \\times c^2", answer: "c^4"},
            {problem: "p \\times p", answer: "p^2"},
            {problem: "r^3 \\times r", answer: "r^4"},
            {problem: "s^4 \\times s^2", answer: "s^6"},
            {problem: "w^5 \\times w", answer: "w^6"},
            {problem: "z \\times z^3", answer: "z^4"},
            {problem: "n^2 \\times n^3", answer: "n^5"},
            {problem: "u^4 \\times u", answer: "u^5"},
            
            // Cognitive Level 2: Pattern Recognition (Multiple terms, same base)
            {problem: "y^2 \\times y \\times y^4", answer: "y^7"},
            {problem: "b \\times b^5 \\times b^2", answer: "b^8"},
            {problem: "m^2 \\times m^4 \\times m^3", answer: "m^9"},
            {problem: "a^2 \\times a^4 \\times a^3", answer: "a^9"},
            {problem: "r^2 \\times r^3 \\times r^4", answer: "r^9"},
            {problem: "m^4 \\times m^3 \\times m", answer: "m^8"},
            {problem: "x^2 \\times x \\times x \\times x", answer: "x^5"},
            
            // Additional three-term questions
            {problem: "p \\times p^2 \\times p^3", answer: "p^6"},
            {problem: "t^3 \\times t \\times t^2", answer: "t^6"},
            {problem: "c^2 \\times c^2 \\times c^2", answer: "c^6"},
            {problem: "q \\times q \\times q^3", answer: "q^5"},
            {problem: "v^3 \\times v^2 \\times v", answer: "v^6"},
            {problem: "h^4 \\times h \\times h^3", answer: "h^8"},
            {problem: "g \\times g^3 \\times g^4", answer: "g^8"},
            
            // Cognitive Level 3: Higher Powers (Testing comfort with larger numbers)
            {problem: "q^{10} \\times q^3", answer: "q^{13}"},
            {problem: "r^7 \\times r^2", answer: "r^9"},
            {problem: "q^6 \\times q^3 \\times q^2", answer: "q^{11}"},
            {problem: "z^{10} \\times z^{12} \\times z^{14}", answer: "z^{36}"},
            
            // Additional higher power questions
            {problem: "x^8 \\times x^5", answer: "x^{13}"},
            {problem: "a^7 \\times a^6", answer: "a^{13}"},
            {problem: "b^9 \\times b^4", answer: "b^{13}"},
            {problem: "y^{12} \\times y^3", answer: "y^{15}"},
            {problem: "m^{11} \\times m^7", answer: "m^{18}"},
            {problem: "p^8 \\times p^8", answer: "p^{16}"},
            {problem: "n^{15} \\times n^5", answer: "n^{20}"},
            
            // Cognitive Level 4: Mixed Complexity (Various power combinations)
            {problem: "f^6 \\times f \\times f^4", answer: "f^{11}"},
            {problem: "e^3 \\times e^7 \\times e^2", answer: "e^{12}"},
            {problem: "l^5 \\times l^5 \\times l^5", answer: "l^{15}"},
            {problem: "i^4 \\times i^6 \\times i^3", answer: "i^{13}"},
            {problem: "o^2 \\times o^8 \\times o^4", answer: "o^{14}"},
            
            // Four-term combinations for advanced pattern recognition
            {problem: "x \\times x \\times x \\times x", answer: "x^4"},
            {problem: "a^2 \\times a \\times a^3 \\times a", answer: "a^7"},
            {problem: "b^3 \\times b^2 \\times b \\times b^4", answer: "b^{10}"},
            {problem: "c^5 \\times c \\times c^2 \\times c^3", answer: "c^{11}"},
            {problem: "d \\times d^4 \\times d^2 \\times d^6", answer: "d^{13}"},
            
            // Reinforcement questions with varied patterns
            {problem: "k^3 \\times k^3", answer: "k^6"},
            {problem: "w^4 \\times w^4", answer: "w^8"},
            {problem: "v^5 \\times v^5", answer: "v^{10}"},
            {problem: "s^6 \\times s^6", answer: "s^{12}"},
            {problem: "t^7 \\times t^7", answer: "t^{14}"},
            
            // Edge cases with exponent 1
            {problem: "x^1 \\times x^3", answer: "x^4"},
            {problem: "a^5 \\times a^1", answer: "a^6"},
            {problem: "b^1 \\times b^1", answer: "b^2"},
            {problem: "c^7 \\times c^1", answer: "c^8"},
            {problem: "d^1 \\times d^9", answer: "d^{10}"},
            
            // Moved from Multiply Terms - Basic same variable products
            {problem: "x \\times x", answer: "x^2"},
            {problem: "3a \\times 4a", answer: "12a^2"},
            {problem: "5y \\times 2y", answer: "10y^2"},
            {problem: "3n \\times 5n", answer: "15n^2"},
            {problem: "4s \\times 3s", answer: "12s^2"},
            {problem: "9z \\times z", answer: "9z^2"},
            {problem: "2k \\times 8k", answer: "16k^2"},
            {problem: "a \\times a", answer: "a^2"},
            {problem: "3d \\times d", answer: "3d^2"},
            {problem: "2k \\times k", answer: "2k^2"},
            {problem: "p \\times 7p", answer: "7p^2"},
            {problem: "q \\times 3q", answer: "3q^2"},
            {problem: "6x \\times 2x", answer: "12x^2"},
            {problem: "9r \\times 4r", answer: "36r^2"},
            {problem: "5p \\times 2p", answer: "10p^2"},
            {problem: "4d \\times 3d", answer: "12d^2"}
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
window.AlgebraLevels.indexLawEasy = new IndexLawEasyLevel();