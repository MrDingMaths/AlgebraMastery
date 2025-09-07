// algebra-modules/config.js
const CONFIG = {
    LEVEL_GROUPS: {

        "Foundational Skills": [
            { key: 'simplifyLikeTermsEasy', name: 'Add Subtract Terms<br>🥉', value: 'liketerms-easy' },
            { key: 'simplifyLikeTermsMedium', name: 'Add Subtract Terms<br>🥈', value: 'liketerms-medium' },
            { key: 'simplifyLikeTermsHard', name: 'Add Subtract Terms<br>🥇', value: 'liketerms-hard' },
            { key: 'multiplyTermsEasy', name: 'Multiply Terms<br>🥉', value: 'multiply-easy' },
            { key: 'multiplyTermsMedium', name: 'Multiply Terms<br>🥈', value: 'multiply-medium' },
            { key: 'multiplyTermsHard', name: 'Multiply Terms<br>🥇', value: 'multiply-hard' },
            { key: 'cancellingEasy', name: 'Divide Terms<br>🥉', value: 'cancelling-easy' },
            { key: 'cancellingMedium', name: 'Divide Terms<br>🥈', value: 'cancelling-medium' },
            { key: 'cancellingHard', name: 'Divide Terms<br>🥇', value: 'cancelling-hard' },
            { key: 'mixedAlgebraicSimplificationEasy', name: 'Mixed Simplification<br>🥉', value: 'mixedalgsimp-easy' },
            { key: 'mixedAlgebraicSimplificationMedium', name: 'Mixed Simplification<br>🥈', value: 'mixedalgsimp-medium' },
            { key: 'mixedAlgebraicSimplificationHard', name: 'Mixed Simplification<br>🥇', value: 'mixedalgsimp-hard' },
            { key: 'expansionEasy', name: 'Expand Single Brackets<br>🥉', value: 'expansion-easy' },
            { key: 'expansionMedium', name: 'Expand Single Brackets<br>🥈', value: 'expansion-medium' },
            { key: 'expansionHard', name: 'Expand Single Brackets<br>🥇', value: 'expansion-hard' },
            { key: 'indexLawEasy', name: 'Multiplication Index Law<br>🥉', value: 'indexlaw-easy' },
            { key: 'indexLawMedium', name: 'Multiplication Index Law<br>🥈', value: 'indexlaw-medium' },
            { key: 'indexLawHard', name: 'Multiplication Index Law<br>🥇', value: 'indexlaw-hard' },
            { key: 'indexLawDivisionEasy', name: 'Division Index Law<br>🥉', value: 'indexlawdivision-easy' },
            { key: 'indexLawDivisionMedium', name: 'Division Index Law<br>🥈', value: 'indexlawdivision-medium' },
            { key: 'indexLawDivisionHard', name: 'Division Index Law<br>🥇', value: 'indexlawdivision-hard' },
            { key: 'indexLawPowerEasy', name: 'Power of Power & Zero Power<br>🥉', value: 'indexlawpower-easy' },
            { key: 'indexLawPowerMedium', name: 'Power of Power & Zero Power<br>🥈', value: 'indexlawpower-medium' },
            { key: 'indexLawPowerHard', name: 'Power of Power & Zero Power<br>🥇', value: 'indexlawpower-hard' },
            { key: 'mixedIndexLawsEasy', name: 'Mixed Index Laws<br>🥉', value: 'mixedindexlaws-easy' },
            { key: 'mixedIndexLawsMedium', name: 'Mixed Index Laws<br>🥈', value: 'mixedindexlaws-medium' },
            { key: 'mixedIndexLawsHard', name: 'Mixed Index Laws<br>🥇', value: 'mixedindexlaws-hard' },
            { key: 'orderOfOperationsEasy', name: 'Order of Operations<br>🥉', value: 'order-operations-easy' },
            { key: 'orderOfOperationsMedium', name: 'Order of Operations<br>🥈', value: 'order-operations-medium' },
            { key: 'orderOfOperationsHard', name: 'Order of Operations<br>🥇', value: 'order-operations-hard' },
            { key: 'factorisingEasy', name: 'Factorise into Single Brackets<br>🥉', value: 'factorising-easy' },
            { key: 'factorisingMedium', name: 'Factorise into Single Brackets<br>🥈', value: 'factorising-medium' },
            { key: 'factorisingHard', name: 'Factorise into Single Brackets<br>🥇', value: 'factorising-hard' },
        ],

        "Intermediate Skills": [
            { key: 'expandingAndSimplifyingEasy', name: 'Expand & Simplify<br>🥉', value: 'expanding-simplifying-easy' },
            { key: 'expandingAndSimplifyingMedium', name: 'Expand & Simplify<br>🥈', value: 'expanding-simplifying-medium' },
            { key: 'expandingAndSimplifyingHard', name: 'Expand & Simplify<br>🥇', value: 'expanding-simplifying-hard' },
            { key: 'expandingDoubleBracketsEasy', name: 'Expand Binomial Products<br>🥉', value: 'expanding-double-brackets-easy' },
            { key: 'expandingDoubleBracketsMedium', name: 'Expand Binomial Products<br>🥈', value: 'expanding-double-brackets-medium' },
            { key: 'expandingDoubleBracketsHard', name: 'Expand Binomial Products<br>🥇', value: 'expanding-double-brackets-hard' },
            { key: 'powerProductQuotientEasy', name: 'Power of Products and Quotients<br>🥉', value: 'power-product-quotient-easy' },
            { key: 'powerProductQuotientMedium', name: 'Power of Products and Quotients<br>🥈', value: 'power-product-quotient-medium' },
            { key: 'powerProductQuotientHard', name: 'Power of Products and Quotients<br>🥇', value: 'power-product-quotient-hard' },
            { key: 'addSubtractAlgebraicFractionsEasy', name: 'Add Subtract Algebraic Fractions<br>🥉', value: 'add-subtract-algebraic-fractions-easy' },
            { key: 'addSubtractAlgebraicFractionsMedium', name: 'Add Subtract Algebraic Fractions<br>🥈', value: 'add-subtract-algebraic-fractions-medium' },
            { key: 'addSubtractAlgebraicFractionsHard', name: 'Add Subtract Algebraic Fractions<br>🥇', value: 'add-subtract-algebraic-fractions-hard' },
            { key: 'multiplyDivideAlgebraicFractionsEasy', name: 'Multiply Divide Algebraic Fractions<br>🥉', value: 'multiply-divide-algebraic-fractions-easy' },
            { key: 'multiplyDivideAlgebraicFractionsMedium', name: 'Multiply Divide Algebraic Fractions<br>🥈', value: 'multiply-divide-algebraic-fractions-medium' },
            { key: 'multiplyDivideAlgebraicFractionsHard', name: 'Multiply Divide Algebraic Fractions<br>🥇', value: 'multiply-divide-algebraic-fractions-hard' },
            { key: 'negativeIndicesEasy', name: 'Negative Indices<br>🥉', value: 'negative-indices-easy' },
            { key: 'negativeIndicesMedium', name: 'Negative Indices<br>🥈', value: 'negative-indices-medium' },
            { key: 'negativeIndicesHard', name: 'Negative Indices<br>🥇', value: 'negative-indices-hard' },
            { key: 'factorisingMonicQuadraticTrinomialsEasy', name: 'Factorise Monic Quadratic Trinomials<br>🥉', value: 'factorising-monic-quadratic-trinomials-easy' },
            { key: 'factorisingMonicQuadraticTrinomialsMedium', name: 'Factorise Monic Quadratic Trinomials<br>🥈', value: 'factorising-monic-quadratic-trinomials-medium' },
            { key: 'factorisingMonicQuadraticTrinomialsHard', name: 'Factorise Monic Quadratic Trinomials<br>🥇', value: 'factorising-monic-quadratic-trinomials-hard' },
        ],

        "Advanced Skills": [
            { key: 'addSubtractFractionsBinomialEasy', name: 'Add Subtract Fractions with Binomial Numerator<br>🥉', value: 'add-subtract-fractions-binomial-easy' },
            { key: 'addSubtractFractionsBinomialMedium', name: 'Add Subtract Fractions with Binomial Numerator<br>🥈', value: 'add-subtract-fractions-binomial-medium' },
            { key: 'addSubtractFractionsBinomialHard', name: 'Add Subtract Fractions with Binomial Numerator<br>🥇', value: 'add-subtract-fractions-binomial-hard' },
            { key: 'expandingPerfectSquaresEasy', name: 'Expand Perfect Squares<br>🥉', value: 'expanding-perfect-squares-easy' },
            { key: 'expandingPerfectSquaresMedium', name: 'Expand Perfect Squares<br>🥈', value: 'expanding-perfect-squares-medium' },
            { key: 'expandingPerfectSquaresHard', name: 'Expand Perfect Squares<br>🥇', value: 'expanding-perfect-squares-hard' },
            { key: 'expandingDifferenceOfTwoSquaresEasy', name: 'Expand Difference of Two Squares<br>🥉', value: 'expanding-difference-of-two-squares-easy' },
            { key: 'expandingDifferenceOfTwoSquaresMedium', name: 'Expand Difference of Two Squares<br>🥈', value: 'expanding-difference-of-two-squares-medium' },
            { key: 'expandingDifferenceOfTwoSquaresHard', name: 'Expand Difference of Two Squares<br>🥇', value: 'expanding-difference-of-two-squares-hard' },
            { key: 'mixedExpansionEasy', name: 'Mixed Expansion<br>🥉', value: 'mixed-expansion-easy' },
            { key: 'mixedExpansionMedium', name: 'Mixed Expansion<br>🥈', value: 'mixed-expansion-medium' },
            { key: 'mixedExpansionHard', name: 'Mixed Expansion<br>🥇', value: 'mixed-expansion-hard' },
            { key: 'perfectSquareFactorisationEasy', name: 'Factorise Perfect Squares<br>🥉', value: 'perfect-square-factorisation-easy' },
            { key: 'perfectSquareFactorisationMedium', name: 'Factorise Perfect Squares<br>🥈', value: 'perfect-square-factorisation-medium' },
            { key: 'perfectSquareFactorisationHard', name: 'Factorise Perfect Squares<br>🥇', value: 'perfect-square-factorisation-hard' },
            { key: 'differenceOfTwoSquaresEasy', name: 'Factorise Difference of Two Squares<br>🥉', value: 'difference-of-two-squares-easy' },
            { key: 'differenceOfTwoSquaresMedium', name: 'Factorise Difference of Two Squares<br>🥈', value: 'difference-of-two-squares-medium' },
            { key: 'differenceOfTwoSquaresHard', name: 'Factorise Difference of Two Squares<br>🥇', value: 'difference-of-two-squares-hard' },
            { key: 'binomialFactorsEasy', name: 'Notice Binomial Factors<br>🥉', value: 'binomial-factors-easy' },
            { key: 'binomialFactorsMedium', name: 'Notice Binomial Factors<br>🥈', value: 'binomial-factors-medium' },
            { key: 'binomialFactorsHard', name: 'Notice Binomial Factors<br>🥇', value: 'binomial-factors-hard' },
            { key: 'groupingInPairsEasy', name: 'Group in Pairs<br>🥉', value: 'grouping-pairs-easy' },
            { key: 'groupingInPairsMedium', name: 'Group in Pairs<br>🥈', value: 'grouping-pairs-medium' },
            { key: 'groupingInPairsHard', name: 'Group in Pairs<br>🥇', value: 'grouping-pairs-hard' },
            { key: 'factorisingNonMonicQuadraticTrinomialsEasy', name: 'Factorise Non-monic Quadratic Trinomials<br>🥉', value: 'factorising-non-monic-quadratic-trinomials-easy' },
            { key: 'factorisingNonMonicQuadraticTrinomialsMedium', name: 'Factorise Non-monic Quadratic Trinomials<br>🥈', value: 'factorising-non-monic-quadratic-trinomials-medium' },
            { key: 'factorisingNonMonicQuadraticTrinomialsHard', name: 'Factorise Non-monic Quadratic Trinomials<br>🥇', value: 'factorising-non-monic-quadratic-trinomials-hard' },
            { key: 'mixedFactorisationEasy', name: 'Mixed Factorisation<br>🥉', value: 'mixed-factorisation-easy' },
            { key: 'mixedFactorisationMedium', name: 'Mixed Factorisation<br>🥈', value: 'mixed-factorisation-medium' },
            { key: 'mixedFactorisationHard', name: 'Mixed Factorisation<br>🥇', value: 'mixed-factorisation-hard' },
            { key: 'finishFactorisingEasy', name: 'Finish Factorising<br>🥉', value: 'finish-factorising-easy' },
            { key: 'finishFactorisingMedium', name: 'Finish Factorising<br>🥈', value: 'finish-factorising-medium' },
            { key: 'finishFactorisingHard', name: 'Finish Factorising<br>🥇', value: 'finish-factorising-hard' },
            { key: 'simplifyAlgebraicFractionsEasy', name: 'Simplify Algebraic Fractions by Factorising<br>🥉', value: 'simplify-algebraic-fractions-easy' },
            { key: 'simplifyAlgebraicFractionsMedium', name: 'Simplify Algebraic Fractions by Factorising<br>🥈', value: 'simplify-algebraic-fractions-medium' },
            { key: 'simplifyAlgebraicFractionsHard', name: 'Simplify Algebraic Fractions by Factorising<br>🥇', value: 'simplify-algebraic-fractions-hard' },
            { key: 'multiplyDivideAlgebraicFractionsByFactorisingEasy', name: 'Multiply Divide Algebraic Fractions by Factorising<br>🥉', value: 'multiply-divide-algebraic-fractions-by-factorising-easy' },
            { key: 'multiplyDivideAlgebraicFractionsByFactorisingMedium', name: 'Multiply Divide Algebraic Fractions by Factorising<br>🥈', value: 'multiply-divide-algebraic-fractions-by-factorising-medium' },
            { key: 'multiplyDivideAlgebraicFractionsByFactorisingHard', name: 'Multiply Divide Algebraic Fractions by Factorising<br>🥇', value: 'multiply-divide-algebraic-fractions-by-factorising-hard' },
            { key: 'addSubtractFractionsFactorisingEasy', name: 'Add Subtract Fractions by Factorising Denominator<br>🥉', value: 'add-subtract-fractions-factorising-easy' },
            { key: 'addSubtractFractionsFactorisingMedium', name: 'Add Subtract Fractions by Factorising Denominator<br>🥈', value: 'add-subtract-fractions-factorising-medium' },
            { key: 'addSubtractFractionsFactorisingHard', name: 'Add Subtract Fractions by Factorising Denominator<br>🥇', value: 'add-subtract-fractions-factorising-hard' },
            { key: 'compoundFractionsEasy', name: 'Compound Fractions<br>🥉', value: 'compound-fractions-easy' },
            { key: 'compoundFractionsMedium', name: 'Compound Fractions<br>🥈', value: 'compound-fractions-medium' },
            { key: 'compoundFractionsHard', name: 'Compound Fractions<br>🥇', value: 'compound-fractions-hard' },
            { key: 'surdSimplificationEasy', name: 'Simplify Surds<br>🥉', value: 'surd-simplification-easy' },
            { key: 'surdSimplificationMedium', name: 'Simplify Surds<br>🥈', value: 'surd-simplification-medium' },
            { key: 'surdSimplificationHard', name: 'Simplify Surds<br>🥇', value: 'surd-simplification-hard' },
            { key: 'addSubtractingSurdsEasy', name: 'Add Subtract Surds<br>🥉', value: 'adding-subtracting-surds-easy' },
            { key: 'addSubtractingSurdsMedium', name: 'Add Subtract Surds<br>🥈', value: 'adding-subtracting-surds-medium' },
            { key: 'addSubtractingSurdsHard', name: 'Add Subtract Surds<br>🥇', value: 'adding-subtracting-surds-hard' },
            { key: 'multiplyingDividingSurdsEasy', name: 'Multiply Divide Surds<br>🥉', value: 'multiplying-dividing-surds-easy' },
            { key: 'multiplyingDividingSurdsMedium', name: 'Multiply Divide Surds<br>🥈', value: 'multiplying-dividing-surds-medium' },
            { key: 'multiplyingDividingSurdsHard', name: 'Multiply Divide Surds<br>🥇', value: 'multiplying-dividing-surds-hard' },
            { key: 'expandingSurdsEasy', name: 'Expand Brackets with Surds<br>🥉', value: 'expanding-surds-easy' },
            { key: 'expandingSurdsMedium', name: 'Expand Brackets with Surds<br>🥈', value: 'expanding-surds-medium' },
            { key: 'expandingSurdsHard', name: 'Expand Brackets with Surds<br>🥇', value: 'expanding-surds-hard' },
            { key: 'rationalisingDenominatorEasy', name: 'Rationalise the Denominator<br>🥉', value: 'rationalising-denominator-easy' },
            { key: 'rationalisingDenominatorMedium', name: 'Rationalise the Denominator<br>🥈', value: 'rationalising-denominator-medium' },
            { key: 'rationalisingDenominatorHard', name: 'Rationalise the Denominator<br>🥇', value: 'rationalising-denominator-hard' },
            { key: 'furtherRationalisingDenominatorEasy', name: 'Rationalise Binomial Denominator<br>🥉', value: 'further-rationalising-denominator-easy' },
            { key: 'furtherRationalisingDenominatorMedium', name: 'Rationalise Binomial Denominator<br>🥈', value: 'further-rationalising-denominator-medium' },
            { key: 'furtherRationalisingDenominatorHard', name: 'Rationalise Binomial Denominator<br>🥇', value: 'further-rationalising-denominator-hard' },
            { key: 'evaluatingFractionalIndicesEasy', name: 'Evaluate Fractional Indices<br>🥉', value: 'evaluating-fractional-indices-easy' },
            { key: 'evaluatingFractionalIndicesMedium', name: 'Evaluate Fractional Indices<br>🥈', value: 'evaluating-fractional-indices-medium' },
            { key: 'evaluatingFractionalIndicesHard', name: 'Evaluate Fractional Indices<br>🥇', value: 'evaluating-fractional-indices-hard' },
            { key: 'surdToIndexEasy', name: 'Surd Form to Index Form<br>🥉', value: 'surd-to-index-easy' },
            { key: 'surdToIndexMedium', name: 'Surd Form to Index Form<br>🥈', value: 'surd-to-index-medium' },
            { key: 'surdToIndexHard', name: 'Surd Form to Index Form<br>🥇', value: 'surd-to-index-hard' },
            { key: 'indexFormToSurdFormEasy', name: 'Index Form to Surd Form<br>🥉', value: 'index-form-to-surd-form-easy' },
            { key: 'indexFormToSurdFormMedium', name: 'Index Form to Surd Form<br>🥈', value: 'index-form-to-surd-form-medium' },
            { key: 'indexFormToSurdFormHard', name: 'Index Form to Surd Form<br>🥇', value: 'index-form-to-surd-form-hard' },
        ]
    },
    REQUIRED_STREAK: 10,
    FEEDBACK_DELAY_CORRECT: 300,
    FEEDBACK_DELAY_INCORRECT: 1000,
    POSITIVE_FEEDBACK: ["Awesome!", "Great Job!", "You got it!", "Fantastic!", "Brilliant!", "Keep it up!", "Nice!", "Correct!"],
    SECOND_CHANCE_FEEDBACK: ["Try again", "Not quite right", "Have another go!", "Take another shot at it!"],
    RATING_THRESHOLDS: [
        { maxAvg: 1.5, name: "💖 Maths Queen 💖", key: "true-mastery" },
        { maxAvg: 2.5, name: "Mastery", key: "mastery" },
        { maxAvg: 3.5, name: "Expert", key: "expert" },
        { maxAvg: 5, name: "Developing", key: "developing" },
        { maxAvg: Infinity, name: "Beginner", key: "beginner" }
    ],
    LEVEL_DIFFICULTY_MULTIPLIERS: {
        // Foundational Skills - Add Subtract Terms
        'simplifyLikeTermsEasy': 1.5,
        'simplifyLikeTermsMedium': 2.0,
        'simplifyLikeTermsHard': 4.0,
        
        // Foundational Skills - Multiply Terms
        'multiplyTermsEasy': 1.5,
        'multiplyTermsMedium': 2.0,
        'multiplyTermsHard': 4.0,
        
        // Foundational Skills - Divide Terms
        'cancellingEasy': 1.5,
        'cancellingMedium': 2.0,
        'cancellingHard': 4.5,
        
        // Foundational Skills - Mixed Simplification
        'mixedAlgebraicSimplificationEasy': 1.5,
        'mixedAlgebraicSimplificationMedium': 2,
        'mixedAlgebraicSimplificationHard': 4,
        
        // Foundational Skills - Expand Single Brackets
        'expansionEasy': 1.5,
        'expansionMedium': 2,
        'expansionHard': 5,
        
        // Foundational Skills - Multiplication Index Law
        'indexLawEasy': 2,
        'indexLawMedium': 3,
        'indexLawHard': 4,
        
        // Foundational Skills - Division Index Law
        'indexLawDivisionEasy': 2,
        'indexLawDivisionMedium': 3,
        'indexLawDivisionHard': 4,
        
        // Foundational Skills - Power of Power & Zero Power
        'indexLawPowerEasy': 1.5,
        'indexLawPowerMedium': 2,
        'indexLawPowerHard': 6,
        
        // Foundational Skills - Mixed Index Laws
        'mixedIndexLawsEasy': 1.5,
        'mixedIndexLawsMedium': 3,
        'mixedIndexLawsHard': 13,
        
        // Foundational Skills - Order of Operations
        'orderOfOperationsEasy': 2,
        'orderOfOperationsMedium': 3.5,
        'orderOfOperationsHard': 8,
        
        // Foundational Skills - Factorise into Single Brackets
        'factorisingEasy': 3,
        'factorisingMedium': 4,
        'factorisingHard': 7,
        
        // Intermediate Skills - Expand & Simplify
        'expandingAndSimplifyingEasy': 3,
        'expandingAndSimplifyingMedium': 4,
        'expandingAndSimplifyingHard': 6,
        
        // Intermediate Skills - Expand Binomial Products
        'expandingDoubleBracketsEasy': 3,
        'expandingDoubleBracketsMedium': 5.5,
        'expandingDoubleBracketsHard': 12,
        
        // Intermediate Skills - Power of Products and Quotients
        'powerProductQuotientEasy': 2.5,
        'powerProductQuotientMedium': 4,
        'powerProductQuotientHard': 15,
        
        // Intermediate Skills - Add Subtract Algebraic Fractions
        'addSubtractAlgebraicFractionsEasy': 2,
        'addSubtractAlgebraicFractionsMedium': 6,
        'addSubtractAlgebraicFractionsHard': 10,
        
        // Intermediate Skills - Multiply Divide Algebraic Fractions
        'multiplyDivideAlgebraicFractionsEasy': 4,
        'multiplyDivideAlgebraicFractionsMedium': 8,
        'multiplyDivideAlgebraicFractionsHard': 22,
        
        // Intermediate Skills - Negative Indices
        'negativeIndicesEasy': 2,
        'negativeIndicesMedium': 4.0,
        'negativeIndicesHard': 20,
        
        // Intermediate Skills - Factorise Monic Quadratic Trinomials
        'factorisingMonicQuadraticTrinomialsEasy': 4,
        'factorisingMonicQuadraticTrinomialsMedium': 5,
        'factorisingMonicQuadraticTrinomialsHard': 10,
        
        
        // Advanced Skills - Add Subtract Fractions with Binomial Numerator
        'addSubtractFractionsBinomialEasy': 10,
        'addSubtractFractionsBinomialMedium': 20,
        'addSubtractFractionsBinomialHard': 25,
        
        // Advanced Skills - Expand Perfect Squares
        'expandingPerfectSquaresEasy': 3,
        'expandingPerfectSquaresMedium': 6,
        'expandingPerfectSquaresHard': 12,
        
        // Advanced Skills - Expand Difference of Two Squares
        'expandingDifferenceOfTwoSquaresEasy': 2,
        'expandingDifferenceOfTwoSquaresMedium': 4,
        'expandingDifferenceOfTwoSquaresHard': 6,
        
        // Advanced Skills - Factorise Difference of Two Squares
        'differenceOfTwoSquaresEasy': 4,
        'differenceOfTwoSquaresMedium': 10,
        'differenceOfTwoSquaresHard': 10,
        
        // Advanced Skills - Factorise Perfect Squares
        'perfectSquareFactorisationEasy': 2,
        'perfectSquareFactorisationMedium': 4,
        'perfectSquareFactorisationHard': 6,
        
        // Advanced Skills - Mixed Expansion
        'mixedExpansionEasy': 3,
        'mixedExpansionMedium': 8,
        'mixedExpansionHard': 16,
        
        // Advanced Skills - Notice Binomial Factors
        'binomialFactorsEasy': 3,
        'binomialFactorsMedium': 6,
        'binomialFactorsHard': 30,
        
        // Advanced Skills - Group in Pairs
        'groupingInPairsEasy': 8,
        'groupingInPairsMedium': 10,
        'groupingInPairsHard': 18,
        
        // Advanced Skills - Factorise Non-monic Quadratic Trinomials
        'factorisingNonMonicQuadraticTrinomialsEasy': 14,
        'factorisingNonMonicQuadraticTrinomialsMedium': 22,
        'factorisingNonMonicQuadraticTrinomialsHard': 40,
        
        // Advanced Skills - Mixed Factorisation
        'mixedFactorisationEasy': 5,
        'mixedFactorisationMedium': 15,
        'mixedFactorisationHard': 30,
        
        // Advanced Skills - Finish Factorising
        'finishFactorisingEasy': 4,
        'finishFactorisingMedium': 7,
        'finishFactorisingHard': 13,
        
        // Advanced Skills - Simplify Algebraic Fractions by Factorising
        'simplifyAlgebraicFractionsEasy': 5,
        'simplifyAlgebraicFractionsMedium': 6,
        'simplifyAlgebraicFractionsHard': 12,
        
        // Advanced Skills - Multiply Divide Algebraic Fractions by Factorising
        'multiplyDivideAlgebraicFractionsByFactorisingEasy': 5,
        'multiplyDivideAlgebraicFractionsByFactorisingMedium': 7,
        'multiplyDivideAlgebraicFractionsByFactorisingHard': 25,
        
        // Advanced Skills - Add Subtract Fractions by Factorising Denominator
        'addSubtractFractionsFactorisingEasy': 9,
        'addSubtractFractionsFactorisingMedium': 22,
        'addSubtractFractionsFactorisingHard': 46,
        
        // Advanced Skills - Compound Fractions
        'compoundFractionsEasy': 5,
        'compoundFractionsMedium': 9,
        'compoundFractionsHard': 30,
        
        // Advanced Skills - Simplify Surds
        'surdSimplificationEasy': 3,
        'surdSimplificationMedium': 6,
        'surdSimplificationHard': 7,
        
        // Advanced Skills - Add Subtract Surds
        'addSubtractingSurdsEasy': 2,
        'addSubtractingSurdsMedium': 12,
        'addSubtractingSurdsHard': 16,
        
        // Advanced Skills - Multiply Divide Surds
        'multiplyingDividingSurdsEasy': 5,
        'multiplyingDividingSurdsMedium': 8,
        'multiplyingDividingSurdsHard': 34,
        
        // Advanced Skills - Expand Brackets with Surds
        'expandingSurdsEasy': 4,
        'expandingSurdsMedium': 10,
        'expandingSurdsHard': 22,
        
        // Advanced Skills - Rationalise the Denominator
        'rationalisingDenominatorEasy': 5,
        'rationalisingDenominatorMedium': 12,
        'rationalisingDenominatorHard': 18,
        
        // Advanced Skills - Rationalise Binomial Denominator
        'furtherRationalisingDenominatorEasy': 19,
        'furtherRationalisingDenominatorMedium': 28,
        'furtherRationalisingDenominatorHard': 46,
        
        // Advanced Skills - Evaluate Fractional Indices
        'evaluatingFractionalIndicesEasy': 2,
        'evaluatingFractionalIndicesMedium': 4,
        'evaluatingFractionalIndicesHard': 6,
        
        // Advanced Skills - Surd Form to Index Form
        'surdToIndexEasy': 3,
        'surdToIndexMedium': 4,
        'surdToIndexHard': 12,
        
        // Advanced Skills - Index Form to Surd Form
        'indexFormToSurdFormEasy': 4,
        'indexFormToSurdFormMedium': 15,
        'indexFormToSurdFormHard': 15,
    },
    STORAGE_PREFIX: 'algebra_bestTime_v1_',
    CONFETTI: { CORRECT: 40, SUCCESS: 150 }
};