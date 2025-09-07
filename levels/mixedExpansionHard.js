class MixedExpansionHard {
    constructor() {
        this.key = 'mixedExpansionHard';
        this.name = 'Mixed Expansion (Hard)';
        this.usedQuestionIndices = new Set();
        
        // Predefined questions covering advanced mixed expansion techniques
        this.questions = [
            
            // Complex multi-variable high-order expansions
            {problem: "2x(3 - x)(x^2 + 2)", answer: "-2x^4 + 6x^3 - 4x^2 + 12x"},
            {problem: "3x^2(3x^2 - 5)(4 - x^2)", answer: "-9x^6 + 51x^4 - 60x^2"},
            {problem: "2y^3(5y^2 + 3y^4) - 4y^2(2y^2 - y^4)", answer: "6y^7 + 4y^6 + 10y^5 - 8y^4"},
            
            // Complex coefficient operations
            {problem: "2(3x - 4)^2 - (3x - 4)(3x + 4)", answer: "9x^2 - 48x + 48"},
            {problem: "(x + y)^2 - (x - y)^2 + (x + y)(x - y)", answer: "x^2 + 4xy - y^2"},
            {problem: "(x^2 + y^2)^2 - 4x^2y^2", answer: "x^4 - 2x^2y^2 + y^4"},
            {problem: "-2x(x^2 + 2)^2", answer: "-2x^5 - 8x^3 - 8x"},
            
            // Special algebraic identities
            {problem: "(a + b)(a^2 - ab + b^2)", answer: "a^3 + b^3"},
            {problem: "(a - b)(a^2 + ab + b^2)", answer: "a^3 - b^3"},
            {problem: "(x + y - 2)(x - y + 2)", answer: "x^2 - y^2 + 4y - 4"},
            {problem: "((x + 3)(x - 3))^2", answer: "x^4 - 18x^2 + 81"},
            
            // Fractional expressions
            {problem: "(x + \\frac{1}{x})^2", answer: "x^2 + 2 + \\frac{1}{x^2}"},
            {problem: "(x + \\frac{2}{x})^2", answer: "x^2 + 4 + \\frac{4}{x^2}"},
            {problem: "(a - \\frac{2}{a})(a + \\frac{2}{a})", answer: "a^2 - \\frac{4}{a^2}"},
            {problem: "(x + \\frac{1}{\\sqrt{x}})^2", answer: "x^2 + 2\\sqrt{x} + \\frac{1}{x}"},
            {problem: "((\\frac{x}{3} - 5)(\\frac{x}{3} + 5))^2", answer: "\\frac{x^4}{81} - \\frac{50x^2}{9} + 625"},
            
            // Additional complex expansions
            {problem: "3x^2(2x - 1)^2 + 4x(x + 2)^2", answer: "12x^4 - 8x^3 + 19x^2 + 16x"},
            {problem: "-2a^3(a^2 - 3a + 1) + a^2(4a^2 + a - 2)", answer: "-2a^5 + 10a^4 - a^3 - 2a^2"},
            {problem: "4y(y - 1)(y + 3) - 2y^2(y - 2)", answer: "2y^3 + 12y^2 - 12y"},
            {problem: "5z^2(z^2 + 2z - 1) - 3z(z^3 - z + 4)", answer: "2z^4 + 10z^3 - 2z^2 - 12z"},
            
            // Advanced rational expressions
            {problem: "(\\frac{a}{b} + \\frac{b}{a})^2", answer: "\\frac{a^2}{b^2} + 2 + \\frac{b^2}{a^2}"},
            {problem: "(\\frac{2x}{y} - \\frac{y}{2x})^2", answer: "\\frac{4x^2}{y^2} - 2 + \\frac{y^2}{4x^2}"},
            {problem: "(\\frac{m}{n} + \\frac{n}{m})(\\frac{m}{n} - \\frac{n}{m})", answer: "\\frac{m^2}{n^2} - \\frac{n^2}{m^2}"},
            // Subtraction of complex double bracket expressions
            {problem: "(2a+3)(a-5) - (a+6)(2a+5)", answer: "-24a - 45"},
            {problem: "(4b+8)(b+5) - (3b-5)(b-7)", answer: "b^2 + 54b + 5"},
            
            // Constants subtracted from perfect squares
            {problem: "3 - (2x-9)(2x-9)", answer: "-4x^2 + 36x - 78"},
            {problem: "14 - (5x+3)(5x+3)", answer: "-25x^2 - 30x + 5"},
            
            // Triple products (variable × double brackets)
            {problem: "-3a(a+2)(a-7)", answer: "-3a^3 + 15a^2 + 42a"},
            {problem: "-5a(a+2)(a-8)", answer: "-5a^3 + 30a^2 + 80a"},
            
            // General algebraic expressions
            {problem: "(ax-b)(cx-d)", answer: "acx^2 - adx - bcx + bd"},
            {problem: "(ax+b)(cx+d)", answer: "acx^2 + adx + bcx + bd"},
            {problem: "(a+b)(a+c)", answer: "a^2 + ab + ac + bc"},
            {problem: "(a-b)(a+c)", answer: "a^2 - ab + ac - bc"},
            
            // Multi-variable expressions
            {problem: "(y-x)(z-y)", answer: "xy - xz - y^2 + yz"},
            {problem: "(2x+y)(x-2y)", answer: "2x^2 - 3xy - 2y^2"},
            {problem: "(2a+b)(a-b)", answer: "2a^2 - ab - b^2"},
            {problem: "(3x-y)(2x+y)", answer: "6x^2 + xy - y^2"},
            {problem: "(2a-b)(3a+2)", answer: "6a^2 - 3ab + 4a - 2b"},
            {problem: "(4x-3y)(3x-4y)", answer: "12x^2 - 25xy + 12y^2"},
            {problem: "(xy-yz)(z+3x)", answer: "3x^2y - 2xyz - yz^2"},
            
            // Additional complex algebraic patterns
            {problem: "(3a+2b)(2a-3b)", answer: "6a^2 - 5ab - 6b^2"},
            {problem: "(4x-5y)(2x+3y)", answer: "8x^2 + 2xy - 15y^2"},
            {problem: "(5m+3n)(m-4n)", answer: "5m^2 - 17mn - 12n^2"},
            {problem: "(2p-7q)(3p+2q)", answer: "6p^2 - 17pq - 14q^2"},
            {problem: "(6r+s)(r-2s)", answer: "6r^2 - 11rs - 2s^2"},
            {problem: "(3u-4v)(5u+v)", answer: "15u^2 - 17uv - 4v^2"},
            
            // Cubic expansion patterns
            {problem: "x(x+1)(x-2)", answer: "x^3 - x^2 - 2x"},
            {problem: "2y(y-3)(y+4)", answer: "2y^3 + 2y^2 - 24y"},
            {problem: "-x(x-5)(x+1)", answer: "-x^3 + 4x^2 + 5x"},
            {problem: "3z(z+2)(z-6)", answer: "3z^3 - 12z^2 - 36z"},
            
            // Mixed variable coefficients  
            {problem: "(ab+c)(ab-c)", answer: "a^2b^2 - c^2"},
            {problem: "(2xy+3)(xy-5)", answer: "2x^2y^2 - 7xy - 15"},
            {problem: "(3pq-2r)(pq+4r)", answer: "3p^2q^2 + 10pqr - 8r^2"},
            
            // Complex rational expressions
            {problem: "(3x-2y)(4x+5y) - (2x+y)(x-3y)", answer: "10x^2 + 12xy - 7y^2"},
            {problem: "(5a+3b)(2a-b) - (a+4b)(3a-2b)", answer: "7a^2 - 9ab + 5b^2"},
            {problem: "(4p-q)(p+2q) - (2p-3q)(p+q)", answer: "2p^2 + 8pq + q^2"},
            
            // Very challenging patterns
            {problem: "x(x+y)(x-y) + y(x+y)(x-y)", answer: "x^3 + x^2y - xy^2 - y^3"},
            {problem: "(x^2+1)(x^2-1)", answer: "x^4 - 1"},

            // Fractions with variables
            {problem: "(x + \\frac{1}{3})^2", answer: "x^2 + \\frac{2}{3}x + \\frac{1}{9}"},
            {problem: "(x - \\frac{2}{5})^2", answer: "x^2 - \\frac{4}{5}x + \\frac{4}{25}"},
            {problem: "(3x + \\frac{5}{7})^2", answer: "9x^2 + \\frac{30}{7}x + \\frac{25}{49}"},
            {problem: "(3x + \\frac{2}{5})^2", answer: "9x^2 + \\frac{12}{5}x + \\frac{4}{25}"},
            {problem: "(\\frac{x}{5} - \\frac{3}{8})^2", answer: "\\frac{x^2}{25} - \\frac{3x}{20} + \\frac{9}{64}"},
            {problem: "(\\frac{2x}{3} + \\frac{9y}{8})^2", answer: "\\frac{4x^2}{9} + \\frac{3xy}{2} + \\frac{81y^2}{64}"},
            
            // Reciprocal terms
            {problem: "(t + \\frac{1}{t})^2", answer: "t^2 + 2 + \\frac{1}{t^2}"},
            {problem: "(t - \\frac{1}{t})^2", answer: "t^2 - 2 + \\frac{1}{t^2}"},
            {problem: "(2 + \\frac{2}{a})^2", answer: "4 + \\frac{8}{a} + \\frac{4}{a^2}"},
            {problem: "(\\frac{6}{m} - m)^2", answer: "m^2 - 12 + \\frac{36}{m^2}"},
            {problem: "(\\frac{3}{x} + 3x)^2", answer: "9x^2 + 18 + \\frac{9}{x^2}"},
            
            // Higher powers with coefficients
            {problem: "(2x^2 + 3y^2)^2", answer: "4x^4 + 12x^2y^2 + 9y^4"},
            {problem: "(5a^3 - 2b^4)^2", answer: "25a^6 - 20a^3b^4 + 4b^8"},
            {problem: "(m^5 + 4n^2)^2", answer: "m^{10} + 8m^5n^2 + 16n^4"},
            {problem: "(3x^4 - 5y^3)^2", answer: "9x^8 - 30x^4y^3 + 25y^6"},
            
            // Fractions with powers
            {problem: "(x^2 + \\frac{1}{2})^2", answer: "x^4 + x^2 + \\frac{1}{4}"},
            {problem: "(y^3 - \\frac{1}{3})^2", answer: "y^6 - \\frac{2}{3}y^3 + \\frac{1}{9}"},
            {problem: "(\\frac{a^3}{2} - \\frac{b^2}{3})^2", answer: "\\frac{a^6}{4} - \\frac{a^3b^2}{3} + \\frac{b^4}{9}"},
            {problem: "(2p^3 + \\frac{1}{p})^2", answer: "4p^6 + 4p^2 + \\frac{1}{p^2}"},
            
            // Additional complex fraction examples
            {problem: "(x + \\frac{1}{2})^2", answer: "x^2 + x + \\frac{1}{4}"},
            {problem: "(x - \\frac{3}{4})^2", answer: "x^2 - \\frac{3}{2}x + \\frac{9}{16}"},
            {problem: "(2x + \\frac{1}{4})^2", answer: "4x^2 + x + \\frac{1}{16}"},
            {problem: "(\\frac{x}{2} + \\frac{1}{3})^2", answer: "\\frac{x^2}{4} + \\frac{x}{3} + \\frac{1}{9}"},
            {problem: "(\\frac{x}{3} - \\frac{2}{5})^2", answer: "\\frac{x^2}{9} - \\frac{4x}{15} + \\frac{4}{25}"},
            
            // More reciprocal variations
            {problem: "(\\frac{2}{x} + x)^2", answer: "x^2 + 4 + \\frac{4}{x^2}"},
            {problem: "(\\frac{1}{x} - 2x)^2", answer: "4x^2 - 4 + \\frac{1}{x^2}"},
            {problem: "(3 + \\frac{1}{3x})^2", answer: "9 + \\frac{2}{x} + \\frac{1}{9x^2}"},
            {problem: "(\\frac{5}{2x} - \\frac{x}{2})^2", answer: "\\frac{x^2}{4} - \\frac{5}{2} + \\frac{25}{4x^2}"},
            
            // Complex power combinations
            {problem: "(x^3 + 2y^2)^2", answer: "x^6 + 4x^3y^2 + 4y^4"},
            {problem: "(3a^2 - b^3)^2", answer: "9a^4 - 6a^2b^3 + b^6"},
            {problem: "(2m^4 + 3n^3)^2", answer: "4m^8 + 12m^4n^3 + 9n^6"},
            {problem: "(4p^5 - q^2)^2", answer: "16p^{10} - 8p^5q^2 + q^4"},
            
            // Mixed fraction and power terms
            {problem: "(\\frac{x^2}{3} + \\frac{2}{x})^2", answer: "\\frac{x^4}{9} + \\frac{4x}{3} + \\frac{4}{x^2}"},
            {problem: "(\\frac{3}{y^2} - y^3)^2", answer: "y^6 - 6y + \\frac{9}{y^4}"},
            {problem: "(2x^2 + \\frac{1}{3x})^2", answer: "4x^4 + \\frac{4x}{3} + \\frac{1}{9x^2}"},
            
            // Complex coefficient fractions
            {problem: "(\\frac{3x}{4} + \\frac{5y}{6})^2", answer: "\\frac{9x^2}{16} + \\frac{5xy}{4} + \\frac{25y^2}{36}"},
            {problem: "(\\frac{2a}{5} - \\frac{3b}{7})^2", answer: "\\frac{4a^2}{25} - \\frac{12ab}{35} + \\frac{9b^2}{49}"},
            {problem: "(\\frac{4m}{3} + \\frac{n}{2})^2", answer: "\\frac{16m^2}{9} + \\frac{4mn}{3} + \\frac{n^2}{4}"},
            
            // Very advanced combinations
            {problem: "(\\sqrt{2}x + \\frac{1}{\\sqrt{2}})^2", answer: "2x^2 + 2x + \\frac{1}{2}"},
            {problem: "(\\frac{x^4}{4} + \\frac{2}{x^2})^2", answer: "\\frac{x^8}{16} + x^2 + \\frac{4}{x^4}"},
            {problem: "(3x^{\\frac{1}{2}} + \\frac{1}{x^{\\frac{1}{2}}})^2", answer: "9x + 6 + \\frac{1}{x}"},
            
            // Additional challenging examples
            {problem: "(\\frac{2x}{7} + \\frac{3}{14})^2", answer: "\\frac{4x^2}{49} + \\frac{6x}{49} + \\frac{9}{196}"},
            {problem: "(\\frac{5y}{8} - \\frac{1}{4y})^2", answer: "\\frac{25y^2}{64} - \\frac{5}{16} + \\frac{1}{16y^2}"},
            {problem: "(\\frac{a^5}{6} + \\frac{3b^3}{4})^2", answer: "\\frac{a^{10}}{36} + \\frac{a^5b^3}{4} + \\frac{9b^6}{16}"},
            
            // Final complex variations
            {problem: "(\\frac{7}{3x^2} + \\frac{x^3}{5})^2", answer: "\\frac{x^6}{25} + \\frac{14x}{15} + \\frac{49}{9x^4}"},
            {problem: "(\\frac{4m^2}{9} - \\frac{2}{3m})^2", answer: "\\frac{16m^4}{81} - \\frac{16m}{27} + \\frac{4}{9m^2}"},

            {problem: "(x+\\frac{1}{3})(x-\\frac{1}{3})", answer: "x^2-\\frac{1}{9}"},
            {problem: "(x+\\frac{3}{4})(x-\\frac{3}{4})", answer: "x^2-\\frac{9}{16}"},
            {problem: "(\\frac{x}{3}+\\frac{4}{5})(\\frac{x}{3}-\\frac{4}{5})", answer: "\\frac{x^2}{9}-\\frac{16}{25}"},
            {problem: "(\\frac{x}{2}+\\frac{y}{7})(\\frac{x}{2}-\\frac{y}{7})", answer: "\\frac{x^2}{4}-\\frac{y^2}{49}"},
            {problem: "(2x-\\frac{3}{7})(2x+\\frac{3}{7})", answer: "4x^2-\\frac{9}{49}"},
            {problem: "(\\frac{7}{3}-5x)(\\frac{7}{3}+5x)", answer: "\\frac{49}{9}-25x^2"},
            
            // Reciprocal terms
            {problem: "(t+\\frac{1}{t})(t-\\frac{1}{t})", answer: "t^2-\\frac{1}{t^2}"},
            {problem: "(\\frac{4}{m}-m)(\\frac{4}{m}+m)", answer: "\\frac{16}{m^2}-m^2"},
            {problem: "(3g+\\frac{1}{g})(3g-\\frac{1}{g})", answer: "9g^2-\\frac{1}{g^2}"},
            {problem: "(\\frac{4a}{3}+2)(\\frac{4a}{3}-2)", answer: "\\frac{16a^2}{9}-4"},
            {problem: "(xy-\\frac{1}{y})(xy+\\frac{1}{y})", answer: "x^2y^2-\\frac{1}{y^2}"},
            
            // Complex expressions with parentheses
            {problem: "[x+(y-2)][x-(y-2)]", answer: "x^2-(y-2)^2"},
            
            // Additional fraction patterns
            {problem: "(x+\\frac{2}{5})(x-\\frac{2}{5})", answer: "x^2-\\frac{4}{25}"},
            {problem: "(x+\\frac{5}{6})(x-\\frac{5}{6})", answer: "x^2-\\frac{25}{36}"},
            {problem: "(x-\\frac{7}{8})(x+\\frac{7}{8})", answer: "x^2-\\frac{49}{64}"},
            {problem: "(\\frac{2}{3}+x)(\\frac{2}{3}-x)", answer: "\\frac{4}{9}-x^2"},
            {problem: "(\\frac{5}{4}-x)(\\frac{5}{4}+x)", answer: "\\frac{25}{16}-x^2"},
            {problem: "(\\frac{9}{7}+x)(\\frac{9}{7}-x)", answer: "\\frac{81}{49}-x^2"},
            
            // Fractions with coefficients
            {problem: "(3x+\\frac{1}{2})(3x-\\frac{1}{2})", answer: "9x^2-\\frac{1}{4}"},
            {problem: "(4x-\\frac{2}{3})(4x+\\frac{2}{3})", answer: "16x^2-\\frac{4}{9}"},
            {problem: "(5x+\\frac{3}{8})(5x-\\frac{3}{8})", answer: "25x^2-\\frac{9}{64}"},
            {problem: "(2x-\\frac{5}{9})(2x+\\frac{5}{9})", answer: "4x^2-\\frac{25}{81}"},
            {problem: "(6x+\\frac{1}{7})(6x-\\frac{1}{7})", answer: "36x^2-\\frac{1}{49}"},
            
            // Two-variable fractions
            {problem: "(\\frac{x}{2}+\\frac{y}{3})(\\frac{x}{2}-\\frac{y}{3})", answer: "\\frac{x^2}{4}-\\frac{y^2}{9}"},
            {problem: "(\\frac{a}{5}+\\frac{b}{4})(\\frac{a}{5}-\\frac{b}{4})", answer: "\\frac{a^2}{25}-\\frac{b^2}{16}"},
            {problem: "(\\frac{p}{7}-\\frac{q}{6})(\\frac{p}{7}+\\frac{q}{6})", answer: "\\frac{p^2}{49}-\\frac{q^2}{36}"},
            {problem: "(\\frac{2x}{3}+\\frac{3y}{4})(\\frac{2x}{3}-\\frac{3y}{4})", answer: "\\frac{4x^2}{9}-\\frac{9y^2}{16}"},
            {problem: "(\\frac{3a}{8}-\\frac{2b}{5})(\\frac{3a}{8}+\\frac{2b}{5})", answer: "\\frac{9a^2}{64}-\\frac{4b^2}{25}"},
            
            // Complex reciprocal patterns
            {problem: "(\\frac{2}{x}+x)(\\frac{2}{x}-x)", answer: "\\frac{4}{x^2}-x^2"},
            {problem: "(\\frac{3}{y}-y)(\\frac{3}{y}+y)", answer: "\\frac{9}{y^2}-y^2"},
            {problem: "(\\frac{5}{z}+2z)(\\frac{5}{z}-2z)", answer: "\\frac{25}{z^2}-4z^2"},
            {problem: "(\\frac{1}{2a}+3a)(\\frac{1}{2a}-3a)", answer: "\\frac{1}{4a^2}-9a^2"},
            {problem: "(\\frac{4}{3b}-2b)(\\frac{4}{3b}+2b)", answer: "\\frac{16}{9b^2}-4b^2"},
            
            // Mixed complex fractions
            {problem: "(2x+\\frac{y}{3})(2x-\\frac{y}{3})", answer: "4x^2-\\frac{y^2}{9}"},
            {problem: "(\\frac{x}{4}+3y)(\\frac{x}{4}-3y)", answer: "\\frac{x^2}{16}-9y^2"},
            {problem: "(5a-\\frac{b}{2})(5a+\\frac{b}{2})", answer: "25a^2-\\frac{b^2}{4}"},
            {problem: "(\\frac{p}{6}+4q)(\\frac{p}{6}-4q)", answer: "\\frac{p^2}{36}-16q^2"},
            {problem: "(3r-\\frac{s}{5})(3r+\\frac{s}{5})", answer: "9r^2-\\frac{s^2}{25}"},
            
            // Advanced reciprocal with variables
            {problem: "(ab+\\frac{1}{ab})(ab-\\frac{1}{ab})", answer: "a^2b^2-\\frac{1}{a^2b^2}"},
            {problem: "(\\frac{xy}{2}-\\frac{2}{xy})(\\frac{xy}{2}+\\frac{2}{xy})", answer: "\\frac{x^2y^2}{4}-\\frac{4}{x^2y^2}"},
            {problem: "(\\frac{3}{pq}+pq)(\\frac{3}{pq}-pq)", answer: "\\frac{9}{p^2q^2}-p^2q^2"},
            
            // Nested fraction expressions
            {problem: "(\\frac{x+1}{2}+\\frac{x-1}{3})(\\frac{x+1}{2}-\\frac{x-1}{3})", answer: "\\frac{(x+1)^2}{4}-\\frac{(x-1)^2}{9}"},
            {problem: "(\\frac{2a+3}{4}+\\frac{a-2}{5})(\\frac{2a+3}{4}-\\frac{a-2}{5})", answer: "\\frac{(2a+3)^2}{16}-\\frac{(a-2)^2}{25}"}
        ];
    }

    generateQuestion() {
        // Reset if we've used all questions in this session
        if (this.usedQuestionIndices.size >= this.questions.length) {
            this.usedQuestionIndices.clear();
        }
        
        // Pick a random unused question
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

// Register the level
window.AlgebraLevels = window.AlgebraLevels || {};
window.AlgebraLevels.mixedExpansionHard = new MixedExpansionHard();