// levels/OrderOfOperationsMedium.js
class OrderOfOperationsMediumLevel {
    constructor() {
        this.key = 'orderOfOperationsMedium';
        this.name = 'Order of Operations (Medium)';
        this.usedQuestionIndices = new Set();
        
        this.questions = [
            // Original medium problems from OrderOfOperations.js
            { problem: '(4x + 2x) ÷ 5', answer: '\\frac{6x}{5}' },
            { problem: '(6b + 15b) ÷ 3', answer: '7b' },
            { problem: '6b + 15b ÷ 3', answer: '11b' },
            { problem: '(x - 2x) × 4', answer: '-4x' },
            { problem: '3 + x ÷ 2 + y', answer: '3 + \\frac{x}{2} + y' },
            { problem: 'x - 5 ÷ 3 + b', answer: 'x - \\frac{5}{3} + b' },
            { problem: '(2 + x) ÷ (4y + y)', answer: '\\frac{2 + x}{5y}' },
            { problem: '(x - 5) ÷ (3 + b)', answer: '\\frac{x - 5}{3 + b}' },
            { problem: '9y + 12y ÷ 4', answer: '12y' },
            { problem: '(9y + 12y) ÷ 3', answer: '7y' },
            { problem: '5a × (2b + 3b) - a', answer: '25ab - a' },
            { problem: '8x + (10x ÷ 5) × 2', answer: '12x' },
            { problem: '4x + (18x ÷ 3)', answer: '10x' },
            { problem: '(4x + 18x) ÷ 2', answer: '11x' },
            { problem: '10a - 2 × (3a + a)', answer: '2a' },
            { problem: '15y ÷ (2y + 3y)', answer: '3' },
            { problem: '7x - 3x × 2 + 5x', answer: '6x' },
            { problem: 'x + (5x - x × 4)', answer: '2x' },
            { problem: '(3b + b) ÷ (2 × 2)', answer: 'b' },
            { problem: '6x + x × 5 - 10x ÷ 2', answer: '6x' },
            { problem: '20x ÷ 5 + 3 × 2x', answer: '10x' },
            { problem: 'x × (5+3) - 2x', answer: '6x' },
            { problem: '\\frac{9x + 3x}{6}', answer: '2x' },
            { problem: '\\frac{10y}{2} + \\frac{8y}{4}', answer: '7y' },
            { problem: '5a + b ÷ 3 + 2a', answer: '7a + \\frac{b}{3}' },
            { problem: '12x ÷ (3 × 2) + 5x', answer: '7x' },
            { problem: '(10x - 10x ÷ 2) × 2', answer: '10x' },
            { problem: 'x + 4y - x + 3 × y', answer: '7y' },
            { problem: '3x × (y + 2y)', answer: '9xy' },
            { problem: '(12a ÷ 2a) + 5 - a', answer: '11 - a' },
            { problem: '7x - (10x + 5x) ÷ 3', answer: '2x' },
            { problem: '4x × 3 + (10x - x) ÷ 3', answer: '15x' },

            // Additional medium problems - multiple operations with brackets and fractions
            { problem: '(8 + 4) ÷ 3 + 2x', answer: '4 + 2x' },
            { problem: '5y - (3y - y) × 2', answer: 'y' },
            { problem: '\\frac{12a + 8a}{4} - a', answer: '4a' },
            { problem: '6x + (15x - 9x) ÷ 2', answer: '9x' },
            { problem: '(7x - x) × 3 ÷ 2', answer: '9x' },
            { problem: '4x + 2x × (3 - 1)', answer: '8x' },
            { problem: '\\frac{16x}{4} + x × 2 - x', answer: '5x' },
            { problem: '(5 + 7) × x - 6x', answer: '6x' },
            { problem: '3x × 4 - (2x + x)', answer: '9x' },
            { problem: '\\frac{20x - 8x}{6} + x', answer: '3x' },
            { problem: '(14x ÷ 7) × 2 + 3x', answer: '7x' },
            { problem: '9x - 2x × (4 - 1)', answer: '3x' },
            { problem: '\\frac{24x}{8} + \\frac{12x}{4}', answer: '6x' },
            { problem: '(6 - 2) × 3x - 5x', answer: '7x' },
            { problem: '18x ÷ (2 × 3) + 7x', answer: '10x' },
            { problem: '2x × (5 + 3x) - 4x', answer: '6x + 6x^2' },
            { problem: '\\frac{15x + 9x}{8} - x', answer: '2x' },
            { problem: '(10 - 4) × 2x + x', answer: '13x' },
            { problem: '12x ÷ 4 - (x + 2x)', answer: '0' },
            { problem: '(8x + 4x) ÷ 3 × 2', answer: '8x' },
            { problem: '7x × 2 - 10x ÷ 2', answer: '9x' },
            { problem: '\\frac{21x}{7} + x × (6 - 4)', answer: '5x' },
            { problem: '(11 + 7) ÷ 6 × 3x', answer: '9x' },
            { problem: '4b × (3 + 2) - 12b ÷ 3', answer: '16b' }
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
window.AlgebraLevels.orderOfOperationsMedium = new OrderOfOperationsMediumLevel();