class SurdSimplificationEasy {
    constructor() {
        this.key = 'surdSimplificationEasy';
        this.name = 'Surd Simplification (Easy)';
        this.usedQuestionIndices = new Set();
        
        this.questions = [
            {problem: "(\\sqrt{2})^2", answer: "2"},
            {problem: "(\\sqrt{3})^2", answer: "3"},
            {problem: "(\\sqrt{5})^2", answer: "5"},
            {problem: "(\\sqrt{10})^2", answer: "10"},
            {problem: "\\sqrt{8}", answer: "2\\sqrt{2}"},
            {problem: "\\sqrt{12}", answer: "2\\sqrt{3}"},
            {problem: "\\sqrt{24}", answer: "2\\sqrt{6}"},
            {problem: "\\sqrt{32}", answer: "4\\sqrt{2}"},
            {problem: "\\sqrt{40}", answer: "2\\sqrt{10}"},
            {problem: "\\sqrt{45}", answer: "3\\sqrt{5}"},
            {problem: "\\sqrt{48}", answer: "4\\sqrt{3}"},
            {problem: "\\sqrt{64}", answer: "8"},
            {problem: "\\sqrt{72}", answer: "6\\sqrt{2}"},
            {problem: "\\sqrt{75}", answer: "5\\sqrt{3}"},
            {problem: "\\sqrt{80}", answer: "4\\sqrt{5}"},
            {problem: "\\sqrt{90}", answer: "3\\sqrt{10}"},
            {problem: "\\sqrt{98}", answer: "7\\sqrt{2}"},
            {problem: "3(\\sqrt{10})^2", answer: "30"},
            {problem: "5(\\sqrt{10})^2", answer: "50"},
            {problem: "10(\\sqrt{10})^2", answer: "100"},
            {problem: "5\\sqrt{25}", answer: "25"},
            {problem: "5\\sqrt{36}", answer: "30"},
            {problem: "(\\sqrt{4})^2", answer: "4"},
            {problem: "(\\sqrt{6})^2", answer: "6"},
            {problem: "(\\sqrt{7})^2", answer: "7"},
            {problem: "(\\sqrt{8})^2", answer: "8"},
            {problem: "(\\sqrt{9})^2", answer: "9"},
            {problem: "\\sqrt{4}", answer: "2"},
            {problem: "\\sqrt{9}", answer: "3"},
            {problem: "\\sqrt{16}", answer: "4"},
            {problem: "\\sqrt{25}", answer: "5"},
            {problem: "\\sqrt{36}", answer: "6"},
            {problem: "\\sqrt{49}", answer: "7"},
            {problem: "\\sqrt{81}", answer: "9"},
            {problem: "\\sqrt{100}", answer: "10"},
            {problem: "\\sqrt{121}", answer: "11"},
            {problem: "\\sqrt{144}", answer: "12"},
            {problem: "\\sqrt{18}", answer: "3\\sqrt{2}"},
            {problem: "\\sqrt{20}", answer: "2\\sqrt{5}"},
            {problem: "\\sqrt{27}", answer: "3\\sqrt{3}"},
            {problem: "\\sqrt{28}", answer: "2\\sqrt{7}"},
            {problem: "\\sqrt{50}", answer: "5\\sqrt{2}"},
            {problem: "\\sqrt{52}", answer: "2\\sqrt{13}"},
            {problem: "\\sqrt{63}", answer: "3\\sqrt{7}"},
            {problem: "2\\sqrt{4}", answer: "4"},
            {problem: "3\\sqrt{9}", answer: "9"},
            {problem: "4\\sqrt{16}", answer: "16"},
            {problem: "2(\\sqrt{5})^2", answer: "10"},
            {problem: "4(\\sqrt{3})^2", answer: "12"},
            {problem: "6(\\sqrt{2})^2", answer: "12"}
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
window.AlgebraLevels.surdSimplificationEasy = new SurdSimplificationEasy();