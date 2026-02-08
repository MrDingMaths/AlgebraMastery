// algebra-app.js - Main entry point
document.addEventListener('DOMContentLoaded', () => {
    // Migrate localStorage keys from old names to new names
    StorageManager.migrateKeys();

    // Initialize the game controller when DOM is ready and make it globally accessible
    window.gameController = new GameController();
});