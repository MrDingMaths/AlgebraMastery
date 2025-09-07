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
            {problem: "2m + 4m", answer: "6m"},
            {problem: "7p - 3p", answer: "4p"},
            {problem: "x + 2x", answer: "3x"},
            {problem: "6n - 4n", answer: "2n"},
            {problem: "3z + 2z", answer: "5z"},
            {problem: "8r - 5r", answer: "3r"},
            {problem: "4t + 3t", answer: "7t"},
            {problem: "9s - 6s", answer: "3s"},
            {problem: "2q + q", answer: "3q"},
            {problem: "5w - 2w", answer: "3w"},
            {problem: "3v + 4v", answer: "7v"},
            
            // Basic Quadratic Terms
            {problem: "2x^2 + 3x^2", answer: "5x^2"},
            {problem: "4a^2 - a^2", answer: "3a^2"},
            {problem: "3b^2 + 2b^2", answer: "5b^2"},
            {problem: "5y^2 - 3y^2", answer: "2y^2"},
            {problem: "m^2 + 4m^2", answer: "5m^2"},
            {problem: "6p^2 - 2p^2", answer: "4p^2"},
            {problem: "3z^2 + z^2", answer: "4z^2"},
            {problem: "7n^2 - 4n^2", answer: "3n^2"},
            {problem: "2t^2 + 3t^2", answer: "5t^2"},
            {problem: "8r^2 - 5r^2", answer: "3r^2"},
                        
            // Simple Mixed (variables + constants)
            {problem: "2x + 3", answer: "2x + 3"},
            {problem: "5a - 2 + a", answer: "6a - 2"},
            {problem: "3b + 4 + 2b", answer: "5b + 4"},
            {problem: "x + 5 - 2x", answer: "-x + 5"},
            {problem: "4y + 1 + y", answer: "5y + 1"},
            {problem: "3m - 3 + 2m", answer: "5m - 3"},
            {problem: "2p + 6 - p", answer: "p + 6"},
            {problem: "5n - 1 - 3n", answer: "2n - 1"},
            {problem: "q + 4 + 3q", answer: "4q + 4"},
            {problem: "7r - 5 - 2r", answer: "5r - 5"},
            
            // Three term combinations
            {problem: "2x + 3x + x", answer: "6x"},
            {problem: "5a - 2a + 4a", answer: "7a"},
            {problem: "3b + b - 2b", answer: "2b"},
            {problem: "4y - y + 2y", answer: "5y"},
            {problem: "m + 3m - m", answer: "3m"},
            {problem: "6p - 3p + p", answer: "4p"},
            {problem: "2z + 4z - 3z", answer: "3z"},
            {problem: "7n - 2n - 3n", answer: "2n"},
            {problem: "3t + 2t + 4t", answer: "9t"},
            {problem: "8s - 4s - 2s", answer: "2s"},
            
            // ADD YOUR TEXTBOOK QUESTIONS HERE using the format:
            {problem: "9a - 6a", answer: "3a"},
            {problem: "5z - 4z", answer: "z"},
            {problem: "4b - b", answer: "3b"},
            {problem: "2a - 2a", answer: "0"},
            {problem: "3t + 4t + 2t", answer: "9t"},
            {problem: "8w - w + 3w", answer: "10w"},
            {problem: "3x + x", answer: "4x"},
            {problem: "3x - x", answer: "2x"},
            {problem: "-x + x", answer: "0"},
            {problem: "5y - 5y", answer: "0"},
            {problem: "2xy + 3xy", answer: "5xy"},
            {problem: "9ab - 5ab", answer: "4ab"},
            {problem: "t + 3t + 2t", answer: "6t"},
            {problem: "4gh + 5 - 2gh", answer: "2gh + 5"},
            {problem: "3a + 7a", answer: "10a"},
            {problem: "4n + 3n", answer: "7n"},
            {problem: "5x + 2x + 4x", answer: "11x"},
            {problem: "7mn + 2mn - 2mn", answer: "7mn"},
            {problem: "4y - 3y + 8", answer: "y + 8"},
            {problem: "7x + 5 - 4x", answer: "3x + 5"},
            {problem: "4 - 2x + x", answer: "4 - x"},
            {problem: "3x + 2x", answer: "5x"},
            {problem: "4xy + 3xy", answer: "7xy"},
            {problem: "4a + 2 + 3a", answer: "7a + 2"},
            {problem: "7 + 2b + 5b", answer: "7 + 7b"},
            {problem: "3k - 2 + 3k", answer: "6k - 2"},
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