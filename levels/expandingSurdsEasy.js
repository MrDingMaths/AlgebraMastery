class ExpandingSurdsEasy {
    constructor() {
        this.key = 'expandingSurdsEasy';
        this.name = 'Expanding Surds (Easy)';
        this.usedQuestionIndices = new Set();
        
        this.questions = [
            // Basic surd multiplication - single term with surd
            {problem: "\\sqrt{2}(\\sqrt{10} - \\sqrt{2})", answer: "2\\sqrt{5} - 2"},
            {problem: "\\sqrt{6}(3 + \\sqrt{3})", answer: "3\\sqrt{6} + 3\\sqrt{2}"},
            {problem: "\\sqrt{5}(\\sqrt{15} + 4)", answer: "5\\sqrt{3} + 4\\sqrt{5}"},
            {problem: "\\sqrt{6}(\\sqrt{8} - 2)", answer: "4\\sqrt{3} - 2\\sqrt{6}"},
            
            // Basic whole number and surd products
            {problem: "5 \\times 5", answer: "25"},
            {problem: "5 \\times \\sqrt{5}", answer: "5\\sqrt{5}"},
            {problem: "\\sqrt{5} \\times \\sqrt{5}", answer: "5"},
            {problem: "5 \\times 5\\sqrt{5}", answer: "25\\sqrt{5}"},
            {problem: "\\sqrt{5} \\times 5\\sqrt{5}", answer: "25"},
            {problem: "5\\sqrt{5} \\times 5\\sqrt{5}", answer: "125"},
            
            // Simple bracket expansions
            {problem: "5(5 + \\sqrt{5})", answer: "25 + 5\\sqrt{5}"},
            {problem: "\\sqrt{5}(5 + \\sqrt{5})", answer: "5\\sqrt{5} + 5"},
            {problem: "5(5 + 5\\sqrt{5})", answer: "25 + 25\\sqrt{5}"},
            
            // Simple difference of squares with surds
            {problem: "(5 + \\sqrt{5})(5 - \\sqrt{5})", answer: "20"},
            {problem: "(3 - \\sqrt{2})(3 + \\sqrt{2})", answer: "7"},
            {problem: "(5 - \\sqrt{6})(5 + \\sqrt{6})", answer: "19"},
            {problem: "(\\sqrt{3} + \\sqrt{2})(\\sqrt{3} - \\sqrt{2})", answer: "1"},
            
            // Additional easy questions to reach variety
            {problem: "\\sqrt{3}(\\sqrt{12} + 2)", answer: "6 + 2\\sqrt{3}"},
            {problem: "\\sqrt{7}(\\sqrt{7} - 3)", answer: "7 - 3\\sqrt{7}"},
            {problem: "2\\sqrt{2}(\\sqrt{8} + 1)", answer: "8 + 2\\sqrt{2}"},
            {problem: "\\sqrt{11}(4 + \\sqrt{11})", answer: "4\\sqrt{11} + 11"},
            {problem: "3(\\sqrt{5} + 2)", answer: "3\\sqrt{5} + 6"},
            {problem: "\\sqrt{2}(\\sqrt{18} - 4)", answer: "6 - 4\\sqrt{2}"},
            {problem: "\\sqrt{3} \\times \\sqrt{12}", answer: "6"},
            {problem: "\\sqrt{8} \\times \\sqrt{2}", answer: "4"},
            {problem: "2\\sqrt{3} \\times \\sqrt{3}", answer: "6"},
            {problem: "\\sqrt{6} \\times \\sqrt{6}", answer: "6"},
            {problem: "(2 + \\sqrt{3})(2 - \\sqrt{3})", answer: "1"},
            {problem: "(4 - \\sqrt{7})(4 + \\sqrt{7})", answer: "9"},
            {problem: "(1 + \\sqrt{11})(1 - \\sqrt{11})", answer: "-10"},
            {problem: "(\\sqrt{5} + 1)(\\sqrt{5} - 1)", answer: "4"},
            
            // Simple single bracket expansions
            {problem: "\\sqrt{2}(3 + \\sqrt{8})", answer: "3\\sqrt{2} + 4"},
            {problem: "\\sqrt{5}(2\\sqrt{5} - 1)", answer: "10 - \\sqrt{5}"},
            {problem: "3\\sqrt{2}(\\sqrt{2} + 4)", answer: "6 + 12\\sqrt{2}"},
            {problem: "2(\\sqrt{7} + 3\\sqrt{7})", answer: "8\\sqrt{7}"},
            {problem: "\\sqrt{10}(\\sqrt{10} + 2)", answer: "10 + 2\\sqrt{10}"},
            
            // Basic coefficient multiplications
            {problem: "2\\sqrt{3} \\times 3\\sqrt{3}", answer: "18"},
            {problem: "4\\sqrt{2} \\times \\sqrt{2}", answer: "8"},
            {problem: "5\\sqrt{6} \\times 2\\sqrt{6}", answer: "60"},
            {problem: "3\\sqrt{5} \\times \\sqrt{5}", answer: "15"},
            
            // More difference of squares
            {problem: "(6 + \\sqrt{2})(6 - \\sqrt{2})", answer: "34"},
            {problem: "(\\sqrt{8} + \\sqrt{2})(\\sqrt{8} - \\sqrt{2})", answer: "6"},
            {problem: "(3\\sqrt{2} + 1)(3\\sqrt{2} - 1)", answer: "17"},
            {problem: "(2\\sqrt{3} + 2)(2\\sqrt{3} - 2)", answer: "8"}
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
window.AlgebraLevels.expandingSurdsEasy = new ExpandingSurdsEasy();