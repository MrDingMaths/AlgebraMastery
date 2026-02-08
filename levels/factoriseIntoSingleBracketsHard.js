class FactoriseIntoSingleBracketsHardLevel {
    constructor() {
        this.questions = [
            // Higher powers and complex coefficients
            {problem: "6a^2 + 2a^3", answer: "2a^2(3 + a)"},
            {problem: "7ab - 28ab^2", answer: "7ab(1 - 4b)"},
            {problem: "20ab - 15ax", answer: "5a(4b - 3x)"},
            {problem: "21ya - 9ax", answer: "3a(7y - 3x)"},
            {problem: "a^2b + b^2a", answer: "ab(a + b)"},
            {problem: "ab^2 - a^2b", answer: "ab(b - a)"},
            {problem: "7x^3y - 14x^2y^2", answer: "7x^2y(x - 2y)"},
            {problem: "2x^2ya - 4xy", answer: "2xy(xa - 2)"},
            {problem: "-12x^2y - 12xy^2", answer: "-12xy(x + y)"},
            {problem: "6xya^2 - 3a^2", answer: "3a^2(2xy - 1)"},
            
            // Three terms
            {problem: "x^2y - 4xy + xy^2", answer: "xy(x - 4 + y)"},
            {problem: "6ab - 10a^2b + 8ab^2", answer: "2ab(3 - 5a + 4b)"},
            
            // Additional complex problems with higher powers
            {problem: "8x^3 + 12x^2", answer: "4x^2(2x + 3)"},
            {problem: "15y^4 - 25y^3", answer: "5y^3(3y - 5)"},
            {problem: "18a^3b - 12a^2b^2", answer: "6a^2b(3a - 2b)"},
            {problem: "24x^2y^2 + 16xy^3", answer: "8xy^2(3x + 2y)"},
            {problem: "35x^3y - 21x^2y^2", answer: "7x^2y(5x - 3y)"},
            {problem: "42x^2y^2 - 28xy^3", answer: "14xy^2(3x - 2y)"},
            {problem: "48a^4 + 32a^3b", answer: "16a^3(3a + 2b)"},
            {problem: "54x^3y - 36x^2y^2", answer: "18x^2y(3x - 2y)"},
            {problem: "60x^2y^2 + 45xy^3", answer: "15xy^2(4x + 3y)"},
            {problem: "72x^3y^2 - 48x^2y^3", answer: "24x^2y^2(3x - 2y)"},
            
            // Multiple variables with coefficients
            {problem: "12abx + 18ab", answer: "6ab(2x + 3)"},
            {problem: "15xya - 25xy", answer: "5xy(3a - 5)"},
            {problem: "20xya + 16xy", answer: "4xy(5a + 4)"},
            {problem: "24xya - 32xy", answer: "8xy(3a - 4)"},
            {problem: "30xya + 45xy", answer: "15xy(2a + 3)"},
            {problem: "36xya - 42xy", answer: "6xy(6a - 7)"},
            {problem: "40xya + 50xy", answer: "10xy(4a + 5)"},
            {problem: "48xya - 56xy", answer: "8xy(6a - 7)"},
            
            // Negative leading terms with powers
            {problem: "-10x^3 - 15x^2", answer: "-5x^2(2x + 3)"},
            {problem: "-12y^2x - 8yx^2", answer: "-4yx(3y + 2x)"},
            {problem: "-18a^2b^2 - 24ab^3", answer: "-6ab^2(3a + 4b)"},
            {problem: "-21x^3y - 14x^2y^2", answer: "-7x^2y(3x + 2y)"},
            {problem: "-27x^2y^2 - 18xy^3", answer: "-9xy^2(3x + 2y)"},
            {problem: "-30x^3y - 45x^2y^2", answer: "-15x^2y(2x + 3y)"},
            {problem: "-35x^2y^3 - 28xy^4", answer: "-7xy^3(5x + 4y)"},
            {problem: "-40a^3b - 50a^2b^2", answer: "-10a^2b(4a + 5b)"},
            
            // Complex three-term factoring
            {problem: "2a^2b + 4ab - 6ab^2", answer: "2ab(a + 2 - 3b)"},
            {problem: "3x^2y - 9xy + 12xy^2", answer: "3xy(x - 3 + 4y)"},
            {problem: "4x^2y + 8xy - 16xy^2", answer: "4xy(x + 2 - 4y)"},
            {problem: "5x^2y - 15xy + 10xy^2", answer: "5xy(x - 3 + 2y)"},
            {problem: "6x^2y + 12xy - 18xy^2", answer: "6xy(x + 2 - 3y)"},
            {problem: "8x^2y - 24xy + 16xy^2", answer: "8xy(x - 3 + 2y)"},
            {problem: "9x^2y + 18xy - 27xy^2", answer: "9xy(x + 2 - 3y)"},
            {problem: "10a^2b - 30ab + 20ab^2", answer: "10ab(a - 3 + 2b)"},
            
            // Mixed variable powers
            {problem: "x^2y^2 + xy^3", answer: "xy^2(x + y)"},
            {problem: "a^3b - a^2b^2", answer: "a^2b(a - b)"},
            {problem: "x^2y^3 + xy^4", answer: "xy^3(x + y)"},
            {problem: "x^3y^2 - xy^4", answer: "xy^2(x^2 - y^2)"},
            {problem: "x^4y - x^3y^2", answer: "x^3y(x - y)"}
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
window.AlgebraLevels.factoriseIntoSingleBracketsHard = new FactoriseIntoSingleBracketsHardLevel();