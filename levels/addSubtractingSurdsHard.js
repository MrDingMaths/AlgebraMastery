// levels/addSubtractingSurdsHard.js
class AddSubtractingSurdsHardLevel {
    constructor() {
        this.key = 'addSubtractingSurdsHard';
        this.name = 'Adding/Subtracting Surds (Hard)';
        this.usedQuestionIndices = new Set();
        
        // Hard level: Fractional coefficients, complex algebraic manipulation
        this.questions = [
            // Fractional coefficients from textbook
            {problem: "\\frac{\\sqrt{8}}{3} - \\frac{\\sqrt{2}}{5}", answer: "\\frac{7\\sqrt{2}}{15}"},
            {problem: "\\frac{\\sqrt{12}}{4} + \\frac{\\sqrt{3}}{6}", answer: "\\frac{2\\sqrt{3}}{3}"},
            {problem: "\\frac{3\\sqrt{5}}{4} - \\frac{\\sqrt{20}}{3}", answer: "\\frac{\\sqrt{5}}{12}"},
            {problem: "\\frac{\\sqrt{98}}{4} - \\frac{5\\sqrt{2}}{2}", answer: "-\\frac{3\\sqrt{2}}{4}"},
            {problem: "\\frac{2\\sqrt{75}}{5} - \\frac{3\\sqrt{3}}{2}", answer: "\\frac{\\sqrt{3}}{2}"},
            {problem: "\\frac{\\sqrt{63}}{9} - \\frac{4\\sqrt{7}}{5}", answer: "-\\frac{7\\sqrt{7}}{15}"},
            {problem: "\\frac{2\\sqrt{18}}{3} - \\frac{\\sqrt{72}}{2}", answer: "-\\sqrt{2}"},
            {problem: "\\frac{\\sqrt{54}}{4} + \\frac{\\sqrt{24}}{7}", answer: "\\frac{29\\sqrt{6}}{28}"},
            {problem: "\\frac{\\sqrt{27}}{5} - \\frac{\\sqrt{108}}{10}", answer: "0"},
            {problem: "\\frac{5\\sqrt{48}}{6} + \\frac{2\\sqrt{147}}{3}", answer: "8\\sqrt{3}"},
            {problem: "\\frac{2\\sqrt{96}}{5} - \\frac{\\sqrt{600}}{7}", answer: "\\frac{6\\sqrt{6}}{35}"},
            {problem: "\\frac{3\\sqrt{125}}{14} - \\frac{2\\sqrt{80}}{21}", answer: "\\frac{29\\sqrt{5}}{42}"},
            
            // Additional complex fractional problems
            {problem: "\\frac{\\sqrt{32}}{6} + \\frac{3\\sqrt{2}}{4}", answer: "\\frac{17\\sqrt{2}}{12}"},
            {problem: "\\frac{2\\sqrt{50}}{7} - \\frac{\\sqrt{18}}{3}", answer: "\\frac{3\\sqrt{2}}{7}"},
            {problem: "\\frac{4\\sqrt{27}}{9} + \\frac{\\sqrt{12}}{6}", answer: "\\frac{5\\sqrt{3}}{3}"},
            {problem: "\\frac{\\sqrt{45}}{8} - \\frac{2\\sqrt{20}}{5}", answer: "-\\frac{17\\sqrt{5}}{40}"},
            
            // Mixed integer and fractional coefficients
            {problem: "2\\sqrt{3} + \\frac{\\sqrt{12}}{3}", answer: "\\frac{8\\sqrt{3}}{3}"},
            {problem: "\\frac{\\sqrt{18}}{2} - 3\\sqrt{2}", answer: "-\\frac{3\\sqrt{2}}{2}"},
            {problem: "\\sqrt{5} + \\frac{2\\sqrt{45}}{3}", answer: "3\\sqrt{5}"},
            {problem: "\\frac{3\\sqrt{8}}{4} - \\sqrt{2}", answer: "\\frac{\\sqrt{2}}{2}"},
            
            // Complex multi-term expressions with fractions
            {problem: "\\frac{\\sqrt{12}}{3} + \\frac{2\\sqrt{27}}{9} - \\frac{\\sqrt{3}}{6}", answer: "\\frac{7\\sqrt{3}}{6}"},
            {problem: "\\frac{2\\sqrt{18}}{5} - \\frac{\\sqrt{8}}{4} + \\frac{3\\sqrt{2}}{10}", answer: "\\sqrt{2}"},
            {problem: "\\frac{\\sqrt{32}}{8} + \\frac{3\\sqrt{50}}{10} - \\frac{\\sqrt{2}}{4}", answer: "\\frac{7\\sqrt{2}}{4}"},
            {problem: "\\frac{4\\sqrt{75}}{15} - \\frac{\\sqrt{48}}{6} + \\frac{2\\sqrt{3}}{5}", answer: "\\frac{16\\sqrt{3}}{15}"},
            
            // Denominators requiring simplification
            {problem: "\\frac{\\sqrt{72}}{\\sqrt{8}} + \\frac{\\sqrt{50}}{\\sqrt{2}}", answer: "8"},
            {problem: "\\frac{\\sqrt{98}}{\\sqrt{2}} - \\frac{\\sqrt{128}}{\\sqrt{32}}", answer: "5"},
            {problem: "\\frac{2\\sqrt{108}}{\\sqrt{12}} + \\frac{\\sqrt{75}}{\\sqrt{3}}", answer: "11"},
            {problem: "\\frac{3\\sqrt{200}}{\\sqrt{50}} - \\frac{\\sqrt{162}}{\\sqrt{18}}", answer: "3"},
            
            // Nested radicals and complex expressions
            {problem: "\\frac{\\sqrt{\\sqrt{16}} + \\sqrt{4}}{2}", answer: "2"},
            {problem: "\\sqrt{\\frac{9}{4}} + \\frac{\\sqrt{36}}{4}", answer: "3"},
            {problem: "\\frac{\\sqrt{25 \\times 4}}{5} - \\frac{\\sqrt{9}}{3}", answer: "1"},
            {problem: "\\sqrt{\\frac{49}{9}} + \\frac{2\\sqrt{7}}{3}", answer: "\\frac{7 + 2\\sqrt{7}}{3}"},
            
            // Algebraic manipulation with surds
            {problem: "\\frac{\\sqrt{a^2 \\times 3}}{a} + \\frac{2\\sqrt{3a^2}}{3a}", answer: "\\frac{5\\sqrt{3}}{3}"},
            {problem: "\\sqrt{\\frac{x^2}{4}} + \\frac{\\sqrt{4x^2}}{2}", answer: "\\frac{3x}{2}"},
                        
            // Mixed rational and irrational with fractions
            {problem: "\\frac{\\sqrt{64}}{4} + \\frac{2\\sqrt{7}}{3} - \\frac{1}{2}", answer: "\\frac{3}{2} + \\frac{2\\sqrt{7}}{3}"},
            {problem: "\\frac{\\sqrt{144}}{6} - \\frac{\\sqrt{5}}{2} + \\frac{3}{4}", answer: "\\frac{11}{4} - \\frac{\\sqrt{5}}{2}"},
            
            // Advanced simplification patterns
            {problem: "\\frac{\\sqrt{150} + \\sqrt{54}}{6}", answer: "\\frac{4\\sqrt{6}}{3}"},
            {problem: "\\frac{2\\sqrt{72} - \\sqrt{32}}{4}", answer: "2\\sqrt{2}"},
            {problem: "\\frac{3\\sqrt{98} + \\sqrt{128}}{14}", answer: "\\frac{29\\sqrt{2}}{14}"},
            
            // Challenging zero results
            {problem: "\\frac{\\sqrt{48}}{6} - \\frac{2\\sqrt{3}}{3}", answer: "0"},
            {problem: "\\frac{3\\sqrt{32}}{8} - \\frac{3\\sqrt{2}}{2}", answer: "0"},
            {problem: "\\frac{\\sqrt{75}}{5} - \\frac{\\sqrt{27}}{3}", answer: "0"}            
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
window.AlgebraLevels.addSubtractingSurdsHard = new AddSubtractingSurdsHardLevel();