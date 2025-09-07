class GroupingInPairsMedium {
    constructor() {
        this.key = 'groupingInPairsMedium';
        this.name = 'Grouping in Pairs (Medium)';
        this.usedQuestionIndices = new Set();
        
        this.questions = [
            {problem: "3x^2 - 3x + 4x - 4", answer: "(3x+4)(x-1)"},
            {problem: "3x^2 - 3x - 4x + 4", answer: "(3x-4)(x-1)"},
            {problem: "3x^2 + 3x - 4x - 4", answer: "(3x-4)(x+1)"},
            {problem: "3x^2 - 4x + 3x - 4", answer: "(3x-4)(x+1)"},
            {problem: "5x^2 - 4x + 5x - 4", answer: "(5x-4)(x+1)"},
            {problem: "4x^2 + 12xy - 3x - 9y", answer: "(4x-3)(x+3y)"},
            {problem: "x^2 - 6x + 4x - 24", answer: "(x-6)(x+4)"},
            {problem: "x^2 - 4x + 6x - 24", answer: "(x-4)(x+6)"},
            {problem: "x^2 - 3x + 10x - 30", answer: "(x-3)(x+10)"},
            {problem: "x^2 + 2x - 18x - 36", answer: "(x-18)(x+2)"},
            {problem: "x^2 + 3x - 14x - 42", answer: "(x-14)(x+3)"},
            {problem: "x^2 + 4x - 18x - 72", answer: "(x-18)(x+4)"},
            {problem: "xb - 6 - 3b + 2x", answer: "(x-3)(b+2)"},
            {problem: "2x^2 - 7 - 14x + x", answer: "(2x+1)(x-7)"},
            {problem: "5x + 2x + x^2 + 10", answer: "(x+5)(x+2)"},
            {problem: "2x^2 - 3 - x + 6x", answer: "(2x-1)(x+3)"},
            {problem: "11x - 5a - 55 + ax", answer: "(a+11)(x-5)"},
            {problem: "12y + 2x - 8xy - 3", answer: "(3-2x)(4y-1)"},
            {problem: "6m - n + 3mn - 2", answer: "(n+2)(3m-1)"},
            {problem: "15p - 8r - 5pr + 24", answer: "(3-r)(5p+8)"},
            {problem: "16x - 3y - 8xy + 6", answer: "(2-y)(8x+3)"},
            {problem: "4m^2 - 15n + 6m - 10mn", answer: "(2m-5n)(2m+3)"},
            {problem: "4a - 6b^2 + 3b - 8ab", answer: "(4a+3b)(1-2b)"},
            {problem: "2ab - a^2 - 2bc + ac", answer: "(2b-a)(a-c)"},
            
            // Additional medium questions - mixed signs and reorganization needed
            {problem: "2x^2 - 6x + 3x - 9", answer: "(2x+3)(x-3)"},
            {problem: "4x^2 - 8x + 5x - 10", answer: "(4x+5)(x-2)"},
            {problem: "6x^2 - 12x + x - 2", answer: "(6x+1)(x-2)"},
            {problem: "8x^2 - 16x + 3x - 6", answer: "(8x+3)(x-2)"},
            {problem: "10x^2 - 20x + x - 2", answer: "(10x+1)(x-2)"},
            {problem: "x^2 - 5x + 2x - 10", answer: "(x-5)(x+2)"},
            {problem: "x^2 - 7x + 3x - 21", answer: "(x-7)(x+3)"},
            {problem: "x^2 - 9x + 4x - 36", answer: "(x-9)(x+4)"},
            {problem: "x^2 - 11x + 5x - 55", answer: "(x-11)(x+5)"},
            {problem: "x^2 - 13x + 6x - 78", answer: "(x-13)(x+6)"},
            
            // Terms out of order requiring mental reorganization
            {problem: "xy - 3y + 2x - 6", answer: "(x-3)(y+2)"},
            {problem: "ab - 4b + 5a - 20", answer: "(a-4)(b+5)"},
            {problem: "mn - 6n + 3m - 18", answer: "(m-6)(n+3)"},
            {problem: "pq - 7q + 4p - 28", answer: "(p-7)(q+4)"},
            {problem: "rs - 8s + 2r - 16", answer: "(r-8)(s+2)"},
            {problem: "uv - 9v + 6u - 54", answer: "(u-9)(v+6)"},
            {problem: "wx - 10w + 3x - 30", answer: "(w+3)(x-10)"},
            {problem: "yz - 12z + 5y - 60", answer: "(y-12)(z+5)"},
            
            // Mixed positive and negative coefficients
            {problem: "3ab - 9a + 2b - 6", answer: "(3a+2)(b-3)"},
            {problem: "4xy - 12x + 3y - 9", answer: "(4x+3)(y-3)"},
            {problem: "5mn - 15m + 4n - 12", answer: "(5m+4)(n-3)"},
            {problem: "6pq - 18p + 5q - 15", answer: "(6p+5)(q-3)"},
            {problem: "7rs - 21r + 2s - 6", answer: "(7r+2)(s-3)"},
            {problem: "8uv - 24u + 3v - 9", answer: "(8u+3)(v-3)"},
            {problem: "9wx - 27w + 4x - 12", answer: "(9w+4)(x-3)"},
            {problem: "10yz - 30y + x - 3", answer: "10y(z-3) + x - 3"},
            
            // Larger coefficients requiring careful grouping
            {problem: "12x^2 - 18x + 8x - 12", answer: "(6x+4)(2x-3)"},
            {problem: "15x^2 - 20x + 9x - 12", answer: "(5x+3)(3x-4)"},
            {problem: "18x^2 - 24x + 5x - \\frac{20}{3}", answer: "(6x+\\frac{5}{3})(3x-4)"},
            {problem: "21x^2 - 28x + 6x - 8", answer: "(7x+2)(3x-4)"},
            {problem: "24x^2 - 30x + 4x - 5", answer: "(6x+1)(4x-5)"},
            
            // Different variable combinations
            {problem: "2ac - 8c + 3ab - 12b", answer: "(a-4)(2c+3b)"},
            {problem: "5bd - 10d + 2bc - 4c", answer: "(b-2)(5d+2c)"},
            {problem: "3ef - 12f + 4eg - 16g", answer: "(e-4)(3f+4g)"},
            {problem: "6gh - 18h + 5gi - 15i", answer: "(g-3)(6h+5i)"},
            {problem: "7jk - 14k + 3jm - 6m", answer: "(j-2)(7k+3m)"},
            {problem: "8no - 24o + 9np - 27p", answer: "(n-3)(8o+9p)"},
            {problem: "10qr - 20r + 7qs - 14s", answer: "(q-2)(10r+7s)"},
            {problem: "12tu - 36u + 5tv - 15v", answer: "(t-3)(12u+5v)"}
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
window.AlgebraLevels.groupingInPairsMedium = new GroupingInPairsMedium();