class ExpandingPerfectSquaresEasy {
    constructor() {
        this.key = 'expandingPerfectSquaresEasy';
        this.name = 'Expanding Perfect Squares (Easy)';
        this.usedQuestionIndices = new Set();
        
        // Predefined questions covering basic perfect square expansion
        this.questions = [
            // Basic positive perfect squares (x + constant)^2
            {problem: "(x + 1)^2", answer: "x^2 + 2x + 1"},
            {problem: "(x + 3)^2", answer: "x^2 + 6x + 9"},
            {problem: "(x + 4)^2", answer: "x^2 + 8x + 16"},
            {problem: "(x + 7)^2", answer: "x^2 + 14x + 49"},
            {problem: "(x + 10)^2", answer: "x^2 + 20x + 100"},
            {problem: "(x + 9)^2", answer: "x^2 + 18x + 81"},
            
            // Basic negative perfect squares (x - constant)^2
            {problem: "(x - 2)^2", answer: "x^2 - 4x + 4"},
            {problem: "(x - 6)^2", answer: "x^2 - 12x + 36"},
            {problem: "(x - 7)^2", answer: "x^2 - 14x + 49"},
            {problem: "(x - 4)^2", answer: "x^2 - 8x + 16"},
            {problem: "(x - 12)^2", answer: "x^2 - 24x + 144"},
            {problem: "(x - 9)^2", answer: "x^2 - 18x + 81"},
            
            // Reverse order (constant - x)^2
            {problem: "(3 - x)^2", answer: "x^2 - 6x + 9"},
            {problem: "(5 - x)^2", answer: "x^2 - 10x + 25"},
            {problem: "(1 - x)^2", answer: "x^2 - 2x + 1"},
            {problem: "(11 - x)^2", answer: "x^2 - 22x + 121"},
            {problem: "(7 - x)^2", answer: "x^2 - 14x + 49"},
            {problem: "(8 - x)^2", answer: "x^2 - 16x + 64"},
            
            // Additional easy perfect squares for practice
            {problem: "(x + 2)^2", answer: "x^2 + 4x + 4"},
            {problem: "(x + 5)^2", answer: "x^2 + 10x + 25"},
            {problem: "(x + 6)^2", answer: "x^2 + 12x + 36"},
            {problem: "(x + 8)^2", answer: "x^2 + 16x + 64"},
            {problem: "(x - 1)^2", answer: "x^2 - 2x + 1"},
            {problem: "(x - 3)^2", answer: "x^2 - 6x + 9"},
            {problem: "(x - 5)^2", answer: "x^2 - 10x + 25"},
            {problem: "(x - 8)^2", answer: "x^2 - 16x + 64"},
            {problem: "(x - 10)^2", answer: "x^2 - 20x + 100"},
            {problem: "(x - 11)^2", answer: "x^2 - 22x + 121"},
            
            // Reverse order variants
            {problem: "(2 - x)^2", answer: "x^2 - 4x + 4"},
            {problem: "(4 - x)^2", answer: "x^2 - 8x + 16"},
            {problem: "(6 - x)^2", answer: "x^2 - 12x + 36"},
            {problem: "(9 - x)^2", answer: "x^2 - 18x + 81"},
            {problem: "(10 - x)^2", answer: "x^2 - 20x + 100"},
            {problem: "(12 - x)^2", answer: "x^2 - 24x + 144"},
            
            // Different variables for variety
            {problem: "(a + 1)^2", answer: "a^2 + 2a + 1"},
            {problem: "(a + 3)^2", answer: "a^2 + 6a + 9"},
            {problem: "(a - 2)^2", answer: "a^2 - 4a + 4"},
            {problem: "(a - 5)^2", answer: "a^2 - 10a + 25"},
            {problem: "(y + 4)^2", answer: "y^2 + 8y + 16"},
            {problem: "(y - 3)^2", answer: "y^2 - 6y + 9"},
            {problem: "(m + 2)^2", answer: "m^2 + 4m + 4"},
            {problem: "(m - 1)^2", answer: "m^2 - 2m + 1"},
            {problem: "(n + 5)^2", answer: "n^2 + 10n + 25"},
            {problem: "(n - 4)^2", answer: "n^2 - 8n + 16"},
            {problem: "(p + 6)^2", answer: "p^2 + 12p + 36"},
            {problem: "(p - 7)^2", answer: "p^2 - 14p + 49"}
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
window.AlgebraLevels.expandingPerfectSquaresEasy = new ExpandingPerfectSquaresEasy();