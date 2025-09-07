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
            { problem: '(c - 2c) × 4', answer: '-4c' },
            { problem: '3 + x ÷ 2 + y', answer: '3 + \\frac{x}{2} + y' },
            { problem: 'x - 5 ÷ 3 + b', answer: 'x - \\frac{5}{3} + b' },
            { problem: '(2 + x) ÷ (4y + y)', answer: '\\frac{2 + x}{5y}' },
            { problem: '(x - 5) ÷ (3 + b)', answer: '\\frac{x - 5}{3 + b}' },
            { problem: '9y + 12y ÷ 4', answer: '12y' },
            { problem: '(9y + 12y) ÷ 3', answer: '7y' },
            { problem: '5a × (2b + 3b) - a', answer: '25ab - a' },
            { problem: '8p + (10p ÷ 5) × 2', answer: '12p' },
            { problem: '4x + (18x ÷ 3)', answer: '10x' },
            { problem: '(4x + 18x) ÷ 2', answer: '11x' },
            { problem: '10a - 2 × (3a + a)', answer: '2a' },
            { problem: '15y ÷ (2y + 3y)', answer: '3' },
            { problem: '7p - 3p × 2 + 5p', answer: '6p' },
            { problem: 'z + (5z - z × 4)', answer: '2z' },
            { problem: '(3b + b) ÷ (2 × 2)', answer: 'b' },
            { problem: '6c + c × 5 - 10c ÷ 2', answer: '6c' },
            { problem: '20x ÷ 5 + 3 × 2x', answer: '10x' },
            { problem: 'd × (5+3) - 2d', answer: '6d' },
            { problem: '\\frac{9x + 3x}{6}', answer: '2x' },
            { problem: '\\frac{10y}{2} + \\frac{8y}{4}', answer: '7y' },
            { problem: '5a + b ÷ 3 + 2a', answer: '7a + \\frac{b}{3}' },
            { problem: '12k ÷ (3 × 2) + 5k', answer: '7k' },
            { problem: '(10m - 10m ÷ 2) × 2', answer: '10m' },
            { problem: 'p + 4q - p + 3 × q', answer: '7q' },
            { problem: '3x × (y + 2y)', answer: '9xy' },
            { problem: '(12a ÷ 2a) + 5 - a', answer: '11 - a' },
            { problem: '7z - (10z + 5z) ÷ 3', answer: '2z' },
            { problem: '4w × 3 + (10w - w) ÷ 3', answer: '15w' },

            // Additional medium problems - multiple operations with brackets and fractions
            { problem: '(8 + 4) ÷ 3 + 2x', answer: '4 + 2x' },
            { problem: '5y - (3y - y) × 2', answer: 'y' },
            { problem: '\\frac{12a + 8a}{4} - a', answer: '4a' },
            { problem: '6m + (15m - 9m) ÷ 2', answer: '9m' },
            { problem: '(7n - n) × 3 ÷ 2', answer: '9n' },
            { problem: '4t + 2t × (3 - 1)', answer: '8t' },
            { problem: '\\frac{16p}{4} + p × 2 - p', answer: '5p' },
            { problem: '(5 + 7) × r - 6r', answer: '6r' },
            { problem: '3s × 4 - (2s + s)', answer: '9s' },
            { problem: '\\frac{20q - 8q}{6} + q', answer: '3q' },
            { problem: '(14u ÷ 7) × 2 + 3u', answer: '7u' },
            { problem: '9v - 2v × (4 - 1)', answer: '3v' },
            { problem: '\\frac{24w}{8} + \\frac{12w}{4}', answer: '6w' },
            { problem: '(6 - 2) × 3h - 5h', answer: '7h' },
            { problem: '18j ÷ (2 × 3) + 7j', answer: '10j' },
            { problem: '2k × (5 + 3k) - 4k', answer: '6k + 6k^2' },
            { problem: '\\frac{15l + 9l}{8} - l', answer: '2l' },
            { problem: '(10 - 4) × 2f + f', answer: '13f' },
            { problem: '12g ÷ 4 - (g + 2g)', answer: '0' },
            { problem: '(8e + 4e) ÷ 3 × 2', answer: '8e' },
            { problem: '7c × 2 - 10c ÷ 2', answer: '9c' },
            { problem: '\\frac{21i}{7} + i × (6 - 4)', answer: '5i' },
            { problem: '(11 + 7) ÷ 6 × 3o', answer: '9o' },
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