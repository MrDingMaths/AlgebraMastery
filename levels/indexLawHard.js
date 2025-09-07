// levels/indexLawHard.js
class IndexLawHardLevel {
    constructor() {
        this.key = 'indexLawHard';
        this.name = 'Index Law Multiplication (Hard)';
        this.usedQuestionIndices = new Set();
        
        // Questions organized by cognitive complexity levels
        this.questions = [
            // Cognitive Level 1: Three Term Products (From textbook)
            {problem: "3a \\times 5a \\times a^4", answer: "15a^6"},
            {problem: "3x^4 \\times 5xy^2 \\times 10y^4", answer: "150x^5y^6"},
            {problem: "2rs^3 \\times 3r^4s \\times 2r^2s^2", answer: "12r^7s^6"},
            {problem: "4m^6n^7 \\times mn \\times 5mn^2", answer: "20m^8n^{10}"},
            
            // Additional three term products for reinforcement
            {problem: "2a^2 \\times 3a^3 \\times 4a^4", answer: "24a^9"},
            {problem: "5b \\times 2b^5 \\times 3b^2", answer: "30b^8"},
            {problem: "4c^3 \\times 2c^2 \\times 3c^4", answer: "24c^9"},
            {problem: "3d^4 \\times 5d \\times 2d^6", answer: "30d^{11}"},
            {problem: "6e^2 \\times 2e^3 \\times 4e^5", answer: "48e^{10}"},
            
            // Cognitive Level 2: Complex Multi-Variable Three Term Products
            {problem: "2xy^2 \\times 3x^3y \\times 4xy^3", answer: "24x^5y^6"},
            {problem: "5a^2b \\times 2ab^4 \\times 3a^3b^2", answer: "30a^6b^7"},
            {problem: "4p^3q^2 \\times 3pq^3 \\times 2p^2q", answer: "24p^6q^6"},
            {problem: "3m^4n \\times 2mn^2 \\times 5m^2n^4", answer: "30m^7n^7"},
            {problem: "6r^2s^3 \\times rs \\times 2r^4s^2", answer: "12r^7s^6"},
            {problem: "4t^3u^4 \\times 2tu^2 \\times 3t^2u", answer: "24t^6u^7"},
            {problem: "5v^5w^2 \\times 3vw^4 \\times 2v^3w", answer: "30v^9w^7"},
            
            // Cognitive Level 4: Mixed Positive and Negative Coefficients
            {problem: "-3x^2 \\times 4x^3 \\times (-2x)", answer: "24x^6"},
            {problem: "5a^4 \\times (-2a^2) \\times 3a^3", answer: "-30a^9"},
            {problem: "-4b^3 \\times (-3b^2) \\times 2b^5", answer: "24b^{10}"},
            {problem: "6c^5 \\times (-2c) \\times (-3c^4)", answer: "36c^{10}"},
            {problem: "-2d^6 \\times 5d^3 \\times (-4d^2)", answer: "40d^{11}"},
            {problem: "3e^4 \\times (-5e^2) \\times (-2e^6)", answer: "30e^{12}"},
            
            // Cognitive Level 5: Multi-Variable with Negative Coefficients
            {problem: "-2xy^3 \\times 3x^4y \\times (-4x^2y^2)", answer: "24x^7y^6"},
            {problem: "5a^3b^2 \\times (-3ab^4) \\times 2a^2b", answer: "-30a^6b^7"},
            {problem: "-4m^2n^3 \\times (-2mn) \\times 3m^4n^2", answer: "24m^7n^6"},
            {problem: "6p^5q \\times (-pq^2) \\times (-2p^3q^4)", answer: "12p^9q^7"},
            {problem: "-3r^4s^2 \\times 4rs^3 \\times (-2r^2s)", answer: "24r^7s^6"},
            
            // Moved from Multiply Terms Hard - Advanced exponent operations
            {problem: "2x^2 \\times 5x", answer: "10x^3"},
            {problem: "4a^3 \\times 3a^2", answer: "12a^5"},
            {problem: "-3y \\times 2y^4", answer: "-6y^5"},
            {problem: "7m^2 \\times (-4m)", answer: "-28m^3"},
            {problem: "5p^4 \\times 3p^2", answer: "15p^6"},
            {problem: "(-6r^3) \\times 2r^3", answer: "-12r^6"},
            {problem: "8n \\times (-3n^5)", answer: "-24n^6"},
            {problem: "4t^2 \\times 7t^3", answer: "28t^5"},
            {problem: "(-5s^4) \\times (-2s)", answer: "10s^5"},
            {problem: "3q^3 \\times 6q^2", answer: "18q^5"},
            {problem: "(-7w^2) \\times 4w^4", answer: "-28w^6"},
            {problem: "9z^3 \\times (-z^2)", answer: "-9z^5"},
            
            // Complex multi-variable with power operations
            {problem: "4a^2b \\times 3ab^2", answer: "12a^3b^3"},
            {problem: "5xy^2 \\times 3x^2y", answer: "15x^3y^3"},
            {problem: "2a^2b \\times 3a^2b", answer: "6a^4b^2"},
            {problem: "(-3m^2n) \\times 4mn^3", answer: "-12m^3n^4"},
            {problem: "6p^3q^2 \\times (-2pq)", answer: "-12p^4q^3"},
            {problem: "7r^2s \\times 3r^3s^2", answer: "21r^5s^3"},
            {problem: "(-4t^2u^3) \\times 5tu^2", answer: "-20t^3u^5"},
            {problem: "8v^3w \\times (-2vw^4)", answer: "-16v^4w^5"},
            {problem: "3x^4y^2 \\times 7x^2y^3", answer: "21x^6y^5"},
            {problem: "(-5z^2a^3) \\times (-6za^2)", answer: "30z^3a^5"},
            {problem: "4b^3c^2 \\times 9bc^4", answer: "36b^4c^6"},
            {problem: "(-2d^2e) \\times 8d^3e^5", answer: "-16d^5e^6"},
            
            // Pattern recognition and reordering with exponents
            {problem: "2ab \\times (-3ba)", answer: "-6a^2b^2"},
            {problem: "5xy \\times (-4yx)", answer: "-20x^2y^2"},
            {problem: "3mn \\times 7nm", answer: "21m^2n^2"},
            {problem: "(-4pq) \\times (-6qp)", answer: "24p^2q^2"},
            {problem: "8rs \\times (-2sr)", answer: "-16r^2s^2"},
            {problem: "(-5tu) \\times 3ut", answer: "-15t^2u^2"},
            {problem: "6vw \\times (-4wv)", answer: "-24v^2w^2"},
            {problem: "(-7cd) \\times (-2dc)", answer: "14c^2d^2"},
            {problem: "9ef \\times 3fe", answer: "27e^2f^2"},
            {problem: "(-ab^2) \\times 4b^2a", answer: "-4a^2b^4"},
            {problem: "5x^2y \\times (-3yx^2)", answer: "-15x^4y^2"},
            {problem: "(-2m^3n) \\times 7nm^3", answer: "-14m^6n^2"},
            
            // Complex multi-factor with exponents
            {problem: "4x^3y^2 \\times (-2x^3y^2)", answer: "-8x^6y^4"},
            {problem: "8h^2 \\times (-2j) \\times 3k \\times (-l)", answer: "48h^2jkl"}
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
window.AlgebraLevels.indexLawHard = new IndexLawHardLevel();