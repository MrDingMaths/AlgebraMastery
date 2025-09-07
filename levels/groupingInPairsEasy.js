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
            {problem: "3ab + 5bc + 3ad + 5cd", answer: "(3a+5c)(b+d)"},
            {problem: "4ab - 7ac + 4bd - 7cd", answer: "(a+d)(4b-7c)"},
            {problem: "2xy - 8xz + 3wy - 12wz", answer: "(2x+3w)(y-4z)"},
            {problem: "5rs - 10r + st - 2t", answer: "(5r+t)(s-2)"},
            
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
            {problem: "mn + 5n + 3m + 15", answer: "(m+5)(n+3)"},
            {problem: "pq + 6q + 4p + 24", answer: "(p+6)(q+4)"},
            {problem: "rs + 7s + 2r + 14", answer: "(r+7)(s+2)"},
            {problem: "uv + 3v + 8u + 24", answer: "(u+3)(v+8)"},
            {problem: "wx + 9x + w + 9", answer: "(w+9)(x+1)"},
            {problem: "yz + 4z + 5y + 20", answer: "(y+4)(z+5)"},
            {problem: "ac + 6c + 2a + 12", answer: "(a+6)(c+2)"},
            {problem: "bd + 8d + 3b + 24", answer: "(b+8)(d+3)"},
            
            // Three-term grouping patterns
            {problem: "2ab + 4a + 3b + 6", answer: "(2a+3)(b+2)"},
            {problem: "3xy + 9x + 2y + 6", answer: "(3x+2)(y+3)"},
            {problem: "4mn + 8m + 5n + 10", answer: "(4m+5)(n+2)"},
            {problem: "5pq + 15p + 2q + 6", answer: "(5p+2)(q+3)"},
            {problem: "6rs + 12r + s + 2", answer: "(6r+1)(s+2)"},
            {problem: "7uv + 14u + 3v + 6", answer: "(7u+3)(v+2)"},
            {problem: "8wx + 16w + x + 2", answer: "(8w+1)(x+2)"},
            {problem: "9yz + 18y + 2z + 4", answer: "(9y+2)(z+2)"},
            {problem: "10ac + 20a + c + 2", answer: "(10a+1)(c+2)"},
            {problem: "12bd + 24b + d + 2", answer: "(12b+1)(d+2)"},
            
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