// levels/indexLawMedium.js
class IndexLawMediumLevel {
    constructor() {
        this.key = 'indexLawMedium';
        this.name = 'Index Law Multiplication (Medium)';
        this.usedQuestionIndices = new Set();
        
        // Questions organized by cognitive complexity levels
        this.questions = [
            // Cognitive Level 1: Two Variables (Basic multi-variable patterns)
            {problem: "x^3y^3 \\times x^4y^2", answer: "x^7y^5"},
            {problem: "x^7y^3 \\times x^2y", answer: "x^9y^4"},
            {problem: "x^2y \\times y^2", answer: "x^2y^3"},
            
            // Additional two-variable questions
            {problem: "a^3b^2 \\times a^2b^4", answer: "a^5b^6"},
            {problem: "m^4n^3 \\times m^2n^5", answer: "m^6n^8"},
            {problem: "p^5q^2 \\times p^3q^6", answer: "p^8q^8"},
            {problem: "r^2s^4 \\times r^6s^3", answer: "r^8s^7"},
            {problem: "t^3u^5 \\times t^4u^2", answer: "t^7u^7"},
            {problem: "v^6w^2 \\times v^2w^4", answer: "v^8w^6"},
            {problem: "c^4d^3 \\times c^3d^4", answer: "c^7d^7"},
            {problem: "e^2f^6 \\times e^5f^2", answer: "e^7f^8"},
            
            // Cognitive Level 2: Coefficients with Single Variables
            {problem: "3m^3 \\times 5m^2", answer: "15m^5"},
            {problem: "4m^2 \\times 5m^3", answer: "20m^5"},
            {problem: "2k^3 \\times 5k^4", answer: "10k^7"},
            {problem: "7m^2 \\times 2m^3", answer: "14m^5"},
            {problem: "2s^4 \\times 3s^3", answer: "6s^7"},
            
            // Additional coefficient questions
            {problem: "3a^4 \\times 2a^3", answer: "6a^7"},
            {problem: "4b^5 \\times 3b^2", answer: "12b^7"},
            {problem: "5c^3 \\times 4c^4", answer: "20c^7"},
            {problem: "6d^2 \\times 2d^5", answer: "12d^7"},
            {problem: "3e^6 \\times 4e^3", answer: "12e^9"},
            {problem: "2f^4 \\times 7f^2", answer: "14f^6"},
            {problem: "8g^3 \\times 2g^4", answer: "16g^7"},
            {problem: "3h^5 \\times 5h^3", answer: "15h^8"},
            
            // Cognitive Level 3: Coefficients with Two Variables
            {problem: "5x^3y^5 \\times xy^4", answer: "5x^4y^9"},
            {problem: "4e^4f^2 \\times 2e^2f^2", answer: "8e^6f^4"},
            {problem: "5c^4d \\times 4c^3d", answer: "20c^7d^2"},
            {problem: "2x^2y^2 \\times 4x^3y^5", answer: "8x^5y^7"},
            {problem: "7a^2b^3 \\times 2a^2b", answer: "14a^4b^4"},
            {problem: "3a^2b \\times 5ab^5", answer: "15a^3b^6"},
            {problem: "3v^7w \\times 6v^2w", answer: "18v^9w^2"},
            
            // Additional coefficient + multi-variable questions
            {problem: "2p^3q^2 \\times 3p^2q^4", answer: "6p^5q^6"},
            {problem: "4r^5s^3 \\times 3r^2s^2", answer: "12r^7s^5"},
            {problem: "5t^4u^2 \\times 2t^3u^5", answer: "10t^7u^7"},
            {problem: "3w^6x^4 \\times 4w^2x^3", answer: "12w^8x^7"},
            {problem: "6y^3z^5 \\times 2y^4z^2", answer: "12y^7z^7"},
            {problem: "2a^7b^3 \\times 5a^2b^4", answer: "10a^9b^7"},
            {problem: "3c^5d^6 \\times 4c^3d^2", answer: "12c^8d^8"},
            
            // Cognitive Level 4: Higher Powers with Coefficients
            {problem: "7x^2 \\times 4x^{12}", answer: "28x^{14}"},
            {problem: "4y^3 \\times 7y^{10}", answer: "28y^{13}"},
            {problem: "11x \\times 10x^3", answer: "110x^4"},
            {problem: "7x \\times 12x^3y^5", answer: "84x^4y^5"},
            {problem: "t^8 \\times 2t^8", answer: "2t^{16}"},
            
            // Additional higher power questions
            {problem: "3b^{10} \\times 4b^5", answer: "12b^{15}"},
            {problem: "5c^8 \\times 2c^7", answer: "10c^{15}"},
            {problem: "6d^9 \\times 3d^4", answer: "18d^{13}"},
            {problem: "2e^{12} \\times 7e^6", answer: "14e^{18}"},
            {problem: "4f^{11} \\times 5f^8", answer: "20f^{19}"},
            
            // Cognitive Level 5: Three Variables
            {problem: "xy^4z \\times 4xy", answer: "4x^2y^5z"},
            {problem: "9yz^2 \\times 2yz^5", answer: "18y^2z^7"},
            {problem: "2y^{10}z^2 \\times y^5z^3", answer: "2y^{15}z^5"},
            
            // Additional three-variable questions
            {problem: "3abc \\times 2a^2bc^3", answer: "6a^3b^2c^4"},
            {problem: "4x^2yz^3 \\times 3xy^4z", answer: "12x^3y^5z^4"},
            {problem: "5m^3n^2p \\times 2mn^3p^4", answer: "10m^4n^5p^5"},
            {problem: "6r^4s^3t^2 \\times rs^2t^5", answer: "6r^5s^5t^7"},
            {problem: "2u^5v^4w^3 \\times 3u^2vw^2", answer: "6u^7v^5w^5"},
            
            // Cognitive Level 6: Multiple Terms (Three factors)
            {problem: "m^2 \\times n^3 \\times m^4 \\times n^7", answer: "m^6n^{10}"},
            {problem: "3r^3s^2 \\times s^5", answer: "3r^3s^7"},
            
            // Additional multiple term questions
            {problem: "2a^3 \\times 3b^2 \\times a^4b^3", answer: "6a^7b^5"},
            {problem: "4x^2y \\times xy^3 \\times 2x^3y^2", answer: "8x^6y^6"},
            {problem: "3p^4q \\times 2pq^2 \\times p^2q^3", answer: "6p^7q^6"},
            {problem: "5m^3n^2 \\times mn \\times 2m^2n^4", answer: "10m^6n^7"},
            
            // Cognitive Level 7: Negative Coefficients
            {problem: "-7x^2y^3 \\times 2x^5y", answer: "-14x^7y^4"},
            {problem: "-4ab^2 \\times a^4b", answer: "-4a^5b^3"},
            {problem: "2c^4d \\times (-8c^2)", answer: "-16c^6d"},
            
            // Additional negative coefficient questions
            {problem: "-3m^5n^2 \\times 4m^2n^3", answer: "-12m^7n^5"},
            {problem: "5p^3q^4 \\times (-2p^4q)", answer: "-10p^7q^5"},
            {problem: "-6r^2s^5 \\times 3r^3s^2", answer: "-18r^5s^7"},
            {problem: "4t^6u^3 \\times (-2t^2u^4)", answer: "-8t^8u^7"},
            {problem: "-2v^4w^6 \\times 5v^3w^2", answer: "-10v^7w^8"},
            
            // Cognitive Level 8: Fractions
            {problem: "\\frac{1}{5}p^2 \\times p", answer: "\\frac{1}{5}p^3"},
            {problem: "\\frac{1}{4}c^4 \\times \\frac{2}{3}c^3", answer: "\\frac{1}{6}c^7"},
            {problem: "\\frac{3}{5}s \\times \\frac{3s}{5}", answer: "\\frac{9}{25}s^2"},
            
            // Additional fraction questions
            {problem: "\\frac{2}{3}a^3 \\times \\frac{3}{4}a^2", answer: "\\frac{1}{2}a^5"},
            {problem: "\\frac{1}{2}x^4y \\times \\frac{4}{3}xy^2", answer: "\\frac{2}{3}x^5y^3"},
            {problem: "\\frac{3}{7}m^2n \\times \\frac{7}{6}mn^3", answer: "\\frac{1}{2}m^3n^4"},
            {problem: "\\frac{5}{8}p^3q^2 \\times \\frac{4}{5}pq^4", answer: "\\frac{1}{2}p^4q^6"},
            {problem: "\\frac{2}{9}r^5s \\times \\frac{9}{4}r^2s^3", answer: "\\frac{1}{2}r^7s^4"},
            
            // Mixed complexity reinforcement
            {problem: "6ab^3 \\times 2a^4b^2", answer: "12a^5b^5"},
            {problem: "3x^5y^2 \\times 4x^2y^6", answer: "12x^7y^8"},
            {problem: "5m^4n^3 \\times 2m^6n^4", answer: "10m^{10}n^7"},
            {problem: "4p^7q^2 \\times 3p^3q^8", answer: "12p^{10}q^{10}"},
            
            // Moved from Multiply Terms - Questions with negative coefficients and same variable products
            {problem: "7m \\times (-3m)", answer: "-21m^2"},
            {problem: "(-4p) \\times 6p", answer: "-24p^2"},
            {problem: "8r \\times (-r)", answer: "-8r^2"},
            {problem: "(-6t) \\times (-2t)", answer: "12t^2"},
            {problem: "7q \\times (-4q)", answer: "-28q^2"},
            {problem: "(-5w) \\times 2w", answer: "-10w^2"},
            {problem: "(-3v) \\times (-7v)", answer: "21v^2"},
            {problem: "3a \\times 3a", answer: "9a^2"},
            {problem: "4x \\times 4x", answer: "16x^2"},
            {problem: "5m \\times 5m", answer: "25m^2"},
            {problem: "(-2y) \\times (-2y)", answer: "4y^2"},
            {problem: "6p \\times 6p", answer: "36p^2"},
            {problem: "(-3r) \\times (-3r)", answer: "9r^2"},
            {problem: "7n \\times 7n", answer: "49n^2"},
            {problem: "(-4t) \\times (-4t)", answer: "16t^2"},
            {problem: "8s \\times 8s", answer: "64s^2"},
            {problem: "(-5q) \\times (-5q)", answer: "25q^2"},
            {problem: "9w \\times 9w", answer: "81w^2"},
            {problem: "(-6z) \\times (-6z)", answer: "36z^2"},
            {problem: "-4a \\times (-3a)", answer: "12a^2"},
            
            // Multi-variable same variable products from Multiply Terms
            {problem: "7a \\times 3ab", answer: "21a^2b"},
            {problem: "5mn \\times (-3n)", answer: "-15mn^2"},
            {problem: "4xy \\times 2x", answer: "8x^2y"},
            {problem: "6pq \\times 3p", answer: "18p^2q"},
            {problem: "(-2rs) \\times 4r", answer: "-8r^2s"},
            {problem: "3tu \\times (-5t)", answer: "-15t^2u"},
            {problem: "8ab \\times 2a", answer: "16a^2b"},
            {problem: "(-4cd) \\times 3c", answer: "-12c^2d"},
            {problem: "5ef \\times (-2e)", answer: "-10e^2f"},
            {problem: "7gh \\times 4g", answer: "28g^2h"},
            {problem: "(-3jk) \\times (-6j)", answer: "18j^2k"},
            {problem: "2lm \\times 9l", answer: "18l^2m"},
            {problem: "-3gh \\times (-6h)", answer: "18gh^2"}
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
window.AlgebraLevels.indexLawMedium = new IndexLawMediumLevel();