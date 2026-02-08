class AddSubtractFractionsByFactorisingDenominatorHardLevel {
    constructor() {
        this.key = 'addSubtractFractionsByFactorisingDenominatorHard';
        this.name = 'Adding/Subtracting Fractions by Factorising Denominator (Hard)';
        this.usedQuestionIndices = new Set();
        
        this.questions = [
            // Original textbook questions
            {problem: "\\frac{3}{x^2+2x-8} - \\frac{2}{x^2+x-6}", answer: "\\frac{x+1}{(x+4)(x-2)(x+3)}"},
            {problem: "\\frac{1}{x^2-4x+3} + \\frac{1}{x^2-5x+6} - \\frac{1}{x^2-3x+2}", answer: "\\frac{x}{(x-1)(x-2)(x-3)}"},
            {problem: "\\frac{4}{x^2-9} - \\frac{1}{x^2-8x+15}", answer: "\\frac{3x-23}{(x-3)(x+3)(x-5)}"},
            {problem: "\\frac{x+4}{x^2-x-6} - \\frac{x-5}{x^2-9x+18}", answer: "\\frac{x-14}{(x-3)(x+2)(x-6)}"},
            {problem: "\\frac{7}{x^2+7x+12} + \\frac{2}{x^2-2x-15}", answer: "\\frac{9(x-3)}{(x+3)(x+4)(x-5)}"},
            {problem: "\\frac{3}{(x+1)^2-4} - \\frac{2}{x^2+6x+9}", answer: "\\frac{x+11}{(x-1)(x+3)^2}"},
            {problem: "\\frac{2}{x^2-9x+20} + \\frac{3}{x^2+2x-24}", answer: "\\frac{5x-3}{(x-4)(x-5)(x+6)}"},
            {problem: "\\frac{2}{4x^2-1} + \\frac{1}{6x^2-x-2}", answer: "\\frac{8x-5}{(2x-1)(2x+1)(3x-2)}"},
            {problem: "\\frac{4}{8x^2-18x-5} - \\frac{2}{12x^2-5x-2}", answer: "\\frac{2}{(2x-5)(3x-2)}"},
            {problem: "\\frac{x+1}{10x^2+7x-12} + \\frac{x}{5x^2-39x+28}", answer: "\\frac{3x^2-3x-7}{(5x-4)(2x+3)(x-7)}"},
            {problem: "\\frac{x+1}{4x^3-36x} - \\frac{2}{5x^2+15x}", answer: "\\frac{-3x+29}{20x(x-3)(x+3)}"},
            
            // Additional complex questions - Multiple factorised quadratics
            {problem: "\\frac{2}{x^2-7x+10} + \\frac{3}{x^2-3x-10}", answer: "\\frac{5x-2}{(x-2)(x-5)(x+2)}"},
            {problem: "\\frac{4}{x^2-6x+9} + \\frac{1}{x^2-9}", answer: "\\frac{5x+9}{(x-3)^2(x+3)}"},
            {problem: "\\frac{3}{x^2+4x+4} - \\frac{2}{x^2-4}", answer: "\\frac{x-10}{(x+2)^2(x-2)}"},
            {problem: "\\frac{1}{x^2-1} + \\frac{2}{x^2+2x+1}", answer: "\\frac{3x-1}{(x-1)(x+1)^2}"},
            
            // Three or more different factors
            {problem: "\\frac{1}{x^2-x-2} + \\frac{1}{x^2-4} - \\frac{1}{x^2+x-2}", answer: "\\frac{x^2+2x-1}{(x-1)(x-2)(x+1)(x+2)}"},
            {problem: "\\frac{2}{x^2+5x+6} - \\frac{1}{x^2+3x+2} + \\frac{3}{x^2+4x+3}", answer: "\\frac{4x+5}{(x+1)(x+2)(x+3)}"},
            {problem: "\\frac{3}{x^2-5x+6} + \\frac{2}{x^2-6x+8} - \\frac{1}{x^2-7x+12}", answer: "\\frac{4}{(x-2)(x-3)}"},
            
            // Higher degree polynomials
            {problem: "\\frac{2}{x^3-x^2-2x} + \\frac{1}{x^2-4}", answer: "\\frac{x^2+3x+4}{x(x-2)(x+1)(x+2)}"},
            {problem: "\\frac{3}{x^3+x^2-6x} - \\frac{1}{x^2-9}", answer: "\\frac{-x^2+5x-9}{x(x-2)(x+3)(x-3)}"},
            {problem: "\\frac{1}{x^3-4x} + \\frac{2}{x^2+2x}", answer: "\\frac{2x-3}{x(x-2)(x+2)}"},
            {problem: "\\frac{2}{2x^3-8x} - \\frac{1}{x^2-4}", answer: "\\frac{1-x}{x(x-2)(x+2)}"},
            
            // Complex coefficient patterns
            {problem: "\\frac{3}{8x^2+2x-3} + \\frac{2}{12x^2+x-6}", answer: "\\frac{13x-8}{(2x-1)(4x+3)(3x-2)}"},
            
            // Nested factorisation patterns
            {problem: "\\frac{1}{(x^2-1)(x+2)} + \\frac{2}{(x-1)(x^2+2x)}", answer: "\\frac{3x+2}{x(x-1)(x+1)(x+2)}"},
            {problem: "\\frac{2}{(x^2+x)(x-2)} + \\frac{1}{(x+1)(x^2-2x)}", answer: "\\frac{3}{x(x+1)(x-2)}"},
            
            // Mixed rational and polynomial terms
            {problem: "\\frac{x^2}{x^2-5x+6} - \\frac{2x}{x-2} + \\frac{3}{x-3}", answer: "\\frac{-x^2+9x-6}{(x-2)(x-3)}"},
            {problem: "\\frac{2x+1}{x^2+x-2} + \\frac{x-3}{x^2-1} - \\frac{1}{x+2}", answer: "\\frac{2}{x+1}"},
            {problem: "\\frac{x+2}{x^2-4x+3} - \\frac{x-1}{x^2-2x-3} + \\frac{2}{x^2+2x-3}", answer: "\\frac{7x^2+12x-3}{(x-1)(x-3)(x+1)(x+3)}"},
            
            // Advanced variable patterns
            {problem: "\\frac{2x}{x^2-y^2} - \\frac{y}{x^2+xy-2y^2}", answer: "\\frac{2x^2+3xy-y^2}{(x-y)(x+y)(x+2y)}"},            
            // Extremely complex cases
            {problem: "\\frac{x}{6x^3-6x} + \\frac{1}{2x^2-2}", answer: "\\frac{2}{3(x-1)(x+1)}"}
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
window.AlgebraLevels.addSubtractFractionsByFactorisingDenominatorHard = new AddSubtractFractionsByFactorisingDenominatorHardLevel();