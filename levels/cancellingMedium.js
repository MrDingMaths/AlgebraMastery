class CancellingMedium {
    constructor() {
        this.key = 'cancellingMedium';
        this.name = 'Cancelling Factors (Medium)';
        this.usedQuestionIndices = new Set();
        
        // Existing predefined questions + space for textbook questions
        this.questions = [
            // Category 2: Negative Fractions (Coordinating negatives with other operations)
            {problem: "-2a ÷ 6", answer: "-\\frac{a}{3}"},
            {problem: "-4b ÷ 8", answer: "-\\frac{b}{2}"},
            {problem: "-10c ÷ 5", answer: "-2c"},
            {problem: "6x ÷ (-3)", answer: "-2x"},
            {problem: "8y ÷ (-4)", answer: "-2y"},
            {problem: "-9b ÷ (-3)", answer: "3b"},
            {problem: "-15c ÷ (-5)", answer: "3c"},
            {problem: "-7m ÷ 14", answer: "-\\frac{m}{2}"},
            {problem: "21n ÷ (-7)", answer: "-3n"},
            
            // Category 3: Multi-Variable Cancelling with Coefficients
            {problem: "15ac ÷ 5a", answer: "3c"},
            {problem: "18xyz ÷ 6x", answer: "3yz"},
            {problem: "21rst ÷ 7r", answer: "3st"},
            {problem: "24pqr ÷ 8p", answer: "3qr"},
            {problem: "30uw ÷ 10wu", answer: "3"},
            
            // Category 5: Denominator Higher Powers with Coefficients
            {problem: "8abc ÷ 4ab^2c", answer: "\\frac{2}{b}"},
            
            // Category 6: Mixed Power Combinations (2-3 operations)
            {problem: "12x^2y^3 ÷ 4xy^2", answer: "3xy"},
            {problem: "18a^3b^2 ÷ 6a^2b", answer: "3ab"},
            {problem: "7x^2y ÷ 14x^3y^2", answer: "\\frac{1}{2xy}"},
            
            // Category 7: Fractions That Don't Fully Cancel (Requiring simplification)
            {problem: "6x ÷ 9", answer: "\\frac{2x}{3}"},
            {problem: "8y ÷ 12", answer: "\\frac{2y}{3}"},
            {problem: "15z ÷ 20", answer: "\\frac{3z}{4}"},
            {problem: "4ab ÷ 6b", answer: "\\frac{2a}{3}"},
            {problem: "8xy ÷ 14y", answer: "\\frac{4x}{7}"},
            {problem: "15mn ÷ 25n", answer: "\\frac{3m}{5}"},
            {problem: "12abc ÷ 30c", answer: "\\frac{2ab}{5}"},
            {problem: "20xyz ÷ 30yz", answer: "\\frac{2x}{3}"},
            {problem: "14pqr ÷ 28r", answer: "\\frac{pq}{2}"},
            {problem: "16rst ÷ 24st", answer: "\\frac{2r}{3}"},
            
            // Category 8: Three Variable Expressions (Managing multiple cancellations)
            {problem: "24abcd ÷ 8abc", answer: "3d"},
            {problem: "30wxyz ÷ 12wxy", answer: "\\frac{5z}{2}"},
            {problem: "36pqrs ÷ 9pqr", answer: "4s"},
            {problem: "42abc ÷ 14ab", answer: "3c"},
            {problem: "60rst ÷ 20rs", answer: "3t"},
            
            
            // Textbook Questions - Medium Level
            {problem: "\\frac{9ab}{4b}", answer: "\\frac{9a}{4}"},
            {problem: "\\frac{2ab}{5a}", answer: "\\frac{2b}{5}"},
            {problem: "\\frac{4xy}{2x}", answer: "2y"},
            {problem: "\\frac{9x}{3xy}", answer: "\\frac{3}{y}"},
            {problem: "\\frac{7x}{14y}", answer: "\\frac{x}{2y}"},
            {problem: "\\frac{10xy}{12y}", answer: "\\frac{5x}{6}"},
            {problem: "\\frac{ab}{4b}", answer: "\\frac{a}{4}"},
            {problem: "\\frac{7xyz}{21yz}", answer: "\\frac{x}{3}"},
            {problem: "\\frac{2}{12x}", answer: "\\frac{1}{6x}"},
            {problem: "\\frac{-4}{-3a}", answer: "\\frac{4}{3a}"},
            {problem: "\\frac{11mn}{3}", answer: "\\frac{11mn}{3}"},
            {problem: "\\frac{-10}{2gh}", answer: "-\\frac{5}{gh}"},
            {problem: "\\frac{-3xy}{yx}", answer: "-3"},
            {problem: "\\frac{7mn}{3m}", answer: "\\frac{7n}{3}"},
            {problem: "\\frac{3mn}{6n}", answer: "\\frac{m}{2}"},
            {problem: "-\\frac{2a}{6}", answer: "-\\frac{a}{3}"},
            {problem: "\\frac{4ab}{6}", answer: "\\frac{2ab}{3}"},
            {problem: "-\\frac{5xy}{20y}", answer: "-\\frac{x}{4}"},
            {problem: "\\frac{10st}{6t}", answer: "\\frac{5s}{3}"},
            {problem: "\\frac{2x}{5}", answer: "\\frac{2x}{5}"},
            {problem: "\\frac{4ab}{2a}", answer: "2b"},
            {problem: "-\\frac{15xy}{5y}", answer: "-3x"},
            {problem: "-\\frac{4xy}{8x}", answer: "-\\frac{y}{2}"},
            {problem: "-\\frac{28ab}{56b}", answer: "-\\frac{a}{2}"},
            {problem: "\\frac{8a^2}{2}", answer: "4a^2"},
            {problem: "\\frac{8a^2}{a}", answer: "8a"},
            {problem: "\\frac{8a^2}{2a}", answer: "4a"},
            {problem: "\\frac{xy}{2x}", answer: "\\frac{y}{2}"},
            {problem: "\\frac{20x}{15xy}", answer: "\\frac{4}{3y}"},
            {problem: "\\frac{-15ab}{-5b}", answer: "3a"}
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
        const question = this.questions[questionIndex];
        
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
window.AlgebraLevels.cancellingMedium = new CancellingMedium();