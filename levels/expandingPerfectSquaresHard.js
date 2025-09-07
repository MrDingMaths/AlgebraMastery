class ExpandingPerfectSquaresHard {
    constructor() {
        this.key = 'expandingPerfectSquaresHard';
        this.name = 'Expanding Perfect Squares (Hard)';
        this.usedQuestionIndices = new Set();
        
        // Predefined questions covering advanced perfect square expansion
        this.questions = [
            // Fractions with variables
            {problem: "(x + \\frac{1}{3})^2", answer: "x^2 + \\frac{2}{3}x + \\frac{1}{9}"},
            {problem: "(x - \\frac{2}{5})^2", answer: "x^2 - \\frac{4}{5}x + \\frac{4}{25}"},
            {problem: "(3x + \\frac{5}{7})^2", answer: "9x^2 + \\frac{30}{7}x + \\frac{25}{49}"},
            {problem: "(3x + \\frac{2}{5})^2", answer: "9x^2 + \\frac{12}{5}x + \\frac{4}{25}"},
            {problem: "(\\frac{x}{5} - \\frac{3}{8})^2", answer: "\\frac{x^2}{25} - \\frac{3x}{20} + \\frac{9}{64}"},
            {problem: "(\\frac{2x}{3} + \\frac{9y}{8})^2", answer: "\\frac{4x^2}{9} + \\frac{3xy}{2} + \\frac{81y^2}{64}"},
            
            // Reciprocal terms
            {problem: "(t + \\frac{1}{t})^2", answer: "t^2 + 2 + \\frac{1}{t^2}"},
            {problem: "(t - \\frac{1}{t})^2", answer: "t^2 - 2 + \\frac{1}{t^2}"},
            {problem: "(2 + \\frac{2}{a})^2", answer: "4 + \\frac{8}{a} + \\frac{4}{a^2}"},
            {problem: "(\\frac{6}{m} - m)^2", answer: "m^2 - 12 + \\frac{36}{m^2}"},
            {problem: "(\\frac{3}{x} + 3x)^2", answer: "9x^2 + 18 + \\frac{9}{x^2}"},
            
            // Higher powers with coefficients
            {problem: "(2x^2 + 3y^2)^2", answer: "4x^4 + 12x^2y^2 + 9y^4"},
            {problem: "(5a^3 - 2b^4)^2", answer: "25a^6 - 20a^3b^4 + 4b^8"},
            {problem: "(m^5 + 4n^2)^2", answer: "m^{10} + 8m^5n^2 + 16n^4"},
            {problem: "(3x^4 - 5y^3)^2", answer: "9x^8 - 30x^4y^3 + 25y^6"},
            
            // Fractions with powers
            {problem: "(x^2 + \\frac{1}{2})^2", answer: "x^4 + x^2 + \\frac{1}{4}"},
            {problem: "(y^3 - \\frac{1}{3})^2", answer: "y^6 - \\frac{2}{3}y^3 + \\frac{1}{9}"},
            {problem: "(\\frac{a^3}{2} - \\frac{b^2}{3})^2", answer: "\\frac{a^6}{4} - \\frac{a^3b^2}{3} + \\frac{b^4}{9}"},
            {problem: "(2p^3 + \\frac{1}{p})^2", answer: "4p^6 + 4p^2 + \\frac{1}{p^2}"},
            
            // Additional complex fraction examples
            {problem: "(x + \\frac{1}{2})^2", answer: "x^2 + x + \\frac{1}{4}"},
            {problem: "(x - \\frac{3}{4})^2", answer: "x^2 - \\frac{3}{2}x + \\frac{9}{16}"},
            {problem: "(2x + \\frac{1}{4})^2", answer: "4x^2 + x + \\frac{1}{16}"},
            {problem: "(\\frac{x}{2} + \\frac{1}{3})^2", answer: "\\frac{x^2}{4} + \\frac{x}{3} + \\frac{1}{9}"},
            {problem: "(\\frac{x}{3} - \\frac{2}{5})^2", answer: "\\frac{x^2}{9} - \\frac{4x}{15} + \\frac{4}{25}"},
            
            // More reciprocal variations
            {problem: "(\\frac{2}{x} + x)^2", answer: "x^2 + 4 + \\frac{4}{x^2}"},
            {problem: "(\\frac{1}{x} - 2x)^2", answer: "4x^2 - 4 + \\frac{1}{x^2}"},
            {problem: "(3 + \\frac{1}{3x})^2", answer: "9 + \\frac{2}{x} + \\frac{1}{9x^2}"},
            {problem: "(\\frac{5}{2x} - \\frac{x}{2})^2", answer: "\\frac{x^2}{4} - \\frac{5}{2} + \\frac{25}{4x^2}"},
            
            // Complex power combinations
            {problem: "(x^3 + 2y^2)^2", answer: "x^6 + 4x^3y^2 + 4y^4"},
            {problem: "(3a^2 - b^3)^2", answer: "9a^4 - 6a^2b^3 + b^6"},
            {problem: "(2m^4 + 3n^3)^2", answer: "4m^8 + 12m^4n^3 + 9n^6"},
            {problem: "(4p^5 - q^2)^2", answer: "16p^{10} - 8p^5q^2 + q^4"},
            
            // Mixed fraction and power terms
            {problem: "(\\frac{x^2}{3} + \\frac{2}{x})^2", answer: "\\frac{x^4}{9} + \\frac{4x}{3} + \\frac{4}{x^2}"},
            {problem: "(\\frac{3}{y^2} - y^3)^2", answer: "y^6 - 6y + \\frac{9}{y^4}"},
            {problem: "(2x^2 + \\frac{1}{3x})^2", answer: "4x^4 + \\frac{4x}{3} + \\frac{1}{9x^2}"},
            
            // Complex coefficient fractions
            {problem: "(\\frac{3x}{4} + \\frac{5y}{6})^2", answer: "\\frac{9x^2}{16} + \\frac{5xy}{4} + \\frac{25y^2}{36}"},
            {problem: "(\\frac{2a}{5} - \\frac{3b}{7})^2", answer: "\\frac{4a^2}{25} - \\frac{12ab}{35} + \\frac{9b^2}{49}"},
            {problem: "(\\frac{4m}{3} + \\frac{n}{2})^2", answer: "\\frac{16m^2}{9} + \\frac{4mn}{3} + \\frac{n^2}{4}"},
            
            // Very advanced combinations
            {problem: "(\\sqrt{2}x + \\frac{1}{\\sqrt{2}})^2", answer: "2x^2 + 2x + \\frac{1}{2}"},
            {problem: "(\\frac{x^4}{4} + \\frac{2}{x^2})^2", answer: "\\frac{x^8}{16} + x^2 + \\frac{4}{x^4}"},
            {problem: "(3x^{\\frac{1}{2}} + \\frac{1}{x^{\\frac{1}{2}}})^2", answer: "9x + 6 + \\frac{1}{x}"},
            
            // Additional challenging examples
            {problem: "(\\frac{2x}{7} + \\frac{3}{14})^2", answer: "\\frac{4x^2}{49} + \\frac{6x}{49} + \\frac{9}{196}"},
            {problem: "(\\frac{5y}{8} - \\frac{1}{4y})^2", answer: "\\frac{25y^2}{64} - \\frac{5}{16} + \\frac{1}{16y^2}"},
            {problem: "(\\frac{a^5}{6} + \\frac{3b^3}{4})^2", answer: "\\frac{a^{10}}{36} + \\frac{a^5b^3}{4} + \\frac{9b^6}{16}"},
            
            // Final complex variations
            {problem: "(\\frac{7}{3x^2} + \\frac{x^3}{5})^2", answer: "\\frac{x^6}{25} + \\frac{14x}{15} + \\frac{49}{9x^4}"},
            {problem: "(\\frac{4m^2}{9} - \\frac{2}{3m})^2", answer: "\\frac{16m^4}{81} - \\frac{16m}{27} + \\frac{4}{9m^2}"}
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
window.AlgebraLevels.expandingPerfectSquaresHard = new ExpandingPerfectSquaresHard();