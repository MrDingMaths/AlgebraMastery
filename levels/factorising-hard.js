class FactorisingHard {
    constructor() {
        this.questions = [
            // Higher powers and complex coefficients
            {problem: "6a^2 + 2a^3", answer: "2a^2(3 + a)"},
            {problem: "7ab - 28ab^2", answer: "7ab(1 - 4b)"},
            {problem: "20ab - 15ac", answer: "5a(4b - 3c)"},
            {problem: "21hm - 9mx", answer: "3m(7h - 3x)"},
            {problem: "a^2b + b^2a", answer: "ab(a + b)"},
            {problem: "ab^2 - a^2b", answer: "ab(b - a)"},
            {problem: "7x^3y - 14x^2y^2", answer: "7x^2y(x - 2y)"},
            {problem: "2x^2yz - 4xy", answer: "2xy(xz - 2)"},
            {problem: "-12m^2n - 12mn^2", answer: "-12mn(m + n)"},
            {problem: "6xyz^2 - 3z^2", answer: "3z^2(2xy - 1)"},
            
            // Three terms
            {problem: "x^2y - 4xy + xy^2", answer: "xy(x - 4 + y)"},
            {problem: "6ab - 10a^2b + 8ab^2", answer: "2ab(3 - 5a + 4b)"},
            
            // Additional complex problems with higher powers
            {problem: "8x^3 + 12x^2", answer: "4x^2(2x + 3)"},
            {problem: "15y^4 - 25y^3", answer: "5y^3(3y - 5)"},
            {problem: "18a^3b - 12a^2b^2", answer: "6a^2b(3a - 2b)"},
            {problem: "24m^2n^2 + 16mn^3", answer: "8mn^2(3m + 2n)"},
            {problem: "35p^3q - 21p^2q^2", answer: "7p^2q(5p - 3q)"},
            {problem: "42x^2y^2 - 28xy^3", answer: "14xy^2(3x - 2y)"},
            {problem: "48a^4 + 32a^3b", answer: "16a^3(3a + 2b)"},
            {problem: "54u^3v - 36u^2v^2", answer: "18u^2v(3u - 2v)"},
            {problem: "60r^2s^2 + 45rs^3", answer: "15rs^2(4r + 3s)"},
            {problem: "72x^3y^2 - 48x^2y^3", answer: "24x^2y^2(3x - 2y)"},
            
            // Multiple variables with coefficients
            {problem: "12abc + 18ab", answer: "6ab(2c + 3)"},
            {problem: "15xyz - 25xy", answer: "5xy(3z - 5)"},
            {problem: "20pqr + 16pq", answer: "4pq(5r + 4)"},
            {problem: "24def - 32de", answer: "8de(3f - 4)"},
            {problem: "30ghi + 45gh", answer: "15gh(2i + 3)"},
            {problem: "36jkl - 42jk", answer: "6jk(6l - 7)"},
            {problem: "40mno + 50mn", answer: "10mn(4o + 5)"},
            {problem: "48rst - 56rs", answer: "8rs(6t - 7)"},
            
            // Negative leading terms with powers
            {problem: "-10x^3 - 15x^2", answer: "-5x^2(2x + 3)"},
            {problem: "-12y^2z - 8yz^2", answer: "-4yz(3y + 2z)"},
            {problem: "-18a^2b^2 - 24ab^3", answer: "-6ab^2(3a + 4b)"},
            {problem: "-21m^3n - 14m^2n^2", answer: "-7m^2n(3m + 2n)"},
            {problem: "-27p^2q^2 - 18pq^3", answer: "-9pq^2(3p + 2q)"},
            {problem: "-30r^3s - 45r^2s^2", answer: "-15r^2s(2r + 3s)"},
            {problem: "-35x^2y^3 - 28xy^4", answer: "-7xy^3(5x + 4y)"},
            {problem: "-40a^3b - 50a^2b^2", answer: "-10a^2b(4a + 5b)"},
            
            // Complex three-term factoring
            {problem: "2a^2b + 4ab - 6ab^2", answer: "2ab(a + 2 - 3b)"},
            {problem: "3x^2y - 9xy + 12xy^2", answer: "3xy(x - 3 + 4y)"},
            {problem: "4m^2n + 8mn - 16mn^2", answer: "4mn(m + 2 - 4n)"},
            {problem: "5p^2q - 15pq + 10pq^2", answer: "5pq(p - 3 + 2q)"},
            {problem: "6r^2s + 12rs - 18rs^2", answer: "6rs(r + 2 - 3s)"},
            {problem: "8u^2v - 24uv + 16uv^2", answer: "8uv(u - 3 + 2v)"},
            {problem: "9x^2y + 18xy - 27xy^2", answer: "9xy(x + 2 - 3y)"},
            {problem: "10a^2b - 30ab + 20ab^2", answer: "10ab(a - 3 + 2b)"},
            
            // Mixed variable powers
            {problem: "x^2y^2 + xy^3", answer: "xy^2(x + y)"},
            {problem: "a^3b - a^2b^2", answer: "a^2b(a - b)"},
            {problem: "p^2q^3 + pq^4", answer: "pq^3(p + q)"},
            {problem: "m^3n^2 - mn^4", answer: "mn^2(m^2 - n^2)"},
            {problem: "r^2s^3 + rs^4", answer: "rs^3(r + s)"},
            {problem: "u^4v - u^3v^2", answer: "u^3v(u - v)"}
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
window.AlgebraLevels.factorisingHard = new FactorisingHard();