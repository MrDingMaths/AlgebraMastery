/**
 * Navigation Buttons Module
 * Creates small navigation buttons at the top-left of the page
 * with links to Maths Mastery Challenge and Algebra Mastery Challenge
 */

class NavigationButtons {
    constructor() {
        this.init();
    }

    init() {
        // Create the container for navigation buttons
        const navContainer = document.createElement('div');
        navContainer.className = 'nav-buttons-container';
        navContainer.id = 'nav-buttons';

        // Create Maths Mastery button
        const mathsButton = document.createElement('a');
        mathsButton.href = 'https://mrdingmaths.github.io/MathsFacts/';
        mathsButton.className = 'nav-button nav-button-green';
        mathsButton.title = 'Maths Mastery Challenge';
        mathsButton.innerHTML = `<span class="nav-button-emoji">±</span>`;

        // Create Algebra Mastery button
        const algebraButton = document.createElement('a');
        algebraButton.href = 'https://mrdingmaths.github.io/AlgebraMastery/';
        algebraButton.className = 'nav-button nav-button-blue';
        algebraButton.title = 'Algebra Mastery Challenge';
        algebraButton.innerHTML = `<span class="nav-button-emoji">𝑥</span>`;

        // Create Trig Facts button
        const trigButton = document.createElement('a');
        trigButton.href = 'https://mrdingmaths.github.io/TrigFacts/';
        trigButton.className = 'nav-button nav-button-red';
        trigButton.title = 'Trig Facts';
        trigButton.innerHTML = `<span class="nav-button-emoji">θ</span>`;

        // Append buttons to container
        navContainer.appendChild(mathsButton);
        navContainer.appendChild(algebraButton);
        navContainer.appendChild(trigButton);

        // Insert at the beginning of body
        document.body.insertBefore(navContainer, document.body.firstChild);
    }
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new NavigationButtons();
    });
} else {
    new NavigationButtons();
}
