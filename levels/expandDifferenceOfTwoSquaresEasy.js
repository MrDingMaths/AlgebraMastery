class ExpandDifferenceOfTwoSquaresEasyLevel {
    constructor() {
        this.key = 'expandDifferenceOfTwoSquaresEasy';
        this.name = 'Expanding Difference of Two Squares (Easy)';
        this.usedQuestionIndices = new Set();
        
        // Questions covering basic difference of two squares patterns (a+b)(a-b) = a^2 - b^2
        this.questions = [
            
            // Textbook questions - basic patterns with x and constants
            {problem: "(x+1)(x-1)", answer: "x^2-1"},
            {problem: "(x+3)(x-3)", answer: "x^2-9"},
            {problem: "(x+8)(x-8)", answer: "x^2-64"},
            {problem: "(x-6)(x+6)", answer: "x^2-36"},
            {problem: "(6-x)(6+x)", answer: "36-x^2"},
            {problem: "(5+x)(5-x)", answer: "25-x^2"},
            {problem: "(x+11)(x-11)", answer: "x^2-121"},
            {problem: "(12+x)(12-x)", answer: "144-x^2"},
            {problem: "(7+x)(7-x)", answer: "49-x^2"},
            
            // Additional basic patterns with different variables
            {problem: "(a+2)(a-2)", answer: "a^2-4"},
            {problem: "(b+4)(b-4)", answer: "b^2-16"},
            {problem: "(x+5)(x-5)", answer: "x^2-25"},
            {problem: "(x+7)(x-7)", answer: "x^2-49"},
            {problem: "(x+9)(x-9)", answer: "x^2-81"},
            {problem: "(x+10)(x-10)", answer: "x^2-100"},
            {problem: "(x-3)(x+3)", answer: "x^2-9"},
            {problem: "(x-8)(x+8)", answer: "x^2-64"},
            {problem: "(x-12)(x+12)", answer: "x^2-144"},
            {problem: "(x-15)(x+15)", answer: "x^2-225"},
            
            // Order variations (constant first)
            {problem: "(2+y)(2-y)", answer: "4-y^2"},
            {problem: "(4+x)(4-x)", answer: "16-x^2"},
            {problem: "(9+x)(9-x)", answer: "81-x^2"},
            {problem: "(13+x)(13-x)", answer: "169-x^2"},
            {problem: "(14+x)(14-x)", answer: "196-x^2"},
            {problem: "(3-x)(3+x)", answer: "9-x^2"},
            {problem: "(11-x)(11+x)", answer: "121-x^2"},
            {problem: "(15-x)(15+x)", answer: "225-x^2"},
            
            // Perfect square constants
            {problem: "(x+4)(x-4)", answer: "x^2-16"},
            {problem: "(x+25)(x-25)", answer: "x^2-625"},
            {problem: "(16+x)(16-x)", answer: "256-x^2"},
            {problem: "(x-25)(x+25)", answer: "x^2-625"},
            {problem: "(20+x)(20-x)", answer: "400-x^2"},
            {problem: "(x+30)(x-30)", answer: "x^2-900"},
            
            // Small integer patterns
            {problem: "(x+2)(x-2)", answer: "x^2-4"},
            {problem: "(y+5)(y-5)", answer: "y^2-25"},
            {problem: "(x+6)(x-6)", answer: "x^2-36"},
            {problem: "(x+13)(x-13)", answer: "x^2-169"},
            {problem: "(x+17)(x-17)", answer: "x^2-289"},
            {problem: "(x+19)(x-19)", answer: "x^2-361"},
            
            // Additional variety
            {problem: "(x+14)(x-14)", answer: "x^2-196"},
            {problem: "(18-x)(18+x)", answer: "324-x^2"},
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
window.AlgebraLevels.expandDifferenceOfTwoSquaresEasy = new ExpandDifferenceOfTwoSquaresEasyLevel();