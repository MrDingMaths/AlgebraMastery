// levels/multiplyTermsHard.js
class MultiplyTermsHardLevel {
    constructor() {
        this.key = 'multiplyTermsHard';
        this.name = 'Multiplying Terms (Hard)';
        this.usedQuestionIndices = new Set();
        
        // Predefined questions for hard level multiplying terms
        this.questions = [

            // 3-term problems (adjusted from 4-term problems)
            {problem: "2a \\times 3b \\times 4c", answer: "24abc"},
            {problem: "7x \\times 2y \\times (-3)", answer: "-42xy"},
            {problem: "m \\times (-4n) \\times 5p", answer: "-20mnp"},
            {problem: "(-2a^2) \\times 3b \\times (-c)", answer: "6a^2bc"},
            {problem: "6r \\times (-s) \\times 3t", answer: "-18rst"},
            {problem: "(-5v^2) \\times 2w \\times (-3x)", answer: "30v^2wx"},
            {problem: "7z \\times 2a \\times (-3b)", answer: "-42abz"},
            {problem: "(-4d) \\times (-e) \\times 3f", answer: "12def"},
            {problem: "3a \\times (-2b) \\times 4c", answer: "-24abc"},
            {problem: "(-6x) \\times 2y \\times (-3z)", answer: "36xyz"},
            {problem: "5m \\times (-n) \\times 2p", answer: "-10mnp"},
            {problem: "(-7r) \\times 3s \\times (-t)", answer: "21rst"},
            {problem: "4v \\times (-2w) \\times 3x", answer: "-24vwx"},
            {problem: "(-8a) \\times (-b) \\times 2c", answer: "16abc"},
            {problem: "3e \\times 5f \\times (-2g)", answer: "-30efg"},
            {problem: "(-9i) \\times j \\times (-k)", answer: "9ijk"},
            {problem: "6p \\times (-3q) \\times r", answer: "-18pqr"},
            {problem: "(-5t) \\times 4u \\times (-v)", answer: "20tuv"},
            {problem: "7x \\times (-y) \\times 2z", answer: "-14xyz"},
            {problem: "(-4b) \\times (-2c) \\times 5d", answer: "40bcd"},
            {problem: "8f \\times 3g \\times (-h)", answer: "-24fgh"},
            {problem: "(-2j) \\times 6k \\times (-l)", answer: "12jkl"},
            {problem: "9n \\times (-o) \\times 3p", answer: "-27nop"},
            {problem: "(-3r^2) \\times 4s \\times (-t)", answer: "12r^2st"},
            {problem: "5v^2 \\times (-2w) \\times 3x", answer: "-30v^2wx"},
            {problem: "(-6a^2) \\times (-b) \\times 2c", answer: "12a^2bc"},
            {problem: "7e^2 \\times 2f \\times (-g)", answer: "-14e^2fg"},
            {problem: "(-4i^2) \\times 3j \\times (-k)", answer: "12i^2jk"},
            
            // 2-term multi-variable questions (unchanged)
            {problem: "2s^2 \\times 6t", answer: "12s^2t"},
            {problem: "-3b^2 \\times 7d^5", answer: "-21b^2d^5"},
            {problem: "4a^3 \\times (-5c)", answer: "-20a^3c"},
            {problem: "7x^2 \\times 2y^4", answer: "14x^2y^4"},
            {problem: "-6p^5 \\times 3q", answer: "-18p^5q"},
            {problem: "8m^2 \\times (-n^3)", answer: "-8m^2n^3"},
            {problem: "-9r^4 \\times (-2s)", answer: "18r^4s"},
            {problem: "5k^6 \\times 4j^2", answer: "20j^2k^6"},
            {problem: "-7w^3 \\times 6v^5", answer: "-42v^5w^3"},
            {problem: "3u^2 \\times (-8t^4)", answer: "-24t^4u^2"},
            {problem: "10z^7 \\times (-h)", answer: "-10hz^7"},
            {problem: "-2g^3 \\times 9f^8", answer: "-18f^8g^3"}
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
        
        let question = { ...this.questions[questionIndex] };
        
        // 90% chance to convert to implied multiplication
        if (Math.random() < 0.9) {
            question.problem = this.convertToImpliedMultiplication(question.problem);
        }
        
        return question;
    }
    
    convertToImpliedMultiplication(problem) {
        // Convert expressions like "3 \times 5a" to "3(5a)"
        // Also handle more complex cases like "6q \times (-2p)" to "6q(-2p)"
        let result = problem;
        
        // Basic pattern: coefficient times term
        result = result.replace(/(\d+)\s*\\times\s*(\d*[a-zA-Z][^\s]*)/g, '$1($2)');
        
        // Variable times parenthesized expression: "6q \times (-2p)" -> "6q(-2p)"
        result = result.replace(/([a-zA-Z0-9]+)\s*\\times\s*(\([^)]+\))/g, '$1$2');
        
        // Term times parenthesized expression: "2a \times (3b)" -> "2a(3b)"
        result = result.replace(/(\d*[a-zA-Z]+)\s*\\times\s*(\([^)]+\))/g, '$1$2');
        
        return result;
    }

    getQuestions() {
        return this.questions;
    }
}

// Register the level
window.AlgebraLevels = window.AlgebraLevels || {};
window.AlgebraLevels.multiplyTermsHard = new MultiplyTermsHardLevel();