// levels/addSubtractingSurdsMedium.js
class AddSubtractingSurdsMediumLevel {
    constructor() {
        this.key = 'addSubtractingSurdsMedium';
        this.name = 'Adding/Subtracting Surds (Medium)';
        this.usedQuestionIndices = new Set();
        
        // Medium level: Multiple different surds, more complex simplification
        this.questions = [
            // Multi-term expressions from textbook
            {problem: "2\\sqrt{3} + 3\\sqrt{2} - \\sqrt{3} + 2\\sqrt{3}", answer: "3\\sqrt{3} + 3\\sqrt{2}"},
            {problem: "3\\sqrt{5} - 4\\sqrt{2} + \\sqrt{5} - 3\\sqrt{2}", answer: "4\\sqrt{5} - 7\\sqrt{2}"},
            {problem: "5\\sqrt{2} + 2\\sqrt{5} - 7\\sqrt{2} - \\sqrt{5}", answer: "\\sqrt{5} - 2\\sqrt{2}"},
            {problem: "2\\sqrt{3} + 2\\sqrt{7} + 2\\sqrt{3} - 2\\sqrt{7}", answer: "4\\sqrt{3}"},
            {problem: "5\\sqrt{11} + 3\\sqrt{6} - 3\\sqrt{11}", answer: "2\\sqrt{11} + 3\\sqrt{6}"},
            {problem: "-4\\sqrt{10} - 5\\sqrt{2} + \\sqrt{10}", answer: "-3\\sqrt{10} - 5\\sqrt{2}"},
            
            // Complex simplification from textbook
            {problem: "3\\sqrt{8} - \\sqrt{18}", answer: "3\\sqrt{2}"},
            {problem: "2\\sqrt{125} - 3\\sqrt{45}", answer: "\\sqrt{5}"},
            {problem: "2\\sqrt{30} + 6\\sqrt{27}", answer: "2\\sqrt{30} + 18\\sqrt{3}"},
            {problem: "2\\sqrt{30} + 6\\sqrt{120}", answer: "14\\sqrt{30}"},
            {problem: "6\\sqrt{30} + 2\\sqrt{120}", answer: "10\\sqrt{30}"},
            {problem: "6\\sqrt{60} + 2\\sqrt{240}", answer: "20\\sqrt{15}"},
            {problem: "6\\sqrt{6} + 2\\sqrt{24} + 5\\sqrt{36}", answer: "10\\sqrt{6} + 30"},
            {problem: "6\\sqrt{16} + 2\\sqrt{24} + 5\\sqrt{36}", answer: "54 + 4\\sqrt{6}"},
            
            // Additional medium complexity questions
            {problem: "4\\sqrt{7} - 2\\sqrt{3} + 3\\sqrt{7} - \\sqrt{3}", answer: "7\\sqrt{7} - 3\\sqrt{3}"},
            {problem: "\\sqrt{12} + \\sqrt{27} - \\sqrt{3}", answer: "4\\sqrt{3}"},
            {problem: "2\\sqrt{18} - \\sqrt{8} + \\sqrt{2}", answer: "5\\sqrt{2}"},
            {problem: "3\\sqrt{20} - 2\\sqrt{45} + \\sqrt{5}", answer: "\\sqrt{5}"},
            {problem: "\\sqrt{32} + \\sqrt{50} - 2\\sqrt{8}", answer: "5\\sqrt{2}"},
            {problem: "4\\sqrt{12} - 3\\sqrt{27} + 2\\sqrt{3}", answer: "\\sqrt{3}"},
            
            // Mixed rational and irrational terms
            {problem: "\\sqrt{49} + 2\\sqrt{7} - 3", answer: "4 + 2\\sqrt{7}"},
            {problem: "2\\sqrt{25} + \\sqrt{5} - 6", answer: "4 + \\sqrt{5}"},
            {problem: "\\sqrt{36} + 3\\sqrt{6} + 2", answer: "8 + 3\\sqrt{6}"},
            {problem: "4 + \\sqrt{16} + 2\\sqrt{4}", answer: "12"},
            {problem: "\\sqrt{100} - 2\\sqrt{10} + 5", answer: "15 - 2\\sqrt{10}"},
            
            // Four-term expressions
            {problem: "\\sqrt{2} + \\sqrt{8} + \\sqrt{18} - \\sqrt{32}", answer: "2\\sqrt{2}"},
            {problem: "2\\sqrt{3} + \\sqrt{12} - \\sqrt{27} + \\sqrt{48}", answer: "5\\sqrt{3}"},
            {problem: "\\sqrt{5} + 2\\sqrt{20} - \\sqrt{45} + \\sqrt{80}", answer: "6\\sqrt{5}"},
            {problem: "3\\sqrt{7} - \\sqrt{28} + 2\\sqrt{63} - \\sqrt{175}", answer: "2\\sqrt{7}"},
            
            // Negative coefficients
            {problem: "-2\\sqrt{3} + 5\\sqrt{3} - \\sqrt{3}", answer: "2\\sqrt{3}"},
            {problem: "-\\sqrt{5} - 3\\sqrt{5} + 6\\sqrt{5}", answer: "2\\sqrt{5}"},
            {problem: "4\\sqrt{11} - 7\\sqrt{11} + 2\\sqrt{11}", answer: "-\\sqrt{11}"},
            {problem: "-3\\sqrt{13} + \\sqrt{13} - 2\\sqrt{13}", answer: "-4\\sqrt{13}"},
            
            // Complex mixed terms
            {problem: "2\\sqrt{6} + 3\\sqrt{2} + \\sqrt{24} - \\sqrt{8}", answer: "4\\sqrt{6} + \\sqrt{2}"},
            {problem: "\\sqrt{28} + 2\\sqrt{7} - \\sqrt{63} + \\sqrt{175}", answer: "6\\sqrt{7}"},
            {problem: "3\\sqrt{12} + \\sqrt{27} - 2\\sqrt{48} + \\sqrt{3}", answer: "2\\sqrt{3}"},
            {problem: "\\sqrt{50} + 2\\sqrt{18} - 3\\sqrt{8} + \\sqrt{2}", answer: "6\\sqrt{2}"},
            
            // Different radical combinations
            {problem: "2\\sqrt{5} + 3\\sqrt{11} - \\sqrt{5} + 2\\sqrt{11}", answer: "\\sqrt{5} + 5\\sqrt{11}"},
            {problem: "4\\sqrt{13} - 2\\sqrt{17} + 3\\sqrt{13} - \\sqrt{17}", answer: "7\\sqrt{13} - 3\\sqrt{17}"},
            {problem: "\\sqrt{19} + 4\\sqrt{23} - 3\\sqrt{19} + \\sqrt{23}", answer: "-2\\sqrt{19} + 5\\sqrt{23}"},
            
            // Larger coefficients with simplification
            {problem: "5\\sqrt{72} - 3\\sqrt{32} + 2\\sqrt{8}", answer: "22\\sqrt{2}"},
            {problem: "4\\sqrt{75} - 2\\sqrt{48} + \\sqrt{12}", answer: "14\\sqrt{3}"},
            {problem: "3\\sqrt{98} - \\sqrt{128} + 2\\sqrt{32}", answer: "21\\sqrt{2}"},
            {problem: "2\\sqrt{162} - 4\\sqrt{18} + \\sqrt{72}", answer: "12\\sqrt{2}"},
            
            // Zero and near-zero results
            {problem: "3\\sqrt{20} - 2\\sqrt{45} - \\sqrt{5}", answer: "-\\sqrt{5}"},
            {problem: "\\sqrt{72} - 2\\sqrt{18} - 2\\sqrt{8}", answer: "-4\\sqrt{2}"},
            {problem: "4\\sqrt{12} - 3\\sqrt{27} - \\sqrt{3}", answer: "-2\\sqrt{3}"},
            
            // Mixed positive and negative with different radicals
            {problem: "-2\\sqrt{6} + 5\\sqrt{10} + 3\\sqrt{6} - 2\\sqrt{10}", answer: "\\sqrt{6} + 3\\sqrt{10}"},
            {problem: "4\\sqrt{14} - 3\\sqrt{21} - \\sqrt{14} + 2\\sqrt{21}", answer: "3\\sqrt{14} - \\sqrt{21}"},
            {problem: "-\\sqrt{15} + 4\\sqrt{35} + 3\\sqrt{15} - \\sqrt{35}", answer: "2\\sqrt{15} + 3\\sqrt{35}"}
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
window.AlgebraLevels.addSubtractingSurdsMedium = new AddSubtractingSurdsMediumLevel();