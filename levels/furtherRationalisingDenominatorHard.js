// levels/furtherRationalisingDenominatorHard.js
class FurtherRationalisingDenominatorHardLevel {
    constructor() {
        this.key = 'furtherRationalisingDenominatorHard';
        this.name = 'Further Rationalising the Denominator (Hard)';
        this.usedQuestionIndices = new Set();
        
        // Hard level: Complex expressions, compound fractions, and algebraic forms
        this.questions = [
            // Provided textbook questions
            {problem: "\\frac{4\\sqrt{3}-\\sqrt{2}}{5-3\\sqrt{3}}", answer: "\\frac{-36+5\\sqrt{2}-20\\sqrt{3}+3\\sqrt{6}}{2}"},
            {problem: "\\frac{a\\sqrt{b}}{c\\sqrt{d}}", answer: "\\frac{a\\sqrt{bd}}{cd}"},
            {problem: "\\frac{1}{a+\\sqrt{b}}", answer: "\\frac{a-\\sqrt{b}}{a^2-b}"},
            {problem: "\\frac{1}{\\sqrt{a}}-\\frac{1}{\\sqrt{b}}", answer: "\\frac{b\\sqrt{a}-a\\sqrt{b}}{ab}"},
            {problem: "\\frac{1}{a\\sqrt{b}-c}", answer: "\\frac{a\\sqrt{b}+c}{a^2b-c^2}"},
            {problem: "\\frac{1}{a\\sqrt{b}+c\\sqrt{d}}", answer: "\\frac{a\\sqrt{b}-c\\sqrt{d}}{a^2b-c^2d}"},
            {problem: "\\frac{1}{3+\\sqrt{6}}+\\frac{2}{\\sqrt{6}}", answer: "1"},
            {problem: "\\frac{4}{2+\\sqrt{2}}+\\frac{1}{3-2\\sqrt{2}}", answer: "7"},
            {problem: "\\frac{8}{3-\\sqrt{7}}-\\frac{6}{2\\sqrt{7}-5}", answer: "2"},
            {problem: "\\frac{4}{2+\\sqrt{5}}-\\frac{1}{9-4\\sqrt{5}}", answer: "-17"},
            {problem: "\\frac{1}{\\sqrt{3}+1}+\\frac{\\sqrt{3}-1}{4}", answer: "\\frac{3\\sqrt{3}-3}{4}"},
            {problem: "\\frac{42}{\\sqrt{63}}-\\frac{6}{\\sqrt{7}+2}", answer: "4"},
        
            // Additional hard questions - complex compound fractions
            {problem: "\\frac{\\frac{1}{\\sqrt{2}}}{\\frac{1}{\\sqrt{3}+1}}", answer: "\\frac{\\sqrt{6}+\\sqrt{2}}{2}"},
            {problem: "\\frac{\\sqrt{5}-2}{\\sqrt{5}+2}+\\frac{\\sqrt{5}+2}{\\sqrt{5}-2}", answer: "18"},
            {problem: "\\frac{3}{2+\\sqrt{5}}-\\frac{2}{3-\\sqrt{5}}", answer: "\\frac{-15+5\\sqrt{5}}{2}"},
            {problem: "\\frac{2\\sqrt{3}+1}{\\sqrt{3}-2}-\\frac{\\sqrt{3}-1}{\\sqrt{3}+2}", answer: "-3-8\\sqrt{3}"},
            
            // Nested and compound expressions
            {problem: "\\frac{1}{\\frac{\\sqrt{2}}{3}+\\frac{1}{\\sqrt{2}}}", answer: "\\frac{3\\sqrt{2}}{5}"},
            {problem: "\\frac{2}{\\frac{1}{\\sqrt{3}}+\\frac{\\sqrt{3}}{2}}", answer: "\\frac{4\\sqrt{3}}{5}"},
            {problem: "\\frac{1}{2-\\frac{1}{\\sqrt{5}}}", answer: "\\frac{10+\\sqrt{5}}{19}"},
            {problem: "\\frac{\\sqrt{7}}{3-\\frac{2}{\\sqrt{7}}}", answer: "\\frac{21\\sqrt{7}+14}{59}"},
                        
            // Algebraic generalizations
            {problem: "\\frac{x}{\\sqrt{x}+y}", answer: "\\frac{x(\\sqrt{x}-y)}{x-y^2}"},
            {problem: "\\frac{\\sqrt{x}}{a+\\sqrt{x}}", answer: "\\frac{a\\sqrt{x}-x}{a^2-x}"},
            {problem: "\\frac{a+\\sqrt{b}}{a-\\sqrt{b}}", answer: "\\frac{(a+\\sqrt{b})^2}{a^2-b}"},
            {problem: "\\frac{\\sqrt{a}+\\sqrt{b}}{\\sqrt{a}-\\sqrt{b}}", answer: "\\frac{a+2\\sqrt{ab}+b}{a-b}"},
            {problem: "\\frac{2\\sqrt{xy}}{\\sqrt{x}-\\sqrt{y}}", answer: "\\frac{2\\sqrt{xy}(\\sqrt{x}+\\sqrt{y})}{x-y}"},
            
            // Complex multiple surd expressions
            {problem: "\\frac{\\sqrt{2}+\\sqrt{3}}{\\sqrt{6}-1}", answer: "\\frac{3\\sqrt{3}+4\\sqrt{2}}{5}"},
            {problem: "\\frac{\\sqrt{5}-\\sqrt{3}}{\\sqrt{15}+2}", answer: "\\frac{7\\sqrt{3}-5\\sqrt{5}}{11}"},
            {problem: "\\frac{2\\sqrt{7}+3\\sqrt{2}}{\\sqrt{14}-4}", answer: "-13\\sqrt{2}-7\\sqrt{7}"},
            {problem: "\\frac{\\sqrt{11}+2\\sqrt{3}}{3\\sqrt{11}-\\sqrt{3}}", answer: "\\frac{39+7\\sqrt{33}}{96}"}
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
window.AlgebraLevels.furtherRationalisingDenominatorHard = new FurtherRationalisingDenominatorHardLevel();