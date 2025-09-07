// levels/multiplyDivideAlgebraicFractionsByFactorisingMedium.js
class MultiplyDivideAlgebraicFractionsByFactorisingMediumLevel {
    constructor() {
        this.key = 'multiplyDivideAlgebraicFractionsByFactorisingMedium';
        this.name = 'Multiplying Dividing Algebraic Fractions by Factorising (Medium)';
        this.usedQuestionIndices = new Set();
        
        // Medium level: Factorising quadratics and more complex cancellation
        this.questions = [
            // From provided textbook questions
            {problem: "\\frac{3x+3}{2x} \\times \\frac{x^2}{x^2-1}", answer: "\\frac{3x}{2(x-1)}"},
            {problem: "\\frac{a^2+a-2}{a+2} \\times \\frac{a^2-3a}{a^2-4a+3}", answer: "a"},
            {problem: "\\frac{c^2+5c+6}{c^2-16} \\div \\frac{c+3}{c-4}", answer: "\\frac{c+2}{c+4}"},
            {problem: "\\frac{x^2-4}{x^2-x-6} \\times \\frac{5x-15}{x^2+4x-12}", answer: "\\frac{5}{x+6}"},
            {problem: "\\frac{x^2+3x+2}{x^2+4x+3} \\times \\frac{x^2-9}{3x+6}", answer: "\\frac{x-3}{3}"},
            {problem: "\\frac{x^2+2x-3}{x^2-25} \\times \\frac{2x-10}{x+3}", answer: "\\frac{2(x-1)}{x+5}"},
            {problem: "\\frac{x^2-x-6}{x^2+x-12} \\times \\frac{x^2+5x+4}{x^2-1}", answer: "\\frac{x+2}{x-1}"},
            {problem: "\\frac{x^2-4x-12}{x^2-4} \\times \\frac{x^2-6x+8}{x^2-36}", answer: "\\frac{x-4}{x+6}"},
            {problem: "\\frac{x^2+2x-3}{x^2-25} \\div \\frac{3x-3}{2x+10}", answer: "\\frac{2(x+3)}{3(x-5)}"},
            {problem: "\\frac{x^2+3x+2}{x^2+4x+3} \\div \\frac{4x+8}{x^2-9}", answer: "\\frac{x-3}{4}"},
            {problem: "\\frac{x^2+5x-14}{x^2+2x-3} \\div \\frac{x^2+9x+14}{x^2+x-2}", answer: "\\frac{x-2}{x+3}"},
        
            // Additional medium questions requiring factorisation
            {problem: "\\frac{x^2-1}{x^2+3x} \\times \\frac{x}{x-1}", answer: "\\frac{x+1}{x+3}"},
            {problem: "\\frac{2x-4}{x^2-9} \\times \\frac{x+3}{x-2}", answer: "\\frac{2}{x-3}"},
            {problem: "\\frac{x^2+4x+4}{x^2-4} \\times \\frac{x-2}{x+2}", answer: "1"},
            {problem: "\\frac{x^2-6x+9}{x^2-9} \\times \\frac{x+3}{x-3}", answer: "1"},
            
            {problem: "\\frac{x^2+7x+12}{x^2+2x-8} \\div \\frac{x+4}{x-2}", answer: "\\frac{x+3}{x+4}"},
            {problem: "\\frac{x^2-5x+6}{x^2-9} \\div \\frac{x-2}{x+3}", answer: "1"},
            {problem: "\\frac{x^2+x-6}{x^2-1} \\div \\frac{x+3}{x+1}", answer: "\\frac{x-2}{x-1}"},
            {problem: "\\frac{x^2-7x+10}{x^2+3x-4} \\div \\frac{x-5}{x+4}", answer: "\\frac{x-2}{x-1}"},
            
            {problem: "\\frac{3x+9}{x^2-4} \\times \\frac{x-2}{x+3}", answer: "\\frac{3}{x+2}"},
            {problem: "\\frac{x^2+6x+8}{x^2-16} \\times \\frac{x-4}{x+2}", answer: "1"},
            {problem: "\\frac{2x^2-8}{x^2+5x+6} \\times \\frac{x+3}{x-2}", answer: "2"},
            {problem: "\\frac{x^2-3x-10}{x^2-25} \\times \\frac{x+5}{x-5}", answer: "\\frac{x+2}{x-5}"},
            
            {problem: "\\frac{x^2+8x+15}{x^2-9} \\div \\frac{x+5}{x-3}", answer: "1"},
            {problem: "\\frac{x^2-2x-15}{x^2+x-12} \\div \\frac{x-5}{x+4}", answer: "\\frac{x+3}{x-3}"},
            {problem: "\\frac{x^2+10x+21}{x^2-49} \\div \\frac{x+3}{x-7}", answer: "1"},
            {problem: "\\frac{x^2-8x+15}{x^2-2x-3} \\div \\frac{x-3}{x+1}", answer: "\\frac{x-5}{x-3}"},
            
            {problem: "\\frac{4x+8}{x^2-1} \\times \\frac{x-1}{2}", answer: "\\frac{2(x+2)}{x+1}"},
            {problem: "\\frac{x^2+9x+20}{x^2-25} \\times \\frac{x-5}{x+4}", answer: "1"},
            {problem: "\\frac{x^2-11x+28}{x^2-49} \\times \\frac{x+7}{x-4}", answer: "1"},
            {problem: "\\frac{x^2+12x+32}{x^2-64} \\times \\frac{x-8}{x+4}", answer: "1"}
        ];
    }

    generateQuestion() {
        // Reset if we've used all questions in this session
        if (this.usedQuestionIndices.size >= this.questions.length) {
            this.usedQuestionIndices.clear();
        }
        
        // Pick a random unused question
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

// Register the level
window.AlgebraLevels = window.AlgebraLevels || {};
window.AlgebraLevels.multiplyDivideAlgebraicFractionsByFactorisingMedium = new MultiplyDivideAlgebraicFractionsByFactorisingMediumLevel();