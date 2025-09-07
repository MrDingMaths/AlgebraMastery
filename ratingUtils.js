// Rating Utilities - Shared rating calculation logic
// Used by both main game system and progress tracking system for consistency

class RatingUtils {
    /**
     * Calculate performance rating based on time and level difficulty
     * @param {number} totalTime - Total time taken in seconds  
     * @param {string} levelKey - Level identifier for difficulty adjustment
     * @param {number} questionCount - Number of questions (default: CONFIG.REQUIRED_STREAK)
     * @param {Object} config - Configuration object with thresholds and multipliers
     * @returns {Object} Rating object with name, key, maxAvg properties
     */
    static getRating(totalTime, levelKey = null, questionCount = null, config = null) {
        // Use global CONFIG if not provided
        if (!config && typeof window !== 'undefined' && window.CONFIG) {
            config = window.CONFIG;
        }
        
        if (!config) {
            throw new Error('Configuration object is required for rating calculation');
        }

        // Use default question count if not provided
        if (!questionCount) {
            questionCount = config.REQUIRED_STREAK || 15;
        }

        // Calculate average time per question
        let avgTime = totalTime / questionCount;
        
        // Get difficulty multiplier for adjusting avgTime
        let difficultyMultiplier = 1.0;
        
        if (levelKey && config.LEVEL_DIFFICULTY_MULTIPLIERS && config.LEVEL_DIFFICULTY_MULTIPLIERS[levelKey]) {
            difficultyMultiplier = config.LEVEL_DIFFICULTY_MULTIPLIERS[levelKey];
        } else if (levelKey && config.LEVEL_DIFFICULTY_MULTIPLIERS) {
            // Use default multiplier for levels not specifically configured
            difficultyMultiplier = config.LEVEL_DIFFICULTY_MULTIPLIERS.default || 1.0;
        } else {
        }
        
        // Apply difficulty multiplier by dividing avgTime
        const adjustedAvgTime = avgTime / difficultyMultiplier;
        
        // Find the appropriate rating threshold
        if (config.RATING_THRESHOLDS) {
            
            const matchingThreshold = config.RATING_THRESHOLDS.find(r => {
                return adjustedAvgTime <= r.maxAvg;
            });
            
            const result = matchingThreshold || config.RATING_THRESHOLDS[config.RATING_THRESHOLDS.length - 1];
            return result;
        }
        
        // Fallback to default thresholds if config is missing RATING_THRESHOLDS
        const defaultThresholds = [
            { maxAvg: 1.5, name: "Queen", key: "true-mastery" },
            { maxAvg: 2.5, name: "Mastery", key: "mastery" },
            { maxAvg: 3.5, name: "Expert", key: "expert" },
            { maxAvg: 5, name: "Developing", key: "developing" },
            { maxAvg: Infinity, name: "Beginner", key: "beginner" }
        ];
        
        const fallbackResult = defaultThresholds.find(r => {
            return adjustedAvgTime <= r.maxAvg;
        });
        return fallbackResult;
    }

    /**
     * Convert rating key to progress UI format
     * @param {Object} rating - Rating object from getRating()
     * @returns {Object} Progress UI format with emoji and class
     */
    static toProgressUIFormat(rating) {
        if (!rating) return { emoji: '⚪', class: 'rating-none' };

        const emojiMap = {
            'true-mastery': '💖',
            'mastery': '⚡', 
            'expert': '🎯',
            'developing': '👍',
            'beginner': '📚'
        };

        return {
            emoji: emojiMap[rating.key] || '📚',
            class: `rating-${rating.key === 'true-mastery' ? 'queen' : rating.key}`
        };
    }

    /**
     * Calculate average time per question from total time
     * @param {number} totalTime - Total time in seconds
     * @param {number} questionCount - Number of questions
     * @returns {number} Average time per question
     */
    static calculateAverageTime(totalTime, questionCount = 15) {
        return totalTime / questionCount;
    }

    /**
     * Apply difficulty multiplier to time
     * @param {number} avgTime - Average time per question
     * @param {string} levelKey - Level identifier
     * @param {Object} config - Configuration object
     * @returns {number} Adjusted average time
     */
    static applyDifficultyMultiplier(avgTime, levelKey, config = null) {
        if (!config && typeof window !== 'undefined' && window.CONFIG) {
            config = window.CONFIG;
        }

        if (!config || !levelKey || !config.LEVEL_DIFFICULTY_MULTIPLIERS) {
            return avgTime;
        }

        const multiplier = config.LEVEL_DIFFICULTY_MULTIPLIERS[levelKey] || config.LEVEL_DIFFICULTY_MULTIPLIERS.default || 1.0;
        return avgTime / multiplier;
    }
}

// Make RatingUtils available globally
window.RatingUtils = RatingUtils;