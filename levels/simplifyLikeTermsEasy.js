// levels/simplifyLikeTermsEasy.js
class SimplifyLikeTermsEasyLevel {
    constructor() {
        this.key = 'simplifyLikeTermsEasy';
        this.name = 'Like Terms (Easy)';
        this.usedQuestionIndices = new Set();
        
        // Predefined questions covering basic like terms
        this.questions = [

            // Basic Linear Terms
            {problem: "2x + 3x", answer: "5x"},
            {problem: "5a - 2a", answer: "3a"},
            {problem: "4b + b", answer: "5b"},
            {problem: "3y - y", answer: "2y"},
            {problem: "2x + 4x", answer: "6x"},
            {problem: "7x - 3x", answer: "4x"},
            {problem: "x + 2x", answer: "3x"},
            {problem: "6x - 4x", answer: "2x"},
            {problem: "3x + 2x", answer: "5x"},
            {problem: "8x - 5x", answer: "3x"},
            {problem: "4x + 3x", answer: "7x"},
            {problem: "9x - 6x", answer: "3x"},
            {problem: "2x + x", answer: "3x"},
            {problem: "5x - 2x", answer: "3x"},
            {problem: "3x + 4x", answer: "7x"},
            
            // Basic Quadratic Terms
            {problem: "2x^2 + 3x^2", answer: "5x^2"},
            {problem: "4a^2 - a^2", answer: "3a^2"},
            {problem: "3b^2 + 2b^2", answer: "5b^2"},
            {problem: "5y^2 - 3y^2", answer: "2y^2"},
            {problem: "x^2 + 4x^2", answer: "5x^2"},
            {problem: "6x^2 - 2x^2", answer: "4x^2"},
            {problem: "3x^2 + x^2", answer: "4x^2"},
            {problem: "7x^2 - 4x^2", answer: "3x^2"},
            {problem: "8x^2 - 5x^2", answer: "3x^2"},
                        
            // Simple Mixed (variables + constants)
            {problem: "2x + 3", answer: "2x + 3"},
            {problem: "5a - 2 + a", answer: "6a - 2"},
            {problem: "3b + 4 + 2b", answer: "5b + 4"},
            {problem: "x + 5 - 2x", answer: "-x + 5"},
            {problem: "4y + 1 + y", answer: "5y + 1"},
            {problem: "3x - 3 + 2x", answer: "5x - 3"},
            {problem: "2x + 6 - x", answer: "x + 6"},
            {problem: "5x - 1 - 3x", answer: "2x - 1"},
            {problem: "x + 4 + 3x", answer: "4x + 4"},
            {problem: "7x - 5 - 2x", answer: "5x - 5"},
            
            // Three term combinations
            {problem: "2x + 3x + x", answer: "6x"},
            {problem: "5a - 2a + 4a", answer: "7a"},
            {problem: "3b + b - 2b", answer: "2b"},
            {problem: "4y - y + 2y", answer: "5y"},
            {problem: "x + 3x - x", answer: "3x"},
            {problem: "6x - 3x + x", answer: "4x"},
            {problem: "2x + 4x - 3x", answer: "3x"},
            {problem: "7x - 2x - 3x", answer: "2x"},
            {problem: "3x + 2x + 4x", answer: "9x"},
            {problem: "8x - 4x - 2x", answer: "2x"},
            
            // ADD YOUR TEXTBOOK QUESTIONS HERE using the format:
            {problem: "9a - 6a", answer: "3a"},
            {problem: "5x - 4x", answer: "x"},
            {problem: "4b - b", answer: "3b"},
            {problem: "2a - 2a", answer: "0"},
            {problem: "3x + 4x + 2x", answer: "9x"},
            {problem: "8x - x + 3x", answer: "10x"},
            {problem: "3x + x", answer: "4x"},
            {problem: "3x - x", answer: "2x"},
            {problem: "-x + x", answer: "0"},
            {problem: "5y - 5y", answer: "0"},
            {problem: "2xy + 3xy", answer: "5xy"},
            {problem: "9ab - 5ab", answer: "4ab"},
            {problem: "x + 3x + 2x", answer: "6x"},
            {problem: "4xy + 5 - 2xy", answer: "2xy + 5"},
            {problem: "3a + 7a", answer: "10a"},
            {problem: "5x + 2x + 4x", answer: "11x"},
            {problem: "7xy + 2xy - 2xy", answer: "7xy"},
            {problem: "4y - 3y + 8", answer: "y + 8"},
            {problem: "7x + 5 - 4x", answer: "3x + 5"},
            {problem: "4 - 2x + x", answer: "4 - x"},
            {problem: "4xy + 3xy", answer: "7xy"},
            {problem: "4a + 2 + 3a", answer: "7a + 2"},
            {problem: "7 + 2b + 5b", answer: "7 + 7b"},
            {problem: "3x - 2 + 3x", answer: "6x - 2"},
            {problem: "7ab + 4 + 2ab", answer: "9ab + 4"}
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
window.AlgebraLevels.simplifyLikeTermsEasy = new SimplifyLikeTermsEasyLevel();