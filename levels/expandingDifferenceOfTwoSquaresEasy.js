class ExpandingDifferenceOfTwoSquaresEasy {
    constructor() {
        this.key = 'expandingDifferenceOfTwoSquaresEasy';
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
            {problem: "(c+5)(c-5)", answer: "c^2-25"},
            {problem: "(d+7)(d-7)", answer: "d^2-49"},
            {problem: "(e+9)(e-9)", answer: "e^2-81"},
            {problem: "(f+10)(f-10)", answer: "f^2-100"},
            {problem: "(g-3)(g+3)", answer: "g^2-9"},
            {problem: "(h-8)(h+8)", answer: "h^2-64"},
            {problem: "(k-12)(k+12)", answer: "k^2-144"},
            {problem: "(m-15)(m+15)", answer: "m^2-225"},
            
            // Order variations (constant first)
            {problem: "(2+y)(2-y)", answer: "4-y^2"},
            {problem: "(4+z)(4-z)", answer: "16-z^2"},
            {problem: "(9+p)(9-p)", answer: "81-p^2"},
            {problem: "(13+q)(13-q)", answer: "169-q^2"},
            {problem: "(14+r)(14-r)", answer: "196-r^2"},
            {problem: "(3-s)(3+s)", answer: "9-s^2"},
            {problem: "(11-t)(11+t)", answer: "121-t^2"},
            {problem: "(15-u)(15+u)", answer: "225-u^2"},
            
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
            {problem: "(z+6)(z-6)", answer: "z^2-36"},
            {problem: "(w+9)(w-9)", answer: "w^2-81"},
            {problem: "(v+13)(v-13)", answer: "v^2-169"},
            {problem: "(t+17)(t-17)", answer: "t^2-289"},
            {problem: "(s+19)(s-19)", answer: "s^2-361"},
            
            // Additional variety
            {problem: "(n+14)(n-14)", answer: "n^2-196"},
            {problem: "(18-n)(18+n)", answer: "324-n^2"},
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
window.AlgebraLevels.expandingDifferenceOfTwoSquaresEasy = new ExpandingDifferenceOfTwoSquaresEasy();