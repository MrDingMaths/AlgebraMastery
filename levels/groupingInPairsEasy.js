class GroupingInPairsEasy {
    constructor() {
        this.key = 'groupingInPairsEasy';
        this.name = 'Grouping in Pairs (Easy)';
        this.usedQuestionIndices = new Set();
        
        this.questions = [
            {problem: "x^2 + 2x + 3x + 6", answer: "(x+2)(x+3)"},
            {problem: "x^2 + 3x + 2x + 6", answer: "(x+3)(x+2)"},
            {problem: "3x^2 + 3x + 2x + 2", answer: "(3x+2)(x+1)"},
            {problem: "3x^2 + 3x + 4x + 4", answer: "(3x+4)(x+1)"},
            {problem: "x^2 + 4x + 3x + 12", answer: "(x+4)(x+3)"},
            {problem: "x^2 + 7x + 2x + 14", answer: "(x+7)(x+2)"},
            {problem: "3ab + 5bx + 3ay + 5xy", answer: "(3a+5x)(b+y)"},
            {problem: "4ab - 7ax + 4by - 7xy", answer: "(a+y)(4b-7x)"},
            {problem: "2xy - 8xa + 3by - 12ba", answer: "(2x+3b)(y-4a)"},
            {problem: "5xy - 10x + ya - 2a", answer: "(5x+a)(y-2)"},
            
            // Additional easy questions - simple factorization by grouping
            {problem: "x^2 + x + 2x + 2", answer: "(x+1)(x+2)"},
            {problem: "x^2 + 5x + x + 5", answer: "(x+5)(x+1)"},
            {problem: "x^2 + 6x + x + 6", answer: "(x+6)(x+1)"},
            {problem: "2x^2 + 2x + x + 1", answer: "(2x+1)(x+1)"},
            {problem: "2x^2 + 4x + x + 2", answer: "(2x+1)(x+2)"},
            {problem: "3x^2 + 6x + x + 2", answer: "(3x+1)(x+2)"},
            {problem: "4x^2 + 8x + x + 2", answer: "(4x+1)(x+2)"},
            {problem: "5x^2 + 10x + x + 2", answer: "(5x+1)(x+2)"},
            {problem: "x^2 + 8x + 2x + 16", answer: "(x+8)(x+2)"},
            {problem: "x^2 + 9x + 3x + 27", answer: "(x+9)(x+3)"},
            {problem: "x^2 + 10x + 5x + 50", answer: "(x+10)(x+5)"},
            {problem: "2x^2 + 6x + 3x + 9", answer: "(2x+3)(x+3)"},
            {problem: "4x^2 + 12x + 3x + 9", answer: "(4x+3)(x+3)"},
            {problem: "5x^2 + 15x + 2x + 6", answer: "(5x+2)(x+3)"},
            {problem: "6x^2 + 18x + 2x + 6", answer: "(6x+2)(x+3)"},
            
            // Simple variable grouping
            {problem: "ab + 2b + 3a + 6", answer: "(a+2)(b+3)"},
            {problem: "xy + 4y + 2x + 8", answer: "(x+4)(y+2)"},
            {problem: "xy + 5y + 3x + 15", answer: "(x+5)(y+3)"},
            {problem: "xy + 6y + 4x + 24", answer: "(x+6)(y+4)"},
            {problem: "xy + 7y + 2x + 14", answer: "(x+7)(y+2)"},
            {problem: "xy + 3y + 8x + 24", answer: "(x+3)(y+8)"},
            {problem: "yx + 9x + y + 9", answer: "(y+9)(x+1)"},
            {problem: "yx + 4x + 5y + 20", answer: "(y+4)(x+5)"},
            {problem: "ax + 6x + 2a + 12", answer: "(a+6)(x+2)"},
            {problem: "bx + 8x + 3b + 24", answer: "(b+8)(x+3)"},
            
            // Three-term grouping patterns
            {problem: "2ab + 4a + 3b + 6", answer: "(2a+3)(b+2)"},
            {problem: "3xy + 9x + 2y + 6", answer: "(3x+2)(y+3)"},
            {problem: "4xy + 8x + 5y + 10", answer: "(4x+5)(y+2)"},
            {problem: "5xy + 15x + 2y + 6", answer: "(5x+2)(y+3)"},
            {problem: "6xy + 12x + y + 2", answer: "(6x+1)(y+2)"},
            {problem: "7xy + 14x + 3y + 6", answer: "(7x+3)(y+2)"},
            {problem: "8yx + 16y + x + 2", answer: "(8y+1)(x+2)"},
            {problem: "9yx + 18y + 2x + 4", answer: "(9y+2)(x+2)"},
            {problem: "10ax + 20a + x + 2", answer: "(10a+1)(x+2)"},
            {problem: "12bx + 24b + x + 2", answer: "(12b+1)(x+2)"},
            
            // Simple coefficient patterns
            {problem: "2x^2 + 4x + 3x + 6", answer: "(2x+3)(x+2)"},
            {problem: "3x^2 + 9x + 2x + 6", answer: "(3x+2)(x+3)"},
            {problem: "4x^2 + 8x + 5x + 10", answer: "(4x+5)(x+2)"},
            {problem: "5x^2 + 10x + 3x + 6", answer: "(5x+3)(x+2)"},
            {problem: "6x^2 + 12x + x + 2", answer: "(6x+1)(x+2)"},
            {problem: "7x^2 + 14x + 2x + 4", answer: "(7x+2)(x+2)"},
            {problem: "8x^2 + 16x + 3x + 6", answer: "(8x+3)(x+2)"},
            {problem: "9x^2 + 18x + x + 2", answer: "(9x+1)(x+2)"},
            {problem: "10x^2 + 20x + 3x + 6", answer: "(10x+3)(x+2)"},
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
window.AlgebraLevels.groupingInPairsEasy = new GroupingInPairsEasy();