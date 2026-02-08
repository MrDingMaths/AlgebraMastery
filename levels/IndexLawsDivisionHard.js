class IndexLawsDivisionHard {
    constructor() {
        this.name = "Index Laws Division (Hard)";
        this.description = "Complex division with multiple variables and large coefficients";
        
        this.questions = [
            // Evaluation & Problem Solving - Multi-variable problems with moderate complexity
            {problem: "\\frac{16x^8y^6}{12x^2y^3}", answer: "\\frac{4}{3}x^6y^3"},
            {problem: "\\frac{6x^6y^3}{14x^5y}", answer: "\\frac{3}{7}xy^2"},
            {problem: "\\frac{8x^5y^4}{6x^4y^3}", answer: "\\frac{4}{3}xy"},
            {problem: "6x^4y^2 \\div (3y^2x^2)", answer: "2x^2"},
            {problem: "16y^7x^5 \\div (8y^3x^4)", answer: "2y^4x"},
            {problem: "\\frac{30x^{20}y^{12}}{18x^2y^5}", answer: "\\frac{5}{3}x^{18}y^7"},
            {problem: "\\frac{28a^7b^{11}}{21a^4b^7}", answer: "\\frac{4}{3}a^3b^4"},
            {problem: "\\frac{45x^{13}y^9}{30x^8y^5}", answer: "\\frac{3}{2}x^5y^4"},
            {problem: "\\frac{9x^{10}y^{14}}{6x^6y^9}", answer: "\\frac{3}{2}x^4y^5"},
            {problem: "\\frac{40x^{14}y^{10}a^8}{25x^9y^6a^5}", answer: "\\frac{8}{5}x^5y^4a^3"},
            
            // Complex fractional coefficients and negative terms
            {problem: "\\frac{12y^2}{-18y}", answer: "-\\frac{2y}{3}"},
            {problem: "\\frac{-4a^2}{8ab}", answer: "-\\frac{a}{2b}"},
            {problem: "\\frac{-21x}{-3x}", answer: "7"},
            {problem: "\\frac{-15x}{-20x^2}", answer: "\\frac{3}{4x}"},
            {problem: "\\frac{-27xy}{6x}", answer: "-\\frac{9y}{2}"},
            {problem: "\\frac{25x^2y}{-5xy}", answer: "-5x"},
            {problem: "\\frac{9x^2y}{18xy}", answer: "\\frac{x}{2}"},
            {problem: "\\frac{-7x^3}{-x}", answer: "7x^2"},
            {problem: "\\frac{-12a^2b}{ab}", answer: "-12a"},
            {problem: "\\frac{-9x^7}{3x^4}", answer: "-3x^3"},
            {problem: "\\frac{2ab}{6a^2b^3}", answer: "\\frac{1}{3ab^2}"},
            {problem: "\\frac{14xy^2}{21x^3y^3}", answer: "\\frac{2}{3x^2y}"},
            {problem: "\\frac{2xy^2a^3}{4x^3y^2a}", answer: "\\frac{a^2}{2x^2}"},
            {problem: "\\frac{7x^5}{63x}", answer: "\\frac{x^4}{9}"},
            {problem: "\\frac{3x^7}{12x^2}", answer: "\\frac{x^5}{4}"},
            {problem: "\\frac{5x^2}{25x}", answer: "\\frac{x}{5}"},
            {problem: "\\frac{4a^4}{20a^3}", answer: "\\frac{a}{5}"},
            {problem: "\\frac{6x^9}{18x^5}", answer: "\\frac{x^4}{3}"},
            {problem: "\\frac{-8x^2y^3}{16x^2y}", answer: "-\\frac{y^2}{2}"},
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
window.AlgebraLevels.indexLawDivisionHard = new IndexLawsDivisionHard();