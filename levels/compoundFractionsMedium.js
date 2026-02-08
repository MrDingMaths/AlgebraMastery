class CompoundFractionsMedium {
    constructor() {
        this.key = 'compoundFractionsMedium';
        this.name = 'Compound Fractions (Medium)';
        this.usedQuestionIndices = new Set();
        
        this.questions = [
            {problem: "a^{-1}-b^{-1}", answer: "\\frac{b-a}{ab}"},
            {problem: "\\frac{(a^2-1)^{-1}}{(a-1)^{-1}}", answer: "\\frac{1}{a+1}"},
            {problem: "\\frac{\\frac{1}{x}}{1+\\frac{2}{x}}", answer: "\\frac{1}{x+2}"},
            {problem: "\\frac{1-\\frac{1}{x}}{x+\\frac{1}{x}}", answer: "\\frac{x-1}{x^2+1}"},
            {problem: "\\frac{1}{\\frac{1}{b}+\\frac{1}{a}}", answer: "\\frac{ab}{a+b}"},
            {problem: "\\frac{\\frac{x}{y}+\\frac{y}{x}}{\\frac{x}{y}-\\frac{y}{x}}", answer: "\\frac{x^2+y^2}{x^2-y^2}"},
            {problem: "x^{-1}+y^{-1}", answer: "\\frac{x+y}{xy}"},
            {problem: "x^{-1}-y^{-1}", answer: "\\frac{y-x}{xy}"},
            {problem: "\\frac{\\frac{2}{x}}{1+\\frac{1}{x}}", answer: "\\frac{2}{x+1}"},
            {problem: "\\frac{\\frac{3}{x}}{2+\\frac{1}{x}}", answer: "\\frac{3}{2x+1}"},
            {problem: "\\frac{1+\\frac{2}{x}}{x-\\frac{1}{x}}", answer: "\\frac{x+2}{x^2-1}"},
            {problem: "\\frac{2-\\frac{1}{x}}{x+\\frac{2}{x}}", answer: "\\frac{2x-1}{x^2+2}"},
            {problem: "\\frac{1}{\\frac{1}{x}+\\frac{2}{y}}", answer: "\\frac{xy}{y+2x}"},
            {problem: "\\frac{1}{\\frac{3}{x}+\\frac{1}{y}}", answer: "\\frac{xy}{3y+x}"},
            {problem: "\\frac{\\frac{x}{y}+\\frac{y}{x}}{2}", answer: "\\frac{x^2+y^2}{2xy}"},
            {problem: "\\frac{\\frac{x}{y}-\\frac{y}{x}}{3}", answer: "\\frac{x^2-y^2}{3xy}"},
            {problem: "\\frac{(x^2-y^2)^{-1}}{(x-y)^{-1}}", answer: "\\frac{1}{x+y}"},
            {problem: "\\frac{(x^2-4)^{-1}}{(x-2)^{-1}}", answer: "\\frac{1}{x+2}"},
            {problem: "\\frac{\\frac{1}{x}}{3-\\frac{1}{x}}", answer: "\\frac{1}{3x-1}"},
            {problem: "\\frac{\\frac{2}{x}}{5-\\frac{3}{x}}", answer: "\\frac{2}{5x-3}"},
            {problem: "\\frac{4+\\frac{1}{x}}{x-\\frac{2}{x}}", answer: "\\frac{4x+1}{x^2-2}"},
            {problem: "\\frac{3+\\frac{2}{x}}{x+\\frac{1}{x}}", answer: "\\frac{3x+2}{x^2+1}"},
            {problem: "\\frac{1}{\\frac{2}{x}+\\frac{3}{y}}", answer: "\\frac{xy}{2y+3x}"},
            {problem: "\\frac{1}{\\frac{1}{x}+\\frac{4}{y}}", answer: "\\frac{xy}{y+4x}"},
            {problem: "\\frac{\\frac{a}{b}+1}{\\frac{a}{b}-1}", answer: "\\frac{a+b}{a-b}"},
            {problem: "\\frac{\\frac{x}{y}-1}{\\frac{x}{y}+1}", answer: "\\frac{x-y}{x+y}"}
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
window.AlgebraLevels.compoundFractionsMedium = new CompoundFractionsMedium();