class BinomialFactorsMedium {
    constructor() {
        this.key = 'binomialFactorsMedium';
        this.name = 'Noticing Binomial Factors (Medium)';
        this.usedQuestionIndices = new Set();
        
        this.questions = [
            {problem: "x(x - 4) + 3(4 - x)", answer: "(x - 3)(x - 4)"},
            {problem: "x(x - 5) - 2(5 - x)", answer: "(x + 2)(x - 5)"},
            {problem: "x(x - 3) - 3(3 - x)", answer: "(x + 3)(x - 3)"},
            {problem: "3x(x - 4) + 5(4 - x)", answer: "(3x - 5)(x - 4)"},
            {problem: "3(2x - 5) + x(5 - 2x)", answer: "(3 - x)(2x - 5)"},
            {problem: "2x(x - 2) + (2 - x)", answer: "(2x - 1)(x - 2)"},
            {problem: "-4(3 - x) - x(x - 3)", answer: "(4 - x)(x - 3)"},
            {problem: "x(x - 5) + (10 - 2x)", answer: "(x - 2)(x - 5)"},
            {problem: "x(x - 3) + (6 - 2x)", answer: "(x - 2)(x - 3)"},
            {problem: "2x(1 - 2x) - (2x - 1)", answer: "(2x + 1)(1 - 2x)"},
            {problem: "(x + 3)^2 + 5(x + 3)", answer: "(x + 3)(x + 8)"},
            {problem: "(y + 1)^2 - 4(y + 1)", answer: "(y + 1)(y - 3)"},
            {problem: "(x + 4)^2 + 5(x + 4)", answer: "(x + 4)(x + 9)"},
            {problem: "25x(2x + 1) + 15(2x + 1)", answer: "5(2x + 1)(5x + 3)"},
            {problem: "25x(2x + 1) - 15(2x + 1)", answer: "5(2x + 1)(5x - 3)"},
            
            // Additional generated questions for variety
            {problem: "x(x - 6) + 4(6 - x)", answer: "(x - 4)(x - 6)"},
            {problem: "2x(x - 3) - 5(3 - x)", answer: "(2x + 5)(x - 3)"},
            {problem: "y(y - 2) + 3(2 - y)", answer: "(y - 3)(y - 2)"},
            {problem: "4x(x - 1) - 7(1 - x)", answer: "(4x + 7)(x - 1)"},
            {problem: "x(2x - 3) + 2(3 - 2x)", answer: "(x - 2)(2x - 3)"},
            {problem: "3x(x - 5) + (5 - x)", answer: "(3x - 1)(x - 5)"},
            {problem: "x(x - 7) - 4(7 - x)", answer: "(x + 4)(x - 7)"},
            {problem: "2x(x - 4) + 3(4 - x)", answer: "(2x - 3)(x - 4)"},
            {problem: "5(3x - 2) + x(2 - 3x)", answer: "(5 - x)(3x - 2)"},
            {problem: "x(x - 8) + (16 - 2x)", answer: "(x - 2)(x - 8)"},
            {problem: "(y - 2)^2 + 3(y - 2)", answer: "(y - 2)(y + 1)"},
            {problem: "(x + 5)^2 - 6(x + 5)", answer: "(x + 5)(x - 1)"},
            {problem: "(a - 4)^2 + 2(a - 4)", answer: "(a - 4)(a - 2)"},
            {problem: "12x(3x + 2) + 18(3x + 2)", answer: "6(3x + 2)(2x + 3)"},
            {problem: "20x(x - 1) - 15(x - 1)", answer: "5(x - 1)(4x - 3)"},
            {problem: "x(x + 2) - 5(2 + x)", answer: "(x - 5)(x + 2)"},
            {problem: "3x(x + 4) + 7(4 + x)", answer: "(3x + 7)(x + 4)"},
            {problem: "y(2y - 1) - 3(1 - 2y)", answer: "(y + 3)(2y - 1)"},
            {problem: "4x(x - 6) + (6 - x)", answer: "(4x - 1)(x - 6)"},
            {problem: "x(3x - 7) + 2(7 - 3x)", answer: "(x - 2)(3x - 7)"},
            {problem: "2x(x + 3) - 9(3 + x)", answer: "(2x - 9)(x + 3)"},
            {problem: "(m + 3)^2 - 7(m + 3)", answer: "(m + 3)(m - 4)"},
            {problem: "(x - 1)^2 + 4(x - 1)", answer: "(x - 1)(x + 3)"},
            {problem: "16x(2x - 5) + 24(2x - 5)", answer: "8(2x - 5)(2x + 3)"},
            {problem: "30x(x + 2) - 12(x + 2)", answer: "6(x + 2)(5x - 2)"},
            {problem: "x(x - 9) + 2(9 - x)", answer: "(x - 2)(x - 9)"},
            {problem: "5x(x + 1) - 8(1 + x)", answer: "(5x - 8)(x + 1)"},
            {problem: "y(4y + 3) - (3 + 4y)", answer: "(y - 1)(4y + 3)"},
            {problem: "3x(x - 2) + 5(2 - x)", answer: "(3x - 5)(x - 2)"},
            {problem: "x(5x + 4) + 3(4 + 5x)", answer: "(x + 3)(5x + 4)"},
            {problem: "2x(x - 7) - (7 - x)", answer: "(2x + 1)(x - 7)"},
            {problem: "(a + 6)^2 + (a + 6)", answer: "(a + 6)(a + 7)"},
            {problem: "(y - 5)^2 - 2(y - 5)", answer: "(y - 5)(y - 7)"},
            {problem: "14x(3x + 1) + 21(3x + 1)", answer: "7(3x + 1)(2x + 3)"},
            {problem: "18x(x - 3) - 12(x - 3)", answer: "6(x - 3)(3x - 2)"}
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
window.AlgebraLevels.binomialFactorsMedium = new BinomialFactorsMedium();