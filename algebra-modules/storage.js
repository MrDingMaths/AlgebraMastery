// algebra-modules/storage.js
class StorageManager {
    static saveBestTime(levelKey, time) {
        localStorage.setItem(`${CONFIG.STORAGE_PREFIX}${levelKey}`, time);
    }
    
    static getBestTime(levelKey) {
        const time = localStorage.getItem(`${CONFIG.STORAGE_PREFIX}${levelKey}`);
        return time ? parseInt(time, 10) : null;
    }
    
    static getRating(time, levelKey) {
        // Use shared RatingUtils for consistency with progress tracking system
        if (window.RatingUtils) {
            return window.RatingUtils.getRating(time, levelKey, CONFIG.REQUIRED_STREAK, CONFIG);
        }
        
        // Fallback to original method if RatingUtils not available
        const avgTime = time / CONFIG.REQUIRED_STREAK;
        const multiplier = CONFIG.LEVEL_DIFFICULTY_MULTIPLIERS[levelKey] || 1.0;
        const adjustedAvgTime = avgTime / multiplier;
        return CONFIG.RATING_THRESHOLDS.find(r => adjustedAvgTime <= r.maxAvg);
    }
}