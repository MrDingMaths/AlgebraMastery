// levels/addSubtractAlgebraicFractionsEasy.js
class AddSubtractAlgebraicFractionsEasyLevel {
    constructor() {
        this.key = 'addSubtractAlgebraicFractionsEasy';
        this.name = 'Adding Subtracting Algebraic Fractions (Easy)';
        this.usedQuestionIndices = new Set();
        
        // Predefined questions covering basic algebraic fractions with same denominators
        this.questions = [

            // Textbook questions
            {problem: "\\frac{x}{4} + \\frac{2x}{4}", answer: "\\frac{3x}{4}"},
            {problem: "\\frac{5a}{3} + \\frac{2a}{3}", answer: "\\frac{7a}{3}"},
            {problem: "\\frac{2b}{5} + \\frac{b}{5}", answer: "\\frac{3b}{5}"},
            {problem: "\\frac{4k}{3} + \\frac{k}{3}", answer: "\\frac{5k}{3}"},
            {problem: "\\frac{3y}{5} - \\frac{y}{5}", answer: "\\frac{2y}{5}"},
            {problem: "\\frac{7p}{13} - \\frac{2p}{13}", answer: "\\frac{5p}{13}"},
            {problem: "\\frac{10r}{7} - \\frac{2r}{7}", answer: "\\frac{8r}{7}"},
            {problem: "\\frac{8q}{5} - \\frac{2q}{5}", answer: "\\frac{6q}{5}"},
            {problem: "\\frac{1}{a} + \\frac{1}{a}", answer: "\\frac{2}{a}"},
            {problem: "\\frac{1}{x} - \\frac{2}{x}", answer: "-\\frac{1}{x}"},
        
            // Additional questions for cognitive complexity
            {problem: "\\frac{2x}{3} + \\frac{x}{3}", answer: "x"},
            {problem: "\\frac{4m}{7} + \\frac{3m}{7}", answer: "m"},
            {problem: "\\frac{6n}{5} - \\frac{n}{5}", answer: "n"},
            {problem: "\\frac{9t}{8} - \\frac{4t}{8}", answer: "\\frac{5t}{8}"},
            {problem: "\\frac{3w}{2} + \\frac{5w}{2}", answer: "4w"},
            {problem: "\\frac{7v}{4} - \\frac{2v}{4}", answer: "\\frac{5v}{4}"},
            {problem: "\\frac{2s}{9} + \\frac{4s}{9}", answer: "\\frac{2s}{3}"},
            {problem: "\\frac{8u}{11} - \\frac{3u}{11}", answer: "\\frac{5u}{11}"},
            {problem: "\\frac{5z}{6} + \\frac{z}{6}", answer: "z"},
            {problem: "\\frac{12d}{13} - \\frac{7d}{13}", answer: "\\frac{5d}{13}"},
            
            // Same denominators with different variables
            {problem: "\\frac{3}{y} + \\frac{2}{y}", answer: "\\frac{5}{y}"},
            {problem: "\\frac{7}{m} - \\frac{3}{m}", answer: "\\frac{4}{m}"},
            {problem: "\\frac{4}{t} + \\frac{5}{t}", answer: "\\frac{9}{t}"},
            {problem: "\\frac{8}{w} - \\frac{2}{w}", answer: "\\frac{6}{w}"},
            {problem: "\\frac{6}{s} + \\frac{3}{s}", answer: "\\frac{9}{s}"},
            {problem: "\\frac{9}{v} - \\frac{4}{v}", answer: "\\frac{5}{v}"},
            {problem: "\\frac{5}{z} + \\frac{7}{z}", answer: "\\frac{12}{z}"},
            {problem: "\\frac{11}{d} - \\frac{6}{d}", answer: "\\frac{5}{d}"},
        
            // More complex numerators with same denominators
            {problem: "\\frac{2a}{5} + \\frac{3a}{5}", answer: "a"},
            {problem: "\\frac{4b}{7} - \\frac{b}{7}", answer: "\\frac{3b}{7}"},
            {problem: "\\frac{6c}{11} + \\frac{2c}{11}", answer: "\\frac{8c}{11}"},
            {problem: "\\frac{9e}{13} - \\frac{5e}{13}", answer: "\\frac{4e}{13}"},
            {problem: "\\frac{7f}{9} + \\frac{4f}{9}", answer: "\\frac{11f}{9}"},
            {problem: "\\frac{8g}{15} - \\frac{3g}{15}", answer: "\\frac{g}{3}"},
            
            // Fractions that simplify to whole numbers or simpler forms
            {problem: "\\frac{4h}{4} + \\frac{2h}{4}", answer: "\\frac{3h}{2}"},
            {problem: "\\frac{6j}{6} - \\frac{2j}{6}", answer: "\\frac{2j}{3}"},
            {problem: "\\frac{8k}{8} + \\frac{k}{8}", answer: "\\frac{9k}{8}"},
            {problem: "\\frac{10l}{10} - \\frac{3l}{10}", answer: "\\frac{7l}{10}"},
            
            // Mixed addition and subtraction patterns
            {problem: "\\frac{x}{12} + \\frac{5x}{12}", answer: "\\frac{x}{2}"},
            {problem: "\\frac{3y}{14} - \\frac{y}{14}", answer: "\\frac{y}{7}"},
            {problem: "\\frac{7z}{16} + \\frac{9z}{16}", answer: "z"},
            {problem: "\\frac{11a}{18} - \\frac{4a}{18}", answer: "\\frac{7a}{18}"}
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
window.AlgebraLevels.addSubtractAlgebraicFractionsEasy = new AddSubtractAlgebraicFractionsEasyLevel();