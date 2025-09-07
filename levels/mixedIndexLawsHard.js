// levels/mixedIndexLawsHard.js
class MixedIndexLawsHardLevel {
    constructor() {
        this.key = 'mixedIndexLawsHard';
        this.name = 'Mixed Index Laws (Hard)';
        this.usedQuestionIndices = new Set();
        
        // Predefined questions covering advanced index laws
        // Cognitive complexity: Multiple power operations, algebraic fractions with coefficients
        this.questions = [
            // Multiple power operations combined
            {problem: "(5^2)^3 \\times (5^4)^2 \\div 5^{11}", answer: "5^3"},
            {problem: "(4^5)^2 \\times (4^3)^3 \\div (4^6)^2", answer: "4^7"},
            {problem: "(5^3)^2 \\times (5^2)^0 \\div (5^2)^3", answer: "1"},
            {problem: "(9^2)^3 \\times (9^4)^2 \\times 9^0", answer: "9^{14}"},
            {problem: "(7^6)^2 \\div (7^3)^4 \\times 7", answer: "7"},
            {problem: "(6^5)^4 \\div (6^3)^3 \\times (6^8)^0", answer: "6^{11}"},
            {problem: "(2^3)^4 \\times (2^2)^3 \\div (2^5)^2", answer: "2^8"},
            {problem: "(3^4)^2 \\times (3^1)^5 \\div (3^3)^3", answer: "3^4"},
            {problem: "(8^2)^3 \\div (8^1)^4 \\times (8^3)^1", answer: "8^5"},
            
            // Algebraic fractions with coefficients
            {problem: "\\frac{6x^3y^2 \\times 4xy}{8x^2y}", answer: "3x^2y^2"},
            {problem: "\\frac{12b^3}{3g^2} \\times \\frac{2g^3}{4b}", answer: "2b^2g"},
            {problem: "\\frac{8m^4n^3}{2m^2n} \\times \\frac{3mn^2}{6m}", answer: "2m^2n^4"},
            {problem: "\\frac{p^3q^2}{pq} \\times \\frac{p^4q^3}{p^2q}", answer: "p^4q^3"},
            {problem: "\\frac{6a^2}{2c^2} \\times \\frac{4a^3}{3c^2}", answer: "\\frac{4a^5}{c^4}"},
            {problem: "\\frac{2f^3 \\times 6f^4}{4f^2}", answer: "3f^5"},
            {problem: "\\frac{3x^2b \\times 8x^2b}{6xb}", answer: "4x^3b"},
            {problem: "\\frac{4k^3m^2}{2km} \\times \\frac{6km}{3k}", answer: "4k^2m^2"},
            {problem: "\\frac{9x^4y^2}{3x^2y} \\times \\frac{4xy^2}{6x}", answer: "2x^2y^3"},
            {problem: "\\frac{6m^3n^2 \\times 4mn}{8mn \\times 2m^2n}", answer: "\\frac{3mn}{2}"},
            {problem: "\\frac{5x^4 \\times 3x^2}{x^3}", answer: "15x^3"},
            {problem: "\\frac{4p^6 \\times 6p^2}{8p^5}", answer: "3p^3"},
            {problem: "\\frac{12y^3 \\times 2y^4}{6y^2}", answer: "4y^5"},
            {problem: "\\frac{10a^5}{2a^2} \\times \\frac{3a^4}{5a}", answer: "3a^6"},
            {problem: "\\frac{9m^7}{3m^3} \\times \\frac{2m^2}{m}", answer: "6m^5"},
            {problem: "\\frac{8b^5 \\times 3b}{6b^2}", answer: "4b^4"},
            {problem: "\\frac{7k^4}{k} \\times \\frac{4k^2}{14k^3}", answer: "2k^2"},
            {problem: "\\frac{15z^8}{5z^2} \\times \\frac{2z}{3z^4}", answer: "2z^3"},
            {problem: "\\frac{3c^5 \\times 8c^2}{12c^3}", answer: "2c^4"},
            {problem: "\\frac{16n^6}{4n} \\times \\frac{3n^2}{6n^3}", answer: "2n^4"},
            {problem: "\\frac{5a^2b \\times 6ab^3}{3ab^2}", answer: "10a^2b^2"},
            {problem: "\\frac{7p^5q^3 \\times 4p^2q}{14pq^2}", answer: "2p^6q^2"},
            {problem: "\\frac{15x^4y^2}{5xy} \\times \\frac{2x^2y^3}{3xy}", answer: "2x^4y^3"},
            {problem: "\\frac{10m^3n^5 \\times 3m^2n}{5mn^2 \\times 2m^3n}", answer: "3mn^3"},
            {problem: "\\frac{18c^3d}{9cd} \\times \\frac{4c^2d^4}{8c^3d^2}", answer: "cd^2"},
            {problem: "\\frac{8x^5y^2}{12xy^4} \\times \\frac{9x^2y^3}{4x^3y}", answer: "\\frac{3x^3}{2}"},
            {problem: "\\frac{20g^4h^2}{4gh} \\times \\frac{3g^2h^3}{5g^3h}", answer: "3g^2h^3"},
            {problem: "\\frac{16m^4n^3}{10m^2n^4} \\times \\frac{5mn^2}{4m^3n}", answer: "2"},

            // Advanced algebraic expressions
            {problem: "\\frac{12x^4y^2}{3xy} \\times \\frac{2xy^2}{4x^2}", answer: "2x^2y^3"},
            {problem: "\\frac{15a^4b^2}{3ab} \\times \\frac{4ab^2}{5a^2b}", answer: "4a^2b^2"},
            {problem: "\\frac{18m^5n^3}{6m^2n} \\div \\frac{3mn}{2m}", answer: "2m^3n"},
            {problem: "\\frac{12p^4q^3}{4p^2q} \\div \\frac{3pq}{6p}", answer: "6p^2q"},
            
            // Power combinations with variables
            {problem: "(x^2y^2)^3 \\div (x^2y)^2", answer: "x^2y^4"},
            {problem: "(a^2b^2)^3 \\times (ab^2)^2", answer: "a^8b^{10}"},
            {problem: "(m^3n^2)^2 \\div (mn^2)^2", answer: "m^4"},
            {problem: "(p^3q^2)^2 \\div (p^2q^2)^2", answer: "p^2"},
            
            // Nested power operations
            {problem: "((2^2)^3)^2 \\div (2^4)^2", answer: "2^4"},
            {problem: "((3^1)^4)^2 \\times (3^2)^3", answer: "3^{14}"},
            {problem: "((x^2)^3)^2 \\div (x^4)^2", answer: "x^4"},
            {problem: "((a^3)^2)^4 \\div (a^5)^4", answer: "a^4"},
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
window.AlgebraLevels.mixedIndexLawsHard = new MixedIndexLawsHardLevel();