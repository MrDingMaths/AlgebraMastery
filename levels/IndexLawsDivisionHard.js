class IndexLawsDivisionHard {
    constructor() {
        this.name = "Index Laws Division (Hard)";
        this.description = "Complex division with multiple variables and large coefficients";
        
        this.questions = [
            // Evaluation & Problem Solving - Multi-variable problems with moderate complexity
            {problem: "\\frac{16x^8y^6}{12x^2y^3}", answer: "\\frac{4}{3}x^6y^3"},
            {problem: "\\frac{6s^6t^3}{14s^5t}", answer: "\\frac{3}{7}st^2"},
            {problem: "\\frac{8m^5n^4}{6m^4n^3}", answer: "\\frac{4}{3}mn"},
            {problem: "6p^4q^2 \\div (3q^2p^2)", answer: "2p^2"},
            {problem: "16m^7x^5 \\div (8m^3x^4)", answer: "2m^4x"},
            {problem: "\\frac{30x^{20}y^{12}}{18x^2y^5}", answer: "\\frac{5}{3}x^{18}y^7"},
            {problem: "\\frac{28a^7b^{11}}{21a^4b^7}", answer: "\\frac{4}{3}a^3b^4"},
            {problem: "\\frac{45c^{13}d^9}{30c^8d^5}", answer: "\\frac{3}{2}c^5d^4"},
            {problem: "\\frac{9e^{10}f^{14}}{6e^6f^9}", answer: "\\frac{3}{2}e^4f^5"},
            {problem: "\\frac{40x^{14}y^{10}z^8}{25x^9y^6z^5}", answer: "\\frac{8}{5}x^5y^4z^3"},
            
            // Complex fractional coefficients and negative terms
            {problem: "\\frac{12y^2}{-18y}", answer: "-\\frac{2y}{3}"},
            {problem: "\\frac{-4a^2}{8ab}", answer: "-\\frac{a}{2b}"},
            {problem: "\\frac{-21p}{-3p}", answer: "7"},
            {problem: "\\frac{-15z}{-20z^2}", answer: "\\frac{3}{4z}"},
            {problem: "\\frac{-27pq}{6p}", answer: "-\\frac{9q}{2}"},
            {problem: "\\frac{25x^2y}{-5xy}", answer: "-5x"},
            {problem: "\\frac{9m^2n}{18mn}", answer: "\\frac{m}{2}"},
            {problem: "\\frac{-7m^3}{-m}", answer: "7m^2"},
            {problem: "\\frac{-12a^2b}{ab}", answer: "-12a"},
            {problem: "\\frac{-9x^7}{3x^4}", answer: "-3x^3"},
            {problem: "\\frac{2ab}{6a^2b^3}", answer: "\\frac{1}{3ab^2}"},
            {problem: "\\frac{14cd^2}{21c^3d^3}", answer: "\\frac{2}{3c^2d}"},
            {problem: "\\frac{2xy^2z^3}{4x^3y^2z}", answer: "\\frac{z^2}{2x^2}"},
            {problem: "\\frac{7x^5}{63x}", answer: "\\frac{x^4}{9}"},
            {problem: "\\frac{3m^7}{12m^2}", answer: "\\frac{m^5}{4}"},
            {problem: "\\frac{5w^2}{25w}", answer: "\\frac{w}{5}"},
            {problem: "\\frac{4a^4}{20a^3}", answer: "\\frac{a}{5}"},
            {problem: "\\frac{6z^9}{18z^5}", answer: "\\frac{z^4}{3}"},
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