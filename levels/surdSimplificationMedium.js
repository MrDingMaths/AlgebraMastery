class SurdSimplificationMedium {
    constructor() {
        this.key = 'surdSimplificationMedium';
        this.name = 'Surd Simplification (Medium)';
        this.usedQuestionIndices = new Set();
        
        this.questions = [
            {problem: "(2\\sqrt{3})^2", answer: "12"},
            {problem: "(3\\sqrt{2})^2", answer: "18"},
            {problem: "(2\\sqrt{10})^2", answer: "40"},
            {problem: "(5\\sqrt{2})^2", answer: "50"},
            {problem: "(4\\sqrt{5})^2", answer: "80"},
            {problem: "(3\\sqrt{10})^2", answer: "90"},
            {problem: "(10\\sqrt{7})^2", answer: "700"},
            {problem: "2\\sqrt{8}", answer: "4\\sqrt{2}"},
            {problem: "3\\sqrt{8}", answer: "6\\sqrt{2}"},
            {problem: "2\\sqrt{18}", answer: "6\\sqrt{2}"},
            {problem: "4\\sqrt{48}", answer: "16\\sqrt{3}"},
            {problem: "3\\sqrt{98}", answer: "21\\sqrt{2}"},
            {problem: "4\\sqrt{125}", answer: "20\\sqrt{5}"},
            {problem: "5\\sqrt{72}", answer: "30\\sqrt{2}"},
            {problem: "5\\sqrt{144}", answer: "60"},
            {problem: "\\sqrt{128}", answer: "8\\sqrt{2}"},
            {problem: "\\sqrt{160}", answer: "4\\sqrt{10}"},
            {problem: "\\sqrt{162}", answer: "9\\sqrt{2}"},
            {problem: "\\sqrt{175}", answer: "5\\sqrt{7}"},
            {problem: "\\sqrt{192}", answer: "8\\sqrt{3}"},
            {problem: "\\sqrt{200}", answer: "10\\sqrt{2}"},
            {problem: "\\sqrt{250}", answer: "5\\sqrt{10}"},
            {problem: "\\sqrt{320}", answer: "8\\sqrt{5}"},
            {problem: "\\sqrt{360}", answer: "6\\sqrt{10}"},
            {problem: "\\sqrt{500}", answer: "10\\sqrt{5}"},
            {problem: "\\sqrt{1600}", answer: "40"},
            {problem: "5\\sqrt{360}", answer: "30\\sqrt{10}"},
            {problem: "(6\\sqrt{2})^2", answer: "72"},
            {problem: "(4\\sqrt{3})^2", answer: "48"},
            {problem: "(7\\sqrt{5})^2", answer: "245"},
            {problem: "(2\\sqrt{6})^2", answer: "24"},
            {problem: "(8\\sqrt{3})^2", answer: "192"},
            {problem: "2\\sqrt{32}", answer: "8\\sqrt{2}"},
            {problem: "3\\sqrt{50}", answer: "15\\sqrt{2}"},
            {problem: "4\\sqrt{27}", answer: "12\\sqrt{3}"},
            {problem: "6\\sqrt{12}", answer: "12\\sqrt{3}"},
            {problem: "2\\sqrt{75}", answer: "10\\sqrt{3}"},
            {problem: "3\\sqrt{112}", answer: "12\\sqrt{7}"},
            {problem: "\\sqrt{180}", answer: "6\\sqrt{5}"},
            {problem: "\\sqrt{245}", answer: "7\\sqrt{5}"},
            {problem: "\\sqrt{288}", answer: "12\\sqrt{2}"},
            {problem: "\\sqrt{300}", answer: "10\\sqrt{3}"},
            {problem: "\\sqrt{450}", answer: "15\\sqrt{2}"},
            {problem: "\\sqrt{512}", answer: "16\\sqrt{2}"},
            {problem: "\\sqrt{675}", answer: "15\\sqrt{3}"},
            {problem: "\\sqrt{800}", answer: "20\\sqrt{2}"},
            {problem: "3\\sqrt{200}", answer: "30\\sqrt{2}"},
            {problem: "2\\sqrt{288}", answer: "24\\sqrt{2}"},
            {problem: "4\\sqrt{162}", answer: "36\\sqrt{2}"},
            {problem: "6\\sqrt{50}", answer: "30\\sqrt{2}"}
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
window.AlgebraLevels.surdSimplificationMedium = new SurdSimplificationMedium();