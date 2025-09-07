// levels/rationalisingDenominatorMedium.js
class RationalisingDenominatorMediumLevel {
    constructor() {
        this.key = 'rationalisingDenominatorMedium';
        this.name = 'Rationalising the Denominator (Medium)';
        this.usedQuestionIndices = new Set();
        
        // Medium level: Coefficients in denominators, surd numerators, simplifying composite surds
        this.questions = [
            // Coefficients with surds in denominators
            {problem: "\\frac{10}{2\\sqrt{3}}", answer: "\\frac{5\\sqrt{3}}{3}"},
            {problem: "\\frac{5}{2\\sqrt{6}}", answer: "\\frac{5\\sqrt{6}}{12}"},
            {problem: "\\frac{5}{3\\sqrt{6}}", answer: "\\frac{5\\sqrt{6}}{18}"},
            {problem: "\\frac{5}{10\\sqrt{5}}", answer: "\\frac{\\sqrt{5}}{10}"},
            {problem: "\\frac{5}{10\\sqrt{6}}", answer: "\\frac{\\sqrt{6}}{12}"},
            {problem: "\\frac{8}{\\sqrt{8}}", answer: "2\\sqrt{2}"},
            {problem: "\\frac{10}{\\sqrt{8}}", answer: "\\frac{5\\sqrt{2}}{2}"},
            {problem: "\\frac{10}{\\sqrt{12}}", answer: "\\frac{5\\sqrt{3}}{3}"},
            
            // Surd numerators over surd denominators with coefficients
            {problem: "\\frac{2\\sqrt{3}}{3\\sqrt{2}}", answer: "\\frac{\\sqrt{6}}{3}"},
            {problem: "\\frac{3\\sqrt{5}}{\\sqrt{2}}", answer: "\\frac{3\\sqrt{10}}{2}"},
            {problem: "\\frac{3\\sqrt{6}}{\\sqrt{7}}", answer: "\\frac{3\\sqrt{42}}{7}"},
            {problem: "\\frac{4\\sqrt{2}}{\\sqrt{7}}", answer: "\\frac{4\\sqrt{14}}{7}"},
            {problem: "\\frac{4\\sqrt{7}}{5\\sqrt{3}}", answer: "\\frac{4\\sqrt{21}}{15}"},
            {problem: "\\frac{5\\sqrt{2}}{\\sqrt{3}}", answer: "\\frac{5\\sqrt{6}}{3}"},
            {problem: "\\frac{5\\sqrt{7}}{3\\sqrt{5}}", answer: "\\frac{\\sqrt{35}}{3}"},
            {problem: "\\frac{5\\sqrt{12}}{3\\sqrt{27}}", answer: "\\frac{10}{9}"},
            {problem: "\\frac{7\\sqrt{3}}{\\sqrt{10}}", answer: "\\frac{7\\sqrt{30}}{10}"},
            {problem: "\\frac{9\\sqrt{6}}{2\\sqrt{3}}", answer: "\\frac{9\\sqrt{2}}{2}"},
            {problem: "\\frac{2\\sqrt{7}}{\\sqrt{15}}", answer: "\\frac{2\\sqrt{105}}{15}"},
            {problem: "\\frac{7\\sqrt{90}}{2\\sqrt{70}}", answer: "\\frac{3\\sqrt{7}}{2}"},
            
            // Additional medium level questions - more coefficients
            {problem: "\\frac{6}{2\\sqrt{2}}", answer: "\\frac{3\\sqrt{2}}{2}"},
            {problem: "\\frac{12}{3\\sqrt{2}}", answer: "2\\sqrt{2}"},
            {problem: "\\frac{15}{3\\sqrt{3}}", answer: "\\frac{5\\sqrt{3}}{3}"},
            {problem: "\\frac{18}{3\\sqrt{6}}", answer: "\\sqrt{6}"},
            {problem: "\\frac{14}{2\\sqrt{7}}", answer: "\\sqrt{7}"},
            {problem: "\\frac{20}{4\\sqrt{5}}", answer: "\\sqrt{5}"},
            
            // Simplifying composite surds first
            {problem: "\\frac{6}{\\sqrt{18}}", answer: "\\sqrt{2}"},
            {problem: "\\frac{12}{\\sqrt{32}}", answer: "\\frac{3\\sqrt{2}}{2}"},
            {problem: "\\frac{15}{\\sqrt{50}}", answer: "\\frac{3\\sqrt{2}}{2}"},
            {problem: "\\frac{18}{\\sqrt{72}}", answer: "\\frac{3\\sqrt{2}}{2}"},
            {problem: "\\frac{20}{\\sqrt{80}}", answer: "\\sqrt{5}"},
            {problem: "\\frac{24}{\\sqrt{96}}", answer: "\\sqrt{6}"},
            
            // More surd over surd with coefficients
            {problem: "\\frac{2\\sqrt{5}}{3\\sqrt{2}}", answer: "\\frac{\\sqrt{10}}{3}"},
            {problem: "\\frac{6\\sqrt{2}}{\\sqrt{3}}", answer: "2\\sqrt{6}"},
            {problem: "\\frac{8\\sqrt{3}}{2\\sqrt{2}}", answer: "2\\sqrt{6}"},
            {problem: "\\frac{9\\sqrt{2}}{3\\sqrt{5}}", answer: "\\frac{3\\sqrt{10}}{5}"},
            {problem: "\\frac{12\\sqrt{5}}{4\\sqrt{3}}", answer: "\\sqrt{15}"},
            {problem: "\\frac{15\\sqrt{7}}{5\\sqrt{2}}", answer: "\\frac{3\\sqrt{14}}{2}"},
            
            // More complex coefficients
            {problem: "\\frac{4}{3\\sqrt{2}}", answer: "\\frac{2\\sqrt{2}}{3}"},
            {problem: "\\frac{9}{3\\sqrt{5}}", answer: "\\frac{3\\sqrt{5}}{5}"},
            {problem: "\\frac{14}{2\\sqrt{14}}", answer: "\\frac{\\sqrt{14}}{2}"},
            {problem: "\\frac{21}{3\\sqrt{7}}", answer: "\\sqrt{7}"},
            {problem: "\\frac{30}{5\\sqrt{6}}", answer: "\\sqrt{6}"},
            
            // Coefficient simplification with rationalisation
            {problem: "\\frac{16}{4\\sqrt{2}}", answer: "2\\sqrt{2}"},
            {problem: "\\frac{27}{9\\sqrt{3}}", answer: "\\sqrt{3}"},
            {problem: "\\frac{35}{7\\sqrt{5}}", answer: "\\sqrt{5}"},
            {problem: "\\frac{42}{6\\sqrt{7}}", answer: "\\sqrt{7}"},
            {problem: "\\frac{48}{8\\sqrt{3}}", answer: "2\\sqrt{3}"},
            
            // More complex surd combinations
            {problem: "\\frac{3\\sqrt{8}}{2\\sqrt{6}}", answer: "\\sqrt{3}"},
            {problem: "\\frac{4\\sqrt{12}}{\\sqrt{18}}", answer: "\\frac{4\\sqrt{6}}{3}"},
            {problem: "\\frac{6\\sqrt{15}}{2\\sqrt{20}}", answer: "\\frac{3\\sqrt{3}}{2}"},
            {problem: "\\frac{8\\sqrt{21}}{4\\sqrt{14}}", answer: "\\sqrt{6}"},
            {problem: "\\frac{10\\sqrt{28}}{5\\sqrt{35}}", answer: "\\frac{4\\sqrt{5}}{5}"}
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
window.AlgebraLevels.rationalisingDenominatorMedium = new RationalisingDenominatorMediumLevel();