// levels/addSubtractingSurdsEasy.js
class AddSubtractingSurdsEasyLevel {
    constructor() {
        this.key = 'addSubtractingSurdsEasy';
        this.name = 'Adding/Subtracting Surds (Easy)';
        this.usedQuestionIndices = new Set();
        
        // Easy level: Basic like surds, simple simplification
        this.questions = [
            // Direct like surd operations (from textbook)
            {problem: "2\\sqrt{5} + 4\\sqrt{5}", answer: "6\\sqrt{5}"},
            {problem: "5\\sqrt{3} - 2\\sqrt{3}", answer: "3\\sqrt{3}"},
            {problem: "7\\sqrt{2} - 3\\sqrt{2}", answer: "4\\sqrt{2}"},
            {problem: "8\\sqrt{2} - 5\\sqrt{2}", answer: "3\\sqrt{2}"},
            {problem: "4\\sqrt{10} + 3\\sqrt{10} - \\sqrt{10}", answer: "6\\sqrt{10}"},
            {problem: "\\sqrt{21} - 5\\sqrt{21} + 2\\sqrt{21}", answer: "-2\\sqrt{21}"},
            
            // Simplification required (from textbook)
            {problem: "\\sqrt{3} + \\sqrt{48}", answer: "5\\sqrt{3}"},
            {problem: "\\sqrt{48} - 7\\sqrt{3}", answer: "-3\\sqrt{3}"},
            {problem: "5\\sqrt{48} - 3\\sqrt{3}", answer: "17\\sqrt{3}"},
            {problem: "\\sqrt{8} - \\sqrt{2}", answer: "\\sqrt{2}"},
            {problem: "\\sqrt{8} + 3\\sqrt{2}", answer: "5\\sqrt{2}"},
            {problem: "\\sqrt{27} + \\sqrt{3}", answer: "4\\sqrt{3}"},
            {problem: "\\sqrt{20} - \\sqrt{5}", answer: "\\sqrt{5}"},
            {problem: "4\\sqrt{18} - 5\\sqrt{2}", answer: "7\\sqrt{2}"},
            {problem: "2\\sqrt{75} + 2\\sqrt{3}", answer: "12\\sqrt{3}"},
            {problem: "3\\sqrt{44} + 2\\sqrt{11}", answer: "8\\sqrt{11}"},
            
            // Additional textbook questions
            {problem: "2\\sqrt{3} + 5\\sqrt{3}", answer: "7\\sqrt{3}"},
            {problem: "2\\sqrt{3} + 5\\sqrt{6}", answer: "2\\sqrt{3} + 5\\sqrt{6}"},
            {problem: "2\\sqrt{3} + 5\\sqrt{12}", answer: "12\\sqrt{3}"},
            {problem: "2\\sqrt{3} + 5\\sqrt{27}", answer: "17\\sqrt{3}"},
            {problem: "2\\sqrt{3} + 6\\sqrt{27}", answer: "20\\sqrt{3}"},
            {problem: "6\\sqrt{6} + 2\\sqrt{24}", answer: "10\\sqrt{6}"},
            
            // Additional generated questions - basic like surds
            {problem: "3\\sqrt{2} + 4\\sqrt{2}", answer: "7\\sqrt{2}"},
            {problem: "6\\sqrt{5} - 2\\sqrt{5}", answer: "4\\sqrt{5}"},
            {problem: "9\\sqrt{7} - 4\\sqrt{7}", answer: "5\\sqrt{7}"},
            {problem: "\\sqrt{11} + 3\\sqrt{11}", answer: "4\\sqrt{11}"},
            {problem: "5\\sqrt{13} - \\sqrt{13}", answer: "4\\sqrt{13}"},
            {problem: "2\\sqrt{17} + \\sqrt{17}", answer: "3\\sqrt{17}"},
            {problem: "8\\sqrt{19} - 3\\sqrt{19}", answer: "5\\sqrt{19}"},
            
            // Simple three-term combinations
            {problem: "\\sqrt{2} + 3\\sqrt{2} + 2\\sqrt{2}", answer: "6\\sqrt{2}"},
            {problem: "4\\sqrt{3} - \\sqrt{3} + 2\\sqrt{3}", answer: "5\\sqrt{3}"},
            {problem: "2\\sqrt{5} + \\sqrt{5} - \\sqrt{5}", answer: "2\\sqrt{5}"},
            {problem: "6\\sqrt{7} - 2\\sqrt{7} - 3\\sqrt{7}", answer: "\\sqrt{7}"},
            
            // Basic simplification with perfect square factors
            {problem: "\\sqrt{4} + \\sqrt{16}", answer: "6"},
            {problem: "\\sqrt{9} + \\sqrt{25}", answer: "8"},
            {problem: "\\sqrt{36} - \\sqrt{4}", answer: "4"},
            {problem: "\\sqrt{49} - \\sqrt{9}", answer: "4"},
            
            // Simple mixed simplification
            {problem: "\\sqrt{12} + \\sqrt{3}", answer: "3\\sqrt{3}"},
            {problem: "\\sqrt{18} - \\sqrt{2}", answer: "2\\sqrt{2}"},
            {problem: "\\sqrt{32} + \\sqrt{8}", answer: "6\\sqrt{2}"},
            {problem: "\\sqrt{50} - \\sqrt{2}", answer: "4\\sqrt{2}"},
            {problem: "2\\sqrt{8} + \\sqrt{2}", answer: "5\\sqrt{2}"},
            {problem: "3\\sqrt{12} - \\sqrt{3}", answer: "5\\sqrt{3}"},
            {problem: "\\sqrt{45} + \\sqrt{5}", answer: "4\\sqrt{5}"},
            {problem: "2\\sqrt{18} - \\sqrt{2}", answer: "5\\sqrt{2}"},
            
            // Simple coefficient operations
            {problem: "\\sqrt{5} + 2\\sqrt{5}", answer: "3\\sqrt{5}"},
            {problem: "4\\sqrt{6} - \\sqrt{6}", answer: "3\\sqrt{6}"},
            {problem: "\\sqrt{8} + 2\\sqrt{8}", answer: "6\\sqrt{2}"},
            {problem: "5\\sqrt{11} - 2\\sqrt{11}", answer: "3\\sqrt{11}"}
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
window.AlgebraLevels.addSubtractingSurdsEasy = new AddSubtractingSurdsEasyLevel();