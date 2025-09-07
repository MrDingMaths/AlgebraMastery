// progressTracker.js - Core tracking and data management
class ProgressTracker {
    constructor() {
        this.STORAGE_KEY = 'algebra_progress_data_v2';
        this.SCHEMA_VERSION = 2;
        this.MAX_ENTRIES_PER_DRILL = 500;
        this.initializeStorage();
    }

    // Initialize and migrate storage if needed
    initializeStorage() {
        const storedData = this.loadData();
        if (!storedData || storedData.version < this.SCHEMA_VERSION) {
            this.migrateData(storedData);
        }
    }

    // Data migration system
    migrateData(oldData) {
        console.log('Migrating progress data to version', this.SCHEMA_VERSION);
        
        let newData = {
            version: this.SCHEMA_VERSION,
            sessions: [],
            drillHistory: {}
        };

        if (oldData) {
            // Migrate from v1 to v2
            if (oldData.version === 1) {
                // Convert old format to new format
                if (oldData.sessions) {
                    newData.sessions = oldData.sessions.map(session => ({
                        ...session,
                        timestamp: session.date || session.timestamp,
                        deviceInfo: this.getDeviceInfo()
                    }));
                }
            }
            // Preserve drill history if it exists
            if (oldData.drillHistory) {
                newData.drillHistory = oldData.drillHistory;
            }
        }

        this.saveData(newData);
    }

    // Save progress data with validation
    recordProgress(levelKey, time, streak = 15) {
        try {
            const data = this.loadData();
            const timestamp = Date.now();
            
            // Create session entry
            const session = {
                id: this.generateId(),
                levelKey: levelKey,
                time: time,
                streak: streak,
                timestamp: timestamp,
                date: new Date(timestamp).toISOString(),
                deviceInfo: this.getDeviceInfo(),
                averageTimePerQuestion: time / streak
            };

            // Add to sessions
            data.sessions = data.sessions || [];
            data.sessions.push(session);

            // Update drill history
            data.drillHistory = data.drillHistory || {};
            if (!data.drillHistory[levelKey]) {
                data.drillHistory[levelKey] = {
                    attempts: [],
                    bestTime: null,
                    bestTimeDate: null,
                    totalAttempts: 0,
                    averageTime: 0,
                    lastAttempt: null,
                    improvements: []
                };
            }

            const drillData = data.drillHistory[levelKey];
            
            // Track improvement
            if (drillData.bestTime === null || time < drillData.bestTime) {
                if (drillData.bestTime !== null) {
                    drillData.improvements.push({
                        previousBest: drillData.bestTime,
                        newBest: time,
                        improvement: drillData.bestTime - time,
                        percentImprovement: ((drillData.bestTime - time) / drillData.bestTime * 100).toFixed(1),
                        date: timestamp
                    });
                }
                drillData.bestTime = time;
                drillData.bestTimeDate = timestamp;
            }

            // Add attempt
            drillData.attempts.push({
                time: time,
                timestamp: timestamp,
                isBest: time === drillData.bestTime
            });

            // Cleanup old entries if exceeding limit
            if (drillData.attempts.length > this.MAX_ENTRIES_PER_DRILL) {
                drillData.attempts = drillData.attempts.slice(-this.MAX_ENTRIES_PER_DRILL);
            }

            // Update statistics
            drillData.totalAttempts = drillData.attempts.length;
            drillData.lastAttempt = timestamp;
            drillData.averageTime = this.calculateAverage(drillData.attempts.map(a => a.time));

            // Cleanup old sessions (keep last 1000)
            if (data.sessions.length > 1000) {
                data.sessions = data.sessions.slice(-1000);
            }

            this.saveData(data);
            return session;

        } catch (error) {
            console.error('Error recording progress:', error);
            this.handleCorruptedData();
            return null;
        }
    }

    // Get progress data for a specific drill
    getDrillProgress(levelKey) {
        const data = this.loadData();
        return data.drillHistory?.[levelKey] || null;
    }

    // Get all progress data
    getAllProgress() {
        const data = this.loadData();
        return data.drillHistory || {};
    }

    // Get recent sessions
    getRecentSessions(limit = 10) {
        const data = this.loadData();
        return (data.sessions || [])
            .sort((a, b) => b.timestamp - a.timestamp)
            .slice(0, limit);
    }

    // Get progress summary
    getProgressSummary() {
        const data = this.loadData();
        const drillHistory = data.drillHistory || {};
        
        const summary = {
            totalDrills: Object.keys(drillHistory).length,
            totalAttempts: 0,
            totalTimeSpent: 0,
            drillsWithImprovement: 0,
            averageImprovement: 0,
            recentActivity: []
        };

        Object.entries(drillHistory).forEach(([key, drill]) => {
            summary.totalAttempts += drill.totalAttempts;
            summary.totalTimeSpent += drill.attempts.reduce((sum, a) => sum + a.time, 0);
            if (drill.improvements.length > 0) {
                summary.drillsWithImprovement++;
            }
        });

        // Calculate average improvement
        const allImprovements = Object.values(drillHistory)
            .flatMap(d => d.improvements)
            .map(i => parseFloat(i.percentImprovement));
        
        if (allImprovements.length > 0) {
            summary.averageImprovement = (allImprovements.reduce((a, b) => a + b, 0) / allImprovements.length).toFixed(1);
        }

        return summary;
    }

    // Data validation
    validateData(data) {
        if (!data || typeof data !== 'object') return false;
        if (!data.version || data.version < this.SCHEMA_VERSION) return false;
        if (!Array.isArray(data.sessions)) return false;
        if (!data.drillHistory || typeof data.drillHistory !== 'object') return false;
        return true;
    }

    // Handle corrupted data
    handleCorruptedData() {
        console.error('Corrupted data detected, creating backup and resetting...');
        const backup = localStorage.getItem(this.STORAGE_KEY);
        if (backup) {
            localStorage.setItem(this.STORAGE_KEY + '_backup_' + Date.now(), backup);
        }
        this.resetData();
    }

    // Reset data
    resetData() {
        const newData = {
            version: this.SCHEMA_VERSION,
            sessions: [],
            drillHistory: {}
        };
        this.saveData(newData);
    }

    // Helper functions
    loadData() {
        try {
            const stored = localStorage.getItem(this.STORAGE_KEY);
            if (!stored) return null;
            
            const data = JSON.parse(stored);
            if (!this.validateData(data)) {
                throw new Error('Invalid data structure');
            }
            return data;
        } catch (error) {
            console.error('Error loading progress data:', error);
            return null;
        }
    }

    saveData(data) {
        try {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
        } catch (error) {
            console.error('Error saving progress data:', error);
            // Handle quota exceeded
            if (error.name === 'QuotaExceededError') {
                this.cleanupOldData();
                try {
                    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));
                } catch (retryError) {
                    console.error('Failed to save after cleanup:', retryError);
                }
            }
        }
    }

    generateId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }

    getDeviceInfo() {
        return {
            userAgent: navigator.userAgent,
            screenWidth: window.screen.width,
            screenHeight: window.screen.height,
            platform: navigator.platform
        };
    }

    calculateAverage(numbers) {
        if (numbers.length === 0) return 0;
        return numbers.reduce((a, b) => a + b, 0) / numbers.length;
    }

    // Import data from backup
}