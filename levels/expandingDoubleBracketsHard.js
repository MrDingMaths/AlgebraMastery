class ExpandingDoubleBracketsHard {
    constructor() {
        this.key = 'expandingDoubleBracketsHard';
        this.name = 'Expanding Double Brackets (Hard)';
        this.usedQuestionIndices = new Set();
        
        // Predefined questions covering hard complexity double bracket expansion
        this.questions = [
            
            // Subtraction of complex double bracket expressions
            {problem: "(2a+3)(a-5) - (a+6)(2a+5)", answer: "-24a - 45"},
            {problem: "(4b+8)(b+5) - (3b-5)(b-7)", answer: "b^2 + 54b + 5"},
            
            // Constants subtracted from perfect squares
            {problem: "3 - (2x-9)(2x-9)", answer: "-4x^2 + 36x - 78"},
            {problem: "14 - (5x+3)(5x+3)", answer: "-25x^2 - 30x + 5"},
            
            // Triple products (variable × double brackets)
            {problem: "-3a(a+2)(a-7)", answer: "-3a^3 + 15a^2 + 42a"},
            {problem: "-5a(a+2)(a-8)", answer: "-5a^3 + 30a^2 + 80a"},
            
            // General algebraic expressions
            {problem: "(ax-b)(cx-d)", answer: "acx^2 - adx - bcx + bd"},
            {problem: "(ax+b)(cx+d)", answer: "acx^2 + adx + bcx + bd"},
            {problem: "(a+b)(a+c)", answer: "a^2 + ab + ac + bc"},
            {problem: "(a-b)(a+c)", answer: "a^2 - ab + ac - bc"},
            
            // Multi-variable expressions
            {problem: "(y-x)(z-y)", answer: "xy - xz - y^2 + yz"},
            {problem: "(2x+y)(x-2y)", answer: "2x^2 - 3xy - 2y^2"},
            {problem: "(2a+b)(a-b)", answer: "2a^2 - ab - b^2"},
            {problem: "(3x-y)(2x+y)", answer: "6x^2 + xy - y^2"},
            {problem: "(2a-b)(3a+2)", answer: "6a^2 - 3ab + 4a - 2b"},
            {problem: "(4x-3y)(3x-4y)", answer: "12x^2 - 25xy + 12y^2"},
            {problem: "(xy-yz)(z+3x)", answer: "3x^2y - 2xyz - yz^2"},
            
            // Additional complex algebraic patterns
            {problem: "(3a+2b)(2a-3b)", answer: "6a^2 - 5ab - 6b^2"},
            {problem: "(4x-5y)(2x+3y)", answer: "8x^2 + 2xy - 15y^2"},
            {problem: "(5m+3n)(m-4n)", answer: "5m^2 - 17mn - 12n^2"},
            {problem: "(2p-7q)(3p+2q)", answer: "6p^2 - 17pq - 14q^2"},
            {problem: "(6r+s)(r-2s)", answer: "6r^2 - 11rs - 2s^2"},
            {problem: "(3u-4v)(5u+v)", answer: "15u^2 - 17uv - 4v^2"},
            
            // Cubic expansion patterns
            {problem: "x(x+1)(x-2)", answer: "x^3 - x^2 - 2x"},
            {problem: "2y(y-3)(y+4)", answer: "2y^3 + 2y^2 - 24y"},
            {problem: "-x(x-5)(x+1)", answer: "-x^3 + 4x^2 + 5x"},
            {problem: "3z(z+2)(z-6)", answer: "3z^3 - 12z^2 - 36z"},
            
            // Mixed variable coefficients  
            {problem: "(ab+c)(ab-c)", answer: "a^2b^2 - c^2"},
            {problem: "(2xy+3)(xy-5)", answer: "2x^2y^2 - 7xy - 15"},
            {problem: "(3pq-2r)(pq+4r)", answer: "3p^2q^2 + 10pqr - 8r^2"},
            
            // Complex rational expressions
            {problem: "(3x-2y)(4x+5y) - (2x+y)(x-3y)", answer: "10x^2 + 12xy - 7y^2"},
            {problem: "(5a+3b)(2a-b) - (a+4b)(3a-2b)", answer: "7a^2 - 9ab + 5b^2"},
            {problem: "(4p-q)(p+2q) - (2p-3q)(p+q)", answer: "2p^2 + 8pq + q^2"},
            
            // Very challenging patterns
            {problem: "x(x+y)(x-y) + y(x+y)(x-y)", answer: "x^3 + x^2y - xy^2 - y^3"},
            {problem: "(x^2+1)(x^2-1)", answer: "x^4 - 1"},
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
window.AlgebraLevels.expandingDoubleBracketsHard = new ExpandingDoubleBracketsHard();