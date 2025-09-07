// levels/addSubtractFractionsBinomialHard.js
class AddSubtractFractionsBinomialHardLevel {
    constructor() {
        this.key = 'addSubtractFractionsBinomialHard';
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
            {problem: "\\frac{8c+6}{5c} + \\frac{7c-3}{6c^2}", answer: "\\frac{48c^2+71c-15}{30c^2}"},
            {problem: "\\frac{9d-4}{6d} - \\frac{2d+5}{d^2}", answer: "\\frac{9d^2-16d-30}{6d^2}"},
            {problem: "\\frac{2x+3}{2x} - \\frac{1-3x}{x^2}", answer: "\\frac{2x^2+9x-2}{2x^2}"},
            {problem: "\\frac{4a-2}{3a^2} + \\frac{5}{4a^3}", answer: "\\frac{16a^2-8a+15}{12a^3}"},
            {problem: "\\frac{8c+6}{5c^3} + \\frac{7c-3}{6c^2}", answer: "\\frac{35c^2+33c+36}{30c^3}"},
            {problem: "\\frac{4-d}{6d^2} - \\frac{9d-4}{7d^3}", answer: "\\frac{-7d^2-26d+24}{42d^3}"},
            
            // Additional generated questions for variety (complex algebraic denominators)
            {problem: "\\frac{3n+1}{2n} + \\frac{n-2}{4n^2}", answer: "\\frac{6n^2+3n-2}{4n^2}"},
            {problem: "\\frac{5t-3}{3t} - \\frac{2t+1}{6t}", answer: "\\frac{8t-7}{6t}"},
            {problem: "\\frac{4s+7}{s^2} + \\frac{2s-1}{3s}", answer: "\\frac{2s^2+11s+21}{3s^2}"},
            {problem: "\\frac{7r-2}{4r} - \\frac{3r+5}{8r^2}", answer: "\\frac{14r^2-7r-5}{8r^2}"},
            {problem: "\\frac{2w+9}{5w^2} + \\frac{w-3}{2w}", answer: "\\frac{5w^2-11w+18}{10w^2}"},
            {problem: "\\frac{6z-1}{z^3} - \\frac{4z+3}{2z^2}", answer: "\\frac{-4z^2+9z-2}{2z^3}"},
            {problem: "\\frac{3v+4}{2v} + \\frac{v^2-1}{4v^3}", answer: "\\frac{6v^3+9v^2-1}{4v^3}"},
            {problem: "\\frac{5u-7}{3u^2} - \\frac{2u+1}{u}", answer: "\\frac{-6u^2+2u-7}{3u^2}"},
            {problem: "\\frac{4q+3}{q} + \\frac{q-6}{5q^2}", answer: "\\frac{20q^2+16q-6}{5q^2}"},
            {problem: "\\frac{2h-5}{7h^3} + \\frac{3h+2}{h^2}", answer: "\\frac{21h^2+16h-5}{7h^3}"},
            
            // More complex patterns with mixed variables
            {problem: "\\frac{2(x+y)}{3x} + \\frac{x-y}{6y}", answer: "\\frac{x^2+3xy+4y^2}{6xy}"},
            {problem: "\\frac{a+2b}{4a} - \\frac{a-b}{3b}", answer: "\\frac{-4a^2+7ab+6b^2}{12ab}"},
            {problem: "\\frac{3m+n}{2m} + \\frac{m-2n}{5n}", answer: "\\frac{2m^2+11mn+5n^2}{10mn}"},
            {problem: "\\frac{4p-q}{3p^2} + \\frac{2p+q}{q^2}", answer: "\\frac{6p^3+3p^2q+4pq^2-q^3}{3p^2q^2}"},
            
            // Advanced algebraic fraction combinations
            {problem: "\\frac{x^2+1}{2x} - \\frac{3x-2}{x^2}", answer: "\\frac{x^3-5x+4}{2x^2}"},
            {problem: "\\frac{2y^2-3}{3y^2} + \\frac{y+4}{y}", answer: "\\frac{5y^2+12y-3}{3y^2}"},
            {problem: "\\frac{z^2-4z}{4z} + \\frac{2z+1}{3z^2}", answer: "\\frac{3z^3-12z^2+8z+4}{12z^2}"},
            {problem: "\\frac{3t^2+t}{5t^3} - \\frac{2t-1}{t^2}", answer: "\\frac{-7t+6}{5t^2}"}
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
window.AlgebraLevels.addSubtractFractionsBinomialHard = new AddSubtractFractionsBinomialHardLevel();