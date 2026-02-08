class ExpandSingleBracketsHardLevel {
    constructor() {
        this.key = 'expandSingleBracketsHard';
        this.name = 'Expanding Brackets (Hard)';
        this.usedQuestionIndices = new Set();

        // Predefined questions covering single bracket expansion with trinomials and more complex terms.
        this.questions = [

            // Fractions as coefficients
            {problem: "\\frac{1}{2}(4x + 6)", answer: "2x + 3"},
            {problem: "\\frac{1}{3}(6a + 9)", answer: "2a + 3"},
            {problem: "\\frac{1}{4}(8b + 12)", answer: "2b + 3"},
            {problem: "\\frac{2}{3}(9y + 6)", answer: "6y + 4"},
            {problem: "\\frac{3}{4}(8x + 4)", answer: "6x + 3"},
            {problem: "\\frac{1}{2}(10x - 8)", answer: "5x - 4"},
            {problem: "\\frac{1}{5}(15x + 10)", answer: "3x + 2"},
            {problem: "\\frac{2}{5}(10x + 15)", answer: "4x + 6"},
            {problem: "\\frac{3}{2}(4x - 6)", answer: "6x - 9"},
            {problem: "\\frac{1}{6}(18x + 24)", answer: "3x + 4"},
            
            // Three terms in brackets
            {problem: "2(x + 3y + 4)", answer: "2x + 6y + 8"},
            {problem: "3(2a - b + 5)", answer: "6a - 3b + 15"},
            {problem: "4(x - 2y + 3)", answer: "4x - 8y + 12"},
            {problem: "5(2x + y - 4)", answer: "10x + 5y - 20"},
            {problem: "2(3x - y - 1)", answer: "6x - 2y - 2"},
            {problem: "3(x + 2y - 6)", answer: "3x + 6y - 18"},
            {problem: "4(2a + b + 3)", answer: "8a + 4b + 12"},

            // Positive constant multiplied by a trinomial
            { problem: "3(x^2 + 2x + 5)", answer: "3x^2 + 6x + 15" },
            { problem: "4(a^2 + 3a - 2)", answer: "4a^2 + 12a - 8" },
            { problem: "2(b^2 - 5b + 1)", answer: "2b^2 - 10b + 2" },
            { problem: "5(y^2 - y - 3)", answer: "5y^2 - 5y - 15" },
            { problem: "6(x^2 + 2x + 10)", answer: "6x^2 + 12x + 60" },

            // Negative constant multiplied by a trinomial
            { problem: "-2(x^2 + 4x + 1)", answer: "-2x^2 - 8x - 2" },
            { problem: "-3(a^2 + 2a - 6)", answer: "-3a^2 - 6a + 18" },
            { problem: "-4(b^2 - 3b + 2)", answer: "-4b^2 + 12b - 8" },
            { problem: "-5(y^2 - y - 7)", answer: "-5y^2 + 5y + 35" },
            { problem: "-1(x^2 - 8x + 9)", answer: "-x^2 + 8x - 9" },

            // Variable multiplied by a trinomial
            { problem: "x(x^2 + 3x + 2)", answer: "x^3 + 3x^2 + 2x" },
            { problem: "a(a^2 - 5a + 4)", answer: "a^3 - 5a^2 + 4a" },
            { problem: "b(2b^2 + b - 3)", answer: "2b^3 + b^2 - 3b" },
            { problem: "y(3y^2 - 4y - 1)", answer: "3y^3 - 4y^2 - y" },
            { problem: "x(-x^2 + 2x + 5)", answer: "-x^3 + 2x^2 + 5x" },

            // Term with coefficient and variable multiplied by a trinomial
            { problem: "2x(x^2 + 2x + 3)", answer: "2x^3 + 4x^2 + 6x" },
            { problem: "3a(a^2 - 4a + 5)", answer: "3a^3 - 12a^2 + 15a" },
            { problem: "4b(2b^2 - b - 1)", answer: "8b^3 - 4b^2 - 4b" },
            { problem: "5y(y^2 + 3y - 2)", answer: "5y^3 + 15y^2 - 10y" },
            { problem: "10x(2x^2 - 4x + 6)", answer: "20x^3 - 40x^2 + 60x" },
            
            // Negative term with coefficient and variable multiplied by a trinomial
            { problem: "-2x(x^2 - 3x + 4)", answer: "-2x^3 + 6x^2 - 8x" },
            { problem: "-3a(a^2 + a - 7)", answer: "-3a^3 - 3a^2 + 21a" },
            { problem: "-5x(2x^2 - 3x - 1)", answer: "-10x^3 + 15x^2 + 5x" },
            { problem: "-xy(x + y + 3)", answer: "-x^2y - xy^2 - 3xy" },
            { problem: "-ab(a - b + 1)", answer: "-a^2b + ab^2 - ab" },

            // Complex trinomials with multiple variables
            { problem: "2x(x^2 + xy + y^2)", answer: "2x^3 + 2x^2y + 2xy^2" },
            { problem: "3a(a^2 - 2ab + b^2)", answer: "3a^3 - 6a^2b + 3ab^2" },
            { problem: "4(2x^2 - 3xy + y^2)", answer: "8x^2 - 12xy + 4y^2" },
            { problem: "-x(x^2 + xy - y^2)", answer: "-x^3 - x^2y + xy^2" },
            { problem: "5xy(x + y - 1)", answer: "5x^2y + 5xy^2 - 5xy" },
            
            // Additional hard problems with multiple variables and complex coefficients
            {problem: "6(x-2y)", answer: "6x - 12y"},
            {problem: "6(5x-2y)", answer: "30x - 12y"},
            {problem: "-6(2y-5x)", answer: "30x - 12y"},
            {problem: "-6(2y-5x-7a)", answer: "30x - 12y + 42a"},
            {problem: "-6(5x-2y-7a)", answer: "-30x + 12y + 42a"},
            {problem: "-6(-5x-2y-7a)", answer: "30x + 12y + 42a"},
            {problem: "-(-5x-2y-7a)", answer: "5x + 2y + 7a"},
            {problem: "3x(x-2y)", answer: "3x^2 - 6xy"},
            {problem: "3x(5x-2y)", answer: "15x^2 - 6xy"},
            {problem: "-3x(2y-5x)", answer: "15x^2 - 6xy"},
            {problem: "-3x^2(2y-5x)", answer: "15x^3 - 6x^2y"},
            {problem: "-3y^2(2y-5x)", answer: "15xy^2 - 6y^3"},
            {problem: "-3y^2(2y-5xy)", answer: "15xy^3 - 6y^3"},
            {problem: "-3y^3(2-5x)", answer: "15xy^3 - 6y^3"},
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
window.AlgebraLevels.expandSingleBracketsHard = new ExpandSingleBracketsHardLevel();
