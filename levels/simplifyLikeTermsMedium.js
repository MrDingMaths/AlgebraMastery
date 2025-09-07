// levels/simplifyLikeTermsMedium.js
class SimplifyLikeTermsMediumLevel {
    constructor() {
        this.key = 'simplifyLikeTermsMedium';
        this.name = 'Like Terms (Medium)';
        this.usedQuestionIndices = new Set();
        
        // Medium difficulty like terms questions
        this.questions = [
            // Linear terms with larger coefficients
            {problem: "7x + 8x", answer: "15x"},
            {problem: "12a - 5a", answer: "7a"},
            {problem: "9b + 6b", answer: "15b"},
            {problem: "15y - 8y", answer: "7y"},
            {problem: "11m + 4m", answer: "15m"},
            {problem: "18p - 9p", answer: "9p"},
            {problem: "13x - 7x", answer: "6x"},
            {problem: "20n - 12n", answer: "8n"},
            {problem: "14z + 9z", answer: "23z"},
            {problem: "25r - 16r", answer: "9r"},
            
            // Quadratic terms with larger coefficients
            {problem: "8x^2 + 7x^2", answer: "15x^2"},
            {problem: "12a^2 - 5a^2", answer: "7a^2"},
            {problem: "15b^2 + 9b^2", answer: "24b^2"},
            {problem: "18y^2 - 11y^2", answer: "7y^2"},
            {problem: "10m^2 + 13m^2", answer: "23m^2"},
            {problem: "22p^2 - 14p^2", answer: "8p^2"},
            {problem: "16z^2 + 7z^2", answer: "23z^2"},
            {problem: "25n^2 - 18n^2", answer: "7n^2"},
            {problem: "19t^2 + 12t^2", answer: "31t^2"},
            {problem: "30s^2 - 17s^2", answer: "13s^2"},
            
            // More complex mixed expressions
            {problem: "5x + 8 - 2x", answer: "3x + 8"},
            {problem: "12a - 7 + 3a", answer: "15a - 7"},
            {problem: "9b + 15 - 4b", answer: "5b + 15"},
            {problem: "7y - 12 + 8y", answer: "15y - 12"},
            {problem: "11m + 6 - 7m", answer: "4m + 6"},
            {problem: "18p - 9 - 5p", answer: "13p - 9"},
            {problem: "14z + 11 + 3z", answer: "17z + 11"},
            {problem: "20n - 15 - 8n", answer: "12n - 15"},
            {problem: "16t + 7 + 9t", answer: "25t + 7"},
            {problem: "22s - 18 - 6s", answer: "16s - 18"},
            
            // Four term expressions
            {problem: "3x + 5x - 2x + 4x", answer: "10x"},
            {problem: "8a - 3a + 6a - a", answer: "10a"},
            {problem: "7b + 2b - 4b + 8b", answer: "13b"},
            {problem: "12y - 5y - 3y + 9y", answer: "13y"},
            {problem: "9m + 4m + 7m - 5m", answer: "15m"},
            {problem: "15p - 8p + 3p - 6p", answer: "4p"},
            {problem: "11z - 7z + 12z - 4z", answer: "12z"},
            {problem: "18n + 5n - 9n + 2n", answer: "16n"},
            {problem: "13t - 6t - 2t + 11t", answer: "16t"},
            {problem: "20s + 8s - 12s - 3s", answer: "13s"},
            
            // Mixed with multiple constants
            {problem: "4x + 7 + 6x - 3", answer: "10x + 4"},
            {problem: "9a - 5 + 2a + 8", answer: "11a + 3"},
            {problem: "7b + 12 - 3b - 4", answer: "4b + 8"},
            {problem: "11y - 8 + 5y + 6", answer: "16y - 2"},
            {problem: "6m + 15 + 9m - 11", answer: "15m + 4"},
            {problem: "13p - 7 - 4p + 12", answer: "9p + 5"},
            {problem: "8z + 9 + 7z - 6", answer: "15z + 3"},
            {problem: "12n - 14 + 4n + 9", answer: "16n - 5"},
            {problem: "10t + 6 - 7t - 2", answer: "3t + 4"},
            {problem: "17s - 13 + 8s - 5", answer: "25s - 18"},
            
            // Negative coefficients
            {problem: "-3x + 8x", answer: "5x"},
            {problem: "7a - 12a", answer: "-5a"},
            {problem: "-9b - 4b", answer: "-13b"},
            {problem: "-6y + 15y", answer: "9y"},
            {problem: "11m - 18m", answer: "-7m"},
            {problem: "-8p - 7p", answer: "-15p"},
            {problem: "-5z + 13z", answer: "8z"},
            {problem: "9n - 17n", answer: "-8n"},
            {problem: "-12t - 3t", answer: "-15t"},
            {problem: "-4s + 19s", answer: "15s"},
            
            // Multiple variables (different types)
            {problem: "3x + 5y + 2x", answer: "5x + 5y"},
            {problem: "7a - 4b + 3a", answer: "10a - 4b"},
            {problem: "9m + 2n - 5m", answer: "4m + 2n"},
            {problem: "6p + 8q + 4p", answer: "10p + 8q"},
            {problem: "11r - 7s - 3r", answer: "8r - 7s"},
            {problem: "4t + 9u + 7t", answer: "11t + 9u"},
            {problem: "8v - 6w - 2v", answer: "6v - 6w"},
            {problem: "12x + 5y - 8x", answer: "4x + 5y"},
            {problem: "15a - 9b + 6a", answer: "21a - 9b"},
            {problem: "10m + 7n - 4m", answer: "6m + 7n"},
            
            // ADD YOUR TEXTBOOK QUESTIONS HERE using the format:
            {problem: "2r - 5r", answer: "-3r"},
            {problem: "-4y + 3y", answer: "-y"},
            {problem: "-2x - 3x", answer: "-5x"},
            {problem: "-4k + 7k", answer: "3k"},
            {problem: "4m - 3m - 2m", answer: "-m"},
            {problem: "x + 3x - 5x", answer: "-x"},
            {problem: "8h - h - 7h", answer: "0"},
            {problem: "3b - 5b + 4b + 9b", answer: "11b"},
            {problem: "-5x + 3x - x - 7x", answer: "-10x"},
            {problem: "6x - 5y - y", answer: "6x - 6y"},
            {problem: "xy + 2y + 3xy", answer: "4xy + 2y"},
            {problem: "-3x + x", answer: "-2x"},
            {problem: "-3x - x", answer: "-4x"},
            {problem: "-2a + 3a + 4a", answer: "5a"},
            {problem: "-2a - 3a + 4a", answer: "-a"},
            {problem: "-2a - 3a - 4a", answer: "-9a"},
            {problem: "-2a + 3a - 4a", answer: "-3a"},
            {problem: "2y - 3y", answer: "-y"},
            {problem: "-3a - 7a", answer: "-10a"},
            {problem: "-8b + 5b", answer: "-3b"},
            {problem: "-2ab - ba", answer: "-3ab"},
            {problem: "-3pq + 7pq", answer: "4pq"},
            {problem: "6a + 4a", answer: "10a"},
            {problem: "8d + 7d", answer: "15d"},
            {problem: "4a^2b - 2a^2b", answer: "2a^2b"},
            {problem: "5x^2y - 4x^2y", answer: "x^2y"},
            {problem: "3st^2 - 4st^2", answer: "-st^2"},
            {problem: "7xy + 5xy - 3y", answer: "12xy - 3y"},
            {problem: "12y - 4y", answer: "8y"},
            {problem: "6ab - 2ab - ba", answer: "3ab"},
            {problem: "6xy + xy + 4y", answer: "7xy + 4y"},
            {problem: "5ab + 3 + 7ba", answer: "12ab + 3"},
            {problem: "2 - 5m - m", answer: "2 - 6m"},
            {problem: "6t + 5 - 2t + 1", answer: "4t + 6"},
            {problem: "5x + 1 + 6x + 3", answer: "11x + 4"},
            {problem: "5xy^2 - 4xy^2", answer: "xy^2"},
            {problem: "3a^2b + 4ba^2", answer: "7a^2b"},
            {problem: "7a + 12a", answer: "19a"},
            {problem: "15x - 6x", answer: "9x"},
            {problem: "16uv - 3uv", answer: "13uv"},
            {problem: "10ab + 4ab", answer: "14ab"},
            {problem: "11ab - 5ab + ab", answer: "7ab"},
            {problem: "3k + 15k - 2k", answer: "16k"},
            {problem: "15k - 2k - 3k", answer: "10k"},
            {problem: "7f + 2f + 8 + 4", answer: "9f + 12"},
            {problem: "10 + 5x + 2 + 7x", answer: "12x + 12"},
            {problem: "11a + 4 - 2a + 12a", answer: "21a + 4"},
            {problem: "12xy - 3yx + 5xy - yx", answer: "13xy"},
            {problem: "-4x^2 + 3x^2", answer: "-x^2"},
            {problem: "7f + 4 - 2f + 8", answer: "5f + 12"},
            {problem: "4a - 4 + 5b + b", answer: "4a + 6b - 4"},
            {problem: "10a + 3 + 4b - 2a", answer: "8a + 4b + 3"},
            {problem: "4 + 10h - 3h", answer: "4 + 7h"},
            {problem: "11a + 4 - 3a + 9", answer: "8a + 13"},
            {problem: "7ab + 32 - ab + 4", answer: "6ab + 36"}
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
window.AlgebraLevels.simplifyLikeTermsMedium = new SimplifyLikeTermsMediumLevel();