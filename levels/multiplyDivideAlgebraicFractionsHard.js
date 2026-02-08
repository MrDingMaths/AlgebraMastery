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
            {problem: "\\frac{8x^2}{9y} \\div \\frac{4x}{3y^2}", answer: "\\frac{2xy}{3}"},
            {problem: "\\frac{12x^3}{7y} \\div \\frac{18x^2}{14y^2}", answer: "\\frac{4xy}{3}"},
            {problem: "\\frac{15a^2b}{8x} \\times \\frac{16x^2}{25ab}", answer: "\\frac{6ax}{5}"},

            // Complex multi-variable problems
            {problem: "\\frac{6x^2y}{5a} \\div \\frac{9xy^2}{10a^2}", answer: "\\frac{4xa}{3y}"},
            {problem: "\\frac{14a^3b}{9x^2} \\times \\frac{27x}{21a^2}", answer: "\\frac{2ab}{x}"},
            {problem: "\\frac{20x^2y^3}{13a} \\div \\frac{15xy^2}{26a^2}", answer: "\\frac{8xya}{3}"},
            {problem: "\\frac{18x^3y^2}{11a^3} \\times \\frac{22a^2}{27x^2y}", answer: "\\frac{4xy}{3a}"},
            {problem: "\\frac{24a^4b^2}{17x^3} \\div \\frac{16a^3b}{34x^2}", answer: "\\frac{3ab}{x}"},

            // Three-term operations
            {problem: "\\frac{4x}{3} \\times \\frac{9y}{8} \\times \\frac{2a}{3x}", answer: "ya"},
            {problem: "\\frac{6a}{5} \\div \\frac{3b}{10} \\times \\frac{4x}{9a}", answer: "\\frac{16x}{9b}"},
            {problem: "\\frac{8x}{7} \\times \\frac{14y}{12} \\div \\frac{6a}{21x}", answer: "\\frac{14x^2y}{3a}"},
            {problem: "\\frac{12x}{11} \\div \\frac{8y}{22} \\div \\frac{3a}{4x}", answer: "\\frac{4x^2}{ya}"},
            {problem: "\\frac{15a}{4} \\times \\frac{8b}{25} \\times \\frac{10x}{3ab}", answer: "4x"},

            // Complex parenthetical operations
            {problem: "\\frac{10x^2}{3y} \\times \\left(\\frac{9y^2}{5x} \\div \\frac{6y}{15x^2}\\right)", answer: "15x^3"},
            {problem: "\\frac{12a^3}{7b} \\div \\left(\\frac{8a^2}{14b^2} \\times \\frac{21b}{6a}\\right)", answer: "\\frac{6a^2}{7}"},
            {problem: "\\frac{16x^2}{9y} \\times \\left(\\frac{27y^3}{8x} \\div \\frac{18y^2}{4x^2}\\right)", answer: "\\frac{4x^3}{3}"},
            {problem: "\\frac{20x^3}{11y} \\div \\left(\\frac{15x^2}{22y^3} \\times \\frac{44y^2}{25x}\\right)", answer: "\\frac{50x^2}{33}"},
            {problem: "\\frac{24x^2y}{13a} \\times \\left(\\frac{26a^2}{16xy} \\div \\frac{39a}{12x^2}\\right)", answer: "\\frac{12x^3}{13}"},

            // Very complex mixed operations
            {problem: "\\frac{a^2b}{x^3} \\times \\frac{x^2}{ab} \\div \\frac{2a}{3x}", answer: "\\frac{3}{2}"},
            {problem: "\\frac{x^3y^2}{a^4} \\div \\frac{xy}{a^2} \\times \\frac{3a}{4x}", answer: "\\frac{3x y}{4a}"},
            {problem: "\\frac{x^4y}{a^2} \\times \\frac{a^3}{x^2y^2} \\div \\frac{5x}{6a}", answer: "\\frac{6x a^2}{5y}"},
            {problem: "\\frac{a^3b^2x}{y^4} \\div \\frac{ab}{y^2} \\times \\frac{7y}{8a^2}", answer: "\\frac{7bx}{8y}"},
            {problem: "\\frac{x^2y^3a}{b^3} \\times \\frac{b^2}{xy^2} \\div \\frac{4xa}{9b}", answer: "\\frac{9y}{4}"},

            // Higher degree polynomial division
            {problem: "\\frac{6x^4}{5y^2} \\div \\frac{9x^3}{10y^3}", answer: "\\frac{4xy}{3}"},
            {problem: "\\frac{8a^5b^2}{7x^3} \\div \\frac{12a^4b}{14x^4}", answer: "\\frac{4abx}{3}"},
            {problem: "\\frac{15x^3y^4}{11a^2} \\div \\frac{25x^2y^3}{22a^3}", answer: "\\frac{6xya}{5}"},
            {problem: "\\frac{21x^6y^3}{13a^4} \\div \\frac{28x^5y^2}{26a^5}", answer: "\\frac{3xya}{2}"},
            {problem: "\\frac{18x^4y^5a}{17b^3} \\div \\frac{24x^3y^4}{34b^4}", answer: "\\frac{3xyab}{2}"}
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