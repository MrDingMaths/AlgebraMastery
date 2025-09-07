// levels/addSubtractAlgebraicFractionsHard.js
class AddSubtractAlgebraicFractionsHardLevel {
    constructor() {
        this.key = 'addSubtractAlgebraicFractionsHard';
        this.name = 'Adding Subtracting Algebraic Fractions (Hard)';
        this.usedQuestionIndices = new Set();
        
        // Predefined questions covering complex algebraic fractions with different variables, powers, and complex expressions
        this.questions = [

            // Textbook questions
            {problem: "\\frac{10u}{3} + \\frac{3v}{10}", answer: "\\frac{100u + 9v}{30}"},
            {problem: "\\frac{7y}{10} - \\frac{2x}{5}", answer: "\\frac{7y - 4x}{10}"},
            {problem: "2t + \\frac{7p}{2}", answer: "\\frac{4t + 7p}{2}"},
            {problem: "\\frac{x}{3} - y", answer: "\\frac{x - 3y}{3}"},
            {problem: "5 - \\frac{2x}{7}", answer: "\\frac{35 - 2x}{7}"},
            {problem: "\\frac{1}{a} + \\frac{1}{2a}", answer: "\\frac{3}{2a}"},
            {problem: "\\frac{1}{2x} - \\frac{1}{3x}", answer: "\\frac{1}{6x}"},
            {problem: "\\frac{3}{4a} + \\frac{4}{3a}", answer: "\\frac{25}{12a}"},
            {problem: "\\frac{5}{6x} - \\frac{1}{3x}", answer: "\\frac{1}{2x}"},
            {problem: "\\frac{3}{x} + \\frac{5}{2x}", answer: "\\frac{11}{2x}"},
            {problem: "\\frac{7}{3x} - \\frac{2}{x}", answer: "\\frac{1}{3x}"},
            {problem: "\\frac{7}{4x} - \\frac{5}{2x}", answer: "-\\frac{3}{4x}"},
            {problem: "\\frac{4}{3x} + \\frac{2}{9x}", answer: "\\frac{14}{9x}"},
            {problem: "\\frac{3}{4x} - \\frac{2}{5x}", answer: "\\frac{7}{20x}"},
            {problem: "\\frac{2}{3x} + \\frac{1}{5x}", answer: "\\frac{13}{15x}"},
            {problem: "-\\frac{3}{4x} - \\frac{7}{x}", answer: "-\\frac{31}{4x}"},
            {problem: "-\\frac{5}{3x} - \\frac{3}{4x}", answer: "-\\frac{29}{12x}"},
            {problem: "\\frac{3}{x} + \\frac{2}{x^{2}}", answer: "\\frac{3x+2}{x^{2}}"},
            {problem: "\\frac{5}{x^{2}} + \\frac{4}{x}", answer: "\\frac{4x+5}{x^{2}}"},
            {problem: "\\frac{7}{x} + \\frac{3}{x^{2}}", answer: "\\frac{7x+3}{x^{2}}"},
            {problem: "\\frac{4}{x} - \\frac{5}{x^{2}}", answer: "\\frac{4x-5}{x^{2}}"},
            {problem: "\\frac{3}{x^{2}} - \\frac{8}{x}", answer: "\\frac{3-8x}{x^{2}}"},
            {problem: "-\\frac{4}{x^{2}} + \\frac{1}{x}", answer: "\\frac{x-4}{x^{2}}"},
            {problem: "\\frac{3}{x} - \\frac{7}{2x^{2}}", answer: "\\frac{6x-7}{2x^{2}}"},
            {problem: "-\\frac{2}{3x} + \\frac{3}{x^{2}}", answer: "\\frac{9-2x}{3x^{2}}"},
            {problem: "\\frac{2}{x} + \\frac{x}{4}", answer: "\\frac{x^{2}+8}{4x}"},
            {problem: "-\\frac{5}{x} + \\frac{x}{2}", answer: "\\frac{x^{2}-10}{2x}"},
            {problem: "-\\frac{2}{x} - \\frac{4x}{3}", answer: "-\\frac{4x^{2}+6}{3x}"},
            {problem: "\\frac{3}{2x} - \\frac{5x}{4}", answer: "\\frac{6-5x^{2}}{4x}"},
            {problem: "\\frac{3x}{4} - \\frac{5}{6x}", answer: "\\frac{9x^{2}-10}{12x}"},
            {problem: "\\frac{1}{3x} - \\frac{x}{9}", answer: "\\frac{3-x^{2}}{9x}"},
            {problem: "-\\frac{2}{5x} + \\frac{3x}{2}", answer: "\\frac{15x^{2}-4}{10x}"},
            {problem: "-\\frac{5}{4x} - \\frac{3x}{10}", answer: "-\\frac{6x^{2}+25}{20x}"},

            // Additional questions for cognitive complexity
            // Different variables in fractions
            {problem: "\\frac{a}{4} + \\frac{b}{3}", answer: "\\frac{3a+4b}{12}"},
            {problem: "\\frac{2m}{5} - \\frac{3n}{7}", answer: "\\frac{14m-15n}{35}"},
            {problem: "\\frac{4p}{9} + \\frac{5q}{6}", answer: "\\frac{8p+15q}{18}"},
            {problem: "\\frac{7r}{8} - \\frac{2s}{3}", answer: "\\frac{21r-16s}{24}"},
            
            // Mixed powers and variables
            {problem: "\\frac{2}{y} + \\frac{3}{y^{2}}", answer: "\\frac{2y+3}{y^{2}}"},
            {problem: "\\frac{4}{z^{2}} - \\frac{1}{z}", answer: "\\frac{4-z}{z^{2}}"},
            {problem: "\\frac{5}{a} + \\frac{2}{a^{3}}", answer: "\\frac{5a^{2}+2}{a^{3}}"},
            {problem: "\\frac{3}{b^{2}} - \\frac{4}{b^{3}}", answer: "\\frac{3b-4}{b^{3}}"},
            
            // Fractions with quadratic terms
            {problem: "\\frac{x^{2}}{3} + \\frac{2x}{5}", answer: "\\frac{5x^{2}+6x}{15}"},
            {problem: "\\frac{y^{2}}{4} - \\frac{3y}{7}", answer: "\\frac{7y^{2}-12y}{28}"},
            {problem: "\\frac{2a^{2}}{9} + \\frac{a}{6}", answer: "\\frac{4a^{2}+3a}{18}"},
            {problem: "\\frac{b^{2}}{8} - \\frac{5b}{12}", answer: "\\frac{3b^{2}-10b}{24}"},
            
            // Complex denominators with variables
            {problem: "\\frac{2}{3xy} + \\frac{1}{4xy}", answer: "\\frac{11}{12xy}"},
            {problem: "\\frac{5}{6ab} - \\frac{2}{9ab}", answer: "\\frac{11}{18ab}"},
            {problem: "\\frac{3}{8pq} + \\frac{7}{12pq}", answer: "\\frac{23}{24pq}"},
            {problem: "\\frac{4}{15mn} - \\frac{1}{10mn}", answer: "\\frac{1}{6mn}"},
            
            // Very complex mixed expressions
            {problem: "\\frac{3a}{2b} + \\frac{5b}{3a}", answer: "\\frac{9a^{2}+10b^{2}}{6ab}"},
            {problem: "\\frac{2x}{3y} - \\frac{4y}{5x}", answer: "\\frac{10x^{2}-12y^{2}}{15xy}"},
            {problem: "\\frac{7p}{4q} + \\frac{3q}{8p}", answer: "\\frac{14p^{2}+3q^{2}}{8pq}"},
            {problem: "\\frac{5m}{6n} - \\frac{2n}{9m}", answer: "\\frac{15m^{2}-4n^{2}}{18mn}"},
            
            // Negative coefficients and complex expressions
            {problem: "-\\frac{2a}{3} + \\frac{5a}{4}", answer: "\\frac{7a}{12}"},
            {problem: "\\frac{3b}{5} - \\frac{7b}{2}", answer: "-\\frac{29b}{10}"},
            {problem: "-\\frac{4c}{7} - \\frac{2c}{9}", answer: "-\\frac{50c}{63}"},
            {problem: "\\frac{6d}{11} + \\frac{3d}{8}", answer: "\\frac{81d}{88}"}
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
window.AlgebraLevels.addSubtractAlgebraicFractionsHard = new AddSubtractAlgebraicFractionsHardLevel();