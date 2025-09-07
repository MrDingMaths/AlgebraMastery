# AlgebraDrills Math Formatting Style Guide

This document defines the conventions for formatting mathematical expressions in the AlgebraDrills application.

## Overview

The app uses **LaTeX/KaTeX syntax** for mathematical notation. All math expressions in the `problem` and `answer` fields of level questions should follow these formatting rules for consistency and proper rendering.

## Basic Formatting Rules

### Variables and Constants
- Use single letters for variables: `x`, `y`, `a`, `b`, `m`, `n`
- No special formatting needed for basic variables
- Constants are written as numbers: `2`, `5`, `12`

### Operations

#### Addition and Subtraction
```javascript
// Correct
{problem: "2x + 3y", answer: "2x + 3y"}
{problem: "5a - 2b", answer: "5a - 2b"}

// Spaces around operators are optional but recommended for readability
```

#### Multiplication
```javascript
// Coefficient × Variable (no multiplication symbol)
{problem: "3x", answer: "3x"}
{problem: "5ab", answer: "5ab"}

// Variable × Variable (no multiplication symbol)
{problem: "xy", answer: "xy"}
{problem: "2mn", answer: "2mn"}

// Use \\times for Index Laws (same base multiplication)
{problem: "x^4 \\times x^3", answer: "x^7"}
{problem: "3a \\times 4a", answer: "12a^2"}
{problem: "2x^3 \\times 5x^2", answer: "10x^5"}

// Use \\times for complex multi-term multiplication in Index Laws
{problem: "2a^2 \\times 3a^3 \\times 4a^4", answer: "24a^9"}
{problem: "xy^2 \\times 3x^3y \\times 4xy^3", answer: "12x^5y^6"}
```

#### Division
```javascript
// Use \frac{numerator}{denominator} for fractions
{problem: "\\frac{4x}{2}", answer: "2x"}
{problem: "\\frac{6a^2}{3a}", answer: "2a"}

// Use \div for division operator (less common)
{problem: "8x \\div 4", answer: "2x"}
```

### Powers and Exponents

#### Basic Powers
```javascript
// Use ^ for exponents
{problem: "x^2", answer: "x^2"}
{problem: "2a^3", answer: "2a^3"}

// For powers greater than 9, use braces
{problem: "x^{10}", answer: "x^{10}"}
{problem: "y^{12}", answer: "y^{12}"}
```

#### Multiple Variables with Powers
```javascript
{problem: "x^2y^3", answer: "x^2y^3"}
{problem: "a^5b^4c^3", answer: "a^5b^4c^3"}
```

### Fractions

#### Simple Fractions
```javascript
// Always use \frac{numerator}{denominator}
{problem: "\\frac{2}{3}x", answer: "\\frac{2}{3}x"}
{problem: "\\frac{4x^2}{3y}", answer: "\\frac{4x^2}{3y}"}
```

#### Complex Fractions
```javascript
// Multi-variable expressions
{problem: "\\frac{16x^8y^6}{12x^2y^3}", answer: "\\frac{4}{3}x^6y^3"}
{problem: "\\frac{-21p}{-3p}", answer: "7"}
```

### Negative Signs

#### Negative Coefficients
```javascript
// Place negative sign directly before coefficient
{problem: "-3x + 2y", answer: "-3x + 2y"}
{problem: "\\frac{-4a^2}{8ab}", answer: "-\\frac{a}{2b}"}
```

#### Negative Fractions
```javascript
// Place negative sign before the fraction
{problem: "-\\frac{2y}{3}", answer: "-\\frac{2y}{3}"}
{problem: "-\\frac{x^4}{9}", answer: "-\\frac{x^4}{9}"}
```

## Level-Specific Conventions

### Like Terms Problems
```javascript
// Simple addition/subtraction
{problem: "2x + 3x", answer: "5x"}
{problem: "7a - 4a", answer: "3a"}

// Mixed with constants
{problem: "3x + 5 + 2x", answer: "5x + 5"}
{problem: "4y - 2 + y", answer: "5y - 2"}
```

### Expansion Problems
```javascript
// Basic expansion
{problem: "3(x + 2)", answer: "3x + 6"}
{problem: "-2(a - 4)", answer: "-2a + 8"}

// Variable multiplication
{problem: "x(2y + 3)", answer: "2xy + 3x"}
{problem: "2a(3b - 4)", answer: "6ab - 8a"}
```

### Index Laws/Powers
```javascript
// Division of powers
{problem: "\\frac{x^8}{x^3}", answer: "x^5"}
{problem: "\\frac{12a^5b^3}{4a^2b}", answer: "3a^3b^2"}

// Negative powers (when applicable)
{problem: "x^{-2}", answer: "\\frac{1}{x^2}"}
```

## When to Use \\times

### Use \\times for Index Laws Problems
- When multiplying powers with the same base: `x^4 \\times x^3`
- When multiplying coefficients with variables: `3a \\times 4a`
- For complex multi-variable multiplication: `2xy^2 \\times 3x^3y`

### Don't Use \\times for Basic Algebra
- Coefficient times variable: `3x` (not `3 \\times x`)
- Variable times variable: `xy` (not `x \\times y`)
- Expansion problems: `2(x + 3)` (not `2 \\times (x + 3)`)

## Common Patterns to Follow

### Coefficient Order
- Always place numerical coefficients before variables: `5x`, not `x5`
- For fractions, write as: `\\frac{2}{3}x`, not `x\\frac{2}{3}`

### Variable Order
- Use alphabetical order for variables: `abc`, not `bca`
- Maintain consistent variable order throughout related problems

### Zero Results
```javascript
// When terms cancel out
{problem: "2a - 2a", answer: "0"}
{problem: "-x + x", answer: "0"}
```

### Unity Coefficients
```javascript
// Don't write coefficient of 1
{problem: "x + 2x", answer: "3x"}  // Not "3x^1"
{problem: "\\frac{5z}{5}", answer: "z"}  // Not "1z"
```

## Validation Notes

The app uses MathQuill for input and KaTeX for display. Ensure all LaTeX expressions are:
- Properly escaped with double backslashes in JavaScript strings: `"\\frac{1}{2}"`
- Valid LaTeX syntax that KaTeX can render
- Consistent with the algebraic engine's expected format for answer validation

## Example Question Structure

```javascript
{
    // Problem shown to student (LaTeX format)
    problem: "\\frac{6x^4y^2}{3x^2y}", 
    
    // Expected answer (LaTeX format, simplified form)
    answer: "2x^2y"
}
```

## Testing Your Math Formatting

1. Ensure LaTeX renders correctly in KaTeX
2. Verify MathQuill can parse the expression for input
3. Test that the algebraic engine correctly validates equivalent forms
4. Check that expressions follow the established patterns in existing levels

Follow these conventions to maintain consistency across all algebra levels and ensure proper rendering and validation throughout the application.