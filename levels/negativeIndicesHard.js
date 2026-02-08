// levels/negativeIndicesHard.js
class NegativeIndicesHardLevel {
    constructor() {
        this.key = 'negativeIndicesHard';
        this.name = 'Negative Indices (Hard)';
        this.usedQuestionIndices = new Set();
        
        // Hard Level: Complex multi-step expressions and advanced manipulations
        this.questions = [
            // Complex fractional expressions with multiple variables
            {problem: "\\frac{a^{-3}b^5x^{-1}}{y^{-3}}", answer: "\\frac{b^5y^3}{a^3x}"},
            {problem: "\\frac{5a^2x^{-4}}{6b^{-2}y}", answer: "\\frac{5a^2b^2}{6x^4y}"},
            {problem: "\\frac{2a^{-4}}{b^{-5}x^2}", answer: "\\frac{2b^5}{a^4x^2}"},
            {problem: "\\frac{x^{-2}y^3}{a^{-1}b^{-2}}", answer: "\\frac{y^3ab^2}{x^2}"},
            {problem: "\\frac{4x^{-3}y^2}{2x^{-1}y^{-4}}", answer: "\\frac{2y^6}{x^2}"},
            {problem: "\\frac{9x^2y^{-3}}{3x^{-1}y^{-1}}", answer: "\\frac{3x^3}{y^2}"},
            
            // Complex powers of fractional expressions
            {problem: "(\\frac{2x^2}{3y})^{-1}", answer: "\\frac{3y}{2x^2}"},
            {problem: "(\\frac{xy}{2})^{-4}", answer: "\\frac{16}{x^4y^4}"},
            {problem: "(\\frac{5x}{ab})^{-3}", answer: "\\frac{a^3b^3}{125x^3}"},
            {problem: "(\\frac{7}{3y})^{-3}", answer: "\\frac{27y^3}{343}"},
            {problem: "(\\frac{x^3}{ab})^{-5}", answer: "\\frac{a^5b^5}{x^{15}}"},
            {problem: "(\\frac{xy}{3a^4})^{-2}", answer: "\\frac{9a^8}{x^2y^2}"},
            {problem: "(\\frac{7a^2}{9x^7})^{-1}", answer: "\\frac{9x^7}{7a^2}"},
            
            // Multi-step operations combining products, quotients and powers
            {problem: "a^5 \\div a^7 \\times a^{-4}", answer: "\\frac{1}{a^6}"},
            {problem: "5y^{-2} \\times 4xy^6 \\div 2xy^{-3}", answer: "10y^7"},
            {problem: "(6x^{-4})^2 \\div 4x^{-3}", answer: "\\frac{9}{x^5}"},
            {problem: "12y^{-3} \\div 4y^2", answer: "\\frac{3}{y^5}"},
            {problem: "12y^{-3} \\div 4y^{-2}", answer: "\\frac{3}{y}"},
            {problem: "12y^{-3} \\times 4y^{-2}", answer: "\\frac{48}{y^5}"},
            
            // Complex nested powers with negative exponents
            {problem: "(a^3b^2)^3 \\times (a^2b^4)^{-1}", answer: "a^7b^2"},
            {problem: "(2x^2)^4 \\times (3x^2y)^{-2}", answer: "\\frac{16x^4}{9y^2}"},
            {problem: "2(x^2y^{-1})^2 \\times (3xy^4)^3", answer: "54x^7y^{10}"},
            {problem: "\\frac{2a^3b^2}{a^{-3}} \\times \\frac{2a^2b^5}{b^4}", answer: "4a^8b^3"},
            {problem: "\\frac{(3xy^2)^4}{x^{-3}y^4} \\times \\frac{(2x^2y)^2}{y^7}", answer: "\\frac{324x^{11}}{y}"},
            {problem: "\\frac{4(x^{-2}y^4)^2}{x^2y^{-3}} \\times \\frac{xy^4}{2x^{-2}y}", answer: "\\frac{2y^{14}}{x^3}"},
            {problem: "\\left(\\frac{a^2b^3}{b^{-2}}\\right)^2 \\div \\left(\\frac{ab^4}{a^2}\\right)^{-2}", answer: "a^2b^{18}"},
            {problem: "\\left(\\frac{x^4y^{-2}}{a^3}\\right)^2 \\div \\left(\\frac{x^{-3}y^2}{a^3}\\right)^2", answer: "\\frac{x^{14}}{y^8}"},
            {problem: "\\frac{3(x^2y^{-4})^2}{2(xy^2)^2} \\div \\frac{(xy)^{-3}}{(3x^{-2}y^4)^2}", answer: "\\frac{27x}{2y}"},
            {problem: "(x^4y^{-2})^3 \\times (x^{-1}y^3)^{-2}", answer: "x^{14}y^{-12}"},
            {problem: "(3x^2y^{-1})^4 \\times (2xy^3)^{-2}", answer: "\\frac{81x^6}{4y^{10}}"},
            {problem: "2(a^{-1}b^3)^2 \\times (4a^2b^{-1})^3", answer: "128a^4b^3"},
            {problem: "\\frac{3x^4y^{-2}}{x^{-2}} \\times \\frac{2x^{-1}y^3}{y^2}", answer: "6x^5y^{-1}"},
            {problem: "\\frac{(2x^3y^{-1})^3}{x^2y^{-4}} \\times \\frac{(xy^2)^2}{y^5}", answer: "8x^9"},
            {problem: "\\frac{5(a^3b^{-2})^2}{a^{-1}b^3} \\times \\frac{ab^{-1}}{3a^{-2}b}", answer: "\\frac{5a^{10}}{3b^9}"},
            {problem: "\\left(\\frac{x^3y^{-1}}{y^2}\\right)^2 \\div \\left(\\frac{xy^3}{x^{-1}}\\right)^{-2}", answer: "x^{10}"},
            {problem: "\\left(\\frac{2x^{-2}y^4}{y^{-1}}\\right)^3 \\div \\left(\\frac{xy^{-2}}{x^2}\\right)^2", answer: "\\frac{8y^{19}}{x^4}"},
            {problem: "\\frac{4(x^{-1}y^2)^3}{3(xy^{-1})^2} \\div \\frac{(xy)^{-2}}{(2x^2y^{-1})^2}", answer: "\\frac{16xy^8}{3}"},
            {problem: "(5a^{-2}b)^{-1} \\times (a^3b^{-2})^2", answer: "\\frac{a^8}{5b^5}"},
            {problem: "(4x^2y^{-3})^{-2} \\times (xy^4)^3", answer: "\\frac{x^{-1}y^{18}}{16}"},
            {problem: "3(x^{-1}y^2)^3 \\times (2xy^{-1})^{-1}", answer: "\\frac{3y^7}{2x^4}"},
            {problem: "\\frac{2x^5y^{-1}}{x^{-2}} \\times \\frac{3x^{-3}y^4}{y^2}", answer: "6x^4y"},
            {problem: "\\frac{(3x^2y^{-3})^2}{x^{-1}y^2} \\times \\frac{(xy)^3}{y^{-1}}", answer: "9x^8y^{-4}"},
            {problem: "\\frac{6(a^{-3}b^4)^{-1}}{2a^2b^{-1}} \\times \\frac{ab^2}{b^3}", answer: "\\frac{3a^2}{b^4}"},
            {problem: "\\left(\\frac{2x^{-1}y^3}{y^{-2}}\\right)^{-2} \\div \\left(\\frac{x^2y}{x^{-1}}\\right)^3", answer: "\\frac{1}{4x^7y^{13}}"},
            {problem: "\\left(\\frac{x^3y^{-4}}{x^{-1}}\\right)^2 \\div \\left(\\frac{2xy^2}{y^{-1}}\\right)^{-1}", answer: "\\frac{2x^9}{y^5}"},
            {problem: "\\frac{5(x^2y^{-1})^{-2}}{(xy^2)^{-1}} \\div \\frac{(x^{-1}y)^3}{(2xy^{-2})^2}", answer: "\\frac{20x^2}{y^3}"},
            {problem: "(6x^{-3}y^2)^2 \\times (xy^{-1})^{-3}", answer: "\\frac{36y^7}{x^9}"},
            {problem: "(2a^4b^{-1})^{-1} \\times (ab^2)^4", answer: "\\frac{b^9}{2}"},
            {problem: "4(x^{-2}y)^3 \\times (xy^{-2})^{-2}", answer: "4x^{-8}y^7"},
            {problem: "\\frac{3x^{-1}y^2}{y^{-3}} \\times \\frac{2yx^3}{x^{-1}}", answer: "6y^6x^3"},
            {problem: "\\frac{(4x^{-1}y^3)^2}{x^2y^{-1}} \\times \\frac{(xy^{-2})^2}{y^3}", answer: "\\frac{16}{x^2}"},
            {problem: "\\frac{7(x^3y^{-2})^{-1}}{3xy^{-1}} \\times \\frac{x^2y}{y^2}", answer: "\\frac{7y^2}{3x^2}"},
            {problem: "\\left(\\frac{3a^2b^{-3}}{b}\\right)^3 \\div \\left(\\frac{ab^{-1}}{a^{-2}}\\right)^{-2}", answer: "\\frac{27a^{12}}{b^{14}}"},
            {problem: "\\left(\\frac{x^{-1}y^4}{y^{-2}}\\right)^{-1} \\div \\left(\\frac{2xy^{-1}}{x^2}\\right)^3", answer: "\\frac{x^4}{8y^3}"},
            {problem: "\\frac{2(x^4y^{-3})^{-2}}{(xy^2)^{-1}} \\div \\frac{(x^{-2}y)^2}{(3xy^{-1})^2}", answer: "\\frac{18y^4}{x}"},
            {problem: "(8x^{-2}y)^{-1} \\times (xy^{-3})^3", answer: "\\frac{x^5}{8y^{10}}"},
            {problem: "(3x^2y^{-4})^{-2} \\times (xy)^5", answer: "\\frac{xy^{13}}{9}"},
            {problem: "\\frac{5(a^{-3}b^2)^3}{(ab^{-1})^{-2}} \\times \\frac{(a^2b)^{-1}}{b^3}", answer: "\\frac{5}{a^9}"},
            
            // Additional expert-level expressions
            {problem: "(\\frac{2x^2}{x^{-3}})^4", answer: "16x^{20}"},
            {problem: "(\\frac{x^3}{4x^5})^3", answer: "\\frac{1}{64x^6}"},
            {problem: "(\\frac{4}{y^2})^{-2}", answer: "\\frac{y^4}{16}"},
            {problem: "(\\frac{3}{x^3})^{-4}", answer: "\\frac{x^{12}}{81}"},
            {problem: "(xy^2)^{-1} \\times (x^2y)^{-1}", answer: "\\frac{1}{x^3y^3}"},
            {problem: "(2a^3)^{-1} \\div (3a^2)^{-1}", answer: "\\frac{3}{2a}"},
            {problem: "\\frac{(4x^2)^{-1}}{(2x)^{-2}}", answer: "1"},
            {problem: "\\frac{(3y^3)^{-2}}{(y^2)^{-1}}", answer: "\\frac{1}{9y^4}"},
            {problem: "0.2x^{-2}y^3 \\times 5xy^{-5}", answer: "\\frac{1}{xy^2}"},
            {problem: "56x^2y^6 \\div 8xy^8", answer: "\\frac{7x}{y^2}"},
            {problem: "(x^2y^{-3})^3", answer: "\\frac{x^6}{y^9}"},
            {problem: "(5x^{-2}y^3)^{-1}", answer: "\\frac{x^2}{5y^3}"}
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
window.AlgebraLevels.negativeIndicesHard = new NegativeIndicesHardLevel();