class IndexLawsDivisionMedium {
    constructor() {
        this.name = "Index Laws Division (Medium)";
        this.description = "Division with coefficients and multiple variables";
        
        this.questions = [
            // Comprehension & Application - Simple coefficients with index laws
            {problem: "9x^3 \\div x^2", answer: "9x"},
            {problem: "14x^4 \\div x", answer: "14x^3"},
            {problem: "5y^4 \\div y^2", answer: "5y^2"},
            {problem: "6a^6 \\div a^5", answer: "6a"},
            {problem: "\\frac{4x^{10}}{x^7}", answer: "4x^3"},
            {problem: "\\frac{10x^{20}}{5x^7}", answer: "2x^{13}"},
            {problem: "\\frac{15x^6}{3x^4}", answer: "5x^2"},
            {problem: "\\frac{24y^8}{8y^3}", answer: "3y^5"},
            {problem: "12x^7 \\div x^4", answer: "12x^3"},
            {problem: "\\frac{21x^{12}}{7x^6}", answer: "3x^6"},
            {problem: "\\frac{16x^5}{4x^2}", answer: "4x^3"},

            // Analysis & Synthesis - Multiple variables with coefficient manipulation
            {problem: "\\frac{8b^{10}}{4b^5}", answer: "2b^5"},
            {problem: "\\frac{4a^{14}}{2a^7}", answer: "2a^7"},
            {problem: "\\frac{18y^{15}}{9y^7}", answer: "2y^8"},
            {problem: "2x^2y^3 \\div x", answer: "2xy^3"},
            {problem: "3x^5y^2 \\div (x^3y)", answer: "3x^2y"},
            {problem: "\\frac{5a^2b^4}{a^2b}", answer: "5b^3"},
            {problem: "\\frac{8xy^4}{2y^3}", answer: "4xy"},
            {problem: "\\frac{x^5y^7}{x^3y^2}", answer: "x^2y^5"},
            {problem: "\\frac{a^{10}b^5}{a^5b^2}", answer: "a^5b^3"},
            {problem: "\\frac{x^3y^{10}a^5}{x^2y^4a^3}", answer: "xy^6a^2"},
            {problem: "\\frac{x^4y^7a^3}{x^2y^4}", answer: "x^2y^3a^3"},
            {problem: "\\frac{-6x^7y^2}{3x^4y}", answer: "-2x^3y"},
            {problem: "\\frac{9x^3y^5}{3x^2y^2}", answer: "3xy^3"},
            {problem: "\\frac{14y^6x^4}{7y^3x^2}", answer: "2y^3x^2"},
            {problem: "\\frac{20a^8b^3}{4a^5b}", answer: "5a^3b^2"},
            {problem: "\\frac{-12x^4y^6}{6x^2y^4}", answer: "-2x^2y^2"},
            {problem: "\\frac{18x^9y^7}{9x^6y^3}", answer: "2x^3y^4"},
            {problem: "\\frac{8x^{10}y^5}{2x^7y^2}", answer: "4x^3y^3"},
            {problem: "\\frac{27x^6y^8}{9x^3y^5}", answer: "3x^3y^3"},
            {problem: "\\frac{10x^4y^9}{5x^2y^6}", answer: "2x^2y^3"},
            // Two variable problems with simple coefficients
            {problem: "4a^3b^2 \\div 2ab", answer: "2a^2b"},
            {problem: "6x^4y^3 \\div 3x^2y", answer: "2x^2y^2"},
            {problem: "8x^5y^2 \\div 4x^3y", answer: "2x^2y"},
            {problem: "10x^6y^4 \\div 5x^2y^3", answer: "2x^4y"},
            {problem: "12x^7y^5 \\div 6x^4y^2", answer: "2x^3y^3"},
            {problem: "15x^8y^3 \\div 3x^5y^2", answer: "5x^3y"},
            {problem: "20x^9y^6 \\div 4x^6y^4", answer: "5x^3y^2"},
            {problem: "18x^{10}y^7 \\div 9x^7y^5", answer: "2x^3y^2"},
            
            // Basic multi-variable division
            {problem: "\\frac{x^2y}{x}", answer: "xy"},
            {problem: "\\frac{x^3y}{x^2}", answer: "xy"},
            {problem: "\\frac{a^4b}{a^3}", answer: "ab"},
            {problem: "\\frac{x^5y}{x^4}", answer: "xy"},
            {problem: "9a^2b^3 \\div 3ab^2", answer: "3ab"},
            {problem: "12x^3y^2 \\div 4xy", answer: "3x^2y"},
            {problem: "15x^4y^3 \\div 5xy^2", answer: "3x^3y"},
            {problem: "18x^5y^4 \\div 6xy^3", answer: "3x^4y"},
            {problem: "25a^3b^2 \\div 5ab", answer: "5a^2b"},
            {problem: "32x^2y^3 \\div 8xy^2", answer: "4xy"},
            {problem: "27x^4y \\div 9x^2y", answer: "3x^2"},
            {problem: "40x^3y^2 \\div 10xy", answer: "4x^2y"},
            {problem: "\\frac{3x^3}{x^2}", answer: "3x"},
            {problem: "\\frac{x^3y^2}{x^2y}", answer: "xy"},
            {problem: "\\frac{12x^3}{4x^2}", answer: "3x"},
            
            // Questions moved from cancellingMedium (higher powers)
            {problem: "\\frac{5xy}{10x^3y}", answer: "\\frac{1}{2x^2}"},
            {problem: "\\frac{15xya}{5x^2y^3a}", answer: "\\frac{3}{xy^2}"},
            {problem: "\\frac{12x^2y}{6x^4y}", answer: "\\frac{2}{x^2}"},
            {problem: "\\frac{20x^2y^3}{8x^5y}", answer: "\\frac{5y^2}{2x^3}"},
            {problem: "\\frac{24a^3b^2}{12a^5b^4}", answer: "\\frac{2}{a^2b^2}"},
            {problem: "\\frac{15x^4y^3}{5x^2y}", answer: "3x^2y^2"},
            {problem: "\\frac{20x^2y}{8x^5y^3}", answer: "\\frac{5}{2x^3y^2}"},
            {problem: "\\frac{24a^2b^3}{6a^4b^5}", answer: "\\frac{4}{a^2b^2}"},
            {problem: "\\frac{36xya}{9x^3y^2a^4}", answer: "\\frac{4}{x^2ya^3}"},
            {problem: "\\frac{5ab^2}{9b^4}", answer: "\\frac{5a}{9b^2}"},
            {problem: "\\frac{10x^3y^2}{2x^5y^4}", answer: "\\frac{5}{x^2y^2}"}
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
window.AlgebraLevels.indexLawDivisionMedium = new IndexLawsDivisionMedium();