// algebraMasteryTracker.js - Algebra Topic Mastery Progress Tracking System
// Adapted from MathsFacts masteryTracker.js for algebra-specific content

class AlgebraMasteryTracker {
    constructor() {
        this.STORAGE_KEY = 'algebra_mastery_progress_v1';
        this.TOPIC_GROUPS = {
            'Basic Skills': {
                name: 'Basic Skills',
                levels: [
                    'addSubtractTermsEasy',
                    'addSubtractTermsMedium',
                    'addSubtractTermsHard',
                    'multiplyTermsEasy',
                    'multiplyTermsMedium',
                    'multiplyTermsHard',
                    'divideTermsEasy',
                    'divideTermsMedium',
                    'divideTermsHard',
                    'mixedSimplificationEasy',
                    'mixedSimplificationMedium',
                    'mixedSimplificationHard',
                    'orderOfOperationsEasy',
                    'orderOfOperationsMedium',
                    'orderOfOperationsHard',
                ],
                color: '#34d399',
            },
            'Expansion': {
                name: 'Expansion',
                levels: [
                    'expandSingleBracketsEasy',
                    'expandSingleBracketsMedium',
                    'expandSingleBracketsHard',
                    'expandAndSimplifyEasy',
                    'expandAndSimplifyMedium',
                    'expandAndSimplifyHard',
                    'expandBinomialProductsEasy',
                    'expandBinomialProductsMedium',
                    'expandBinomialProductsHard',
                    'expandPerfectSquaresEasy',
                    'expandPerfectSquaresMedium',
                    'expandPerfectSquaresHard',
                    'expandDifferenceOfTwoSquaresEasy',
                    'expandDifferenceOfTwoSquaresMedium',
                    'expandDifferenceOfTwoSquaresHard',
                    'mixedExpansionEasy',
                    'mixedExpansionMedium',
                    'mixedExpansionHard',
                ],
                color: '#34d399',
            },
            'Indices': {
                name: 'Indices',
                levels: [
                    'multiplicationIndexLawEasy',
                    'multiplicationIndexLawMedium',
                    'multiplicationIndexLawHard',
                    'divisionIndexLawEasy',
                    'divisionIndexLawMedium',
                    'divisionIndexLawHard',
                    'powerOfPowerAndZeroPowerEasy',
                    'powerOfPowerAndZeroPowerMedium',
                    'powerOfPowerAndZeroPowerHard',
                    'mixedIndexLawsEasy',
                    'mixedIndexLawsMedium',
                    'mixedIndexLawsHard',
                    'powerOfProductsAndQuotientsEasy',
                    'powerOfProductsAndQuotientsMedium',
                    'powerOfProductsAndQuotientsHard',
                    'negativeIndicesEasy',
                    'negativeIndicesMedium',
                    'negativeIndicesHard',
                ],
                color: '#34d399',
            },
            'Factorisation': {
                name: 'Factorisation',
                levels: [
                    'factoriseIntoSingleBracketsEasy',
                    'factoriseIntoSingleBracketsMedium',
                    'factoriseIntoSingleBracketsHard',
                    'factoriseMonicQuadraticTrinomialsEasy',
                    'factoriseMonicQuadraticTrinomialsMedium',
                    'factoriseMonicQuadraticTrinomialsHard',
                    'factorisePerfectSquaresEasy',
                    'factorisePerfectSquaresMedium',
                    'factorisePerfectSquaresHard',
                    'factoriseDifferenceOfTwoSquaresEasy',
                    'factoriseDifferenceOfTwoSquaresMedium',
                    'factoriseDifferenceOfTwoSquaresHard',
                    'noticeBinomialFactorsEasy',
                    'noticeBinomialFactorsMedium',
                    'noticeBinomialFactorsHard',
                    'groupInPairsEasy',
                    'groupInPairsMedium',
                    'groupInPairsHard',
                    'factoriseNonMonicQuadraticTrinomialsEasy',
                    'factoriseNonMonicQuadraticTrinomialsMedium',
                    'factoriseNonMonicQuadraticTrinomialsHard',
                    'mixedFactorisationEasy',
                    'mixedFactorisationMedium',
                    'mixedFactorisationHard',
                    'finishFactorisingEasy',
                    'finishFactorisingMedium',
                    'finishFactorisingHard',
                ],
                color: '#34d399',
            },
            'Algebraic Fractions': {
                name: 'Algebraic Fractions',
                levels: [
                    'addSubtractAlgebraicFractionsEasy',
                    'addSubtractAlgebraicFractionsMedium',
                    'addSubtractAlgebraicFractionsHard',
                    'multiplyDivideAlgebraicFractionsEasy',
                    'multiplyDivideAlgebraicFractionsMedium',
                    'multiplyDivideAlgebraicFractionsHard',
                    'addSubtractFractionsWithBinomialNumeratorEasy',
                    'addSubtractFractionsWithBinomialNumeratorMedium',
                    'addSubtractFractionsWithBinomialNumeratorHard',
                    'simplifyAlgebraicFractionsByFactorisingEasy',
                    'simplifyAlgebraicFractionsByFactorisingMedium',
                    'simplifyAlgebraicFractionsByFactorisingHard',
                    'multiplyDivideAlgebraicFractionsByFactorisingEasy',
                    'multiplyDivideAlgebraicFractionsByFactorisingMedium',
                    'multiplyDivideAlgebraicFractionsByFactorisingHard',
                    'addSubtractFractionsByFactorisingDenominatorEasy',
                    'addSubtractFractionsByFactorisingDenominatorMedium',
                    'addSubtractFractionsByFactorisingDenominatorHard',
                    'compoundFractionsEasy',
                    'compoundFractionsMedium',
                    'compoundFractionsHard',
                ],
                color: '#34d399',
            },
            'Surds': {
                name: 'Surds',
                levels: [
                    'simplifySurdsEasy',
                    'simplifySurdsMedium',
                    'simplifySurdsHard',
                    'addSubtractSurdsEasy',
                    'addSubtractSurdsMedium',
                    'addSubtractSurdsHard',
                    'multiplyDivideSurdsEasy',
                    'multiplyDivideSurdsMedium',
                    'multiplyDivideSurdsHard',
                    'expandBracketsWithSurdsEasy',
                    'expandBracketsWithSurdsMedium',
                    'expandBracketsWithSurdsHard',
                    'rationaliseTheDenominatorEasy',
                    'rationaliseTheDenominatorMedium',
                    'rationaliseTheDenominatorHard',
                    'rationaliseBinomialDenominatorEasy',
                    'rationaliseBinomialDenominatorMedium',
                    'rationaliseBinomialDenominatorHard',
                    'evaluateFractionalIndicesEasy',
                    'evaluateFractionalIndicesMedium',
                    'evaluateFractionalIndicesHard',
                    'surdFormToIndexFormEasy',
                    'surdFormToIndexFormMedium',
                    'surdFormToIndexFormHard',
                    'indexFormToSurdFormEasy',
                    'indexFormToSurdFormMedium',
                    'indexFormToSurdFormHard',
                ],
                color: '#34d399',
            },
        };
        this.initializeStorage();
    }

    // Initialize storage with default progress data
    initializeStorage() {
        const stored = localStorage.getItem(this.STORAGE_KEY);
        let data;
        
        if (!stored) {
            // Create fresh data if none exists
            data = {
                version: 1,
                topicProgress: {},
                lastUpdated: Date.now()
            };
        } else {
            // Load existing data
            data = JSON.parse(stored);
        }
        
        // Ensure all current topics exist in the data (handles topic group changes)
        Object.keys(this.TOPIC_GROUPS).forEach(topicKey => {
            if (!data.topicProgress[topicKey]) {
                data.topicProgress[topicKey] = {
                    masteredLevels: [],
                    totalLevels: this.TOPIC_GROUPS[topicKey].levels.length,
                    progress: 0
                };
            } else {
                // Update totalLevels in case level counts changed
                data.topicProgress[topicKey].totalLevels = this.TOPIC_GROUPS[topicKey].levels.length;
            }
        });
        
        // Save the updated data
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
    }


    // Check if a level is accessible based on difficulty progression
    isLevelAccessible(levelKey) {
        // Extract base topic and difficulty from level key
        const baseTopic = levelKey.replace(/(Easy|Medium|Hard)$/, '');
        const difficulty = levelKey.match(/(Easy|Medium|Hard)$/)?.[0];
        
        if (!difficulty) return true; // No difficulty specified, allow access
        
        if (difficulty === 'Easy') {
            return true; // Easy levels are always accessible
        }
        
        if (difficulty === 'Medium') {
            // Require Easy to be mastered
            const easyLevel = baseTopic + 'Easy';
            return this.isLevelMastered(easyLevel);
        }
        
        if (difficulty === 'Hard') {
            // Require both Easy and Medium to be mastered
            const easyLevel = baseTopic + 'Easy';
            const mediumLevel = baseTopic + 'Medium';
            return this.isLevelMastered(easyLevel) && this.isLevelMastered(mediumLevel);
        }
        
        return true;
    }

    // Check if a specific level is mastered
    isLevelMastered(levelKey) {
        const bestTime = StorageManager.getBestTime(levelKey);
        if (!bestTime) return false;
        
        const rating = StorageManager.getRating(bestTime, levelKey);
        return rating && (rating.key === 'mastery' || rating.key === 'true-mastery');
    }

    // Calculate current mastery progress for all topics
    calculateMasteryProgress() {
        const progressData = JSON.parse(localStorage.getItem(this.STORAGE_KEY));
        
        Object.keys(this.TOPIC_GROUPS).forEach(topicKey => {
            const topicInfo = this.TOPIC_GROUPS[topicKey];
            const currentProgress = progressData.topicProgress[topicKey];
            const masteredLevels = new Set();
            
            // Check each level in this topic
            topicInfo.levels.forEach(levelKey => {
                if (this.isLevelMastered(levelKey)) {
                    masteredLevels.add(levelKey);
                }
            });
            
            // Update progress data
            currentProgress.masteredLevels = Array.from(masteredLevels);
            currentProgress.progress = masteredLevels.size / topicInfo.levels.length;
        });
        
        // Update timestamp and save
        progressData.lastUpdated = Date.now();
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(progressData));
        
        return progressData.topicProgress;
    }

    // Update mastery progress when a level is completed
    updateMasteryProgress(levelKey, newRating) {
        // Only update if this is an improvement to mastery or true-mastery
        if (!newRating || (newRating.key !== 'mastery' && newRating.key !== 'true-mastery')) {
            return false;
        }

        // Find which topic this level belongs to
        let targetTopic = null;
        Object.keys(this.TOPIC_GROUPS).forEach(topicKey => {
            if (this.TOPIC_GROUPS[topicKey].levels.includes(levelKey)) {
                targetTopic = topicKey;
            }
        });

        if (!targetTopic) return false;

        // Get current rating for this level
        const bestTime = StorageManager.getBestTime(levelKey);
        const currentRating = bestTime ? StorageManager.getRating(bestTime, levelKey) : null;
        
        // Check if this is actually an improvement
        if (currentRating && (currentRating.key === 'mastery' || currentRating.key === 'true-mastery')) {
            // Already mastered, no change needed unless it's a rating improvement
            if (currentRating.key === newRating.key) {
                return false; // No improvement
            }
        }

        // Recalculate all progress (this handles the improvement logic)
        this.calculateMasteryProgress();
        return true;
    }

    // Get progress data for UI rendering
    getTopicProgressData() {
        const progressData = JSON.parse(localStorage.getItem(this.STORAGE_KEY));
        
        return Object.keys(this.TOPIC_GROUPS).map(topicKey => {
            const topicInfo = this.TOPIC_GROUPS[topicKey];
            const progress = progressData.topicProgress[topicKey];
            
            return {
                key: topicKey,
                name: topicInfo.name,
                color: topicInfo.color,
                progress: progress.progress,
                masteredCount: progress.masteredLevels.length,
                totalCount: progress.totalLevels,
                percentage: Math.round(progress.progress * 100),
                prerequisitesMet: true
            };
        });
    }

    // Get next available level for "Continue to Next Challenge" functionality
    getNextAvailableLevel() {
        // Flatten all levels from CONFIG in the correct order (same as skill path)
        const allLevels = [];
        Object.keys(CONFIG.LEVEL_GROUPS).forEach(groupName => {
            CONFIG.LEVEL_GROUPS[groupName].forEach(level => {
                if (this.isLevelAccessible(level.key)) {
                    allLevels.push(level);
                }
            });
        });

        // Find the first level that's not at mastery or true mastery
        for (const level of allLevels) {
            if (!this.isLevelMastered(level.key)) {
                return level;
            }
        }
        
        // All accessible levels are mastered, return the first level for practice
        return allLevels[0];
    }

    // Get levels that are currently accessible but not yet mastered
    getAvailableLevels() {
        const availableLevels = [];
        
        Object.keys(this.TOPIC_GROUPS).forEach(topicKey => {
            this.TOPIC_GROUPS[topicKey].levels.forEach(levelKey => {
                if (this.isLevelAccessible(levelKey) && !this.isLevelMastered(levelKey)) {
                    // Find the level in CONFIG
                    const allConfigLevels = Object.values(CONFIG.LEVEL_GROUPS).flat();
                    const configLevel = allConfigLevels.find(level => level.key === levelKey);
                    if (configLevel) {
                        availableLevels.push(configLevel);
                    }
                }
            });
        });
        
        return availableLevels;
    }

    // Reset mastery progress (for testing/admin purposes)
    resetProgress() {
        localStorage.removeItem(this.STORAGE_KEY);
        this.initializeStorage();
    }

    // Get overall progress summary
    getOverallProgress() {
        const progressData = JSON.parse(localStorage.getItem(this.STORAGE_KEY));
        let totalLevels = 0;
        let totalMastered = 0;
        
        Object.values(progressData.topicProgress).forEach(topic => {
            totalLevels += topic.totalLevels;
            totalMastered += topic.masteredLevels.length;
        });
        
        return {
            totalLevels,
            totalMastered,
            overallProgress: totalLevels > 0 ? totalMastered / totalLevels : 0,
            percentage: totalLevels > 0 ? Math.round((totalMastered / totalLevels) * 100) : 0
        };
    }
}