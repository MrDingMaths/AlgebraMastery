// levels/OrderOfOperationsHard.js
class OrderOfOperationsHardLevel {
    constructor() {
        this.key = 'orderOfOperationsHard';
        this.name = 'Order of Operations (Hard)';
        this.usedQuestionIndices = new Set();
        
        this.questions = [
            // Original hard problems from OrderOfOperations.js - involving exponents and complex operations
            { problem: '5p^2 - 2p × 3p', answer: '-p^2' },
            { problem: '4r^2 + 15r^3 ÷ 5r', answer: '7r^2' },
            { problem: '4b + 3 × (2b^3 ÷ b^2)', answer: '10b' },
            { problem: '2x + \\frac{x^2}{x}', answer: '3x' },
            { problem: '\\frac{12x^2y}{3x} - 3xy', answer: 'xy' },
            { problem: '\\frac{16x^2y^2}{8xy} - xy + y', answer: 'xy + y' },
            { problem: '7y^2 + 2y × 4y - y^2', answer: '14y^2' },
            { problem: '\\frac{20a^3b^2}{5ab} + 3a^2b', answer: '7a^2b' },
            { problem: '6z^3 + (10z^4 ÷ 2z) - 3z^3', answer: '8z^3' },
            { problem: '(3p + 2p) × (p^2 ÷ p)', answer: '5p^2' },
            { problem: '9c^2 + (4c × 3c) ÷ 2', answer: '15c^2' },
        
            // Additional hard problems - complex exponents, multiple variables, and advanced operations
            { problem: '3m^2 × 2m - 4m^3 ÷ 2', answer: '4m^3' },
            { problem: '\\frac{25n^4}{5n^2} + n^2 × 3', answer: '8n^2' },
            { problem: '(2t^2)^2 - 3t × t^3 ÷ t', answer: '4t^4 - 3t^3' },
            { problem: '2k^2 × 3k + k^3', answer: '7k^3' },
            { problem: '\\frac{12w^2x}{3wx} × 2 - wx', answer: '8w - wx' },
            { problem: '(2h^2)^2 ÷ 2h^2 + 3h^2', answer: '5h^2' },
            { problem: '3g × 2g^2 - \\frac{6g^3}{2g}', answer: '6g^3 - 3g^2' },
            { problem: '\\frac{12s^3t}{4st} + st × 2', answer: '3s^2 + 2st' },
            { problem: '(2v^2)^2 ÷ 2v^2 - vw', answer: '2v^2 - vw' },
            { problem: '4d^2 - 2d × (3d ÷ d)', answer: '4d^2 - 6d' },
            { problem: '\\frac{18f^4}{6f^2} + f^2 × 2', answer: '5f^2' },
            { problem: '(3j^2)^2 ÷ 3j^2 + 2jk', answer: '3j^2 + 2jk' },
            { problem: '4l^2 × 2l - \\frac{12l^3}{3}', answer: '4l^3' },
            { problem: '\\frac{21q^3r}{7qr} - 2q^2', answer: 'q^2' },
            { problem: '(3u^2v)^2 ÷ 3u^2v + uv', answer: '3u^2v + uv' },
            { problem: '6x^2y ÷ 2xy × 2 - 3x', answer: '3x' },
            { problem: '\\frac{20z^4}{4z^2} + z^2 × 2', answer: '7z^2' },
            { problem: '(2a^2b)^2 ÷ 2a^2b', answer: '2a^2b' },
            { problem: '8y^3 ÷ 2y + (2y)^2 - 5y^2', answer: '3y^2' },
            { problem: '\\frac{16m^3n^2}{4mn} - 2m^2n × 2', answer: '0' },
            { problem: '(2p^2q)^2 ÷ 4p^2q + pq', answer: 'p^2q + pq' },
            { problem: '8r^3s ÷ 2rs × 3 - 9r^2s', answer: '12r^2 - 9r^2s' },
            { problem: '\\frac{18t^3u}{6tu} + t^2u × 2', answer: '3t^2 + 2t^2u' },
            { problem: '(3e^2f)^2 ÷ 3ef^2 - 2e^2f', answer: '3e^3 - 2e^2f' },
            { problem: '12c^3d ÷ 3cd × 2 + 2c^2d', answer: '8c^2 + 2c^2d' },
            { problem: '\\frac{24i^3j^2}{6ij} - (2ij)^2', answer: '4i^2j - 4i^2j^2' },
            { problem: '(2o^2p)^2 ÷ 4op + op × 3', answer: 'o^3p + 3op' },
            { problem: '12h^3k ÷ 3hk × 2 - 6h^2k', answer: '8h^2 - 6h^2k' },
            { problem: '\\frac{36b^4c^2}{6bc} + b^3c × 3', answer: '9b^3c' },
            { problem: '(2x^2y)^2 ÷ 4xy - xyz', answer: 'x^3y - xyz' }
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