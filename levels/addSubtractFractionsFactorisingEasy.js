class AddSubtractFractionsFactorisingEasy {
    constructor() {
        this.key = 'addSubtractFractionsFactorisingEasy';
        this.name = 'Adding/Subtracting Fractions by Factorising Denominator (Easy)';
        this.usedQuestionIndices = new Set();
        
        this.questions = [
            // Original textbook questions
            {problem: "\\frac{5}{x} + \\frac{2}{x+4}", answer: "\\frac{7x+20}{x(x+4)}"},
            {problem: "\\frac{4}{x-7} + \\frac{3}{x}", answer: "\\frac{7(x-3)}{x(x-7)}"},
            {problem: "\\frac{1}{x-3} + \\frac{2}{x+5}", answer: "\\frac{3x-1}{(x-3)(x+5)}"},
            {problem: "\\frac{3}{x+3} - \\frac{2}{x-4}", answer: "\\frac{x-18}{(x+3)(x-4)}"},
            {problem: "\\frac{6}{2x-1} - \\frac{3}{x-4}", answer: "-\\frac{21}{(2x-1)(x-4)}"},
            {problem: "\\frac{4}{x-5} + \\frac{2}{3x-4}", answer: "\\frac{2(7x-13)}{(x-5)(3x-4)}"},
            {problem: "\\frac{5}{2x-1} - \\frac{6}{x+7}", answer: "\\frac{-7x+41}{(2x-1)(x+7)}"},
            {problem: "\\frac{8}{3x-2} - \\frac{3}{1-x}", answer: "\\frac{17x-14}{(3x-2)(x-1)}"},
            {problem: "\\frac{3x+2}{3x} + \\frac{7}{12}", answer: "\\frac{19x+8}{12x}"},
            {problem: "\\frac{2x-1}{4} + \\frac{2-3x}{10x}", answer: "\\frac{10x^2-11x+4}{20x}"},
            {problem: "\\frac{3}{1-x} - \\frac{2}{x-1}", answer: "-\\frac{5}{x-1}"},
            {problem: "\\frac{4x}{5-x} - \\frac{3}{x-5}", answer: "-\\frac{4x+3}{x-5}"},
            {problem: "\\frac{2}{7x-3} - \\frac{7}{3-7x}", answer: "\\frac{9}{7x-3}"},
            {problem: "\\frac{1}{4-3x} + \\frac{2x}{3x-4}", answer: "\\frac{2x-1}{3x-4}"},
            {problem: "\\frac{-3x}{5-3x} - \\frac{5}{3x-5}", answer: "1"},
            {problem: "\\frac{4}{x-6} + \\frac{4}{6-x}", answer: "0"},
            
            // Additional questions for cognitive variety - Basic operations
            {problem: "\\frac{2}{x} + \\frac{3}{x+1}", answer: "\\frac{5x+2}{x(x+1)}"},
            {problem: "\\frac{1}{x+2} + \\frac{4}{x}", answer: "\\frac{5x+8}{x(x+2)}"},
            {problem: "\\frac{3}{x-1} - \\frac{1}{x+2}", answer: "\\frac{2x+7}{(x-1)(x+2)}"},
            {problem: "\\frac{7}{x+1} - \\frac{3}{x-2}", answer: "\\frac{4x-17}{(x+1)(x-2)}"},
            {problem: "\\frac{1}{x} + \\frac{1}{x+3}", answer: "\\frac{2x+3}{x(x+3)}"},
            {problem: "\\frac{5}{x-4} + \\frac{1}{x+1}", answer: "\\frac{6x+1}{(x-4)(x+1)}"},
            {problem: "\\frac{2}{x+5} - \\frac{1}{x-3}", answer: "\\frac{x-11}{(x+5)(x-3)}"},
            {problem: "\\frac{4}{x} - \\frac{2}{x+6}", answer: "\\frac{2(x+12)}{x(x+6)}"},
            {problem: "\\frac{3}{2x} + \\frac{1}{x+4}", answer: "\\frac{5x+12}{2x(x+4)}"},
            {problem: "\\frac{1}{x-5} + \\frac{3}{x+2}", answer: "\\frac{4x-13}{(x-5)(x+2)}"},
            {problem: "\\frac{6}{x+3} - \\frac{2}{x-1}", answer: "\\frac{4(x-3)}{(x+3)(x-1)}"},
            {problem: "\\frac{1}{3x} + \\frac{2}{x-2}", answer: "\\frac{7x-2}{3x(x-2)}"},
            {problem: "\\frac{5}{x-6} - \\frac{3}{x+4}", answer: "\\frac{2(x+19)}{(x-6)(x+4)}"},
            {problem: "\\frac{2}{x+7} + \\frac{1}{x-8}", answer: "\\frac{3(x-3)}{(x+7)(x-8)}"},
            
            // Simple coefficient variations
            {problem: "\\frac{1}{2x-1} + \\frac{1}{x+3}", answer: "\\frac{3x+2}{(2x-1)(x+3)}"},
            {problem: "\\frac{3}{x-2} - \\frac{1}{3x+1}", answer: "\\frac{8x+5}{(x-2)(3x+1)}"},
            {problem: "\\frac{2}{3x-2} + \\frac{1}{x+1}", answer: "\\frac{5x}{(3x-2)(x+1)}"},
            {problem: "\\frac{4}{x+4} - \\frac{1}{2x-3}", answer: "\\frac{7x-16}{(x+4)(2x-3)}"},
            {problem: "\\frac{1}{4x+1} + \\frac{2}{x-3}", answer: "\\frac{9x-1}{(4x+1)(x-3)}"},
            
            // Sign recognition patterns
            {problem: "\\frac{2}{x-y} + \\frac{1}{y-x}", answer: "\\frac{1}{x-y}"},
            {problem: "\\frac{3}{a-b} - \\frac{2}{b-a}", answer: "\\frac{5}{a-b}"},
            {problem: "\\frac{1}{2-x} + \\frac{3}{x-2}", answer: "\\frac{2}{x-2}"},
            {problem: "\\frac{4}{3-2x} - \\frac{1}{2x-3}", answer: "\\frac{5}{3-2x}"},
            {problem: "\\frac{5}{1-3x} + \\frac{2}{3x-1}", answer: "\\frac{3}{1-3x}"}
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
window.AlgebraLevels.addSubtractFractionsFactorisingEasy = new AddSubtractFractionsFactorisingEasy();