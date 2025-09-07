class BinomialFactorsHard {
    constructor() {
        this.key = 'binomialFactorsHard';
        this.name = 'Noticing Binomial Factors (Hard)';
        this.usedQuestionIndices = new Set();
        
        this.questions = [
            {problem: "3x(5x + 2)^2 - 2(5x + 2)", answer: "(5x + 2)(15x^2 + 6x - 2)"},
            {problem: "3x(7x - 1)^2 - 2(7x - 1)", answer: "(7x - 1)(21x^2 - 3x - 2)"},
            {problem: "25x(2x + 1)^2 + 15(2x + 1)", answer: "5(2x + 1)(10x^2 + 5x + 3)"},
            {problem: "25x(2x + 1) + 15(2x + 1)^2", answer: "5(2x + 1)(11x + 3)"},
            {problem: "50x(2x + 1) - 15(2x + 1)^2", answer: "5(2x + 1)(4x - 3)"},
            {problem: "25x(2x + 1)^3 - 15(2x + 1)^2", answer: "5(2x + 1)^2(10x^2 + 5x - 3)"},
            {problem: "5ax(2x + 1)^3 - 3a(2x + 1)^2", answer: "a(2x + 1)^2(10x^2 + 5x - 3)"},
            {problem: "5x\\sqrt{2x + 1} - 3\\sqrt{2x + 1}", answer: "(5x - 3)\\sqrt{2x + 1}"},
            {problem: "5x(2x - 1)^2 - 3x(1 - 2x)", answer: "2x(2x - 1)(5x - 1)"},
            {problem: "5x(2x + 1)(5x - 2) - 3(2x + 1)^2(5x - 2)^2", answer: "(2x + 1)(5x - 2)(-30x^2 + 2x + 6)"},
            
            // Additional generated questions for variety and complexity
            {problem: "4x(3x + 1)^2 - 3(3x + 1)", answer: "(3x + 1)(12x^2 + 4x - 3)"},
            {problem: "2x(4x - 3)^2 + 5(4x - 3)", answer: "(4x - 3)(8x^2 - 6x + 5)"},
            {problem: "18x(x + 2)^2 - 12(x + 2)", answer: "6(x + 2)(3x^2 + 6x - 2)"},
            {problem: "15x(3x - 1) + 9(3x - 1)^2", answer: "3(3x - 1)(14x - 3)"},
            {problem: "28x(x + 3) - 14(x + 3)^2", answer: "14(x + 3)(x - 3)"},
            {problem: "36x(x - 2)^3 - 24(x - 2)^2", answer: "12(x - 2)^2(3x^2 - 6x - 2)"},
            {problem: "7bx(x + 4)^3 - 5b(x + 4)^2", answer: "b(x + 4)^2(7x^2 + 28x - 5)"},
            {problem: "3x\\sqrt{3x - 2} + 7\\sqrt{3x - 2}", answer: "(3x + 7)\\sqrt{3x - 2}"},
            {problem: "8x(x + 1)^2 + 5x(1 + x)", answer: "x(x + 1)(8x + 13)"},
            {problem: "6x(3x + 2)(x - 1) - 4(3x + 2)^2(x - 1)^2", answer: "2(3x + 2)(x - 1)(-6x^2 + 5x + 4)"},
            {problem: "5x(2x + 3)^2 - 7(2x + 3)", answer: "(2x + 3)(10x^2 + 15x - 7)"},
            {problem: "6x(x - 4)^2 + 2(x - 4)", answer: "2(x - 4)(3x^2 - 12x + 1)"},
            {problem: "20x(2x + 5)^2 + 35(2x + 5)", answer: "5(2x + 5)(8x^2 + 20x + 7)"},
            {problem: "12x(4x - 1) - 18(4x - 1)^2", answer: "6(4x - 1)(-10x + 3)"},
            {problem: "45x(x + 1) + 27(x + 1)^2", answer: "9(x + 1)(8x + 3)"},
            {problem: "48x(2x - 3)^3 + 32(2x - 3)^2", answer: "16(2x - 3)^2(6x^2 - 9x + 2)"},
            {problem: "9cx(3x + 1)^3 + 6c(3x + 1)^2", answer: "3c(3x + 1)^2(9x^2 + 3x + 2)"},
            {problem: "7x\\sqrt{x + 5} - 4\\sqrt{x + 5}", answer: "(7x - 4)\\sqrt{x + 5}"},
            {problem: "10x(x - 3)^2 - 8x(3 - x)", answer: "2x(x - 3)(5x - 11)"},
            {problem: "8x(x + 2)(2x - 1) + 12(x + 2)^2(2x - 1)^2", answer: "4(x + 2)(2x - 1)(6x^2 + 11x - 6)"},
            {problem: "9x(x + 6)^2 + 4(x + 6)", answer: "(x + 6)(9x^2 + 54x + 4)"},
            {problem: "7x(3x - 5)^2 - 11(3x - 5)", answer: "(3x - 5)(21x^2 - 35x - 11)"},
            {problem: "24x(x + 7)^2 - 16(x + 7)", answer: "8(x + 7)(3x^2 + 21x - 2)"},
            {problem: "35x(2x - 7) + 21(2x - 7)^2", answer: "7(2x - 7)(11x - 21)"},
            {problem: "42x(x - 5) - 28(x - 5)^2", answer: "14(x - 5)(x + 10)"},
            {problem: "54x(x + 8)^3 - 36(x + 8)^2", answer: "18(x + 8)^2(3x^2 + 24x - 2)"},
            {problem: "11dx(2x + 3)^3 - 7d(2x + 3)^2", answer: "d(2x + 3)^2(22x^2 + 33x - 7)"},
            {problem: "6x\\sqrt{2x - 1} + 9\\sqrt{2x - 1}", answer: "(6x + 9)\\sqrt{2x - 1}"},
            {problem: "12x(2x + 1)^2 - 15x(1 + 2x)", answer: "3x(2x + 1)(8x - 1)"},
            {problem: "10x(x - 6)(3x + 2) - 15(x - 6)^2(3x + 2)^2", answer: "5(x - 6)(3x + 2)(-9x^2 + 50x + 36)"},
            {problem: "13x(4x + 7)^2 + 8(4x + 7)", answer: "(4x + 7)(52x^2 + 91x + 8)"},
            {problem: "9x(x - 8)^2 - 5(x - 8)", answer: "(x - 8)(9x^2 - 72x - 5)"},
            {problem: "30x(3x + 4)^2 + 45(3x + 4)", answer: "15(3x + 4)(6x^2 + 8x + 3)"},
            {problem: "56x(x - 9) + 28(x - 9)^2", answer: "84(x - 9)(x - 3)"},
            {problem: "9x(2x + 1) - 6(2x + 1)^2", answer: "-3(2x + 1)(x + 2)"},
            {problem: "36x(x + 10)^3 + 24(x + 10)^2", answer: "12(x + 10)^2(3x^2 + 30x + 2)"},
            {problem: "13ex(3x - 2)^3 + 9e(3x - 2)^2", answer: "e(3x - 2)^2(39x^2 - 26x + 9)"},
            {problem: "8x\\sqrt{4x + 3} - 12\\sqrt{4x + 3}", answer: "(8x - 12)\\sqrt{4x + 3}"},
            {problem: "14x(3x - 4)^2 + 21x(4 - 3x)", answer: "7x(3x - 4)(6x - 11)"},
            {problem: "16x(2x - 5)(x + 3) + 24(2x - 5)^2(x + 3)^2", answer: "8(2x - 5)(x + 3)(6x^2 + 5x - 45)"}
        ];
    }

    generateQuestion() {
        if (this.usedQuestionIndices.size >= this.questions.length) {
            this.usedQuestionIndices.clear();
        }
        
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

window.AlgebraLevels = window.AlgebraLevels || {};
window.AlgebraLevels.binomialFactorsHard = new BinomialFactorsHard();