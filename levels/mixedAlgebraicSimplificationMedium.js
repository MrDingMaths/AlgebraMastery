// levels/mixedAlgebraicSimplificationMedium.js
class MixedAlgebraicSimplificationMediumLevel {
    constructor() {
        this.key = 'mixedAlgebraicSimplificationMedium';
        this.name = 'Mixed Algebraic Simplification (Medium)';
        this.usedQuestionIndices = new Set();
        
        // Predefined questions covering intermediate algebraic simplification
        this.questions = [
            // Your textbook questions
            {problem: "4xy + 3xy", answer: "7xy"},
            {problem: "16uv - 3uv", answer: "13uv"},
            {problem: "10ab + 4ba", answer: "14ab"},
            {problem: "3k + 15k - 2k", answer: "16k"},
            {problem: "15k - 2k - 3k", answer: "10k"},
            {problem: "7f + 2f + 8 + 4", answer: "9f + 12"},
            {problem: "3x \\times 2y", answer: "6xy"},
            {problem: "3p \\times 6r", answer: "18pr"},
            {problem: "-2x \\times 7y", answer: "-14xy"},
            {problem: "-4c \\times 3d", answer: "-12cd"},
            {problem: "b \\times a \\times b", answer: "ab^2"},
            {problem: "b + a + b", answer: "a + 2b"},
            {problem: "b + 3 + b", answer: "2b + 3"},
            {problem: "3b \\times 2b", answer: "6b^2"},
            {problem: "3a \\times 2b", answer: "6ab"},
            {problem: "3a \\times b^2", answer: "3ab^2"},
            {problem: "3a \\times a^3", answer: "3a^4"},
            {problem: "2 \\times b \\times a", answer: "2ab"},
            {problem: "2 + b + a", answer: "a + b + 2"},
            {problem: "2 \\times b + a", answer: "a + 2b"},
            {problem: "2 + b \\times a", answer: "2 + ab"},
            {problem: "9m \\times 3m", answer: "27m^2"},
            {problem: "4ab \\times 2ab", answer: "8a^2b^2"},
            {problem: "\\frac{4ab}{2ab}", answer: "2"},
            {problem: "4a^2b \\times 2ab^2", answer: "8a^3b^3"},
            {problem: "\\frac{4a^2b}{2a^2b}", answer: "2"},
            {problem: "\\frac{24a^3b}{6ab}", answer: "4a^2"},
            {problem: "24a^3b \\times 6ab", answer: "144a^4b^2"},
            {problem: "12pq + 6pq", answer: "18pq"},
            {problem: "\\frac{12pq}{6}", answer: "2pq"},
            {problem: "12pq \\times 6q", answer: "72pq^2"},
            {problem: "12pq \\times 6p", answer: "72p^2q"},
            {problem: "12pq \\times 6pq", answer: "72p^2q^2"},
            {problem: "\\frac{12pq}{6p}", answer: "2q"},
            {problem: "\\frac{12pq}{6pq}", answer: "2"},
            {problem: "12p^2q \\times 6pq", answer: "72p^3q^2"},
            {problem: "\\frac{12p^2q}{6pq}", answer: "2p"},
            {problem: "\\frac{9ab}{4b}", answer: "\\frac{9a}{4}"},
            {problem: "\\frac{2ab}{5a}", answer: "\\frac{2b}{5}"},
            {problem: "\\frac{4xy}{2x}", answer: "2y"},
            {problem: "\\frac{9x}{3xy}", answer: "\\frac{3}{y}"},
            {problem: "\\frac{-21p}{-3p}", answer: "7"},
            {problem: "4n \\times 6n", answer: "24n^2"},
            {problem: "5s \\times 2s", answer: "10s^2"},
            {problem: "7a \\times 3ab", answer: "21a^2b"},
            {problem: "-4b \\times 2d", answer: "-8bd"},
            {problem: "5mn \\times (-3n)", answer: "-15mn^2"},
            {problem: "-3gh \\times (-6g)", answer: "18g^2h"},
            {problem: "3xy \\times 4xy", answer: "12x^2y^2"},
            {problem: "-4ab \\times (-2ab)", answer: "8a^2b^2"},
            {problem: "-2mn \\times 3m", answer: "-6m^2n"},
            {problem: "5x^2 - 4xy^2", answer: "5x^2 - 4xy^2"},
            {problem: "3a^2b + 4ba^2", answer: "7a^2b"},

            // Additional generated questions for variety
            // Multi-variable like terms
            {problem: "5xy + 7xy", answer: "12xy"},
            {problem: "8pq - 2pq", answer: "6pq"},
            {problem: "3mn + 6mn", answer: "9mn"},
            {problem: "11rs - 4rs", answer: "7rs"},
            {problem: "2ab + 9ab", answer: "11ab"},
            {problem: "15cd - 8cd", answer: "7cd"},

            // Three-term combinations with multi-variables
            {problem: "2xy + 5xy + 3xy", answer: "10xy"},
            {problem: "7ab - 2ab + 4ab", answer: "9ab"},
            {problem: "3mn + mn - 2mn", answer: "2mn"},
            {problem: "6pq - 4pq + 8pq", answer: "10pq"},

            // Multi-variable multiplication
            {problem: "5x \\times 3y", answer: "15xy"},
            {problem: "4a \\times 7b", answer: "28ab"},
            {problem: "2m \\times 8n", answer: "16mn"},
            {problem: "6p \\times 2q", answer: "12pq"},
            {problem: "-3r \\times 4s", answer: "-12rs"},
            {problem: "5t \\times (-2u)", answer: "-10tu"},

            // Powers with multi-variables  
            {problem: "x \\times y \\times x", answer: "x^2y"},
            {problem: "a \\times b \\times a \\times b", answer: "a^2b^2"},
            {problem: "m \\times n \\times m", answer: "m^2n"},
            {problem: "p \\times q \\times p \\times p", answer: "p^3q"},

            // More complex coefficient multiplication
            {problem: "2x \\times 3x", answer: "6x^2"},
            {problem: "4y \\times 5y", answer: "20y^2"},
            {problem: "3z \\times 7z", answer: "21z^2"},
            {problem: "-2a \\times 6a", answer: "-12a^2"},
            {problem: "8b \\times (-3b)", answer: "-24b^2"},

            // Division with multi-variables
            {problem: "\\frac{15xy}{3x}", answer: "5y"},
            {problem: "\\frac{20ab}{4a}", answer: "5b"},
            {problem: "\\frac{18mn}{6m}", answer: "3n"},
            {problem: "\\frac{24pq}{8p}", answer: "3q"},
            {problem: "\\frac{-30rs}{-5r}", answer: "6s"},

            // Fraction simplification with multi-variables
            {problem: "\\frac{12xy}{18x}", answer: "\\frac{2y}{3}"},
            {problem: "\\frac{16ab}{20a}", answer: "\\frac{4b}{5}"},
            {problem: "\\frac{21mn}{14m}", answer: "\\frac{3n}{2}"},
            {problem: "\\frac{25pq}{15p}", answer: "\\frac{5q}{3}"},

            // Mixed operations with constants
            {problem: "3x + 2y + 5x", answer: "8x + 2y"},
            {problem: "4a + 7 + 2a", answer: "6a + 7"},
            {problem: "5b - 3 + 6b", answer: "11b - 3"},
            {problem: "2m + 8n + 4", answer: "2m + 8n + 4"},
            {problem: "7p + 3q - 2p", answer: "5p + 3q"},

            // Higher powers
            {problem: "2x^2 \\times 3x", answer: "6x^3"},
            {problem: "4y \\times 5y^2", answer: "20y^3"},
            {problem: "3a^2 \\times 2a^2", answer: "6a^4"},
            {problem: "x^3 + 4x^3", answer: "5x^3"},
            {problem: "7y^2 - 2y^2", answer: "5y^2"},

            // Complex multi-variable terms
            {problem: "3x^2y + 5x^2y", answer: "8x^2y"},
            {problem: "7a^2b - 3a^2b", answer: "4a^2b"},
            {problem: "2xy^2 + 6xy^2", answer: "8xy^2"},
            {problem: "9m^2n - 4m^2n", answer: "5m^2n"}
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
window.AlgebraLevels.mixedAlgebraicSimplificationMedium = new MixedAlgebraicSimplificationMediumLevel();