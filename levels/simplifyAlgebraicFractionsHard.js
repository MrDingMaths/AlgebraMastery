class SimplifyAlgebraicFractionsHard {
    constructor() {
        this.key = 'simplifyAlgebraicFractionsHard';
        this.name = 'Simplifying Algebraic Fractions by Factorising (Hard)';
        this.usedQuestionIndices = new Set();
        
        this.questions = [
            {problem: "\\frac{2x^2+14x+24}{x^2-5x-36}", answer: "\\frac{2(x+3)}{x-9}"},
            {problem: "\\frac{2x^2+14x+24}{3x^2-15x-108}", answer: "\\frac{2(x+3)}{3(x-9)}"},
            {problem: "\\frac{2x^2+14x+24}{3x^2+4x-15}", answer: "\\frac{2(x+4)}{3x-5}"},
            {problem: "\\frac{14x-24-2x^2}{3x^2+4x-15}", answer: "\\frac{14x-24-2x^2}{3x^2+4x-15}"},
            {problem: "\\frac{14x-24-2x^2}{3x^2-4x-15}", answer: "\\frac{-2(x-4)}{3x+5}"},
            {problem: "\\frac{he-hd+pe-pd}{e^2-d^2}", answer: "\\frac{h+p}{e+d}"},
            {problem: "\\frac{k^2+5k-24}{2k^2-18}", answer: "\\frac{k+8}{2(k+3)}"},
            {problem: "\\frac{6m-30-pm+5p}{m^2+3m-40}", answer: "\\frac{6-p}{m+8}"},
            {problem: "\\frac{n^3-5n^2+4n}{n^2-2n+1}", answer: "\\frac{n(n-4)}{n-1}"},
            {problem: "\\frac{x^2-7}{x+\\sqrt{7}}", answer: "x-\\sqrt{7}"},
            {problem: "\\frac{x^2-10}{x-\\sqrt{10}}", answer: "x+\\sqrt{10}"},
            {problem: "\\frac{\\sqrt{5}x+3}{5x^2-9}", answer: "\\frac{1}{\\sqrt{5}x-3}"},
            {problem: "\\frac{\\sqrt{3}x-4}{3x^2-16}", answer: "\\frac{1}{\\sqrt{3}x+4}"},
            {problem: "\\frac{(x+1)^2-2}{x+1+\\sqrt{2}}", answer: "x+1-\\sqrt{2}"},
            {problem: "\\frac{(x-3)^2-5}{x-3-\\sqrt{5}}", answer: "x-3+\\sqrt{5}"},
            {problem: "\\frac{x^3-8}{x^2+2x+4}", answer: "x-2"},
            {problem: "\\frac{x^3+27}{x^2-3x+9}", answer: "x+3"},
            {problem: "\\frac{2x^3-16}{x^2+2x+4}", answer: "2(x-2)"},
            {problem: "\\frac{3x^3+81}{x^2-3x+9}", answer: "3(x+3)"},
            {problem: "\\frac{x^4-1}{x^2+1}", answer: "x^2-1"},
            {problem: "\\frac{x^4-16}{x^2+4}", answer: "x^2-4"},
            {problem: "\\frac{x^3-x^2-12x}{x^2-16}", answer: "\\frac{x(x+3)}{x+4}"},
            {problem: "\\frac{2x^3-8x^2+6x}{x^2-3x+2}", answer: "\\frac{2x(x-3)}{x-2}"},
            {problem: "\\frac{x^3+6x^2+9x}{x^2+3x}", answer: "x+3"},
            {problem: "\\frac{2x^3-2x}{x^2-1}", answer: "2x"},
            {problem: "\\frac{x^4-5x^2+4}{x^2-1}", answer: "x^2-4"},
            {problem: "\\frac{x^4-10x^2+9}{x^2-1}", answer: "x^2-9"},
            {problem: "\\frac{4x^3-36x}{x^2-9}", answer: "4x"},
            {problem: "\\frac{6x^3-24x}{x^2-4}", answer: "6x"},
            {problem: "\\frac{x^3+2x^2-x-2}{x^2-1}", answer: "x+2"},
            {problem: "\\frac{x^3-3x^2-x+3}{x^2-1}", answer: "x-3"},
            {problem: "\\frac{2x^3+4x^2-2x-4}{x^2-1}", answer: "2(x+2)"},
            {problem: "\\frac{3x^3-9x^2-3x+9}{x^2-1}", answer: "3(x-3)"},
            {problem: "\\frac{x^3-5x^2+8x-4}{x^2-4x+4}", answer: "x-1"},
            {problem: "\\frac{x^3+3x^2-4x-12}{x^2+6x+9}", answer: "\\frac{x^2-4}{x+3}"},
            {problem: "\\frac{6x^2-x-35}{3x+7}", answer: "2x-5"},
            {problem: "\\frac{8x^2+10x-3}{2x+3}", answer: "4x-1"},
            {problem: "\\frac{10x-2}{15x^2+7x-2}", answer: "\\frac{2}{3x+2}"},
            {problem: "\\frac{20x-12}{10x^2-21x+9}", answer: "\\frac{4}{2x-3}"},
            {problem: "\\frac{2x^2+11x+12}{6x^2+11x+3}", answer: "\\frac{x+4}{3x+1}"},
            {problem: "\\frac{12x^2-x-1}{8x^2+14x+3}", answer: "\\frac{3x-1}{2x+3}"},
            {problem: "\\frac{9x^2-4}{15x^2+4x-4}", answer: "\\frac{3x-2}{5x-2}"},
            {problem: "\\frac{14x^2+19x-3}{49x^2-1}", answer: "\\frac{2x+3}{7x+1}"},
            {problem: "\\frac{8x^2-2x-15}{16x^2-25}", answer: "\\frac{2x-3}{4x-5}"},
            {problem: "\\frac{25-4a^2}{6a^2-11a-10}", answer: "-\\frac{2a+5}{3a+2}"},
            {problem: "\\frac{40+11b-2b^2}{8b^2+34b+35}", answer: "\\frac{8-b}{4b+7}"},
            {problem: "\\frac{x^2y^2-4}{xy^2-3mxy-2y+6m}", answer: "\\frac{xy+2}{y-3m}"}
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
window.AlgebraLevels.simplifyAlgebraicFractionsHard = new SimplifyAlgebraicFractionsHard();