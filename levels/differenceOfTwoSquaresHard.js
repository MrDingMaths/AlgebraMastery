class DifferenceOfTwoSquaresHard {
    constructor() {
        this.key = 'differenceOfTwoSquaresHard';
        this.name = 'Difference of Two Squares Factorisation (Hard)';
        this.usedQuestionIndices = new Set();
        
        // Hard level: Complex expressions with surds, nested factorisation, and advanced techniques
        this.questions = [

            // Fractional expressions with surds
            {problem: "\\frac{5x^2}{9} - \\frac{5}{4}", answer: "\\frac{5}{36}(2x - 3)(2x + 3)"},
            {problem: "x^2 - \\frac{3}{4}", answer: "(x - \\frac{\\sqrt{3}}{2})(x + \\frac{\\sqrt{3}}{2})"},
            {problem: "x^2 - \\frac{7}{16}", answer: "(x - \\frac{\\sqrt{7}}{4})(x + \\frac{\\sqrt{7}}{4})"},
            {problem: "x^2 - \\frac{5}{16}", answer: "(x - \\frac{\\sqrt{5}}{4})(x + \\frac{\\sqrt{5}}{4})"},
            {problem: "\\frac{x^2}{4} - \\frac{7}{9}", answer: "(\\frac{x}{2} - \\frac{\\sqrt{7}}{3})(\\frac{x}{2} + \\frac{\\sqrt{7}}{3})"},
            {problem: "\\frac{9x^2}{16} - \\frac{5}{4}", answer: "(\\frac{3x}{4} - \\frac{\\sqrt{5}}{2})(\\frac{3x}{4} + \\frac{\\sqrt{5}}{2})"},
            
            // Irrational coefficients
            {problem: "x^2 - 7", answer: "(x-\\sqrt{7})(x+\\sqrt{7})"},
            {problem: "x^2 - 5", answer: "(x-\\sqrt{5})(x+\\sqrt{5})"},
            {problem: "x^2 - 19", answer: "(x-\\sqrt{19})(x+\\sqrt{19})"},
            {problem: "x^2 - 11", answer: "(x-\\sqrt{11})(x+\\sqrt{11})"},
            {problem: "x^2 - 13", answer: "(x-\\sqrt{13})(x+\\sqrt{13})"},
            {problem: "x^2 - 8", answer: "(x-2\\sqrt{2})(x+2\\sqrt{2})"},
            {problem: "x^2 - 18", answer: "(x-3\\sqrt{2})(x+3\\sqrt{2})"},
            {problem: "x^2 - 32", answer: "(x-4\\sqrt{2})(x+4\\sqrt{2})"},
            {problem: "x^2 - 50", answer: "(x-5\\sqrt{2})(x+5\\sqrt{2})"},
            
            // Complex coefficient expressions
            {problem: "3x^2 - 75", answer: "3(x - 5)(x + 5)"},
            {problem: "7x^2 - 63", answer: "7(x - 3)(x + 3)"},
            
            // Complex binomial expressions
            {problem: "6(x-2)^2 - 54", answer: "6(x-5)(x+1)"},
            {problem: "2(x+1)^2 - 32", answer: "2(x-3)(x+5)"},
            
            // Negative leading terms
            {problem: "-20 + 5x^2", answer: "5(x - 2)(x + 2)"},
            
            // Difference of binomial squares
            {problem: "(x+2)^2 - (x+3)^2", answer: "-(2x+5)"},
            {problem: "(y-7)^2 - (y+4)^2", answer: "-11(2y-3)"},
            {problem: "(b+5)^2 - (b-5)^2", answer: "20b"},
            {problem: "(a+3)^2 - (a-5)^2", answer: "16(a-1)"},
            {problem: "(2w+3x)^2 - (3w+4x)^2", answer: "-(w+x)(5w+7x)"},
            {problem: "(3a+2b)^2 - (2a+3b)^2", answer: "5(a-b)(a+b)"},
            {problem: "(4x-y)^2 - (2x+3y)^2", answer: "4(x-2y)(3x+y)"},
            {problem: "(5m+n)^2 - (3m-2n)^2", answer: "(2m+3n)(8m-n)"},
            
            // Fourth power differences
            {problem: "1 - w^4", answer: "(1-w)(1+w)(1+w^2)"},
            {problem: "a^4 - 1", answer: "(a-1)(a+1)(a^2+1)"},
            {problem: "b^4 - 16", answer: "(b-2)(b+2)(b^2+4)"},
            {problem: "81 - x^4", answer: "(3-x)(3+x)(9+x^2)"},
            {problem: "16m^4 - 81n^4", answer: "(2m-3n)(2m+3n)(4m^2+9n^2)"},
            {problem: "y^8 - 256", answer: "(y-2)(y+2)(y^2+4)(y^4+16)"},
            {problem: "c^{16} - 1", answer: "(c-1)(c+1)(c^2+1)(c^4+1)(c^8+1)"},
            {problem: "x^4 - 81", answer: "(x-3)(x+3)(x^2+9)"},
            {problem: "625 - a^4", answer: "(5-a)(5+a)(25+a^2)"},
            
            // Mixed factorisation with fourth powers
            {problem: "2x^4 - 32", answer: "2(x-2)(x+2)(x^2+4)"},
            {problem: "ap^4 - 81a", answer: "a(p-3)(p+3)(p^2+9)"},
            {problem: "x^5 - x", answer: "x(x-1)(x+1)(x^2+1)"},
            {problem: "3k^8 - 3", answer: "3(k-1)(k+1)(k^2+1)(k^4+1)"},
            {problem: "\\frac{y^4}{81} - 1", answer: "(\\frac{y}{3}-1)(\\frac{y}{3}+1)(\\frac{y^2}{9}+1)"},
            {problem: "5m^9 - 5m", answer: "5m(m-1)(m+1)(m^2+1)(m^4+1)"},
            {problem: "4a^4 - 64", answer: "4(a-2)(a+2)(a^2+4)"},
            {problem: "3x^4 - 243", answer: "3(x-3)(x+3)(x^2+9)"},
            
            // Complex fractional fourth powers
            {problem: "\\frac{x^4}{3} - \\frac{y^4}{3}", answer: "\\frac{1}{3}(x-y)(x+y)(x^2+y^2)"},
            {problem: "2a^4 - 32b^4", answer: "2(a-2b)(a+2b)(a^2+4b^2)"},
            {problem: "\\frac{3a^8}{16} - \\frac{3b^4}{625}", answer: "3(\\frac{a^2}{2} - \\frac{b}{5})(\\frac{a^2}{2} + \\frac{b}{5})(\\frac{a^4}{4} + \\frac{b^2}{25})"}
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
window.AlgebraLevels.differenceOfTwoSquaresHard = new DifferenceOfTwoSquaresHard();