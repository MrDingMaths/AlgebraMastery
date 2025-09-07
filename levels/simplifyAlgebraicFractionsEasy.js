class SimplifyAlgebraicFractionsEasy {
    constructor() {
        this.key = 'simplifyAlgebraicFractionsEasy';
        this.name = 'Simplifying Algebraic Fractions by Factorising (Easy)';
        this.usedQuestionIndices = new Set();
        
        this.questions = [
            {problem: "\\frac{2x}{x}", answer: "2"},
            {problem: "\\frac{2x+7}{x}", answer: "\\frac{2x+7}{x}"},
            {problem: "\\frac{2x+7}{7}", answer: "\\frac{2x+7}{7}"},
            {problem: "\\frac{2(x+3)}{3(x+3)}", answer: "\\frac{2}{3}"},
            {problem: "\\frac{2(x+3)}{(x+3)}", answer: "2"},
            {problem: "\\frac{(x+3)}{2(x+3)}", answer: "\\frac{1}{2}"},
            {problem: "\\frac{x+3}{2x+6}", answer: "\\frac{1}{2}"},
            {problem: "\\frac{(a+1)^2}{a+1}", answer: "a+1"},
            {problem: "\\frac{5(a-3)^2}{a-3}", answer: "5(a-3)"},
            {problem: "\\frac{7(x+7)^2}{14(x+7)}", answer: "\\frac{x+7}{2}"},
            {problem: "\\frac{3(x-1)(x+2)^2}{18(x-1)(x+2)}", answer: "\\frac{x+2}{6}"},
            {problem: "\\frac{2x}{4}", answer: "\\frac{x}{2}"},
            {problem: "\\frac{6a}{5a}", answer: "\\frac{6}{5}"},
            {problem: "\\frac{4y}{20y}", answer: "\\frac{1}{5}"},
            {problem: "\\frac{3(x+1)}{9(x+1)}", answer: "\\frac{1}{3}"},
            {problem: "\\frac{2(x-2)}{8(x-2)}", answer: "\\frac{1}{4}"},
            {problem: "\\frac{8(x+4)}{12(x+4)}", answer: "\\frac{2}{3}"},
            {problem: "\\frac{(x+5)(x-5)}{(x+5)}", answer: "x-5"},
            {problem: "\\frac{6(x-1)(x+3)}{9(x+3)}", answer: "\\frac{2(x-1)}{3}"},
            {problem: "\\frac{8(x-2)}{4(x-2)(x+4)}", answer: "\\frac{2}{x+4}"},
            {problem: "\\frac{5x-5}{5}", answer: "x-1"},
            {problem: "\\frac{4x-12}{10}", answer: "\\frac{2(x-3)}{5}"},
            {problem: "\\frac{2x-4}{3x-6}", answer: "\\frac{2}{3}"},
            {problem: "\\frac{15x+9y}{3}", answer: "5x+3y"},
            {problem: "\\frac{6}{12r-18}", answer: "\\frac{1}{2r-3}"},
            {problem: "\\frac{7-y}{y-7}", answer: "-1"},
            {problem: "\\frac{x^2-3x}{x}", answer: "x-3"},
            {problem: "\\frac{4x^2+10x}{5x}", answer: "\\frac{2(2x+5)}{5}"},
            {problem: "\\frac{3x+3y}{2x+2y}", answer: "\\frac{3}{2}"},
            {problem: "\\frac{x^2+x}{x}", answer: "x+1"},
            {problem: "\\frac{x^2-2x}{x}", answer: "x-2"},
            {problem: "\\frac{2x-4xy}{2x}", answer: "1-2y"},
            {problem: "\\frac{2x+4}{5x+10}", answer: "\\frac{2}{5}"},
            {problem: "\\frac{7x-7}{2x-2}", answer: "\\frac{7}{2}"},
            {problem: "\\frac{7a-21}{2a-6}", answer: "\\frac{7}{2}"},
            {problem: "\\frac{12p}{80+2pq}", answer: "\\frac{6p}{40+pq}"},
            {problem: "\\frac{100-10x}{20-2x}", answer: "5"},
            {problem: "\\frac{7-3x}{3x-7}", answer: "-1"},
            {problem: "\\frac{4x-1}{1-4x}", answer: "-1"},
            {problem: "\\frac{8x+16}{-2-x}", answer: "-8"},
            {problem: "\\frac{x+3}{-9-3x}", answer: "-\\frac{1}{3}"},
            {problem: "\\frac{5-3x}{18x-30}", answer: "-\\frac{1}{6}"},
            {problem: "\\frac{-x^2-4x}{-4x}", answer: "\\frac{x+4}{4}"},
            {problem: "\\frac{5x-2x^2}{2x^2-5x}", answer: "-1"},
            {problem: "\\frac{-5a-20}{4+a}", answer: "-5"},
            {problem: "\\frac{3x}{6}", answer: "\\frac{x}{2}"},
            {problem: "\\frac{8a}{4a}", answer: "2"},
            {problem: "\\frac{10y}{25y}", answer: "\\frac{2}{5}"},
            {problem: "\\frac{6(x+2)}{9(x+2)}", answer: "\\frac{2}{3}"},
            {problem: "\\frac{4(x-3)}{12(x-3)}", answer: "\\frac{1}{3}"},
            {problem: "\\frac{15(x+1)}{5(x+1)}", answer: "3"}
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
window.AlgebraLevels.simplifyAlgebraicFractionsEasy = new SimplifyAlgebraicFractionsEasy();