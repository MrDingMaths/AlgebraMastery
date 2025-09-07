class SimplifyAlgebraicFractionsMedium {
    constructor() {
        this.key = 'simplifyAlgebraicFractionsMedium';
        this.name = 'Simplifying Algebraic Fractions by Factorising (Medium)';
        this.usedQuestionIndices = new Set();
        
        this.questions = [
            {problem: "\\frac{(x+3)(x+4)}{2x+6}", answer: "\\frac{x+4}{2}"},
            {problem: "\\frac{(x+3)(x+4)}{2x+8}", answer: "\\frac{x+3}{2}"},
            {problem: "\\frac{x^2+7x+12}{2x+8}", answer: "\\frac{x+3}{2}"},
            {problem: "\\frac{x^2+7x+12}{(x+4)(x-9)}", answer: "\\frac{x+3}{x-9}"},
            {problem: "\\frac{x^2+7x+12}{x^2-5x-36}", answer: "\\frac{x+3}{x-9}"},
            {problem: "\\frac{x^2+6x+9}{2x+6}", answer: "\\frac{x+3}{2}"},
            {problem: "\\frac{11x-22}{x^2-4x+4}", answer: "\\frac{11}{x-2}"},
            {problem: "\\frac{x^2-6x+9}{x-3}", answer: "x-3"},
            {problem: "\\frac{4x+20}{x^2+10x+25}", answer: "\\frac{4}{x+5}"},
            {problem: "\\frac{x^2-14x+49}{5x-35}", answer: "\\frac{x-7}{5}"},
            {problem: "\\frac{x^2-100}{x+10}", answer: "x-10"},
            {problem: "\\frac{x^2-49}{x+7}", answer: "x-7"},
            {problem: "\\frac{x^2-25}{x+5}", answer: "x-5"},
            {problem: "\\frac{2(x-20)}{x^2-400}", answer: "\\frac{2}{x+20}"},
            {problem: "\\frac{5(x-6)}{x^2-36}", answer: "\\frac{5}{x+6}"},
            {problem: "\\frac{3x+27}{x^2-81}", answer: "\\frac{3}{x-9}"},
            {problem: "\\frac{3ac+5a}{a+2ab}", answer: "\\frac{3c+5}{1+2b}"},
            {problem: "\\frac{x^2-9}{3-x}", answer: "-(x+3)"},
            {problem: "\\frac{5y-3xy}{18xy-30y}", answer: "-\\frac{1}{6}"},
            {problem: "\\frac{x^2-100}{10-x}", answer: "-(x+10)"},
            {problem: "\\frac{x^2-49}{35-5x}", answer: "-\\frac{x+7}{5}"},
            {problem: "\\frac{x^2+5x+6}{x+2}", answer: "x+3"},
            {problem: "\\frac{x^2+6x+8}{x+4}", answer: "x+2"},
            {problem: "\\frac{a^2-9}{a^2+a-12}", answer: "\\frac{a+3}{a+4}"},
            {problem: "\\frac{x^2+11x+28}{x^2+7x+12}", answer: "\\frac{x+7}{x+3}"},
            {problem: "\\frac{x^2-x-6}{x-3}", answer: "x+2"},
            {problem: "\\frac{x^2+8x+16}{x+4}", answer: "x+4"},
            {problem: "\\frac{x^2-7x+12}{x-4}", answer: "x-3"},
            {problem: "\\frac{x-2}{x^2+x-6}", answer: "\\frac{1}{x+3}"},
            {problem: "\\frac{x+7}{x^2+5x-14}", answer: "\\frac{1}{x-2}"},
            {problem: "\\frac{x-9}{x^2-19x+90}", answer: "\\frac{1}{x-10}"},
            {problem: "\\frac{c^2+11c+30}{6c+30}", answer: "\\frac{c+6}{6}"},
            {problem: "\\frac{r^2-2r-24}{r^2+12r+32}", answer: "\\frac{r-6}{r+8}"},
            {problem: "\\frac{x^2-16}{x+4}", answer: "x-4"},
            {problem: "\\frac{x^2+9x+20}{x+5}", answer: "x+4"},
            {problem: "\\frac{x^2-8x+15}{x-3}", answer: "x-5"},
            {problem: "\\frac{2x^2+6x}{4x+12}", answer: "\\frac{x}{2}"},
            {problem: "\\frac{3x^2-12}{6x-12}", answer: "\\frac{x+2}{2}"},
            {problem: "\\frac{x^2-4x+4}{2x-4}", answer: "\\frac{x-2}{2}"},
            {problem: "\\frac{x^2+10x+25}{5x+25}", answer: "\\frac{x+5}{5}"},
            {problem: "\\frac{4x-8}{x^2-4}", answer: "\\frac{4}{x+2}"},
            {problem: "\\frac{6x+12}{x^2-4}", answer: "\\frac{6}{x-2}"},
            {problem: "\\frac{x^2-1}{2x-2}", answer: "\\frac{x+1}{2}"},
            {problem: "\\frac{x^2+4x+3}{3x+9}", answer: "\\frac{x+1}{3}"},
            {problem: "\\frac{x^2-2x-8}{x-4}", answer: "x+2"},
            {problem: "\\frac{x^2+3x-10}{x+5}", answer: "x-2"},
            {problem: "\\frac{x^2-3x-18}{x-6}", answer: "x+3"},
            {problem: "\\frac{x^2+x-12}{x+4}", answer: "x-3"},
            {problem: "\\frac{x^2-5x+6}{x-2}", answer: "x-3"},
            {problem: "\\frac{x^2+2x-15}{x+5}", answer: "x-3"}
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
window.AlgebraLevels.simplifyAlgebraicFractionsMedium = new SimplifyAlgebraicFractionsMedium();