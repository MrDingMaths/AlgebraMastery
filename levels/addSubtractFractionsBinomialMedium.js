// levels/addSubtractFractionsBinomialMedium.js
class AddSubtractFractionsBinomialMediumLevel {
    constructor() {
        this.key = 'addSubtractFractionsBinomialMedium';
        this.name = 'Adding Subtracting Fractions with Binomial Numerator (Medium)';
        this.usedQuestionIndices = new Set();
        
        // Predefined questions covering medium-level fraction operations with binomial numerators
        this.questions = [
            // Provided textbook questions
            {problem: "\\frac{9w}{10} - \\frac{w+5}{3}", answer: "\\frac{17w-50}{30}"},
            {problem: "\\frac{5a}{9} - \\frac{2a+5}{6}", answer: "\\frac{4a-15}{18}"},
            {problem: "\\frac{2a}{6} - \\frac{a-5}{8}", answer: "\\frac{5a+15}{24}"},
            {problem: "\\frac{x+3}{4} - \\frac{x+2}{3}", answer: "\\frac{-x+1}{12}"},
            {problem: "\\frac{3-x}{5} - \\frac{x+4}{2}", answer: "\\frac{-7x-14}{10}"},
            {problem: "\\frac{5x-1}{4} - \\frac{2+x}{8}", answer: "\\frac{9x-4}{8}"},
            {problem: "\\frac{1+3x}{4} - \\frac{2x+3}{6}", answer: "\\frac{5x-3}{12}"},
            {problem: "\\frac{x+5}{5} - \\frac{x-1}{2}", answer: "\\frac{-3x+15}{10}"},
            {problem: "\\frac{5x-9}{7} - \\frac{2-x}{3}", answer: "\\frac{22x-41}{21}"},
            {problem: "\\frac{4x+3}{3} - \\frac{5-2x}{9}", answer: "\\frac{14x+4}{9}"},
            {problem: "\\frac{2x-1}{4} - \\frac{1-3x}{14}", answer: "\\frac{20x-9}{28}"},
            {problem: "\\frac{3x-2}{8} - \\frac{4x-3}{7}", answer: "\\frac{-11x+10}{56}"},
            {problem: "\\frac{4p-3}{5} - \\frac{2p}{7}", answer: "\\frac{18p-21}{35}"},
            {problem: "\\frac{2x+3y}{6} + \\frac{5x-2y}{12}", answer: "\\frac{9x+4y}{12}"},
            {problem: "\\frac{2x-3y}{8} + \\frac{2y+x}{7}", answer: "\\frac{22x-5y}{56}"},
            {problem: "\\frac{y+4}{5} - \\frac{y-3}{6}", answer: "\\frac{y+39}{30}"},
            {problem: "\\frac{m-4}{8} - \\frac{m+6}{5}", answer: "\\frac{-3m-68}{40}"},
            {problem: "\\frac{x-2}{12} - \\frac{x-3}{8}", answer: "\\frac{-x+5}{24}"},
            {problem: "\\frac{2x+1}{2} - \\frac{x-2}{3}", answer: "\\frac{4x+7}{6}"},
            {problem: "\\frac{3-x}{14} - \\frac{x-1}{7}", answer: "\\frac{5-3x}{14}"},
            {problem: "\\frac{2x}{5} - \\frac{3x}{2} - \\frac{x}{3}", answer: "-\\frac{43x}{30}"},
            {problem: "\\frac{x}{4} - \\frac{2x}{3} + \\frac{5x}{6}", answer: "\\frac{5x}{12}"},
            {problem: "\\frac{5x}{8} - \\frac{5x}{6} + \\frac{3x}{4}", answer: "\\frac{13x}{24}"},
            {problem: "\\frac{x+1}{4} + \\frac{2x-1}{3} - \\frac{x}{5}", answer: "\\frac{43x-5}{60}"},
            {problem: "\\frac{2x-1}{3} - \\frac{2x}{7} + \\frac{x-3}{6}", answer: "\\frac{23x-35}{42}"},
            {problem: "\\frac{1-2x}{5} - \\frac{3x}{8} + \\frac{3x+1}{2}", answer: "\\frac{29x+28}{40}"},
            
            // Additional generated questions for variety (more complex patterns)
            {problem: "\\frac{3n-2}{5} - \\frac{n+1}{4}", answer: "\\frac{7n-13}{20}"},
            {problem: "\\frac{4t+1}{6} - \\frac{2t-3}{9}", answer: "\\frac{8t+9}{18}"},
            {problem: "\\frac{2s-7}{8} + \\frac{s+4}{12}", answer: "\\frac{8s-13}{24}"},
            {problem: "\\frac{3r+5}{7} - \\frac{r-2}{14}", answer: "\\frac{5r+12}{14}"},
            {problem: "\\frac{w-6}{9} + \\frac{2w+1}{6}", answer: "\\frac{8w-9}{18}"},
            {problem: "\\frac{5z-3}{12} - \\frac{z+2}{8}", answer: "\\frac{7z-12}{24}"},
            {problem: "\\frac{2v+7}{15} + \\frac{v-4}{10}", answer: "\\frac{7v+2}{30}"},
            {problem: "\\frac{4u-1}{9} - \\frac{3u+2}{12}", answer: "\\frac{7u-10}{36}"},
            {problem: "\\frac{3q+2}{8} - \\frac{q-5}{6}", answer: "\\frac{5q+26}{24}"},
            {problem: "\\frac{6h-4}{10} + \\frac{2h+3}{15}", answer: "\\frac{11h-3}{15}"}
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
window.AlgebraLevels.addSubtractFractionsBinomialMedium = new AddSubtractFractionsBinomialMediumLevel();