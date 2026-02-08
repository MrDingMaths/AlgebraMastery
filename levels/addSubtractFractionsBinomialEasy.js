// levels/addSubtractFractionsBinomialEasy.js
class AddSubtractFractionsBinomialEasyLevel {
    constructor() {
        this.key = 'addSubtractFractionsBinomialEasy';
        this.name = 'Adding Subtracting Fractions with Binomial Numerator (Easy)';
        this.usedQuestionIndices = new Set();
        
        // Predefined questions covering basic fraction addition/subtraction with binomial numerators
        this.questions = [
            // Provided textbook questions
            {problem: "\\frac{x}{3} + \\frac{x+5}{4}", answer: "\\frac{7x+15}{12}"},
            {problem: "\\frac{x}{3} + \\frac{x+2}{4}", answer: "\\frac{7x+6}{12}"},
            {problem: "\\frac{x}{2} + \\frac{3x}{4}", answer: "\\frac{5x}{4}"},
            {problem: "\\frac{y+1}{5} + \\frac{2y}{3}", answer: "\\frac{13y+3}{15}"},
            {problem: "\\frac{a+2}{3} - \\frac{a}{4}", answer: "\\frac{a+8}{12}"},
            {problem: "\\frac{x+4}{3} + \\frac{x-2}{5}", answer: "\\frac{8x+14}{15}"},
            {problem: "\\frac{x+2}{3} + \\frac{x+1}{4}", answer: "\\frac{7x+11}{12}"},
            {problem: "\\frac{x-3}{4} + \\frac{x+2}{2}", answer: "\\frac{3x+1}{4}"},
            {problem: "\\frac{2x+1}{2} + \\frac{x-2}{3}", answer: "\\frac{8x-1}{6}"},
            {problem: "\\frac{3y-5}{4} + \\frac{2y-7}{10}", answer: "\\frac{19y-39}{20}"},
            {problem: "\\frac{5x+3}{14} + \\frac{2x-2}{3}", answer: "\\frac{43x-19}{42}"},
            {problem: "\\frac{3-x}{14} + \\frac{x-1}{7}", answer: "\\frac{x+1}{14}"},
            {problem: "\\frac{x+1}{2} + \\frac{x+3}{5}", answer: "\\frac{7x+11}{10}"},
            {problem: "\\frac{x+3}{3} + \\frac{x-4}{4}", answer: "\\frac{7x}{12}"},
            {problem: "\\frac{a-2}{7} + \\frac{a-5}{8}", answer: "\\frac{15a-51}{56}"},
            {problem: "\\frac{y+4}{5} + \\frac{y-3}{6}", answer: "\\frac{11y+9}{30}"},
            {problem: "\\frac{x-4}{8} + \\frac{x+6}{5}", answer: "\\frac{13x+28}{40}"},
            {problem: "\\frac{x-2}{12} + \\frac{x-3}{8}", answer: "\\frac{5x-13}{24}"},
            {problem: "\\frac{2b-3}{6} + \\frac{b+2}{8}", answer: "\\frac{11b-6}{24}"},
            {problem: "\\frac{3x+8}{6} + \\frac{2x-4}{3}", answer: "\\frac{7x}{6}"},
            {problem: "\\frac{2y-5}{7} + \\frac{3y+2}{14}", answer: "\\frac{7y-8}{14}"},
            {problem: "\\frac{2x-1}{8} + \\frac{x-2}{16}", answer: "\\frac{5x-4}{16}"},
            {problem: "\\frac{3x+1}{10} + \\frac{2x+1}{10}", answer: "\\frac{5x+2}{10}"},
            {problem: "\\frac{5x+3}{10} + \\frac{2x-2}{4}", answer: "\\frac{5x-1}{5}"},
            {problem: "\\frac{4-x}{3} + \\frac{2-x}{7}", answer: "\\frac{34-10x}{21}"},
            
            // Additional generated questions for variety (basic patterns)
            {problem: "\\frac{x}{2} + \\frac{x+3}{4}", answer: "\\frac{3x+3}{4}"},
            {problem: "\\frac{x}{5} + \\frac{x+1}{2}", answer: "\\frac{7x+5}{10}"},
            {problem: "\\frac{x+1}{3} + \\frac{x}{6}", answer: "\\frac{3x+2}{6}"},
            {problem: "\\frac{x-1}{4} + \\frac{x+3}{8}", answer: "\\frac{3x+1}{8}"},
            {problem: "\\frac{x}{3} + \\frac{2x+1}{6}", answer: "\\frac{4x+1}{6}"},
            {problem: "\\frac{x+2}{2} + \\frac{x-1}{4}", answer: "\\frac{3x+3}{4}"},
            {problem: "\\frac{x}{4} + \\frac{x+2}{3}", answer: "\\frac{7x+8}{12}"},
            {problem: "\\frac{x+1}{6} + \\frac{x}{2}", answer: "\\frac{4x+1}{6}"},
            {problem: "\\frac{x-2}{3} + \\frac{2x}{5}", answer: "\\frac{11x-10}{15}"},
            {problem: "\\frac{x+3}{4} + \\frac{x+1}{6}", answer: "\\frac{5x+11}{12}"}
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
window.AlgebraLevels.addSubtractFractionsBinomialEasy = new AddSubtractFractionsBinomialEasyLevel();