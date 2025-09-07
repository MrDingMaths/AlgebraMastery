// levels/rationalisingDenominatorEasy.js
class RationalisingDenominatorEasyLevel {
    constructor() {
        this.key = 'rationalisingDenominatorEasy';
        this.name = 'Rationalising the Denominator (Easy)';
        this.usedQuestionIndices = new Set();
        
        // Easy level: Basic single surd denominators
        this.questions = [
            // Basic single square root denominators with integer numerators
            {problem: "\\frac{1}{\\sqrt{2}}", answer: "\\frac{\\sqrt{2}}{2}"},
            {problem: "\\frac{2}{\\sqrt{2}}", answer: "\\sqrt{2}"},
            {problem: "\\frac{5}{\\sqrt{2}}", answer: "\\frac{5\\sqrt{2}}{2}"},
            {problem: "\\frac{6}{\\sqrt{2}}", answer: "3\\sqrt{2}"},
            {problem: "\\frac{4}{\\sqrt{3}}", answer: "\\frac{4\\sqrt{3}}{3}"},
            {problem: "\\frac{6}{\\sqrt{3}}", answer: "2\\sqrt{3}"},
            {problem: "\\frac{4}{\\sqrt{5}}", answer: "\\frac{4\\sqrt{5}}{5}"},
            {problem: "\\frac{5}{\\sqrt{5}}", answer: "\\sqrt{5}"},
            {problem: "\\frac{4}{\\sqrt{6}}", answer: "\\frac{2\\sqrt{6}}{3}"},
            {problem: "\\frac{5}{\\sqrt{6}}", answer: "\\frac{5\\sqrt{6}}{6}"},
            {problem: "\\frac{1}{\\sqrt{7}}", answer: "\\frac{\\sqrt{7}}{7}"},
            {problem: "\\frac{3}{\\sqrt{11}}", answer: "\\frac{3\\sqrt{11}}{11}"},
            {problem: "\\frac{93}{\\sqrt{93}}", answer: "\\sqrt{93}"},
            {problem: "\\frac{ab}{\\sqrt{ab}}", answer: "\\sqrt{ab}"},
            
            // Basic surd over surd fractions
            {problem: "\\frac{\\sqrt{2}}{\\sqrt{7}}", answer: "\\frac{\\sqrt{14}}{7}"},
            {problem: "\\frac{\\sqrt{5}}{\\sqrt{3}}", answer: "\\frac{\\sqrt{15}}{3}"},
            
            // Nested square roots (simplifying form)
            {problem: "\\sqrt{\\frac{2}{3}}", answer: "\\frac{\\sqrt{6}}{3}"},
            {problem: "\\sqrt{\\frac{2}{5}}", answer: "\\frac{\\sqrt{10}}{5}"},
            {problem: "\\sqrt{\\frac{5}{7}}", answer: "\\frac{\\sqrt{35}}{7}"},
            {problem: "\\sqrt{\\frac{6}{7}}", answer: "\\frac{\\sqrt{42}}{7}"},
            {problem: "\\sqrt{\\frac{7}{3}}", answer: "\\frac{\\sqrt{21}}{3}"},
            {problem: "\\sqrt{\\frac{17}{2}}", answer: "\\frac{\\sqrt{34}}{2}"},
            
            // Additional easy level questions - simple denominators
            {problem: "\\frac{3}{\\sqrt{2}}", answer: "\\frac{3\\sqrt{2}}{2}"},
            {problem: "\\frac{7}{\\sqrt{2}}", answer: "\\frac{7\\sqrt{2}}{2}"},
            {problem: "\\frac{8}{\\sqrt{2}}", answer: "4\\sqrt{2}"},
            {problem: "\\frac{9}{\\sqrt{3}}", answer: "3\\sqrt{3}"},
            {problem: "\\frac{12}{\\sqrt{3}}", answer: "4\\sqrt{3}"},
            {problem: "\\frac{15}{\\sqrt{3}}", answer: "5\\sqrt{3}"},
            {problem: "\\frac{2}{\\sqrt{5}}", answer: "\\frac{2\\sqrt{5}}{5}"},
            {problem: "\\frac{3}{\\sqrt{5}}", answer: "\\frac{3\\sqrt{5}}{5}"},
            {problem: "\\frac{6}{\\sqrt{5}}", answer: "\\frac{6\\sqrt{5}}{5}"},
            {problem: "\\frac{10}{\\sqrt{5}}", answer: "2\\sqrt{5}"},
            {problem: "\\frac{20}{\\sqrt{5}}", answer: "4\\sqrt{5}"},
            
            // Basic square root of 6
            {problem: "\\frac{3}{\\sqrt{6}}", answer: "\\frac{\\sqrt{6}}{2}"},
            {problem: "\\frac{6}{\\sqrt{6}}", answer: "\\sqrt{6}"},
            {problem: "\\frac{12}{\\sqrt{6}}", answer: "2\\sqrt{6}"},
            
            // Other basic denominators
            {problem: "\\frac{2}{\\sqrt{7}}", answer: "\\frac{2\\sqrt{7}}{7}"},
            {problem: "\\frac{7}{\\sqrt{7}}", answer: "\\sqrt{7}"},
            {problem: "\\frac{14}{\\sqrt{7}}", answer: "2\\sqrt{7}"},
            {problem: "\\frac{1}{\\sqrt{10}}", answer: "\\frac{\\sqrt{10}}{10}"},
            {problem: "\\frac{2}{\\sqrt{10}}", answer: "\\frac{\\sqrt{10}}{5}"},
            {problem: "\\frac{5}{\\sqrt{10}}", answer: "\\frac{\\sqrt{10}}{2}"},
            {problem: "\\frac{10}{\\sqrt{10}}", answer: "\\sqrt{10}"},
            
            // More nested square roots
            {problem: "\\sqrt{\\frac{3}{2}}", answer: "\\frac{\\sqrt{6}}{2}"},
            {problem: "\\sqrt{\\frac{3}{5}}", answer: "\\frac{\\sqrt{15}}{5}"},
            {problem: "\\sqrt{\\frac{2}{7}}", answer: "\\frac{\\sqrt{14}}{7}"},
            {problem: "\\sqrt{\\frac{3}{7}}", answer: "\\frac{\\sqrt{21}}{7}"},
            {problem: "\\sqrt{\\frac{5}{2}}", answer: "\\frac{\\sqrt{10}}{2}"},
            {problem: "\\sqrt{\\frac{7}{2}}", answer: "\\frac{\\sqrt{14}}{2}"},
            
            // Simple surd over surd - more examples
            {problem: "\\frac{\\sqrt{3}}{\\sqrt{2}}", answer: "\\frac{\\sqrt{6}}{2}"},
            {problem: "\\frac{\\sqrt{7}}{\\sqrt{2}}", answer: "\\frac{\\sqrt{14}}{2}"},
            {problem: "\\frac{\\sqrt{2}}{\\sqrt{5}}", answer: "\\frac{\\sqrt{10}}{5}"},
            {problem: "\\frac{\\sqrt{3}}{\\sqrt{5}}", answer: "\\frac{\\sqrt{15}}{5}"},
            {problem: "\\frac{\\sqrt{7}}{\\sqrt{5}}", answer: "\\frac{\\sqrt{35}}{5}"}
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
window.AlgebraLevels.rationalisingDenominatorEasy = new RationalisingDenominatorEasyLevel();