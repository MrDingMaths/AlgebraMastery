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
            { problem: 'c - 2c × 4', answer: '-7c' },
            { problem: '10 - 3 × y', answer: '10 - 3y' },
            { problem: '8p ÷ 2 + p', answer: '5p' },
            { problem: '7a - 5a + 2a', answer: '4a' },
            { problem: '4z + z × 5', answer: '9z' },
            { problem: '3 × (2b - 2b)', answer: '0' },
            { problem: '(2x + y) ÷ 5', answer: '\\frac{2x + y}{5}' },
            { problem: '15 - x ÷ 3', answer: '15 - \\frac{x}{3}' },
            { problem: '5 + x × 4', answer: '5 + 4x' },
            { problem: '12 - 3 × a', answer: '12 - 3a' },
            { problem: '2y + 8y', answer: '10y' },
            { problem: '10p - 3p', answer: '7p' },
            { problem: '15z ÷ 3', answer: '5z' },
            { problem: 'c × 5 - 2', answer: '5c - 2' },
            { problem: 'b + b ÷ 2', answer: 'b + \\frac{b}{2}' },
            { problem: '9 + 6r ÷ 3', answer: '9 + 2r' },
            { problem: '(5x - 2x) × 3', answer: '9x' },
            { problem: '7 + (10a ÷ 5)', answer: '7 + 2a' },
            { problem: '4w - w + 3w', answer: '6w' },
            { problem: '8 × 2k - k', answer: '15k' },
            { problem: 'm ÷ 4 + 7', answer: '\\frac{m}{4} + 7' },
            { problem: '20 - 5 × p', answer: '20 - 5p' },
            { problem: '3q + q', answer: '4q' },
            { problem: '(12y - y) ÷ 11', answer: 'y' },
            { problem: '6 × z - 2z', answer: '4z' },
            { problem: 'x + 4 × x', answer: '5x' },
            { problem: '18 ÷ 2 + a', answer: '9 + a' },
            { problem: '5b - (2 × 2b)', answer: 'b' },
            { problem: '7c × 1 + 3c', answer: '10c' },
            { problem: '(d + d + d) ÷ 3', answer: 'd' },
            { problem: '8 + n × 1 - 5', answer: '3 + n' },
            { problem: '10k - 15k ÷ 3', answer: '5k' },
            { problem: 'x + y + 2x', answer: '3x + y' },
            { problem: '3 × p - p', answer: '2p' },
            { problem: '9z ÷ 9 + z', answer: '2z' },
            { problem: '4r + 6 - 2r', answer: '2r + 6' },
            { problem: '(8a - a) ÷ 7', answer: 'a' },
            { problem: 'b × 6 + 3b', answer: '9b' },

            // Additional easy problems - single operations and basic arithmetic
            { problem: '6 + 2 × m', answer: '6 + 2m' },
            { problem: '8 - 3 × n', answer: '8 - 3n' },
            { problem: 't × 4 + 1', answer: '4t + 1' },
            { problem: 'h ÷ 2 + 9', answer: '\\frac{h}{2} + 9' },
            { problem: '5 + 7k', answer: '5 + 7k' },
            { problem: 'w × 3 - 6', answer: '3w - 6' },
            { problem: '12 ÷ 3 + s', answer: '4 + s' },
            { problem: '2v + v', answer: '3v' },
            { problem: '7 - 2 × g', answer: '7 - 2g' },
            { problem: 'f × 8 + f', answer: '9f' },
            { problem: '16 ÷ 4 - j', answer: '4 - j' },
            { problem: '3u + 4u', answer: '7u' },
            { problem: '10 - e ÷ 2', answer: '10 - \\frac{e}{2}' },
            { problem: 'l + 5 × l', answer: '6l' },
            { problem: '(3 + 2) × i', answer: '5i' },
            { problem: 'o ÷ 5 × 2', answer: '\\frac{2o}{5}' },
            { problem: '6q - 3q', answer: '3q' },
            { problem: '14 + r ÷ 7', answer: '14 + \\frac{r}{7}' },
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