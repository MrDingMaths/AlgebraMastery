class BinomialFactorsEasy {
    constructor() {
        this.key = 'binomialFactorsEasy';
        this.name = 'Noticing Binomial Factors (Easy)';
        this.usedQuestionIndices = new Set();
        
        this.questions = [
            {problem: "4(x + 3) + x(x + 3)", answer: "(x + 4)(x + 3)"},
            {problem: "3(x + 1) + x(x + 1)", answer: "(x + 3)(x + 1)"},
            {problem: "7(m - 3) + m(m - 3)", answer: "(m + 7)(m - 3)"},
            {problem: "x(x - 7) + 2(x - 7)", answer: "(x + 2)(x - 7)"},
            {problem: "8(a + 4) - a(a + 4)", answer: "(8 - a)(a + 4)"},
            {problem: "y(y + 3) - 2(y + 3)", answer: "(y - 2)(y + 3)"},
            {problem: "a(x + 2) + (x + 2)", answer: "(a + 1)(x + 2)"},
            {problem: "t(2t + 5) + 3(2t + 5)", answer: "(t + 3)(2t + 5)"},
            {problem: "y(4y - 1) - (4y - 1)", answer: "(y - 1)(4y - 1)"},
            {problem: "5(x - 1) - a(x - 1)", answer: "(5 - a)(x - 1)"},
            {problem: "b(x + 2) + 3(x + 2)", answer: "(b + 3)(x + 2)"},
            {problem: "a(x + 5) - 4(x + 5)", answer: "(a - 4)(x + 5)"},
            {problem: "3(x + 1) - x(x + 1)", answer: "(3 - x)(x + 1)"},
            {problem: "x(x - 2) - (x - 2)", answer: "(x - 1)(x - 2)"},
            {problem: "(x - 6) - x(x - 6)", answer: "(1 - x)(x - 6)"},
            {problem: "m(5m - 2) + 4(5m - 2)", answer: "(m + 4)(5m - 2)"},
            {problem: "3x(x + 1) + (x + 1)", answer: "(3x + 1)(x + 1)"},
            {problem: "2(a - 3) - x(a - 3) - c(a - 3)", answer: "(2 - x - c)(a - 3)"},
            {problem: "b(2a + 1) + 5(2a + 1) - a(2a + 1)", answer: "(b + 5 - a)(2a + 1)"},
            
            // Additional generated questions for variety
            {problem: "2(x + 4) + x(x + 4)", answer: "(x + 2)(x + 4)"},
            {problem: "6(y - 2) + y(y - 2)", answer: "(y + 6)(y - 2)"},
            {problem: "x(x + 8) + 5(x + 8)", answer: "(x + 5)(x + 8)"},
            {problem: "4(m - 1) - m(m - 1)", answer: "(4 - m)(m - 1)"},
            {problem: "y(y - 5) - 3(y - 5)", answer: "(y - 3)(y - 5)"},
            {problem: "a(x - 4) + (x - 4)", answer: "(a + 1)(x - 4)"},
            {problem: "2x(x + 3) + (x + 3)", answer: "(2x + 1)(x + 3)"},
            {problem: "5(y + 2) - b(y + 2)", answer: "(5 - b)(y + 2)"},
            {problem: "x(3x + 1) + 2(3x + 1)", answer: "(x + 2)(3x + 1)"},
            {problem: "4(a - 5) + a(a - 5)", answer: "(a + 4)(a - 5)"},
            {problem: "y(2y + 3) - (2y + 3)", answer: "(y - 1)(2y + 3)"},
            {problem: "3(x - 7) - x(x - 7)", answer: "(3 - x)(x - 7)"},
            {problem: "a(a + 6) + 7(a + 6)", answer: "(a + 7)(a + 6)"},
            {problem: "2(m - 8) + m(m - 8)", answer: "(m + 2)(m - 8)"},
            {problem: "x(x + 9) - 4(x + 9)", answer: "(x - 4)(x + 9)"},
            {problem: "5(y - 3) + y(y - 3)", answer: "(y + 5)(y - 3)"},
            {problem: "a(2a - 1) + 3(2a - 1)", answer: "(a + 3)(2a - 1)"},
            {problem: "4(x + 7) - x(x + 7)", answer: "(4 - x)(x + 7)"},
            {problem: "y(y - 9) + 6(y - 9)", answer: "(y + 6)(y - 9)"},
            {problem: "3(a + 2) - a(a + 2)", answer: "(3 - a)(a + 2)"},
            {problem: "x(4x - 3) + (4x - 3)", answer: "(x + 1)(4x - 3)"},
            {problem: "2(y + 5) + y(y + 5)", answer: "(y + 2)(y + 5)"},
            {problem: "a(a - 6) - 5(a - 6)", answer: "(a - 5)(a - 6)"},
            {problem: "6(x + 1) + x(x + 1)", answer: "(x + 6)(x + 1)"},
            {problem: "y(3y + 2) - 4(3y + 2)", answer: "(y - 4)(3y + 2)"},
            {problem: "4(a - 2) + a(a - 2)", answer: "(a + 4)(a - 2)"},
            {problem: "x(x - 8) + 3(x - 8)", answer: "(x + 3)(x - 8)"},
            {problem: "5(y + 6) - y(y + 6)", answer: "(5 - y)(y + 6)"},
            {problem: "a(2a + 5) + (2a + 5)", answer: "(a + 1)(2a + 5)"},
            {problem: "3(x - 4) + x(x - 4)", answer: "(x + 3)(x - 4)"},
            {problem: "y(y + 7) - 2(y + 7)", answer: "(y - 2)(y + 7)"}
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
window.AlgebraLevels.binomialFactorsEasy = new BinomialFactorsEasy();