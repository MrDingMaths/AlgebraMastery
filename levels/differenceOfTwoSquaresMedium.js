class DifferenceOfTwoSquaresMedium {
    constructor() {
        this.key = 'differenceOfTwoSquaresMedium';
        this.name = 'Difference of Two Squares Factorisation (Medium)';
        this.usedQuestionIndices = new Set();
        
        // Medium level: More complex expressions including binomial squares, fractions, and factoring out common factors
        this.questions = [
            // Perfect square binomial expansions
            {problem: "(x+5)^2 - 9", answer: "(x+2)(x+8)"},
            {problem: "(x+10)^2 - 16", answer: "(x+6)(x+14)"},
            {problem: "(x-7)^2 - 1", answer: "(x-8)(x-6)"},
            {problem: "49 - (x-1)^2", answer: "(8-x)(x+6)"},
            {problem: "9 - (x+3)^2", answer: "-x(x+6)"},
            {problem: "16 - (x+4)^2", answer: "-x(x+8)"},
            {problem: "25 - (x+2)^2", answer: "(3-x)(x+7)"},
            {problem: "100 - (x+4)^2", answer: "(6-x)(x+14)"},
            {problem: "25 - (x-5)^2", answer: "x(10-x)"},
            {problem: "49 - (x+3)^2", answer: "(4-x)(x+10)"},
            {problem: "4 - (x+2)^2", answer: "-x(x+4)"},
            {problem: "81 - (x+8)^2", answer: "(1-x)(x+17)"},
            {problem: "(x+1)^2 - 4", answer: "(x-1)(x+3)"},
            {problem: "(x+3)^2 - 16", answer: "(x-1)(x+7)"},
            {problem: "(x-2)^2 - 9", answer: "(x-5)(x+1)"},
            {problem: "(x-4)^2 - 25", answer: "(x-9)(x+1)"},
            {problem: "36 - (x-3)^2", answer: "(9-x)(x+3)"},
            {problem: "64 - (x+2)^2", answer: "(6-x)(x+10)"},
            
            // Mixed variable expressions
            {problem: "(3x+5)^2 - x^2", answer: "(2x+5)(4x+5)"},
            {problem: "(2y+7)^2 - y^2", answer: "(y+7)(3y+7)"},
            {problem: "(3x-5y)^2 - 25y^2", answer: "3x(3x-10y)"},
            {problem: "(4a+3b)^2 - 9b^2", answer: "8a(2a+3b)"},
            {problem: "(5m-2n)^2 - 4n^2", answer: "5m(5m-4n)"},
            {problem: "(x+2y)^2 - 4y^2", answer: "x(x+4y)"},
            {problem: "(2x-3y)^2 - 9y^2", answer: "4x(x-3y)"},
            
            // Fractional expressions
            {problem: "x^2 - \\frac{1}{4}", answer: "(x - \\frac{1}{2})(x + \\frac{1}{2})"},
            {problem: "x^2 - \\frac{4}{25}", answer: "(x - \\frac{2}{5})(x + \\frac{2}{5})"},
            {problem: "25x^2 - \\frac{9}{16}", answer: "(5x - \\frac{3}{4})(5x + \\frac{3}{4})"},
            {problem: "\\frac{x^2}{9} - 1", answer: "(\\frac{x}{3} - 1)(\\frac{x}{3} + 1)"},
            {problem: "\\frac{a^2}{4} - \\frac{b^2}{9}", answer: "(\\frac{a}{2} - \\frac{b}{3})(\\frac{a}{2} + \\frac{b}{3})"},
            {problem: "x^2 - \\frac{1}{9}", answer: "(x - \\frac{1}{3})(x + \\frac{1}{3})"},
            {problem: "\\frac{x^2}{16} - \\frac{1}{4}", answer: "(\\frac{x}{4} - \\frac{1}{2})(\\frac{x}{4} + \\frac{1}{2})"},
            {problem: "4x^2 - \\frac{1}{9}", answer: "(2x - \\frac{1}{3})(2x + \\frac{1}{3})"},
            {problem: "\\frac{9x^2}{4} - 1", answer: "(\\frac{3x}{2} - 1)(\\frac{3x}{2} + 1)"},
            {problem: "x^2 - \\frac{9}{25}", answer: "(x - \\frac{3}{5})(x + \\frac{3}{5})"},
            {problem: "\\frac{x^2}{25} - \\frac{4}{9}", answer: "(\\frac{x}{5} - \\frac{2}{3})(\\frac{x}{5} + \\frac{2}{3})"},
            
            // Common factor first
            {problem: "3x^2 - 108", answer: "3(x-6)(x+6)"},
            {problem: "6x^2 - 24", answer: "6(x-2)(x+2)"},
            {problem: "10a^2 - 10", answer: "10(a-1)(a+1)"},
            {problem: "4y^2 - 64", answer: "4(y-4)(y+4)"},
            {problem: "98 - 2x^2", answer: "2(7-x)(7+x)"},
            {problem: "32 - 8m^2", answer: "8(2-m)(2+m)"},
            {problem: "5x^2y^2 - 5", answer: "5(xy-1)(xy+1)"},
            {problem: "3 - 3x^2y^2", answer: "3(1-xy)(1+xy)"},
            {problem: "63 - 7a^2b^2", answer: "7(3-ab)(3+ab)"},
            {problem: "2x^2 - 50", answer: "2(x-5)(x+5)"},
            {problem: "50 - 2x^2", answer: "2(5-x)(5+x)"},
            {problem: "200 - 2x^2", answer: "2(10-x)(10+x)"},
            {problem: "300 - 3x^2", answer: "3(10-x)(10+x)"},
            {problem: "300 - 27x^2", answer: "3(10-3x)(10+3x)"},
            {problem: "12x^2 - 3y^2", answer: "3(2x-y)(2x+y)"},
            {problem: "3x^2 - 3y^2", answer: "3(x-y)(x+y)"},
            {problem: "3x^2 - 27y^2", answer: "3(x-3y)(x+3y)"},
            {problem: "8a^2 - 32", answer: "8(a-2)(a+2)"},
            {problem: "18x^2 - 72", answer: "18(x-2)(x+2)"},
            {problem: "20 - 5y^2", answer: "5(2-y)(2+y)"},
            {problem: "45 - 5x^2", answer: "5(3-x)(3+x)"},
            {problem: "7x^2 - 28", answer: "7(x-2)(x+2)"},
            {problem: "12 - 3a^2", answer: "3(2-a)(2+a)"},
            {problem: "40x^2 - 10", answer: "10(2x-1)(2x+1)"},
            {problem: "16 - 4y^2", answer: "4(2-y)(2+y)"},
            {problem: "27x^2 - 3", answer: "3(3x-1)(3x+1)"},
            
            // Additional higher powers with coefficients
            {problem: "9x^6 - y^4", answer: "(3x^3 - y^2)(3x^3 + y^2)"},
            {problem: "a^4 - 25b^2", answer: "(a^2 - 5b)(a^2 + 5b)"},
            {problem: "m^8 - 36n^6", answer: "(m^4 - 6n^3)(m^4 + 6n^3)"},
            {problem: "100p^{10} - 49q^4", answer: "(10p^5 - 7q^2)(10p^5 + 7q^2)"},
            {problem: "16c^6 - 9d^{12}", answer: "(4c^3 - 3d^6)(4c^3 + 3d^6)"},
            {problem: "x^4 - y^6", answer: "(x^2 - y^3)(x^2 + y^3)"},
            {problem: "a^8 - b^2", answer: "(a^4 - b)(a^4 + b)"},
            {problem: "4p^6 - 25", answer: "(2p^3 - 5)(2p^3 + 5)"},
            {problem: "9m^2 - n^4", answer: "(3m - n^2)(3m + n^2)"},
            {problem: "49c^{10} - 1", answer: "(7c^5 - 1)(7c^5 + 1)"},
            {problem: "k^{12} - 64h^2", answer: "(k^6 - 8h)(k^6 + 8h)"},
            {problem: "100x^{14} - 81y^{16}", answer: "(10x^7 - 9y^8)(10x^7 + 9y^8)"}
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
window.AlgebraLevels.differenceOfTwoSquaresMedium = new DifferenceOfTwoSquaresMedium();