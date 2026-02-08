// levels/addSubtractFractionsWithBinomialNumeratorHard.js
class AddSubtractFractionsWithBinomialNumeratorHardLevel {
    constructor() {
        this.key = 'addSubtractFractionsWithBinomialNumeratorHard';
        this.name = 'Adding Subtracting Fractions with Binomial Numerator (Hard)';
        this.usedQuestionIndices = new Set();
        
        // Predefined questions covering hard-level fraction operations with algebraic denominators
        this.questions = [
            // Provided textbook questions (algebraic denominators)
            {problem: "\\frac{3(a+b)}{4} - \\frac{a-b}{6}", answer: "\\frac{7a+11b}{12}"},
            {problem: "\\frac{b}{3x} + \\frac{7}{12}", answer: "\\frac{4b+7x}{12x}"},
            {problem: "\\frac{2x-1}{4} + \\frac{2-3x}{10x}", answer: "\\frac{10x^2-11x+4}{20x}"},
            {problem: "\\frac{a+1}{6a} + \\frac{a-4}{2a}", answer: "\\frac{4a-11}{6a}"},
            {problem: "\\frac{7}{12} - \\frac{3x+2}{3x}", answer: "\\frac{-5x-8}{12x}"},
            {problem: "\\frac{6b+7}{4b} - \\frac{3b-2}{5b}", answer: "\\frac{18b+43}{20b}"},
            {problem: "\\frac{8x+6}{5x} + \\frac{7x-3}{6x^2}", answer: "\\frac{48x^2+71x-15}{30x^2}"},
            {problem: "\\frac{9x-4}{6x} - \\frac{2x+5}{x^2}", answer: "\\frac{9x^2-16x-30}{6x^2}"},
            {problem: "\\frac{2x+3}{2x} - \\frac{1-3x}{x^2}", answer: "\\frac{2x^2+9x-2}{2x^2}"},
            {problem: "\\frac{4a-2}{3a^2} + \\frac{5}{4a^3}", answer: "\\frac{16a^2-8a+15}{12a^3}"},
            {problem: "\\frac{8x+6}{5x^3} + \\frac{7x-3}{6x^2}", answer: "\\frac{35x^2+33x+36}{30x^3}"},
            {problem: "\\frac{4-x}{6x^2} - \\frac{9x-4}{7x^3}", answer: "\\frac{-7x^2-26x+24}{42x^3}"},
            
            // Additional generated questions for variety (complex algebraic denominators)
            {problem: "\\frac{3x+1}{2x} + \\frac{x-2}{4x^2}", answer: "\\frac{6x^2+3x-2}{4x^2}"},
            {problem: "\\frac{5x-3}{3x} - \\frac{2x+1}{6x}", answer: "\\frac{8x-7}{6x}"},
            {problem: "\\frac{4x+7}{x^2} + \\frac{2x-1}{3x}", answer: "\\frac{2x^2+11x+21}{3x^2}"},
            {problem: "\\frac{7x-2}{4x} - \\frac{3x+5}{8x^2}", answer: "\\frac{14x^2-7x-5}{8x^2}"},
            {problem: "\\frac{2x+9}{5x^2} + \\frac{x-3}{2x}", answer: "\\frac{5x^2-11x+18}{10x^2}"},
            {problem: "\\frac{6x-1}{x^3} - \\frac{4x+3}{2x^2}", answer: "\\frac{-4x^2+9x-2}{2x^3}"},
            {problem: "\\frac{3x+4}{2x} + \\frac{x^2-1}{4x^3}", answer: "\\frac{6x^3+9x^2-1}{4x^3}"},
            {problem: "\\frac{5x-7}{3x^2} - \\frac{2x+1}{x}", answer: "\\frac{-6x^2+2x-7}{3x^2}"},
            {problem: "\\frac{4x+3}{x} + \\frac{x-6}{5x^2}", answer: "\\frac{20x^2+16x-6}{5x^2}"},
            {problem: "\\frac{2x-5}{7x^3} + \\frac{3x+2}{x^2}", answer: "\\frac{21x^2+16x-5}{7x^3}"},
            
            // More complex patterns with mixed variables
            {problem: "\\frac{2(x+y)}{3x} + \\frac{x-y}{6y}", answer: "\\frac{x^2+3xy+4y^2}{6xy}"},
            {problem: "\\frac{a+2b}{4a} - \\frac{a-b}{3b}", answer: "\\frac{-4a^2+7ab+6b^2}{12ab}"},
            {problem: "\\frac{3x+y}{2x} + \\frac{x-2y}{5y}", answer: "\\frac{2x^2+11xy+5y^2}{10xy}"},
            {problem: "\\frac{4x-y}{3x^2} + \\frac{2x+y}{y^2}", answer: "\\frac{6x^3+3x^2y+4xy^2-y^3}{3x^2y^2}"},
            
            // Advanced algebraic fraction combinations
            {problem: "\\frac{x^2+1}{2x} - \\frac{3x-2}{x^2}", answer: "\\frac{x^3-5x+4}{2x^2}"},
            {problem: "\\frac{2y^2-3}{3y^2} + \\frac{y+4}{y}", answer: "\\frac{5y^2+12y-3}{3y^2}"},
            {problem: "\\frac{x^2-4x}{4x} + \\frac{2x+1}{3x^2}", answer: "\\frac{3x^3-12x^2+8x+4}{12x^2}"},
            {problem: "\\frac{3x^2+x}{5x^3} - \\frac{2x-1}{x^2}", answer: "\\frac{-7x+6}{5x^2}"}
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
window.AlgebraLevels.addSubtractFractionsWithBinomialNumeratorHard = new AddSubtractFractionsWithBinomialNumeratorHardLevel();