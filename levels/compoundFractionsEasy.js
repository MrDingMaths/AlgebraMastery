class CompoundFractionsEasy {
    constructor() {
        this.key = 'compoundFractionsEasy';
        this.name = 'Compound Fractions (Easy)';
        this.usedQuestionIndices = new Set();
        
        this.questions = [
            {problem: "\\frac{1}{(\\frac{1}{x})}", answer: "x"},
            {problem: "\\frac{2}{\\frac{4}{x}}", answer: "\\frac{x}{2}"},
            {problem: "\\frac{5}{\\frac{25}{a}}", answer: "\\frac{a}{5}"},
            {problem: "\\frac{\\frac{3m}{8}}{3m}", answer: "\\frac{1}{8}"},
            {problem: "\\frac{\\frac{6y}{11}}{2y}", answer: "\\frac{3}{11}"},
            {problem: "\\frac{x+1}{\\frac{x+1}{3}}", answer: "3"},
            {problem: "\\frac{a-2}{\\frac{a-2}{7}}", answer: "7"},
            {problem: "\\frac{\\frac{y+5}{4}}{y+5}", answer: "\\frac{1}{4}"},
            {problem: "\\frac{\\frac{b-9}{2}}{b-9}", answer: "\\frac{1}{2}"},
            {problem: "\\frac{\\frac{x+3}{5}}{\\frac{x+3}{10}}", answer: "2"},
            {problem: "\\frac{\\frac{a-b}{c}}{\\frac{a-b}{d}}", answer: "\\frac{d}{c}"},
            {problem: "\\frac{3}{\\frac{6}{y}}", answer: "\\frac{y}{2}"},
            {problem: "\\frac{4}{\\frac{8}{z}}", answer: "\\frac{z}{2}"},
            {problem: "\\frac{7}{\\frac{21}{b}}", answer: "\\frac{b}{3}"},
            {problem: "\\frac{\\frac{5k}{12}}{5k}", answer: "\\frac{1}{12}"},
            {problem: "\\frac{\\frac{8p}{15}}{4p}", answer: "\\frac{2}{15}"},
            {problem: "\\frac{m+4}{\\frac{m+4}{5}}", answer: "5"},
            {problem: "\\frac{n-7}{\\frac{n-7}{9}}", answer: "9"},
            {problem: "\\frac{\\frac{t+6}{3}}{t+6}", answer: "\\frac{1}{3}"},
            {problem: "\\frac{\\frac{w-8}{7}}{w-8}", answer: "\\frac{1}{7}"},
            {problem: "\\frac{\\frac{2x+1}{6}}{\\frac{2x+1}{12}}", answer: "2"},
            {problem: "\\frac{\\frac{3y-2}{5}}{\\frac{3y-2}{15}}", answer: "3"},
            {problem: "\\frac{6}{\\frac{12}{s}}", answer: "\\frac{s}{2}"},
            {problem: "\\frac{10}{\\frac{20}{r}}", answer: "\\frac{r}{2}"},
            {problem: "\\frac{\\frac{9q}{14}}{3q}", answer: "\\frac{3}{14}"},
            {problem: "\\frac{\\frac{12v}{35}}{6v}", answer: "\\frac{2}{35}"},
            {problem: "\\frac{u+8}{\\frac{u+8}{4}}", answer: "4"},
            {problem: "\\frac{h-3}{\\frac{h-3}{11}}", answer: "11"}
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
window.AlgebraLevels.compoundFractionsEasy = new CompoundFractionsEasy();