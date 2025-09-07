// levels/multiplyDivideAlgebraicFractionsByFactorisingHard.js
class MultiplyDivideAlgebraicFractionsByFactorisingHardLevel {
    constructor() {
        this.key = 'multiplyDivideAlgebraicFractionsByFactorisingHard';
        this.name = 'Multiplying Dividing Algebraic Fractions by Factorising (Hard)';
        this.usedQuestionIndices = new Set();
        
        // Hard level: Complex multi-step problems, multiple variables, and advanced factorisation
        this.questions = [
            // From provided textbook questions
            {problem: "\\frac{x^2-x-20}{x^2-25} \\times \\frac{x^2-x-2}{x^2+2x-8} \\div \\frac{x+1}{x^2+5x}", answer: "x"},
            {problem: "\\frac{a^2-5a}{y^2-4y+4} \\div \\frac{3a-15}{y^2-4} \\times \\frac{y^2-y-2}{5ay}", answer: "\\frac{(y+1)(y+2)}{15y}"},
            {problem: "\\frac{x^2-8x+15}{5x^2+10x} \\div \\frac{x^2-9}{10x^2} \\times \\frac{x^2+5x+6}{2x-10}", answer: "x"},
            {problem: "\\frac{a^2+2ab+b^2}{a(a+b)} \\div \\frac{a^2-b^2}{a^2-2ab+b^2}", answer: "\\frac{a-b}{a}"},
            {problem: "\\frac{a^2-2ab+b^2}{a^2-b^2} \\div \\frac{a^2-b^2}{a^2+2ab+b^2}", answer: "1"},
            {problem: "\\frac{a^2-b^2}{a^2-2ab+b^2} \\div \\frac{a^2-b^2}{a^2+2ab+b^2}", answer: "\\frac{(a+b)^2}{(a-b)^2}"},
            {problem: "\\frac{a^2+2ab+b^2}{a(a+b)} \\div \\frac{a(a-b)}{a^2-2ab+b^2}", answer: "\\frac{a^2-b^2}{a^2}"},
            {problem: "\\frac{100x^2-25}{2x^2-9x-5} \\div \\frac{5x^2+10x-75}{2x^2-5x-3}", answer: "\\frac{5(4x^2-1)}{x^2-25}"},
            {problem: "\\frac{3x^2-12}{30x+15} \\div \\frac{2x^2-3x-2}{4x^2+4x+1}", answer: "\\frac{x+2}{5}"},
        
            // Additional hard questions with complex factorisation and multiple steps
            {problem: "\\frac{x^2-4x+4}{x^2-4} \\times \\frac{x^2+x-6}{x^2-2x} \\div \\frac{x+3}{x}", answer: "\\frac{x-2}{x+2}"},
            {problem: "\\frac{2x^3-8x}{x^2+4x+4} \\times \\frac{x+2}{x^2-4} \\div \\frac{x}{x-2}", answer: "\\frac{2(x-2)}{x+2}"},
            
            {problem: "\\frac{x^2-9}{x^2+6x+9} \\times \\frac{x^2+3x}{x^2-3x} \\div \\frac{x+3}{x-3}", answer: "\\frac{x-3}{x+3}"},
            {problem: "\\frac{x^4-16}{x^2+4x+4} \\div \\frac{x^2+4}{x+2} \\times \\frac{x+2}{x^2-4}", answer: "1"},
            {problem: "\\frac{x^2+4x+3}{x^2-1} \\times \\frac{x^2-2x+1}{x^2+2x-3} \\div \\frac{x-1}{x+3}", answer: "\\frac{x+3}{x-1}"},
            {problem: "\\frac{2x^2+x-3}{x^2-9} \\div \\frac{2x+3}{x+3} \\times \\frac{x-3}{x-1}", answer: "1"},
            
            {problem: "\\frac{x^2-5x+6}{x^2-4x+3} \\times \\frac{x^2-1}{x^2-9} \\div \\frac{x-2}{x+3}", answer: "\\frac{x+1}{x-3}"},
            {problem: "\\frac{4x^2-1}{2x^2+x-1} \\div \\frac{2x+1}{x+1} \\times \\frac{x+1}{2x-1}", answer: "\\frac{x+1}{2x-1}"},
            {problem: "\\frac{x^3+x^2-6x}{x^2-9} \\times \\frac{x-3}{x^2+2x} \\div \\frac{x-2}{x+3}", answer: "\\frac{x+3}{x+2}"},
            
            {problem: "\\frac{6x^2-x-2}{4x^2-4x+1} \\times \\frac{2x-1}{3x+2} \\div \\frac{2x+1}{2x-1}", answer: "\\frac{3x-2}{3x+2}"},
            {problem: "\\frac{x^4-1}{x^2+2x+1} \\div \\frac{x^2+1}{x+1} \\times \\frac{x+1}{x^2-1}", answer: "\\frac{1}{x+1}"},
            {problem: "\\frac{x^2+6x+9}{x^2-9} \\times \\frac{x^2-3x}{x^2+3x} \\div \\frac{x+3}{x-3}", answer: "\\frac{x-3}{x+3}"},
            {problem: "\\frac{4x^3-4x}{x^2+2x+1} \\div \\frac{2x^2-2}{x+1} \\times \\frac{x+1}{2x}", answer: "1"},
            
            {problem: "\\frac{9x^2-4}{3x^2+5x-2} \\div \\frac{3x+2}{x+2} \\times \\frac{x+2}{3x-2}", answer: "\\frac{x+2}{3x-1}"}
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
window.AlgebraLevels.multiplyDivideAlgebraicFractionsByFactorisingHard = new MultiplyDivideAlgebraicFractionsByFactorisingHardLevel();