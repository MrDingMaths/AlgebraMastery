// levels/multiplyTermsMedium.js
class MultiplyTermsMediumLevel {
    constructor() {
        this.key = 'multiplyTermsMedium';
        this.name = 'Multiplying Terms (Medium)';
        this.usedQuestionIndices = new Set();
        
        // Predefined questions for medium level multiplying terms
        this.questions = [

            // Multiplying Two Negative Terms
            {problem: "(-3x) \\times (-4)", answer: "12x"},
            {problem: "(-7m) \\times (-2n)", answer: "14mn"},
            {problem: "(-5a) \\times (-3)", answer: "15a"},
            {problem: "(-4y) \\times (-6b)", answer: "24by"},
            {problem: "(-2p) \\times (-7)", answer: "14p"},
            {problem: "(-8r) \\times (-3s)", answer: "24rs"},
            {problem: "(-6t) \\times (-2)", answer: "12t"},
            {problem: "(-9n) \\times (-4q)", answer: "36nq"},
            {problem: "(-3z) \\times (-5)", answer: "15z"},
            {problem: "(-7w) \\times (-2v)", answer: "14vw"},

            // Products of Three Simple Factors
            {problem: "5a \\times (-2) \\times 3b", answer: "-30ab"},
            {problem: "6 \\times x \\times (-4)", answer: "-24x"},
            {problem: "3x \\times 2 \\times 4y", answer: "24xy"},
            {problem: "7m \\times (-3) \\times 2n", answer: "-42mn"},
            {problem: "4 \\times (-5) \\times 3p", answer: "-60p"},
            {problem: "2a \\times 6 \\times (-3)", answer: "-36a"},
            {problem: "(-4) \\times 3y \\times 5", answer: "-60y"},
            {problem: "8r \\times (-1) \\times 2s", answer: "-16rs"},
            {problem: "(-2) \\times 4w \\times 3v", answer: "-24vw"},
            {problem: "7 \\times (-2z) \\times 3", answer: "-42z"},

            // Additional problems from user list
            {problem: "-3z \\times 2w", answer: "-6wz"},
            {problem: "-5a \\times -3b", answer: "15ab"},
            {problem: "x \\times 2y \\times 7z", answer: "14xyz"},
            {problem: "-4r \\times 3 \\times 2s", answer: "-24rs"},
            {problem: "5j \\times (-4) \\times 2k", answer: "-40jk"},
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
        
        let question = { ...this.questions[questionIndex] };
        
        // 70% chance to convert to implied multiplication
        if (Math.random() < 0.7) {
            question.problem = this.convertToImpliedMultiplication(question.problem);
        }
        
        return question;
    }
    
    convertToImpliedMultiplication(problem) {
        // Convert expressions like "3 \times 5a" to "3(5a)"
        // Also handle more complex cases like "6q \times (-2p)" to "6q(-2p)"
        let result = problem;
        
        // Basic pattern: coefficient times term
        result = result.replace(/(\d+)\s*\\times\s*(\d*[a-zA-Z][^\s]*)/g, '$1($2)');
        
        // Variable times parenthesized expression: "6q \times (-2p)" -> "6q(-2p)"
        result = result.replace(/([a-zA-Z0-9]+)\s*\\times\s*(\([^)]+\))/g, '$1$2');
        
        // Term times parenthesized expression: "2a \times (3b)" -> "2a(3b)"
        result = result.replace(/(\d*[a-zA-Z]+)\s*\\times\s*(\([^)]+\))/g, '$1$2');
        
        return result;
    }

    getQuestions() {
        return this.questions;
    }
}

// Register the level
window.AlgebraLevels = window.AlgebraLevels || {};
window.AlgebraLevels.multiplyTermsMedium = new MultiplyTermsMediumLevel();