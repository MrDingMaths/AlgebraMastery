class DifferenceOfTwoSquaresEasy {
    constructor() {
        this.key = 'differenceOfTwoSquaresEasy';
        this.name = 'Difference of Two Squares Factorisation (Easy)';
        this.usedQuestionIndices = new Set();
        
        // Easy level: Basic single-variable factorisation with perfect square constants
        this.questions = [
            // Simple perfect squares
            {problem: "x^2 - 9", answer: "(x-3)(x+3)"},
            {problem: "y^2 - 25", answer: "(y-5)(y+5)"},
            {problem: "y^2 - 1", answer: "(y-1)(y+1)"},
            {problem: "x^2 - 16", answer: "(x-4)(x+4)"},
            {problem: "a^2 - 81", answer: "(a-9)(a+9)"},
            {problem: "x^2 - y^2", answer: "(x-y)(x+y)"},
            {problem: "x^2 - 4", answer: "(x-2)(x+2)"},
            {problem: "x^2 - 36", answer: "(x-6)(x+6)"},
            {problem: "x^2 - 49", answer: "(x-7)(x+7)"},
            {problem: "x^2 - 64", answer: "(x-8)(x+8)"},
            {problem: "x^2 - 100", answer: "(x-10)(x+10)"},
            {problem: "x^2 - 121", answer: "(x-11)(x+11)"},
            {problem: "x^2 - 144", answer: "(x-12)(x+12)"},
            {problem: "x^2 - 169", answer: "(x-13)(x+13)"},
            {problem: "x^2 - 225", answer: "(x-15)(x+15)"},
            {problem: "x^2 - 400", answer: "(x-20)(x+20)"},
            
            // Constant first form
            {problem: "16 - a^2", answer: "(4-a)(4+a)"},
            {problem: "25 - x^2", answer: "(5-x)(5+x)"},
            {problem: "1 - b^2", answer: "(1-b)(1+b)"},
            {problem: "36 - y^2", answer: "(6-y)(6+y)"},
            {problem: "121 - b^2", answer: "(11-b)(11+b)"},
            {problem: "4 - x^2", answer: "(2-x)(2+x)"},
            {problem: "9 - y^2", answer: "(3-y)(3+y)"},
            {problem: "49 - a^2", answer: "(7-a)(7+a)"},
            {problem: "64 - x^2", answer: "(8-x)(8+x)"},
            {problem: "100 - y^2", answer: "(10-y)(10+y)"},
            {problem: "144 - a^2", answer: "(12-a)(12+a)"},
            {problem: "169 - x^2", answer: "(13-x)(13+x)"},
            {problem: "225 - y^2", answer: "(15-y)(15+y)"},
            
            // Different variables for variety
            {problem: "a^2 - 4", answer: "(a-2)(a+2)"},
            {problem: "b^2 - 9", answer: "(b-3)(b+3)"},
            {problem: "c^2 - 25", answer: "(c-5)(c+5)"},
            {problem: "d^2 - 49", answer: "(d-7)(d+7)"},
            {problem: "m^2 - 1", answer: "(m-1)(m+1)"},
            {problem: "n^2 - 16", answer: "(n-4)(n+4)"},
            {problem: "p^2 - 36", answer: "(p-6)(p+6)"},
            {problem: "q^2 - 64", answer: "(q-8)(q+8)"},
            {problem: "r^2 - 100", answer: "(r-10)(r+10)"},
            {problem: "s^2 - 121", answer: "(s-11)(s+11)"},
            {problem: "t^2 - 144", answer: "(t-12)(t+12)"},
            {problem: "u^2 - 169", answer: "(u-13)(u+13)"},
            
            // Simple coefficient squares
            {problem: "4x^2 - 25", answer: "(2x-5)(2x+5)"},
            {problem: "25b^2 - 4", answer: "(5b-2)(5b+2)"},
            {problem: "100y^2 - 9", answer: "(10y-3)(10y+3)"},
            {problem: "9x^2 - 16", answer: "(3x-4)(3x+4)"},
            {problem: "16a^2 - 49", answer: "(4a-7)(4a+7)"},
            {problem: "25x^2 - 36", answer: "(5x-6)(5x+6)"},
            {problem: "36y^2 - 25", answer: "(6y-5)(6y+5)"},
            {problem: "49a^2 - 16", answer: "(7a-4)(7a+4)"},
            {problem: "64x^2 - 9", answer: "(8x-3)(8x+3)"},
            {problem: "81y^2 - 4", answer: "(9y-2)(9y+2)"},
            
            // Constant first with coefficients
            {problem: "1 - 4x^2", answer: "(1-2x)(1+2x)"},
            {problem: "16 - 9y^2", answer: "(4-3y)(4+3y)"},
            {problem: "25 - 4a^2", answer: "(5-2a)(5+2a)"},
            {problem: "36 - x^2", answer: "(6-x)(6+x)"},
            {problem: "49 - 16b^2", answer: "(7-4b)(7+4b)"},
            {problem: "64 - 25x^2", answer: "(8-5x)(8+5x)"},
            {problem: "81 - 4y^2", answer: "(9-2y)(9+2y)"},
            {problem: "100 - 9a^2", answer: "(10-3a)(10+3a)"},
            {problem: "121 - 16x^2", answer: "(11-4x)(11+4x)"},
            
            // Two variable expressions
            {problem: "4x^2 - 25y^2", answer: "(2x-5y)(2x+5y)"},
            {problem: "4p^2 - 25q^2", answer: "(2p-5q)(2p+5q)"},
            {problem: "25a^2 - 49b^2", answer: "(5a-7b)(5a+7b)"},
            {problem: "81m^2 - 4n^2", answer: "(9m-2n)(9m+2n)"},
            {problem: "9a^2 - 16b^2", answer: "(3a-4b)(3a+4b)"},
            {problem: "16x^2 - 49y^2", answer: "(4x-7y)(4x+7y)"},
            {problem: "36p^2 - 25q^2", answer: "(6p-5q)(6p+5q)"},
            {problem: "49m^2 - 36n^2", answer: "(7m-6n)(7m+6n)"},
            {problem: "64a^2 - 25b^2", answer: "(8a-5b)(8a+5b)"}
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
window.AlgebraLevels.differenceOfTwoSquaresEasy = new DifferenceOfTwoSquaresEasy();