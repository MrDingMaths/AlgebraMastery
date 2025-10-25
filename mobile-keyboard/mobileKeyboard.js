// mobile-keyboard/mobileKeyboard.js
class MobileKeyboard {
    constructor() {
        this.mathField = null;
        this.keyboardElement = null;
        this.currentPage = 0;
        this.isVisible = false;
        this.swipeDirection = null; // Track swipe direction: 'left' or 'right'
        this.isAnimating = false; // Prevent multiple animations at once

        // Define keyboard layouts for different pages
        this.pages = [
            // Page 1: Numbers and basic operations
            {
                name: 'Basic',
                keys: [
                    // Row 1: up down left right ( )
                    { label: '↑', cmd: 'keystroke', value: 'Up', class: 'secondary' },
                    { label: '↓', cmd: 'keystroke', value: 'Down', class: 'secondary' },
                    { label: '←', cmd: 'keystroke', value: 'Left', class: 'secondary' },
                    { label: '→', cmd: 'keystroke', value: 'Right', class: 'secondary' },
                    { label: '(', cmd: 'cmd', value: '(' },
                    { label: ')', cmd: 'cmd', value: ')' },

                    // Row 2: 7 8 9 + divide sqrt
                    { label: '7', cmd: 'write', value: '7' },
                    { label: '8', cmd: 'write', value: '8' },
                    { label: '9', cmd: 'write', value: '9' },
                    { label: '+', cmd: 'write', value: '+' },
                    { label: 'a/b', cmd: 'cmd', value: '/', symbol: '/' },
                    { label: '√', cmd: 'cmd', value: '\\sqrt' },

                    // Row 3: 4 5 6 - times nthroot
                    { label: '4', cmd: 'write', value: '4' },
                    { label: '5', cmd: 'write', value: '5' },
                    { label: '6', cmd: 'write', value: '6' },
                    { label: '−', cmd: 'write', value: '-' },
                    { label: '×', cmd: 'cmd', value: '*', symbol: '×' },
                    { label: 'ⁿ√', cmd: 'cmd', value: '\\nthroot' },

                    // Row 4: 1 2 3 square spacer backspace
                    { label: '1', cmd: 'write', value: '1' },
                    { label: '2', cmd: 'write', value: '2' },
                    { label: '3', cmd: 'write', value: '3' },
                    { label: 'x²', cmd: 'write', value: '^2' },
                    { label: '', cmd: 'none', value: '', class: 'spacer' },
                    { label: '⌫', cmd: 'keystroke', value: 'Backspace', class: 'secondary' },

                    // Row 5: 0 x y power spacer enter
                    { label: '0', cmd: 'write', value: '0' },
                    { label: '𝑥', cmd: 'write', value: 'x' },
                    { label: '𝑦', cmd: 'write', value: 'y' },
                    { label: '^', cmd: 'cmd', value: '^' },
                    { label: '', cmd: 'none', value: '', class: 'spacer' },
                    { label: '↩', cmd: 'keystroke', value: 'Enter', class: 'secondary' }
                ]
            },
            // Page 2: QWERTY Alphabet
            {
                name: 'Letters',
                keys: [
                    // Row 1: ( ) + - × ÷ x² ^ √ ⁿ√
                    { label: '(', cmd: 'cmd', value: '(' },
                    { label: ')', cmd: 'cmd', value: ')' },
                    { label: '+', cmd: 'write', value: '+' },
                    { label: '−', cmd: 'write', value: '-' },
                    { label: '×', cmd: 'cmd', value: '*', symbol: '×' },
                    { label: 'a/b', cmd: 'cmd', value: '/', symbol: '/' },
                    { label: 'x²', cmd: 'write', value: '^2' },
                    { label: '^', cmd: 'cmd', value: '^' },
                    { label: '√', cmd: 'cmd', value: '\\sqrt' },
                    { label: 'ⁿ√', cmd: 'cmd', value: '\\nthroot' },

                    // Row 2: 1 2 3 4 5 6 7 8 9 0 (10 keys)
                    { label: '1', cmd: 'write', value: '1' },
                    { label: '2', cmd: 'write', value: '2' },
                    { label: '3', cmd: 'write', value: '3' },
                    { label: '4', cmd: 'write', value: '4' },
                    { label: '5', cmd: 'write', value: '5' },
                    { label: '6', cmd: 'write', value: '6' },
                    { label: '7', cmd: 'write', value: '7' },
                    { label: '8', cmd: 'write', value: '8' },
                    { label: '9', cmd: 'write', value: '9' },
                    { label: '0', cmd: 'write', value: '0' },

                    // Row 3: q w e r t y u i o p (10 keys)
                    { label: 'q', cmd: 'write', value: 'q' },
                    { label: 'w', cmd: 'write', value: 'w' },
                    { label: 'e', cmd: 'write', value: 'e' },
                    { label: 'r', cmd: 'write', value: 'r' },
                    { label: 't', cmd: 'write', value: 't' },
                    { label: 'y', cmd: 'write', value: 'y' },
                    { label: 'u', cmd: 'write', value: 'u' },
                    { label: 'i', cmd: 'write', value: 'i' },
                    { label: 'o', cmd: 'write', value: 'o' },
                    { label: 'p', cmd: 'write', value: 'p' },

                    // Row 4: a s d f g h j k l + backspace (9 keys + spacer for alignment)
                    { label: '', cmd: 'none', value: '', class: 'spacer' },
                    { label: 'a', cmd: 'write', value: 'a' },
                    { label: 's', cmd: 'write', value: 's' },
                    { label: 'd', cmd: 'write', value: 'd' },
                    { label: 'f', cmd: 'write', value: 'f' },
                    { label: 'g', cmd: 'write', value: 'g' },
                    { label: 'h', cmd: 'write', value: 'h' },
                    { label: 'j', cmd: 'write', value: 'j' },
                    { label: 'k', cmd: 'write', value: 'k' },
                    { label: 'l', cmd: 'write', value: 'l' },

                    // Row 5: z x c v b n m + backspace (7 keys + spacers for centering)
                    { label: '', cmd: 'none', value: '', class: 'spacer' },
                    { label: 'z', cmd: 'write', value: 'z' },
                    { label: 'x', cmd: 'write', value: 'x' },
                    { label: 'c', cmd: 'write', value: 'c' },
                    { label: 'v', cmd: 'write', value: 'v' },
                    { label: 'b', cmd: 'write', value: 'b' },
                    { label: 'n', cmd: 'write', value: 'n' },
                    { label: 'm', cmd: 'write', value: 'm' },
                    { label: '⌫', cmd: 'keystroke', value: 'Backspace', class: 'secondary' },
                    { label: '↩', cmd: 'keystroke', value: 'Enter', class: 'secondary' },
                ]
            }
        ];
    }

    initialize() {
        // Only initialize on mobile devices
        if (!MobileDetection.isMobileDevice()) {
            return;
        }

        this.createKeyboardHTML();
        this.attachEventListeners();
    }

    createKeyboardHTML() {
        const keyboard = document.createElement('div');
        keyboard.className = 'mobile-math-keyboard';
        keyboard.id = 'mobile-math-keyboard';

        // Header
        const header = document.createElement('div');
        header.className = 'keyboard-header';

        const title = document.createElement('div');
        title.className = 'keyboard-title';
        title.textContent = 'Maths Keyboard';

        const closeBtn = document.createElement('button');
        closeBtn.className = 'keyboard-close';
        closeBtn.textContent = 'Done';
        closeBtn.onclick = () => this.hide();

        header.appendChild(title);
        header.appendChild(closeBtn);
        keyboard.appendChild(header);

        // Keyboard grid container
        const gridContainer = document.createElement('div');
        gridContainer.id = 'keyboard-grid-container';
        keyboard.appendChild(gridContainer);

        // Page indicators
        const pages = document.createElement('div');
        pages.className = 'keyboard-pages';
        this.pages.forEach((page, index) => {
            const dot = document.createElement('div');
            dot.className = `keyboard-page-dot ${index === 0 ? 'active' : ''}`;
            dot.dataset.page = index;
            dot.onclick = () => this.switchPage(index);
            pages.appendChild(dot);
        });
        keyboard.appendChild(pages);

        // Swipe hint
        const hint = document.createElement('div');
        hint.className = 'keyboard-swipe-hint';
        hint.textContent = 'Swipe to see more keys';
        keyboard.appendChild(hint);

        document.body.appendChild(keyboard);
        this.keyboardElement = keyboard;

        // Render first page
        this.renderPage(0);
    }

    renderPage(pageIndex, animationClass = null) {
        const gridContainer = document.getElementById('keyboard-grid-container');
        if (!gridContainer) return;

        gridContainer.innerHTML = '';

        const grid = document.createElement('div');
        grid.className = `keyboard-grid page-${pageIndex}`;

        // Add animation class if provided
        if (animationClass) {
            grid.classList.add(animationClass);
        }

        const page = this.pages[pageIndex];
        page.keys.forEach(key => {
            const btn = document.createElement('button');
            btn.className = `keyboard-btn ${key.class || ''}`;
            btn.textContent = key.label;
            btn.dataset.cmd = key.cmd;
            btn.dataset.value = key.value;

            btn.onclick = (e) => {
                e.preventDefault();
                this.handleKeyPress(key, btn);
            };

            grid.appendChild(btn);
        });

        gridContainer.appendChild(grid);
        this.currentPage = pageIndex;

        // Update page indicators
        document.querySelectorAll('.keyboard-page-dot').forEach((dot, index) => {
            dot.classList.toggle('active', index === pageIndex);
        });
    }

    switchPageWithAnimation(newPageIndex, direction = null) {
        // Prevent multiple simultaneous animations
        if (this.isAnimating) return;
        this.isAnimating = true;

        const gridContainer = document.getElementById('keyboard-grid-container');
        const currentGrid = gridContainer.querySelector('.keyboard-grid');

        if (!currentGrid) {
            this.renderPage(newPageIndex);
            this.isAnimating = false;
            return;
        }

        // Determine direction if not provided
        if (!direction) {
            direction = newPageIndex > this.currentPage ? 'left' : 'right';
        }

        // Apply exit animation to current grid
        const exitClass = direction === 'left' ? 'animate-exit-left' : 'animate-exit-right';
        currentGrid.classList.add(exitClass);

        // Wait for exit animation to complete, then render new page with entry animation
        const animationDuration = 150; // matches CSS animation duration
        setTimeout(() => {
            const enterClass = direction === 'left' ? 'animate-enter-from-right' : 'animate-enter-from-left';
            this.renderPage(newPageIndex, enterClass);
            this.isAnimating = false;
        }, animationDuration);
    }

    switchPage(pageIndex) {
        this.switchPageWithAnimation(pageIndex);
    }

    attachEventListeners() {
        // Add swipe support for switching pages
        this.touchStartX = 0;
        this.touchEndX = 0;

        this.keyboardElement.addEventListener('touchstart', (e) => {
            this.touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        this.keyboardElement.addEventListener('touchend', (e) => {
            this.touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe();
        }, { passive: true });
    }

    handleSwipe() {
        const swipeThreshold = 50;
        const diff = this.touchStartX - this.touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0 && this.currentPage < this.pages.length - 1) {
                // Swipe left - next page
                this.switchPageWithAnimation(this.currentPage + 1, 'left');
            } else if (diff < 0 && this.currentPage > 0) {
                // Swipe right - previous page
                this.switchPageWithAnimation(this.currentPage - 1, 'right');
            }
        }
    }

    handleKeyPress(key, buttonElement) {
        if (!this.mathField) return;

        // Add visual feedback
        if (buttonElement) {
            buttonElement.classList.add('pressed');
            setTimeout(() => {
                buttonElement.classList.remove('pressed');
            }, 150);
        }

        switch (key.cmd) {
            case 'write':
                this.mathField.write(key.value);
                break;
            case 'cmd':
                this.mathField.cmd(key.value);
                break;
            case 'keystroke':
                // Special handling for Enter key to submit answer
                if (key.value === 'Enter') {
                    const event = new CustomEvent('mathquill-enter');
                    document.dispatchEvent(event);
                } else {
                    this.mathField.keystroke(key.value);
                }
                break;
        }

        // Refocus the math field
        this.mathField.focus();
    }

    setMathField(mathField) {
        this.mathField = mathField;
    }

    show() {
        if (this.keyboardElement) {
            this.keyboardElement.classList.add('visible');
            this.isVisible = true;

            // Prevent body scroll when keyboard is open
            document.body.style.overflow = 'hidden';

            // Shift game card up when keyboard is active
            const gameScreen = document.getElementById('game-screen');
            if (gameScreen) {
                gameScreen.classList.add('keyboard-active');
            }
        }
    }

    hide() {
        if (this.keyboardElement) {
            this.keyboardElement.classList.remove('visible');
            this.isVisible = false;

            // Restore body scroll
            document.body.style.overflow = '';

            // Remove keyboard-active class to shift game card back down
            const gameScreen = document.getElementById('game-screen');
            if (gameScreen) {
                gameScreen.classList.remove('keyboard-active');
            }

            // Blur the math field to hide cursor
            if (this.mathField) {
                this.mathField.blur();
            }
        }
    }

    toggle() {
        if (this.isVisible) {
            this.hide();
        } else {
            this.show();
        }
    }

    // Create substitute textarea for MathQuill on mobile
    static createSubstituteTextarea() {
        // Return a focusable element that doesn't trigger native keyboard
        const span = document.createElement('span');
        span.tabIndex = 0;
        span.style.position = 'absolute';
        span.style.left = '-9999px';
        return span;
    }
}
