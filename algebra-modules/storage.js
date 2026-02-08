// algebra-modules/storage.js
class StorageManager {
    static migrateKeys() {
        if (localStorage.getItem('algebra_keys_migrated_v2')) return;

        const OLD_TO_NEW = {
            'simplifyLikeTermsEasy': 'addSubtractTermsEasy',
            'simplifyLikeTermsMedium': 'addSubtractTermsMedium',
            'simplifyLikeTermsHard': 'addSubtractTermsHard',
            'cancellingEasy': 'divideTermsEasy',
            'cancellingMedium': 'divideTermsMedium',
            'cancellingHard': 'divideTermsHard',
            'mixedAlgebraicSimplificationEasy': 'mixedSimplificationEasy',
            'mixedAlgebraicSimplificationMedium': 'mixedSimplificationMedium',
            'mixedAlgebraicSimplificationHard': 'mixedSimplificationHard',
            'expansionEasy': 'expandSingleBracketsEasy',
            'expansionMedium': 'expandSingleBracketsMedium',
            'expansionHard': 'expandSingleBracketsHard',
            'indexLawEasy': 'multiplicationIndexLawEasy',
            'indexLawMedium': 'multiplicationIndexLawMedium',
            'indexLawHard': 'multiplicationIndexLawHard',
            'indexLawDivisionEasy': 'divisionIndexLawEasy',
            'indexLawDivisionMedium': 'divisionIndexLawMedium',
            'indexLawDivisionHard': 'divisionIndexLawHard',
            'indexLawPowerEasy': 'powerOfPowerAndZeroPowerEasy',
            'indexLawPowerMedium': 'powerOfPowerAndZeroPowerMedium',
            'indexLawPowerHard': 'powerOfPowerAndZeroPowerHard',
            'factorisingEasy': 'factoriseIntoSingleBracketsEasy',
            'factorisingMedium': 'factoriseIntoSingleBracketsMedium',
            'factorisingHard': 'factoriseIntoSingleBracketsHard',
            'expandingAndSimplifyingEasy': 'expandAndSimplifyEasy',
            'expandingAndSimplifyingMedium': 'expandAndSimplifyMedium',
            'expandingAndSimplifyingHard': 'expandAndSimplifyHard',
            'expandingDoubleBracketsEasy': 'expandBinomialProductsEasy',
            'expandingDoubleBracketsMedium': 'expandBinomialProductsMedium',
            'expandingDoubleBracketsHard': 'expandBinomialProductsHard',
            'powerProductQuotientEasy': 'powerOfProductsAndQuotientsEasy',
            'powerProductQuotientMedium': 'powerOfProductsAndQuotientsMedium',
            'powerProductQuotientHard': 'powerOfProductsAndQuotientsHard',
            'factorisingMonicQuadraticTrinomialsEasy': 'factoriseMonicQuadraticTrinomialsEasy',
            'factorisingMonicQuadraticTrinomialsMedium': 'factoriseMonicQuadraticTrinomialsMedium',
            'factorisingMonicQuadraticTrinomialsHard': 'factoriseMonicQuadraticTrinomialsHard',
            'addSubtractFractionsBinomialEasy': 'addSubtractFractionsWithBinomialNumeratorEasy',
            'addSubtractFractionsBinomialMedium': 'addSubtractFractionsWithBinomialNumeratorMedium',
            'addSubtractFractionsBinomialHard': 'addSubtractFractionsWithBinomialNumeratorHard',
            'expandingPerfectSquaresEasy': 'expandPerfectSquaresEasy',
            'expandingPerfectSquaresMedium': 'expandPerfectSquaresMedium',
            'expandingPerfectSquaresHard': 'expandPerfectSquaresHard',
            'expandingDifferenceOfTwoSquaresEasy': 'expandDifferenceOfTwoSquaresEasy',
            'expandingDifferenceOfTwoSquaresMedium': 'expandDifferenceOfTwoSquaresMedium',
            'expandingDifferenceOfTwoSquaresHard': 'expandDifferenceOfTwoSquaresHard',
            'perfectSquareFactorisationEasy': 'factorisePerfectSquaresEasy',
            'perfectSquareFactorisationMedium': 'factorisePerfectSquaresMedium',
            'perfectSquareFactorisationHard': 'factorisePerfectSquaresHard',
            'differenceOfTwoSquaresEasy': 'factoriseDifferenceOfTwoSquaresEasy',
            'differenceOfTwoSquaresMedium': 'factoriseDifferenceOfTwoSquaresMedium',
            'differenceOfTwoSquaresHard': 'factoriseDifferenceOfTwoSquaresHard',
            'binomialFactorsEasy': 'noticeBinomialFactorsEasy',
            'binomialFactorsMedium': 'noticeBinomialFactorsMedium',
            'binomialFactorsHard': 'noticeBinomialFactorsHard',
            'groupingInPairsEasy': 'groupInPairsEasy',
            'groupingInPairsMedium': 'groupInPairsMedium',
            'groupingInPairsHard': 'groupInPairsHard',
            'factorisingNonMonicQuadraticTrinomialsEasy': 'factoriseNonMonicQuadraticTrinomialsEasy',
            'factorisingNonMonicQuadraticTrinomialsMedium': 'factoriseNonMonicQuadraticTrinomialsMedium',
            'factorisingNonMonicQuadraticTrinomialsHard': 'factoriseNonMonicQuadraticTrinomialsHard',
            'simplifyAlgebraicFractionsEasy': 'simplifyAlgebraicFractionsByFactorisingEasy',
            'simplifyAlgebraicFractionsMedium': 'simplifyAlgebraicFractionsByFactorisingMedium',
            'simplifyAlgebraicFractionsHard': 'simplifyAlgebraicFractionsByFactorisingHard',
            'addSubtractFractionsFactorisingEasy': 'addSubtractFractionsByFactorisingDenominatorEasy',
            'addSubtractFractionsFactorisingMedium': 'addSubtractFractionsByFactorisingDenominatorMedium',
            'addSubtractFractionsFactorisingHard': 'addSubtractFractionsByFactorisingDenominatorHard',
            'surdSimplificationEasy': 'simplifySurdsEasy',
            'surdSimplificationMedium': 'simplifySurdsMedium',
            'surdSimplificationHard': 'simplifySurdsHard',
            'addSubtractingSurdsEasy': 'addSubtractSurdsEasy',
            'addSubtractingSurdsMedium': 'addSubtractSurdsMedium',
            'addSubtractingSurdsHard': 'addSubtractSurdsHard',
            'multiplyingDividingSurdsEasy': 'multiplyDivideSurdsEasy',
            'multiplyingDividingSurdsMedium': 'multiplyDivideSurdsMedium',
            'multiplyingDividingSurdsHard': 'multiplyDivideSurdsHard',
            'expandingSurdsEasy': 'expandBracketsWithSurdsEasy',
            'expandingSurdsMedium': 'expandBracketsWithSurdsMedium',
            'expandingSurdsHard': 'expandBracketsWithSurdsHard',
            'rationalisingDenominatorEasy': 'rationaliseTheDenominatorEasy',
            'rationalisingDenominatorMedium': 'rationaliseTheDenominatorMedium',
            'rationalisingDenominatorHard': 'rationaliseTheDenominatorHard',
            'furtherRationalisingDenominatorEasy': 'rationaliseBinomialDenominatorEasy',
            'furtherRationalisingDenominatorMedium': 'rationaliseBinomialDenominatorMedium',
            'furtherRationalisingDenominatorHard': 'rationaliseBinomialDenominatorHard',
            'evaluatingFractionalIndicesEasy': 'evaluateFractionalIndicesEasy',
            'evaluatingFractionalIndicesMedium': 'evaluateFractionalIndicesMedium',
            'evaluatingFractionalIndicesHard': 'evaluateFractionalIndicesHard',
            'surdToIndexEasy': 'surdFormToIndexFormEasy',
            'surdToIndexMedium': 'surdFormToIndexFormMedium',
            'surdToIndexHard': 'surdFormToIndexFormHard',
        };

        const prefix = CONFIG.STORAGE_PREFIX;
        for (const [oldKey, newKey] of Object.entries(OLD_TO_NEW)) {
            const oldVal = localStorage.getItem(prefix + oldKey);
            if (oldVal !== null && localStorage.getItem(prefix + newKey) === null) {
                localStorage.setItem(prefix + newKey, oldVal);
            }
        }

        // Migrate mastery progress data
        const masteryData = localStorage.getItem('algebra_mastery_progress_v1');
        if (masteryData) {
            let data = JSON.parse(masteryData);
            for (const topicKey of Object.keys(data.topicProgress || {})) {
                const topic = data.topicProgress[topicKey];
                if (topic.masteredLevels) {
                    topic.masteredLevels = topic.masteredLevels.map(
                        level => OLD_TO_NEW[level] || level
                    );
                }
            }
            localStorage.setItem('algebra_mastery_progress_v1', JSON.stringify(data));
        }

        localStorage.setItem('algebra_keys_migrated_v2', 'true');
    }

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