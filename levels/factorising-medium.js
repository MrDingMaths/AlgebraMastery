class FactorisingMedium {
    constructor() {
        this.questions = [
            // Squared terms with coefficients
            {problem: "3p^2 + 3p", answer: "3p(p + 1)"},
            {problem: "4b^2 + 12b", answer: "4b(b + 3)"},
            {problem: "6b^2 - 18b", answer: "6b(b - 3)"},
            {problem: "6y - 10y^2", answer: "2y(3 - 5y)"},
            {problem: "8x - 8x^2", answer: "8x(1 - x)"},
            {problem: "9m + 18m^2", answer: "9m(1 + 2m)"},
            {problem: "10a - 5a^2", answer: "5a(2 - a)"},
            {problem: "12a - 15a^2", answer: "3a(4 - 5a)"},
            {problem: "12x^2 + 18x", answer: "6x(2x + 3)"},
            {problem: "12x - 30x^2", answer: "6x(2 - 5x)"},
            {problem: "14a^2 - 21a", answer: "7a(2a - 3)"},
            {problem: "15y^2 + 25y", answer: "5y(3y + 5)"},
            {problem: "16t^2 - 12t", answer: "4t(4t - 3)"},
            {problem: "18k + 12k^2", answer: "6k(3 + 2k)"},
            {problem: "20m^2 - 35m", answer: "5m(4m - 7)"},
            {problem: "24n - 16n^2", answer: "8n(3 - 2n)"},
            
            // Two variables - moderate complexity
            {problem: "ax - ay", answer: "a(x - y)"},
            {problem: "p^2 + 2pq", answer: "p(p + 2q)"},
            {problem: "3a^2 - 6ab", answer: "3a(a - 2b)"},
            {problem: "10cn + 12n", answer: "2n(5c + 6)"},
            {problem: "12d + 9dz", answer: "3d(4 + 3z)"},
            {problem: "14jn + 10n", answer: "2n(7j + 5)"},
            {problem: "16xy - 48x^2", answer: "16x(y - 3x)"},
            {problem: "20cd - 32c", answer: "4c(5d - 8)"},
            {problem: "24g + 20gj", answer: "4g(6 + 5j)"},
            {problem: "24y + 8ry", answer: "8y(3 + r)"},
            {problem: "40y + 56ay", answer: "8y(5 + 7a)"},
            {problem: "49u - 21bu", answer: "7u(7 - 3b)"},
            {problem: "28u - 42bu", answer: "14u(2 - 3b)"},
            {problem: "4xy + 8x", answer: "4x(y + 2)"},
            {problem: "6mn - 9m", answer: "3m(2n - 3)"},
            {problem: "15pq + 25p", answer: "5p(3q + 5)"},
            {problem: "18rs - 12r", answer: "6r(3s - 2)"},
            {problem: "21st + 35s", answer: "7s(3t + 5)"},
            {problem: "27uv - 18u", answer: "9u(3v - 2)"},
            
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
            {problem: "-4m - 20n", answer: "-4(m + 5n)"},
            {problem: "-12a - 3", answer: "-3(4a + 1)"},
            {problem: "-3x^2 - 18x", answer: "-3x(x + 6)"},
            {problem: "-4y - 8y^2", answer: "-4y(1 + 2y)"},
            {problem: "-5a^2 - 10a", answer: "-5a(a + 2)"},
            {problem: "-6x - 20x^2", answer: "-2x(3 + 10x)"},
            {problem: "-6p - 15p^2", answer: "-3p(2 + 5p)"},
            {problem: "-8x^2 - 12x", answer: "-4x(2x + 3)"},
            {problem: "-9x - 27x^2", answer: "-9x(1 + 3x)"},
            {problem: "-16y^2 - 6y", answer: "-2y(8y + 3)"},
            {problem: "-16b - 8b^2", answer: "-8b(2 + b)"},
            {problem: "-2ab - bc", answer: "-b(2a + c)"},
            {problem: "-6xy - 3x", answer: "-3x(2y + 1)"},
            {problem: "-14mn - 7m", answer: "-7m(2n + 1)"},
            {problem: "-12pq - 18p", answer: "-6p(2q + 3)"},
            {problem: "-15rs - 5r", answer: "-5r(3s + 1)"}
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
window.AlgebraLevels.factorisingMedium = new FactorisingMedium();