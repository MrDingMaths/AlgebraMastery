class CancellingHard {
    constructor() {
        this.key = 'cancellingHard';
        this.name = 'Cancelling Factors (Hard)';
        this.questions = [
            
            // Keep only questions with simple mental arithmetic
            {problem: "18a^2b ÷ 24ab^2", answer: "\\frac{3a}{4b}"},
            {problem: "20x^3y^2 ÷ 25xy^3", answer: "\\frac{4x^2}{5y}"},
            {problem: "12x^2y ÷ 18xy^2", answer: "\\frac{2x}{3y}"},
            {problem: "15p^2q ÷ 20pq^2", answer: "\\frac{3p}{4q}"},
            {problem: "14a^2b ÷ 21ab^2", answer: "\\frac{2a}{3b}"},
            {problem: "16m^2n ÷ 24mn^2", answer: "\\frac{2m}{3n}"},
            {problem: "28c^3d^2 ÷ 21cd^3", answer: "\\frac{4c^2}{3d}"},
            {problem: "30x^4y ÷ 40x^2y^2", answer: "\\frac{3x^2}{4y}"},
            {problem: "25m^3n ÷ 15mn^3", answer: "\\frac{5m^2}{3n^2}"},
            {problem: "32a^3b^2 ÷ 48a^2b^3", answer: "\\frac{2a}{3b}"},
            {problem: "50p^4q^2 ÷ 20p^2q^3", answer: "\\frac{5p^2}{2q}"},
            {problem: "24r^2s ÷ 36rs^2", answer: "\\frac{2r}{3s}"},
            {problem: "27x^3y ÷ 18xy^3", answer: "\\frac{3x^2}{2y^2}"},
            {problem: "45a^4b ÷ 60a^3b^2", answer: "\\frac{3a}{4b}"},
            
            // Keep only textbook questions with simple mental arithmetic and no index laws
            {problem: "\\frac{-5x}{10yz^2}", answer: "-\\frac{x}{2yz^2}"},
            {problem: "\\frac{21p}{-3q}", answer: "-\\frac{7p}{q}"},
            {problem: "-\\frac{3a}{9}", answer: "-\\frac{a}{3}"},
            {problem: "-\\frac{2ab}{8}", answer: "-\\frac{ab}{4}"},
            {problem: "\\frac{-2x}{x}", answer: "-2"},
            {problem: "\\frac{-8p}{4pqs}", answer: "-\\frac{2}{qs}"},
            {problem: "\\frac{12xy}{-4x}", answer: "-3y"},
            {problem: "-\\frac{15ab}{5a}", answer: "-3b"},
            {problem: "\\frac{-6pq}{9p}", answer: "-\\frac{2q}{3}"},
            {problem: "\\frac{10mn}{-5m}", answer: "-2n"},
            {problem: "-\\frac{4rs}{12r}", answer: "-\\frac{s}{3}"},
            {problem: "\\frac{-18xy}{6y}", answer: "-3x"},
            {problem: "\\frac{-9ab}{12b}", answer: "-\\frac{3a}{4}"},
            {problem: "\\frac{14x}{-7xy}", answer: "-\\frac{2}{y}"},
            {problem: "-\\frac{16cd}{4c}", answer: "-4d"},
            {problem: "\\frac{-11m}{mn}", answer: "-\\frac{11}{n}"},
            {problem: "\\frac{25pq}{-5p}", answer: "-5q"},
            {problem: "-\\frac{50xyz}{100x}", answer: "-\\frac{yz}{2}"},
            {problem: "\\frac{-7r}{21rs}", answer: "-\\frac{1}{3s}"},
            {problem: "\\frac{3ab}{a}", answer: "3b"},
            {problem: "-\\frac{20cde}{4ce}", answer: "-5d"},
            {problem: "\\frac{6x^2y}{3xy}", answer: "2x"}
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
window.AlgebraLevels.cancellingHard = new CancellingHard();