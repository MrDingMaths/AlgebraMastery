class IndexLawsDivisionMedium {
    constructor() {
        this.name = "Index Laws Division (Medium)";
        this.description = "Division with coefficients and multiple variables";
        
        this.questions = [
            // Comprehension & Application - Simple coefficients with index laws
            {problem: "9m^3 \\div m^2", answer: "9m"},
            {problem: "14x^4 \\div x", answer: "14x^3"},
            {problem: "5y^4 \\div y^2", answer: "5y^2"},
            {problem: "6a^6 \\div a^5", answer: "6a"},
            {problem: "\\frac{4k^{10}}{k^7}", answer: "4k^3"},
            {problem: "\\frac{10m^{20}}{5m^7}", answer: "2m^{13}"},
            {problem: "\\frac{15x^6}{3x^4}", answer: "5x^2"},
            {problem: "\\frac{24y^8}{8y^3}", answer: "3y^5"},
            {problem: "12p^7 \\div p^4", answer: "12p^3"},
            {problem: "\\frac{21q^{12}}{7q^6}", answer: "3q^6"},
            {problem: "\\frac{16r^5}{4r^2}", answer: "4r^3"},

            // Analysis & Synthesis - Multiple variables with coefficient manipulation
            {problem: "\\frac{8b^{10}}{4b^5}", answer: "2b^5"},
            {problem: "\\frac{4a^{14}}{2a^7}", answer: "2a^7"},
            {problem: "\\frac{18y^{15}}{9y^7}", answer: "2y^8"},
            {problem: "2x^2y^3 \\div x", answer: "2xy^3"},
            {problem: "3r^5s^2 \\div (r^3s)", answer: "3r^2s"},
            {problem: "\\frac{5a^2b^4}{a^2b}", answer: "5b^3"},
            {problem: "\\frac{8st^4}{2t^3}", answer: "4st"},
            {problem: "\\frac{m^5n^7}{m^3n^2}", answer: "m^2n^5"},
            {problem: "\\frac{a^{10}b^5}{a^5b^2}", answer: "a^5b^3"},
            {problem: "\\frac{x^3y^{10}z^5}{x^2y^4z^3}", answer: "xy^6z^2"},
            {problem: "\\frac{x^4y^7z^3}{x^2y^4}", answer: "x^2y^3z^3"},
            {problem: "\\frac{-6s^7t^2}{3s^4t}", answer: "-2s^3t"},
            {problem: "\\frac{9u^3v^5}{3u^2v^2}", answer: "3uv^3"},
            {problem: "\\frac{14w^6x^4}{7w^3x^2}", answer: "2w^3x^2"},
            {problem: "\\frac{20a^8b^3}{4a^5b}", answer: "5a^3b^2"},
            {problem: "\\frac{-12c^4d^6}{6c^2d^4}", answer: "-2c^2d^2"},
            {problem: "\\frac{18e^9f^7}{9e^6f^3}", answer: "2e^3f^4"},
            {problem: "\\frac{8g^{10}h^5}{2g^7h^2}", answer: "4g^3h^3"},
            {problem: "\\frac{27i^6j^8}{9i^3j^5}", answer: "3i^3j^3"},
            {problem: "\\frac{10k^4l^9}{5k^2l^6}", answer: "2k^2l^3"},
            // Two variable problems with simple coefficients
            {problem: "4a^3b^2 \\div 2ab", answer: "2a^2b"},
            {problem: "6x^4y^3 \\div 3x^2y", answer: "2x^2y^2"},
            {problem: "8p^5q^2 \\div 4p^3q", answer: "2p^2q"},
            {problem: "10m^6n^4 \\div 5m^2n^3", answer: "2m^4n"},
            {problem: "12r^7s^5 \\div 6r^4s^2", answer: "2r^3s^3"},
            {problem: "15t^8u^3 \\div 3t^5u^2", answer: "5t^3u"},
            {problem: "20v^9w^6 \\div 4v^6w^4", answer: "5v^3w^2"},
            {problem: "18d^{10}e^7 \\div 9d^7e^5", answer: "2d^3e^2"},
            
            // Basic multi-variable division
            {problem: "\\frac{u^2v}{u}", answer: "uv"},
            {problem: "\\frac{x^3y}{x^2}", answer: "xy"},
            {problem: "\\frac{a^4b}{a^3}", answer: "ab"},
            {problem: "\\frac{m^3n}{m^2}", answer: "mn"},
            {problem: "\\frac{p^5q}{p^4}", answer: "pq"},
            {problem: "9a^2b^3 \\div 3ab^2", answer: "3ab"},
            {problem: "12m^3n^2 \\div 4mn", answer: "3m^2n"},
            {problem: "15p^4q^3 \\div 5pq^2", answer: "3p^3q"},
            {problem: "18u^5v^4 \\div 6uv^3", answer: "3u^4v"},
            {problem: "25a^3b^2 \\div 5ab", answer: "5a^2b"},
            {problem: "32m^2n^3 \\div 8mn^2", answer: "4mn"},
            {problem: "27x^4y \\div 9x^2y", answer: "3x^2"},
            {problem: "40p^3q^2 \\div 10pq", answer: "4p^2q"},
            {problem: "\\frac{3x^3}{x^2}", answer: "3x"},
            {problem: "\\frac{x^3y^2}{x^2y}", answer: "xy"},
            {problem: "\\frac{12p^3}{4p^2}", answer: "3p"},
            
            // Questions moved from cancellingMedium (higher powers)
            {problem: "\\frac{5xy}{10x^3y}", answer: "\\frac{1}{2x^2}"},
            {problem: "\\frac{15rst}{5r^2s^3t}", answer: "\\frac{3}{rs^2}"},
            {problem: "\\frac{12m^2n}{6m^4n}", answer: "\\frac{2}{m^2}"},
            {problem: "\\frac{20x^2y^3}{8x^5y}", answer: "\\frac{5y^2}{2x^3}"},
            {problem: "\\frac{24a^3b^2}{12a^5b^4}", answer: "\\frac{2}{a^2b^2}"},
            {problem: "\\frac{15m^4n^3}{5m^2n}", answer: "3m^2n^2"},
            {problem: "\\frac{20x^2y}{8x^5y^3}", answer: "\\frac{5}{2x^3y^2}"},
            {problem: "\\frac{24a^2b^3}{6a^4b^5}", answer: "\\frac{4}{a^2b^2}"},
            {problem: "\\frac{36rst}{9r^3s^2t^4}", answer: "\\frac{4}{r^2st^3}"},
            {problem: "\\frac{5ab^2}{9b^4}", answer: "\\frac{5a}{9b^2}"},
            {problem: "\\frac{10m^3n^2}{2m^5n^4}", answer: "\\frac{5}{m^2n^2}"}
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