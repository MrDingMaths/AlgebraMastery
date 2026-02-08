// levels/addSubtractAlgebraicFractionsEasy.js
class AddSubtractAlgebraicFractionsEasyLevel {
    constructor() {
        this.key = 'addSubtractAlgebraicFractionsEasy';
        this.name = 'Adding Subtracting Algebraic Fractions (Easy)';
        this.usedQuestionIndices = new Set();
        
        // Predefined questions covering basic algebraic fractions with same denominators
        this.questions = [

            // Textbook questions
            {problem: "\\frac{x}{4} + \\frac{2x}{4}", answer: "\\frac{3x}{4}"},
            {problem: "\\frac{5a}{3} + \\frac{2a}{3}", answer: "\\frac{7a}{3}"},
            {problem: "\\frac{2b}{5} + \\frac{b}{5}", answer: "\\frac{3b}{5}"},
            {problem: "\\frac{4x}{3} + \\frac{x}{3}", answer: "\\frac{5x}{3}"},
            {problem: "\\frac{3y}{5} - \\frac{y}{5}", answer: "\\frac{2y}{5}"},
            {problem: "\\frac{7x}{13} - \\frac{2x}{13}", answer: "\\frac{5x}{13}"},
            {problem: "\\frac{10x}{7} - \\frac{2x}{7}", answer: "\\frac{8x}{7}"},
            {problem: "\\frac{8x}{5} - \\frac{2x}{5}", answer: "\\frac{6x}{5}"},
            {problem: "\\frac{1}{a} + \\frac{1}{a}", answer: "\\frac{2}{a}"},
            {problem: "\\frac{1}{x} - \\frac{2}{x}", answer: "-\\frac{1}{x}"},
        
            // Additional questions for cognitive complexity
            {problem: "\\frac{2x}{3} + \\frac{x}{3}", answer: "x"},
            {problem: "\\frac{4x}{7} + \\frac{3x}{7}", answer: "x"},
            {problem: "\\frac{6x}{5} - \\frac{x}{5}", answer: "x"},
            {problem: "\\frac{9x}{8} - \\frac{4x}{8}", answer: "\\frac{5x}{8}"},
            {problem: "\\frac{3x}{2} + \\frac{5x}{2}", answer: "4x"},
            {problem: "\\frac{7x}{4} - \\frac{2x}{4}", answer: "\\frac{5x}{4}"},
            {problem: "\\frac{2x}{9} + \\frac{4x}{9}", answer: "\\frac{2x}{3}"},
            {problem: "\\frac{8x}{11} - \\frac{3x}{11}", answer: "\\frac{5x}{11}"},
            {problem: "\\frac{5x}{6} + \\frac{x}{6}", answer: "x"},
            {problem: "\\frac{12x}{13} - \\frac{7x}{13}", answer: "\\frac{5x}{13}"},
            
            // Same denominators with different variables
            {problem: "\\frac{3}{y} + \\frac{2}{y}", answer: "\\frac{5}{y}"},
            {problem: "\\frac{7}{x} - \\frac{3}{x}", answer: "\\frac{4}{x}"},
            {problem: "\\frac{4}{x} + \\frac{5}{x}", answer: "\\frac{9}{x}"},
            {problem: "\\frac{8}{x} - \\frac{2}{x}", answer: "\\frac{6}{x}"},
            {problem: "\\frac{6}{x} + \\frac{3}{x}", answer: "\\frac{9}{x}"},
            {problem: "\\frac{9}{x} - \\frac{4}{x}", answer: "\\frac{5}{x}"},
            {problem: "\\frac{5}{x} + \\frac{7}{x}", answer: "\\frac{12}{x}"},
            {problem: "\\frac{11}{x} - \\frac{6}{x}", answer: "\\frac{5}{x}"},
        
            // More complex numerators with same denominators
            {problem: "\\frac{2a}{5} + \\frac{3a}{5}", answer: "a"},
            {problem: "\\frac{4b}{7} - \\frac{b}{7}", answer: "\\frac{3b}{7}"},
            {problem: "\\frac{6x}{11} + \\frac{2x}{11}", answer: "\\frac{8x}{11}"},
            {problem: "\\frac{9x}{13} - \\frac{5x}{13}", answer: "\\frac{4x}{13}"},
            {problem: "\\frac{7x}{9} + \\frac{4x}{9}", answer: "\\frac{11x}{9}"},
            {problem: "\\frac{8x}{15} - \\frac{3x}{15}", answer: "\\frac{x}{3}"},
            
            // Fractions that simplify to whole numbers or simpler forms
            {problem: "\\frac{4x}{4} + \\frac{2x}{4}", answer: "\\frac{3x}{2}"},
            {problem: "\\frac{6x}{6} - \\frac{2x}{6}", answer: "\\frac{2x}{3}"},
            {problem: "\\frac{8x}{8} + \\frac{x}{8}", answer: "\\frac{9x}{8}"},
            {problem: "\\frac{10x}{10} - \\frac{3x}{10}", answer: "\\frac{7x}{10}"},
            
            // Mixed addition and subtraction patterns
            {problem: "\\frac{x}{12} + \\frac{5x}{12}", answer: "\\frac{x}{2}"},
            {problem: "\\frac{3y}{14} - \\frac{y}{14}", answer: "\\frac{y}{7}"},
            {problem: "\\frac{7x}{16} + \\frac{9x}{16}", answer: "x"},
            {problem: "\\frac{11a}{18} - \\frac{4a}{18}", answer: "\\frac{7a}{18}"}
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
window.AlgebraLevels.addSubtractAlgebraicFractionsEasy = new AddSubtractAlgebraicFractionsEasyLevel();