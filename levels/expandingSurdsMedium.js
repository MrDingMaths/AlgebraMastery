class ExpandingSurdsMedium {
    constructor() {
        this.key = 'expandingSurdsMedium';
        this.name = 'Expanding Surds (Medium)';
        this.usedQuestionIndices = new Set();
        
        this.questions = [
            // More complex single term expansions
            {problem: "3\\sqrt{3}(9 - \\sqrt{21})", answer: "27\\sqrt{3} - 9\\sqrt{7}"},
            {problem: "3\\sqrt{7}(\\sqrt{14} - 2\\sqrt{7})", answer: "21\\sqrt{2} - 42"},
            {problem: "-2\\sqrt{6}(3\\sqrt{2} - 2\\sqrt{3})", answer: "-12\\sqrt{3} + 12\\sqrt{2}"},
            {problem: "3\\sqrt{7}(2\\sqrt{7} + 3\\sqrt{14})", answer: "42 + 63\\sqrt{2}"},
            {problem: "2\\sqrt{3}(7\\sqrt{6} + 5\\sqrt{3})", answer: "42\\sqrt{2} + 30"},
            
            // Expressions with multiple operations
            {problem: "\\sqrt{2}(3 - \\sqrt{3}) - \\sqrt{8}", answer: "\\sqrt{2} - \\sqrt{6}"},
            {problem: "\\sqrt{8}(\\sqrt{6} + \\sqrt{2}) - \\sqrt{3}", answer: "3\\sqrt{3} + 4"},
            {problem: "\\sqrt{5}(\\sqrt{2} + 1) - \\sqrt{40}", answer: "\\sqrt{5} - \\sqrt{10}"},
            {problem: "\\sqrt{44} - 2(\\sqrt{11} - 1)", answer: "2"},
            {problem: "\\sqrt{24} - 2\\sqrt{2}(\\sqrt{3} - 4)", answer: "8\\sqrt{2}"},
            
            // Complex coefficient multiplications
            {problem: "5\\sqrt{5}(5 + \\sqrt{5})", answer: "25\\sqrt{5} + 25"},
            {problem: "5\\sqrt{5}(\\sqrt{5} + 5\\sqrt{5})", answer: "150"},
            {problem: "(\\sqrt{5} + 5\\sqrt{5})(\\sqrt{5} + \\sqrt{5})", answer: "60"},
            
            // Two bracket expansions (FOIL method)
            {problem: "(\\sqrt{3} + 1)(\\sqrt{2} - 1)", answer: "\\sqrt{6} - \\sqrt{3} + \\sqrt{2} - 1"},
            {problem: "(\\sqrt{5} - 2)(\\sqrt{7} + 3)", answer: "\\sqrt{35} + 3\\sqrt{5} - 2\\sqrt{7} - 6"},
            {problem: "(\\sqrt{5} + \\sqrt{2})(\\sqrt{3} + \\sqrt{2})", answer: "\\sqrt{15} + \\sqrt{10} + \\sqrt{6} + 2"},
            {problem: "(\\sqrt{6} - 1)(\\sqrt{6} - 2)", answer: "8 - 3\\sqrt{6}"},
            {problem: "(\\sqrt{7} - 2)(2\\sqrt{7} + 5)", answer: "4 + \\sqrt{7}"},
            
            // Difference of squares (more complex)
            {problem: "(3\\sqrt{2} - \\sqrt{11})(3\\sqrt{2} + \\sqrt{11})", answer: "7"},
            {problem: "(2\\sqrt{6} + 3)(2\\sqrt{6} - 3)", answer: "15"},
            {problem: "(7 - 2\\sqrt{5})(7 + 2\\sqrt{5})", answer: "29"},
            {problem: "(5\\sqrt{8} - 10\\sqrt{2})(5\\sqrt{8} + 10\\sqrt{2})", answer: "0"},
            {problem: "(3\\sqrt{7} - 4\\sqrt{6})(3\\sqrt{7} + 4\\sqrt{6})", answer: "-33"},
            {problem: "(2\\sqrt{10} + 4\\sqrt{5})(2\\sqrt{10} - 4\\sqrt{5})", answer: "-40"},
            {problem: "(4\\sqrt{10} - 5\\sqrt{6})(4\\sqrt{10} + 5\\sqrt{6})", answer: "10"},
            
            // Perfect squares
            {problem: "(\\sqrt{3} + 1)^2", answer: "4 + 2\\sqrt{3}"},
            {problem: "(2 - \\sqrt{6})^2", answer: "10 - 4\\sqrt{6}"},
            {problem: "(4 + \\sqrt{7})^2", answer: "23 + 8\\sqrt{7}"},
            {problem: "(2\\sqrt{3} + 4)^2", answer: "28 + 16\\sqrt{3}"},
            {problem: "(5 + \\sqrt{5})^2", answer: "30 + 10\\sqrt{5}"},
            
            // Additional medium complexity questions
            {problem: "4\\sqrt{2}(3\\sqrt{8} - \\sqrt{2})", answer: "40"},
            {problem: "\\sqrt{12}(\\sqrt{3} + 2\\sqrt{12})", answer: "30"},
            {problem: "2\\sqrt{5}(\\sqrt{20} - 3)", answer: "20 - 6\\sqrt{5}"},
            {problem: "-\\sqrt{6}(2\\sqrt{6} - \\sqrt{24})", answer: "0"},
            {problem: "3\\sqrt{8}(\\sqrt{2} + \\sqrt{18})", answer: "48"},
            
            // More two bracket expansions
            {problem: "(\\sqrt{2} + 3)(\\sqrt{8} - 1)", answer: "1 + 5\\sqrt{2}"},
            {problem: "(2\\sqrt{3} + 1)(\\sqrt{3} - 2)", answer: "4 - 3\\sqrt{3}"},
            {problem: "(\\sqrt{7} + \\sqrt{3})(\\sqrt{7} - \\sqrt{3})", answer: "4"},
            {problem: "(2 + 3\\sqrt{2})(2 - 3\\sqrt{2})", answer: "-14"},
            {problem: "(\\sqrt{11} + 2)(\\sqrt{11} + 3)", answer: "17 + 5\\sqrt{11}"},
            
            // Complex perfect squares
            {problem: "(\\sqrt{2} - 3)^2", answer: "11 - 6\\sqrt{2}"},
            {problem: "(3\\sqrt{5} + 2)^2", answer: "49 + 12\\sqrt{5}"},
            {problem: "(4 - 2\\sqrt{3})^2", answer: "28 - 16\\sqrt{3}"},
            
            // Multi-step problems
            {problem: "2\\sqrt{3}(\\sqrt{12} + 1) - \\sqrt{27}", answer: "12 - \\sqrt{3}"},
            {problem: "\\sqrt{18}(2 + \\sqrt{2}) + \\sqrt{8}", answer: "6 + 8\\sqrt{2}"},
            {problem: "3(\\sqrt{7} - 2) + \\sqrt{7}(\\sqrt{7} + 1)", answer: "1 + 4\\sqrt{7}"}
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
window.AlgebraLevels.expandingSurdsMedium = new ExpandingSurdsMedium();