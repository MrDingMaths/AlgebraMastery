class AddSubtractFractionsFactorisingHard {
    constructor() {
        this.key = 'addSubtractFractionsFactorisingHard';
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
            {problem: "\\frac{2}{w^2-9w+20} + \\frac{3}{w^2+2w-24}", answer: "\\frac{5w-3}{(w-4)(w-5)(w+6)}"},
            {problem: "\\frac{2}{4x^2-1} + \\frac{1}{6x^2-x-2}", answer: "\\frac{8x-5}{(2x-1)(2x+1)(3x-2)}"},
            {problem: "\\frac{4}{8x^2-18x-5} - \\frac{2}{12x^2-5x-2}", answer: "\\frac{2}{(2x-5)(3x-2)}"},
            {problem: "\\frac{c+1}{10c^2+7c-12} + \\frac{c}{5c^2-39c+28}", answer: "\\frac{3c^2-3c-7}{(5c-4)(2c+3)(c-7)}"},
            {problem: "\\frac{n+1}{4n^3-36n} - \\frac{2}{5n^2+15n}", answer: "\\frac{n+17}{20n(n-3)(n+3)}"},
            
            // Additional complex questions - Multiple factorised quadratics
            {problem: "\\frac{2}{x^2-7x+10} + \\frac{3}{x^2-3x-10}", answer: "\\frac{5x-2}{(x-2)(x-5)(x+2)}"},
            {problem: "\\frac{4}{x^2-6x+9} + \\frac{1}{x^2-9}", answer: "\\frac{5x+9}{(x-3)^2(x+3)}"},
            {problem: "\\frac{3}{x^2+4x+4} - \\frac{2}{x^2-4}", answer: "\\frac{x-10}{(x+2)^2(x-2)}"},
            {problem: "\\frac{1}{x^2-1} + \\frac{2}{x^2+2x+1}", answer: "\\frac{3x-1}{(x-1)(x+1)^2}"},
            
            // Three or more different factors
            {problem: "\\frac{1}{x^2-x-2} + \\frac{1}{x^2-4} - \\frac{1}{x^2+x-2}", answer: "\\frac{x+5}{(x-2)(x+1)(x+2)}"},
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
            {problem: "\\frac{3}{(x^2-4)(x-3)} - \\frac{1}{(x+2)(x^2-3x)}", answer: "\\frac{2(x+1)}{x(x-2)(x+2)(x-3)}"},
            {problem: "\\frac{2}{(x^2+x)(x-2)} + \\frac{1}{(x+1)(x^2-2x)}", answer: "\\frac{3}{x(x+1)(x-2)}"},
            
            // Mixed rational and polynomial terms
            {problem: "\\frac{x^2}{x^2-5x+6} - \\frac{2x}{x-2} + \\frac{3}{x-3}", answer: "\\frac{-x^2+9x-6}{(x-2)(x-3)}"},
            {problem: "\\frac{2x+1}{x^2+x-2} + \\frac{x-3}{x^2-1} - \\frac{1}{x+2}", answer: "\\frac{2}{x+1}"},
            {problem: "\\frac{x+2}{x^2-4x+3} - \\frac{x-1}{x^2-2x-3} + \\frac{2}{x^2+2x-3}", answer: "\\frac{2x+5}{(x-1)(x-3)(x+3)}"},
            
            // Advanced variable patterns
            {problem: "\\frac{a+b}{a^2-b^2} + \\frac{a-b}{a^2+2ab+b^2}", answer: "\\frac{2(a^2+b^2)}{(a-b)(a+b)^2}"},
            {problem: "\\frac{2m}{m^2-n^2} - \\frac{n}{m^2+mn-2n^2}", answer: "\\frac{2m^2+3mn-n^2}{(m-n)(m+n)(m+2n)}"},            
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
window.AlgebraLevels.addSubtractFractionsFactorisingHard = new AddSubtractFractionsFactorisingHard();