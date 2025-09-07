// levels/simplifyLikeTermsHard.js
class SimplifyLikeTermsHardLevel {
    constructor() {
        this.key = 'simplifyLikeTermsHard';
        this.name = 'Like Terms (Hard)';
        this.usedQuestionIndices = new Set();
        
        // Hard difficulty like terms questions
        this.questions = [
            // Complex multi-variable expressions
            {problem: "5x + 3y - 2x + 7y", answer: "3x + 10y"},
            {problem: "8a - 4b + 6a - 9b", answer: "14a - 13b"},
            {problem: "12m + 7n - 8m + 5n", answer: "4m + 12n"},
            {problem: "9p - 6q - 3p + 11q", answer: "6p + 5q"},
            {problem: "15r + 4s + 8r - 12s", answer: "23r - 8s"},
            {problem: "7t - 9u - 2t + 15u", answer: "5t + 6u"},
            {problem: "11v + 8w + 6v - 14w", answer: "17v - 6w"},
            
            // Mixed powers with same variable
            {problem: "3x^2 + 5x + 2x^2 - 7x", answer: "5x^2 - 2x"},
            {problem: "7a^2 - 4a - (-9a^2) + 8a", answer: "16a^2 + 4a"},
            {problem: "6b^2 + 11b - 2b^2 - 5b", answer: "4b^2 + 6b"},
            {problem: "8y^2 - 9y + 4y^2 + 12y", answer: "12y^2 + 3y"},
            {problem: "5m^2 + 7m - 8m^2 - 3m", answer: "-3m^2 + 4m"},
            {problem: "12p^2 - 6p + 3p^2 + 15p", answer: "15p^2 + 9p"},
            {problem: "9z² + 14z - 5z² - 8z", answer: "4z² + 6z"},
            
            // Complex expressions with fractional results
            {problem: "5x - 3x + 2x - x", answer: "3x"},
            {problem: "8a + 7a - 9a - 4a", answer: "2a"},
            {problem: "12b - 8b + 3b - 5b", answer: "2b"},
            {problem: "14z - 7z - (-9z) - 15z", answer: "z"},
            {problem: "11n + 13n - 16n - 8n", answer: "0"},
            {problem: "17t - 9t + 4t - 12t", answer: "0"},
            {problem: "22s + 8s - 15s - 15s", answer: "0"},
            
            // Negative leading coefficients
            {problem: "-7x + 3y - 4x + 8y", answer: "-11x + 11y"},
            {problem: "-9a - 5b + 12a - 6b", answer: "3a - 11b"},
            {problem: "-11m + 8n + 6m - 3n", answer: "-5m + 5n"},
            {problem: "-6p - 9q - 4p + 15q", answer: "-10p + 6q"},
            {problem: "-12r + 7s + 8r - 11s", answer: "-4r - 4s"},
            {problem: "-8t - 6u - 5t + 14u", answer: "-13t + 8u"},
            {problem: "-18m - 4n + 11m + 13n", answer: "-7m + 9n"},
                        
            // ADD YOUR TEXTBOOK QUESTIONS HERE using the format:
            {problem: "8a + b - 4b - 7a", answer: "a - 3b"},
            {problem: "2ab^2 - 5ab^2 - 3ab^2", answer: "-6ab^2"},
            {problem: "m^2 - 5m - m + 12", answer: "m^2 - 6m + 12"},
            {problem: "p^2 - 7p + 5p - 6", answer: "p^2 - 2p - 6"},
            {problem: "ab + 2b - 3ab + 8b", answer: "-2ab + 10b"},
            {problem: "ab + bc - ab - ac + bc", answer: "2bc - ac"},
            {problem: "4x - (-3x)", answer: "7x"},
            {problem: "-5abc - (-2abc)", answer: "-3abc"},
            {problem: "4m^2n - 7nm^2", answer: "-3m^2n"},
            {problem: "0.3a^2b - ba^2", answer: "-0.7a^2b"},
            {problem: "0.2ab^2 - 2b^2a", answer: "-1.8ab^2"},
            {problem: "4a + 5b - a + 2b", answer: "3a + 7b"},
            {problem: "3jk - 4j + 5jk - 3j", answer: "8jk - 7j"},
            {problem: "2ab^2 + 5a^2b - ab^2 + 5ba^2", answer: "ab^2 + 10a^2b"},
            {problem: "3mn - 7m^2n + 6nm^2 - mn", answer: "2mn - m^2n"},
            {problem: "2a + 4b + 3a + 5b", answer: "5a + 9b"},
            {problem: "4x + 3y + 2x + 2y", answer: "6x + 5y"},
            {problem: "xy + 8x + 4xy - 4x", answer: "5xy + 4x"},
            {problem: "3mn - 4 + 4nm - 5", answer: "7mn - 9"},
            {problem: "4ab + 2a + ab - 3a", answer: "5ab - a"},
            {problem: "3st - 8ts + 2st + 3ts", answer: "0"},
            {problem: "8m^2n - 6nm^2 + m^2n", answer: "3m^2n"},
            {problem: "7p^2q^2 - 2p^2q^2 - 4p^2q^2", answer: "p^2q^2"},
            {problem: "2x^2y - 4xy^2 + 5yx^2", answer: "7x^2y - 4xy^2"},
            {problem: "10rs^2 + 3rs^2 - 6r^2s", answer: "13rs^2 - 6r^2s"},
            {problem: "x^2 - 7x - 3x^2", answer: "-2x^2 - 7x"},
            {problem: "a^2b - 4ab^2 + 3a^2b + b^2a", answer: "4a^2b - 3ab^2"},
            {problem: "10pq^2 - 2qp - 3pq^2 - 6pq", answer: "7pq^2 - 8pq"},
            {problem: "12m^2n^2 - 2mn^2 - 4m^2n^2 + mn^2", answer: "8m^2n^2 - mn^2"},
            {problem: "10x + 3x + 5y + 3y", answer: "13x + 8y"},
            {problem: "2a + 5a + 13b - 2b", answer: "7a + 11b"},
            {problem: "10a + 5b + 3a + 4b", answer: "13a + 9b"},
            {problem: "10a + 3 + 4b - 2a - b", answer: "8a + 3b + 3"},
            {problem: "10x + 31y - y + 4x", answer: "14x + 30y"},
            {problem: "7x^2y + 5x + 10yx^2", answer: "17x^2y + 5x"},
            {problem: "-2a + 4b - 7ab + 4a", answer: "2a + 4b - 7ab"},
            {problem: "10 + 7q - 3r + 2q - r", answer: "10 + 9q - 4r"},
            {problem: "11b - 3b^2 + 5b^2 - 2b", answer: "9b + 2b^2"},
            {problem: "2a + a + 4b + b", answer: "3a + 5b"},
            {problem: "5a + 2a + b + 8b", answer: "7a + 9b"},
            {problem: "3x - 2x + 2y + 4y", answer: "x + 6y"},
            {problem: "3x + 7x + 3y - 4x + y", answer: "6x + 4y"},
            {problem: "10x + 4x + 31y - y", answer: "14x + 30y"},
            {problem: "10 + 7y + 5x + 5x + 2y", answer: "10x + 9y + 10"},
            {problem: "3b + 4b + c + 5b - c", answer: "12b"},
            {problem: "9xy + 2x - 3xy + 3x", answer: "6xy + 5x"},
            {problem: "2cd + 5dc - 3d + 2c", answer: "7cd - 3d + 2c"},
            {problem: "5uv + 12v + 4uv - 5v", answer: "9uv + 7v"},
            {problem: "7pq + 2p + 4qp - q", answer: "11pq + 2p - q"}
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
window.AlgebraLevels.simplifyLikeTermsHard = new SimplifyLikeTermsHardLevel();