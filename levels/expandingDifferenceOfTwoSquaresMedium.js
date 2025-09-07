class ExpandingDifferenceOfTwoSquaresMedium {
    constructor() {
        this.key = 'expandingDifferenceOfTwoSquaresMedium';
        this.name = 'Expanding Difference of Two Squares (Medium)';
        this.usedQuestionIndices = new Set();
        
        // Questions covering coefficient and two-variable difference of squares patterns
        this.questions = [
            
            // Textbook questions with coefficients
            {problem: "(3x-2)(3x+2)", answer: "9x^2-4"},
            {problem: "(5x-4)(5x+4)", answer: "25x^2-16"},
            {problem: "(4x-3)(4x+3)", answer: "16x^2-9"},
            {problem: "(9x-5y)(9x+5y)", answer: "81x^2-25y^2"},
            {problem: "(11x-y)(11x+y)", answer: "121x^2-y^2"},
            {problem: "(8x+2y)(8x-2y)", answer: "64x^2-4y^2"},
            {problem: "(7x-5y)(7x+5y)", answer: "49x^2-25y^2"},
            {problem: "(8x-3y)(8x+3y)", answer: "64x^2-9y^2"},
            {problem: "(9x-4y)(9x+4y)", answer: "81x^2-16y^2"},
            
            // Powers of variables
            {problem: "(x^2+7)(x^2-7)", answer: "x^4-49"},
            {problem: "(x^2-11)(x^2+11)", answer: "x^4-121"},
            {problem: "(x^3+2y)(x^3-2y)", answer: "x^6-4y^2"},
            
            // Square roots
            {problem: "(x+\\sqrt{7})(x-\\sqrt{7})", answer: "x^2-7"},
            {problem: "(x-\\sqrt{5})(x+\\sqrt{5})", answer: "x^2-5"},
            {problem: "(3x+\\sqrt{17})(3x-\\sqrt{17})", answer: "9x^2-17"},
            {problem: "(x^2+\\sqrt{21})(x^2-\\sqrt{21})", answer: "x^4-21"},
            {problem: "(2x^3-\\sqrt{10})(2x^3+\\sqrt{10})", answer: "4x^6-10"},
            {problem: "(\\sqrt{6}+3x)(\\sqrt{6}-3x)", answer: "6-9x^2"},
            
            // Order variations and mixed variables
            {problem: "(5+2a)(2a-5)", answer: "4a^2-25"},
            {problem: "(ab-8)(ab+8)", answer: "a^2b^2-64"},
            {problem: "(9-4g)(4g+9)", answer: "81-16g^2"},
            {problem: "(2-11hm)(2+11hm)", answer: "4-121h^2m^2"},
            
            // Additional coefficient patterns
            {problem: "(2x+5)(2x-5)", answer: "4x^2-25"},
            {problem: "(6x+1)(6x-1)", answer: "36x^2-1"},
            {problem: "(7x-2)(7x+2)", answer: "49x^2-4"},
            {problem: "(10x-3)(10x+3)", answer: "100x^2-9"},
            {problem: "(12x+7)(12x-7)", answer: "144x^2-49"},
            {problem: "(3y-8)(3y+8)", answer: "9y^2-64"},
            {problem: "(4z+9)(4z-9)", answer: "16z^2-81"},
            {problem: "(5w-6)(5w+6)", answer: "25w^2-36"},
            
            // Two-variable patterns
            {problem: "(2a-3b)(2a+3b)", answer: "4a^2-9b^2"},
            {problem: "(4p+7q)(4p-7q)", answer: "16p^2-49q^2"},
            {problem: "(6m-5n)(6m+5n)", answer: "36m^2-25n^2"},
            {problem: "(3r+8s)(3r-8s)", answer: "9r^2-64s^2"},
            {problem: "(10u-3v)(10u+3v)", answer: "100u^2-9v^2"},
            {problem: "(7c+4d)(7c-4d)", answer: "49c^2-16d^2"},
            {problem: "(12f-g)(12f+g)", answer: "144f^2-g^2"},
            {problem: "(2h+9k)(2h-9k)", answer: "4h^2-81k^2"},
            
            // More coefficient variations
            {problem: "(13x-4)(13x+4)", answer: "169x^2-16"},
            {problem: "(15y+2)(15y-2)", answer: "225y^2-4"},
            {problem: "(11z-6)(11z+6)", answer: "121z^2-36"},
            {problem: "(14w+5)(14w-5)", answer: "196w^2-25"},
            {problem: "(16a-7)(16a+7)", answer: "256a^2-49"},
            {problem: "(17b+3)(17b-3)", answer: "289b^2-9"},
            
            // Higher powers
            {problem: "(y^2+4)(y^2-4)", answer: "y^4-16"},
            {problem: "(z^2-9)(z^2+9)", answer: "z^4-81"},
            {problem: "(w^3+5)(w^3-5)", answer: "w^6-25"},
            {problem: "(u^3-6)(u^3+6)", answer: "u^6-36"},
            {problem: "(t^4+8)(t^4-8)", answer: "t^8-64"},
            
            // Product of variables with coefficients
            {problem: "(3xy+4)(3xy-4)", answer: "9x^2y^2-16"},
            {problem: "(2ab-7)(2ab+7)", answer: "4a^2b^2-49"},
            {problem: "(5cd+3)(5cd-3)", answer: "25c^2d^2-9"},
            {problem: "(4ef-9)(4ef+9)", answer: "16e^2f^2-81"},
            {problem: "(6gh+1)(6gh-1)", answer: "36g^2h^2-1"}
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
window.AlgebraLevels.expandingDifferenceOfTwoSquaresMedium = new ExpandingDifferenceOfTwoSquaresMedium();