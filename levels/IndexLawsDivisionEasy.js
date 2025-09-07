class IndexLawsDivisionEasy {
    constructor() {
        this.name = "Index Laws Division (Easy)";
        this.description = "Basic division with index laws - single variables";
        
        this.questions = [
            // Recall & Recognition - Direct rule application with single variables
            {problem: "a^6 \\div a^4", answer: "a^2"},
            {problem: "x^5 \\div x^2", answer: "x^3"},
            {problem: "\\frac{q^{12}}{q^2}", answer: "q^{10}"},
            {problem: "\\frac{d^7}{d^6}", answer: "d"},
            {problem: "a^7 \\div a^6", answer: "a"},
            {problem: "q^9 \\div q^6", answer: "q^3"},
            {problem: "b^5 \\div b", answer: "b^4"},
            {problem: "\\frac{y^8}{y^3}", answer: "y^5"},
            {problem: "\\frac{d^8}{d^3}", answer: "d^5"},
            {problem: "\\frac{j^7}{j^6}", answer: "j"},
            {problem: "\\frac{m^{15}}{m^9}", answer: "m^6"},
            {problem: "\\frac{m^5}{m^2}", answer: "m^3"},
            {problem: "\\frac{z^5}{z^2}", answer: "z^3"},
            {problem: "\\frac{q^{10}}{q^3}", answer: "q^7"},
            {problem: "\\frac{r^{10}}{r}", answer: "r^9"},
            {problem: "n^8 \\div n^5", answer: "n^3"},
            {problem: "\\frac{w^9}{w^4}", answer: "w^5"},
            {problem: "p^{11} \\div p^7", answer: "p^4"},
            {problem: "\\frac{k^{13}}{k^8}", answer: "k^5"},
            {problem: "t^6 \\div t^4", answer: "t^2"},
            {problem: "\\frac{s^{14}}{s^{10}}", answer: "s^4"},
            {problem: "u^9 \\div u^3", answer: "u^6"},
            {problem: "\\frac{v^{12}}{v^7}", answer: "v^5"},
            {problem: "\\frac{h^8}{h}", answer: "h^7"},
            {problem: "c^{16} \\div c^{12}", answer: "c^4"},
            {problem: "\\frac{f^6}{f^5}", answer: "f"},
            {problem: "g^7 \\div g^2", answer: "g^5"},
            
            // Comprehension & Application - Numerical bases with same understanding
            {problem: "\\frac{3^7}{3^2}", answer: "3^5"},
            {problem: "\\frac{10^{15}}{10^7}", answer: "10^8"},
            {problem: "\\frac{2^{10}}{2^5}", answer: "2^5"},
            {problem: "\\frac{5^{100}}{5^{98}}", answer: "5^2"},
            {problem: "\\frac{7^9}{7^6}", answer: "7^3"},
            {problem: "\\frac{4^{12}}{4^8}", answer: "4^4"},
            {problem: "6^{10} \\div 6^7", answer: "6^3"},
            {problem: "\\frac{8^5}{8^3}", answer: "8^2"},
            
            // More basic single variable problems
            {problem: "x^{10} \\div x^3", answer: "x^7"},
            {problem: "y^{12} \\div y^8", answer: "y^4"},
            {problem: "a^{15} \\div a^{10}", answer: "a^5"},
            {problem: "b^9 \\div b^4", answer: "b^5"},
            {problem: "c^{11} \\div c^7", answer: "c^4"},
            {problem: "d^{13} \\div d^9", answer: "d^4"},
            {problem: "e^{16} \\div e^{11}", answer: "e^5"},
            {problem: "f^{14} \\div f^8", answer: "f^6"},
            {problem: "g^{18} \\div g^{12}", answer: "g^6"}
        ];
    }

    generateQuestion() {
        const randomIndex = Math.floor(Math.random() * this.questions.length);
        return this.questions[randomIndex];
    }

    getQuestions() {
        return this.questions;
    }
}

// Register the level
window.AlgebraLevels = window.AlgebraLevels || {};
window.AlgebraLevels.indexLawDivisionEasy = new IndexLawsDivisionEasy();