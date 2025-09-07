// algebra-modules/questionGenerator.js
class QuestionGenerator {
    constructor() {
        this.lastQuestionIndex = -1;
        this.lastQuestionsByLevel = {}; // Track last questions per level
    }

    generateQuestion(levelKey) {
        // Check if we have a modular level for this key
        if (window.AlgebraLevels && window.AlgebraLevels[levelKey]) {
            return window.AlgebraLevels[levelKey].generateQuestion();
        }
        
        // Fallback for levels not yet converted to modular format
        switch(levelKey) {
            default:
                console.log('Level not yet implemented:', levelKey);
                return { problem: '2(x + 3)', answer: '2x + 6' };
        }
    }

}