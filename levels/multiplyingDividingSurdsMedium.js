class MultiplyingDividingSurdsMedium {
    constructor() {
        this.key = 'multiplyingDividingSurdsMedium';
        this.name = 'Multiplying Dividing Surds (Medium)';
        this.usedQuestionIndices = new Set();
        
        this.questions = [
            {problem: "\\frac{\\sqrt{45}}{3}", answer: "\\sqrt{5}"},
            {problem: "\\frac{\\sqrt{24}}{4}", answer: "\\frac{\\sqrt{6}}{2}"},
            {problem: "\\frac{\\sqrt{80}}{20}", answer: "\\frac{\\sqrt{5}}{5}"},
            {problem: "\\frac{\\sqrt{99}}{18}", answer: "\\frac{\\sqrt{11}}{6}"},
            {problem: "\\frac{3\\sqrt{44}}{2}", answer: "3\\sqrt{11}"},
            {problem: "\\frac{2\\sqrt{98}}{7}", answer: "2\\sqrt{2}"},
            {problem: "\\frac{6\\sqrt{75}}{20}", answer: "\\frac{3\\sqrt{3}}{2}"},
            {problem: "\\frac{2\\sqrt{108}}{18}", answer: "\\frac{2\\sqrt{3}}{3}"},
            {problem: "(2\\sqrt{3})^2", answer: "12"},
            {problem: "2\\sqrt{5} \\times \\sqrt{15}", answer: "10\\sqrt{3}"},
            {problem: "3\\sqrt{7} \\times \\sqrt{14}", answer: "21\\sqrt{2}"},
            {problem: "-5\\sqrt{10} \\times \\sqrt{30}", answer: "-50\\sqrt{3}"},
            {problem: "3\\sqrt{6} \\times (-\\sqrt{18})", answer: "-18\\sqrt{3}"},
            {problem: "3\\sqrt{14} \\times 2\\sqrt{21}", answer: "42\\sqrt{6}"},
            {problem: "-2\\sqrt{7} \\times (-3\\sqrt{14})", answer: "42\\sqrt{2}"},
            {problem: "\\sqrt{24} \\times \\sqrt{20}", answer: "4\\sqrt{30}"},
            {problem: "\\sqrt{54} \\times \\sqrt{75}", answer: "45\\sqrt{2}"},
            {problem: "2\\sqrt{72} \\times 3\\sqrt{80}", answer: "144\\sqrt{10}"},
            {problem: "\\sqrt{108} \\times (-2\\sqrt{125})", answer: "-60\\sqrt{15}"},
            {problem: "-4\\sqrt{27} \\times (-\\sqrt{28})", answer: "24\\sqrt{21}"},
            {problem: "\\sqrt{98} \\times \\sqrt{300}", answer: "70\\sqrt{6}"},
            {problem: "(3\\sqrt{2})^3", answer: "54\\sqrt{2}"},
            {problem: "(\\sqrt{5})^4", answer: "25"},
            {problem: "(-\\sqrt{3})^4", answer: "9"},
            {problem: "(2\\sqrt{2})^5", answer: "128\\sqrt{2}"},
            {problem: "-3(2\\sqrt{5})^3", answer: "-120\\sqrt{5}"},
            {problem: "2(-3\\sqrt{2})^3", answer: "-108\\sqrt{2}"},
            {problem: "\\frac{\\sqrt{27}}{\\sqrt{3}}", answer: "3"},
            {problem: "\\frac{\\sqrt{20}}{\\sqrt{5}}", answer: "2"},
            {problem: "\\frac{\\sqrt{162}}{\\sqrt{2}}", answer: "9"},
            {problem: "-\\frac{2\\sqrt{2}}{5\\sqrt{8}}", answer: "-\\frac{1}{5}"},
            {problem: "\\frac{2\\sqrt{45}}{15\\sqrt{5}}", answer: "\\frac{2}{5}"},
            {problem: "\\frac{5\\sqrt{27}}{\\sqrt{75}}", answer: "3"},
            {problem: "\\frac{6\\sqrt{14}}{3\\sqrt{7}}", answer: "2\\sqrt{2}"},
            {problem: "\\frac{15\\sqrt{12}}{5\\sqrt{2}}", answer: "3\\sqrt{6}"},
            {problem: "\\frac{4\\sqrt{30}}{8\\sqrt{6}}", answer: "\\frac{\\sqrt{5}}{2}"},
            {problem: "-\\frac{8\\sqrt{2}}{2\\sqrt{26}}", answer: "-\\frac{4\\sqrt{13}}{13}"},
            {problem: "-\\frac{3\\sqrt{3}}{9\\sqrt{21}}", answer: "-\\frac{\\sqrt{7}}{21}"},
            {problem: "\\frac{12\\sqrt{70}}{18\\sqrt{14}}", answer: "\\frac{2\\sqrt{5}}{3}"},
            {problem: "\\frac{2\\sqrt{6} \\times \\sqrt{5}}{\\sqrt{10}}", answer: "2\\sqrt{3}"},
            {problem: "\\frac{5\\sqrt{7} \\times \\sqrt{3}}{\\sqrt{28}}", answer: "\\frac{5\\sqrt{3}}{2}"},
            {problem: "\\frac{\\sqrt{15} \\times \\sqrt{20}}{\\sqrt{12}}", answer: "5"},
            {problem: "\\sqrt{\\frac{8}{9}}", answer: "\\frac{2\\sqrt{2}}{3}"},
            {problem: "\\sqrt{\\frac{12}{49}}", answer: "\\frac{2\\sqrt{3}}{7}"},
            {problem: "\\sqrt{\\frac{18}{25}}", answer: "\\frac{3\\sqrt{2}}{5}"},
            {problem: "\\sqrt{\\frac{10}{9}}", answer: "\\frac{\\sqrt{10}}{3}"},
            {problem: "\\sqrt{\\frac{21}{144}}", answer: "\\frac{\\sqrt{21}}{12}"},
            {problem: "\\sqrt{\\frac{26}{32}}", answer: "\\frac{\\sqrt{13}}{4}"},
            {problem: "\\sqrt{\\frac{28}{50}}", answer: "\\frac{\\sqrt{14}}{5}"},
            {problem: "\\sqrt{\\frac{15}{27}}", answer: "\\frac{\\sqrt{5}}{3}"},
            {problem: "\\sqrt{\\frac{45}{72}}", answer: "\\frac{\\sqrt{10}}{4}"},
            {problem: "2\\sqrt{2} \\times \\sqrt{3}", answer: "2\\sqrt{6}"},
            {problem: "2\\sqrt{4} \\times \\sqrt{3}", answer: "4\\sqrt{3}"},
            {problem: "\\sqrt{5} \\times 2\\sqrt{3}", answer: "2\\sqrt{15}"},
            {problem: "\\sqrt{6} \\times 2\\sqrt{3}", answer: "6\\sqrt{2}"},
            {problem: "\\sqrt{24} \\times 3\\sqrt{3}", answer: "18\\sqrt{2}"},
            {problem: "2\\sqrt{12} \\times 3\\sqrt{3}", answer: "36"},
            {problem: "2\\sqrt{12} \\times 3\\sqrt{4}", answer: "24\\sqrt{3}"},
            {problem: "2\\sqrt{11} \\times 3\\sqrt{4}", answer: "12\\sqrt{11}"},
            {problem: "\\sqrt{10} \\times 2\\sqrt{4}", answer: "4\\sqrt{10}"},
            {problem: "\\sqrt{10} \\times 2\\sqrt{8}", answer: "8\\sqrt{5}"},
            {problem: "\\sqrt{20} \\times 2\\sqrt{4}", answer: "8\\sqrt{5}"},
            {problem: "5\\sqrt{20} \\times 3\\sqrt{5}", answer: "150"},
            {problem: "5\\sqrt{20} \\times 3\\sqrt{10}", answer: "150\\sqrt{2}"},
            {problem: "5\\sqrt{20} \\times 3\\sqrt{20}", answer: "300"},
            {problem: "2\\sqrt{20} \\times 3\\sqrt{40}", answer: "120\\sqrt{2}"}
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
window.AlgebraLevels.multiplyingDividingSurdsMedium = new MultiplyingDividingSurdsMedium();