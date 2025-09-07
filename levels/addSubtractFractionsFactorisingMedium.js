class AddSubtractFractionsFactorisingMedium {
    constructor() {
        this.key = 'addSubtractFractionsFactorisingMedium';
        this.name = 'Adding/Subtracting Fractions by Factorising Denominator (Medium)';
        this.usedQuestionIndices = new Set();
        
        this.questions = [
            // Original textbook questions
            {problem: "\\frac{4}{(x+1)^2} - \\frac{3}{x+1}", answer: "\\frac{1-3x}{(x+1)^2}"},
            {problem: "\\frac{2}{(x+3)^2} - \\frac{4}{x+3}", answer: "-\\frac{2(2x+5)}{(x+3)^2}"},
            {problem: "\\frac{3}{x-2} + \\frac{4}{(x-2)^2}", answer: "\\frac{3x-2}{(x-2)^2}"},
            {problem: "\\frac{3x}{(x-1)^2} + \\frac{2}{x-1}", answer: "\\frac{5x-2}{(x-1)^2}"},
            {problem: "\\frac{x}{x+1} - \\frac{5x+1}{(x+1)^2}", answer: "\\frac{x^2-4x-1}{(x+1)^2}"},
            {problem: "\\frac{1}{(x+3)(x+4)} + \\frac{2}{(x+4)(x+5)}", answer: "\\frac{3x+11}{(x+3)(x+4)(x+5)}"},
            {problem: "\\frac{4}{(x-1)(x-3)} - \\frac{6}{(x-1)(2-x)}", answer: "\\frac{2(5x-13)}{(x-1)(x-2)(x-3)}"},
            {problem: "\\frac{5x}{(x+1)(x-5)} - \\frac{2}{x-5}", answer: "\\frac{3x-2}{(x+1)(x-5)}"},
            {problem: "\\frac{7}{k(k-1)} - \\frac{4}{k(k+1)}", answer: "\\frac{3k+11}{k(k-1)(k+1)}"},
            {problem: "\\frac{8}{(x+4)(x-7)} + \\frac{3}{x(x+4)}", answer: "\\frac{11x-21}{x(x+4)(x-7)}"},
            {problem: "\\frac{3}{x+2} + \\frac{5}{2x+4}", answer: "\\frac{11}{2(x+2)}"},
            {problem: "\\frac{7}{3x-3} - \\frac{2}{x-1}", answer: "\\frac{1}{3(x-1)}"},
            {problem: "\\frac{3}{8x-4} - \\frac{5}{1-2x}", answer: "\\frac{23}{4(2x-1)}"},
            {problem: "\\frac{4}{x^2-9} + \\frac{3}{x+3}", answer: "\\frac{3x-5}{(x-3)(x+3)}"},
            {problem: "\\frac{5}{2x+4} + \\frac{2}{x^2-4}", answer: "\\frac{5x-6}{2(x-2)(x+2)}"},
            {problem: "\\frac{10}{3x-4} - \\frac{7}{9x^2-16}", answer: "\\frac{3(10x+11)}{(3x-4)(3x+4)}"},
            {problem: "\\frac{1}{x^2+x} + \\frac{1}{x^2-x}", answer: "\\frac{2}{(x-1)(x+1)}"},
            {problem: "\\frac{1}{x-y} + \\frac{2x-y}{x^2-y^2}", answer: "\\frac{3x}{(x-y)(x+y)}"},
            {problem: "\\frac{2}{x+3} + \\frac{x}{x^2-x-12}", answer: "\\frac{3x-8}{(x-4)(x+3)}"},
            {problem: "\\frac{4}{x+2} + \\frac{3x}{x^2-7x-18}", answer: "\\frac{7x-36}{(x-9)(x+2)}"},
            
            // Additional questions for cognitive variety - Repeated factors
            {problem: "\\frac{5}{(x-2)^2} + \\frac{1}{x-2}", answer: "\\frac{x+3}{(x-2)^2}"},
            {problem: "\\frac{2}{(x+4)^2} - \\frac{3}{x+4}", answer: "\\frac{-3x-10}{(x+4)^2}"},
            {problem: "\\frac{x}{(x-3)^2} - \\frac{2}{x-3}", answer: "\\frac{-x+6}{(x-3)^2}"},
            {problem: "\\frac{7}{(2x-1)^2} + \\frac{3}{2x-1}", answer: "\\frac{2(3x+2)}{(2x-1)^2}"},
            {problem: "\\frac{1}{(x+5)^2} + \\frac{x}{x+5}", answer: "\\frac{x^2+5x+1}{(x+5)^2}"},
            
            // Factorised quadratic denominators
            {problem: "\\frac{2}{x^2-4} + \\frac{1}{x+2}", answer: "\\frac{x}{(x-2)(x+2)}"},
            {problem: "\\frac{3}{x^2-1} - \\frac{2}{x-1}", answer: "\\frac{1-2x}{(x-1)(x+1)}"},
            {problem: "\\frac{1}{x^2-25} + \\frac{2}{x-5}", answer: "\\frac{2x+11}{(x-5)(x+5)}"},
            {problem: "\\frac{4}{x^2-16} - \\frac{1}{x+4}", answer: "\\frac{8-x}{(x-4)(x+4)}"},
            {problem: "\\frac{5}{x^2-36} + \\frac{3}{x-6}", answer: "\\frac{3x+23}{(x-6)(x+6)}"},
            
            // Common factor patterns
            {problem: "\\frac{2}{3x+6} + \\frac{1}{x+2}", answer: "\\frac{5}{3(x+2)}"},
            {problem: "\\frac{4}{2x-8} - \\frac{1}{x-4}", answer: "\\frac{1}{x-4}"},
            {problem: "\\frac{3}{4x+12} + \\frac{2}{x+3}", answer: "\\frac{11}{4(x+3)}"},
            {problem: "\\frac{5}{5x+15} + \\frac{1}{x+3}", answer: "\\frac{2}{x+3}"},
            
            // Three-term expansions
            {problem: "\\frac{1}{(x+1)(x+2)} + \\frac{1}{(x+2)(x+3)}", answer: "\\frac{2}{(x+1)(x+3)}"},
            {problem: "\\frac{2}{(x-1)(x+3)} - \\frac{1}{(x+3)(x-2)}", answer: "\\frac{x-3}{(x-1)(x+3)(x-2)}"},
            {problem: "\\frac{3}{(x+2)(x-1)} + \\frac{1}{(x-1)(x+4)}", answer: "\\frac{2(2x+7)}{(x+2)(x-1)(x+4)}"},
            {problem: "\\frac{1}{(2x-1)(x+2)} - \\frac{2}{(x+2)(x-3)}", answer: "\\frac{-3x-1}{(2x-1)(x+2)(x-3)}"},
            
            // Factorisable expressions
            {problem: "\\frac{1}{x^2+5x+6} + \\frac{2}{x+2}", answer: "\\frac{2x+7}{(x+2)(x+3)}"},
            {problem: "\\frac{3}{x^2-3x-4} - \\frac{1}{x-4}", answer: "\\frac{2-x}{(x-4)(x+1)}"},
            {problem: "\\frac{2}{x^2+x-2} + \\frac{1}{x+2}", answer: "\\frac{x+1}{(x+2)(x-1)}"},
            {problem: "\\frac{1}{x^2-5x+6} - \\frac{2}{x-3}", answer: "\\frac{5-2x}{(x-2)(x-3)}"},
            {problem: "\\frac{4}{x^2+7x+12} + \\frac{1}{x+3}", answer: "\\frac{x+8}{(x+3)(x+4)}"},
            
            // Variable coefficients
            {problem: "\\frac{a}{(x+a)^2} + \\frac{1}{x+a}", answer: "\\frac{x+2a}{(x+a)^2}"},
            {problem: "\\frac{2b}{x^2-b^2} - \\frac{1}{x-b}", answer: "-\\frac{1}{x+b}"},
            {problem: "\\frac{c}{(x-c)(x+c)} + \\frac{2}{x+c}", answer: "\\frac{2x-c}{(x-c)(x+c)}"}
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
window.AlgebraLevels.addSubtractFractionsFactorisingMedium = new AddSubtractFractionsFactorisingMedium();