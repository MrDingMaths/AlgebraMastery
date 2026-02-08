class GroupInPairsHardLevel {
    constructor() {
        this.key = 'groupInPairsHard';
        this.name = 'Grouping in Pairs (Hard)';
        this.usedQuestionIndices = new Set();
        
        this.questions = [
            {problem: "-5x^2 + 4x - 5x + 4", answer: "(4-5x)(x+1)"},
            {problem: "3x - 8x - 6x^2 + 4", answer: "(1-2x)(3x+4)"},
            {problem: "x^2 - bx + x - b", answer: "(x+1)(x-b)"},
            {problem: "x^2 - yx + x - y", answer: "(x+1)(x-y)"},
            {problem: "x^2 + bx + x + b", answer: "(x+1)(x+b)"},
            {problem: "x^2 + yx - x - y", answer: "(x-1)(x+y)"},
            {problem: "x^2 + ax - x - a", answer: "(x-1)(x+a)"},
            {problem: "x^2 - bx - x + b", answer: "(x-1)(x-b)"},
            {problem: "x^2 - 3x - 3xy + 9y", answer: "(x-3y)(x-3)"},
            {problem: "x^2 - 2x - xa + 2a", answer: "(x-a)(x-2)"},
            {problem: "x^2 - 5x - 3xa + 15a", answer: "(x-3a)(x-5)"},
            
            // Additional hard questions with parameters and complex rearrangement
            {problem: "x^2 + ax + bx + ab", answer: "(x+a)(x+b)"},
            {problem: "x^2 - ax + bx - ab", answer: "(x-a)(x+b)"},
            {problem: "x^2 + ax - bx - ab", answer: "(x+a)(x-b)"},
            {problem: "x^2 - ax - bx + ab", answer: "(x-a)(x-b)"},
            {problem: "2x^2 + ax + bx + \\frac{ab}{2}", answer: "(2x+a)(x+\\frac{b}{2})"},
            {problem: "3x^2 + ax + bx + \\frac{ab}{3}", answer: "(3x+a)(x+\\frac{b}{3})"},
            {problem: "4x^2 - ax + bx - \\frac{ab}{4}", answer: "(4x-a)(x+\\frac{b}{4})"},
            {problem: "5x^2 - ax - bx + \\frac{ab}{5}", answer: "(5x-a)(x-\\frac{b}{5})"},
            
            // Negative leading coefficients
            {problem: "-x^2 + ax + bx - ab", answer: "-(x-a)(x-b)"},
            {problem: "-x^2 - ax + bx + ab", answer: "-(x+a)(x-b)"},
            {problem: "-x^2 + ax - bx + ab", answer: "-(x-a)(x+b)"},
            {problem: "-x^2 - ax - bx - ab", answer: "-(x+a)(x+b)"},
            {problem: "-2x^2 + 3x - 4x + 6", answer: "-(2x-3)(x+2)"},
            
            // Multiple parameters with different variables
            {problem: "ax^2 + a^2x + bx + ab", answer: "(ax+b)(x+a)"},
            {problem: "bx^2 + abx + yx + ay", answer: "(bx+y)(x+a)"},
            {problem: "yx^2 + ayx + bx + ab", answer: "(yx+b)(x+a)"},
            {problem: "yx^2 - ayx + bx - ab", answer: "(yx+b)(x-a)"},
            
            // Complex rearrangement needed
            {problem: "ab + x^2 + ax + bx", answer: "(x+a)(x+b)"},
            {problem: "ab - x^2 + ax - bx", answer: "(a-x)(x+b)"},
            {problem: "-ab + x^2 - ax + bx", answer: "(x-a)(x+b)"},
            {problem: "-ab - x^2 + ax + bx", answer: "-(x-a)(x-b)"},
            {problem: "2ab + 2x^2 + 2ax + 2bx", answer: "2(x+a)(x+b)"},
            {problem: "3ay - 3x^2 + 3ax - 3yx", answer: "3(a-x)(x+y)"},
            
            // Mixed variable expressions with parameters
            {problem: "axy + ay + bxy + by", answer: "y(a+b)(x+1)"},
            {problem: "axy - ay + bxy - by", answer: "y(a+b)(x-1)"},
            {problem: "axy + ay - bxy - by", answer: "y(a-b)(x+1)"},
            {problem: "axy - ay - bxy + by", answer: "y(a-b)(x-1)"},
            {problem: "2axy + 3ay + 2bxy + 3by", answer: "y(a+b)(2x+3)"},

            // Very complex parameter relationships
            {problem: "ay^2 + a^2y + by^2 + aby", answer: "y(a+b)(y+a)"},
            {problem: "bx^2 - abx + yx^2 - ayx", answer: "x(b+y)(x-a)"}
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
window.AlgebraLevels.groupInPairsHard = new GroupInPairsHardLevel();