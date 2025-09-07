class MultiplyingDividingSurdsHard {
    constructor() {
        this.key = 'multiplyingDividingSurdsHard';
        this.name = 'Multiplying Dividing Surds (Hard)';
        this.usedQuestionIndices = new Set();
        
        this.questions = [
            {problem: "\\frac{(5\\sqrt{2})^2}{4} \\times \\frac{(2\\sqrt{3})^3}{3}", answer: "100\\sqrt{3}"},
            {problem: "\\frac{(2\\sqrt{3})^2}{9} \\times \\frac{(-3\\sqrt{2})^4}{3}", answer: "144"},
            {problem: "\\frac{(2\\sqrt{5})^3}{5} \\times \\frac{(-2\\sqrt{3})^5}{24}", answer: "-96\\sqrt{15}"},
            {problem: "\\frac{(3\\sqrt{3})^3}{2} \\div \\frac{(5\\sqrt{2})^2}{4}", answer: "\\frac{81\\sqrt{3}}{25}"},
            {problem: "\\frac{(2\\sqrt{5})^4}{50} \\div \\frac{(2\\sqrt{3})^3}{5}", answer: "\\frac{5\\sqrt{3}}{9}"},
            {problem: "\\frac{(2\\sqrt{2})^3}{9} \\div \\frac{(2\\sqrt{8})^2}{(\\sqrt{27})^2}", answer: "\\frac{3\\sqrt{2}}{2}"},
            {problem: "\\frac{(2\\sqrt{7})^3}{4}", answer: "14\\sqrt{7}"},
            {problem: "\\frac{(3\\sqrt{2})^3}{4}", answer: "\\frac{27\\sqrt{2}}{2}"},
            {problem: "\\frac{(3\\sqrt{2})^4}{4}", answer: "81"},
            {problem: "\\frac{6\\sqrt{3} \\times 8\\sqrt{2}}{\\sqrt{32} \\times \\sqrt{27}}", answer: "4"},
            // Additional complex questions for Hard level
            {problem: "\\frac{(4\\sqrt{5})^3}{8} \\times \\frac{(3\\sqrt{2})^2}{6}", answer: "120\\sqrt{5}"},
            {problem: "\\frac{(3\\sqrt{7})^2}{14} \\times \\frac{(-2\\sqrt{3})^3}{12}", answer: "-9\\sqrt{3}"},
            {problem: "\\frac{(5\\sqrt{2})^2}{25} \\times \\frac{(4\\sqrt{6})^2}{8}", answer: "24"},
            {problem: "\\frac{(2\\sqrt{11})^3}{11} \\div \\frac{(3\\sqrt{5})^2}{15}", answer: "\\frac{8\\sqrt{11}}{3}"},
            {problem: "\\frac{(4\\sqrt{3})^4}{48} \\div \\frac{(2\\sqrt{7})^3}{21}", answer: "\\frac{18\\sqrt{7}}{7}"},
            {problem: "\\frac{(6\\sqrt{2})^3}{24} \\div \\frac{(\\sqrt{18})^2}{6}", answer: "6\\sqrt{2}"},
            {problem: "(3\\sqrt{5})^3 \\times \\frac{1}{15\\sqrt{5}}", answer: "9"},
            {problem: "(2\\sqrt{7})^4 \\times \\frac{1}{28\\sqrt{7}}", answer: "4\\sqrt{7}"},
            {problem: "\\frac{(4\\sqrt{6})^2 \\times (3\\sqrt{2})^3}{\\sqrt{72} \\times \\sqrt{18}}", answer: "144\\sqrt{2}"},
            {problem: "\\frac{(2\\sqrt{10})^3 \\times \\sqrt{5}}{(\\sqrt{50})^2}", answer: "8\\sqrt{2}"},
            {problem: "\\frac{(3\\sqrt{8})^2 \\times (\\sqrt{12})^3}{(2\\sqrt{6})^3}", answer: "18\\sqrt{2}"},
            {problem: "\\left(\\sqrt{\\frac{32}{18}}\\right) \\times \\left(\\sqrt{\\frac{27}{8}}\\right)", answer: "\\sqrt{6}"},
            {problem: "\\sqrt{\\frac{(4\\sqrt{3})^2}{16}} \\times \\sqrt{\\frac{(6\\sqrt{2})^2}{18}}", answer: "2\\sqrt{3}"},
            {problem: "\\frac{\\sqrt{(5\\sqrt{7})^2}}{\\sqrt{175}} \\times \\sqrt{28}", answer: "2\\sqrt{7}"},
            {problem: "\\left(\\frac{2\\sqrt{6}}{3}\\right)^3 \\times \\frac{9}{8\\sqrt{6}}", answer: "2"},
            {problem: "\\left(\\frac{3\\sqrt{5}}{2}\\right)^2 \\times \\left(\\frac{4\\sqrt{3}}{3}\\right)^2", answer: "60"},
            {problem: "\\frac{(\\sqrt{27} + \\sqrt{48})^2}{15}", answer: "\\frac{49}{5}"},
            {problem: "\\frac{(\\sqrt{50} - \\sqrt{32})^2}{2}", answer: "1"},
            {problem: "\\frac{(2\\sqrt{12} + 3\\sqrt{27})^2}{36}", answer: "\\frac{169}{12}"},
            {problem: "\\sqrt{\\frac{(3\\sqrt{8})^2 \\times (2\\sqrt{18})^2}{(6\\sqrt{2})^4}}", answer: "1"},
            {problem: "\\frac{(4\\sqrt{15})^3}{60\\sqrt{3}} \\times \\frac{\\sqrt{5}}{8}", answer: "10"},
            {problem: "\\frac{(\\sqrt{63})^3}{9\\sqrt{7}} \\div \\frac{(\\sqrt{28})^2}{4}", answer: "3"},
            {problem: "\\left(\\frac{\\sqrt{72}}{\\sqrt{8}}\\right)^2 \\times \\left(\\frac{\\sqrt{50}}{\\sqrt{2}}\\right)^2", answer: "225"},
            {problem: "\\frac{(5\\sqrt{6})^2 \\times (2\\sqrt{15})^3}{(3\\sqrt{10})^2 \\times (\\sqrt{18})^2}", answer: "\\frac{100\\sqrt{15}}{9}"},
            {problem: "\\sqrt{\\frac{(6\\sqrt{7})^4}{(3\\sqrt{14})^2}}", answer: "6\\sqrt{14}"},
            {problem: "\\frac{\\sqrt{(8\\sqrt{3})^2} \\times \\sqrt{(6\\sqrt{5})^2}}{\\sqrt{(4\\sqrt{15})^2}}", answer: "12"},
            {problem: "\\left(\\sqrt{\\frac{48}{27}}\\right)^3 \\times \\sqrt{\\frac{81}{16}}", answer: "\\frac{16}{3}"},
            {problem: "\\frac{(3\\sqrt{20})^2 \\times \\sqrt{45}}{(2\\sqrt{5})^3 \\times \\sqrt{4}}", answer: "\\frac{27}{4}"},
            {problem: "\\sqrt{\\frac{(10\\sqrt{2})^2}{40}} \\times \\sqrt{\\frac{(12\\sqrt{3})^2}{27}}", answer: "4\\sqrt{5}"},
            {problem: "\\left(\\frac{4\\sqrt{21}}{\\sqrt{84}}\\right)^2 \\times \\frac{(3\\sqrt{7})^2}{9}", answer: "28"},
            {problem: "\\frac{(2\\sqrt{45})^3 \\times \\sqrt{5}}{(3\\sqrt{20})^2 \\times \\sqrt{25}}", answer: "6"},
            {problem: "\\sqrt{\\frac{(15\\sqrt{2})^2 \\times (4\\sqrt{8})^2}{(6\\sqrt{32})^2}}", answer: "5\\sqrt{2}"},
            {problem: "\\frac{\\sqrt{(9\\sqrt{12})^2} \\times \\sqrt{(8\\sqrt{3})^2}}{\\sqrt{(12\\sqrt{9})^2}}", answer: "12"},
            {problem: "\\left(\\sqrt{\\frac{75}{48}}\\right) \\times \\left(\\sqrt{\\frac{64}{25}}\\right) \\times \\left(\\sqrt{\\frac{9}{16}}\\right)", answer: "\\frac{3}{2}"},
            {problem: "\\sqrt{\\frac{(12\\sqrt{5})^4}{(4\\sqrt{20})^2 \\times (3\\sqrt{5})^2}}", answer: "6"},
            {problem: "\\left(\\frac{6\\sqrt{8}}{4\\sqrt{2}}\\right)^3 \\times \\frac{\\sqrt{16}}{9}", answer: "12"},
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
window.AlgebraLevels.multiplyingDividingSurdsHard = new MultiplyingDividingSurdsHard();