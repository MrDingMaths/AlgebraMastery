// levels/furtherRationalisingDenominatorMedium.js
class FurtherRationalisingDenominatorMediumLevel {
    constructor() {
        this.key = 'furtherRationalisingDenominatorMedium';
        this.name = 'Further Rationalising the Denominator (Medium)';
        this.usedQuestionIndices = new Set();
        
        // Medium level: Surd numerators with binomial denominators
        this.questions = [
            // Provided textbook questions
            {problem: "\\frac{\\sqrt{5}}{8-\\sqrt{5}}", answer: "\\frac{5+8\\sqrt{5}}{59}"},
            {problem: "\\frac{2+\\sqrt{3}}{2-\\sqrt{3}}", answer: "7+4\\sqrt{3}"},
            {problem: "\\frac{5+\\sqrt{2}}{5-\\sqrt{2}}", answer: "\\frac{27+10\\sqrt{2}}{23}"},
            {problem: "\\frac{\\sqrt{7}}{\\sqrt{7}-3}", answer: "-\\frac{7+3\\sqrt{7}}{2}"},
            {problem: "\\frac{\\sqrt{5}}{\\sqrt{5}-3}", answer: "-\\frac{5+3\\sqrt{5}}{4}"},
            {problem: "\\frac{\\sqrt{5}}{5-\\sqrt{3}}", answer: "\\frac{5\\sqrt{5}+\\sqrt{15}}{22}"},
            {problem: "\\frac{2\\sqrt{5}}{5-\\sqrt{3}}", answer: "\\frac{5\\sqrt{5}+\\sqrt{15}}{11}"},
            {problem: "\\frac{4\\sqrt{5}}{5-\\sqrt{3}}", answer: "\\frac{10\\sqrt{5}+2\\sqrt{15}}{11}"},
            {problem: "\\frac{4\\sqrt{5}}{5-2\\sqrt{3}}", answer: "\\frac{20\\sqrt{5}+8\\sqrt{15}}{13}"},
            {problem: "\\frac{4\\sqrt{5}}{5-3\\sqrt{3}}", answer: "-10\\sqrt{5}-6\\sqrt{15}"},
            {problem: "\\frac{4\\sqrt{3}}{5-3\\sqrt{3}}", answer: "-18-10\\sqrt{3}"},
            
            // Additional medium questions - surd over binomial
            {problem: "\\frac{\\sqrt{2}}{3+\\sqrt{2}}", answer: "\\frac{3\\sqrt{2}-2}{7}"},
            {problem: "\\frac{\\sqrt{3}}{2+\\sqrt{3}}", answer: "2\\sqrt{3}-3"},
            {problem: "\\frac{\\sqrt{7}}{4+\\sqrt{7}}", answer: "\\frac{4\\sqrt{7}-7}{9}"},
            {problem: "\\frac{2\\sqrt{2}}{1+\\sqrt{2}}", answer: "4-2\\sqrt{2}"},
            {problem: "\\frac{3\\sqrt{3}}{2-\\sqrt{3}}", answer: "6\\sqrt{3}+9"},
            {problem: "\\frac{\\sqrt{6}}{3-\\sqrt{6}}", answer: "\\sqrt{6}+2"},
            {problem: "\\frac{2\\sqrt{7}}{\\sqrt{7}+2}", answer: "\\frac{14-4\\sqrt{7}}{3}"},
            {problem: "\\frac{3\\sqrt{5}}{\\sqrt{5}-1}", answer: "\\frac{15+3\\sqrt{5}}{4}"},
            
            // Binomial numerator over binomial denominator
            {problem: "\\frac{1+\\sqrt{2}}{3+\\sqrt{2}}", answer: "\\frac{1+2\\sqrt{2}}{7}"},
            {problem: "\\frac{2+\\sqrt{3}}{1+\\sqrt{3}}", answer: "\\frac{1+\\sqrt{3}}{2}"},
            {problem: "\\frac{3+\\sqrt{5}}{2+\\sqrt{5}}", answer: "\\sqrt{5}-1"},
            {problem: "\\frac{1-\\sqrt{2}}{1+\\sqrt{2}}", answer: "2\\sqrt{2}-3"},
            {problem: "\\frac{2-\\sqrt{3}}{2+\\sqrt{3}}", answer: "7-4\\sqrt{3}"},
            {problem: "\\frac{4+\\sqrt{7}}{4-\\sqrt{7}}", answer: "\\frac{23+8\\sqrt{7}}{9}"},
            {problem: "\\frac{3-\\sqrt{5}}{3+\\sqrt{5}}", answer: "\\frac{7-3\\sqrt{5}}{2}"},
            
            // More complex surd combinations
            {problem: "\\frac{\\sqrt{2}+\\sqrt{3}}{\\sqrt{2}-\\sqrt{3}}", answer: "-5-2\\sqrt{6}"},
            {problem: "\\frac{\\sqrt{5}-\\sqrt{2}}{\\sqrt{5}+\\sqrt{2}}", answer: "\\frac{7-2\\sqrt{10}}{3}"},
            {problem: "\\frac{\\sqrt{7}+\\sqrt{11}}{\\sqrt{7}-\\sqrt{11}}", answer: "-\\frac{9+\\sqrt{77}}{2}"},
            {problem: "\\frac{2\\sqrt{3}+1}{\\sqrt{3}-2}", answer: "-8-5\\sqrt{3}"},
            {problem: "\\frac{\\sqrt{6}-2}{\\sqrt{6}+3}", answer: "\\frac{5\\sqrt{6}-12}{3}"},
            
            // Medium complexity with coefficients
            {problem: "\\frac{3\\sqrt{2}}{4+\\sqrt{2}}", answer: "\\frac{6\\sqrt{2}-3}{7}"},
            {problem: "\\frac{2\\sqrt{3}}{5-\\sqrt{3}}", answer: "\\frac{5\\sqrt{3}+3}{11}"},
            {problem: "\\frac{4\\sqrt{7}}{2+\\sqrt{7}}", answer: "\\frac{28-8\\sqrt{7}}{3}"},
            {problem: "\\frac{5\\sqrt{2}}{3-\\sqrt{2}}", answer: "\\frac{15\\sqrt{2}+10}{7}"},
            {problem: "\\frac{3\\sqrt{6}}{\\sqrt{6}+4}", answer: "\\frac{6\\sqrt{6}-9}{5}"},
            
            // Patterns with negative results
            {problem: "\\frac{\\sqrt{3}}{\\sqrt{3}-4}", answer: "-\\frac{3+4\\sqrt{3}}{13}"},
            {problem: "\\frac{\\sqrt{8}}{\\sqrt{8}-5}", answer: "-\\frac{8+10\\sqrt{2}}{17}"},
            {problem: "\\frac{2\\sqrt{5}}{\\sqrt{5}-3}", answer: "-\\frac{5+3\\sqrt{5}}{2}"},
            {problem: "\\frac{\\sqrt{11}}{2-\\sqrt{11}}", answer: "-\\frac{11+2\\sqrt{11}}{7}"},
            
            // Additional practice with various combinations
            {problem: "\\frac{1+2\\sqrt{2}}{3-\\sqrt{2}}", answer: "1+\\sqrt{2}"},
            {problem: "\\frac{2-\\sqrt{7}}{4+\\sqrt{7}}", answer: "\\frac{5-2\\sqrt{7}}{3}"},
            {problem: "\\frac{3\\sqrt{5}+2}{\\sqrt{5}-1}", answer: "\\frac{17+5\\sqrt{5}}{4}"},
            {problem: "\\frac{\\sqrt{10}}{2\\sqrt{10}-5}", answer: "\\frac{4+\\sqrt{10}}{3}"},
            {problem: "\\frac{4+\\sqrt{3}}{2\\sqrt{3}-1}", answer: "\\frac{10+9\\sqrt{3}}{11}"},
            {problem: "\\frac{2\\sqrt{7}-3}{\\sqrt{7}+2}", answer: "\\frac{20-7\\sqrt{7}}{3}"}
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
window.AlgebraLevels.furtherRationalisingDenominatorMedium = new FurtherRationalisingDenominatorMediumLevel();