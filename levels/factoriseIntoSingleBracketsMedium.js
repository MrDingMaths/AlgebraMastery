class FactoriseIntoSingleBracketsMediumLevel {
    constructor() {
        this.questions = [
            // Squared terms with coefficients
            {problem: "3x^2 + 3x", answer: "3x(x + 1)"},
            {problem: "4b^2 + 12b", answer: "4b(b + 3)"},
            {problem: "6b^2 - 18b", answer: "6b(b - 3)"},
            {problem: "6y - 10y^2", answer: "2y(3 - 5y)"},
            {problem: "8x - 8x^2", answer: "8x(1 - x)"},
            {problem: "9x + 18x^2", answer: "9x(1 + 2x)"},
            {problem: "10a - 5a^2", answer: "5a(2 - a)"},
            {problem: "12a - 15a^2", answer: "3a(4 - 5a)"},
            {problem: "12x^2 + 18x", answer: "6x(2x + 3)"},
            {problem: "12x - 30x^2", answer: "6x(2 - 5x)"},
            {problem: "14a^2 - 21a", answer: "7a(2a - 3)"},
            {problem: "15y^2 + 25y", answer: "5y(3y + 5)"},
            {problem: "16x^2 - 12x", answer: "4x(4x - 3)"},
            {problem: "18x + 12x^2", answer: "6x(3 + 2x)"},
            {problem: "20x^2 - 35x", answer: "5x(4x - 7)"},
            {problem: "24x - 16x^2", answer: "8x(3 - 2x)"},
            
            // Two variables - moderate complexity
            {problem: "ax - ay", answer: "a(x - y)"},
            {problem: "x^2 + 2xy", answer: "x(x + 2y)"},
            {problem: "3a^2 - 6ab", answer: "3a(a - 2b)"},
            {problem: "10xy + 12y", answer: "2y(5x + 6)"},
            {problem: "12x + 9xy", answer: "3x(4 + 3y)"},
            {problem: "14xy + 10y", answer: "2y(7x + 5)"},
            {problem: "16xy - 48x^2", answer: "16x(y - 3x)"},
            {problem: "20xy - 32x", answer: "4x(5y - 8)"},
            {problem: "24x + 20xy", answer: "4x(6 + 5y)"},
            {problem: "24y + 8xy", answer: "8y(3 + x)"},
            {problem: "40y + 56ay", answer: "8y(5 + 7a)"},
            {problem: "49x - 21bx", answer: "7x(7 - 3b)"},
            {problem: "28x - 42bx", answer: "14x(2 - 3b)"},
            {problem: "4xy + 8x", answer: "4x(y + 2)"},
            {problem: "6xy - 9x", answer: "3x(2y - 3)"},
            {problem: "15xy + 25x", answer: "5x(3y + 5)"},
            {problem: "18xy - 12x", answer: "6x(3y - 2)"},
            {problem: "21xy + 35x", answer: "7x(3y + 5)"},
            {problem: "27xy - 18x", answer: "9x(3y - 2)"},
            
            // Negative leading coefficients
            {problem: "-2x - x^2", answer: "-x(2 + x)"},
            {problem: "-4y - 2", answer: "-2(2y + 1)"},
            {problem: "-5x - 30", answer: "-5(x + 6)"},
            {problem: "-8x - 4", answer: "-4(2x + 1)"},
            {problem: "-4x - 2", answer: "-2(2x + 1)"},
            {problem: "-10x - 5y", answer: "-5(2x + y)"},
            {problem: "-7a - 14b", answer: "-7(a + 2b)"},
            {problem: "-9x - 12", answer: "-3(3x + 4)"},
            {problem: "-6y - 8", answer: "-2(3y + 4)"},
            {problem: "-10x - 15y", answer: "-5(2x + 3y)"},
            {problem: "-4x - 20y", answer: "-4(x + 5y)"},
            {problem: "-12a - 3", answer: "-3(4a + 1)"},
            {problem: "-3x^2 - 18x", answer: "-3x(x + 6)"},
            {problem: "-4y - 8y^2", answer: "-4y(1 + 2y)"},
            {problem: "-5a^2 - 10a", answer: "-5a(a + 2)"},
            {problem: "-6x - 20x^2", answer: "-2x(3 + 10x)"},
            {problem: "-6x - 15x^2", answer: "-3x(2 + 5x)"},
            {problem: "-8x^2 - 12x", answer: "-4x(2x + 3)"},
            {problem: "-9x - 27x^2", answer: "-9x(1 + 3x)"},
            {problem: "-16y^2 - 6y", answer: "-2y(8y + 3)"},
            {problem: "-16b - 8b^2", answer: "-8b(2 + b)"},
            {problem: "-2ab - bx", answer: "-b(2a + x)"},
            {problem: "-6xy - 3x", answer: "-3x(2y + 1)"},
            {problem: "-14xy - 7x", answer: "-7x(2y + 1)"},
            {problem: "-12xy - 18x", answer: "-6x(2y + 3)"},
            {problem: "-15xy - 5x", answer: "-5x(3y + 1)"}
        ];
    }

    getQuestions() {
        return this.questions;
    }

    generateQuestion() {
        const randomIndex = Math.floor(Math.random() * this.questions.length);
        return this.questions[randomIndex];
    }
}

// Register the level
window.AlgebraLevels = window.AlgebraLevels || {};
window.AlgebraLevels.factoriseIntoSingleBracketsMedium = new FactoriseIntoSingleBracketsMediumLevel();