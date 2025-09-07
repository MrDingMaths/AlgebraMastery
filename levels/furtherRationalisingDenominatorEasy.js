// levels/furtherRationalisingDenominatorEasy.js
class FurtherRationalisingDenominatorEasyLevel {
    constructor() {
        this.key = 'furtherRationalisingDenominatorEasy';
        this.name = 'Further Rationalising the Denominator (Easy)';
        this.usedQuestionIndices = new Set();
        
        // Easy level: Basic binomial denominators with integer numerators
        this.questions = [
            // Provided textbook questions
            {problem: "\\frac{2}{4+\\sqrt{3}}", answer: "\\frac{8-2\\sqrt{3}}{13}"},
            {problem: "\\frac{1}{5-\\sqrt{7}}", answer: "\\frac{5+\\sqrt{7}}{18}"},
            {problem: "\\frac{5}{\\sqrt{6}-1}", answer: "\\sqrt{6}+1"},
            {problem: "\\frac{6}{\\sqrt{2}+\\sqrt{11}}", answer: "\\frac{2\\sqrt{11}-2\\sqrt{2}}{3}"},
            {problem: "\\frac{2}{\\sqrt{2}+3}", answer: "\\frac{6-2\\sqrt{2}}{7}"},
            {problem: "\\frac{2}{3+\\sqrt{2}}", answer: "\\frac{6-2\\sqrt{2}}{7}"},
            {problem: "\\frac{2}{3-\\sqrt{2}}", answer: "\\frac{6+2\\sqrt{2}}{7}"},
            {problem: "\\frac{7}{3-\\sqrt{2}}", answer: "3+\\sqrt{2}"},
            {problem: "\\frac{7}{\\sqrt{2}-3}", answer: "-\\sqrt{2}-3"},
            {problem: "\\frac{7}{\\sqrt{7}-3}", answer: "-\\frac{21+7\\sqrt{7}}{2}"},
            
            // Additional easy questions - simple binomial denominators
            {problem: "\\frac{1}{1+\\sqrt{2}}", answer: "\\sqrt{2}-1"},
            {problem: "\\frac{1}{1-\\sqrt{2}}", answer: "-1-\\sqrt{2}"},
            {problem: "\\frac{1}{2+\\sqrt{3}}", answer: "2-\\sqrt{3}"},
            {problem: "\\frac{1}{2-\\sqrt{3}}", answer: "2+\\sqrt{3}"},
            {problem: "\\frac{1}{\\sqrt{3}+1}", answer: "\\frac{\\sqrt{3}-1}{2}"},
            {problem: "\\frac{1}{\\sqrt{3}-1}", answer: "\\frac{\\sqrt{3}+1}{2}"},
            {problem: "\\frac{1}{\\sqrt{5}+2}", answer: "\\sqrt{5}-2"},
            {problem: "\\frac{1}{\\sqrt{5}-2}", answer: "\\sqrt{5}+2"},
            {problem: "\\frac{3}{1+\\sqrt{2}}", answer: "3\\sqrt{2}-3"},
            {problem: "\\frac{4}{1-\\sqrt{2}}", answer: "-4-4\\sqrt{2}"},
            
            // Simple integer over binomial with small surds
            {problem: "\\frac{2}{1+\\sqrt{3}}", answer: "\\sqrt{3}-1"},
            {problem: "\\frac{3}{2+\\sqrt{5}}", answer: "3\\sqrt{5}-6"},
            {problem: "\\frac{4}{3+\\sqrt{2}}", answer: "\\frac{12-4\\sqrt{2}}{7}"},
            {problem: "\\frac{5}{2-\\sqrt{3}}", answer: "10+5\\sqrt{3}"},
            {problem: "\\frac{6}{3-\\sqrt{5}}", answer: "\\frac{9+3\\sqrt{5}}{2}"},
            {problem: "\\frac{1}{4+\\sqrt{2}}", answer: "\\frac{4-\\sqrt{2}}{14}"},
            {problem: "\\frac{1}{4-\\sqrt{2}}", answer: "\\frac{4+\\sqrt{2}}{14}"},
            {problem: "\\frac{1}{5+\\sqrt{3}}", answer: "\\frac{5-\\sqrt{3}}{22}"},
            {problem: "\\frac{1}{5-\\sqrt{3}}", answer: "\\frac{5+\\sqrt{3}}{22}"},
            {problem: "\\frac{2}{6+\\sqrt{5}}", answer: "\\frac{12-2\\sqrt{5}}{31}"},
            
            // Easy level with square roots in numerator and denominator 	
            {problem: "\\frac{\\sqrt{2}}{1+\\sqrt{3}}", answer: "\\frac{\\sqrt{6}-\\sqrt{2}}{2}"},
            {problem: "\\frac{\\sqrt{3}}{1+\\sqrt{2}}", answer: "\\sqrt{6}-\\sqrt{3}"},
            {problem: "\\frac{\\sqrt{5}}{2+\\sqrt{3}}", answer: "2\\sqrt{5}-\\sqrt{15}"},
            {problem: "\\frac{\\sqrt{2}}{3+\\sqrt{5}}", answer: "\\frac{3\\sqrt{2}-\\sqrt{10}}{4}"},
            {problem: "\\frac{\\sqrt{3}}{2-\\sqrt{7}}", answer: "-\\frac{2\\sqrt{3}+\\sqrt{21}}{3}"},
            
            // Simple combinations with perfect square differences
            {problem: "\\frac{1}{\\sqrt{2}+1}", answer: "\\sqrt{2}-1"},
            {problem: "\\frac{1}{\\sqrt{2}-1}", answer: "\\sqrt{2}+1"},
            {problem: "\\frac{2}{\\sqrt{3}+1}", answer: "\\sqrt{3}-1"},
            {problem: "\\frac{2}{\\sqrt{3}-1}", answer: "\\sqrt{3}+1"},
            {problem: "\\frac{3}{\\sqrt{5}+2}", answer: "3\\sqrt{5}-6"},
            {problem: "\\frac{3}{\\sqrt{5}-2}", answer: "3\\sqrt{5}+6"},
            {problem: "\\frac{4}{\\sqrt{7}+3}", answer: "6-2\\sqrt{7}"},
            {problem: "\\frac{4}{\\sqrt{7}-3}", answer: "-2\\sqrt{7}-6"},
            
            // More practice with basic patterns
            {problem: "\\frac{1}{3+\\sqrt{5}}", answer: "\\frac{3-\\sqrt{5}}{4}"},
            {problem: "\\frac{1}{3-\\sqrt{5}}", answer: "\\frac{3+\\sqrt{5}}{4}"},
            {problem: "\\frac{2}{4+\\sqrt{6}}", answer: "\\frac{4-\\sqrt{6}}{5}"},
            {problem: "\\frac{2}{4-\\sqrt{6}}", answer: "\\frac{4+\\sqrt{6}}{5}"},
            {problem: "\\frac{3}{5+\\sqrt{7}}", answer: "\\frac{5-\\sqrt{7}}{6}"},
            {problem: "\\frac{3}{5-\\sqrt{7}}", answer: "\\frac{5+\\sqrt{7}}{6}"},
            {problem: "\\frac{5}{2+\\sqrt{2}}", answer: "\\frac{10-5\\sqrt{2}}{2}"},
            {problem: "\\frac{6}{1+\\sqrt{5}}", answer: "\\frac{3\\sqrt{5}-3}{2}"}
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
window.AlgebraLevels.furtherRationalisingDenominatorEasy = new FurtherRationalisingDenominatorEasyLevel();