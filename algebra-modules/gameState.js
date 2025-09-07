// algebra-modules/gameState.js
class GameState {
    constructor() { 
        this.reset(); 
    }
    
    reset() {
        this.currentLevel = null; 
        this.currentAnswer = null;
        this.currentQuestion = null;
        this.correctStreak = 0;
        this.lastQuestionFormat = null;
        this.consecutiveIncorrect = 0;
    }
    
    setLevel(level) { 
        this.reset(); 
        this.currentLevel = level; 
    }
    
    incrementStreak() { 
        this.correctStreak++; 
        return this.correctStreak; 
    }
    
    resetStreak() { 
        this.correctStreak = 0; 
    }
    
    isComplete() { 
        return this.correctStreak >= CONFIG.REQUIRED_STREAK; 
    }
    
    incrementIncorrectCount() {
        this.consecutiveIncorrect++;
        return this.consecutiveIncorrect;
    }
    
    resetIncorrectCount() {
        this.consecutiveIncorrect = 0;
    }
    
    isSecondIncorrectAttempt() {
        return this.consecutiveIncorrect >= 2;
    }
}