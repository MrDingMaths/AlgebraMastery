class ExpansionMedium {
    constructor() {
        this.key = 'expansionMedium';
        this.name = 'Expanding Brackets (Medium)';
        this.usedQuestionIndices = new Set();
        
        // Predefined questions covering medium-level expansion
        this.questions = [
            
            // Negative coefficients outside brackets
            {problem: "-2(x + 3)", answer: "-2x - 6"},
            {problem: "-3(a + 4)", answer: "-3a - 12"},
            {problem: "-4(b + 2)", answer: "-4b - 8"},
            {problem: "-5(y + 1)", answer: "-5y - 5"},
            {problem: "-2(m - 3)", answer: "-2m + 6"},
            {problem: "-3(p - 4)", answer: "-3p + 12"},
            {problem: "-4(x - 2)", answer: "-4x + 8"},
            {problem: "-6(n - 1)", answer: "-6n + 6"},
            {problem: "-5(z + 6)", answer: "-5z - 30"},
            {problem: "-7(r - 3)", answer: "-7r + 21"},
            
            // Mixed positive and negative terms in brackets
            {problem: "3(2x - 5)", answer: "6x - 15"},
            {problem: "4(3a - 2)", answer: "12a - 8"},
            {problem: "5(2b + 7)", answer: "10b + 35"},
            {problem: "2(4y - 3)", answer: "8y - 6"},
            {problem: "6(3m + 1)", answer: "18m + 6"},
            {problem: "3(5p - 4)", answer: "15p - 12"},
            {problem: "4(2x + 9)", answer: "8x + 36"},
            {problem: "7(3n - 2)", answer: "21n - 14"},
            {problem: "2(6z + 5)", answer: "12z + 10"},
            {problem: "5(4r - 7)", answer: "20r - 35"},
            
            // Variable coefficients with negatives
            {problem: "-x(x + 4)", answer: "-x^2 - 4x"},
            {problem: "-a(a - 3)", answer: "-a^2 + 3a"},
            {problem: "-b(b + 5)", answer: "-b^2 - 5b"},
            {problem: "-y(y - 2)", answer: "-y^2 + 2y"},
            {problem: "-2x(x + 3)", answer: "-2x^2 - 6x"},
            {problem: "-3a(a - 1)", answer: "-3a^2 + 3a"},
            {problem: "-4b(b + 2)", answer: "-4b^2 - 8b"},
            {problem: "-5y(y - 4)", answer: "-5y^2 + 20y"},
            {problem: "-2m(m + 6)", answer: "-2m^2 - 12m"},
            {problem: "-3p(p - 5)", answer: "-3p^2 + 15p"},
            
            // Variable multiplying multi-term expressions
            {problem: "x(2y + 3)", answer: "2xy + 3x"},
            {problem: "a(3b - 4)", answer: "3ab - 4a"},
            {problem: "m(2n + 5)", answer: "2mn + 5m"},
            {problem: "p(4q - 1)", answer: "4pq - p"},
            {problem: "x(y - 6)", answer: "xy - 6x"},
            {problem: "a(2b + 7)", answer: "2ab + 7a"},
            {problem: "m(3n - 2)", answer: "3mn - 2m"},
            {problem: "r(s + 8)", answer: "rs + 8r"},
            {problem: "t(2u - 9)", answer: "2tu - 9t"},
            {problem: "v(3w + 4)", answer: "3vw + 4v"},
            
            // Higher coefficient combinations
            {problem: "6(2x^2 + 3x)", answer: "12x^2 + 18x"},
            {problem: "4(3a^2 - 2a)", answer: "12a^2 - 8a"},
            {problem: "5(2b^2 + 4b)", answer: "10b^2 + 20b"},
            {problem: "3(4y^2 - 5y)", answer: "12y^2 - 15y"},
            {problem: "7(2m^2 + m)", answer: "14m^2 + 7m"},
            {problem: "2(5p^2 - 3p)", answer: "10p^2 - 6p"},
            {problem: "8(x^2 + 2x)", answer: "8x^2 + 16x"},
            {problem: "3(6n^2 - 4n)", answer: "18n^2 - 12n"},
            {problem: "9(2z^2 + 3z)", answer: "18z^2 + 27z"},
            {problem: "4(3r^2 - 7r)", answer: "12r^2 - 28r"},
            
            // Negative terms with variables
            {problem: "-2(3x + y)", answer: "-6x - 2y"},
            {problem: "-3(a - 2b)", answer: "-3a + 6b"},
            {problem: "-4(2m + 3n)", answer: "-8m - 12n"},
            {problem: "-5(p - 4q)", answer: "-5p + 20q"},
            {problem: "-6(2x - y)", answer: "-12x + 6y"},
            {problem: "-2(4a + 3b)", answer: "-8a - 6b"},
            {problem: "-7(m - 2n)", answer: "-7m + 14n"},
            {problem: "-3(5r + s)", answer: "-15r - 3s"},
            {problem: "-4(2t - 3u)", answer: "-8t + 12u"},
            {problem: "-8(x + 2v)", answer: "-8x - 16v"},
            
            // Complex mixed expressions
            {problem: "3x(2x - 4)", answer: "6x^2 - 12x"},
            {problem: "2a(3a + 5)", answer: "6a^2 + 10a"},
            {problem: "4b(b - 3)", answer: "4b^2 - 12b"},
            {problem: "5y(2y + 1)", answer: "10y^2 + 5y"},
            {problem: "3m(4m - 7)", answer: "12m^2 - 21m"},
            {problem: "6p(p + 2)", answer: "6p^2 + 12p"},
            {problem: "2x(5x - 3)", answer: "10x^2 - 6x"},
            {problem: "7n(2n + 4)", answer: "14n^2 + 28n"},
            {problem: "4z(3z - 1)", answer: "12z^2 - 4z"},
            {problem: "5r(2r + 6)", answer: "10r^2 + 30r"},

            //Textbook questions
            {problem: "-3(x - 2)", answer: "-3x + 6"},
            {problem: "-2(x - 3)", answer: "-2x + 6"},
            {problem: "-3(x + 2)", answer: "-3x - 6"},
            {problem: "-2(x + 3)", answer: "-2x - 6"},
            {problem: "-(x - 2)", answer: "-x + 2"},
            {problem: "-(2 - x)", answer: "-2 + x"},
            {problem: "-(x + 3)", answer: "-x - 3"},
            {problem: "3(x + y)", answer: "3x + 3y"},
            {problem: "-2(p - q)", answer: "-2p + 2q"},
            {problem: "4(a + 2b)", answer: "4a + 8b"},
            {problem: "x(x - 7)", answer: "x^2 - 7x"},
            {problem: "5(a + 3b - 2c)", answer: "5a + 15b - 10c"},
            {problem: "-5(4 + b)", answer: "-20 - 5b"},
            {problem: "-2(y - 3)", answer: "-2y + 6"},
            {problem: "-7(a + c)", answer: "-7a - 7c"},
            {problem: "-6(-m - 3)", answer: "6m + 18"},
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
            {problem: "3(4m - 5)", answer: "12m - 15"},
            {problem: "-8(2x + 5)", answer: "-16x - 40"},
            {problem: "-3(4x + 5)", answer: "-12x - 15"},
            {problem: "a(3a + 4)", answer: "3a^2 + 4a"},
            {problem: "d(2d - 5)", answer: "2d^2 - 5d"},
            {problem: "-2b(3b - 5)", answer: "-6b^2 + 10b"},
            {problem: "2x(4x + 1)", answer: "8x^2 + 2x"},
            {problem: "5y(1 - 3y)", answer: "5y - 15y^2"},
            {problem: "5(3x + 2)", answer: "15x + 10"},
            {problem: "7(2x + 1)", answer: "14x + 7"},
            {problem: "6(3x + 5)", answer: "18x + 30"},
            {problem: "10(4x + 3)", answer: "40x + 30"},
            {problem: "3(2a + 5)", answer: "6a + 15"},
            {problem: "5(3t + 4)", answer: "15t + 20"},
            {problem: "8(2m + 4)", answer: "16m + 32"},
            {problem: "4(3 - 2j)", answer: "12 - 8j"},
            {problem: "6(2k - 5)", answer: "12k - 30"},
            {problem: "4(3m - 1)", answer: "12m - 4"},
            {problem: "-5(9 + g)", answer: "-45 - 5g"},
            {problem: "-7(5b + 4)", answer: "-35b - 28"},
            {problem: "-9(u - 9)", answer: "-9u + 81"},
            {problem: "-8(5 - h)", answer: "-40 + 8h"},
            {problem: "10(6g - 7)", answer: "60g - 70"},
            {problem: "5(3e + 8)", answer: "15e + 40"},
            {problem: "5(7w + 10)", answer: "35w + 50"},
            {problem: "5(2u + 5)", answer: "10u + 25"},
            {problem: "7(8x - 2)", answer: "56x - 14"},
            {problem: "3(9v - 4)", answer: "27v - 12"},
            {problem: "4(5c - v)", answer: "20c - 4v"},
            {problem: "2(2u + 6)", answer: "4u + 12"},
            {problem: "6(8l + 8)", answer: "48l + 48"},
            {problem: "d(x + 9s)", answer: "dx + 9ds"},
            {problem: "i(n + 4w)", answer: "in + 4iw"},
            {problem: "f(2u + v)", answer: "2fu + fv"},
            
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
            {problem: "3x(x-2)", answer: "3x^2 - 6x"},
            {problem: "-3x(2-x)", answer: "3x^2 - 6x"},
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
window.AlgebraLevels.expansionMedium = new ExpansionMedium();