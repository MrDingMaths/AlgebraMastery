class CompoundFractionsMedium {
    constructor() {
        this.key = 'compoundFractionsMedium';
        this.name = 'Compound Fractions (Medium)';
        this.usedQuestionIndices = new Set();
        
        this.questions = [
            {problem: "a^{-1}-b^{-1}", answer: "\\frac{b-a}{ab}"},
            {problem: "\\frac{(a^2-1)^{-1}}{(a-1)^{-1}}", answer: "\\frac{1}{a+1}"},
            {problem: "\\frac{\\frac{1}{x}}{1+\\frac{2}{x}}", answer: "\\frac{1}{x+2}"},
            {problem: "\\frac{1-\\frac{1}{t}}{t+\\frac{1}{t}}", answer: "\\frac{t-1}{t^2+1}"},
            {problem: "\\frac{1}{\\frac{1}{b}+\\frac{1}{a}}", answer: "\\frac{ab}{a+b}"},
            {problem: "\\frac{\\frac{x}{y}+\\frac{y}{x}}{\\frac{x}{y}-\\frac{y}{x}}", answer: "\\frac{x^2+y^2}{x^2-y^2}"},
            {problem: "x^{-1}+y^{-1}", answer: "\\frac{x+y}{xy}"},
            {problem: "m^{-1}-n^{-1}", answer: "\\frac{n-m}{mn}"},
            {problem: "\\frac{\\frac{2}{p}}{1+\\frac{1}{p}}", answer: "\\frac{2}{p+1}"},
            {problem: "\\frac{\\frac{3}{q}}{2+\\frac{1}{q}}", answer: "\\frac{3}{2q+1}"},
            {problem: "\\frac{1+\\frac{2}{s}}{s-\\frac{1}{s}}", answer: "\\frac{s+2}{s^2-1}"},
            {problem: "\\frac{2-\\frac{1}{r}}{r+\\frac{2}{r}}", answer: "\\frac{2r-1}{r^2+2}"},
            {problem: "\\frac{1}{\\frac{1}{c}+\\frac{2}{d}}", answer: "\\frac{cd}{d+2c}"},
            {problem: "\\frac{1}{\\frac{3}{f}+\\frac{1}{g}}", answer: "\\frac{fg}{3g+f}"},
            {problem: "\\frac{\\frac{u}{v}+\\frac{v}{u}}{2}", answer: "\\frac{u^2+v^2}{2uv}"},
            {problem: "\\frac{\\frac{w}{z}-\\frac{z}{w}}{3}", answer: "\\frac{w^2-z^2}{3wz}"},
            {problem: "\\frac{(p^2-q^2)^{-1}}{(p-q)^{-1}}", answer: "\\frac{1}{p+q}"},
            {problem: "\\frac{(k^2-4)^{-1}}{(k-2)^{-1}}", answer: "\\frac{1}{k+2}"},
            {problem: "\\frac{\\frac{1}{h}}{3-\\frac{1}{h}}", answer: "\\frac{1}{3h-1}"},
            {problem: "\\frac{\\frac{2}{j}}{5-\\frac{3}{j}}", answer: "\\frac{2}{5j-3}"},
            {problem: "\\frac{4+\\frac{1}{l}}{l-\\frac{2}{l}}", answer: "\\frac{4l+1}{l^2-2}"},
            {problem: "\\frac{3+\\frac{2}{m}}{m+\\frac{1}{m}}", answer: "\\frac{3m+2}{m^2+1}"},
            {problem: "\\frac{1}{\\frac{2}{e}+\\frac{3}{f}}", answer: "\\frac{ef}{2f+3e}"},
            {problem: "\\frac{1}{\\frac{1}{i}+\\frac{4}{j}}", answer: "\\frac{ij}{j+4i}"},
            {problem: "\\frac{\\frac{a}{b}+1}{\\frac{a}{b}-1}", answer: "\\frac{a+b}{a-b}"},
            {problem: "\\frac{\\frac{c}{d}-1}{\\frac{c}{d}+1}", answer: "\\frac{c-d}{c+d}"}
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