class CompoundFractionsHard {
    constructor() {
        this.key = 'compoundFractionsHard';
        this.name = 'Compound Fractions (Hard)';
        this.usedQuestionIndices = new Set();
        
        this.questions = [
            {problem: "\\frac{1-y^{-1}}{1-y^{-2}}", answer: "\\frac{y}{y+1}"},
            {problem: "(x^{-2}-y^{-2})^{-1}", answer: "\\frac{x^2y^2}{y^2-x^2}"},
            {problem: "\\frac{a^{-1}+b^{-1}}{a^{-2}-b^{-2}}", answer: "\\frac{ab}{b-a}"},
            {problem: "x^{-2}y^{-2}(x^2y^{-1}-y^2x^{-1})", answer: "\\frac{x^3-y^3}{x^3y^3}"},
            {problem: "\\frac{1}{1-\\frac{1}{x+\\frac{1}{x+1}}}", answer: "\\frac{x^2+x+1}{x^2}"},
            {problem: "\\frac{1+\\frac{1}{x}}{\\frac{1}{x}-\\frac{1}{x+1}}", answer: "(x+1)^2"},
            {problem: "\\frac{\\frac{2}{x}+\\frac{1}{x+3}}{\\frac{3}{x}-\\frac{1}{x+3}}", answer: "\\frac{3x+6}{2x+9}"},
            {problem: "\\frac{\\frac{3}{x+2}-\\frac{2}{x+1}}{\\frac{5}{x+2}-\\frac{4}{x+1}}", answer: "\\frac{x-1}{x-3}"},
            {problem: "\\frac{1-a^{-1}}{1-a^{-2}}", answer: "\\frac{a}{a+1}"},
            {problem: "\\frac{1+b^{-1}}{1+b^{-2}}", answer: "\\frac{b(b+1)}{b^2+1}"},
            {problem: "(x^{-1}+y^{-1})^{-1}", answer: "\\frac{xy}{x+y}"},
            {problem: "\\frac{x^{-1}-y^{-1}}{x^{-2}-y^{-2}}", answer: "\\frac{xy}{y+x}"},
            {problem: "\\frac{x^{-1}+y^{-1}}{x^{-2}+y^{-2}}", answer: "\\frac{xy(x+y)}{x^2+y^2}"},
            {problem: "x^{-2}y^{-2}(x^2y^{-1}+y^2x^{-1})", answer: "\\frac{x^3+y^3}{x^3y^3}"},
            {problem: "x^{-1}y^{-1}(x^{-1}-y^{-1})", answer: "\\frac{y-x}{x^2y^2}"},
            {problem: "\\frac{1}{1+\\frac{1}{x-\\frac{1}{x+2}}}", answer: "\\frac{x^2+2x-1}{x^2+3x+1}"},
            {problem: "\\frac{1}{2-\\frac{1}{x+\\frac{1}{x-1}}}", answer: "\\frac{x^2-x+1}{2x^2-3x+3}"},
            {problem: "\\frac{2+\\frac{1}{x}}{\\frac{1}{x}-\\frac{1}{x+2}}", answer: "\\frac{(2x+1)(x+2)}{2}"},
            {problem: "\\frac{3-\\frac{1}{x}}{\\frac{1}{x}+\\frac{1}{x-1}}", answer: "\\frac{(3x-1)(x-1)}{2x-1}"},
            {problem: "\\frac{\\frac{4}{x}+\\frac{2}{x+1}}{\\frac{5}{x}-\\frac{3}{x+1}}", answer: "\\frac{6x+4}{2x+5}"},
            {problem: "\\frac{\\frac{1}{x-1}-\\frac{2}{x+1}}{\\frac{3}{x-1}+\\frac{1}{x+1}}", answer: "\\frac{-x+3}{4x+2}"},
            {problem: "\\frac{\\frac{5}{x+3}-\\frac{1}{x-2}}{\\frac{2}{x+3}+\\frac{3}{x-2}}", answer: "\\frac{4x-13}{5x+5}"},
            {problem: "\\frac{\\frac{2}{x}+\\frac{3}{x+4}}{\\frac{1}{x}-\\frac{2}{x+4}}", answer: "\\frac{5x+8}{4-x}"},
            {problem: "(x^{-3}-y^{-3})^{-1}", answer: "\\frac{x^3y^3}{y^3-x^3}"},
            {problem: "\\frac{(x^3-1)^{-1}}{(x-1)^{-1}}", answer: "\\frac{1}{x^2+x+1}"}
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
window.AlgebraLevels.compoundFractionsHard = new CompoundFractionsHard();