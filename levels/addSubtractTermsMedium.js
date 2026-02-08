// levels/addSubtractTermsMedium.js
class AddSubtractTermsMediumLevel {
    constructor() {
        this.key = 'addSubtractTermsMedium';
        this.name = 'Like Terms (Medium)';
        this.usedQuestionIndices = new Set();
        
        // Medium difficulty like terms questions
        this.questions = [
            // Linear terms with larger coefficients
            {problem: "7x + 8x", answer: "15x"},
            {problem: "12a - 5a", answer: "7a"},
            {problem: "9b + 6b", answer: "15b"},
            {problem: "15y - 8y", answer: "7y"},
            {problem: "11x + 4x", answer: "15x"},
            {problem: "18x - 9x", answer: "9x"},
            {problem: "13x - 7x", answer: "6x"},
            {problem: "20x - 12x", answer: "8x"},
            {problem: "14x + 9x", answer: "23x"},
            {problem: "25x - 16x", answer: "9x"},
            
            // Quadratic terms with larger coefficients
            {problem: "8x^2 + 7x^2", answer: "15x^2"},
            {problem: "12a^2 - 5a^2", answer: "7a^2"},
            {problem: "15b^2 + 9b^2", answer: "24b^2"},
            {problem: "18y^2 - 11y^2", answer: "7y^2"},
            {problem: "10x^2 + 13x^2", answer: "23x^2"},
            {problem: "22x^2 - 14x^2", answer: "8x^2"},
            {problem: "16x^2 + 7x^2", answer: "23x^2"},
            {problem: "25x^2 - 18x^2", answer: "7x^2"},
            {problem: "19x^2 + 12x^2", answer: "31x^2"},
            {problem: "30x^2 - 17x^2", answer: "13x^2"},
            
            // More complex mixed expressions
            {problem: "5x + 8 - 2x", answer: "3x + 8"},
            {problem: "12a - 7 + 3a", answer: "15a - 7"},
            {problem: "9b + 15 - 4b", answer: "5b + 15"},
            {problem: "7y - 12 + 8y", answer: "15y - 12"},
            {problem: "11x + 6 - 7x", answer: "4x + 6"},
            {problem: "18x - 9 - 5x", answer: "13x - 9"},
            {problem: "14x + 11 + 3x", answer: "17x + 11"},
            {problem: "20x - 15 - 8x", answer: "12x - 15"},
            {problem: "16x + 7 + 9x", answer: "25x + 7"},
            {problem: "22x - 18 - 6x", answer: "16x - 18"},
            
            // Four term expressions
            {problem: "3x + 5x - 2x + 4x", answer: "10x"},
            {problem: "8a - 3a + 6a - a", answer: "10a"},
            {problem: "7b + 2b - 4b + 8b", answer: "13b"},
            {problem: "12y - 5y - 3y + 9y", answer: "13y"},
            {problem: "9x + 4x + 7x - 5x", answer: "15x"},
            {problem: "15x - 8x + 3x - 6x", answer: "4x"},
            {problem: "11x - 7x + 12x - 4x", answer: "12x"},
            {problem: "18x + 5x - 9x + 2x", answer: "16x"},
            {problem: "13x - 6x - 2x + 11x", answer: "16x"},
            {problem: "20x + 8x - 12x - 3x", answer: "13x"},
            
            // Mixed with multiple constants
            {problem: "4x + 7 + 6x - 3", answer: "10x + 4"},
            {problem: "9a - 5 + 2a + 8", answer: "11a + 3"},
            {problem: "7b + 12 - 3b - 4", answer: "4b + 8"},
            {problem: "11y - 8 + 5y + 6", answer: "16y - 2"},
            {problem: "6x + 15 + 9x - 11", answer: "15x + 4"},
            {problem: "13x - 7 - 4x + 12", answer: "9x + 5"},
            {problem: "8x + 9 + 7x - 6", answer: "15x + 3"},
            {problem: "12x - 14 + 4x + 9", answer: "16x - 5"},
            {problem: "10x + 6 - 7x - 2", answer: "3x + 4"},
            {problem: "17x - 13 + 8x - 5", answer: "25x - 18"},
            
            // Negative coefficients
            {problem: "-3x + 8x", answer: "5x"},
            {problem: "7a - 12a", answer: "-5a"},
            {problem: "-9b - 4b", answer: "-13b"},
            {problem: "-6y + 15y", answer: "9y"},
            {problem: "11x - 18x", answer: "-7x"},
            {problem: "-8x - 7x", answer: "-15x"},
            {problem: "-5x + 13x", answer: "8x"},
            {problem: "9x - 17x", answer: "-8x"},
            {problem: "-12x - 3x", answer: "-15x"},
            {problem: "-4x + 19x", answer: "15x"},
            
            // Multiple variables (different types)
            {problem: "3x + 5y + 2x", answer: "5x + 5y"},
            {problem: "7a - 4b + 3a", answer: "10a - 4b"},
            {problem: "9x + 2y - 5x", answer: "4x + 2y"},
            {problem: "6x + 8y + 4x", answer: "10x + 8y"},
            {problem: "11x - 7y - 3x", answer: "8x - 7y"},
            {problem: "4x + 9y + 7x", answer: "11x + 9y"},
            {problem: "8x - 6y - 2x", answer: "6x - 6y"},
            {problem: "12x + 5y - 8x", answer: "4x + 5y"},
            {problem: "15a - 9b + 6a", answer: "21a - 9b"},
            {problem: "10x + 7y - 4x", answer: "6x + 7y"},
            
            // ADD YOUR TEXTBOOK QUESTIONS HERE using the format:
            {problem: "2x - 5x", answer: "-3x"},
            {problem: "-4y + 3y", answer: "-y"},
            {problem: "-2x - 3x", answer: "-5x"},
            {problem: "-4x + 7x", answer: "3x"},
            {problem: "4x - 3x - 2x", answer: "-x"},
            {problem: "x + 3x - 5x", answer: "-x"},
            {problem: "8x - x - 7x", answer: "0"},
            {problem: "3b - 5b + 4b + 9b", answer: "11b"},
            {problem: "-5x + 3x - x - 7x", answer: "-10x"},
            {problem: "6x - 5y - y", answer: "6x - 6y"},
            {problem: "xy + 2y + 3xy", answer: "4xy + 2y"},
            {problem: "-3x + x", answer: "-2x"},
            {problem: "-3x - x", answer: "-4x"},
            {problem: "-2a + 3a + 4a", answer: "5a"},
            {problem: "-2a - 3a + 4a", answer: "-a"},
            {problem: "-2a - 3a - 4a", answer: "-9a"},
            {problem: "-2a + 3a - 4a", answer: "-3a"},
            {problem: "2y - 3y", answer: "-y"},
            {problem: "-3a - 7a", answer: "-10a"},
            {problem: "-8b + 5b", answer: "-3b"},
            {problem: "-2ab - ba", answer: "-3ab"},
            {problem: "-3xy + 7xy", answer: "4xy"},
            {problem: "6a + 4a", answer: "10a"},
            {problem: "8x + 7x", answer: "15x"},
            {problem: "4a^2b - 2a^2b", answer: "2a^2b"},
            {problem: "5x^2y - 4x^2y", answer: "x^2y"},
            {problem: "3xy^2 - 4xy^2", answer: "-xy^2"},
            {problem: "7xy + 5xy - 3y", answer: "12xy - 3y"},
            {problem: "12y - 4y", answer: "8y"},
            {problem: "6ab - 2ab - ba", answer: "3ab"},
            {problem: "6xy + xy + 4y", answer: "7xy + 4y"},
            {problem: "5ab + 3 + 7ba", answer: "12ab + 3"},
            {problem: "2 - 5x - x", answer: "2 - 6x"},
            {problem: "6x + 5 - 2x + 1", answer: "4x + 6"},
            {problem: "5x + 1 + 6x + 3", answer: "11x + 4"},
            {problem: "5xy^2 - 4xy^2", answer: "xy^2"},
            {problem: "3a^2b + 4ba^2", answer: "7a^2b"},
            {problem: "7a + 12a", answer: "19a"},
            {problem: "15x - 6x", answer: "9x"},
            {problem: "16xy - 3xy", answer: "13xy"},
            {problem: "10ab + 4ab", answer: "14ab"},
            {problem: "11ab - 5ab + ab", answer: "7ab"},
            {problem: "3x + 15x - 2x", answer: "16x"},
            {problem: "15x - 2x - 3x", answer: "10x"},
            {problem: "7x + 2x + 8 + 4", answer: "9x + 12"},
            {problem: "10 + 5x + 2 + 7x", answer: "12x + 12"},
            {problem: "11a + 4 - 2a + 12a", answer: "21a + 4"},
            {problem: "12xy - 3yx + 5xy - yx", answer: "13xy"},
            {problem: "-4x^2 + 3x^2", answer: "-x^2"},
            {problem: "7x + 4 - 2x + 8", answer: "5x + 12"},
            {problem: "4a - 4 + 5b + b", answer: "4a + 6b - 4"},
            {problem: "10a + 3 + 4b - 2a", answer: "8a + 4b + 3"},
            {problem: "4 + 10x - 3x", answer: "4 + 7x"},
            {problem: "11a + 4 - 3a + 9", answer: "8a + 13"},
            {problem: "7ab + 32 - ab + 4", answer: "6ab + 36"}
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
window.AlgebraLevels.addSubtractTermsMedium = new AddSubtractTermsMediumLevel();