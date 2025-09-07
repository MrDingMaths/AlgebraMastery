// levels/mixedAlgebraicSimplificationHard.js
class MixedAlgebraicSimplificationHardLevel {
    constructor() {
        this.key = 'mixedAlgebraicSimplificationHard';
        this.name = 'Mixed Algebraic Simplification (Hard)';
        this.usedQuestionIndices = new Set();
        
        // Predefined questions covering advanced algebraic simplification
        this.questions = [
            // Your textbook questions
            {problem: "11ab - 5ba + ab", answer: "7ab"},
            {problem: "10x + 3x + 5y + 3y", answer: "13x + 8y"},
            {problem: "2a + 5a + 13b - 2b", answer: "7a + 11b"},
            {problem: "10 + 5x - 2 + 7x", answer: "12x + 8"},
            {problem: "10x + 31y - y + 4x", answer: "14x + 30y"},
            {problem: "7x^2y + 5x + 10yx^2", answer: "17x^2y + 5x"},
            {problem: "12xy - 3yx + 5xy - yx", answer: "13xy"},
            {problem: "-2a + 4b - 7ab + 4a", answer: "2a + 4b - 7ab"},
            {problem: "2a \\times 3b \\times 5", answer: "30ab"},
            {problem: "-4r \\times 3 \\times 2s", answer: "-24rs"},
            {problem: "5j \\times (-4) \\times 2k", answer: "-40jk"},
            {problem: "3a \\times ba^2", answer: "3a^3b"},
            {problem: "\\frac{-5x}{10yz^2}", answer: "\\frac{-x}{2yz^2}"},
            {problem: "\\frac{12y^2}{-18y}", answer: "\\frac{-2y}{3}"},
            {problem: "\\frac{-4a^2}{8ab}", answer: "\\frac{-a}{2b}"},
            {problem: "\\frac{12p}{-3q}", answer: "\\frac{-4p}{q}"},
            {problem: "\\frac{-15z}{-20z^2}", answer: "\\frac{3}{4z}"},
            {problem: "-3mn \\times mn \\times 4n", answer: "-12m^2n^3"},
            {problem: "5hj \\times (-4h) \\times 2k", answer: "-40h^2jk"},
            {problem: "\\frac{-3xy}{6y}", answer: "\\frac{-x}{2}"},
            {problem: "\\frac{21xz}{-7xy}", answer: "\\frac{-3z}{y}"},
            {problem: "\\frac{-12y}{-3y^2}", answer: "\\frac{4}{y}"},
            {problem: "8m^2n - 6nm^2 + m^2n", answer: "3m^2n"},
            {problem: "7p^2q^2 - 2p^2q^2 - 4p^2q^2", answer: "p^2q^2"},
            {problem: "2x^2y - 4xy^2 + 5yx^2", answer: "7x^2y - 4xy^2"},
            {problem: "10rs^2 + 3rs^2 - 6r^2s", answer: "13rs^2 - 6r^2s"},
            {problem: "x^2 - 7x - 3x^2", answer: "-2x^2 - 7x"},
            {problem: "a^2b - 4ab^2 + 3a^2b + b^2a", answer: "4a^2b - 3ab^2"},
            {problem: "10pq^2 - 2qp - 3p^2q - 6", answer: "10pq^2 - 2pq - 3p^2q - 6"},

            // Additional generated questions for variety
            // Complex multi-variable combinations
            {problem: "5xy + 3yx - 2xy + 7yx", answer: "13xy"},
            {problem: "8ab - 4ba + 6ab - 2ba", answer: "8ab"},
            {problem: "3mn + 7nm - 5mn + 2nm", answer: "7mn"},
            {problem: "12pq - 8qp + 4pq - 3qp", answer: "5pq"},
            
            // Multiple variable types with constants
            {problem: "4x + 7y - 2x + 5y + 3", answer: "2x + 12y + 3"},
            {problem: "6a - 3b + 8a + 2b - 5", answer: "14a - b - 5"},
            {problem: "9m + 4n - 6m - n + 7", answer: "3m + 3n + 7"},
            {problem: "5p + 8q - 3p + 2q - 4", answer: "2p + 10q - 4"},
            
            // Complex multiplication chains
            {problem: "2x \\times 3y \\times 4z", answer: "24xyz"},
            {problem: "-3a \\times 2b \\times 5c", answer: "-30abc"},
            {problem: "4m \\times (-2n) \\times 3p", answer: "-24mnp"},
            {problem: "-5r \\times (-3s) \\times 2t", answer: "30rst"},
            {problem: "6u \\times 2v \\times (-w)", answer: "-12uvw"},
            
            // Complex division with multiple variables
            {problem: "\\frac{24x^2y^3}{6xy^2}", answer: "4xy"},
            {problem: "\\frac{30a^3b^2}{5a^2b}", answer: "6ab"},
            {problem: "\\frac{-18m^4n^2}{9m^2n}", answer: "-2m^2n"},
            {problem: "\\frac{45p^3q^4}{-15p^2q^3}", answer: "-3pq"},
            
            // Mixed operations with negatives
            {problem: "-7x + 4y - 2x - 9y", answer: "-9x - 5y"},
            {problem: "8a - 3b - 12a + 7b", answer: "-4a + 4b"},
            {problem: "-5m + 9n + 2m - 6n", answer: "-3m + 3n"},
            {problem: "6p - 8q - 4p + 12q", answer: "2p + 4q"},
            
            // Complex coefficient operations
            {problem: "7y^3 - 4y^3 + 9y^3 - 6y^3", answer: "6y^3"},
            
            // Multi-variable powers with different terms
            {problem: "5x^2y + 3xy^2 - 2x^2y + 7xy^2", answer: "3x^2y + 10xy^2"},
            {problem: "8a^2b - 4ab^2 + 2a^2b - 6ab^2", answer: "10a^2b - 10ab^2"},
            {problem: "6m^3n - 9mn^3 - 2m^3n + 5mn^3", answer: "4m^3n - 4mn^3"},
            
            // Complex fraction simplifications
            {problem: "\\frac{36x^3y^2}{12x^2y}", answer: "3xy"},
            {problem: "\\frac{-42a^4b^3}{14a^2b^2}", answer: "-3a^2b"},
            {problem: "\\frac{56m^5n^2}{-8m^3n}", answer: "-7m^2n"},
            
            // Advanced mixed expressions
            {problem: "4xy - 7yx + 3x^2 + 2xy", answer: "-xy + 3x^2"},
            {problem: "9ab + 5a^2 - 6ba + 3ab", answer: "6ab + 5a^2"},
            {problem: "8mn^2 - 4m^2n + 6n^2m - 2mn^2", answer: "12mn^2 - 4m^2n"},
            
            // Expressions with multiple power combinations
            {problem: "5x^2y^2 + 3x^2y^2 - 2x^2y^2", answer: "6x^2y^2"},
            {problem: "7a^3b^2 - 4a^3b^2 + 9a^3b^2", answer: "12a^3b^2"},
            {problem: "-3m^2n^3 + 8m^2n^3 - 5m^2n^3", answer: "0"},
            
            // Very complex mixed operations
            {problem: "12xyz + 8zyx - 5xyz + 3zxy", answer: "18xyz"},
            {problem: "15abc - 9bca + 6abc - 4cab", answer: "8abc"},
            {problem: "20pqr - 12qrp + 8rpq - 6prq", answer: "10pqr"}
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
window.AlgebraLevels.mixedAlgebraicSimplificationHard = new MixedAlgebraicSimplificationHardLevel();