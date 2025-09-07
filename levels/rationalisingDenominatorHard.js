// levels/rationalisingDenominatorHard.js
class RationalisingDenominatorHardLevel {
    constructor() {
        this.key = 'rationalisingDenominatorHard';
        this.name = 'Rationalising the Denominator (Hard)';
        this.usedQuestionIndices = new Set();
        
        // Hard level: Binomial denominators requiring conjugate multiplication
        this.questions = [
            // Basic binomial denominators with single terms in numerator
            {problem: "\\frac{1+\\sqrt{2}}{\\sqrt{3}}", answer: "\\frac{\\sqrt{3}+\\sqrt{6}}{3}"},
            {problem: "\\frac{2-\\sqrt{3}}{\\sqrt{5}}", answer: "\\frac{2\\sqrt{5}-\\sqrt{15}}{5}"},
            {problem: "\\frac{\\sqrt{5}+\\sqrt{2}}{\\sqrt{7}}", answer: "\\frac{\\sqrt{35}+\\sqrt{14}}{7}"},
            {problem: "\\frac{\\sqrt{2}+\\sqrt{7}}{\\sqrt{6}}", answer: "\\frac{2\\sqrt{3}+\\sqrt{42}}{6}"},
            {problem: "\\frac{6-\\sqrt{10}}{\\sqrt{5}}", answer: "\\frac{6\\sqrt{5}-5\\sqrt{2}}{5}"},
            {problem: "\\frac{3\\sqrt{5}+5\\sqrt{2}}{\\sqrt{10}}", answer: "\\frac{3\\sqrt{2}+2\\sqrt{5}}{2}"},
            
            // Additional hard level questions - expanding binomial expressions
            {problem: "\\frac{1+\\sqrt{3}}{\\sqrt{2}}", answer: "\\frac{\\sqrt{2}+\\sqrt{6}}{2}"},
            {problem: "\\frac{2+\\sqrt{5}}{\\sqrt{3}}", answer: "\\frac{2\\sqrt{3}+\\sqrt{15}}{3}"},
            {problem: "\\frac{3-\\sqrt{2}}{\\sqrt{5}}", answer: "\\frac{3\\sqrt{5}-\\sqrt{10}}{5}"},
            {problem: "\\frac{4+\\sqrt{7}}{\\sqrt{2}}", answer: "\\frac{4\\sqrt{2}+\\sqrt{14}}{2}"},
            {problem: "\\frac{5-\\sqrt{3}}{\\sqrt{7}}", answer: "\\frac{5\\sqrt{7}-\\sqrt{21}}{7}"},
            
            // More complex binomial numerators
            {problem: "\\frac{\\sqrt{3}+\\sqrt{5}}{\\sqrt{2}}", answer: "\\frac{\\sqrt{6}+\\sqrt{10}}{2}"},
            {problem: "\\frac{\\sqrt{7}-\\sqrt{3}}{\\sqrt{5}}", answer: "\\frac{\\sqrt{35}-\\sqrt{15}}{5}"},
            {problem: "\\frac{2\\sqrt{3}+\\sqrt{7}}{\\sqrt{5}}", answer: "\\frac{2\\sqrt{15}+\\sqrt{35}}{5}"},
            {problem: "\\frac{3\\sqrt{2}-\\sqrt{5}}{\\sqrt{7}}", answer: "\\frac{3\\sqrt{14}-\\sqrt{35}}{7}"},
            {problem: "\\frac{\\sqrt{11}+\\sqrt{13}}{\\sqrt{6}}", answer: "\\frac{\\sqrt{66}+\\sqrt{78}}{6}"},
            
            // Coefficients with binomial expressions
            {problem: "\\frac{2+3\\sqrt{2}}{\\sqrt{5}}", answer: "\\frac{2\\sqrt{5}+3\\sqrt{10}}{5}"},
            {problem: "\\frac{4-2\\sqrt{3}}{\\sqrt{7}}", answer: "\\frac{4\\sqrt{7}-2\\sqrt{21}}{7}"},
            {problem: "\\frac{5+4\\sqrt{5}}{\\sqrt{2}}", answer: "\\frac{5\\sqrt{2}+4\\sqrt{10}}{2}"},
            {problem: "\\frac{3-5\\sqrt{7}}{\\sqrt{3}}", answer: "\\frac{3\\sqrt{3}-5\\sqrt{21}}{3}"},
            {problem: "\\frac{6+2\\sqrt{11}}{\\sqrt{5}}", answer: "\\frac{6\\sqrt{5}+2\\sqrt{55}}{5}"},
            
            // More challenging expressions
            {problem: "\\frac{\\sqrt{8}+\\sqrt{12}}{\\sqrt{3}}", answer: "\\frac{2\\sqrt{6}+6}{3}"},
            {problem: "\\frac{\\sqrt{18}-\\sqrt{8}}{\\sqrt{2}}", answer: "1"},
            {problem: "\\frac{2\\sqrt{12}+3\\sqrt{8}}{\\sqrt{6}}", answer: "2\\sqrt{3}+2\\sqrt{2}"},
            {problem: "\\frac{\\sqrt{20}-\\sqrt{45}}{\\sqrt{5}}", answer: "-1"},
            
            // Advanced binomial combinations
            {problem: "\\frac{\\sqrt{6}+2\\sqrt{3}}{\\sqrt{2}}", answer: "\\sqrt{3}+\\sqrt{6}"},
            {problem: "\\frac{3\\sqrt{2}-\\sqrt{8}}{\\sqrt{6}}", answer: "\\frac{\\sqrt{3}}{3}"},
            {problem: "\\frac{4\\sqrt{3}+\\sqrt{27}}{\\sqrt{12}}", answer: "\\frac{7}{2}"},
            {problem: "\\frac{2\\sqrt{5}+\\sqrt{20}}{\\sqrt{10}}", answer: "2\\sqrt{2}"},
            
            // Complex coefficient expressions
            {problem: "\\frac{7+3\\sqrt{2}}{\\sqrt{3}}", answer: "\\frac{7\\sqrt{3}+3\\sqrt{6}}{3}"},
            {problem: "\\frac{8-4\\sqrt{5}}{\\sqrt{2}}", answer: "4\\sqrt{2}-2\\sqrt{10}"},
            {problem: "\\frac{9+6\\sqrt{7}}{\\sqrt{11}}", answer: "\\frac{9\\sqrt{11}+6\\sqrt{77}}{11}"},
            {problem: "\\frac{10-7\\sqrt{3}}{\\sqrt{13}}", answer: "\\frac{10\\sqrt{13}-7\\sqrt{39}}{13}"},
            
            // Very challenging expressions with multiple surds
            {problem: "\\frac{2\\sqrt{3}+3\\sqrt{5}}{\\sqrt{7}}", answer: "\\frac{2\\sqrt{21}+3\\sqrt{35}}{7}"},
            {problem: "\\frac{4\\sqrt{7}-2\\sqrt{11}}{\\sqrt{3}}", answer: "\\frac{4\\sqrt{21}-2\\sqrt{33}}{3}"},
            {problem: "\\frac{5\\sqrt{2}+3\\sqrt{7}}{\\sqrt{11}}", answer: "\\frac{5\\sqrt{22}+3\\sqrt{77}}{11}"},
            {problem: "\\frac{6\\sqrt{11}-4\\sqrt{13}}{\\sqrt{5}}", answer: "\\frac{6\\sqrt{55}-4\\sqrt{65}}{5}"},
            
            // Mixed complexity expressions
            {problem: "\\frac{1+2\\sqrt{6}}{\\sqrt{8}}", answer: "\\frac{\\sqrt{2}+4\\sqrt{3}}{4}"},
            {problem: "\\frac{3-\\sqrt{12}}{\\sqrt{18}}", answer: "\\frac{3\\sqrt{2}-2\\sqrt{6}}{6}"},
            {problem: "\\frac{5+\\sqrt{50}}{\\sqrt{32}}", answer: "\\frac{10+5\\sqrt{2}}{8}"},
            {problem: "\\frac{7-2\\sqrt{18}}{\\sqrt{72}}", answer: "\\frac{7\\sqrt{2}-12}{12}"},
            
            // Final advanced expressions
            {problem: "\\frac{\\sqrt{14}+\\sqrt{21}}{\\sqrt{6}}", answer: "\\frac{2\\sqrt{21}+3\\sqrt{14}}{6}"},
            {problem: "\\frac{\\sqrt{15}-\\sqrt{35}}{\\sqrt{10}}", answer: "\\frac{\\sqrt{6}-\\sqrt{14}}{2}"},
            {problem: "\\frac{2\\sqrt{22}+\\sqrt{33}}{\\sqrt{14}}", answer: "\\frac{4\\sqrt{77}+\\sqrt{462}}{14}"},
            {problem: "\\frac{3\\sqrt{26}-\\sqrt{39}}{\\sqrt{15}}", answer: "\\frac{\\sqrt{390}-\\sqrt{65}}{5}"}
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
window.AlgebraLevels.rationalisingDenominatorHard = new RationalisingDenominatorHardLevel();