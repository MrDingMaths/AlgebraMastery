// levels/addSubtractAlgebraicFractionsMedium.js
class AddSubtractAlgebraicFractionsMediumLevel {
    constructor() {
        this.key = 'addSubtractAlgebraicFractionsMedium';
        this.name = 'Adding Subtracting Algebraic Fractions (Medium)';
        this.usedQuestionIndices = new Set();
        
        // Predefined questions covering algebraic fractions with different denominators requiring LCD
        this.questions = [

            // Textbook questions
            {problem: "\\frac{a}{2} + \\frac{a}{3}", answer: "\\frac{5a}{6}"},
            {problem: "\\frac{a}{4} + \\frac{a}{5}", answer: "\\frac{9a}{20}"},
            {problem: "\\frac{p}{2} + \\frac{p}{5}", answer: "\\frac{7p}{10}"},
            {problem: "\\frac{q}{4} + \\frac{q}{2}", answer: "\\frac{3q}{4}"},
            {problem: "\\frac{2k}{5} + \\frac{3k}{7}", answer: "\\frac{29k}{35}"},
            {problem: "\\frac{2m}{5} + \\frac{2m}{3}", answer: "\\frac{16m}{15}"},
            {problem: "\\frac{7p}{6} + \\frac{2p}{5}", answer: "\\frac{47p}{30}"},
            {problem: "\\frac{x}{4} + \\frac{3x}{8}", answer: "\\frac{5x}{8}"},
            {problem: "\\frac{p}{2} - \\frac{p}{3}", answer: "\\frac{p}{6}"},
            {problem: "\\frac{2t}{5} - \\frac{t}{3}", answer: "\\frac{t}{15}"},
            {problem: "\\frac{9u}{11} - \\frac{u}{2}", answer: "\\frac{7u}{22}"},
            {problem: "\\frac{8y}{3} - \\frac{5y}{6}", answer: "\\frac{11y}{6}"},
            {problem: "\\frac{r}{3} - \\frac{r}{2}", answer: "-\\frac{r}{6}"},
            {problem: "\\frac{6u}{7} - \\frac{7u}{6}", answer: "-\\frac{13u}{42}"},
            {problem: "9u - \\frac{3u}{4}", answer: "\\frac{33u}{4}"},
            {problem: "4x + \\frac{x}{3}", answer: "\\frac{13x}{3}"},
            {problem: "3x + \\frac{x}{2}", answer: "\\frac{7x}{2}"},
            {problem: "\\frac{a}{5} + 2a", answer: "\\frac{11a}{5}"},
            {problem: "\\frac{8p}{3} - 2p", answer: "\\frac{2p}{3}"},
            {problem: "\\frac{y}{4} + \\frac{y}{2}", answer: "\\frac{3y}{4}"},
            {problem: "\\frac{m}{3} - \\frac{m}{9}", answer: "\\frac{2m}{9}"},
            {problem: "\\frac{2a}{3} + \\frac{3a}{2}", answer: "\\frac{13a}{6}"},
            {problem: "\\frac{7b}{10} - \\frac{19b}{30}", answer: "\\frac{b}{15}"},
            {problem: "\\frac{x}{7} + \\frac{x}{2}", answer: "\\frac{9x}{14}"},
            {problem: "\\frac{x}{3} + \\frac{x}{15}", answer: "\\frac{2x}{5}"},
            {problem: "\\frac{x}{4} - \\frac{x}{8}", answer: "\\frac{x}{8}"},
            {problem: "\\frac{x}{9} + \\frac{x}{5}", answer: "\\frac{14x}{45}"},
            {problem: "\\frac{y}{7} - \\frac{y}{8}", answer: "\\frac{y}{56}"},
            {problem: "\\frac{a}{2} + \\frac{a}{11}", answer: "\\frac{13a}{22}"},
            {problem: "\\frac{b}{3} - \\frac{b}{9}", answer: "\\frac{2b}{9}"},
            {problem: "\\frac{m}{3} - \\frac{m}{6}", answer: "\\frac{m}{6}"},
            {problem: "\\frac{m}{6} + \\frac{3m}{4}", answer: "\\frac{11m}{12}"},
            {problem: "\\frac{a}{4} + \\frac{2a}{7}", answer: "\\frac{15a}{28}"},
            {problem: "\\frac{2x}{5} + \\frac{x}{10}", answer: "\\frac{x}{2}"},
            {problem: "\\frac{p}{9} - \\frac{3p}{7}", answer: "-\\frac{20p}{63}"},
            {problem: "\\frac{b}{2} - \\frac{7b}{9}", answer: "-\\frac{5b}{18}"},
            {problem: "\\frac{9y}{8} + \\frac{2y}{5}", answer: "\\frac{61y}{40}"},
            {problem: "\\frac{4x}{7} - \\frac{x}{5}", answer: "\\frac{13x}{35}"},
            {problem: "\\frac{3x}{4} - \\frac{x}{3}", answer: "\\frac{5x}{12}"},

            // Additional questions for cognitive complexity
            {problem: "\\frac{2c}{3} + \\frac{c}{4}", answer: "\\frac{11c}{12}"},
            {problem: "\\frac{3d}{5} - \\frac{d}{2}", answer: "\\frac{d}{10}"},
            {problem: "\\frac{e}{6} + \\frac{2e}{9}", answer: "\\frac{7e}{18}"},
            {problem: "\\frac{4f}{7} - \\frac{2f}{3}", answer: "-\\frac{2f}{21}"},
            {problem: "\\frac{g}{8} + \\frac{3g}{10}", answer: "\\frac{17g}{40}"},
            {problem: "\\frac{5h}{6} - \\frac{h}{4}", answer: "\\frac{7h}{12}"},
            {problem: "\\frac{7k}{10} - \\frac{3k}{8}", answer: "\\frac{13k}{40}"},
            
            // Whole numbers mixed with fractions
            {problem: "2 + \\frac{x}{3}", answer: "\\frac{6+x}{3}"},
            {problem: "\\frac{y}{4} + 3", answer: "\\frac{y+12}{4}"},
            {problem: "5 - \\frac{2z}{3}", answer: "\\frac{15-2z}{3}"},
            {problem: "\\frac{3w}{5} - 1", answer: "\\frac{3w-5}{5}"},
            {problem: "\\frac{a}{2} + 4", answer: "\\frac{a+8}{2}"},
            {problem: "6 - \\frac{5b}{4}", answer: "\\frac{24-5b}{4}"},
            
            // Three terms with different denominators
            {problem: "\\frac{c}{2} + \\frac{c}{3} + \\frac{c}{6}", answer: "c"},
            {problem: "\\frac{d}{4} + \\frac{d}{6} - \\frac{d}{12}", answer: "\\frac{d}{3}"},
            {problem: "\\frac{2e}{3} - \\frac{e}{4} + \\frac{e}{6}", answer: "\\frac{7e}{12}"},
            {problem: "\\frac{f}{5} + \\frac{2f}{3} - \\frac{f}{15}", answer: "\\frac{4f}{5}"},
            
            // Mixed denominators requiring larger LCD
            {problem: "\\frac{g}{12} + \\frac{g}{8}", answer: "\\frac{5g}{24}"},
            {problem: "\\frac{2h}{15} - \\frac{h}{10}", answer: "\\frac{h}{30}"},
            {problem: "\\frac{j}{14} + \\frac{3j}{21}", answer: "\\frac{3j}{14}"},
            {problem: "\\frac{4k}{9} - \\frac{k}{6}", answer: "\\frac{5k}{18}"},
            {problem: "\\frac{5m}{18} - \\frac{2m}{12}", answer: "\\frac{m}{9}"}
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
window.AlgebraLevels.addSubtractAlgebraicFractionsMedium = new AddSubtractAlgebraicFractionsMediumLevel();