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
            {problem: "6x - y + 3xy - 2", answer: "(y+2)(3x-1)"},
            {problem: "15x - 8y - 5xy + 24", answer: "(3-y)(5x+8)"},
            {problem: "16x - 3y - 8xy + 6", answer: "(2-y)(8x+3)"},
            {problem: "4x^2 - 15y + 6x - 10xy", answer: "(2x-5y)(2x+3)"},
            {problem: "4a - 6b^2 + 3b - 8ab", answer: "(4a+3b)(1-2b)"},
            {problem: "2ab - a^2 - 2bx + ax", answer: "(2b-a)(a-x)"},
            
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
            {problem: "xy - 6y + 3x - 18", answer: "(x-6)(y+3)"},
            {problem: "xy - 7y + 4x - 28", answer: "(x-7)(y+4)"},
            {problem: "xy - 8y + 2x - 16", answer: "(x-8)(y+2)"},
            {problem: "xy - 9y + 6x - 54", answer: "(x-9)(y+6)"},
            {problem: "yx - 10y + 3x - 30", answer: "(y+3)(x-10)"},
            {problem: "yx - 12x + 5y - 60", answer: "(y-12)(x+5)"},
            
            // Mixed positive and negative coefficients
            {problem: "3ab - 9a + 2b - 6", answer: "(3a+2)(b-3)"},
            {problem: "4xy - 12x + 3y - 9", answer: "(4x+3)(y-3)"},
            {problem: "5xy - 15x + 4y - 12", answer: "(5x+4)(y-3)"},
            {problem: "6xy - 18x + 5y - 15", answer: "(6x+5)(y-3)"},
            {problem: "7xy - 21x + 2y - 6", answer: "(7x+2)(y-3)"},
            {problem: "8xy - 24x + 3y - 9", answer: "(8x+3)(y-3)"},
            {problem: "9yx - 27y + 4x - 12", answer: "(9y+4)(x-3)"},
            {problem: "10ya - 30y + x - 3", answer: "10y(a-3) + x - 3"},
            
            // Larger coefficients requiring careful grouping
            {problem: "12x^2 - 18x + 8x - 12", answer: "(6x+4)(2x-3)"},
            {problem: "15x^2 - 20x + 9x - 12", answer: "(5x+3)(3x-4)"},
            {problem: "18x^2 - 24x + 5x - \\frac{20}{3}", answer: "(6x+\\frac{5}{3})(3x-4)"},
            {problem: "21x^2 - 28x + 6x - 8", answer: "(7x+2)(3x-4)"},
            {problem: "24x^2 - 30x + 4x - 5", answer: "(6x+1)(4x-5)"},
            
            // Different variable combinations
            {problem: "2ax - 8x + 3ab - 12b", answer: "(a-4)(2x+3b)"},
            {problem: "5bx - 10x + 2by - 4y", answer: "(b-2)(5x+2y)"},
            {problem: "3xy - 12y + 4xa - 16a", answer: "(x-4)(3y+4a)"},
            {problem: "6xy - 18y + 5xa - 15a", answer: "(x-3)(6y+5a)"},
            {problem: "7xy - 14y + 3xa - 6a", answer: "(x-2)(7y+3a)"},
            {problem: "8xy - 24y + 9xa - 27a", answer: "(x-3)(8y+9a)"},
            {problem: "10xy - 20y + 7xa - 14a", answer: "(x-2)(10y+7a)"},
            {problem: "12xy - 36y + 5xa - 15a", answer: "(x-3)(12y+5a)"}
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