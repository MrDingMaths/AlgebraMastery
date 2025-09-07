class MixedFactorisationHard {
    constructor() {
        this.key = 'mixedFactorisationHard';
        this.name = 'Mixed Factorisation (Hard)';
        this.usedQuestionIndices = new Set();
        
        this.questions = [
            // Very complex grouped expressions
            {problem: "(x + 4)(x + 8) + (x + 4)^2(x + 8)", answer: "(x + 4)(x + 5)(x + 8)"},
            {problem: "(x + 4)(x + 8) - (-x - 4)(x + 2)", answer: "2(x + 4)(x + 5)"},
            {problem: "(2x + 8)(x + 8) + (3x + 12)(x + 8)", answer: "5(x + 4)(x + 8)"},
            
            // Complex fractions and mixed numbers
            {problem: "9d^2 - 2\\frac{1}{4}", answer: "(3d - \\frac{3}{2})(3d + \\frac{3}{2})"},
            
            // Higher degree with complex factorisation
            {problem: "a^4 + a^3 + a^2 + a", answer: "a(a + 1)(a^2 + 1)"},
            {problem: "ax^2 - a - 2x^2 + 2", answer: "(a - 2)(x - 1)(x + 1)"},
            {problem: "9ab - 4a^3b^3", answer: "ab(3 - 2ab)(3 + 2ab)"},
            {problem: "y^2(y + 5) - 16(y + 5)", answer: "(y - 4)(y + 4)(y + 5)"},
            {problem: "x^4 + 8x^3 - x^2 - 8x", answer: "x(x - 1)(x + 1)(x + 8)"},
            {problem: "x^3 - 3x^2 - 9x + 27", answer: "(x + 3)(x - 3)^2"},
            
            // Complex non-monic quadratics
            {problem: "18x^2 + 33x - 30", answer: "3(2x + 5)(3x - 2)"},
            
            // Advanced expressions with variables in denominators
            {problem: "x^2 + 2 + \\frac{1}{x^2}", answer: "(x + \\frac{1}{x})^2"},
            {problem: "25k^2 - 20 + \\frac{4}{k^2}", answer: "(5k - \\frac{2}{k})^2"},
            
            // Complex difference of squares
            {problem: "(a - 1)^2 - (b - 2)^2", answer: "(a - b + 1)(a + b - 3)"},
            {problem: "(x + 2)^2 - (2y + 1)^2", answer: "(x - 2y + 1)(x + 2y + 3)"},
            
            // Very high degree factorisation
            {problem: "x^4 - 16y^4", answer: "(x - 2y)(x + 2y)(x^2 + 4y^2)"},
            {problem: "144e^5 - 36e^3", answer: "36e^3(2e - 1)(2e + 1)"},
            
            // Complex fractions with mixed numbers
            {problem: "100k^2 - 6\\frac{1}{4}", answer: "(10k - \\frac{5}{2})(10k + \\frac{5}{2})"},
            {problem: "36m^3n^2 - 9m", answer: "9m(2mn - 1)(2mn + 1)"},
            
            // Very complex fractions
            {problem: "\\frac{64b^2}{25} - \\frac{4y^2}{81}", answer: "(\\frac{8b}{5} - \\frac{2y}{9})(\\frac{8b}{5} + \\frac{2y}{9})"},
            {problem: "3p^2 - \\frac{48}{p^2}", answer: "3(p - \\frac{4}{p})(p + \\frac{4}{p})"},
            {problem: "\\frac{4c^2}{9} - \\frac{e^2}{36}", answer: "(\\frac{2c}{3} - \\frac{e}{6})(\\frac{2c}{3} + \\frac{e}{6})"},
            
            // Complex algebraic manipulation
            {problem: "(p + x)^2 - (p - x)^2", answer: "4px"},
            {problem: "4g^2 - (g - 2k)^2", answer: "(g + 2k)(3g - 2k)"},
            
            // Very high degree with complex patterns
            {problem: "5w^5 - 80w", answer: "5w(w - 2)(w + 2)(w^2 + 4)"},
            {problem: "4x^4 - 37x^2 + 9", answer: "(x - 3)(x + 3)(2x - 1)(2x + 1)"},
            
            // Complex quadratics with negative leading coefficients
            {problem: "40 - 18x - 40x^2", answer: "-2(4x + 5)(5x - 4)"},
            
            // Mixed higher degree factorisation
            {problem: "4x^3 - 12x^2 - x + 3", answer: "(x - 3)(2x - 1)(2x + 1)"},
            {problem: "x^4 - x^2 - 2x - 1", answer: "(x^2 - x - 1)(x^2 + x + 1)"},
            
            // Additional challenging problems for comprehensive coverage
            {problem: "2x^4 - 32", answer: "2(x - 2)(x + 2)(x^2 + 4)"},
            {problem: "3x^3 + 24x^2 + 48x", answer: "3x(x + 4)^2"},
            {problem: "4x^4 - 4x^2 + 1", answer: "(2x^2 - 1)^2"},
            {problem: "x^6 - 64", answer: "(x - 2)(x + 2)(x^2 + 2x + 4)(x^2 - 2x + 4)"},
            {problem: "3x^4 - 3x^2 - 36", answer: "3(x^2 - 4)(x^2 + 3)"},
            {problem: "x^4 - 2x^2 + 1", answer: "(x^2 - 1)^2"},
            {problem: "4x^6 - 1", answer: "(2x^3 - 1)(2x^3 + 1)"},
            {problem: "x^8 - 1", answer: "(x - 1)(x + 1)(x^2 + 1)(x^4 + 1)"},
            {problem: "2x^5 - 32x", answer: "2x(x - 2)(x + 2)(x^2 + 4)"},
            {problem: "3x^2y^2 - 12", answer: "3(xy - 2)(xy + 2)"},
            {problem: "4a^4b^2 - 36a^2b^4", answer: "4a^2b^2(a - 3b)(a + 3b)"},
            {problem: "x^2 - 4xy + 4y^2 - 9", answer: "(x - 2y - 3)(x - 2y + 3)"},
            {problem: "9x^4 - 6x^2 + 1", answer: "(3x^2 - 1)^2"},
            {problem: "x^4 + 4x^3 + 6x^2 + 4x + 1", answer: "(x + 1)^4"},
            {problem: "2x^4 - 2", answer: "2(x^2 - 1)(x^2 + 1)"},
            {problem: "3x^5 - 3x", answer: "3x(x^2 - 1)(x^2 + 1)"},
            {problem: "-5x^2 + 4x - 5x + 4", answer: "(4-5x)(x+1)"},
            {problem: "3x - 8x - 6x^2 + 4", answer: "(1-2x)(3x+4)"},
            {problem: "x^2 - bx + x - b", answer: "(x+1)(x-b)"},
            {problem: "x^2 - cx + x - c", answer: "(x+1)(x-c)"},
            {problem: "x^2 + bx + x + b", answer: "(x+1)(x+b)"},
            {problem: "x^2 + cx - x - c", answer: "(x-1)(x+c)"},
            {problem: "x^2 + ax - x - a", answer: "(x-1)(x+a)"},
            {problem: "x^2 - bx - x + b", answer: "(x-1)(x-b)"},
            {problem: "x^2 - 3x - 3xc + 9c", answer: "(x-3c)(x-3)"},
            {problem: "x^2 - 2x - xa + 2a", answer: "(x-a)(x-2)"},
            {problem: "x^2 - 5x - 3xa + 15a", answer: "(x-3a)(x-5)"},
            
            // Additional hard questions with parameters and complex rearrangement
            {problem: "x^2 + ax + bx + ab", answer: "(x+a)(x+b)"},
            {problem: "x^2 - ax + bx - ab", answer: "(x-a)(x+b)"},
            {problem: "x^2 + ax - bx - ab", answer: "(x+a)(x-b)"},
            {problem: "x^2 - ax - bx + ab", answer: "(x-a)(x-b)"},
            {problem: "2x^2 + ax + bx + \\frac{ab}{2}", answer: "(2x+a)(x+\\frac{b}{2})"},
            {problem: "3x^2 + ax + bx + \\frac{ab}{3}", answer: "(3x+a)(x+\\frac{b}{3})"},
            {problem: "4x^2 - ax + bx - \\frac{ab}{4}", answer: "(4x-a)(x+\\frac{b}{4})"},
            {problem: "5x^2 - ax - bx + \\frac{ab}{5}", answer: "(5x-a)(x-\\frac{b}{5})"},
            
            // Complex parameter relationships
            {problem: "x^2 + (a+b)x + ax + ab", answer: "x^2 + 2ax + bx + ab"},
            {problem: "x^2 - (a+b)x + ax - ab", answer: "x^2 - bx - ab"},
            {problem: "x^2 + (a-b)x - bx - ab", answer: "x^2 + ax - 2bx - ab"},
            {problem: "x^2 - (a-b)x - bx + ab", answer: "x^2 - ax + ab"},
            
            // Negative leading coefficients
            {problem: "-x^2 + ax + bx - ab", answer: "-(x-a)(x-b)"},
            {problem: "-x^2 - ax + bx + ab", answer: "-(x+a)(x-b)"},
            {problem: "-x^2 + ax - bx + ab", answer: "-(x-a)(x+b)"},
            {problem: "-x^2 - ax - bx - ab", answer: "-(x+a)(x+b)"},
            {problem: "-2x^2 + 3x - 4x + 6", answer: "-(2x-3)(x+2)"},
            {problem: "-3x^2 + 5x - 2x + \\frac{10}{3}", answer: "-(3x-5)(x+\\frac{2}{3})"},
            
            // Multiple parameters with different variables
            {problem: "ax^2 + a^2x + bx + ab", answer: "(ax+b)(x+a)"},
            {problem: "bx^2 + abx + cx + ac", answer: "(bx+c)(x+a)"},
            {problem: "cx^2 + acx + bx + ab", answer: "(cx+b)(x+a)"},
            {problem: "dx^2 + adx + ex + ae", answer: "(dx+e)(x+a)"},
            {problem: "ex^2 - aex + fx - af", answer: "(ex+f)(x-a)"},
            
            // Fractional coefficients
            {problem: "\\frac{1}{2}x^2 + \\frac{a}{2}x + bx + ab", answer: "(\\frac{1}{2}x+b)(x+a)"},
            {problem: "\\frac{1}{3}x^2 + \\frac{a}{3}x + bx + \\frac{ab}{3}", answer: "\\frac{1}{3}x^2 + \\frac{a}{3}x + bx + \\frac{ab}{3}"},
            {problem: "\\frac{2}{3}x^2 + \\frac{2a}{3}x + bx + \\frac{ab}{3}", answer: "\\frac{2}{3}x^2 + \\frac{2a}{3}x + bx + \\frac{ab}{3}"},
            {problem: "\\frac{3}{4}x^2 - \\frac{3a}{4}x + bx - \\frac{ab}{4}", answer: "\\frac{3}{4}x^2 - \\frac{3a}{4}x + bx - \\frac{ab}{4}"},
            
            // Complex rearrangement needed
            {problem: "ab + x^2 + ax + bx", answer: "(x+a)(x+b)"},
            {problem: "ab - x^2 + ax - bx", answer: "(a-x)(x+b)"},
            {problem: "-ab + x^2 - ax + bx", answer: "(x-a)(x+b)"},
            {problem: "-ab - x^2 + ax + bx", answer: "-(x-a)(x-b)"},
            {problem: "2ab + 2x^2 + 2ax + 2bx", answer: "2(x+a)(x+b)"},
            {problem: "3ac - 3x^2 + 3ax - 3cx", answer: "3(a-x)(x+c)"},
            
            // Mixed variable expressions with parameters
            {problem: "axy + ay + bxy + by", answer: "y(a+b)(x+1)"},
            {problem: "axy - ay + bxy - by", answer: "y(a+b)(x-1)"},
            {problem: "axy + ay - bxy - by", answer: "y(a-b)(x+1)"},
            {problem: "axy - ay - bxy + by", answer: "y(a-b)(x-1)"},
            {problem: "2axy + 3ay + 2bxy + 3by", answer: "y(a+b)(2x+3)"},
            
            // Advanced parameter manipulation
            {problem: "x^2 + (a+2)x + 2x + 2a", answer: "x^2+ax+4x+2a"},
            {problem: "x^2 + (b+3)x + 3x + 3b", answer: "x^2+bx+6x+3b"},
            {problem: "x^2 - (c+4)x + 4x - 4c", answer: "x^2-cx-4c"},
            {problem: "x^2 - (d+5)x - 5x + 5d", answer: "x^2-dx-10x+5d"},
            {problem: "2x^2 + (2a+1)x + ax + \\frac{a}{2}", answer: "2x^2+3ax+x+\\frac{a}{2}"},
            {problem: "3x^2 - (3b+2)x + 2x - \\frac{2b}{3}", answer: "3x^2-3bx-\\frac{2b}{3}"},
            
            // Very complex parameter relationships
            {problem: "x^2y + axy + bxy + ab", answer: "(xy+a)(x+b)"},
            {problem: "x^2z - axz + bxz - ab", answer: "x^2z - axz + bxz - ab"},
            {problem: "ay^2 + a^2y + by^2 + aby", answer: "y(a+b)(y+a)"},
            {problem: "bz^2 - abz + cz^2 - acz", answer: "z(b+c)(z-a)"},
            {problem: "3x(5x + 2)^2 - 2(5x + 2)", answer: "(5x + 2)(15x^2 + 6x - 2)"},
            {problem: "3x(7x - 1)^2 - 2(7x - 1)", answer: "(7x - 1)(21x^2 - 3x - 2)"},
            {problem: "25x(2x + 1)^2 + 15(2x + 1)", answer: "5(2x + 1)(10x^2 + 5x + 3)"},
            {problem: "25x(2x + 1) + 15(2x + 1)^2", answer: "5(2x + 1)(11x + 3)"},
            {problem: "50x(2x + 1) - 15(2x + 1)^2", answer: "5(2x + 1)(4x - 3)"},
            {problem: "25x(2x + 1)^3 - 15(2x + 1)^2", answer: "5(2x + 1)^2(10x^2 + 5x - 3)"},
            {problem: "5ax(2x + 1)^3 - 3a(2x + 1)^2", answer: "a(2x + 1)^2(10x^2 + 5x - 3)"},
            {problem: "5x\\sqrt{2x + 1} - 3\\sqrt{2x + 1}", answer: "(5x - 3)\\sqrt{2x + 1}"},
            {problem: "5x(2x - 1)^2 - 3x(1 - 2x)", answer: "2x(2x - 1)(5x - 1)"},
            {problem: "5x(2x + 1)(5x - 2) - 3(2x + 1)^2(5x - 2)^2", answer: "(2x + 1)(5x - 2)(-30x^2 + 2x + 6)"},
            
            // Additional generated questions for variety and complexity
            {problem: "4x(3x + 1)^2 - 3(3x + 1)", answer: "(3x + 1)(12x^2 + 4x - 3)"},
            {problem: "2x(4x - 3)^2 + 5(4x - 3)", answer: "(4x - 3)(8x^2 - 6x + 5)"},
            {problem: "18x(x + 2)^2 - 12(x + 2)", answer: "6(x + 2)(3x^2 + 6x - 2)"},
            {problem: "15x(3x - 1) + 9(3x - 1)^2", answer: "3(3x - 1)(14x - 3)"},
            {problem: "28x(x + 3) - 14(x + 3)^2", answer: "14(x + 3)(x - 3)"},
            {problem: "36x(x - 2)^3 - 24(x - 2)^2", answer: "12(x - 2)^2(3x^2 - 6x - 2)"},
            {problem: "7bx(x + 4)^3 - 5b(x + 4)^2", answer: "b(x + 4)^2(7x^2 + 28x - 5)"},
            {problem: "3x\\sqrt{3x - 2} + 7\\sqrt{3x - 2}", answer: "(3x + 7)\\sqrt{3x - 2}"},
            {problem: "8x(x + 1)^2 + 5x(1 + x)", answer: "x(x + 1)(8x + 13)"},
            {problem: "6x(3x + 2)(x - 1) - 4(3x + 2)^2(x - 1)^2", answer: "2(3x + 2)(x - 1)(-6x^2 + 5x + 4)"},
            {problem: "5x(2x + 3)^2 - 7(2x + 3)", answer: "(2x + 3)(10x^2 + 15x - 7)"},
            {problem: "6x(x - 4)^2 + 2(x - 4)", answer: "2(x - 4)(3x^2 - 12x + 1)"},
            {problem: "20x(2x + 5)^2 + 35(2x + 5)", answer: "5(2x + 5)(8x^2 + 20x + 7)"},
            {problem: "12x(4x - 1) - 18(4x - 1)^2", answer: "6(4x - 1)(-10x + 3)"},
            {problem: "45x(x + 1) + 27(x + 1)^2", answer: "9(x + 1)(8x + 3)"},
            {problem: "48x(2x - 3)^3 + 32(2x - 3)^2", answer: "16(2x - 3)^2(6x^2 - 9x + 2)"},
            {problem: "9cx(3x + 1)^3 + 6c(3x + 1)^2", answer: "3c(3x + 1)^2(9x^2 + 3x + 2)"},
            {problem: "7x\\sqrt{x + 5} - 4\\sqrt{x + 5}", answer: "(7x - 4)\\sqrt{x + 5}"},
            {problem: "10x(x - 3)^2 - 8x(3 - x)", answer: "2x(x - 3)(5x - 11)"},
            {problem: "8x(x + 2)(2x - 1) + 12(x + 2)^2(2x - 1)^2", answer: "4(x + 2)(2x - 1)(6x^2 + 11x - 6)"},
            {problem: "9x(x + 6)^2 + 4(x + 6)", answer: "(x + 6)(9x^2 + 54x + 4)"},
            {problem: "7x(3x - 5)^2 - 11(3x - 5)", answer: "(3x - 5)(21x^2 - 35x - 11)"},
            {problem: "24x(x + 7)^2 - 16(x + 7)", answer: "8(x + 7)(3x^2 + 21x - 2)"},
            {problem: "35x(2x - 7) + 21(2x - 7)^2", answer: "7(2x - 7)(11x - 21)"},
            {problem: "42x(x - 5) - 28(x - 5)^2", answer: "14(x - 5)(x + 10)"},
            {problem: "54x(x + 8)^3 - 36(x + 8)^2", answer: "18(x + 8)^2(3x^2 + 24x - 2)"},
            {problem: "11dx(2x + 3)^3 - 7d(2x + 3)^2", answer: "d(2x + 3)^2(22x^2 + 33x - 7)"},
            {problem: "6x\\sqrt{2x - 1} + 9\\sqrt{2x - 1}", answer: "(6x + 9)\\sqrt{2x - 1}"},
            {problem: "12x(2x + 1)^2 - 15x(1 + 2x)", answer: "3x(2x + 1)(8x - 1)"},
            {problem: "10x(x - 6)(3x + 2) - 15(x - 6)^2(3x + 2)^2", answer: "5(x - 6)(3x + 2)(-9x^2 + 50x + 36)"},
            {problem: "13x(4x + 7)^2 + 8(4x + 7)", answer: "(4x + 7)(52x^2 + 91x + 8)"},
            {problem: "9x(x - 8)^2 - 5(x - 8)", answer: "(x - 8)(9x^2 - 72x - 5)"},
            {problem: "30x(3x + 4)^2 + 45(3x + 4)", answer: "15(3x + 4)(6x^2 + 8x + 3)"},
            {problem: "56x(x - 9) + 28(x - 9)^2", answer: "84(x - 9)(x - 3)"},
            {problem: "9x(2x + 1) - 6(2x + 1)^2", answer: "-3(2x + 1)(x + 2)"},
            {problem: "36x(x + 10)^3 + 24(x + 10)^2", answer: "12(x + 10)^2(3x^2 + 30x + 2)"},
            {problem: "13ex(3x - 2)^3 + 9e(3x - 2)^2", answer: "e(3x - 2)^2(39x^2 - 26x + 9)"},
            {problem: "8x\\sqrt{4x + 3} - 12\\sqrt{4x + 3}", answer: "(8x - 12)\\sqrt{4x + 3}"},
            {problem: "14x(3x - 4)^2 + 21x(4 - 3x)", answer: "7x(3x - 4)(6x - 11)"},
            {problem: "16x(2x - 5)(x + 3) + 24(2x - 5)^2(x + 3)^2", answer: "8(2x - 5)(x + 3)(6x^2 + 5x - 45)"},
            {problem: "6x^2 + 38x + 40", answer: "2(x + 5)(3x + 4)"},
            {problem: "6x^2 - 15x - 36", answer: "3(x - 4)(2x + 3)"},
            {problem: "48x^2 - 18x - 3", answer: "3(2x - 1)(8x + 1)"},
            {problem: "16x^2 - 24x + 8", answer: "8(x - 1)(2x - 1)"},
            {problem: "90x^2 + 90x - 100", answer: "10(3x + 5)(3x - 2)"},
            {problem: "-50x^2 - 115x - 60", answer: "-5(2x + 3)(5x + 4)"},
            {problem: "-24x^2 + 6x + 45", answer: "-3(4x + 5)(2x - 3)"},
            {problem: "-30x^2 + 55x + 50", answer: "-5(3x + 2)(2x - 5)"},
            {problem: "-24x^2 + 26x + 8", answer: "-2(4x + 1)(3x - 4)"},
            {problem: "-32x^2 + 72x - 36", answer: "-4(4x - 3)(2x - 3)"},
            {problem: "-84x^2 + 234x - 60", answer: "-6(7x - 2)(2x - 5)"},
            {problem: "-105x^2 - 7x + 42", answer: "-7(5x - 3)(3x + 2)"},
            {problem: "60x^2 + 130x + 60", answer: "10(2x + 3)(3x + 2)"},
            {problem: "24x^2 - 88x - 32", answer: "8(3x + 1)(x - 4)"},
            {problem: "108x^2 + 9x - 54", answer: "9(4x + 3)(3x - 2)"},
            {problem: "30x^2 - 33x - 18", answer: "3(2x - 3)(5x + 2)"},
            {problem: "42x^2 - 40x + 8", answer: "2(3x - 2)(7x - 2)"},
            {problem: "75x^2 - 65x + 10", answer: "5(3x - 2)(5x - 1)"},
            {problem: "52x^2 - 28x - 24", answer: "4(13x + 6)(x - 1)"},
            {problem: "14x^2 + 35x - 84", answer: "7(x + 4)(2x - 3)"},
            {problem: "36x^2 - 78x + 36", answer: "6(2x - 3)(3x - 2)"},
            {problem: "72x^2 + 72x - 80", answer: "8(3x + 5)(3x - 2)"},
    
            // Additional generated questions - Complex factorisation with common factors
            {problem: "8x^2 + 24x + 16", answer: "8(x + 1)(x + 2)"},
            {problem: "12x^2 + 30x + 18", answer: "6(x + 1)(2x + 3)"},
            {problem: "18x^2 + 42x + 24", answer: "6(x + 1)(3x + 4)"},
            {problem: "24x^2 + 56x + 32", answer: "8(x + 1)(3x + 4)"},
            {problem: "30x^2 + 72x + 42", answer: "6(x + 1)(5x + 7)"},
    
            // Large coefficients with common factors
            {problem: "50x^2 + 85x + 35", answer: "5(2x + 1)(5x + 7)"},
            {problem: "60x^2 + 102x + 42", answer: "6(2x + 1)(5x + 7)"},
    
            // Negative common factors
            {problem: "-8x^2 - 24x - 16", answer: "-8(x + 1)(x + 2)"},
            {problem: "-12x^2 - 30x - 18", answer: "-6(x + 1)(2x + 3)"},
            {problem: "-18x^2 - 42x - 24", answer: "-6(x + 1)(3x + 4)"},
            {problem: "-24x^2 - 56x - 32", answer: "-8(x + 1)(3x + 4)"},
            {problem: "-30x^2 - 72x - 42", answer: "-6(x + 1)(5x + 7)"},
    
            // Mixed signs with common factors
            {problem: "14x^2 - 35x + 21", answer: "7(x - 1)(2x - 3)"},
            {problem: "20x^2 - 50x + 30", answer: "10(x - 1)(2x - 3)"},
            {problem: "25a^4 - 10a^2 + 1", answer: "(5a^2-1)^2"},
            {problem: "16x^4 + 24x^2 + 9", answer: "(4x^2+3)^2"},
            {problem: "36 - 12x + x^2", answer: "(x-6)^2"},
            {problem: "49x^6 - 14x^3 + 1", answer: "(7x^3-1)^2"},
            {problem: "81x^2 - 36xz + 4z^2", answer: "(9x-2z)^2"},
            {problem: "144m^6 - 72m^3 + 9", answer: "(12m^3-3)^2"},
            {problem: "t^2 + t + \\frac{1}{4}", answer: "(t+\\frac{1}{2})^2"},
            {problem: "x^2 - \\frac{4x}{3} + \\frac{4}{9}", answer: "(x-\\frac{2}{3})^2"},
            {problem: "9y^2 + \\frac{6y}{5} + \\frac{1}{25}", answer: "(3y+\\frac{1}{5})^2"},
            {problem: "x^2 + 2 + \\frac{1}{x^2}", answer: "(x+\\frac{1}{x})^2"},
            {problem: "25k^2 - 20 + \\frac{4}{k^2}", answer: "(5k-\\frac{2}{k})^2"},
            
            // Additional questions for variety
            {problem: "9t^4 + 6t^2 + 1", answer: "(3t^2+1)^2"},
            {problem: "64x^6 - 16x^3 + 1", answer: "(8x^3-1)^2"},
            {problem: "100y^8 + 20y^4 + 1", answer: "(10y^4+1)^2"},
            {problem: "121a^4 - 22a^2 + 1", answer: "(11a^2-1)^2"},
            {problem: "169b^6 + 26b^3 + 1", answer: "(13b^3+1)^2"},
            {problem: "196c^4 - 28c^2 + 1", answer: "(14c^2-1)^2"},
            {problem: "225d^8 + 30d^4 + 1", answer: "(15d^4+1)^2"},
            {problem: "256e^6 - 32e^3 + 1", answer: "(16e^3-1)^2"},
            {problem: "289f^4 + 34f^2 + 1", answer: "(17f^2+1)^2"},
            {problem: "324g^6 - 36g^3 + 1", answer: "(18g^3-1)^2"},
            {problem: "361h^4 + 38h^2 + 1", answer: "(19h^2+1)^2"},
            {problem: "400j^8 - 40j^4 + 1", answer: "(20j^4-1)^2"},
            {problem: "x^2 - \\frac{2x}{3} + \\frac{1}{9}", answer: "(x-\\frac{1}{3})^2"},
            {problem: "4y^2 + \\frac{4y}{3} + \\frac{1}{9}", answer: "(2y+\\frac{1}{3})^2"},
            {problem: "9z^2 - \\frac{12z}{5} + \\frac{4}{25}", answer: "(3z-\\frac{2}{5})^2"},
            {problem: "16a^2 + \\frac{8a}{7} + \\frac{1}{49}", answer: "(4a+\\frac{1}{7})^2"},
            {problem: "25b^2 - \\frac{10b}{3} + \\frac{1}{9}", answer: "(5b-\\frac{1}{3})^2"},
            {problem: "36c^2 + \\frac{12c}{5} + \\frac{1}{25}", answer: "(6c+\\frac{1}{5})^2"},
            {problem: "49d^2 - \\frac{14d}{9} + \\frac{1}{81}", answer: "(7d-\\frac{1}{9})^2"},
            {problem: "64e^2 + \\frac{16e}{7} + \\frac{1}{49}", answer: "(8e+\\frac{1}{7})^2"},
            {problem: "\\frac{5x^2}{9} - \\frac{5}{4}", answer: "\\frac{5}{36}(2x - 3)(2x + 3)"},
            {problem: "x^2 - \\frac{3}{4}", answer: "(x - \\frac{\\sqrt{3}}{2})(x + \\frac{\\sqrt{3}}{2})"},
            {problem: "x^2 - \\frac{7}{16}", answer: "(x - \\frac{\\sqrt{7}}{4})(x + \\frac{\\sqrt{7}}{4})"},
            {problem: "x^2 - \\frac{5}{16}", answer: "(x - \\frac{\\sqrt{5}}{4})(x + \\frac{\\sqrt{5}}{4})"},
            {problem: "\\frac{x^2}{4} - \\frac{7}{9}", answer: "(\\frac{x}{2} - \\frac{\\sqrt{7}}{3})(\\frac{x}{2} + \\frac{\\sqrt{7}}{3})"},
            {problem: "\\frac{9x^2}{16} - \\frac{5}{4}", answer: "(\\frac{3x}{4} - \\frac{\\sqrt{5}}{2})(\\frac{3x}{4} + \\frac{\\sqrt{5}}{2})"},
            
            // Irrational coefficients
            {problem: "x^2 - 7", answer: "(x-\\sqrt{7})(x+\\sqrt{7})"},
            {problem: "x^2 - 5", answer: "(x-\\sqrt{5})(x+\\sqrt{5})"},
            {problem: "x^2 - 19", answer: "(x-\\sqrt{19})(x+\\sqrt{19})"},
            {problem: "x^2 - 11", answer: "(x-\\sqrt{11})(x+\\sqrt{11})"},
            {problem: "x^2 - 13", answer: "(x-\\sqrt{13})(x+\\sqrt{13})"},
            {problem: "x^2 - 8", answer: "(x-2\\sqrt{2})(x+2\\sqrt{2})"},
            {problem: "x^2 - 18", answer: "(x-3\\sqrt{2})(x+3\\sqrt{2})"},
            {problem: "x^2 - 32", answer: "(x-4\\sqrt{2})(x+4\\sqrt{2})"},
            {problem: "x^2 - 50", answer: "(x-5\\sqrt{2})(x+5\\sqrt{2})"},
            
            // Complex coefficient expressions
            {problem: "3x^2 - 75", answer: "3(x - 5)(x + 5)"},
            {problem: "7x^2 - 63", answer: "7(x - 3)(x + 3)"},
            
            // Complex binomial expressions
            {problem: "6(x-2)^2 - 54", answer: "6(x-5)(x+1)"},
            {problem: "2(x+1)^2 - 32", answer: "2(x-3)(x+5)"},
            
            // Negative leading terms
            {problem: "-20 + 5x^2", answer: "5(x - 2)(x + 2)"},
            
            // Difference of binomial squares
            {problem: "(x+2)^2 - (x+3)^2", answer: "-(2x+5)"},
            {problem: "(y-7)^2 - (y+4)^2", answer: "-11(2y-3)"},
            {problem: "(b+5)^2 - (b-5)^2", answer: "20b"},
            {problem: "(a+3)^2 - (a-5)^2", answer: "16(a-1)"},
            {problem: "(2w+3x)^2 - (3w+4x)^2", answer: "-(w+x)(5w+7x)"},
            {problem: "(3a+2b)^2 - (2a+3b)^2", answer: "5(a-b)(a+b)"},
            {problem: "(4x-y)^2 - (2x+3y)^2", answer: "4(x-2y)(3x+y)"},
            {problem: "(5m+n)^2 - (3m-2n)^2", answer: "(2m+3n)(8m-n)"},
            
            // Fourth power differences
            {problem: "1 - w^4", answer: "(1-w)(1+w)(1+w^2)"},
            {problem: "a^4 - 1", answer: "(a-1)(a+1)(a^2+1)"},
            {problem: "b^4 - 16", answer: "(b-2)(b+2)(b^2+4)"},
            {problem: "81 - x^4", answer: "(3-x)(3+x)(9+x^2)"},
            {problem: "16m^4 - 81n^4", answer: "(2m-3n)(2m+3n)(4m^2+9n^2)"},
            {problem: "y^8 - 256", answer: "(y-2)(y+2)(y^2+4)(y^4+16)"},
            {problem: "c^{16} - 1", answer: "(c-1)(c+1)(c^2+1)(c^4+1)(c^8+1)"},
            {problem: "x^4 - 81", answer: "(x-3)(x+3)(x^2+9)"},
            {problem: "625 - a^4", answer: "(5-a)(5+a)(25+a^2)"},
            
            // Mixed factorisation with fourth powers
            {problem: "2x^4 - 32", answer: "2(x-2)(x+2)(x^2+4)"},
            {problem: "ap^4 - 81a", answer: "a(p-3)(p+3)(p^2+9)"},
            {problem: "x^5 - x", answer: "x(x-1)(x+1)(x^2+1)"},
            {problem: "3k^8 - 3", answer: "3(k-1)(k+1)(k^2+1)(k^4+1)"},
            {problem: "\\frac{y^4}{81} - 1", answer: "(\\frac{y}{3}-1)(\\frac{y}{3}+1)(\\frac{y^2}{9}+1)"},
            {problem: "5m^9 - 5m", answer: "5m(m-1)(m+1)(m^2+1)(m^4+1)"},
            {problem: "4a^4 - 64", answer: "4(a-2)(a+2)(a^2+4)"},
            {problem: "3x^4 - 243", answer: "3(x-3)(x+3)(x^2+9)"},
            
            // Complex fractional fourth powers
            {problem: "\\frac{x^4}{3} - \\frac{y^4}{3}", answer: "\\frac{1}{3}(x-y)(x+y)(x^2+y^2)"},
            {problem: "2a^4 - 32b^4", answer: "2(a-2b)(a+2b)(a^2+4b^2)"},
            {problem: "\\frac{3a^8}{16} - \\frac{3b^4}{625}", answer: "3(\\frac{a^2}{2} - \\frac{b}{5})(\\frac{a^2}{2} + \\frac{b}{5})(\\frac{a^4}{4} + \\frac{b^2}{25})"},
        ];
    }

    generateQuestion() {
        // Reset if all questions used
        if (this.usedQuestionIndices.size >= this.questions.length) {
            this.usedQuestionIndices.clear();
        }
        
        // Select random unused question
        let questionIndex;
        do {
            questionIndex = Math.floor(Math.random() * this.questions.length);
        } while (this.usedQuestionIndices.has(questionIndex));
        
        this.usedQuestionIndices.add(questionIndex);
        return this.questions[questionIndex];
    }

    getQuestions() {
        return this.questions;
    }
}

// Registration
window.AlgebraLevels = window.AlgebraLevels || {};
window.AlgebraLevels.mixedFactorisationHard = new MixedFactorisationHard();