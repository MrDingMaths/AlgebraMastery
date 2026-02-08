// levels/OrderOfOperationsHard.js
class OrderOfOperationsHardLevel {
    constructor() {
        this.key = 'orderOfOperationsHard';
        this.name = 'Order of Operations (Hard)';
        this.usedQuestionIndices = new Set();
        
        this.questions = [
            // Original hard problems from OrderOfOperations.js - involving exponents and complex operations
            { problem: '5x^2 - 2x × 3x', answer: '-x^2' },
            { problem: '4x^2 + 15x^3 ÷ 5x', answer: '7x^2' },
            { problem: '4b + 3 × (2b^3 ÷ b^2)', answer: '10b' },
            { problem: '2x + \\frac{x^2}{x}', answer: '3x' },
            { problem: '\\frac{12x^2y}{3x} - 3xy', answer: 'xy' },
            { problem: '\\frac{16x^2y^2}{8xy} - xy + y', answer: 'xy + y' },
            { problem: '7y^2 + 2y × 4y - y^2', answer: '14y^2' },
            { problem: '\\frac{20a^3b^2}{5ab} + 3a^2b', answer: '7a^2b' },
            { problem: '6x^3 + (10x^4 ÷ 2x) - 3x^3', answer: '8x^3' },
            { problem: '(3x + 2x) × (x^2 ÷ x)', answer: '5x^2' },
            { problem: '9x^2 + (4x × 3x) ÷ 2', answer: '15x^2' },
        
            // Additional hard problems - complex exponents, multiple variables, and advanced operations
            { problem: '3x^2 × 2x - 4x^3 ÷ 2', answer: '4x^3' },
            { problem: '\\frac{25x^4}{5x^2} + x^2 × 3', answer: '8x^2' },
            { problem: '(2x^2)^2 - 3x × x^3 ÷ x', answer: '4x^4 - 3x^3' },
            { problem: '2x^2 × 3x + x^3', answer: '7x^3' },
            { problem: '\\frac{12y^2x}{3yx} × 2 - yx', answer: '8y - yx' },
            { problem: '(2x^2)^2 ÷ 2x^2 + 3x^2', answer: '5x^2' },
            { problem: '3x × 2x^2 - \\frac{6x^3}{2x}', answer: '6x^3 - 3x^2' },
            { problem: '\\frac{12x^3y}{4xy} + xy × 2', answer: '3x^2 + 2xy' },
            { problem: '(2x^2)^2 ÷ 2x^2 - xy', answer: '2x^2 - xy' },
            { problem: '4x^2 - 2x × (3x ÷ x)', answer: '4x^2 - 6x' },
            { problem: '\\frac{18x^4}{6x^2} + x^2 × 2', answer: '5x^2' },
            { problem: '(3x^2)^2 ÷ 3x^2 + 2xy', answer: '3x^2 + 2xy' },
            { problem: '4x^2 × 2x - \\frac{12x^3}{3}', answer: '4x^3' },
            { problem: '\\frac{21x^3y}{7xy} - 2x^2', answer: 'x^2' },
            { problem: '(3x^2y)^2 ÷ 3x^2y + xy', answer: '3x^2y + xy' },
            { problem: '6x^2y ÷ 2xy × 2 - 3x', answer: '3x' },
            { problem: '\\frac{20x^4}{4x^2} + x^2 × 2', answer: '7x^2' },
            { problem: '(2a^2b)^2 ÷ 2a^2b', answer: '2a^2b' },
            { problem: '8y^3 ÷ 2y + (2y)^2 - 5y^2', answer: '3y^2' },
            { problem: '\\frac{16x^3y^2}{4xy} - 2x^2y × 2', answer: '0' },
            { problem: '(2x^2y)^2 ÷ 4x^2y + xy', answer: 'x^2y + xy' },
            { problem: '8x^3y ÷ 2xy × 3 - 9x^2y', answer: '12x^2 - 9x^2y' },
            { problem: '\\frac{18x^3y}{6xy} + x^2y × 2', answer: '3x^2 + 2x^2y' },
            { problem: '(3x^2y)^2 ÷ 3xy^2 - 2x^2y', answer: '3x^3 - 2x^2y' },
            { problem: '12x^3y ÷ 3xy × 2 + 2x^2y', answer: '8x^2 + 2x^2y' },
            { problem: '\\frac{24x^3y^2}{6xy} - (2xy)^2', answer: '4x^2y - 4x^2y^2' },
            { problem: '(2x^2y)^2 ÷ 4xy + xy × 3', answer: 'x^3y + 3xy' },
            { problem: '12x^3y ÷ 3xy × 2 - 6x^2y', answer: '8x^2 - 6x^2y' },
            { problem: '\\frac{36b^4x^2}{6bx} + b^3x × 3', answer: '9b^3x' },
            { problem: '(2x^2y)^2 ÷ 4xy - xya', answer: 'x^3y - xya' }
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

// Register the level
window.AlgebraLevels = window.AlgebraLevels || {};
window.AlgebraLevels.orderOfOperationsHard = new OrderOfOperationsHardLevel();