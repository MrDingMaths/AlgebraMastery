// levels/OrderOfOperationsEasy.js
class OrderOfOperationsEasyLevel {
    constructor() {
        this.key = 'orderOfOperationsEasy';
        this.name = 'Order of Operations (Easy)';
        this.usedQuestionIndices = new Set();
        
        this.questions = [
            // Original easy problems from OrderOfOperations.js
            { problem: '3 + a × b', answer: '3 + ab' },
            { problem: '2x + y ÷ 5', answer: '2x + \\frac{y}{5}' },
            { problem: '3 × 2b - b', answer: '5b' },
            { problem: 'x - 2x × 4', answer: '-7x' },
            { problem: '10 - 3 × y', answer: '10 - 3y' },
            { problem: '8x ÷ 2 + x', answer: '5x' },
            { problem: '7a - 5a + 2a', answer: '4a' },
            { problem: '4x + x × 5', answer: '9x' },
            { problem: '3 × (2b - 2b)', answer: '0' },
            { problem: '(2x + y) ÷ 5', answer: '\\frac{2x + y}{5}' },
            { problem: '15 - x ÷ 3', answer: '15 - \\frac{x}{3}' },
            { problem: '5 + x × 4', answer: '5 + 4x' },
            { problem: '12 - 3 × a', answer: '12 - 3a' },
            { problem: '2y + 8y', answer: '10y' },
            { problem: '10x - 3x', answer: '7x' },
            { problem: '15x ÷ 3', answer: '5x' },
            { problem: 'x × 5 - 2', answer: '5x - 2' },
            { problem: 'b + b ÷ 2', answer: 'b + \\frac{b}{2}' },
            { problem: '9 + 6x ÷ 3', answer: '9 + 2x' },
            { problem: '(5x - 2x) × 3', answer: '9x' },
            { problem: '7 + (10a ÷ 5)', answer: '7 + 2a' },
            { problem: '4x - x + 3x', answer: '6x' },
            { problem: '8 × 2x - x', answer: '15x' },
            { problem: 'x ÷ 4 + 7', answer: '\\frac{x}{4} + 7' },
            { problem: '20 - 5 × x', answer: '20 - 5x' },
            { problem: '3x + x', answer: '4x' },
            { problem: '(12y - y) ÷ 11', answer: 'y' },
            { problem: '6 × x - 2x', answer: '4x' },
            { problem: 'x + 4 × x', answer: '5x' },
            { problem: '18 ÷ 2 + a', answer: '9 + a' },
            { problem: '5b - (2 × 2b)', answer: 'b' },
            { problem: '7x × 1 + 3x', answer: '10x' },
            { problem: '(x + x + x) ÷ 3', answer: 'x' },
            { problem: '8 + x × 1 - 5', answer: '3 + x' },
            { problem: '10x - 15x ÷ 3', answer: '5x' },
            { problem: 'x + y + 2x', answer: '3x + y' },
            { problem: '3 × x - x', answer: '2x' },
            { problem: '9x ÷ 9 + x', answer: '2x' },
            { problem: '4x + 6 - 2x', answer: '2x + 6' },
            { problem: '(8a - a) ÷ 7', answer: 'a' },
            { problem: 'b × 6 + 3b', answer: '9b' },

            // Additional easy problems - single operations and basic arithmetic
            { problem: '6 + 2 × x', answer: '6 + 2x' },
            { problem: '8 - 3 × x', answer: '8 - 3x' },
            { problem: 'x × 4 + 1', answer: '4x + 1' },
            { problem: 'x ÷ 2 + 9', answer: '\\frac{x}{2} + 9' },
            { problem: '5 + 7x', answer: '5 + 7x' },
            { problem: 'x × 3 - 6', answer: '3x - 6' },
            { problem: '12 ÷ 3 + x', answer: '4 + x' },
            { problem: '2x + x', answer: '3x' },
            { problem: '7 - 2 × x', answer: '7 - 2x' },
            { problem: 'x × 8 + x', answer: '9x' },
            { problem: '16 ÷ 4 - x', answer: '4 - x' },
            { problem: '3x + 4x', answer: '7x' },
            { problem: '10 - x ÷ 2', answer: '10 - \\frac{x}{2}' },
            { problem: 'x + 5 × x', answer: '6x' },
            { problem: '(3 + 2) × x', answer: '5x' },
            { problem: 'x ÷ 5 × 2', answer: '\\frac{2x}{5}' },
            { problem: '6x - 3x', answer: '3x' },
            { problem: '14 + x ÷ 7', answer: '14 + \\frac{x}{7}' },
            { problem: '2 × (4 - 1) + x', answer: '6 + x' },
            { problem: 'y × 2 ÷ 2', answer: 'y' }
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
window.AlgebraLevels.orderOfOperationsEasy = new OrderOfOperationsEasyLevel();