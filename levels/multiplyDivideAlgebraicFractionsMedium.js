// levels/multiplyDivideAlgebraicFractionsMedium.js
class MultiplyDivideAlgebraicFractionsMediumLevel {
    constructor() {
        this.key = 'multiplyDivideAlgebraicFractionsMedium';
        this.name = 'Multiply Divide Algebraic Fractions (Medium)';
        this.usedQuestionIndices = new Set();
        
        // Predefined questions covering intermediate multiplication and division with cancellation
        this.questions = [

            // Fraction multiplication with simple cancellation
            {problem: "\\frac{x}{y} \\times \\frac{3}{6}", answer: "\\frac{x}{2y}"},
            {problem: "\\frac{x}{y} \\times \\frac{3}{6x}", answer: "\\frac{1}{2y}"},
            {problem: "\\frac{x}{xy} \\times \\frac{3}{6}", answer: "\\frac{1}{2y}"},
            {problem: "\\frac{7x}{xy} \\times \\frac{3}{6}", answer: "\\frac{7}{2y}"},
            {problem: "\\frac{3x}{2} \\times \\frac{1}{6x}", answer: "\\frac{1}{4}"},
            {problem: "\\frac{4}{9k} \\times \\frac{3k}{2}", answer: "\\frac{2}{3}"},

            // Same variable squared terms
            {problem: "\\frac{3a}{2} \\times \\frac{7a}{5}", answer: "\\frac{21a^2}{10}"},
            {problem: "\\frac{6x}{5} \\times \\frac{7y}{6}", answer: "\\frac{7xy}{5}"},
            {problem: "\\frac{2b}{5} \\times \\frac{7d}{6}", answer: "\\frac{7bd}{15}"},
            {problem: "\\frac{8a}{5} \\times \\frac{3b}{4c}", answer: "\\frac{6ab}{5c}"},
            {problem: "\\frac{9d}{2} \\times \\frac{4e}{7}", answer: "\\frac{18de}{7}"},

            // Division with cancellation
            {problem: "\\frac{4x}{5} \\div 3", answer: "\\frac{4x}{15}"},
            {problem: "5 \\times \\frac{7}{10x}", answer: "\\frac{7}{2x}"},
            {problem: "\\frac{9a}{10} \\div \\frac{1}{4}", answer: "\\frac{18a}{5}"},
            {problem: "\\frac{2}{3} \\div \\frac{4x}{7}", answer: "\\frac{7}{6x}"},
            {problem: "\\frac{4}{5} \\div \\frac{2y}{3}", answer: "\\frac{6}{5y}"},
            {problem: "\\frac{4a}{7} \\div \\frac{2}{5}", answer: "\\frac{10a}{7}"},
            {problem: "\\frac{4b}{7} \\div \\frac{2c}{5}", answer: "\\frac{10b}{7c}"},
            {problem: "\\frac{2x}{5} \\div \\frac{4y}{3}", answer: "\\frac{3x}{10y}"},

            // More complex operations
            {problem: "\\frac{7x}{xy} \\times \\frac{3}{6y}", answer: "\\frac{7}{2y^2}"},
            {problem: "\\frac{7x}{xy} \\div \\frac{6y}{3}", answer: "\\frac{7}{2y^2}"},
            {problem: "\\frac{7x}{xy} \\times \\frac{6y}{3}", answer: "14"},
            {problem: "\\frac{7x}{xy} \\div \\frac{3}{6y}", answer: "14"},

            // Additional generated questions with intermediate complexity
            {problem: "\\frac{5a}{6} \\times \\frac{4b}{15a}", answer: "\\frac{2b}{9}"},
            {problem: "\\frac{8x}{9} \\times \\frac{3y}{4x}", answer: "\\frac{2y}{3}"},
            {problem: "\\frac{12a}{7} \\times \\frac{5b}{8a}", answer: "\\frac{15b}{14}"},
            {problem: "\\frac{6x}{5y} \\times \\frac{10y}{9x}", answer: "\\frac{4}{3}"},
            {problem: "\\frac{14a}{3b} \\times \\frac{9b}{7a}", answer: "6"},

            {problem: "\\frac{15x}{8} \\div \\frac{5x}{4}", answer: "\\frac{3}{2}"},
            {problem: "\\frac{12a}{7} \\div \\frac{6a}{14}", answer: "4"},
            {problem: "\\frac{18b}{5} \\div \\frac{9b}{10}", answer: "4"},
            {problem: "\\frac{21x}{4} \\div \\frac{7x}{8}", answer: "6"},
            {problem: "\\frac{16y}{9} \\div \\frac{4y}{3}", answer: "\\frac{4}{3}"},

            {problem: "\\frac{3a^2}{4} \\times \\frac{8}{9a}", answer: "\\frac{2a}{3}"},
            {problem: "\\frac{5x^2}{6} \\times \\frac{12}{10x}", answer: "x"},
            {problem: "\\frac{7b^2}{8} \\times \\frac{16}{21b}", answer: "\\frac{2b}{3}"},
            {problem: "\\frac{9y^2}{10} \\times \\frac{20}{27y}", answer: "\\frac{2y}{3}"},
            {problem: "\\frac{4a^2}{5} \\times \\frac{15}{8a}", answer: "\\frac{3a}{2}"},

            {problem: "\\frac{6ab}{5} \\times \\frac{10c}{9ab}", answer: "\\frac{4c}{3}"},
            {problem: "\\frac{8xy}{7} \\times \\frac{21z}{12xy}", answer: "2z"},
            {problem: "\\frac{12pq}{11} \\times \\frac{22r}{18pq}", answer: "\\frac{4r}{3}"},
            {problem: "\\frac{15mn}{4} \\times \\frac{8s}{25mn}", answer: "\\frac{6s}{5}"},
            {problem: "\\frac{20ab}{9} \\times \\frac{27c}{30ab}", answer: "2c"},

            {problem: "\\frac{18x}{5} \\div \\frac{6x}{15}", answer: "9"},
            {problem: "\\frac{24a}{7} \\div \\frac{8a}{21}", answer: "9"},
            {problem: "\\frac{30b}{11} \\div \\frac{10b}{33}", answer: "9"},
            {problem: "\\frac{35x}{6} \\div \\frac{7x}{18}", answer: "15"},
            {problem: "\\frac{42y}{13} \\div \\frac{14y}{39}", answer: "9"}
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
window.AlgebraLevels.multiplyDivideAlgebraicFractionsMedium = new MultiplyDivideAlgebraicFractionsMediumLevel();