// levels/multiplyDivideAlgebraicFractionsEasy.js
class MultiplyDivideAlgebraicFractionsEasyLevel {
    constructor() {
        this.key = 'multiplyDivideAlgebraicFractionsEasy';
        this.name = 'Multiply Divide Algebraic Fractions (Easy)';
        this.usedQuestionIndices = new Set();
        
        // Predefined questions covering basic multiplication and division of algebraic fractions
        this.questions = [

            // Basic fraction × fraction multiplication
            {problem: "\\frac{3a}{4} \\times \\frac{5b}{7}", answer: "\\frac{15ab}{28}"},
            {problem: "\\frac{5x}{7} \\times \\frac{2y}{3}", answer: "\\frac{10xy}{21}"},
            {problem: "\\frac{11a}{5} \\times \\frac{2b}{7}", answer: "\\frac{22ab}{35}"},
            {problem: "\\frac{x}{3} \\times \\frac{2}{5}", answer: "\\frac{2x}{15}"},
            {problem: "\\frac{1}{7} \\times \\frac{a}{9}", answer: "\\frac{a}{63}"},
            {problem: "\\frac{2}{3} \\times \\frac{4a}{5}", answer: "\\frac{8a}{15}"},
            {problem: "\\frac{4c}{5} \\times \\frac{1}{5}", answer: "\\frac{4c}{25}"},
            {problem: "\\frac{4a}{3} \\times \\frac{2b}{5}", answer: "\\frac{8ab}{15}"},
            {problem: "\\frac{3}{5} \\times \\frac{x}{y}", answer: "\\frac{3x}{5y}"},
            {problem: "\\frac{x}{y} \\times \\frac{3}{5}", answer: "\\frac{3x}{5y}"},

            // Fraction × whole number
            {problem: "\\frac{4x}{5} \\times 3", answer: "\\frac{12x}{5}"},
            {problem: "4 \\times \\frac{a}{3}", answer: "\\frac{4a}{3}"},
            {problem: "\\frac{2a}{7} \\times 5", answer: "\\frac{10a}{7}"},
            {problem: "3 \\times \\frac{5b}{4}", answer: "\\frac{15b}{4}"},
            {problem: "\\frac{7x}{6} \\times 2", answer: "\\frac{7x}{3}"},
            {problem: "6 \\times \\frac{y}{5}", answer: "\\frac{6y}{5}"},

            // Basic division (whole ÷ fraction)
            {problem: "1 \\div \\frac{x}{2}", answer: "\\frac{2}{x}"},
            {problem: "2 \\div \\frac{x}{5}", answer: "\\frac{10}{x}"},
            {problem: "3 \\div \\frac{a}{4}", answer: "\\frac{12}{a}"},
            {problem: "5 \\div \\frac{b}{3}", answer: "\\frac{15}{b}"},

            // Basic division (fraction ÷ fraction)
            {problem: "\\frac{3a}{4} \\div \\frac{1}{5}", answer: "\\frac{15a}{4}"},
            {problem: "\\frac{2x}{5} \\div \\frac{3}{7}", answer: "\\frac{14x}{15}"},
            {problem: "\\frac{1}{7} \\div \\frac{2}{x}", answer: "\\frac{x}{14}"},
            {problem: "\\frac{5y}{6} \\div \\frac{2}{3}", answer: "\\frac{5y}{4}"},
            {problem: "\\frac{4a}{9} \\div \\frac{1}{3}", answer: "\\frac{4a}{3}"},

            // Additional generated questions for variety
            {problem: "\\frac{2}{7} \\times \\frac{3x}{4}", answer: "\\frac{3x}{14}"},
            {problem: "\\frac{5a}{8} \\times \\frac{4}{3}", answer: "\\frac{5a}{6}"},
            {problem: "\\frac{6}{5} \\times \\frac{2b}{9}", answer: "\\frac{4b}{15}"},
            {problem: "\\frac{3x}{10} \\times \\frac{5}{2}", answer: "\\frac{3x}{4}"},
            {problem: "\\frac{7}{4} \\times \\frac{2y}{3}", answer: "\\frac{7y}{6}"},
            
            {problem: "\\frac{8a}{9} \\div \\frac{2}{3}", answer: "\\frac{4a}{3}"},
            {problem: "\\frac{6x}{7} \\div \\frac{3}{4}", answer: "\\frac{8x}{7}"},
            {problem: "\\frac{5}{6} \\div \\frac{y}{4}", answer: "\\frac{10}{3y}"},
            {problem: "\\frac{9b}{10} \\div \\frac{3}{5}", answer: "\\frac{3b}{2}"},
            {problem: "\\frac{4}{9} \\div \\frac{2c}{7}", answer: "\\frac{14}{9c}"},

            {problem: "\\frac{a}{6} \\times 12", answer: "2a"},
            {problem: "8 \\times \\frac{3b}{4}", answer: "6b"},
            {problem: "\\frac{5x}{12} \\times 6", answer: "\\frac{5x}{2}"},
            {problem: "15 \\times \\frac{2y}{5}", answer: "6y"},
            {problem: "\\frac{7a}{8} \\times 4", answer: "\\frac{7a}{2}"},

            {problem: "4 \\div \\frac{2x}{3}", answer: "\\frac{6}{x}"},
            {problem: "6 \\div \\frac{y}{2}", answer: "\\frac{12}{y}"},
            {problem: "8 \\div \\frac{3a}{4}", answer: "\\frac{32}{3a}"},
            {problem: "10 \\div \\frac{5b}{6}", answer: "\\frac{12}{b}"},
            {problem: "12 \\div \\frac{4x}{5}", answer: "\\frac{15}{x}"}
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
window.AlgebraLevels.multiplyDivideAlgebraicFractionsEasy = new MultiplyDivideAlgebraicFractionsEasyLevel();