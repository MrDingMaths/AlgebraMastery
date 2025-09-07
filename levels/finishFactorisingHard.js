// levels/finishFactorisingHard.js
class FinishFactorisingHard {
    constructor() {
        this.key = 'finishFactorisingHard';
        this.name = 'Finish Factorising (Hard)';
        this.usedQuestionIndices = new Set();
        
        this.questions = [
            // From provided questions - complex multi-step factorisation
            {problem: "(x + 3)(4x^2 + 8x + 4)", answer: "4(x + 3)(x + 1)^2"},
            {problem: "(x + 3)(4x^2 - 8x + 4)", answer: "4(x + 3)(x - 1)^2"},
            {problem: "5(x + 3)(4x^2 + 8x - 5)", answer: "5(x + 3)(2x - 1)(2x + 5)"},
            {problem: "5(x + 3)(4x^2 + 8x - 12)", answer: "20(x + 3)^2(x - 1)"},
            {problem: "(9x + 6)(15x + 10)", answer: "15(3x + 2)^2"},
            {problem: "2(9x + 6)(15x + 10)", answer: "30(3x + 2)^2"},
            {problem: "2(6x - 9x^2)(15x + 10)", answer: "30x(2 - 3x)(3x + 2)"},
            {problem: "2x^3(6x - 9x^2)(15x + 10)", answer: "30x^4(2 - 3x)(3x + 2)"},
            {problem: "(25a^2 - 1)(5a - 1)", answer: "(5a - 1)^2(5a + 1)"},
            {problem: "(x^2 - 8x + 16)(x - 4)", answer: "(x - 4)^3"},
            {problem: "(3x - 12)(x^2 - 16)", answer: "3(x - 4)^2(x + 4)"},
            {problem: "x^2(x^2 - 4) - 9(x^2 - 4)", answer: "(x - 2)(x + 2)(x - 3)(x + 3)"},
            
            // Additional questions for hard complexity progression
            {problem: "(x + 4)(9x^2 + 12x + 4)", answer: "(x + 4)(3x + 2)^2"},
            {problem: "3(x + 2)(16x^2 - 24x + 9)", answer: "3(x + 2)(4x - 3)^2"},
            {problem: "(y^2 - 10y + 25)(y - 5)", answer: "(y - 5)^3"},
            {problem: "4x(x^2 - 1)(3x + 6)", answer: "12x(x - 1)(x + 1)(x + 2)"},
            {problem: "(36b^2 - 1)(6b - 1)", answer: "(6b - 1)^2(6b + 1)"},
            {problem: "(2p + 6)(4p^2 - 12p + 9)", answer: "2(p + 3)(2p - 3)^2"},
            {problem: "x^2(x^2 - 4) - 9(x^2 - 4)", answer: "(x - 3)(x + 3)(x - 2)(x + 2)"},
            {problem: "5(m + 1)(25m^2 - 10m + 1)", answer: "5(m + 1)(5m - 1)^2"},
            {problem: "(t^2 - 6t + 9)(t - 3)", answer: "(t - 3)^3"},
            {problem: "2y^2(y^2 - 16)(5y - 10)", answer: "10y^2(y - 4)(y + 4)(y - 2)"},
            {problem: "(49k^2 - 4)(7k - 2)", answer: "(7k - 2)^2(7k + 2)"},
            {problem: "7(w + 5)(9w^2 + 30w + 25)", answer: "7(w + 5)(3w + 5)^2"},
            {problem: "(n^2 - 12n + 36)(n - 6)", answer: "(n - 6)^3"},
            {problem: "3z^3(z^2 - 25)(2z + 8)", answer: "6z^3(z - 5)(z + 5)(z + 4)"},
            {problem: "(64r^2 - 9)(8r - 3)", answer: "(8r - 3)^2(8r + 3)"},
            {problem: "4(s + 7)(16s^2 + 56s + 49)", answer: "4(s + 7)(4s + 7)^2"},
            {problem: "(v^2 - 14v + 49)(v - 7)", answer: "(v - 7)^3"},
            {problem: "6u^2(u^2 - 36)(3u - 15)", answer: "18u^2(u - 6)(u + 6)(u - 5)"},
            {problem: "(81q^2 - 16)(9q - 4)", answer: "(9q - 4)^2(9q + 4)"},
            {problem: "8(d + 8)(25d^2 + 80d + 64)", answer: "8(d + 8)(5d + 8)^2"},
            {problem: "(h^2 - 16h + 64)(h - 8)", answer: "(h - 8)^3"},
            {problem: "5j^3(j^2 - 49)(4j + 20)", answer: "20j^3(j - 7)(j + 7)(j + 5)"},
            {problem: "(100g^2 - 25)(10g - 5)", answer: "125(2g - 1)^2(2g + 1)"},
            {problem: "9(c + 9)(36c^2 + 108c + 81)", answer: "81(c + 9)(2c + 3)^2"},
            {problem: "(f^2 - 18f + 81)(f - 9)", answer: "(f - 9)^3"},
            {problem: "7e^2(e^2 - 64)(2e - 14)", answer: "14e^2(e - 8)(e + 8)(e - 7)"},
            {problem: "(121l^2 - 36)(11l - 6)", answer: "(11l - 6)^2(11l + 6)"},
            {problem: "6(x + 10)(49x^2 + 140x + 100)", answer: "6(x + 10)(7x + 10)^2"},
            {problem: "(y^2 - 20y + 100)(y - 10)", answer: "(y - 10)^3"},
            {problem: "8i^3(i^2 - 81)(3i + 24)", answer: "24i^3(i - 9)(i + 9)(i + 8)"},
            {problem: "(144a^2 - 49)(12a - 7)", answer: "(12a - 7)^2(12a + 7)"},
            {problem: "10(b + 11)(64b^2 + 176b + 121)", answer: "10(b + 11)(8b + 11)^2"},
            {problem: "(o^2 - 22o + 121)(o - 11)", answer: "(o - 11)^3"},
            {problem: "9p^2(p^2 - 100)(5p - 45)", answer: "45p^2(p - 10)(p + 10)(p - 9)"}
        ];
    }

    generateQuestion() {
        // Reset if all questions used
        if (this.usedQuestionIndices.size >= this.questions.length) {
            this.usedQuestionIndices.clear();
        }
        
        // Select random unused question
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

// Registration
window.AlgebraLevels = window.AlgebraLevels || {};
window.AlgebraLevels.finishFactorisingHard = new FinishFactorisingHard();