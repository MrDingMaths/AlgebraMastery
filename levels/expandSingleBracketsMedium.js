class ExpandSingleBracketsMediumLevel {
    constructor() {
        this.key = 'expandSingleBracketsMedium';
        this.name = 'Expanding Brackets (Medium)';
        this.usedQuestionIndices = new Set();
        
        // Predefined questions covering medium-level expansion
        this.questions = [
            
            // Negative coefficients outside brackets
            {problem: "-2(x + 3)", answer: "-2x - 6"},
            {problem: "-3(a + 4)", answer: "-3a - 12"},
            {problem: "-4(b + 2)", answer: "-4b - 8"},
            {problem: "-5(y + 1)", answer: "-5y - 5"},
            {problem: "-2(x - 3)", answer: "-2x + 6"},
            {problem: "-3(x - 4)", answer: "-3x + 12"},
            {problem: "-4(x - 2)", answer: "-4x + 8"},
            {problem: "-6(x - 1)", answer: "-6x + 6"},
            {problem: "-5(x + 6)", answer: "-5x - 30"},
            {problem: "-7(x - 3)", answer: "-7x + 21"},
            
            // Mixed positive and negative terms in brackets
            {problem: "3(2x - 5)", answer: "6x - 15"},
            {problem: "4(3a - 2)", answer: "12a - 8"},
            {problem: "5(2b + 7)", answer: "10b + 35"},
            {problem: "2(4y - 3)", answer: "8y - 6"},
            {problem: "6(3x + 1)", answer: "18x + 6"},
            {problem: "3(5x - 4)", answer: "15x - 12"},
            {problem: "4(2x + 9)", answer: "8x + 36"},
            {problem: "7(3x - 2)", answer: "21x - 14"},
            {problem: "2(6x + 5)", answer: "12x + 10"},
            {problem: "5(4x - 7)", answer: "20x - 35"},
            
            // Variable coefficients with negatives
            {problem: "-x(x + 4)", answer: "-x^2 - 4x"},
            {problem: "-a(a - 3)", answer: "-a^2 + 3a"},
            {problem: "-b(b + 5)", answer: "-b^2 - 5b"},
            {problem: "-y(y - 2)", answer: "-y^2 + 2y"},
            {problem: "-2x(x + 3)", answer: "-2x^2 - 6x"},
            {problem: "-3a(a - 1)", answer: "-3a^2 + 3a"},
            {problem: "-4b(b + 2)", answer: "-4b^2 - 8b"},
            {problem: "-5y(y - 4)", answer: "-5y^2 + 20y"},
            {problem: "-2x(x + 6)", answer: "-2x^2 - 12x"},
            {problem: "-3x(x - 5)", answer: "-3x^2 + 15x"},
            
            // Variable multiplying multi-term expressions
            {problem: "x(2y + 3)", answer: "2xy + 3x"},
            {problem: "a(3b - 4)", answer: "3ab - 4a"},
            {problem: "x(2y + 5)", answer: "2xy + 5x"},
            {problem: "x(4y - 1)", answer: "4xy - x"},
            {problem: "x(y - 6)", answer: "xy - 6x"},
            {problem: "a(2b + 7)", answer: "2ab + 7a"},
            {problem: "x(3y - 2)", answer: "3xy - 2x"},
            {problem: "x(y + 8)", answer: "xy + 8x"},
            {problem: "x(2y - 9)", answer: "2xy - 9x"},
            {problem: "x(3y + 4)", answer: "3xy + 4x"},
            
            // Higher coefficient combinations
            {problem: "6(2x^2 + 3x)", answer: "12x^2 + 18x"},
            {problem: "4(3a^2 - 2a)", answer: "12a^2 - 8a"},
            {problem: "5(2b^2 + 4b)", answer: "10b^2 + 20b"},
            {problem: "3(4y^2 - 5y)", answer: "12y^2 - 15y"},
            {problem: "7(2x^2 + x)", answer: "14x^2 + 7x"},
            {problem: "2(5x^2 - 3x)", answer: "10x^2 - 6x"},
            {problem: "8(x^2 + 2x)", answer: "8x^2 + 16x"},
            {problem: "3(6x^2 - 4x)", answer: "18x^2 - 12x"},
            {problem: "9(2x^2 + 3x)", answer: "18x^2 + 27x"},
            {problem: "4(3x^2 - 7x)", answer: "12x^2 - 28x"},
            
            // Negative terms with variables
            {problem: "-2(3x + y)", answer: "-6x - 2y"},
            {problem: "-3(a - 2b)", answer: "-3a + 6b"},
            {problem: "-4(2x + 3y)", answer: "-8x - 12y"},
            {problem: "-5(x - 4y)", answer: "-5x + 20y"},
            {problem: "-6(2x - y)", answer: "-12x + 6y"},
            {problem: "-2(4a + 3b)", answer: "-8a - 6b"},
            {problem: "-7(x - 2y)", answer: "-7x + 14y"},
            {problem: "-3(5x + y)", answer: "-15x - 3y"},
            {problem: "-4(2x - 3y)", answer: "-8x + 12y"},
            {problem: "-8(x + 2y)", answer: "-8x - 16y"},
            
            // Complex mixed expressions
            {problem: "3x(2x - 4)", answer: "6x^2 - 12x"},
            {problem: "2a(3a + 5)", answer: "6a^2 + 10a"},
            {problem: "4b(b - 3)", answer: "4b^2 - 12b"},
            {problem: "5y(2y + 1)", answer: "10y^2 + 5y"},
            {problem: "3x(4x - 7)", answer: "12x^2 - 21x"},
            {problem: "6x(x + 2)", answer: "6x^2 + 12x"},
            {problem: "2x(5x - 3)", answer: "10x^2 - 6x"},
            {problem: "7x(2x + 4)", answer: "14x^2 + 28x"},
            {problem: "4x(3x - 1)", answer: "12x^2 - 4x"},
            {problem: "5x(2x + 6)", answer: "10x^2 + 30x"},

            //Textbook questions
            {problem: "-3(x - 2)", answer: "-3x + 6"},
            {problem: "-3(x + 2)", answer: "-3x - 6"},
            {problem: "-(x - 2)", answer: "-x + 2"},
            {problem: "-(2 - x)", answer: "-2 + x"},
            {problem: "-(x + 3)", answer: "-x - 3"},
            {problem: "3(x + y)", answer: "3x + 3y"},
            {problem: "-2(x - y)", answer: "-2x + 2y"},
            {problem: "4(a + 2b)", answer: "4a + 8b"},
            {problem: "x(x - 7)", answer: "x^2 - 7x"},
            {problem: "5(a + 3b - 2x)", answer: "5a + 15b - 10x"},
            {problem: "-5(4 + b)", answer: "-20 - 5b"},
            {problem: "-2(y - 3)", answer: "-2y + 6"},
            {problem: "-7(a + x)", answer: "-7a - 7x"},
            {problem: "-6(-x - 3)", answer: "6x + 18"},
            {problem: "2x(x + 5)", answer: "2x^2 + 10x"},
            {problem: "6a(a - 4)", answer: "6a^2 - 24a"},
            {problem: "-2(x + 11)", answer: "-2x - 22"},
            {problem: "-5(x - 3)", answer: "-5x + 15"},
            {problem: "-6(x - 6)", answer: "-6x + 36"},
            {problem: "-4(2 - x)", answer: "-8 + 4x"},
            {problem: "-13(5 + x)", answer: "-65 - 13x"},
            {problem: "-20(9 + x)", answer: "-180 - 20x"},
            {problem: "-300(1 - x)", answer: "-300 + 300x"},
            {problem: "2(a + 2b)", answer: "2a + 4b"},
            {problem: "5(3a - 2)", answer: "15a - 10"},
            {problem: "3(4x - 5)", answer: "12x - 15"},
            {problem: "-8(2x + 5)", answer: "-16x - 40"},
            {problem: "-3(4x + 5)", answer: "-12x - 15"},
            {problem: "a(3a + 4)", answer: "3a^2 + 4a"},
            {problem: "x(2x - 5)", answer: "2x^2 - 5x"},
            {problem: "-2b(3b - 5)", answer: "-6b^2 + 10b"},
            {problem: "2x(4x + 1)", answer: "8x^2 + 2x"},
            {problem: "5y(1 - 3y)", answer: "5y - 15y^2"},
            {problem: "5(3x + 2)", answer: "15x + 10"},
            {problem: "7(2x + 1)", answer: "14x + 7"},
            {problem: "6(3x + 5)", answer: "18x + 30"},
            {problem: "10(4x + 3)", answer: "40x + 30"},
            {problem: "3(2a + 5)", answer: "6a + 15"},
            {problem: "5(3x + 4)", answer: "15x + 20"},
            {problem: "8(2x + 4)", answer: "16x + 32"},
            {problem: "4(3 - 2x)", answer: "12 - 8x"},
            {problem: "6(2x - 5)", answer: "12x - 30"},
            {problem: "4(3x - 1)", answer: "12x - 4"},
            {problem: "-5(9 + x)", answer: "-45 - 5x"},
            {problem: "-7(5b + 4)", answer: "-35b - 28"},
            {problem: "-9(x - 9)", answer: "-9x + 81"},
            {problem: "-8(5 - x)", answer: "-40 + 8x"},
            {problem: "10(6x - 7)", answer: "60x - 70"},
            {problem: "5(3x + 8)", answer: "15x + 40"},
            {problem: "5(7x + 10)", answer: "35x + 50"},
            {problem: "5(2x + 5)", answer: "10x + 25"},
            {problem: "7(8x - 2)", answer: "56x - 14"},
            {problem: "3(9x - 4)", answer: "27x - 12"},
            {problem: "4(5x - y)", answer: "20x - 4y"},
            {problem: "2(2x + 6)", answer: "4x + 12"},
            {problem: "6(8x + 8)", answer: "48x + 48"},
            {problem: "y(x + 9a)", answer: "yx + 9ya"},
            {problem: "x(y + 4a)", answer: "xy + 4xa"},
            {problem: "x(2y + a)", answer: "2xy + xa"},
            
            // Additional medium problems with negatives
            {problem: "3(-x-4)", answer: "-3x - 12"},
            {problem: "-3(x+4)", answer: "-3x - 12"},
            {problem: "-3(x-4)", answer: "-3x + 12"},
            {problem: "-3(2x-4)", answer: "-6x + 12"},
            {problem: "-3(4-2x)", answer: "6x - 12"},
            {problem: "-6(2-x)", answer: "6x - 12"},
            {problem: "x(-x-4)", answer: "-x^2 - 4x"},
            {problem: "-x(x+4)", answer: "-x^2 - 4x"},
            {problem: "-x(x-4)", answer: "-x^2 + 4x"},
            {problem: "-x(2x-4)", answer: "-2x^2 + 4x"},
            {problem: "-x(4-2x)", answer: "2x^2 - 4x"},
            {problem: "-3x(2-x)", answer: "3x^2 - 6x"},
            {problem: "3x(x-2)", answer: "3x^2 - 6x"},        ];
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
window.AlgebraLevels.expandSingleBracketsMedium = new ExpandSingleBracketsMediumLevel();