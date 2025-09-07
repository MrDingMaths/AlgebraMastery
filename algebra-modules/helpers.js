// algebra-modules/helpers.js
function createEl(tag, options = {}) {
    const el = document.createElement(tag);
    if (options.className) el.className = options.className;
    if (options.id) el.id = options.id;
    if (options.textContent) el.textContent = options.textContent;
    if (options.type) el.type = options.type;
    if (options.placeholder) el.placeholder = options.placeholder;
    if (options.step) el.step = options.step;
    if (options.style) Object.assign(el.style, options.style);
    if (options.autocomplete) el.autocomplete = options.autocomplete;
    return el;
}