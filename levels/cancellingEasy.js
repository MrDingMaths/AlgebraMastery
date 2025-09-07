class CancellingEasy {
    constructor() {
        this.key = 'cancellingEasy';
        this.name = 'Cancelling Factors (Easy)';
        this.questions = [
            // Category 1: Basic Numerical Coefficient Cancelling
            {problem: "8b ÷ 2", answer: "4b"},
            {problem: "12x ÷ 3", answer: "4x"},
            {problem: "15y ÷ 5", answer: "3y"},
            {problem: "6a ÷ 2", answer: "3a"},
            {problem: "9m ÷ 3", answer: "3m"},
            {problem: "14p ÷ 7", answer: "2p"},
            {problem: "24r ÷ 6", answer: "4r"},
            
            // Category 1: Negative numerators
            {problem: "-12x ÷ 4", answer: "-3x"},
            {problem: "-8y ÷ 2", answer: "-4y"},
            {problem: "-15z ÷ 3", answer: "-5z"},
            {problem: "-10a ÷ 5", answer: "-2a"},
            {problem: "-16b ÷ 8", answer: "-2b"},
            
            // Category 3: Basic Variable Cancelling (Same Variables)
            {problem: "8ab ÷ 4a", answer: "2b"},
            {problem: "12xy ÷ 3x", answer: "4y"},
            {problem: "15abc ÷ 5a", answer: "3bc"},
            {problem: "18xyz ÷ 6x", answer: "3yz"},
            {problem: "21rst ÷ 7r", answer: "3st"},
            {problem: "4x ÷ 8xy", answer: "\\frac{1}{2y}"},
            {problem: "6a ÷ 12ab", answer: "\\frac{1}{2b}"},
            {problem: "9m ÷ 15mn", answer: "\\frac{3}{5n}"},
            
            // Keep questions where powers are present but core task doesn't involve changing powers
            {problem: "6x ÷ 3x^2", answer: "\\frac{2}{x}"},
            {problem: "8ab ÷ 4a^2", answer: "\\frac{2b}{a}"},
            {problem: "12mn ÷ 6m^2n", answer: "\\frac{2}{m}"},
            
            // Textbook Questions - Easy Level
            {problem: "\\frac{2x}{5x}", answer: "\\frac{2}{5}"},
            {problem: "\\frac{5a}{9a}", answer: "\\frac{5}{9}"},
            {problem: "\\frac{2x}{4}", answer: "\\frac{x}{2}"},
            {problem: "\\frac{9x}{12}", answer: "\\frac{3x}{4}"},
            {problem: "\\frac{10a}{15a}", answer: "\\frac{2}{3}"},
            {problem: "\\frac{30y}{40y}", answer: "\\frac{3}{4}"},
            {problem: "\\frac{4a}{2}", answer: "2a"},
            {problem: "\\frac{21x}{7x}", answer: "3"},
            {problem: "\\frac{5a}{10a}", answer: "\\frac{1}{2}"},
            {problem: "\\frac{8b}{2}", answer: "4b"},
            {problem: "\\frac{12ab}{2}", answer: "6ab"},
            {problem: "\\frac{8x}{x}", answer: "8"},
            {problem: "\\frac{7x}{7}", answer: "x"},
            {problem: "\\frac{6ab}{2}", answer: "3ab"},
            {problem: "\\frac{5x}{x}", answer: "5"},
            {problem: "\\frac{2y}{y}", answer: "2"},
            {problem: "\\frac{30x}{5}", answer: "6x"}
        ];
    }

    generateQuestion() {
        const randomIndex = Math.floor(Math.random() * this.questions.length);
        const question = this.questions[randomIndex];
        
        // Convert division notation to fraction notation
        // 1 in 20 chance (5%) to keep division symbol, 95% chance for fraction
        const useDivision = Math.random() < 0.05;
        
        if (useDivision) {
            return question; // Keep original division format
        } else {
            // Convert "numerator ÷ denominator" to "\\frac{numerator}{denominator}"
            const divisionMatch = question.problem.match(/^(.+)\s÷\s(.+)$/);
            if (divisionMatch) {
                const numerator = divisionMatch[1];
                const denominator = divisionMatch[2];
                return {
                    problem: `\\frac{${numerator}}{${denominator}}`,
                    answer: question.answer
                };
            }
        }
        
        return question;
    }

    getQuestions() {
        return this.questions;
    }
}

// Register the level
window.AlgebraLevels = window.AlgebraLevels || {};
window.AlgebraLevels.cancellingEasy = new CancellingEasy();