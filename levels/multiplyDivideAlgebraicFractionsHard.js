// levels/multiplyDivideAlgebraicFractionsHard.js
class MultiplyDivideAlgebraicFractionsHardLevel {
    constructor() {
        this.key = 'multiplyDivideAlgebraicFractionsHard';
        this.name = 'Multiply Divide Algebraic Fractions (Hard)';
        this.usedQuestionIndices = new Set();
        
        // Predefined questions covering advanced multiplication and division with complex cancellation
        this.questions = [

            // Complex division problems
            {problem: "\\frac{2y}{x} \\div \\frac{3}{y}", answer: "\\frac{2y^2}{3x}"},
            {problem: "\\frac{5}{12x} \\div \\frac{7x}{2}", answer: "\\frac{5}{42x^2}"},
            {problem: "\\frac{4a}{5} \\div \\frac{2b}{7a}", answer: "\\frac{14a^2}{5b}"},

            // Multi-step operations
            {problem: "\\frac{7x}{xy} \\times \\frac{6y}{3} \\times \\frac{4y}{14}", answer: "4y"},
            {problem: "\\frac{7x}{xy} \\div \\frac{6y}{3} \\div \\frac{4y}{14}", answer: "\\frac{49}{4y^3}"},
            {problem: "\\frac{7x^2}{xy} \\div \\frac{6y}{3} \\div \\frac{4y}{14}", answer: "\\frac{49x}{4y^3}"},

            // Operations with parentheses
            {problem: "\\frac{7x^2}{xy} \\div \\left(\\frac{6y}{3} \\times \\frac{4y}{14}\\right)", answer: "\\frac{49x}{4y^3}"},
            {problem: "\\frac{7x^2}{xy} \\div \\left(\\frac{6y}{3} \\div \\frac{4y}{14}\\right)", answer: "\\frac{x}{y}"},
            {problem: "\\frac{7x^2}{xy} \\div \\left(\\frac{6y}{9} \\times \\frac{4y}{14}\\right)", answer: "\\frac{147x}{4y^3}"},
            {problem: "\\frac{7x^2}{xy} \\times \\left(\\frac{6y}{9} \\div \\frac{4y}{14}\\right)", answer: "\\frac{49x}{3y}"},

            // Additional complex problems with higher powers
            {problem: "\\frac{3a^2}{4b} \\times \\frac{8b^2}{9a}", answer: "\\frac{2ab}{3}"},
            {problem: "\\frac{5x^3}{6y} \\times \\frac{12y^2}{15x^2}", answer: "\\frac{2xy}{3}"},
            {problem: "\\frac{8m^2}{9n} \\div \\frac{4m}{3n^2}", answer: "\\frac{2mn}{3}"},
            {problem: "\\frac{12p^3}{7q} \\div \\frac{18p^2}{14q^2}", answer: "\\frac{4pq}{3}"},
            {problem: "\\frac{15a^2b}{8c} \\times \\frac{16c^2}{25ab}", answer: "\\frac{6ac}{5}"},

            // Complex multi-variable problems
            {problem: "\\frac{6x^2y}{5z} \\div \\frac{9xy^2}{10z^2}", answer: "\\frac{4xz}{3y}"},
            {problem: "\\frac{14a^3b}{9c^2} \\times \\frac{27c}{21a^2}", answer: "\\frac{2ab}{c}"},
            {problem: "\\frac{20m^2n^3}{13p} \\div \\frac{15mn^2}{26p^2}", answer: "\\frac{8mnp}{3}"},
            {problem: "\\frac{18x^3y^2}{11z^3} \\times \\frac{22z^2}{27x^2y}", answer: "\\frac{4xy}{3z}"},
            {problem: "\\frac{24a^4b^2}{17c^3} \\div \\frac{16a^3b}{34c^2}", answer: "\\frac{3ab}{c}"},

            // Three-term operations
            {problem: "\\frac{4x}{3} \\times \\frac{9y}{8} \\times \\frac{2z}{3x}", answer: "yz"},
            {problem: "\\frac{6a}{5} \\div \\frac{3b}{10} \\times \\frac{4c}{9a}", answer: "\\frac{16c}{9b}"},
            {problem: "\\frac{8m}{7} \\times \\frac{14n}{12} \\div \\frac{6p}{21m}", answer: "\\frac{14m^2n}{3p}"},
            {problem: "\\frac{12x}{11} \\div \\frac{8y}{22} \\div \\frac{3z}{4x}", answer: "\\frac{4x^2}{yz}"},
            {problem: "\\frac{15a}{4} \\times \\frac{8b}{25} \\times \\frac{10c}{3ab}", answer: "4c"},

            // Complex parenthetical operations
            {problem: "\\frac{10x^2}{3y} \\times \\left(\\frac{9y^2}{5x} \\div \\frac{6y}{15x^2}\\right)", answer: "15x^3"},
            {problem: "\\frac{12a^3}{7b} \\div \\left(\\frac{8a^2}{14b^2} \\times \\frac{21b}{6a}\\right)", answer: "\\frac{6a^2}{7}"},
            {problem: "\\frac{16m^2}{9n} \\times \\left(\\frac{27n^3}{8m} \\div \\frac{18n^2}{4m^2}\\right)", answer: "\\frac{4m^3}{3}"},
            {problem: "\\frac{20p^3}{11q} \\div \\left(\\frac{15p^2}{22q^3} \\times \\frac{44q^2}{25p}\\right)", answer: "\\frac{50p^2}{33}"},
            {problem: "\\frac{24x^2y}{13z} \\times \\left(\\frac{26z^2}{16xy} \\div \\frac{39z}{12x^2}\\right)", answer: "\\frac{12x^3}{13}"},

            // Very complex mixed operations
            {problem: "\\frac{a^2b}{c^3} \\times \\frac{c^2}{ab} \\div \\frac{2a}{3c}", answer: "\\frac{3}{2}"},
            {problem: "\\frac{x^3y^2}{z^4} \\div \\frac{xy}{z^2} \\times \\frac{3z}{4x}", answer: "\\frac{3x y}{4z}"},
            {problem: "\\frac{m^4n}{p^2} \\times \\frac{p^3}{m^2n^2} \\div \\frac{5m}{6p}", answer: "\\frac{6m p^2}{5n}"},
            {problem: "\\frac{a^3b^2c}{d^4} \\div \\frac{ab}{d^2} \\times \\frac{7d}{8a^2}", answer: "\\frac{7bc}{8d}"},
            {problem: "\\frac{x^2y^3z}{w^3} \\times \\frac{w^2}{xy^2} \\div \\frac{4xz}{9w}", answer: "\\frac{9y}{4}"},

            // Higher degree polynomial division
            {problem: "\\frac{6x^4}{5y^2} \\div \\frac{9x^3}{10y^3}", answer: "\\frac{4xy}{3}"},
            {problem: "\\frac{8a^5b^2}{7c^3} \\div \\frac{12a^4b}{14c^4}", answer: "\\frac{4abc}{3}"},
            {problem: "\\frac{15m^3n^4}{11p^2} \\div \\frac{25m^2n^3}{22p^3}", answer: "\\frac{6mnp}{5}"},
            {problem: "\\frac{21x^6y^3}{13z^4} \\div \\frac{28x^5y^2}{26z^5}", answer: "\\frac{3xyz}{2}"},
            {problem: "\\frac{18p^4q^5r}{17s^3} \\div \\frac{24p^3q^4}{34s^4}", answer: "\\frac{3pqrs}{2}"}
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
window.AlgebraLevels.multiplyDivideAlgebraicFractionsHard = new MultiplyDivideAlgebraicFractionsHardLevel();