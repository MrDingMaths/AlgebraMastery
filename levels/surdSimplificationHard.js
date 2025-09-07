class SurdSimplificationHard {
    constructor() {
        this.key = 'surdSimplificationHard';
        this.name = 'Surd Simplification (Hard)';
        this.usedQuestionIndices = new Set();
        
        this.questions = [
            {problem: "5\\sqrt{720}", answer: "60\\sqrt{5}"},
            {problem: "5\\sqrt{1440}", answer: "60\\sqrt{10}"},
            {problem: "\\sqrt{a^2b}", answer: "a\\sqrt{b}"},
            {problem: "\\sqrt{a^4b^2}", answer: "a^2b"},
            {problem: "\\sqrt[3]{a^6b^3}", answer: "a^2b"},
            {problem: "\\sqrt{a^5b^3}", answer: "a^2b\\sqrt{ab}"},
            {problem: "3\\sqrt{1280}", answer: "48\\sqrt{5}"},
            {problem: "4\\sqrt{1800}", answer: "120\\sqrt{2}"},
            {problem: "6\\sqrt{2000}", answer: "120\\sqrt{5}"},
            {problem: "2\\sqrt{3200}", answer: "80\\sqrt{2}"},
            {problem: "\\sqrt{x^6y^4}", answer: "x^3y^2"},
            {problem: "\\sqrt{4x^8y^6}", answer: "2x^4y^3"},
            {problem: "\\sqrt{9a^{10}b^8}", answer: "3a^5b^4"},
            {problem: "\\sqrt{16x^{12}y^{14}}", answer: "4x^6y^7"},
            {problem: "\\sqrt{25m^6n^{10}}", answer: "5m^3n^5"},
            {problem: "\\sqrt{x^3y^5}", answer: "xy^2\\sqrt{xy}"},
            {problem: "\\sqrt{8x^7y^3}", answer: "2x^3y\\sqrt{2xy}"},
            {problem: "\\sqrt{18a^5b^7}", answer: "3a^2b^3\\sqrt{2ab}"},
            {problem: "\\sqrt{32m^9n^5}", answer: "4m^4n^2\\sqrt{2mn}"},
            {problem: "\\sqrt{50p^7q^9}", answer: "5p^3q^4\\sqrt{2pq}"},
            {problem: "(3\\sqrt{5})^2 \\times 2", answer: "90"},
            {problem: "(4\\sqrt{7})^2 \\times 3", answer: "336"},
            {problem: "2(5\\sqrt{3})^2", answer: "150"},
            {problem: "3(2\\sqrt{11})^2", answer: "132"},
            {problem: "\\sqrt{1800 \\times 2}", answer: "60"},
            {problem: "\\sqrt{675 \\times 3}", answer: "45"},
            {problem: "\\sqrt{392 \\times 2}", answer: "28"},
            {problem: "\\frac{\\sqrt{72}}{\\sqrt{2}}", answer: "6"},
            {problem: "\\frac{\\sqrt{200}}{\\sqrt{8}}", answer: "5"},
            {problem: "\\frac{\\sqrt{300}}{\\sqrt{12}}", answer: "5"},
            {problem: "\\frac{\\sqrt{450}}{\\sqrt{18}}", answer: "5"},
            {problem: "\\sqrt{\\frac{72}{2}}", answer: "6"},
            {problem: "\\sqrt{\\frac{200}{8}}", answer: "5"},
            {problem: "\\sqrt{\\frac{288}{18}}", answer: "4"},
            {problem: "\\sqrt{12x^2y^4}", answer: "2xy^2\\sqrt{3}"},
            {problem: "\\sqrt{75a^6b^2}", answer: "5a^3b\\sqrt{3}"},
            {problem: "\\sqrt{108m^4n^8}", answer: "6m^2n^4\\sqrt{3}"},
            {problem: "\\sqrt{x^{10}y^{12}z^8}", answer: "x^5y^6z^4"},
            {problem: "\\sqrt{49a^{14}b^{16}c^6}", answer: "7a^7b^8c^3"},
            {problem: "\\sqrt{100p^{20}q^{18}r^{22}}", answer: "10p^{10}q^9r^{11}"},
            {problem: "\\sqrt{64x^{24}y^{30}}", answer: "8x^{12}y^{15}"},
            {problem: "\\sqrt{121m^{16}n^{14}}", answer: "11m^8n^7"},
        ];
    }

    generateQuestion() {
        if (this.usedQuestionIndices.size >= this.questions.length) {
            this.usedQuestionIndices.clear();
        }
        
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

window.AlgebraLevels = window.AlgebraLevels || {};
window.AlgebraLevels.surdSimplificationHard = new SurdSimplificationHard();