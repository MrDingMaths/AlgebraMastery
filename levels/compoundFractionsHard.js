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
            {problem: "(p^{-2}-q^{-2})^{-1}", answer: "\\frac{p^2q^2}{q^2-p^2}"},
            {problem: "(m^{-1}+n^{-1})^{-1}", answer: "\\frac{mn}{m+n}"},
            {problem: "\\frac{c^{-1}-d^{-1}}{c^{-2}-d^{-2}}", answer: "\\frac{cd}{d+c}"},
            {problem: "\\frac{r^{-1}+s^{-1}}{r^{-2}+s^{-2}}", answer: "\\frac{rs(r+s)}{r^2+s^2}"},
            {problem: "u^{-2}v^{-2}(u^2v^{-1}+v^2u^{-1})", answer: "\\frac{u^3+v^3}{u^3v^3}"},
            {problem: "t^{-1}w^{-1}(t^{-1}-w^{-1})", answer: "\\frac{w-t}{t^2w^2}"},
            {problem: "\\frac{1}{1+\\frac{1}{k-\\frac{1}{k+2}}}", answer: "\\frac{k^2+2k-1}{k^2+3k+1}"},
            {problem: "\\frac{1}{2-\\frac{1}{l+\\frac{1}{l-1}}}", answer: "\\frac{l^2-l+1}{2l^2-3l+3}"},
            {problem: "\\frac{2+\\frac{1}{h}}{\\frac{1}{h}-\\frac{1}{h+2}}", answer: "\\frac{(2h+1)(h+2)}{2}"},
            {problem: "\\frac{3-\\frac{1}{j}}{\\frac{1}{j}+\\frac{1}{j-1}}", answer: "\\frac{(3j-1)(j-1)}{2j-1}"},
            {problem: "\\frac{\\frac{4}{e}+\\frac{2}{e+1}}{\\frac{5}{e}-\\frac{3}{e+1}}", answer: "\\frac{6e+4}{2e+5}"},
            {problem: "\\frac{\\frac{1}{f-1}-\\frac{2}{f+1}}{\\frac{3}{f-1}+\\frac{1}{f+1}}", answer: "\\frac{-f+3}{4f+2}"},
            {problem: "\\frac{\\frac{5}{g+3}-\\frac{1}{g-2}}{\\frac{2}{g+3}+\\frac{3}{g-2}}", answer: "\\frac{4g-13}{5g+5}"},
            {problem: "\\frac{\\frac{2}{i}+\\frac{3}{i+4}}{\\frac{1}{i}-\\frac{2}{i+4}}", answer: "\\frac{5i+8}{4-i}"},
            {problem: "(z^{-3}-w^{-3})^{-1}", answer: "\\frac{z^3w^3}{w^3-z^3}"},
            {problem: "\\frac{(n^3-1)^{-1}}{(n-1)^{-1}}", answer: "\\frac{1}{n^2+n+1}"}
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