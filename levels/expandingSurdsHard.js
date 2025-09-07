class ExpandingSurdsHard {
    constructor() {
        this.key = 'expandingSurdsHard';
        this.name = 'Expanding Surds (Hard)';
        this.usedQuestionIndices = new Set();
        
        this.questions = [
            // Very complex single term expansions
            {problem: "-2\\sqrt{8}(2\\sqrt{2} - 3\\sqrt{20})", answer: "-16 + 24\\sqrt{10}"},
            {problem: "2\\sqrt{3}(\\sqrt{6} - \\sqrt{3}) - \\sqrt{50}", answer: "\\sqrt{2} - 6"},
            
            // Complex multi-bracket expansions
            {problem: "(5 + \\sqrt{5})(5 + 5\\sqrt{5})", answer: "50 + 30\\sqrt{5}"},
            {problem: "(5 + 5\\sqrt{5})^2", answer: "150 + 50\\sqrt{5}"},
            
            // Advanced FOIL expansions
            {problem: "(3\\sqrt{2} - 1)(\\sqrt{6} - \\sqrt{3})", answer: "7\\sqrt{3} - 4\\sqrt{6}"},
            {problem: "(3 - 2\\sqrt{7})(\\sqrt{21} - 4\\sqrt{3})", answer: "11\\sqrt{21} - 26\\sqrt{3}"},
            {problem: "(2\\sqrt{6} + 5)(\\sqrt{30} - 2\\sqrt{5})", answer: "2\\sqrt{5} + \\sqrt{30}"},
            {problem: "(3\\sqrt{5} + 1)(\\sqrt{7} + 2\\sqrt{35})", answer: "5\\sqrt{35} + 31\\sqrt{7}"},
            {problem: "(4\\sqrt{2} + \\sqrt{7})(3\\sqrt{14} - 5)", answer: "19\\sqrt{7} + \\sqrt{2}"},
            {problem: "(3\\sqrt{3} + 4)(\\sqrt{6} - 2\\sqrt{2})", answer: "\\sqrt{2} - 2\\sqrt{6}"},
            {problem: "(5 - 3\\sqrt{2})(2\\sqrt{10} + 3\\sqrt{5})", answer: "\\sqrt{10} + 3\\sqrt{5}"},
            
            // Expressions with fractions
            {problem: "(1 + \\frac{1}{\\sqrt{2}})^2", answer: "\\frac{3}{2} + \\sqrt{2}"},
            {problem: "(\\sqrt{3} - \\frac{1}{\\sqrt{3}})^2", answer: "\\frac{4}{3}"},
            
            // Complex perfect squares
            {problem: "(2\\sqrt{7} + \\sqrt{5})^2", answer: "33 + 4\\sqrt{35}"},
            {problem: "(3\\sqrt{2} - 2\\sqrt{3})^2", answer: "30 - 12\\sqrt{6}"},
            {problem: "(5\\sqrt{3} - 2\\sqrt{8})^2", answer: "107 - 40\\sqrt{6}"},
            {problem: "(3\\sqrt{5} + 4\\sqrt{7})^2", answer: "157 + 24\\sqrt{35}"},
            {problem: "(5\\sqrt{6} + 3\\sqrt{5})^2", answer: "195 + 30\\sqrt{30}"},
            
            // Additional hard complexity questions
            {problem: "\\sqrt{12}(\\sqrt{27} - 2\\sqrt{3}) + \\sqrt{48}", answer: "6 + 4\\sqrt{3}"},
            {problem: "2\\sqrt{18}(\\sqrt{8} - 3) - 4\\sqrt{2}", answer: "24 - 22\\sqrt{2}"},
            {problem: "-3\\sqrt{20}(2\\sqrt{5} - \\sqrt{45}) + \\sqrt{80}", answer: "30 + 4\\sqrt{5}"},
            
            // Nested bracket expansions
            {problem: "\\sqrt{2}(\\sqrt{8} + \\sqrt{18}) - 2(\\sqrt{2} + 1)", answer: "8 - 2\\sqrt{2}"},
            {problem: "3\\sqrt{5}(2\\sqrt{10} + \\sqrt{5}) - \\sqrt{125}", answer: "30\\sqrt{2} + 15 - 5\\sqrt{5}"},
            {problem: "\\sqrt{6}(\\sqrt{24} - 2\\sqrt{6}) + 3\\sqrt{2}", answer: "3\\sqrt{2}"},
            
            // Complex difference of squares variations
            {problem: "(2\\sqrt{3} + 3\\sqrt{2})(2\\sqrt{3} - 3\\sqrt{2})", answer: "-6"},
            {problem: "(4\\sqrt{5} - 2\\sqrt{7})(4\\sqrt{5} + 2\\sqrt{7})", answer: "52"},
            {problem: "(3\\sqrt{11} + 5\\sqrt{3})(3\\sqrt{11} - 5\\sqrt{3})", answer: "24"},
            
            // Triple bracket expressions
            {problem: "\\sqrt{3}(\\sqrt{12} + 2)(\\sqrt{3} - 1)", answer: "4\\sqrt{3}"},
            {problem: "2\\sqrt{2}(\\sqrt{8} - 1)(\\sqrt{2} + 2)", answer: "12 + 4\\sqrt{2}"},
            
            // Advanced multi-step problems
            {problem: "3(\\sqrt{7} + 2)^2 - 2\\sqrt{7}(\\sqrt{7} - 3)", answer: "19 + 18\\sqrt{7}"},
            {problem: "(\\sqrt{5} + 2)^3", answer: "38 + 17\\sqrt{5}"},
            {problem: "2\\sqrt{3}(\\sqrt{12} + 3) + (\\sqrt{3} + 1)^2", answer: "16 + 8\\sqrt{3}"},
            
            // Rationalization with expansion
            {problem: "(\\sqrt{2} + 1)(\\sqrt{8} - \\sqrt{2})", answer: "2 + \\sqrt{2}"},
            {problem: "(\\sqrt{6} - \\sqrt{2})(\\sqrt{24} + \\sqrt{8})", answer: "8"},
            {problem: "(2\\sqrt{15} + 3\\sqrt{5})(\\sqrt{3} - \\sqrt{15})", answer: "6\\sqrt{5} - 30 + 3\\sqrt{15} - 15\\sqrt{3}"},
            
            // Complex coefficient manipulations
            {problem: "4\\sqrt{6}(\\sqrt{54} - 2\\sqrt{6}) + 3\\sqrt{24}", answer: "24 + 6\\sqrt{6}"},
            {problem: "-2\\sqrt{12}(3\\sqrt{3} - \\sqrt{27}) - \\sqrt{48}", answer: "-4\\sqrt{3}"},
            {problem: "5\\sqrt{8}(\\sqrt{32} - 3\\sqrt{2}) + 2\\sqrt{18}", answer: "20 + 6\\sqrt{2}"},
            
            // Extreme complexity
            {problem: "(\\sqrt{7} + \\sqrt{11})(\\sqrt{77} - \\sqrt{7}\\sqrt{11})", answer: "0"},
            {problem: "(2\\sqrt{6} + \\sqrt{15})(\\sqrt{10} - 2\\sqrt{3})", answer: "4\\sqrt{15} - 12\\sqrt{2} + 5\\sqrt{6} - 6\\sqrt{5}"},
            {problem: "(3\\sqrt{14} - \\sqrt{21})(\\sqrt{7} + 2\\sqrt{6})", answer: "21\\sqrt{2} + 12\\sqrt{21} - 7\\sqrt{3} - 6\\sqrt{14}"},
            
            // Final challenging questions
            {problem: "\\sqrt{5}(\\sqrt{20} + \\sqrt{45}) - 2(\\sqrt{5} + \\sqrt{45})", answer: "25 - 8\\sqrt{5}"},
            {problem: "(\\sqrt{12} + \\sqrt{8})(\\sqrt{27} - \\sqrt{18}) + \\sqrt{72}", answer: "6 + 6\\sqrt{2}"},
            {problem: "3\\sqrt{2}(\\sqrt{32} + 2\\sqrt{8}) - (\\sqrt{2} + 4)^2", answer: "30 - 8\\sqrt{2}"}
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
window.AlgebraLevels.expandingSurdsHard = new ExpandingSurdsHard();