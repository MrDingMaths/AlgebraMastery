// levels/multiplyTermsHard.js
class MultiplyTermsHardLevel {
    constructor() {
        this.key = 'multiplyTermsHard';
        this.name = 'Multiplying Terms (Hard)';
        this.usedQuestionIndices = new Set();
        
        // Predefined questions for hard level multiplying terms
        this.questions = [

            // 3-term problems (adjusted from 4-term problems)
            {problem: "2a \\times 3b \\times 4x", answer: "24abx"},
            {problem: "7x \\times 2y \\times (-3)", answer: "-42xy"},
            {problem: "x \\times (-4y) \\times 5a", answer: "-20xya"},
            {problem: "(-2a^2) \\times 3b \\times (-x)", answer: "6a^2bx"},
            {problem: "6x \\times (-y) \\times 3a", answer: "-18xya"},
            {problem: "(-5y^2) \\times 2a \\times (-3x)", answer: "30y^2ax"},
            {problem: "7x \\times 2a \\times (-3b)", answer: "-42abx"},
            {problem: "(-4x) \\times (-y) \\times 3a", answer: "12xya"},
            {problem: "3a \\times (-2b) \\times 4x", answer: "-24abx"},
            {problem: "(-6x) \\times 2y \\times (-3a)", answer: "36xya"},
            {problem: "5x \\times (-y) \\times 2a", answer: "-10xya"},
            {problem: "(-7x) \\times 3y \\times (-a)", answer: "21xya"},
            {problem: "4y \\times (-2a) \\times 3x", answer: "-24yax"},
            {problem: "(-8a) \\times (-b) \\times 2x", answer: "16abx"},
            {problem: "3x \\times 5y \\times (-2a)", answer: "-30xya"},
            {problem: "(-9x) \\times y \\times (-a)", answer: "9xya"},
            {problem: "6x \\times (-3y) \\times a", answer: "-18xya"},
            {problem: "(-5x) \\times 4y \\times (-a)", answer: "20xya"},
            {problem: "7x \\times (-y) \\times 2a", answer: "-14xya"},
            {problem: "(-4b) \\times (-2x) \\times 5y", answer: "40bxy"},
            {problem: "8x \\times 3y \\times (-a)", answer: "-24xya"},
            {problem: "(-2x) \\times 6y \\times (-a)", answer: "12xya"},
            {problem: "9x \\times (-y) \\times 3a", answer: "-27xya"},
            {problem: "(-3x^2) \\times 4y \\times (-a)", answer: "12x^2ya"},
            {problem: "5y^2 \\times (-2a) \\times 3x", answer: "-30y^2ax"},
            {problem: "(-6a^2) \\times (-b) \\times 2x", answer: "12a^2bx"},
            {problem: "7x^2 \\times 2y \\times (-a)", answer: "-14x^2ya"},
            {problem: "(-4x^2) \\times 3y \\times (-a)", answer: "12x^2ya"},
            
            // 2-term multi-variable questions (unchanged)
            {problem: "2x^2 \\times 6y", answer: "12x^2y"},
            {problem: "-3b^2 \\times 7x^5", answer: "-21b^2x^5"},
            {problem: "4a^3 \\times (-5x)", answer: "-20a^3x"},
            {problem: "7x^2 \\times 2y^4", answer: "14x^2y^4"},
            {problem: "-6x^5 \\times 3y", answer: "-18x^5y"},
            {problem: "8x^2 \\times (-y^3)", answer: "-8x^2y^3"},
            {problem: "-9x^4 \\times (-2y)", answer: "18x^4y"},
            {problem: "5x^6 \\times 4y^2", answer: "20y^2x^6"},
            {problem: "-7x^3 \\times 6y^5", answer: "-42y^5x^3"},
            {problem: "3x^2 \\times (-8y^4)", answer: "-24y^4x^2"},
            {problem: "10x^7 \\times (-y)", answer: "-10yx^7"},
            {problem: "-2x^3 \\times 9y^8", answer: "-18y^8x^3"}
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