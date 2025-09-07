// levels/evaluatingFractionalIndicesHard.js
class EvaluatingFractionalIndicesHardLevel {
    constructor() {
        this.key = 'evaluatingFractionalIndicesHard';
        this.name = 'Fractional Indices (Hard)';
        this.usedQuestionIndices = new Set();
        
        // Hard level: Complex fractional bases, negative fractional powers, and advanced combinations
        // Categories: Negative fractional powers, complex fractional bases, reciprocals of fractions, challenging compound operations
        this.questions = [
            // Complex fractional bases with positive fractional indices
            {problem: "(\\frac{1}{9})^{\\frac{3}{2}}", answer: "\\frac{1}{27}"},
            {problem: "(\\frac{4}{25})^{\\frac{3}{2}}", answer: "\\frac{8}{125}"},
            {problem: "(\\frac{27}{1000})^{\\frac{4}{3}}", answer: "\\frac{81}{10000}"},
            {problem: "(\\frac{1}{16})^{\\frac{3}{2}}", answer: "\\frac{1}{64}"},
            {problem: "(\\frac{1}{25})^{\\frac{3}{2}}", answer: "\\frac{1}{125}"},
            {problem: "(\\frac{1}{36})^{\\frac{3}{2}}", answer: "\\frac{1}{216}"},
            {problem: "(\\frac{1}{49})^{\\frac{3}{2}}", answer: "\\frac{1}{343}"},
            {problem: "(\\frac{1}{64})^{\\frac{5}{6}}", answer: "\\frac{1}{32}"},
            {problem: "(\\frac{1}{81})^{\\frac{3}{4}}", answer: "\\frac{1}{27}"},
            {problem: "(\\frac{1}{100})^{\\frac{3}{2}}", answer: "\\frac{1}{1000}"},
            
            // Negative fractional powers (reciprocals of fractional powers)
            {problem: "27^{-\\frac{2}{3}}", answer: "\\frac{1}{9}"},
            {problem: "25^{-\\frac{3}{2}}", answer: "\\frac{1}{125}"},
            {problem: "64^{-\\frac{2}{3}}", answer: "\\frac{1}{16}"},
            {problem: "625^{-\\frac{3}{4}}", answer: "\\frac{1}{125}"},
            {problem: "16^{-\\frac{3}{2}}", answer: "\\frac{1}{64}"},
            {problem: "36^{-\\frac{3}{2}}", answer: "\\frac{1}{216}"},
            {problem: "49^{-\\frac{3}{2}}", answer: "\\frac{1}{343}"},
            {problem: "100^{-\\frac{3}{2}}", answer: "\\frac{1}{1000}"},
            {problem: "256^{-\\frac{3}{4}}", answer: "\\frac{1}{64}"},
            
            // Negative fractional indices with fractional bases (reciprocals)
            {problem: "(\\frac{9}{4})^{-\\frac{1}{2}}", answer: "\\frac{2}{3}"},
            {problem: "(\\frac{49}{144})^{-\\frac{1}{2}}", answer: "\\frac{12}{7}"},
            {problem: "(\\frac{8}{125})^{-\\frac{1}{3}}", answer: "\\frac{5}{2}"},
            {problem: "(\\frac{1296}{625})^{-\\frac{1}{4}}", answer: "\\frac{5}{6}"},
            {problem: "(\\frac{8}{27})^{-\\frac{1}{3}}", answer: "\\frac{3}{2}"},
            {problem: "(\\frac{16}{25})^{-\\frac{1}{2}}", answer: "\\frac{5}{4}"},
            {problem: "(\\frac{25}{36})^{-\\frac{1}{2}}", answer: "\\frac{6}{5}"},
            {problem: "(\\frac{36}{49})^{-\\frac{1}{2}}", answer: "\\frac{7}{6}"},
            {problem: "(\\frac{49}{64})^{-\\frac{1}{2}}", answer: "\\frac{8}{7}"},
            {problem: "(\\frac{64}{81})^{-\\frac{1}{2}}", answer: "\\frac{9}{8}"},
            {problem: "(\\frac{81}{100})^{-\\frac{1}{2}}", answer: "\\frac{10}{9}"},
            {problem: "(\\frac{100}{121})^{-\\frac{1}{2}}", answer: "\\frac{11}{10}"},
            {problem: "(\\frac{121}{144})^{-\\frac{1}{2}}", answer: "\\frac{12}{11}"},
            {problem: "(\\frac{144}{169})^{-\\frac{1}{2}}", answer: "\\frac{13}{12}"},
            {problem: "(\\frac{169}{196})^{-\\frac{1}{2}}", answer: "\\frac{14}{13}"},
            
            // Complex compound operations with fractional bases
            {problem: "(\\frac{8}{27})^{\\frac{4}{3}}", answer: "\\frac{16}{81}"},
            {problem: "(\\frac{27}{8})^{-\\frac{4}{3}}", answer: "\\frac{16}{81}"},
            {problem: "(\\frac{4}{9})^{\\frac{5}{2}}", answer: "\\frac{32}{243}"},
            {problem: "(\\frac{1}{4})^{\\frac{5}{2}}", answer: "\\frac{1}{32}"},
            {problem: "(\\frac{1}{9})^{\\frac{5}{2}}", answer: "\\frac{1}{243}"},
            {problem: "(\\frac{1}{16})^{\\frac{5}{4}}", answer: "\\frac{1}{32}"},
            {problem: "(\\frac{1}{32})^{\\frac{6}{5}}", answer: "\\frac{1}{64}"},
            
            // Challenging negative fractional powers with fractional bases
            {problem: "(\\frac{4}{9})^{-\\frac{3}{2}}", answer: "\\frac{27}{8}"},
            {problem: "(\\frac{9}{16})^{-\\frac{3}{2}}", answer: "\\frac{64}{27}"},
            {problem: "(\\frac{16}{25})^{-\\frac{3}{2}}", answer: "\\frac{125}{64}"},
            {problem: "(\\frac{25}{36})^{-\\frac{3}{2}}", answer: "\\frac{216}{125}"},
            {problem: "(\\frac{36}{49})^{-\\frac{3}{2}}", answer: "\\frac{343}{216}"},
            {problem: "(\\frac{49}{64})^{-\\frac{3}{2}}", answer: "\\frac{512}{343}"},
            
            // Advanced cube and fourth root operations
            {problem: "(\\frac{8}{125})^{-\\frac{2}{3}}", answer: "\\frac{25}{4}"},
            {problem: "(\\frac{27}{64})^{-\\frac{2}{3}}", answer: "\\frac{16}{9}"},
            {problem: "(\\frac{64}{216})^{-\\frac{2}{3}}", answer: "\\frac{9}{4}"},
            {problem: "(\\frac{125}{343})^{-\\frac{2}{3}}", answer: "\\frac{49}{25}"},
            {problem: "(\\frac{216}{512})^{-\\frac{2}{3}}", answer: "\\frac{16}{9}"},
            {problem: "(\\frac{343}{729})^{-\\frac{2}{3}}", answer: "\\frac{81}{49}"},
            {problem: "(\\frac{512}{1000})^{-\\frac{2}{3}}", answer: "\\frac{25}{16}"},
            {problem: "(\\frac{729}{1331})^{-\\frac{2}{3}}", answer: "\\frac{121}{81}"},
            {problem: "(\\frac{1000}{1728})^{-\\frac{2}{3}}", answer: "\\frac{36}{25}"},
            {problem: "(\\frac{1331}{2197})^{-\\frac{2}{3}}", answer: "\\frac{169}{121}"},
            
            // Complex fourth root operations
            {problem: "(\\frac{16}{625})^{-\\frac{3}{4}}", answer: "\\frac{125}{8}"},
            {problem: "(\\frac{81}{1296})^{-\\frac{3}{4}}", answer: "8"},
            {problem: "(\\frac{256}{2401})^{-\\frac{3}{4}}", answer: "\\frac{343}{64}"},
            
            // Mix of very challenging problems
            {problem: "(\\frac{1}{128})^{-\\frac{4}{7}}", answer: "16"},
            {problem: "(\\frac{1}{243})^{-\\frac{4}{5}}", answer: "81"},
            {problem: "(\\frac{1}{1024})^{-\\frac{3}{5}}", answer: "64"},
            {problem: "(\\frac{1}{3125})^{-\\frac{3}{5}}", answer: "125"},
            
            // Additional challenging problems
            {problem: "(\\frac{125}{64})^{\\frac{2}{3}}", answer: "\\frac{25}{16}"},
            {problem: "(\\frac{2}{5})^{-2}", answer: "\\frac{25}{4}"},
            {problem: "(\\frac{1}{25})^{-\\frac{3}{2}}", answer: "125"},
            {problem: "4^{-1\\frac{1}{2}}", answer: "\\frac{1}{8}"},
            {problem: "125^{-\\frac{2}{3}}", answer: "\\frac{1}{25}"},
            {problem: "8^{-3} \\times 2^8", answer: "\\frac{1}{2}"}
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
window.AlgebraLevels.evaluatingFractionalIndicesHard = new EvaluatingFractionalIndicesHardLevel();