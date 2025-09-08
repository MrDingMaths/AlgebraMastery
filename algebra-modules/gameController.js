// algebra-modules/gameController.js
class GameController {
    constructor() {
        this.state = new GameState();
        this.ui = new UI();
        this.timer = new Timer(this.ui.elements.timer);
        this.questionGen = new QuestionGenerator();
        this.algebraEngine = new AlgebraEngine();
        this.confetti = new Confetti('confetti-canvas');
        this.algebraMasteryTracker = new AlgebraMasteryTracker();
        this.isChecking = false;
        this.answerSubmitted = false;
        
        // Initialize MathQuill after DOM is ready
        this.ui.initializeMathQuill();
        
        this.setupEventListeners();
        this.initializeProgressTracking();
        this.initializeLearningPath();
    }

    initializeProgressTracking() {
        // Only initialize if not already initialized
        if (!window.progressTracker) {
            window.progressTracker = new ProgressTracker();
            window.progressChart = new ProgressChart('progress-chart', window.progressTracker);
            window.progressShare = new ProgressShare(window.progressTracker, window.progressChart);
            window.progressUI = new ProgressUI(window.progressTracker, window.progressChart, window.progressShare);
        }
    }

    initializeLearningPath() {
        // Set up success screen callbacks
        this.ui.setSuccessScreenCallbacks(
            () => this.continueToNextChallenge(),
            () => this.replayCurrentLevel()
        );

        // Initialize the learning path interface
        this.updateLearningPathInterface();
    }

    setupEventListeners() {
        // Quit button
        this.ui.elements.quitBtn.addEventListener('click', () => this.quitGame());
        this.ui.elements.playAgainBtn.addEventListener('click', () => this.quitGame());
        
        // Listen for Enter key from MathQuill
        document.addEventListener('mathquill-enter', () => {
            if (!this.isChecking && !this.answerSubmitted) {
                this.checkAnswer();
            }
        });
        
        // Global ESC key handler
        this.handleEscKey = (e) => {
            if (e.key === 'Escape') {
                // Only quit if we're in the game screen
                if (!this.ui.elements.gameScreen.classList.contains('hidden')) {
                    this.quitGame();
                }
            }
        };
        document.addEventListener('keydown', this.handleEscKey);
    }

    startGame(level) {
        this.state.setLevel(level);
        this.ui.showScreen('game');
        this.ui.updateStreak(0);
        this.ui.updateLevelName(level.name);
        this.timer.start();
        this.generateQuestion();
    }

    generateQuestion() {
        this.ui.clearFeedback();
        this.ui.clearInputFeedback();
        this.answerSubmitted = false;
        
        // Reset incorrect count when moving to new question
        this.state.resetIncorrectCount();
        
        const question = this.questionGen.generateQuestion(this.state.currentLevel.key);
        if (!question) {
            console.error("Failed to generate question");
            return;
        }
        
        this.state.currentQuestion = question;
        this.state.currentAnswer = question.answer;
        this.ui.displayQuestion(question);
        this.ui.updateTestAnswer(question.answer);
    }

    checkAnswer() {
        if (this.isChecking || this.answerSubmitted) return;
        this.answerSubmitted = true;
        this.isChecking = true;

        const userAnswer = this.ui.getAnswerFromUI();
        
        if (!userAnswer || userAnswer.trim() === '') {
            this.ui.showFeedback(false, 'Please enter an answer');
            this.answerSubmitted = false;
            this.isChecking = false;
            return;
        }

        const correctAnswer = this.state.currentAnswer;
        const isCorrect = this.algebraEngine.compareExpressions(userAnswer, correctAnswer, this.state.currentLevel.value);

        if (isCorrect) {
            // Reset incorrect count on correct answer
            this.state.resetIncorrectCount();
            
            const newStreak = this.state.incrementStreak();
            this.ui.updateStreak(newStreak);
            this.ui.showInputFeedback(true);
            this.ui.showFeedback(true, CONFIG.POSITIVE_FEEDBACK[Math.floor(Math.random() * CONFIG.POSITIVE_FEEDBACK.length)]);
            this.confetti.trigger(CONFIG.CONFETTI.CORRECT);
            
            if (this.state.isComplete()) {
                setTimeout(() => this.showSuccess(), 500);
            } else {
                setTimeout(() => { 
                    this.answerSubmitted = false;
                    this.generateQuestion(); 
                    this.isChecking = false; 
                }, CONFIG.FEEDBACK_DELAY_CORRECT);
            }
        } else {
            // Increment incorrect count
            const incorrectCount = this.state.incrementIncorrectCount();
            
            if (this.state.isSecondIncorrectAttempt()) {
                // Second incorrect attempt - reset streak, show correct answer, move to next question
                this.state.resetStreak();
                this.ui.updateStreak(0);
                this.ui.showInputFeedback(false);
                this.ui.showFeedback(false, null, correctAnswer);
                this.timer.reset();
                
                // Record the mistake
                this.recordMistake(userAnswer, correctAnswer);
                
                setTimeout(() => { 
                    this.answerSubmitted = false;
                    this.generateQuestion(); 
                    this.timer.start();
                    this.isChecking = false; 
                }, CONFIG.FEEDBACK_DELAY_INCORRECT);
            } else {
                // First incorrect attempt - give second chance
                this.ui.showInputFeedback(false);
                this.ui.showFeedback(false, CONFIG.SECOND_CHANCE_FEEDBACK[Math.floor(Math.random() * CONFIG.SECOND_CHANCE_FEEDBACK.length)]);
                
                setTimeout(() => {
                    this.ui.clearFeedback();
                    this.ui.clearInputFeedback();
                    this.answerSubmitted = false;
                    this.isChecking = false;
                    
                    // Refocus the input field for second attempt
                    if (this.ui.mathField) {
                        this.ui.mathField.focus();
                    }
                }, CONFIG.FEEDBACK_DELAY_INCORRECT);
            }
        }
    }

    showSuccess() {
        this.timer.stop();
        const time = this.timer.getSeconds();
        const previousBest = StorageManager.getBestTime(this.state.currentLevel.key);
        const isNewBest = !previousBest || time < previousBest;
        
        if (isNewBest) {
            StorageManager.saveBestTime(this.state.currentLevel.key, time);
            this.confetti.trigger(CONFIG.CONFETTI.SUCCESS);
        }
        
        // Add progress tracking
        try {
            if (window.progressTracker) {
                console.log('Recording progress for:', this.state.currentLevel.key, 'Time:', time);
                window.progressTracker.recordProgress(
                    this.state.currentLevel.key,
                    time,
                    CONFIG.REQUIRED_STREAK
                );
            }
        } catch (error) {
            console.error('Error recording progress (non-blocking):', error);
        }
        
        const rating = StorageManager.getRating(time, this.state.currentLevel.key);
        
        // Update mastery tracking
        try {
            this.algebraMasteryTracker.updateMasteryProgress(this.state.currentLevel.key, rating);
        } catch (error) {
            console.error('Error updating mastery progress (non-blocking):', error);
        }
        
        try {
            this.ui.showSuccess(this.state.currentLevel.name, time, rating, isNewBest, previousBest);
        } catch (error) {
            console.error('Error showing success screen:', error);
        }
        
        this.isChecking = false;
    }

    recordMistake(studentAnswer, correctAnswer) {
        // Record mistake for progress tracking
        try {
            if (window.progressTracker && this.state.currentLevel && this.state.currentQuestion) {
                console.log('Recording mistake for:', this.state.currentLevel.key);
                window.progressTracker.recordMistake(
                    this.state.currentLevel.key,
                    this.state.currentLevel.name,
                    this.state.currentQuestion.problem,
                    correctAnswer,
                    studentAnswer
                );
            }
        } catch (error) {
            console.error('Error recording mistake (non-blocking):', error);
        }
    }

    quitGame() {
        this.timer.stop(); 
        this.state.reset();
        this.isChecking = false;
        this.answerSubmitted = false;
        this.updateLearningPathInterface();
        this.ui.showScreen('settings');
    }

    // --- Learning Path Methods ---

    updateLearningPathInterface() {
        // Calculate mastery progress
        const masteryProgress = this.algebraMasteryTracker.calculateMasteryProgress();
        const masteryData = this.algebraMasteryTracker.getTopicProgressData();

        // Update the UI with both skill path and mastery progress
        this.ui.updateLevelsInterface(CONFIG.LEVEL_GROUPS, (level) => this.startGame(level), masteryData);
    }

    continueToNextChallenge() {
        const nextLevel = this.algebraMasteryTracker.getNextAvailableLevel();
        if (nextLevel) {
            this.startGame(nextLevel);
        } else {
            // All levels completed, return to learning path
            this.ui.showScreen('settings');
            this.updateLearningPathInterface();
        }
    }

    replayCurrentLevel() {
        if (this.state.currentLevel) {
            this.startGame(this.state.currentLevel);
        } else {
            this.quitGame();
        }
    }
}