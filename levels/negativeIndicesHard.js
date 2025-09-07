// levels/negativeIndicesHard.js
class NegativeIndicesHardLevel {
    constructor() {
        this.key = 'negativeIndicesHard';
        this.name = 'Negative Indices (Hard)';
        this.usedQuestionIndices = new Set();
        
        // Hard Level: Complex multi-step expressions and advanced manipulations
        this.questions = [
            // Complex fractional expressions with multiple variables
            {problem: "\\frac{a^{-3}b^5c^{-1}}{y^{-3}}", answer: "\\frac{b^5y^3}{a^3c}"},
            {problem: "\\frac{5a^2c^{-4}}{6b^{-2}d}", answer: "\\frac{5a^2b^2}{6c^4d}"},
            {problem: "\\frac{2a^{-4}}{b^{-5}c^2}", answer: "\\frac{2b^5}{a^4c^2}"},
            {problem: "\\frac{m^{-2}n^3}{p^{-1}q^{-2}}", answer: "\\frac{n^3pq^2}{m^2}"},
            {problem: "\\frac{4x^{-3}y^2}{2x^{-1}y^{-4}}", answer: "\\frac{2y^6}{x^2}"},
            {problem: "\\frac{9u^2v^{-3}}{3u^{-1}v^{-1}}", answer: "\\frac{3u^3}{v^2}"},
            
            // Complex powers of fractional expressions
            {problem: "(\\frac{2x^2}{3y})^{-1}", answer: "\\frac{3y}{2x^2}"},
            {problem: "(\\frac{xy}{2})^{-4}", answer: "\\frac{16}{x^4y^4}"},
            {problem: "(\\frac{5x}{ab})^{-3}", answer: "\\frac{a^3b^3}{125x^3}"},
            {problem: "(\\frac{7}{3y})^{-3}", answer: "\\frac{27y^3}{343}"},
            {problem: "(\\frac{x^3}{ab})^{-5}", answer: "\\frac{a^5b^5}{x^{15}}"},
            {problem: "(\\frac{xy}{3n^4})^{-2}", answer: "\\frac{9n^8}{x^2y^2}"},
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
            {problem: "(2p^2)^4 \\times (3p^2q)^{-2}", answer: "\\frac{16p^4}{9q^2}"},
            {problem: "2(x^2y^{-1})^2 \\times (3xy^4)^3", answer: "54x^7y^{10}"},
            {problem: "\\frac{2a^3b^2}{a^{-3}} \\times \\frac{2a^2b^5}{b^4}", answer: "4a^8b^3"},
            {problem: "\\frac{(3rs^2)^4}{r^{-3}s^4} \\times \\frac{(2r^2s)^2}{s^7}", answer: "\\frac{324r^{11}}{s}"},
            {problem: "\\frac{4(x^{-2}y^4)^2}{x^2y^{-3}} \\times \\frac{xy^4}{2x^{-2}y}", answer: "\\frac{2y^{14}}{x^3}"},
            {problem: "\\left(\\frac{a^2b^3}{b^{-2}}\\right)^2 \\div \\left(\\frac{ab^4}{a^2}\\right)^{-2}", answer: "a^2b^{18}"},
            {problem: "\\left(\\frac{m^4n^{-2}}{r^3}\\right)^2 \\div \\left(\\frac{m^{-3}n^2}{r^3}\\right)^2", answer: "\\frac{m^{14}}{n^8}"},
            {problem: "\\frac{3(x^2y^{-4})^2}{2(xy^2)^2} \\div \\frac{(xy)^{-3}}{(3x^{-2}y^4)^2}", answer: "\\frac{27x}{2y}"},
            {problem: "(x^4y^{-2})^3 \\times (x^{-1}y^3)^{-2}", answer: "x^{14}y^{-12}"},
            {problem: "(3m^2n^{-1})^4 \\times (2mn^3)^{-2}", answer: "\\frac{81m^6}{4n^{10}}"},
            {problem: "2(a^{-1}b^3)^2 \\times (4a^2b^{-1})^3", answer: "128a^4b^3"},
            {problem: "\\frac{3p^4q^{-2}}{p^{-2}} \\times \\frac{2p^{-1}q^3}{q^2}", answer: "6p^5q^{-1}"},
            {problem: "\\frac{(2r^3s^{-1})^3}{r^2s^{-4}} \\times \\frac{(rs^2)^2}{s^5}", answer: "8r^9"},
            {problem: "\\frac{5(a^3b^{-2})^2}{a^{-1}b^3} \\times \\frac{ab^{-1}}{3a^{-2}b}", answer: "\\frac{5a^{10}}{3b^9}"},
            {problem: "\\left(\\frac{x^3y^{-1}}{y^2}\\right)^2 \\div \\left(\\frac{xy^3}{x^{-1}}\\right)^{-2}", answer: "x^{10}"},
            {problem: "\\left(\\frac{2m^{-2}n^4}{n^{-1}}\\right)^3 \\div \\left(\\frac{mn^{-2}}{m^2}\\right)^2", answer: "\\frac{8n^{19}}{m^4}"},
            {problem: "\\frac{4(p^{-1}q^2)^3}{3(pq^{-1})^2} \\div \\frac{(pq)^{-2}}{(2p^2q^{-1})^2}", answer: "\\frac{16pq^8}{3}"},
            {problem: "(5a^{-2}b)^{-1} \\times (a^3b^{-2})^2", answer: "\\frac{a^8}{5b^5}"},
            {problem: "(4x^2y^{-3})^{-2} \\times (xy^4)^3", answer: "\\frac{x^{-1}y^{18}}{16}"},
            {problem: "3(r^{-1}s^2)^3 \\times (2rs^{-1})^{-1}", answer: "\\frac{3s^7}{2r^4}"},
            {problem: "\\frac{2m^5n^{-1}}{m^{-2}} \\times \\frac{3m^{-3}n^4}{n^2}", answer: "6m^4n"},
            {problem: "\\frac{(3p^2q^{-3})^2}{p^{-1}q^2} \\times \\frac{(pq)^3}{q^{-1}}", answer: "9p^8q^{-4}"},
            {problem: "\\frac{6(a^{-3}b^4)^{-1}}{2a^2b^{-1}} \\times \\frac{ab^2}{b^3}", answer: "\\frac{3a^2}{b^4}"},
            {problem: "\\left(\\frac{2x^{-1}y^3}{y^{-2}}\\right)^{-2} \\div \\left(\\frac{x^2y}{x^{-1}}\\right)^3", answer: "\\frac{1}{4x^7y^{13}}"},
            {problem: "\\left(\\frac{m^3n^{-4}}{m^{-1}}\\right)^2 \\div \\left(\\frac{2mn^2}{n^{-1}}\\right)^{-1}", answer: "\\frac{2m^9}{n^5}"},
            {problem: "\\frac{5(r^2s^{-1})^{-2}}{(rs^2)^{-1}} \\div \\frac{(r^{-1}s)^3}{(2rs^{-2})^2}", answer: "\\frac{20r^2}{s^3}"},
            {problem: "(6p^{-3}q^2)^2 \\times (pq^{-1})^{-3}", answer: "\\frac{36q^7}{p^9}"},
            {problem: "(2a^4b^{-1})^{-1} \\times (ab^2)^4", answer: "\\frac{b^9}{2}"},
            {problem: "4(x^{-2}y)^3 \\times (xy^{-2})^{-2}", answer: "4x^{-8}y^7"},
            {problem: "\\frac{3n^{-1}m^2}{m^{-3}} \\times \\frac{2mn^3}{n^{-1}}", answer: "6m^6n^3"},
            {problem: "\\frac{(4r^{-1}s^3)^2}{r^2s^{-1}} \\times \\frac{(rs^{-2})^2}{s^3}", answer: "\\frac{16}{r^2}"},
            {problem: "\\frac{7(p^3q^{-2})^{-1}}{3pq^{-1}} \\times \\frac{p^2q}{q^2}", answer: "\\frac{7q^2}{3p^2}"},
            {problem: "\\left(\\frac{3a^2b^{-3}}{b}\\right)^3 \\div \\left(\\frac{ab^{-1}}{a^{-2}}\\right)^{-2}", answer: "\\frac{27a^{12}}{b^{14}}"},
            {problem: "\\left(\\frac{x^{-1}y^4}{y^{-2}}\\right)^{-1} \\div \\left(\\frac{2xy^{-1}}{x^2}\\right)^3", answer: "\\frac{x^4}{8y^3}"},
            {problem: "\\frac{2(m^4n^{-3})^{-2}}{(mn^2)^{-1}} \\div \\frac{(m^{-2}n)^2}{(3mn^{-1})^2}", answer: "\\frac{18n^4}{m}"},
            {problem: "(8r^{-2}s)^{-1} \\times (rs^{-3})^3", answer: "\\frac{r^5}{8s^{10}}"},
            {problem: "(3p^2q^{-4})^{-2} \\times (pq)^5", answer: "\\frac{pq^{13}}{9}"},
            {problem: "\\frac{5(a^{-3}b^2)^3}{(ab^{-1})^{-2}} \\times \\frac{(a^2b)^{-1}}{b^3}", answer: "\\frac{5}{a^9}"},
            
            // Additional expert-level expressions
            {problem: "(\\frac{2x^2}{x^{-3}})^4", answer: "16x^{20}"},
            {problem: "(\\frac{m^3}{4m^5})^3", answer: "\\frac{1}{64m^6}"},
            {problem: "(\\frac{4}{y^2})^{-2}", answer: "\\frac{y^4}{16}"},
            {problem: "(\\frac{3}{h^3})^{-4}", answer: "\\frac{h^{12}}{81}"},
            {problem: "(xy^2)^{-1} \\times (x^2y)^{-1}", answer: "\\frac{1}{x^3y^3}"},
            {problem: "(2a^3)^{-1} \\div (3a^2)^{-1}", answer: "\\frac{3}{2a}"},
            {problem: "\\frac{(4x^2)^{-1}}{(2x)^{-2}}", answer: "1"},
            {problem: "\\frac{(3y^3)^{-2}}{(y^2)^{-1}}", answer: "\\frac{1}{9y^4}"},
            {problem: "0.2s^{-2}t^3 \\times 5st^{-5}", answer: "\\frac{1}{st^2}"},
            {problem: "56x^2y^6 \\div 8xy^8", answer: "\\frac{7x}{y^2}"},
            {problem: "(s^2y^{-3})^3", answer: "\\frac{s^6}{y^9}"},
            {problem: "(5c^{-2}d^3)^{-1}", answer: "\\frac{c^2}{5d^3}"}
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