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
            {problem: "-10x ÷ 5", answer: "-2x"},
            {problem: "6x ÷ (-3)", answer: "-2x"},
            {problem: "8y ÷ (-4)", answer: "-2y"},
            {problem: "-9b ÷ (-3)", answer: "3b"},
            {problem: "-15x ÷ (-5)", answer: "3x"},
            {problem: "-7x ÷ 14", answer: "-\\frac{x}{2}"},
            {problem: "21x ÷ (-7)", answer: "-3x"},
            
            // Category 3: Multi-Variable Cancelling with Coefficients
            {problem: "15ax ÷ 5a", answer: "3x"},
            {problem: "18xya ÷ 6x", answer: "3ya"},
            {problem: "21xya ÷ 7x", answer: "3ya"},
            {problem: "24xya ÷ 8x", answer: "3ya"},
            {problem: "30xy ÷ 10yx", answer: "3"},
            
            // Category 5: Denominator Higher Powers with Coefficients
            {problem: "8abx ÷ 4ab^2x", answer: "\\frac{2}{b}"},
            
            // Category 6: Mixed Power Combinations (2-3 operations)
            {problem: "12x^2y^3 ÷ 4xy^2", answer: "3xy"},
            {problem: "18a^3b^2 ÷ 6a^2b", answer: "3ab"},
            {problem: "7x^2y ÷ 14x^3y^2", answer: "\\frac{1}{2xy}"},
            
            // Category 7: Fractions That Don't Fully Cancel (Requiring simplification)
            {problem: "6x ÷ 9", answer: "\\frac{2x}{3}"},
            {problem: "8y ÷ 12", answer: "\\frac{2y}{3}"},
            {problem: "15x ÷ 20", answer: "\\frac{3x}{4}"},
            {problem: "4ab ÷ 6b", answer: "\\frac{2a}{3}"},
            {problem: "8xy ÷ 14y", answer: "\\frac{4x}{7}"},
            {problem: "15xy ÷ 25y", answer: "\\frac{3x}{5}"},
            {problem: "12abx ÷ 30x", answer: "\\frac{2ab}{5}"},
            {problem: "20xya ÷ 30ya", answer: "\\frac{2x}{3}"},
            {problem: "14xya ÷ 28a", answer: "\\frac{xy}{2}"},
            {problem: "16xya ÷ 24ya", answer: "\\frac{2x}{3}"},
            
            // Category 8: Three Variable Expressions (Managing multiple cancellations)
            {problem: "24abxy ÷ 8abx", answer: "3y"},
            {problem: "30axyb ÷ 12axy", answer: "\\frac{5b}{2}"},
            {problem: "36xyab ÷ 9xya", answer: "4b"},
            {problem: "42abx ÷ 14ab", answer: "3x"},
            {problem: "60xya ÷ 20xy", answer: "3a"},
            
            
            // Textbook Questions - Medium Level
            {problem: "\\frac{9ab}{4b}", answer: "\\frac{9a}{4}"},
            {problem: "\\frac{2ab}{5a}", answer: "\\frac{2b}{5}"},
            {problem: "\\frac{4xy}{2x}", answer: "2y"},
            {problem: "\\frac{9x}{3xy}", answer: "\\frac{3}{y}"},
            {problem: "\\frac{7x}{14y}", answer: "\\frac{x}{2y}"},
            {problem: "\\frac{10xy}{12y}", answer: "\\frac{5x}{6}"},
            {problem: "\\frac{ab}{4b}", answer: "\\frac{a}{4}"},
            {problem: "\\frac{7xya}{21ya}", answer: "\\frac{x}{3}"},
            {problem: "\\frac{2}{12x}", answer: "\\frac{1}{6x}"},
            {problem: "\\frac{-4}{-3a}", answer: "\\frac{4}{3a}"},
            {problem: "\\frac{11xy}{3}", answer: "\\frac{11xy}{3}"},
            {problem: "\\frac{-10}{2xy}", answer: "-\\frac{5}{xy}"},
            {problem: "\\frac{-3xy}{yx}", answer: "-3"},
            {problem: "\\frac{7xy}{3x}", answer: "\\frac{7y}{3}"},
            {problem: "\\frac{3xy}{6y}", answer: "\\frac{x}{2}"},
            {problem: "-\\frac{2a}{6}", answer: "-\\frac{a}{3}"},
            {problem: "\\frac{4ab}{6}", answer: "\\frac{2ab}{3}"},
            {problem: "-\\frac{5xy}{20y}", answer: "-\\frac{x}{4}"},
            {problem: "\\frac{10xy}{6y}", answer: "\\frac{5x}{3}"},
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