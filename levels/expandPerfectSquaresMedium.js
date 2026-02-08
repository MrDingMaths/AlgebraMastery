class ExpandPerfectSquaresMediumLevel {
    constructor() {
        this.key = 'expandPerfectSquaresMedium';
        this.name = 'Expanding Perfect Squares (Medium)';
        this.usedQuestionIndices = new Set();
        
        // Predefined questions covering medium complexity perfect square expansion
        this.questions = [
            // Basic coefficient perfect squares (ax + b)^2
            {problem: "(2x + 3)^2", answer: "4x^2 + 12x + 9"},
            {problem: "(2x + 5)^2", answer: "4x^2 + 20x + 25"},
            {problem: "(3x + 2)^2", answer: "9x^2 + 12x + 4"},
            {problem: "(5x + 2)^2", answer: "25x^2 + 20x + 4"},
            {problem: "(7 + 2x)^2", answer: "4x^2 + 28x + 49"},
            {problem: "(5 + 3x)^2", answer: "9x^2 + 30x + 25"},
            
            // Basic coefficient perfect squares with subtraction (ax - b)^2
            {problem: "(5x - 2)^2", answer: "25x^2 - 20x + 4"},
            {problem: "(7 - 2x)^2", answer: "4x^2 - 28x + 49"},
            {problem: "(5 - 3x)^2", answer: "9x^2 - 30x + 25"},
            {problem: "(2 - 3x)^2", answer: "9x^2 - 12x + 4"},
            {problem: "(9 - 2x)^2", answer: "4x^2 - 36x + 81"},
            {problem: "(10 - 4x)^2", answer: "16x^2 - 80x + 100"},
            
            // Two variables perfect squares (ax + by)^2
            {problem: "(3x + 5y)^2", answer: "9x^2 + 30xy + 25y^2"},
            {problem: "(7x + 3y)^2", answer: "49x^2 + 42xy + 9y^2"},
            {problem: "(4x - 9y)^2", answer: "16x^2 - 72xy + 81y^2"},
            {problem: "(3x - 10y)^2", answer: "9x^2 - 60xy + 100y^2"},
            {problem: "(4x - 6y)^2", answer: "16x^2 - 48xy + 36y^2"},
            {problem: "(6x + 5y)^2", answer: "36x^2 + 60xy + 25y^2"},
            
            // Prefactor with perfect squares
            {problem: "2(x + 3)^2", answer: "2x^2 + 12x + 18"},
            {problem: "4(x + 5)^2", answer: "4x^2 + 40x + 100"},
            {problem: "2(a - 7)^2", answer: "2a^2 - 28a + 98"},
            {problem: "-3(y + 5)^2", answer: "-3y^2 - 30y - 75"},
            {problem: "3(2b - 1)^2", answer: "12b^2 - 12b + 3"},
            {problem: "-3(2y - 6)^2", answer: "-12y^2 + 72y - 108"},
            
            // More two variable examples
            {problem: "(8x - 3y)^2", answer: "64x^2 - 48xy + 9y^2"},
            {problem: "(x + 12y)^2", answer: "x^2 + 24xy + 144y^2"},
            
            // Higher powers
            {problem: "(x^2 + 5)^2", answer: "x^4 + 10x^2 + 25"},
            {problem: "(x^3 - 1)^2", answer: "x^6 - 2x^3 + 1"},
            {problem: "(2 + x^5)^2", answer: "x^{10} + 4x^5 + 4"},
            {problem: "(y^4 - 3)^2", answer: "y^8 - 6y^4 + 9"},
            {problem: "(2x^2 + 1)^2", answer: "4x^4 + 4x^2 + 1"},
            {problem: "(3 - 2x^3)^2", answer: "4x^6 - 12x^3 + 9"},
            
            // Additional coefficient examples
            {problem: "(4x + 2y)^2", answer: "16x^2 + 16xy + 4y^2"},
            {problem: "(5a - 3b)^2", answer: "25a^2 - 30ab + 9b^2"},
            {problem: "(7x + 2y)^2", answer: "49x^2 + 28xy + 4y^2"},
            
            // More basic coefficient variations
            {problem: "(3x + 1)^2", answer: "9x^2 + 6x + 1"},
            {problem: "(2x - 1)^2", answer: "4x^2 - 4x + 1"},
            {problem: "(4x + 3)^2", answer: "16x^2 + 24x + 9"},
            {problem: "(3x - 4)^2", answer: "9x^2 - 24x + 16"},
            {problem: "(6x + 1)^2", answer: "36x^2 + 12x + 1"},
            {problem: "(5x - 1)^2", answer: "25x^2 - 10x + 1"},
            {problem: "(2y + 7)^2", answer: "4y^2 + 28y + 49"},
            {problem: "(3a - 5)^2", answer: "9a^2 - 30a + 25"},
            {problem: "(4x + 1)^2", answer: "16x^2 + 8x + 1"},
            {problem: "(6x - 5)^2", answer: "36x^2 - 60x + 25"},
            
            // Different variable combinations
            {problem: "(2a + 3b)^2", answer: "4a^2 + 12ab + 9b^2"},
            {problem: "(4x - 5y)^2", answer: "16x^2 - 40xy + 25y^2"},
            {problem: "(3x + 4y)^2", answer: "9x^2 + 24xy + 16y^2"},
            {problem: "(5x - 2y)^2", answer: "25x^2 - 20xy + 4y^2"},
            {problem: "(6x + y)^2", answer: "36x^2 + 12xy + y^2"},
            {problem: "(x - 7y)^2", answer: "x^2 - 14xy + 49y^2"},
            
            // Reverse order patterns
            {problem: "(1 + 2x)^2", answer: "4x^2 + 4x + 1"},
            {problem: "(3 + 4x)^2", answer: "16x^2 + 24x + 9"},
            {problem: "(2 - 5x)^2", answer: "25x^2 - 20x + 4"},
            {problem: "(4 - 3x)^2", answer: "9x^2 - 24x + 16"}
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
window.AlgebraLevels.expandPerfectSquaresMedium = new ExpandPerfectSquaresMediumLevel();