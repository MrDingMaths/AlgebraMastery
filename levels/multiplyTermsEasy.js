// levels/multiplyTermsEasy.js
class MultiplyTermsEasyLevel {
    constructor() {
        this.key = 'multiplyTermsEasy';
        this.name = 'Multiplying Terms (Easy)';
        this.usedQuestionIndices = new Set();
        
        // Predefined questions for easy level multiplying terms
        this.questions = [

            // Basic Coefficient and Variable Multiplication
            {problem: "3 \\times 6x", answer: "18x"},
            {problem: "4 \\times 5x", answer: "20x"},
            {problem: "2a \\times 8", answer: "16a"},
            {problem: "7 \\times 3x", answer: "21x"},
            {problem: "5 \\times 4y", answer: "20y"},
            {problem: "2 \\times 9x", answer: "18x"},
            {problem: "6b \\times 3", answer: "18b"},
            {problem: "4x \\times 5", answer: "20x"},
            {problem: "3 \\times 8x", answer: "24x"},
            {problem: "7x \\times 2", answer: "14x"},
            {problem: "5 \\times 6x", answer: "30x"},
            {problem: "8x \\times 3", answer: "24x"},
            {problem: "2 \\times 7x", answer: "14x"},
            {problem: "9x \\times 4", answer: "36x"},
            {problem: "6 \\times 5x", answer: "30x"},

            // Introduction to a Single Negative
            {problem: "5 \\times (-3x)", answer: "-15x"},
            {problem: "-2x \\times 7", answer: "-14x"},
            {problem: "7 \\times (-8x)", answer: "-56x"},
            {problem: "4 \\times (-5a)", answer: "-20a"},
            {problem: "-3b \\times 6", answer: "-18b"},
            {problem: "8 \\times (-2y)", answer: "-16y"},
            {problem: "-4x \\times 5", answer: "-20x"},
            {problem: "3 \\times (-7x)", answer: "-21x"},
            {problem: "-6x \\times 2", answer: "-12x"},
            {problem: "9 \\times (-4x)", answer: "-36x"},
            {problem: "-5x \\times 3", answer: "-15x"},
            {problem: "2 \\times (-9x)", answer: "-18x"},
            {problem: "-7x \\times 4", answer: "-28x"},
            {problem: "6 \\times (-3x)", answer: "-18x"},
            {problem: "-8x \\times 2", answer: "-16x"},

            // Keep questions that don't involve index laws (no exponent changes)
            {problem: "3a \\times 12", answer: "36a"},
            {problem: "7x \\times 9", answer: "63x"},
            {problem: "2 \\times 4x", answer: "8x"},
            {problem: "3 \\times 5a", answer: "15a"},
            {problem: "4a \\times 3b", answer: "12ab"},
            {problem: "7x \\times 9y", answer: "63xy"},
            {problem: "5 \\times 2b", answer: "10b"},
            {problem: "2x \\times 4y", answer: "8xy"},
            {problem: "-2a \\times 3x", answer: "-6ax"},
            {problem: "5x \\times (-2y)", answer: "-10xy"},
            {problem: "-6x \\times (-5y)", answer: "30xy"},
            {problem: "-5b \\times (-6x)", answer: "30bx"},
            {problem: "2 \\times 8b", answer: "16b"},
            {problem: "3 \\times (-5x)", answer: "-15x"},
            {problem: "-4x \\times 3y", answer: "-12xy"},
            {problem: "5x \\times (-3y)", answer: "-15xy"},
            {problem: "-3a \\times 2", answer: "-6a"},
            
            // Keep introductory squared terms that are straightforward
            {problem: "x \\times x", answer: "x^2"}
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