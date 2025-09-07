// levels/multiplyTermsEasy.js
class MultiplyTermsEasyLevel {
    constructor() {
        this.key = 'multiplyTermsEasy';
        this.name = 'Multiplying Terms (Easy)';
        this.usedQuestionIndices = new Set();
        
        // Predefined questions for easy level multiplying terms
        this.questions = [

            // Basic Coefficient and Variable Multiplication
            {problem: "3 \\times 6r", answer: "18r"},
            {problem: "4 \\times 5x", answer: "20x"},
            {problem: "2a \\times 8", answer: "16a"},
            {problem: "7 \\times 3m", answer: "21m"},
            {problem: "5 \\times 4y", answer: "20y"},
            {problem: "2 \\times 9p", answer: "18p"},
            {problem: "6b \\times 3", answer: "18b"},
            {problem: "4n \\times 5", answer: "20n"},
            {problem: "3 \\times 8z", answer: "24z"},
            {problem: "7t \\times 2", answer: "14t"},
            {problem: "5 \\times 6s", answer: "30s"},
            {problem: "8q \\times 3", answer: "24q"},
            {problem: "2 \\times 7w", answer: "14w"},
            {problem: "9v \\times 4", answer: "36v"},
            {problem: "6 \\times 5k", answer: "30k"},

            // Introduction to a Single Negative
            {problem: "5 \\times (-3m)", answer: "-15m"},
            {problem: "-2x \\times 7", answer: "-14x"},
            {problem: "7 \\times (-8r)", answer: "-56r"},
            {problem: "4 \\times (-5a)", answer: "-20a"},
            {problem: "-3b \\times 6", answer: "-18b"},
            {problem: "8 \\times (-2y)", answer: "-16y"},
            {problem: "-4p \\times 5", answer: "-20p"},
            {problem: "3 \\times (-7n)", answer: "-21n"},
            {problem: "-6z \\times 2", answer: "-12z"},
            {problem: "9 \\times (-4t)", answer: "-36t"},
            {problem: "-5s \\times 3", answer: "-15s"},
            {problem: "2 \\times (-9q)", answer: "-18q"},
            {problem: "-7w \\times 4", answer: "-28w"},
            {problem: "6 \\times (-3v)", answer: "-18v"},
            {problem: "-8k \\times 2", answer: "-16k"},

            // Keep questions that don't involve index laws (no exponent changes)
            {problem: "3a \\times 12", answer: "36a"},
            {problem: "7d \\times 9", answer: "63d"},
            {problem: "2 \\times 4e", answer: "8e"},
            {problem: "3 \\times 5a", answer: "15a"},
            {problem: "4a \\times 3b", answer: "12ab"},
            {problem: "7e \\times 9g", answer: "63eg"},
            {problem: "5 \\times 2b", answer: "10b"},
            {problem: "2x \\times 4y", answer: "8xy"},
            {problem: "-2a \\times 3d", answer: "-6ad"},
            {problem: "5h \\times (-2m)", answer: "-10hm"},
            {problem: "-6h \\times (-5t)", answer: "30ht"},
            {problem: "-5b \\times (-6l)", answer: "30bl"},
            {problem: "3 \\times 6r", answer: "18r"},
            {problem: "2 \\times 8b", answer: "16b"},
            {problem: "3 \\times (-5p)", answer: "-15p"},
            {problem: "-4c \\times 3d", answer: "-12cd"},
            {problem: "5m \\times (-3n)", answer: "-15mn"},
            {problem: "-3a \\times 2", answer: "-6a"},
            
            // Keep introductory squared terms that are straightforward
            {problem: "g \\times g", answer: "g^2"}
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
        
        // 30% chance to convert to implied multiplication
        if (Math.random() < 0.3) {
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
window.AlgebraLevels.multiplyTermsEasy = new MultiplyTermsEasyLevel();