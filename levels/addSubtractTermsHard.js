// levels/addSubtractTermsHard.js
class AddSubtractTermsHardLevel {
    constructor() {
        this.key = 'addSubtractTermsHard';
        this.name = 'Like Terms (Hard)';
        this.usedQuestionIndices = new Set();
        
        // Hard difficulty like terms questions
        this.questions = [
            // Complex multi-variable expressions
            {problem: "5x + 3y - 2x + 7y", answer: "3x + 10y"},
            {problem: "8a - 4b + 6a - 9b", answer: "14a - 13b"},
            {problem: "12x + 7y - 8x + 5y", answer: "4x + 12y"},
            {problem: "9x - 6y - 3x + 11y", answer: "6x + 5y"},
            {problem: "15x + 4y + 8x - 12y", answer: "23x - 8y"},
            {problem: "7x - 9y - 2x + 15y", answer: "5x + 6y"},
            {problem: "11x + 8y + 6x - 14y", answer: "17x - 6y"},
            
            // Mixed powers with same variable
            {problem: "3x^2 + 5x + 2x^2 - 7x", answer: "5x^2 - 2x"},
            {problem: "7a^2 - 4a - (-9a^2) + 8a", answer: "16a^2 + 4a"},
            {problem: "6b^2 + 11b - 2b^2 - 5b", answer: "4b^2 + 6b"},
            {problem: "8y^2 - 9y + 4y^2 + 12y", answer: "12y^2 + 3y"},
            {problem: "5x^2 + 7x - 8x^2 - 3x", answer: "-3x^2 + 4x"},
            {problem: "12x^2 - 6x + 3x^2 + 15x", answer: "15x^2 + 9x"},
            {problem: "9x² + 14x - 5x² - 8x", answer: "4x² + 6x"},
            
            // Complex expressions with fractional results
            {problem: "5x - 3x + 2x - x", answer: "3x"},
            {problem: "8a + 7a - 9a - 4a", answer: "2a"},
            {problem: "12b - 8b + 3b - 5b", answer: "2b"},
            {problem: "14x - 7x - (-9x) - 15x", answer: "x"},
            {problem: "11x + 13x - 16x - 8x", answer: "0"},
            {problem: "17x - 9x + 4x - 12x", answer: "0"},
            {problem: "22x + 8x - 15x - 15x", answer: "0"},
            
            // Negative leading coefficients
            {problem: "-7x + 3y - 4x + 8y", answer: "-11x + 11y"},
            {problem: "-9a - 5b + 12a - 6b", answer: "3a - 11b"},
            {problem: "-11x + 8y + 6x - 3y", answer: "-5x + 5y"},
            {problem: "-6x - 9y - 4x + 15y", answer: "-10x + 6y"},
            {problem: "-12x + 7y + 8x - 11y", answer: "-4x - 4y"},
            {problem: "-8x - 6y - 5x + 14y", answer: "-13x + 8y"},
            {problem: "-18x - 4y + 11x + 13y", answer: "-7x + 9y"},
                        
            // ADD YOUR TEXTBOOK QUESTIONS HERE using the format:
            {problem: "8a + b - 4b - 7a", answer: "a - 3b"},
            {problem: "2ab^2 - 5ab^2 - 3ab^2", answer: "-6ab^2"},
            {problem: "x^2 - 5x - x + 12", answer: "x^2 - 6x + 12"},
            {problem: "x^2 - 7x + 5x - 6", answer: "x^2 - 2x - 6"},
            {problem: "ab + 2b - 3ab + 8b", answer: "-2ab + 10b"},
            {problem: "ab + bx - ab - ax + bx", answer: "2bx - ax"},
            {problem: "4x - (-3x)", answer: "7x"},
            {problem: "-5abx - (-2abx)", answer: "-3abx"},
            {problem: "4x^2y - 7yx^2", answer: "-3x^2y"},
            {problem: "0.3a^2b - ba^2", answer: "-0.7a^2b"},
            {problem: "0.2ab^2 - 2b^2a", answer: "-1.8ab^2"},
            {problem: "4a + 5b - a + 2b", answer: "3a + 7b"},
            {problem: "3xy - 4x + 5xy - 3x", answer: "8xy - 7x"},
            {problem: "2ab^2 + 5a^2b - ab^2 + 5ba^2", answer: "ab^2 + 10a^2b"},
            {problem: "3xy - 7x^2y + 6yx^2 - xy", answer: "2xy - x^2y"},
            {problem: "2a + 4b + 3a + 5b", answer: "5a + 9b"},
            {problem: "4x + 3y + 2x + 2y", answer: "6x + 5y"},
            {problem: "xy + 8x + 4xy - 4x", answer: "5xy + 4x"},
            {problem: "3xy - 4 + 4yx - 5", answer: "7xy - 9"},
            {problem: "4ab + 2a + ab - 3a", answer: "5ab - a"},
            {problem: "3xy - 8yx + 2xy + 3yx", answer: "0"},
            {problem: "8x^2y - 6yx^2 + x^2y", answer: "3x^2y"},
            {problem: "7x^2y^2 - 2x^2y^2 - 4x^2y^2", answer: "x^2y^2"},
            {problem: "2x^2y - 4xy^2 + 5yx^2", answer: "7x^2y - 4xy^2"},
            {problem: "10xy^2 + 3xy^2 - 6x^2y", answer: "13xy^2 - 6x^2y"},
            {problem: "x^2 - 7x - 3x^2", answer: "-2x^2 - 7x"},
            {problem: "a^2b - 4ab^2 + 3a^2b + b^2a", answer: "4a^2b - 3ab^2"},
            {problem: "10xy^2 - 2yx - 3xy^2 - 6xy", answer: "7xy^2 - 8xy"},
            {problem: "12x^2y^2 - 2xy^2 - 4x^2y^2 + xy^2", answer: "8x^2y^2 - xy^2"},
            {problem: "10x + 3x + 5y + 3y", answer: "13x + 8y"},
            {problem: "2a + 5a + 13b - 2b", answer: "7a + 11b"},
            {problem: "10a + 5b + 3a + 4b", answer: "13a + 9b"},
            {problem: "10a + 3 + 4b - 2a - b", answer: "8a + 3b + 3"},
            {problem: "10x + 31y - y + 4x", answer: "14x + 30y"},
            {problem: "7x^2y + 5x + 10yx^2", answer: "17x^2y + 5x"},
            {problem: "-2a + 4b - 7ab + 4a", answer: "2a + 4b - 7ab"},
            {problem: "10 + 7x - 3y + 2x - y", answer: "10 + 9x - 4y"},
            {problem: "11b - 3b^2 + 5b^2 - 2b", answer: "9b + 2b^2"},
            {problem: "2a + a + 4b + b", answer: "3a + 5b"},
            {problem: "5a + 2a + b + 8b", answer: "7a + 9b"},
            {problem: "3x - 2x + 2y + 4y", answer: "x + 6y"},
            {problem: "3x + 7x + 3y - 4x + y", answer: "6x + 4y"},
            {problem: "10x + 4x + 31y - y", answer: "14x + 30y"},
            {problem: "10 + 7y + 5x + 5x + 2y", answer: "10x + 9y + 10"},
            {problem: "3b + 4b + x + 5b - x", answer: "12b"},
            {problem: "9xy + 2x - 3xy + 3x", answer: "6xy + 5x"},
            {problem: "2xy + 5yx - 3y + 2x", answer: "7xy - 3y + 2x"},
            {problem: "5xy + 12y + 4xy - 5y", answer: "9xy + 7y"},
            {problem: "7xy + 2x + 4yx - y", answer: "11xy + 2x - y"}
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
window.AlgebraLevels.addSubtractTermsHard = new AddSubtractTermsHardLevel();