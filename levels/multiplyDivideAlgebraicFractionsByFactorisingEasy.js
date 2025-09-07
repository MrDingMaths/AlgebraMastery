// levels/multiplyDivideAlgebraicFractionsByFactorisingEasy.js
class MultiplyDivideAlgebraicFractionsByFactorisingEasyLevel {
    constructor() {
        this.key = 'multiplyDivideAlgebraicFractionsByFactorisingEasy';
        this.name = 'Multiplying Dividing Algebraic Fractions by Factorising (Easy)';
        this.usedQuestionIndices = new Set();
        
        // Easy level: Basic factorising and cancellation with simple expressions
        this.questions = [
            // From provided textbook questions
            {problem: "\\frac{2x(x-4)}{4(x+1)} \\times \\frac{x+1}{x}", answer: "\\frac{x-4}{2}"},
            {problem: "\\frac{(x+2)(x-3)}{x-5} \\times \\frac{x-5}{x+2}", answer: "x-3"},
            {problem: "\\frac{x-3}{x+2} \\times \\frac{3(x+4)(x+2)}{x+4}", answer: "3(x-3)"},
            {problem: "\\frac{x(x+1)}{x+3} \\div \\frac{x+1}{x+3}", answer: "x"},
            {problem: "\\frac{x+3}{x+2} \\div \\frac{x+3}{2(x-2)}", answer: "\\frac{2(x-2)}{x+2}"},
            {problem: "\\frac{5(2x-3)}{x+7} \\div \\frac{(x+2)(2x-3)}{x+7}", answer: "\\frac{5}{x+2}"},

            // Additional easy questions with simple factorisation and cancellation
            {problem: "\\frac{2x}{x+1} \\times \\frac{x+1}{4}", answer: "\\frac{x}{2}"},
            {problem: "\\frac{3(x+2)}{x-1} \\times \\frac{x-1}{x+2}", answer: "3"},
            {problem: "\\frac{x(x-2)}{2x} \\times \\frac{4}{x-2}", answer: "2"},
            {problem: "\\frac{(x+3)^2}{x+5} \\times \\frac{x+5}{x+3}", answer: "x+3"},
            
            {problem: "\\frac{x+4}{x-1} \\div \\frac{x+4}{3x}", answer: "\\frac{3x}{x-1}"},
            {problem: "\\frac{2(x-5)}{x+6} \\div \\frac{x-5}{x+6}", answer: "2"},
            {problem: "\\frac{x^2}{x+2} \\div \\frac{x}{x+2}", answer: "x"},
            {problem: "\\frac{3x(x+1)}{x-4} \\div \\frac{x+1}{x-4}", answer: "3x"},
            
            {problem: "\\frac{x-7}{2x} \\times \\frac{6x}{x-7}", answer: "3"},
            {problem: "\\frac{4(x+9)}{x-3} \\times \\frac{x-3}{2(x+9)}", answer: "2"},
            {problem: "\\frac{x^2-1}{x+3} \\times \\frac{x+3}{x-1}", answer: "x+1"},
            {problem: "\\frac{5x}{x^2-4} \\times \\frac{x-2}{x}", answer: "\\frac{5}{x+2}"},
            
            {problem: "\\frac{x+8}{3x-1} \\div \\frac{x+8}{6x}", answer: "\\frac{6x}{3x-1}"},
            {problem: "\\frac{7(x-10)}{2x+1} \\div \\frac{x-10}{2x+1}", answer: "7"},
            
            {problem: "\\frac{x(x+5)}{x-6} \\times \\frac{2(x-6)}{x+5}", answer: "2x"},
            {problem: "\\frac{(x-1)^2}{x+7} \\times \\frac{x+7}{3(x-1)}", answer: "\\frac{x-1}{3}"},
            {problem: "\\frac{2x+6}{x-8} \\times \\frac{x-8}{x+3}", answer: "2"},
            {problem: "\\frac{x^2+x}{x-9} \\times \\frac{x-9}{x}", answer: "x+1"},
            
            {problem: "\\frac{4x-12}{x+10} \\div \\frac{x-3}{x+10}", answer: "4"},
            {problem: "\\frac{x^2-9}{2x+3} \\div \\frac{x-3}{2x+3}", answer: "x+3"},
            {problem: "\\frac{3x(x-2)}{x+4} \\div \\frac{x-2}{x+4}", answer: "3x"},
            {problem: "\\frac{x+11}{4x-5} \\div \\frac{x+11}{8x}", answer: "\\frac{8x}{4x-5}"},
            
            {problem: "\\frac{x^2+2x}{x-12} \\times \\frac{x-12}{2x}", answer: "\\frac{x+2}{2}"},
            {problem: "\\frac{5(x+13)}{x^2-1} \\times \\frac{x-1}{x+13}", answer: "\\frac{5}{x+1}"}
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
window.AlgebraLevels.multiplyDivideAlgebraicFractionsByFactorisingEasy = new MultiplyDivideAlgebraicFractionsByFactorisingEasyLevel();