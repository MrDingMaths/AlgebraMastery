// levels/finishFactorisingMedium.js
class FinishFactorisingMedium {
    constructor() {
        this.key = 'finishFactorisingMedium';
        this.name = 'Finish Factorising (Medium)';
        this.usedQuestionIndices = new Set();
        
        this.questions = [
            // From provided questions - more complex factorisation patterns
            {problem: "(x + 3)(x^2 + 10x + 16)", answer: "(x + 3)(x + 2)(x + 8)"},
            {problem: "(x + 3)(x^2 + 8x + 16)", answer: "(x + 3)(x + 4)^2"},
            {problem: "(x + 3)(4x^2 + 8x + 16)", answer: "4(x + 3)(x^2 + 2x + 4)"},
            {problem: "5(x + 3)(4x^2 + 8x)", answer: "20x(x + 3)(x + 2)"},
            {problem: "(9x + 6)(2x + 10)", answer: "6(3x + 2)(x + 5)"},
            {problem: "(9x + 6)(5x + 10)", answer: "15(3x + 2)(x + 2)"},
            {problem: "(4 - y^2)(y + 2)", answer: "(2 - y)(y + 2)^2"},
            {problem: "(1 - w^2)(w + 1)", answer: "(1 - w)(w + 1)^2"},
            {problem: "x^2 + 18x + 81", answer: "(x + 9)^2"},
            {problem: "4m^2 - 20m + 25", answer: "(2m - 5)^2"},
            {problem: "7(2x + 4)^2", answer: "28(x + 2)^2"},
            
            // Additional questions for medium complexity progression
            {problem: "(x + 2)(x^2 + 6x + 9)", answer: "(x + 2)(x + 3)^2"},
            {problem: "(x + 4)(x^2 + 4x + 4)", answer: "(x + 4)(x + 2)^2"},
            {problem: "3(x + 1)(2x^2 + 4x)", answer: "6x(x + 1)(x + 2)"},
            {problem: "(x + 5)(x^2 - 25)", answer: "(x + 5)^2(x - 5)"},
            {problem: "(2x + 8)(3x + 12)", answer: "6(x + 4)^2"},
            {problem: "y^2 + 16y + 64", answer: "(y + 8)^2"},
            {problem: "9p^2 - 30p + 25", answer: "(3p - 5)^2"},
            {problem: "(16 - x^2)(x + 4)", answer: "(4 - x)(x + 4)^2"},
            {problem: "(25 - a^2)(a + 5)", answer: "(5 - a)(a + 5)^2"},
            {problem: "4(x + 2)(3x^2 + 6x)", answer: "12x(x + 2)^2"},
            {problem: "(x + 6)(x^2 - 36)", answer: "(x + 6)^2(x - 6)"},
            {problem: "t^2 + 22t + 121", answer: "(t + 11)^2"},
            {problem: "16s^2 - 40s + 25", answer: "(4s - 5)^2"},
            {problem: "(49 - m^2)(m + 7)", answer: "(7 - m)(m + 7)^2"},
            {problem: "6(y + 3)(2y^2 + 12y + 18)", answer: "12(y + 3)^3"},
            {problem: "(x + 8)(x^2 + 10x + 25)", answer: "(x + 8)(x + 5)^2"},
            {problem: "k^2 + 24k + 144", answer: "(k + 12)^2"},
            {problem: "25n^2 - 60n + 36", answer: "(5n - 6)^2"},
            {problem: "(36 - w^2)(w + 6)", answer: "(6 - w)(w + 6)^2"},
            {problem: "8(p + 4)(p^2 + 8p + 16)", answer: "8(p + 4)^3"},
            {problem: "(x + 9)(x^2 + 12x + 36)", answer: "(x + 9)(x + 6)^2"},
            {problem: "r^2 + 26r + 169", answer: "(r + 13)^2"},
            {problem: "36v^2 - 84v + 49", answer: "(6v - 7)^2"},
            {problem: "(64 - z^2)(z + 8)", answer: "(8 - z)(z + 8)^2"},
            {problem: "10(q + 5)(2q^2 + 20q + 50)", answer: "20(q + 5)^3"},
            {problem: "(x + 10)(x^2 + 14x + 49)", answer: "(x + 10)(x + 7)^2"},
            {problem: "h^2 + 28h + 196", answer: "(h + 14)^2"},
            {problem: "49u^2 - 126u + 81", answer: "(7u - 9)^2"},
            {problem: "(81 - b^2)(b + 9)", answer: "(9 - b)(b + 9)^2"},
            {problem: "12(d + 6)(3d^2 + 36d + 108)", answer: "36(d + 6)^3"},
            {problem: "(x + 11)(x^2 + 16x + 64)", answer: "(x + 11)(x + 8)^2"},
            {problem: "g^2 + 30g + 225", answer: "(g + 15)^2"},
            {problem: "64f^2 - 176f + 121", answer: "(8f - 11)^2"},
            {problem: "(100 - c^2)(c + 10)", answer: "(10 - c)(c + 10)^2"}
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
window.AlgebraLevels.finishFactorisingMedium = new FinishFactorisingMedium();