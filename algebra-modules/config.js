// algebra-modules/config.js
const CONFIG = {
    LEVEL_GROUPS: {

        "Foundational Skills": [
            { key: 'addSubtractTermsEasy', name: 'Add Subtract Terms<br>🥉', value: 'liketerms-easy' },
            { key: 'addSubtractTermsMedium', name: 'Add Subtract Terms<br>🥈', value: 'liketerms-medium' },
            { key: 'addSubtractTermsHard', name: 'Add Subtract Terms<br>🥇', value: 'liketerms-hard' },
            { key: 'multiplyTermsEasy', name: 'Multiply Terms<br>🥉', value: 'multiply-easy' },
            { key: 'multiplyTermsMedium', name: 'Multiply Terms<br>🥈', value: 'multiply-medium' },
            { key: 'multiplyTermsHard', name: 'Multiply Terms<br>🥇', value: 'multiply-hard' },
            { key: 'divideTermsEasy', name: 'Divide Terms<br>🥉', value: 'cancelling-easy' },
            { key: 'divideTermsMedium', name: 'Divide Terms<br>🥈', value: 'cancelling-medium' },
            { key: 'divideTermsHard', name: 'Divide Terms<br>🥇', value: 'cancelling-hard' },
            { key: 'mixedSimplificationEasy', name: 'Mixed Simplification<br>🥉', value: 'mixedalgsimp-easy' },
            { key: 'mixedSimplificationMedium', name: 'Mixed Simplification<br>🥈', value: 'mixedalgsimp-medium' },
            { key: 'mixedSimplificationHard', name: 'Mixed Simplification<br>🥇', value: 'mixedalgsimp-hard' },
            { key: 'expandSingleBracketsEasy', name: 'Expand Single Brackets<br>🥉', value: 'expansion-easy' },
            { key: 'expandSingleBracketsMedium', name: 'Expand Single Brackets<br>🥈', value: 'expansion-medium' },
            { key: 'expandSingleBracketsHard', name: 'Expand Single Brackets<br>🥇', value: 'expansion-hard' },
            { key: 'multiplicationIndexLawEasy', name: 'Multiplication Index Law<br>🥉', value: 'indexlaw-easy' },
            { key: 'multiplicationIndexLawMedium', name: 'Multiplication Index Law<br>🥈', value: 'indexlaw-medium' },
            { key: 'multiplicationIndexLawHard', name: 'Multiplication Index Law<br>🥇', value: 'indexlaw-hard' },
            { key: 'divisionIndexLawEasy', name: 'Division Index Law<br>🥉', value: 'indexlawdivision-easy' },
            { key: 'divisionIndexLawMedium', name: 'Division Index Law<br>🥈', value: 'indexlawdivision-medium' },
            { key: 'divisionIndexLawHard', name: 'Division Index Law<br>🥇', value: 'indexlawdivision-hard' },
            { key: 'powerOfPowerAndZeroPowerEasy', name: 'Power of Power & Zero Power<br>🥉', value: 'indexlawpower-easy' },
            { key: 'powerOfPowerAndZeroPowerMedium', name: 'Power of Power & Zero Power<br>🥈', value: 'indexlawpower-medium' },
            { key: 'powerOfPowerAndZeroPowerHard', name: 'Power of Power & Zero Power<br>🥇', value: 'indexlawpower-hard' },
            { key: 'mixedIndexLawsEasy', name: 'Mixed Index Laws<br>🥉', value: 'mixedindexlaws-easy' },
            { key: 'mixedIndexLawsMedium', name: 'Mixed Index Laws<br>🥈', value: 'mixedindexlaws-medium' },
            { key: 'mixedIndexLawsHard', name: 'Mixed Index Laws<br>🥇', value: 'mixedindexlaws-hard' },
            { key: 'orderOfOperationsEasy', name: 'Order of Operations<br>🥉', value: 'order-operations-easy' },
            { key: 'orderOfOperationsMedium', name: 'Order of Operations<br>🥈', value: 'order-operations-medium' },
            { key: 'orderOfOperationsHard', name: 'Order of Operations<br>🥇', value: 'order-operations-hard' },
            { key: 'factoriseIntoSingleBracketsEasy', name: 'Factorise into Single Brackets<br>🥉', value: 'factorising-easy' },
            { key: 'factoriseIntoSingleBracketsMedium', name: 'Factorise into Single Brackets<br>🥈', value: 'factorising-medium' },
            { key: 'factoriseIntoSingleBracketsHard', name: 'Factorise into Single Brackets<br>🥇', value: 'factorising-hard' },
        ],

        "Intermediate Skills": [
            { key: 'expandAndSimplifyEasy', name: 'Expand & Simplify<br>🥉', value: 'expanding-simplifying-easy' },
            { key: 'expandAndSimplifyMedium', name: 'Expand & Simplify<br>🥈', value: 'expanding-simplifying-medium' },
            { key: 'expandAndSimplifyHard', name: 'Expand & Simplify<br>🥇', value: 'expanding-simplifying-hard' },
            { key: 'expandBinomialProductsEasy', name: 'Expand Binomial Products<br>🥉', value: 'expanding-double-brackets-easy' },
            { key: 'expandBinomialProductsMedium', name: 'Expand Binomial Products<br>🥈', value: 'expanding-double-brackets-medium' },
            { key: 'expandBinomialProductsHard', name: 'Expand Binomial Products<br>🥇', value: 'expanding-double-brackets-hard' },
            { key: 'powerOfProductsAndQuotientsEasy', name: 'Power of Products and Quotients<br>🥉', value: 'power-product-quotient-easy' },
            { key: 'powerOfProductsAndQuotientsMedium', name: 'Power of Products and Quotients<br>🥈', value: 'power-product-quotient-medium' },
            { key: 'powerOfProductsAndQuotientsHard', name: 'Power of Products and Quotients<br>🥇', value: 'power-product-quotient-hard' },
            { key: 'addSubtractAlgebraicFractionsEasy', name: 'Add Subtract Algebraic Fractions<br>🥉', value: 'add-subtract-algebraic-fractions-easy' },
            { key: 'addSubtractAlgebraicFractionsMedium', name: 'Add Subtract Algebraic Fractions<br>🥈', value: 'add-subtract-algebraic-fractions-medium' },
            { key: 'addSubtractAlgebraicFractionsHard', name: 'Add Subtract Algebraic Fractions<br>🥇', value: 'add-subtract-algebraic-fractions-hard' },
            { key: 'multiplyDivideAlgebraicFractionsEasy', name: 'Multiply Divide Algebraic Fractions<br>🥉', value: 'multiply-divide-algebraic-fractions-easy' },
            { key: 'multiplyDivideAlgebraicFractionsMedium', name: 'Multiply Divide Algebraic Fractions<br>🥈', value: 'multiply-divide-algebraic-fractions-medium' },
            { key: 'multiplyDivideAlgebraicFractionsHard', name: 'Multiply Divide Algebraic Fractions<br>🥇', value: 'multiply-divide-algebraic-fractions-hard' },
            { key: 'negativeIndicesEasy', name: 'Negative Indices<br>🥉', value: 'negative-indices-easy' },
            { key: 'negativeIndicesMedium', name: 'Negative Indices<br>🥈', value: 'negative-indices-medium' },
            { key: 'negativeIndicesHard', name: 'Negative Indices<br>🥇', value: 'negative-indices-hard' },
            { key: 'factoriseMonicQuadraticTrinomialsEasy', name: 'Factorise Monic Quadratic Trinomials<br>🥉', value: 'factorising-monic-quadratic-trinomials-easy' },
            { key: 'factoriseMonicQuadraticTrinomialsMedium', name: 'Factorise Monic Quadratic Trinomials<br>🥈', value: 'factorising-monic-quadratic-trinomials-medium' },
            { key: 'factoriseMonicQuadraticTrinomialsHard', name: 'Factorise Monic Quadratic Trinomials<br>🥇', value: 'factorising-monic-quadratic-trinomials-hard' },
        ],

        "Advanced Skills": [
            { key: 'addSubtractFractionsWithBinomialNumeratorEasy', name: 'Add Subtract Fractions with Binomial Numerator<br>🥉', value: 'add-subtract-fractions-binomial-easy' },
            { key: 'addSubtractFractionsWithBinomialNumeratorMedium', name: 'Add Subtract Fractions with Binomial Numerator<br>🥈', value: 'add-subtract-fractions-binomial-medium' },
            { key: 'addSubtractFractionsWithBinomialNumeratorHard', name: 'Add Subtract Fractions with Binomial Numerator<br>🥇', value: 'add-subtract-fractions-binomial-hard' },
            { key: 'expandPerfectSquaresEasy', name: 'Expand Perfect Squares<br>🥉', value: 'expanding-perfect-squares-easy' },
            { key: 'expandPerfectSquaresMedium', name: 'Expand Perfect Squares<br>🥈', value: 'expanding-perfect-squares-medium' },
            { key: 'expandPerfectSquaresHard', name: 'Expand Perfect Squares<br>🥇', value: 'expanding-perfect-squares-hard' },
            { key: 'expandDifferenceOfTwoSquaresEasy', name: 'Expand Difference of Two Squares<br>🥉', value: 'expanding-difference-of-two-squares-easy' },
            { key: 'expandDifferenceOfTwoSquaresMedium', name: 'Expand Difference of Two Squares<br>🥈', value: 'expanding-difference-of-two-squares-medium' },
            { key: 'expandDifferenceOfTwoSquaresHard', name: 'Expand Difference of Two Squares<br>🥇', value: 'expanding-difference-of-two-squares-hard' },
            { key: 'mixedExpansionEasy', name: 'Mixed Expansion<br>🥉', value: 'mixed-expansion-easy' },
            { key: 'mixedExpansionMedium', name: 'Mixed Expansion<br>🥈', value: 'mixed-expansion-medium' },
            { key: 'mixedExpansionHard', name: 'Mixed Expansion<br>🥇', value: 'mixed-expansion-hard' },
            { key: 'factorisePerfectSquaresEasy', name: 'Factorise Perfect Squares<br>🥉', value: 'perfect-square-factorisation-easy' },
            { key: 'factorisePerfectSquaresMedium', name: 'Factorise Perfect Squares<br>🥈', value: 'perfect-square-factorisation-medium' },
            { key: 'factorisePerfectSquaresHard', name: 'Factorise Perfect Squares<br>🥇', value: 'perfect-square-factorisation-hard' },
            { key: 'factoriseDifferenceOfTwoSquaresEasy', name: 'Factorise Difference of Two Squares<br>🥉', value: 'difference-of-two-squares-easy' },
            { key: 'factoriseDifferenceOfTwoSquaresMedium', name: 'Factorise Difference of Two Squares<br>🥈', value: 'difference-of-two-squares-medium' },
            { key: 'factoriseDifferenceOfTwoSquaresHard', name: 'Factorise Difference of Two Squares<br>🥇', value: 'difference-of-two-squares-hard' },
            { key: 'noticeBinomialFactorsEasy', name: 'Notice Binomial Factors<br>🥉', value: 'binomial-factors-easy' },
            { key: 'noticeBinomialFactorsMedium', name: 'Notice Binomial Factors<br>🥈', value: 'binomial-factors-medium' },
            { key: 'noticeBinomialFactorsHard', name: 'Notice Binomial Factors<br>🥇', value: 'binomial-factors-hard' },
            { key: 'groupInPairsEasy', name: 'Group in Pairs<br>🥉', value: 'grouping-pairs-easy' },
            { key: 'groupInPairsMedium', name: 'Group in Pairs<br>🥈', value: 'grouping-pairs-medium' },
            { key: 'groupInPairsHard', name: 'Group in Pairs<br>🥇', value: 'grouping-pairs-hard' },
            { key: 'factoriseNonMonicQuadraticTrinomialsEasy', name: 'Factorise Non-monic Quadratic Trinomials<br>🥉', value: 'factorising-non-monic-quadratic-trinomials-easy' },
            { key: 'factoriseNonMonicQuadraticTrinomialsMedium', name: 'Factorise Non-monic Quadratic Trinomials<br>🥈', value: 'factorising-non-monic-quadratic-trinomials-medium' },
            { key: 'factoriseNonMonicQuadraticTrinomialsHard', name: 'Factorise Non-monic Quadratic Trinomials<br>🥇', value: 'factorising-non-monic-quadratic-trinomials-hard' },
            { key: 'mixedFactorisationEasy', name: 'Mixed Factorisation<br>🥉', value: 'mixed-factorisation-easy' },
            { key: 'mixedFactorisationMedium', name: 'Mixed Factorisation<br>🥈', value: 'mixed-factorisation-medium' },
            { key: 'mixedFactorisationHard', name: 'Mixed Factorisation<br>🥇', value: 'mixed-factorisation-hard' },
            { key: 'finishFactorisingEasy', name: 'Finish Factorising<br>🥉', value: 'finish-factorising-easy' },
            { key: 'finishFactorisingMedium', name: 'Finish Factorising<br>🥈', value: 'finish-factorising-medium' },
            { key: 'finishFactorisingHard', name: 'Finish Factorising<br>🥇', value: 'finish-factorising-hard' },
            { key: 'simplifyAlgebraicFractionsByFactorisingEasy', name: 'Simplify Algebraic Fractions by Factorising<br>🥉', value: 'simplify-algebraic-fractions-easy' },
            { key: 'simplifyAlgebraicFractionsByFactorisingMedium', name: 'Simplify Algebraic Fractions by Factorising<br>🥈', value: 'simplify-algebraic-fractions-medium' },
            { key: 'simplifyAlgebraicFractionsByFactorisingHard', name: 'Simplify Algebraic Fractions by Factorising<br>🥇', value: 'simplify-algebraic-fractions-hard' },
            { key: 'multiplyDivideAlgebraicFractionsByFactorisingEasy', name: 'Multiply Divide Algebraic Fractions by Factorising<br>🥉', value: 'multiply-divide-algebraic-fractions-by-factorising-easy' },
            { key: 'multiplyDivideAlgebraicFractionsByFactorisingMedium', name: 'Multiply Divide Algebraic Fractions by Factorising<br>🥈', value: 'multiply-divide-algebraic-fractions-by-factorising-medium' },
            { key: 'multiplyDivideAlgebraicFractionsByFactorisingHard', name: 'Multiply Divide Algebraic Fractions by Factorising<br>🥇', value: 'multiply-divide-algebraic-fractions-by-factorising-hard' },
            { key: 'addSubtractFractionsByFactorisingDenominatorEasy', name: 'Add Subtract Fractions by Factorising Denominator<br>🥉', value: 'add-subtract-fractions-factorising-easy' },
            { key: 'addSubtractFractionsByFactorisingDenominatorMedium', name: 'Add Subtract Fractions by Factorising Denominator<br>🥈', value: 'add-subtract-fractions-factorising-medium' },
            { key: 'addSubtractFractionsByFactorisingDenominatorHard', name: 'Add Subtract Fractions by Factorising Denominator<br>🥇', value: 'add-subtract-fractions-factorising-hard' },
            { key: 'compoundFractionsEasy', name: 'Compound Fractions<br>🥉', value: 'compound-fractions-easy' },
            { key: 'compoundFractionsMedium', name: 'Compound Fractions<br>🥈', value: 'compound-fractions-medium' },
            { key: 'compoundFractionsHard', name: 'Compound Fractions<br>🥇', value: 'compound-fractions-hard' },
            { key: 'simplifySurdsEasy', name: 'Simplify Surds<br>🥉', value: 'surd-simplification-easy' },
            { key: 'simplifySurdsMedium', name: 'Simplify Surds<br>🥈', value: 'surd-simplification-medium' },
            { key: 'simplifySurdsHard', name: 'Simplify Surds<br>🥇', value: 'surd-simplification-hard' },
            { key: 'addSubtractSurdsEasy', name: 'Add Subtract Surds<br>🥉', value: 'adding-subtracting-surds-easy' },
            { key: 'addSubtractSurdsMedium', name: 'Add Subtract Surds<br>🥈', value: 'adding-subtracting-surds-medium' },
            { key: 'addSubtractSurdsHard', name: 'Add Subtract Surds<br>🥇', value: 'adding-subtracting-surds-hard' },
            { key: 'multiplyDivideSurdsEasy', name: 'Multiply Divide Surds<br>🥉', value: 'multiplying-dividing-surds-easy' },
            { key: 'multiplyDivideSurdsMedium', name: 'Multiply Divide Surds<br>🥈', value: 'multiplying-dividing-surds-medium' },
            { key: 'multiplyDivideSurdsHard', name: 'Multiply Divide Surds<br>🥇', value: 'multiplying-dividing-surds-hard' },
            { key: 'expandBracketsWithSurdsEasy', name: 'Expand Brackets with Surds<br>🥉', value: 'expanding-surds-easy' },
            { key: 'expandBracketsWithSurdsMedium', name: 'Expand Brackets with Surds<br>🥈', value: 'expanding-surds-medium' },
            { key: 'expandBracketsWithSurdsHard', name: 'Expand Brackets with Surds<br>🥇', value: 'expanding-surds-hard' },
            { key: 'rationaliseTheDenominatorEasy', name: 'Rationalise the Denominator<br>🥉', value: 'rationalising-denominator-easy' },
            { key: 'rationaliseTheDenominatorMedium', name: 'Rationalise the Denominator<br>🥈', value: 'rationalising-denominator-medium' },
            { key: 'rationaliseTheDenominatorHard', name: 'Rationalise the Denominator<br>🥇', value: 'rationalising-denominator-hard' },
            { key: 'rationaliseBinomialDenominatorEasy', name: 'Rationalise Binomial Denominator<br>🥉', value: 'further-rationalising-denominator-easy' },
            { key: 'rationaliseBinomialDenominatorMedium', name: 'Rationalise Binomial Denominator<br>🥈', value: 'further-rationalising-denominator-medium' },
            { key: 'rationaliseBinomialDenominatorHard', name: 'Rationalise Binomial Denominator<br>🥇', value: 'further-rationalising-denominator-hard' },
            { key: 'evaluateFractionalIndicesEasy', name: 'Evaluate Fractional Indices<br>🥉', value: 'evaluating-fractional-indices-easy' },
            { key: 'evaluateFractionalIndicesMedium', name: 'Evaluate Fractional Indices<br>🥈', value: 'evaluating-fractional-indices-medium' },
            { key: 'evaluateFractionalIndicesHard', name: 'Evaluate Fractional Indices<br>🥇', value: 'evaluating-fractional-indices-hard' },
            { key: 'surdFormToIndexFormEasy', name: 'Surd Form to Index Form<br>🥉', value: 'surd-to-index-easy' },
            { key: 'surdFormToIndexFormMedium', name: 'Surd Form to Index Form<br>🥈', value: 'surd-to-index-medium' },
            { key: 'surdFormToIndexFormHard', name: 'Surd Form to Index Form<br>🥇', value: 'surd-to-index-hard' },
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
        'addSubtractTermsEasy': 1.5,
        'addSubtractTermsMedium': 2.0,
        'addSubtractTermsHard': 4.0,
        
        // Foundational Skills - Multiply Terms
        'multiplyTermsEasy': 1.5,
        'multiplyTermsMedium': 2.0,
        'multiplyTermsHard': 4.0,
        
        // Foundational Skills - Divide Terms
        'divideTermsEasy': 1.5,
        'divideTermsMedium': 2.0,
        'divideTermsHard': 4.5,
        
        // Foundational Skills - Mixed Simplification
        'mixedSimplificationEasy': 1.5,
        'mixedSimplificationMedium': 2,
        'mixedSimplificationHard': 4,
        
        // Foundational Skills - Expand Single Brackets
        'expandSingleBracketsEasy': 1.5,
        'expandSingleBracketsMedium': 2,
        'expandSingleBracketsHard': 5,
        
        // Foundational Skills - Multiplication Index Law
        'multiplicationIndexLawEasy': 2,
        'multiplicationIndexLawMedium': 3,
        'multiplicationIndexLawHard': 4,
        
        // Foundational Skills - Division Index Law
        'divisionIndexLawEasy': 2,
        'divisionIndexLawMedium': 3,
        'divisionIndexLawHard': 4,
        
        // Foundational Skills - Power of Power & Zero Power
        'powerOfPowerAndZeroPowerEasy': 1.5,
        'powerOfPowerAndZeroPowerMedium': 2,
        'powerOfPowerAndZeroPowerHard': 6,
        
        // Foundational Skills - Mixed Index Laws
        'mixedIndexLawsEasy': 1.5,
        'mixedIndexLawsMedium': 3,
        'mixedIndexLawsHard': 13,
        
        // Foundational Skills - Order of Operations
        'orderOfOperationsEasy': 2,
        'orderOfOperationsMedium': 3.5,
        'orderOfOperationsHard': 8,
        
        // Foundational Skills - Factorise into Single Brackets
        'factoriseIntoSingleBracketsEasy': 3,
        'factoriseIntoSingleBracketsMedium': 4,
        'factoriseIntoSingleBracketsHard': 7,
        
        // Intermediate Skills - Expand & Simplify
        'expandAndSimplifyEasy': 3,
        'expandAndSimplifyMedium': 4,
        'expandAndSimplifyHard': 6,
        
        // Intermediate Skills - Expand Binomial Products
        'expandBinomialProductsEasy': 3,
        'expandBinomialProductsMedium': 5.5,
        'expandBinomialProductsHard': 12,
        
        // Intermediate Skills - Power of Products and Quotients
        'powerOfProductsAndQuotientsEasy': 2.5,
        'powerOfProductsAndQuotientsMedium': 4,
        'powerOfProductsAndQuotientsHard': 15,
        
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
        'factoriseMonicQuadraticTrinomialsEasy': 4,
        'factoriseMonicQuadraticTrinomialsMedium': 5,
        'factoriseMonicQuadraticTrinomialsHard': 10,
        
        
        // Advanced Skills - Add Subtract Fractions with Binomial Numerator
        'addSubtractFractionsWithBinomialNumeratorEasy': 10,
        'addSubtractFractionsWithBinomialNumeratorMedium': 20,
        'addSubtractFractionsWithBinomialNumeratorHard': 25,
        
        // Advanced Skills - Expand Perfect Squares
        'expandPerfectSquaresEasy': 3,
        'expandPerfectSquaresMedium': 6,
        'expandPerfectSquaresHard': 12,
        
        // Advanced Skills - Expand Difference of Two Squares
        'expandDifferenceOfTwoSquaresEasy': 2,
        'expandDifferenceOfTwoSquaresMedium': 4,
        'expandDifferenceOfTwoSquaresHard': 6,
        
        // Advanced Skills - Factorise Difference of Two Squares
        'factoriseDifferenceOfTwoSquaresEasy': 4,
        'factoriseDifferenceOfTwoSquaresMedium': 10,
        'factoriseDifferenceOfTwoSquaresHard': 10,
        
        // Advanced Skills - Factorise Perfect Squares
        'factorisePerfectSquaresEasy': 2,
        'factorisePerfectSquaresMedium': 4,
        'factorisePerfectSquaresHard': 6,
        
        // Advanced Skills - Mixed Expansion
        'mixedExpansionEasy': 3,
        'mixedExpansionMedium': 8,
        'mixedExpansionHard': 16,
        
        // Advanced Skills - Notice Binomial Factors
        'noticeBinomialFactorsEasy': 3,
        'noticeBinomialFactorsMedium': 6,
        'noticeBinomialFactorsHard': 30,
        
        // Advanced Skills - Group in Pairs
        'groupInPairsEasy': 8,
        'groupInPairsMedium': 10,
        'groupInPairsHard': 18,
        
        // Advanced Skills - Factorise Non-monic Quadratic Trinomials
        'factoriseNonMonicQuadraticTrinomialsEasy': 14,
        'factoriseNonMonicQuadraticTrinomialsMedium': 22,
        'factoriseNonMonicQuadraticTrinomialsHard': 40,
        
        // Advanced Skills - Mixed Factorisation
        'mixedFactorisationEasy': 5,
        'mixedFactorisationMedium': 15,
        'mixedFactorisationHard': 30,
        
        // Advanced Skills - Finish Factorising
        'finishFactorisingEasy': 4,
        'finishFactorisingMedium': 7,
        'finishFactorisingHard': 13,
        
        // Advanced Skills - Simplify Algebraic Fractions by Factorising
        'simplifyAlgebraicFractionsByFactorisingEasy': 5,
        'simplifyAlgebraicFractionsByFactorisingMedium': 6,
        'simplifyAlgebraicFractionsByFactorisingHard': 12,
        
        // Advanced Skills - Multiply Divide Algebraic Fractions by Factorising
        'multiplyDivideAlgebraicFractionsByFactorisingEasy': 5,
        'multiplyDivideAlgebraicFractionsByFactorisingMedium': 7,
        'multiplyDivideAlgebraicFractionsByFactorisingHard': 25,
        
        // Advanced Skills - Add Subtract Fractions by Factorising Denominator
        'addSubtractFractionsByFactorisingDenominatorEasy': 9,
        'addSubtractFractionsByFactorisingDenominatorMedium': 22,
        'addSubtractFractionsByFactorisingDenominatorHard': 46,
        
        // Advanced Skills - Compound Fractions
        'compoundFractionsEasy': 5,
        'compoundFractionsMedium': 9,
        'compoundFractionsHard': 30,
        
        // Advanced Skills - Simplify Surds
        'simplifySurdsEasy': 3,
        'simplifySurdsMedium': 6,
        'simplifySurdsHard': 7,
        
        // Advanced Skills - Add Subtract Surds
        'addSubtractSurdsEasy': 2,
        'addSubtractSurdsMedium': 12,
        'addSubtractSurdsHard': 16,
        
        // Advanced Skills - Multiply Divide Surds
        'multiplyDivideSurdsEasy': 5,
        'multiplyDivideSurdsMedium': 8,
        'multiplyDivideSurdsHard': 34,
        
        // Advanced Skills - Expand Brackets with Surds
        'expandBracketsWithSurdsEasy': 4,
        'expandBracketsWithSurdsMedium': 10,
        'expandBracketsWithSurdsHard': 22,
        
        // Advanced Skills - Rationalise the Denominator
        'rationaliseTheDenominatorEasy': 5,
        'rationaliseTheDenominatorMedium': 12,
        'rationaliseTheDenominatorHard': 18,
        
        // Advanced Skills - Rationalise Binomial Denominator
        'rationaliseBinomialDenominatorEasy': 19,
        'rationaliseBinomialDenominatorMedium': 28,
        'rationaliseBinomialDenominatorHard': 46,
        
        // Advanced Skills - Evaluate Fractional Indices
        'evaluateFractionalIndicesEasy': 1,
        'evaluateFractionalIndicesMedium': 4,
        'evaluateFractionalIndicesHard': 6,
        
        // Advanced Skills - Surd Form to Index Form
        'surdFormToIndexFormEasy': 3,
        'surdFormToIndexFormMedium': 4,
        'surdFormToIndexFormHard': 12,
        
        // Advanced Skills - Index Form to Surd Form
        'indexFormToSurdFormEasy': 4,
        'indexFormToSurdFormMedium': 15,
        'indexFormToSurdFormHard': 15,
    },
    STORAGE_PREFIX: 'algebra_bestTime_v1_',
    CONFETTI: { CORRECT: 40, SUCCESS: 150 }
};