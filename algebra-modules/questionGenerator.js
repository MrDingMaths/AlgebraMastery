// algebra-modules/questionGenerator.js
class QuestionGenerator {
    constructor() {
        this.lastQuestionIndex = -1;
        this.lastQuestionsByLevel = {}; // Track last questions per level
        this.mistakeQuestions = []; // Store questions from mistakes
        this.mistakeQuestionIndex = 0; // Track current question in mistakes practice
    }

    generateQuestion(levelKey) {
        // Special handling for mistakes practice level
        if (levelKey === 'practiceAllMistakes') {
            return this.generateMistakeQuestion();
        }
        
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

    // Generate questions from recorded mistakes
    generateMistakeQuestion() {
        // Load mistakes if not already loaded
        if (this.mistakeQuestions.length === 0) {
            this.loadMistakeQuestions();
        }

        // If still no mistakes, return a fallback
        if (this.mistakeQuestions.length === 0) {
            return { problem: 'No mistakes to practice', answer: 'Keep practising!' };
        }

        // Get the next mistake question (cycling through them)
        const currentQuestion = this.mistakeQuestions[this.mistakeQuestionIndex];
        this.mistakeQuestionIndex = (this.mistakeQuestionIndex + 1) % this.mistakeQuestions.length;

        return {
            problem: currentQuestion.question,
            answer: currentQuestion.correctAnswer,
            originalMistake: currentQuestion // Keep reference to the original mistake
        };
    }

    // Load all mistakes and convert them to questions
    loadMistakeQuestions() {
        this.mistakeQuestions = [];
        
        if (window.progressTracker) {
            const allMistakes = window.progressTracker.getAllMistakes();
            
            // Convert mistakes to question format
            this.mistakeQuestions = allMistakes.map(mistake => ({
                question: mistake.question,
                correctAnswer: mistake.correctAnswer,
                levelName: mistake.levelName,
                levelKey: mistake.levelKey,
                mistakeId: mistake.id,
                originalStudentAnswer: mistake.studentAnswer
            }));
            
            // Shuffle the questions to provide variety
            this.shuffleArray(this.mistakeQuestions);
            
            // Reset the index
            this.mistakeQuestionIndex = 0;
            
            console.log(`Loaded ${this.mistakeQuestions.length} mistake questions for practice`);
        }
    }

    // Utility function to shuffle array
    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    // Reset mistakes practice (useful when starting new session)
    resetMistakesPractice() {
        this.mistakeQuestions = [];
        this.mistakeQuestionIndex = 0;
    }
}