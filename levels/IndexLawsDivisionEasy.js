class IndexLawsDivisionEasy {
    constructor() {
        this.name = "Index Laws Division (Easy)";
        this.description = "Basic division with index laws - single variables";
        
        this.questions = [
            // Recall & Recognition - Direct rule application with single variables
            {problem: "a^6 \\div a^4", answer: "a^2"},
            {problem: "x^5 \\div x^2", answer: "x^3"},
            {problem: "\\frac{x^{12}}{x^2}", answer: "x^{10}"},
            {problem: "\\frac{x^7}{x^6}", answer: "x"},
            {problem: "a^7 \\div a^6", answer: "a"},
            {problem: "x^9 \\div x^6", answer: "x^3"},
            {problem: "b^5 \\div b", answer: "b^4"},
            {problem: "\\frac{y^8}{y^3}", answer: "y^5"},
            {problem: "\\frac{x^8}{x^3}", answer: "x^5"},
            {problem: "\\frac{x^{15}}{x^9}", answer: "x^6"},
            {problem: "\\frac{x^5}{x^2}", answer: "x^3"},
            {problem: "\\frac{x^{10}}{x^3}", answer: "x^7"},
            {problem: "\\frac{x^{10}}{x}", answer: "x^9"},
            {problem: "x^8 \\div x^5", answer: "x^3"},
            {problem: "\\frac{x^9}{x^4}", answer: "x^5"},
            {problem: "x^{11} \\div x^7", answer: "x^4"},
            {problem: "\\frac{x^{13}}{x^8}", answer: "x^5"},
            {problem: "x^6 \\div x^4", answer: "x^2"},
            {problem: "\\frac{x^{14}}{x^{10}}", answer: "x^4"},
            {problem: "x^9 \\div x^3", answer: "x^6"},
            {problem: "\\frac{x^{12}}{x^7}", answer: "x^5"},
            {problem: "\\frac{x^8}{x}", answer: "x^7"},
            {problem: "x^{16} \\div x^{12}", answer: "x^4"},
            {problem: "\\frac{x^6}{x^5}", answer: "x"},
            {problem: "x^7 \\div x^2", answer: "x^5"},
            
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
            {problem: "x^{13} \\div x^9", answer: "x^4"},
            {problem: "x^{16} \\div x^{11}", answer: "x^5"},
            {problem: "x^{14} \\div x^8", answer: "x^6"},
            {problem: "x^{18} \\div x^{12}", answer: "x^6"}
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