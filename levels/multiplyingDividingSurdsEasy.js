class MultiplyingDividingSurdsEasy {
    constructor() {
        this.key = 'multiplyingDividingSurdsEasy';
        this.name = 'Multiplying Dividing Surds (Easy)';
        this.usedQuestionIndices = new Set();
        
        this.questions = [
            {problem: "\\sqrt{9} \\times \\sqrt{9}", answer: "9"},
            {problem: "\\sqrt{14} \\times \\sqrt{7}", answer: "7\\sqrt{2}"},
            {problem: "\\sqrt{2} \\times \\sqrt{22}", answer: "2\\sqrt{11}"},
            {problem: "\\sqrt{3} \\times \\sqrt{18}", answer: "3\\sqrt{6}"},
            {problem: "\\sqrt{10} \\times \\sqrt{5}", answer: "5\\sqrt{2}"},
            {problem: "\\sqrt{12} \\times \\sqrt{8}", answer: "4\\sqrt{6}"},
            {problem: "\\sqrt{2} \\times \\sqrt{3}", answer: "\\sqrt{6}"},
            {problem: "\\sqrt{4} \\times \\sqrt{3}", answer: "2\\sqrt{3}"},
            {problem: "\\sqrt{5} \\times \\sqrt{3}", answer: "\\sqrt{15}"},
            {problem: "\\sqrt{6} \\times \\sqrt{3}", answer: "3\\sqrt{2}"},
            {problem: "\\sqrt{24} \\times \\sqrt{3}", answer: "6\\sqrt{2}"},
            {problem: "\\sqrt{12} \\times \\sqrt{3}", answer: "6"},
            {problem: "\\sqrt{12} \\times \\sqrt{4}", answer: "4\\sqrt{3}"},
            {problem: "\\sqrt{11} \\times \\sqrt{4}", answer: "2\\sqrt{11}"},
            {problem: "\\sqrt{10} \\times \\sqrt{4}", answer: "2\\sqrt{10}"},
            {problem: "\\sqrt{10} \\times \\sqrt{8}", answer: "4\\sqrt{5}"},
            {problem: "\\sqrt{20} \\times \\sqrt{4}", answer: "4\\sqrt{5}"},
            {problem: "\\sqrt{20} \\times \\sqrt{5}", answer: "10"},
            {problem: "\\sqrt{20} \\times \\sqrt{10}", answer: "10\\sqrt{2}"},
            {problem: "\\sqrt{20} \\times \\sqrt{20}", answer: "20"},
            {problem: "\\sqrt{20} \\times \\sqrt{40}", answer: "20\\sqrt{2}"},
            {problem: "\\frac{\\sqrt{40}}{\\sqrt{10}}", answer: "2"},
            {problem: "\\frac{\\sqrt{18}}{\\sqrt{50}}", answer: "\\frac{3}{5}"},
            {problem: "\\sqrt{3} \\times \\sqrt{5}", answer: "\\sqrt{15}"},
            {problem: "\\sqrt{7} \\times \\sqrt{3}", answer: "\\sqrt{21}"},
            {problem: "\\sqrt{2} \\times \\sqrt{13}", answer: "\\sqrt{26}"},
            {problem: "\\sqrt{2} \\times (-\\sqrt{15})", answer: "-\\sqrt{30}"},
            {problem: "-\\sqrt{6} \\times \\sqrt{5}", answer: "-\\sqrt{30}"},
            {problem: "-\\sqrt{6} \\times (-\\sqrt{11})", answer: "\\sqrt{66}"},
            {problem: "\\sqrt{20} \\div \\sqrt{2}", answer: "\\sqrt{10}"},
            {problem: "\\sqrt{18} \\div \\sqrt{3}", answer: "\\sqrt{6}"},
            {problem: "\\sqrt{30} \\div (-\\sqrt{6})", answer: "-\\sqrt{5}"},
            {problem: "\\frac{\\sqrt{15}}{\\sqrt{5}}", answer: "\\sqrt{3}"},
            {problem: "\\frac{\\sqrt{30}}{\\sqrt{3}}", answer: "\\sqrt{10}"},
            {problem: "-\\frac{\\sqrt{26}}{\\sqrt{2}}", answer: "-\\sqrt{13}"},
            {problem: "\\sqrt{15} \\div \\sqrt{3}", answer: "\\sqrt{5}"},
            {problem: "\\sqrt{33} \\div (-\\sqrt{11})", answer: "-\\sqrt{3}"},
            {problem: "-\\sqrt{30} \\div -\\sqrt{6}", answer: "\\sqrt{5}"},
            {problem: "\\frac{-\\sqrt{40}}{\\sqrt{8}}", answer: "-\\sqrt{5}"},
            // Additional questions to reach 50+
            {problem: "\\sqrt{16} \\times \\sqrt{4}", answer: "8"},
            {problem: "\\sqrt{25} \\times \\sqrt{9}", answer: "15"},
            {problem: "\\sqrt{36} \\times \\sqrt{1}", answer: "6"},
            {problem: "\\sqrt{49} \\times \\sqrt{4}", answer: "14"},
            {problem: "\\sqrt{64} \\times \\sqrt{9}", answer: "24"},
            {problem: "\\sqrt{81} \\times \\sqrt{1}", answer: "9"},
            {problem: "\\sqrt{100} \\times \\sqrt{4}", answer: "20"},
            {problem: "\\sqrt{6} \\times \\sqrt{6}", answer: "6"},
            {problem: "\\sqrt{7} \\times \\sqrt{7}", answer: "7"},
            {problem: "\\sqrt{8} \\times \\sqrt{8}", answer: "8"},
            {problem: "\\sqrt{11} \\times \\sqrt{11}", answer: "11"},
            {problem: "\\sqrt{13} \\times \\sqrt{13}", answer: "13"},
            {problem: "\\frac{\\sqrt{36}}{\\sqrt{4}}", answer: "3"},
            {problem: "\\frac{\\sqrt{49}}{\\sqrt{9}}", answer: "\\frac{7}{3}"},
            {problem: "\\frac{\\sqrt{64}}{\\sqrt{16}}", answer: "2"},
            {problem: "\\frac{\\sqrt{81}}{\\sqrt{9}}", answer: "3"},
            {problem: "\\frac{\\sqrt{100}}{\\sqrt{25}}", answer: "2"},
            {problem: "\\sqrt{2} \\times \\sqrt{8}", answer: "4"},
            {problem: "\\sqrt{3} \\times \\sqrt{12}", answer: "6"},
            {problem: "\\sqrt{5} \\times \\sqrt{20}", answer: "10"},
            {problem: "\\sqrt{6} \\times \\sqrt{24}", answer: "12"},
            {problem: "\\sqrt{7} \\times \\sqrt{28}", answer: "14"},
            {problem: "\\sqrt{8} \\times \\sqrt{2}", answer: "4"},
            {problem: "\\sqrt{18} \\times \\sqrt{2}", answer: "6"},
            {problem: "\\sqrt{32} \\times \\sqrt{2}", answer: "8"},
            {problem: "\\sqrt{50} \\times \\sqrt{2}", answer: "10"},
            {problem: "\\sqrt{72} \\times \\sqrt{2}", answer: "12"},
            {problem: "\\frac{\\sqrt{12}}{\\sqrt{3}}", answer: "2"},
            {problem: "\\frac{\\sqrt{20}}{\\sqrt{5}}", answer: "2"},
            {problem: "\\frac{\\sqrt{28}}{\\sqrt{7}}", answer: "2"},
            {problem: "\\frac{\\sqrt{32}}{\\sqrt{8}}", answer: "2"},
            {problem: "\\frac{\\sqrt{45}}{\\sqrt{5}}", answer: "3"},
            {problem: "\\frac{\\sqrt{48}}{\\sqrt{3}}", answer: "4"},
            {problem: "\\frac{\\sqrt{50}}{\\sqrt{2}}", answer: "5"},
            {problem: "\\frac{\\sqrt{63}}{\\sqrt{7}}", answer: "3"},
            {problem: "\\frac{\\sqrt{75}}{\\sqrt{3}}", answer: "5"},
            {problem: "\\frac{\\sqrt{80}}{\\sqrt{5}}", answer: "4"}
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
window.AlgebraLevels.multiplyingDividingSurdsEasy = new MultiplyingDividingSurdsEasy();