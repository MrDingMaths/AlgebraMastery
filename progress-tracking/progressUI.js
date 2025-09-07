// progressUI.js - UI components for progress tracking
class ProgressUI {
    constructor(progressTracker, progressChart, progressShare) {
        this.progressTracker = progressTracker;
        this.progressChart = progressChart;
        this.progressShare = progressShare;
        this.isVisible = false;
        this.currentView = 'overview';
        this.init();
    }

    init() {
        this.createProgressModal();
        this.createProgressButton();
        this.attachEventListeners();
    }

    // Create progress button that appears on the main screen
    createProgressButton() {
        const button = document.createElement('button');
        button.id = 'progress-btn';
        button.className = 'progress-btn';
        button.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                <polyline points="17 6 23 6 23 12"></polyline>
            </svg>
            <span>Progress</span>
        `;
        
        // Add to settings screen
        const settingsScreen = document.getElementById('settings-screen');
        if (settingsScreen) {
            settingsScreen.appendChild(button);
        }
    }

    // Create the main progress modal
    createProgressModal() {
        const modal = document.createElement('div');
        modal.id = 'progress-modal';
        modal.className = 'progress-modal hidden';
        modal.innerHTML = `
            <div class="progress-modal-content">
                <div class="progress-header">
                    <h2>Progress</h2>
                    <button class="close-btn" id="close-progress">×</button>
                </div>
                
                <div class="progress-tabs">
                    <button class="tab-btn active" data-view="overview">Overview</button>
                    <button class="tab-btn" data-view="drills">Improvement</button>
                    <button class="tab-btn" data-view="history">History</button>
                </div>
                
                <div class="progress-content">
                    <!-- Overview Tab -->
                    <div id="overview-content" class="tab-content active">
                        <div class="summary-cards">
                            <div class="summary-card">
                                <div class="card-icon">📚</div>
                                <div class="card-value" id="total-drills">0</div>
                                <div class="card-label">Drills Practiced</div>
                            </div>
                            <div class="summary-card">
                                <div class="card-icon">✅</div>
                                <div class="card-value" id="total-attempts">0</div>
                                <div class="card-label">Total Attempts</div>
                            </div>
                            <div class="summary-card">
                                <div class="card-icon">⏱️</div>
                                <div class="card-value" id="total-time">0:00</div>
                                <div class="card-label">Time Spent</div>
                            </div>
                            <div class="summary-card">
                                <div class="card-icon">📈</div>
                                <div class="card-value" id="avg-improvement">0%</div>
                                <div class="card-label">Avg Improvement</div>
                            </div>
                        </div>
                        
                        <div class="recent-activity">
                            <h3>Recent Activity</h3>
                            <div id="recent-sessions"></div>
                        </div>
                    </div>
                    
                    <!-- Drill Progress Tab -->
                    <div id="drills-content" class="tab-content">
                        <div class="drill-layout">
                            <div class="drill-sidebar" id="drill-sidebar">
                                <div class="sidebar-header">
                                    <h3>Select Drill</h3>
                                    <button class="sidebar-toggle" id="sidebar-toggle" title="Hide Sidebar">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <path d="M15 7L10 12L15 17"/>
                                        </svg>
                                    </button>
                                </div>
                                
                                <div class="drill-selector-grid">
                                    <div class="selector-header">
                                        <div class="search-filter">
                                            <input type="text" id="drill-search" placeholder="Search drills..." />
                                            <div class="category-filters">
                                                <button class="filter-btn active" data-category="all">All</button>
                                                <button class="filter-btn" data-category="foundational">Foundational</button>
                                                <button class="filter-btn" data-category="intermediate">Intermediate</button>
                                                <button class="filter-btn" data-category="advanced">Advanced</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="drill-grid" id="drill-grid">
                                        <!-- Drill cards will be populated here -->
                                    </div>
                                </div>
                            </div>
                            
                            <div class="drill-main-content" id="drill-main-content">
                                <button class="show-sidebar-btn" id="show-sidebar-btn" title="Show Sidebar">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M9 18l6-6-6-6"/>
                                    </svg>
                                </button>
                                <div class="chart-container">

                                    <canvas id="progress-chart"></canvas>
                                </div>
                                
                                <div class="drill-stats" id="drill-stats"></div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- History Tab -->
                    <div id="history-content" class="tab-content">
                        <div class="history-controls">
                            <button id="clear-data" class="btn btn-danger">Clear All Data</button>
                        </div>
                        
                        <div class="history-table">
                            <table id="history-table">
                                <thead>
                                    <tr>
                                        <th>Date</th>
                                        <th>Drill</th>
                                        <th>Time</th>
                                        <th>Performance</th>
                                    </tr>
                                </thead>
                                <tbody id="history-tbody"></tbody>
                            </table>
                        </div>
                    </div>
                </div>
                
                <div class="progress-actions">
                    <button id="print-report" class="btn btn-secondary">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/>
                        </svg>
                        Print Report
                    </button>
                    <button id="download-chart" class="btn btn-secondary">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                        </svg>
                        Download Chart
                    </button>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
    }

    // Attach event listeners
    attachEventListeners() {
        // Progress button
        document.getElementById('progress-btn')?.addEventListener('click', () => this.show());
        
        // Close button
        document.getElementById('close-progress')?.addEventListener('click', () => this.hide());
        
        // Tab navigation
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.switchTab(e.target.dataset.view));
        });
        
        // Drill search and filters
        document.getElementById('drill-search')?.addEventListener('input', (e) => {
            this.filterDrills(e.target.value);
        });
        
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.filterByCategory(e.target.dataset.category));
        });
        
        // Sidebar toggle
        document.getElementById('sidebar-toggle')?.addEventListener('click', () => {
            this.toggleSidebar();
        });
        
        // Show sidebar button
        document.getElementById('show-sidebar-btn')?.addEventListener('click', () => {
            this.toggleSidebar();
        });
        
        
        // Actions
        document.getElementById('print-report')?.addEventListener('click', () => this.progressShare.generatePrintableReport());
        document.getElementById('download-chart')?.addEventListener('click', () => this.progressShare.downloadChartImage());
        
        // Data management
        document.getElementById('clear-data')?.addEventListener('click', () => this.confirmClearData());
        
        // Close modal on background click
        document.getElementById('progress-modal')?.addEventListener('click', (e) => {
            if (e.target.id === 'progress-modal') {
                this.hide();
            }
        });
    }

    // Show the progress modal
    show() {
        const modal = document.getElementById('progress-modal');
        modal.classList.remove('hidden');
        this.isVisible = true;
        this.updateContent();
        this.populateSelectors();
    }

    // Hide the progress modal
    hide() {
        const modal = document.getElementById('progress-modal');
        modal.classList.add('hidden');
        this.isVisible = false;
    }

    // Switch between tabs
    switchTab(view) {
        this.currentView = view;
        
        // Update tab buttons
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.view === view);
        });
        
        // Update tab content
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        document.getElementById(`${view}-content`)?.classList.add('active');
        
        // Initialize specific views AFTER making them visible
        setTimeout(() => {
            if (view === 'drills') {
                this.initializeDrillChart();
                // Re-attach event listeners for filter buttons if they're dynamic
                document.querySelectorAll('.filter-btn').forEach(btn => {
                    btn.addEventListener('click', (e) => this.filterByCategory(e.target.dataset.category));
                });
            }
            // Removed comparison case
        }, 100);
    }

    // Update overview content
    updateContent() {
        const summary = this.progressTracker.getProgressSummary();
        
        // Update summary cards
        document.getElementById('total-drills').textContent = summary.totalDrills;
        document.getElementById('total-attempts').textContent = summary.totalAttempts;
        document.getElementById('total-time').textContent = this.progressShare.formatTime(summary.totalTimeSpent);
        document.getElementById('avg-improvement').textContent = `${summary.averageImprovement || 0}%`;
        
        // Update recent sessions
        const recentSessions = this.progressTracker.getRecentSessions(10);
        const sessionsHtml = recentSessions.map(session => {
            const date = new Date(session.timestamp);
            return `
                <div class="session-item">
                    <div class="session-date">${date.toLocaleDateString()}</div>
                    <div class="session-drill">${this.progressChart.getLevelNameFromKey(session.levelKey)}</div>
                    <div class="session-time">${this.progressShare.formatTime(session.time)}</div>
                </div>
            `;
        }).join('');
        
        document.getElementById('recent-sessions').innerHTML = sessionsHtml || '<p>No recent activity</p>';
        
        // Update history table
        this.updateHistoryTable();
    }

    // Populate drill selectors
    populateSelectors() {
        const allProgress = this.progressTracker.getAllProgress();
        this.populateDrillGrid(allProgress);
    }
    
    // Populate drill grid with cards
    populateDrillGrid(allProgress) {
        const drillGrid = document.getElementById('drill-grid');
        if (!drillGrid) return;
        
        const drillKeys = Object.keys(allProgress);
        
        drillGrid.innerHTML = drillKeys.map(key => {
            const drill = allProgress[key];
            const drillName = this.progressChart.getLevelNameFromKey(key);
            const category = this.getDrillCategory(key);
            const lastAttempt = drill.attempts[drill.attempts.length - 1];
            const bestTime = drill.bestTime;
            const totalAttempts = drill.totalAttempts;
            const config = CONFIG || window.CONFIG;
            const rating = this.getPerformanceRating(drill.bestTime, key);
            
            const showRating = rating.class === 'rating-queen' || rating.class === 'rating-mastery';
            
            return `
                <div class="drill-card" data-drill-key="${key}" data-category="${category}">
                    <div class="drill-card-header">
                        <h4 class="drill-name">${drillName}</h4>
                        ${showRating ? `<div class="drill-rating ${rating.class}">${rating.emoji}</div>` : ''}
                    </div>
                </div>
            `;
        }).join('');
        
        // Add click event listeners to drill cards
        drillGrid.querySelectorAll('.drill-card').forEach(card => {
            card.addEventListener('click', () => {
                const drillKey = card.dataset.drillKey;
                this.selectDrillCard(drillKey, card);
                this.showDrillProgress(drillKey);
            });
        });
    }
    
    // Get drill category for filtering
    getDrillCategory(key) {
        const categoryMap = {
            // Foundational Skills
            'simplifyLikeTermsEasy': 'foundational',
            'simplifyLikeTermsMedium': 'foundational',
            'simplifyLikeTermsHard': 'foundational',
            'multiplyTermsEasy': 'foundational',
            'multiplyTermsMedium': 'foundational',
            'multiplyTermsHard': 'foundational',
            'cancellingEasy': 'foundational',
            'cancellingMedium': 'foundational',
            'cancellingHard': 'foundational',
            'mixedAlgebraicSimplificationEasy': 'foundational',
            'mixedAlgebraicSimplificationMedium': 'foundational',
            'mixedAlgebraicSimplificationHard': 'foundational',
            'expansionEasy': 'foundational',
            'expansionMedium': 'foundational',
            'expansionHard': 'foundational',
            'indexLawEasy': 'foundational',
            'indexLawMedium': 'foundational',
            'indexLawHard': 'foundational',
            'indexLawDivisionEasy': 'foundational',
            'indexLawDivisionMedium': 'foundational',
            'indexLawDivisionHard': 'foundational',
            'indexLawPowerEasy': 'foundational',
            'indexLawPowerMedium': 'foundational',
            'indexLawPowerHard': 'foundational',
            'mixedIndexLawsEasy': 'foundational',
            'mixedIndexLawsMedium': 'foundational',
            'mixedIndexLawsHard': 'foundational',
            'orderOfOperationsEasy': 'foundational',
            'orderOfOperationsMedium': 'foundational',
            'orderOfOperationsHard': 'foundational',
            'factorisingEasy': 'foundational',
            'factorisingMedium': 'foundational',
            'factorisingHard': 'foundational',
            
            // Intermediate Skills
            'expandingAndSimplifyingEasy': 'intermediate',
            'expandingAndSimplifyingMedium': 'intermediate',
            'expandingAndSimplifyingHard': 'intermediate',
            'expandingDoubleBracketsEasy': 'intermediate',
            'expandingDoubleBracketsMedium': 'intermediate',
            'expandingDoubleBracketsHard': 'intermediate',
            'powerProductQuotientEasy': 'intermediate',
            'powerProductQuotientMedium': 'intermediate',
            'powerProductQuotientHard': 'intermediate',
            'addSubtractAlgebraicFractionsEasy': 'intermediate',
            'addSubtractAlgebraicFractionsMedium': 'intermediate',
            'addSubtractAlgebraicFractionsHard': 'intermediate',
            'multiplyDivideAlgebraicFractionsEasy': 'intermediate',
            'multiplyDivideAlgebraicFractionsMedium': 'intermediate',
            'multiplyDivideAlgebraicFractionsHard': 'intermediate',
            'negativeIndicesEasy': 'intermediate',
            'negativeIndicesMedium': 'intermediate',
            'negativeIndicesHard': 'intermediate',
            'factorisingMonicQuadraticTrinomialsEasy': 'intermediate',
            'factorisingMonicQuadraticTrinomialsMedium': 'intermediate',
            'factorisingMonicQuadraticTrinomialsHard': 'intermediate',
            
            // Advanced Skills
            'addSubtractFractionsBinomialEasy': 'advanced',
            'addSubtractFractionsBinomialMedium': 'advanced',
            'addSubtractFractionsBinomialHard': 'advanced',
            'expandingPerfectSquaresEasy': 'advanced',
            'expandingPerfectSquaresMedium': 'advanced',
            'expandingPerfectSquaresHard': 'advanced',
            'expandingDifferenceOfTwoSquaresEasy': 'advanced',
            'expandingDifferenceOfTwoSquaresMedium': 'advanced',
            'expandingDifferenceOfTwoSquaresHard': 'advanced',
            'differenceOfTwoSquaresEasy': 'advanced',
            'differenceOfTwoSquaresMedium': 'advanced',
            'differenceOfTwoSquaresHard': 'advanced',
            'perfectSquareFactorisationEasy': 'advanced',
            'perfectSquareFactorisationMedium': 'advanced',
            'perfectSquareFactorisationHard': 'advanced',
            'mixedExpansionEasy': 'advanced',
            'mixedExpansionMedium': 'advanced',
            'mixedExpansionHard': 'advanced',
            'binomialFactorsEasy': 'advanced',
            'binomialFactorsMedium': 'advanced',
            'binomialFactorsHard': 'advanced',
            'groupingInPairsEasy': 'advanced',
            'groupingInPairsMedium': 'advanced',
            'groupingInPairsHard': 'advanced',
            'factorisingNonMonicQuadraticTrinomialsEasy': 'advanced',
            'factorisingNonMonicQuadraticTrinomialsMedium': 'advanced',
            'factorisingNonMonicQuadraticTrinomialsHard': 'advanced',
            'mixedFactorisationEasy': 'advanced',
            'mixedFactorisationMedium': 'advanced',
            'mixedFactorisationHard': 'advanced',
            'finishFactorisingEasy': 'advanced',
            'finishFactorisingMedium': 'advanced',
            'finishFactorisingHard': 'advanced',
            'simplifyAlgebraicFractionsEasy': 'advanced',
            'simplifyAlgebraicFractionsMedium': 'advanced',
            'simplifyAlgebraicFractionsHard': 'advanced',
            'multiplyDivideAlgebraicFractionsByFactorisingEasy': 'advanced',
            'multiplyDivideAlgebraicFractionsByFactorisingMedium': 'advanced',
            'multiplyDivideAlgebraicFractionsByFactorisingHard': 'advanced',
            'addSubtractFractionsFactorisingEasy': 'advanced',
            'addSubtractFractionsFactorisingMedium': 'advanced',
            'addSubtractFractionsFactorisingHard': 'advanced',
            'compoundFractionsEasy': 'advanced',
            'compoundFractionsMedium': 'advanced',
            'compoundFractionsHard': 'advanced',
            'surdSimplificationEasy': 'advanced',
            'surdSimplificationMedium': 'advanced',
            'surdSimplificationHard': 'advanced',
            'addSubtractingSurdsEasy': 'advanced',
            'addSubtractingSurdsMedium': 'advanced',
            'addSubtractingSurdsHard': 'advanced',
            'multiplyingDividingSurdsEasy': 'advanced',
            'multiplyingDividingSurdsMedium': 'advanced',
            'multiplyingDividingSurdsHard': 'advanced',
            'expandingSurdsEasy': 'advanced',
            'expandingSurdsMedium': 'advanced',
            'expandingSurdsHard': 'advanced',
            'rationalisingDenominatorEasy': 'advanced',
            'rationalisingDenominatorMedium': 'advanced',
            'rationalisingDenominatorHard': 'advanced',
            'furtherRationalisingDenominatorEasy': 'advanced',
            'furtherRationalisingDenominatorMedium': 'advanced',
            'furtherRationalisingDenominatorHard': 'advanced',
            'evaluatingFractionalIndicesEasy': 'advanced',
            'evaluatingFractionalIndicesMedium': 'advanced',
            'evaluatingFractionalIndicesHard': 'advanced',
            'surdToIndexEasy': 'advanced',
            'surdToIndexMedium': 'advanced',
            'surdToIndexHard': 'advanced',
            'indexFormToSurdFormEasy': 'advanced',
            'indexFormToSurdFormMedium': 'advanced',
            'indexFormToSurdFormHard': 'advanced'
        };
        return categoryMap[key] || 'other';
    }
    
    // Get drill icon based on category
    getDrillIcon(category) {
        const icons = {
            'foundational': '🔧',
            'intermediate': '🎯',
            'advanced': '🎓',
            'other': '📝'
        };
        return icons[category] || '📝';
    }
    
    // Get performance rating - uses shared rating utility for consistency
    getPerformanceRating(totalTime, levelKey = null) {
        if (!totalTime) return { emoji: '⚪', class: 'rating-none' };
        
        // Use the shared RatingUtils for consistent calculation
        if (window.RatingUtils) {
            try {
                console.log(`Progress Modal Rating - Level: ${levelKey}, Total Time: ${totalTime}`);
                console.log('CONFIG available:', !!CONFIG);
                console.log('window.CONFIG available:', !!window.CONFIG);
                const config = CONFIG || window.CONFIG;
                const rating = window.RatingUtils.getRating(totalTime, levelKey, config?.REQUIRED_STREAK || 15, config);
                console.log('Progress Modal Rating Result:', rating);
                return window.RatingUtils.toProgressUIFormat(rating);
            } catch (error) {
                console.warn('Error using RatingUtils, falling back to StorageManager:', error);
            }
        }
        
        // Fallback to StorageManager for backward compatibility
        if (window.StorageManager && window.StorageManager.getRating) {
            const rating = window.StorageManager.getRating(totalTime, levelKey);
            if (rating) {
                // Convert the main game rating format to progress UI format
                const emojiMap = {
                    'true-mastery': '💖',
                    'mastery': '⚡', 
                    'expert': '🎯',
                    'developing': '👍',
                    'beginner': '📚'
                };
                return {
                    emoji: emojiMap[rating.key] || '📚',
                    class: `rating-${rating.key === 'true-mastery' ? 'queen' : rating.key}`
                };
            }
        }
        
        // Final fallback - should not be needed with RatingUtils
        return { emoji: '📚', class: 'rating-beginner' };
    }
    
    // Select drill card visually
    selectDrillCard(drillKey, selectedCard) {
        // Remove previous selections
        document.querySelectorAll('.drill-card').forEach(card => {
            card.classList.remove('selected');
        });
        
        // Add selection to clicked card
        selectedCard.classList.add('selected');
    }
    
    // Filter drills by search text
    filterDrills(searchText) {
        const cards = document.querySelectorAll('.drill-card');
        const lowercaseSearch = searchText.toLowerCase();
        
        cards.forEach(card => {
            const drillName = card.querySelector('.drill-name').textContent.toLowerCase();
            const matches = drillName.includes(lowercaseSearch);
            card.style.display = matches ? 'block' : 'none';
        });
    }
    
    // Filter drills by category
    filterByCategory(category) {
        // Update active filter button
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.category === category);
        });
        
        const cards = document.querySelectorAll('.drill-card');
        
        cards.forEach(card => {
            if (category === 'all') {
                card.style.display = 'block';
            } else {
                const matches = card.dataset.category === category;
                card.style.display = matches ? 'block' : 'none';
            }
        });
    }

    // Initialize drill chart
    initializeDrillChart() {
        // Make sure we're working with the right canvas
        const chartContainer = document.querySelector('#drills-content .chart-container');
        if (!chartContainer) {
            console.error('Chart container not found');
            return;
        }
        
        let canvas = document.getElementById('progress-chart');
        if (!canvas) {
            // Create canvas if it doesn't exist
            canvas = document.createElement('canvas');
            canvas.id = 'progress-chart';
            chartContainer.appendChild(canvas);
        } else if (canvas.parentElement !== chartContainer) {
            // Move canvas to correct container if it's elsewhere
            chartContainer.appendChild(canvas);
        }
        
        // Update chart instance with canvas
        this.progressChart.canvas = canvas;
        this.progressChart.ctx = canvas.getContext('2d');
    }

    // Toggle sidebar visibility
    toggleSidebar() {
        const sidebar = document.getElementById('drill-sidebar');
        const mainContent = document.getElementById('drill-main-content');
        const toggleBtn = document.getElementById('sidebar-toggle');
        const showSidebarBtn = document.getElementById('show-sidebar-btn');
        
        if (sidebar && mainContent) {
            sidebar.classList.toggle('collapsed');
            mainContent.classList.toggle('expanded');
            
            const isCollapsed = sidebar.classList.contains('collapsed');
            
            // Update toggle button icon
            if (toggleBtn) {
                const svg = toggleBtn.querySelector('svg path');
                if (isCollapsed) {
                    svg.setAttribute('d', 'M9 18l6-6-6-6'); // Right arrow to show sidebar
                    toggleBtn.setAttribute('title', 'Show Sidebar');
                } else {
                    svg.setAttribute('d', 'M15 7L10 12L15 17'); // Left arrow to hide sidebar
                    toggleBtn.setAttribute('title', 'Hide Sidebar');
                }
            }
            
            // Show/hide the show sidebar button
            if (showSidebarBtn) {
                showSidebarBtn.style.display = isCollapsed ? 'flex' : 'none';
            }
        }
    }
        
    // Show drill progress
    showDrillProgress(levelKey) {
        if (!levelKey) {
            console.log('No level key provided');
            return;
        }
        
        console.log('Showing progress for:', levelKey);
        
        // Update chart title
        const levelName = this.progressChart.getLevelNameFromKey(levelKey);
        const titleElement = document.getElementById('current-drill-title');
        if (titleElement) {
            titleElement.textContent = `Progress: ${levelName}`;
        }
        
        // Ensure canvas is ready
        this.initializeDrillChart();
        
        // Make sure we have the canvas before trying to create chart
        if (!this.progressChart.canvas || !this.progressChart.ctx) {
            console.error('Canvas not initialized');
            return;
        }
        
        this.progressChart.initChart(levelKey, levelName);
        
        // Update drill stats
        const drill = this.progressTracker.getDrillProgress(levelKey);
        if (drill) {
            const config = CONFIG || window.CONFIG;
            const rating = this.getPerformanceRating(drill.bestTime, levelKey);
            const statsHtml = `
                <div class="stats-header">
                    <h4>Performance Statistics</h4>
                    <div class="performance-badge ${rating.class}">
                        ${rating.emoji} ${rating.class.replace('rating-', '').replace('-', ' ').toUpperCase()}
                    </div>
                </div>
                <div class="stats-grid">
                    <div class="stat-item">
                        <div class="stat-icon">🏆</div>
                        <div class="stat-label">Best Time</div>
                        <div class="stat-value">${this.progressShare.formatTime(drill.bestTime)}</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-icon">⏱️</div>
                        <div class="stat-label">Average Time</div>
                        <div class="stat-value">${this.progressShare.formatTime(Math.round(drill.averageTime))}</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-icon">📚</div>
                        <div class="stat-label">Total Attempts</div>
                        <div class="stat-value">${drill.totalAttempts}</div>
                    </div>
                    <div class="stat-item">
                        <div class="stat-icon">📈</div>
                        <div class="stat-label">Improvements</div>
                        <div class="stat-value">${drill.improvements.length}</div>
                    </div>
                </div>
            `;
            document.getElementById('drill-stats').innerHTML = statsHtml;
        }
    }

    // Update history table
    updateHistoryTable() {
        const sessions = this.progressTracker.getRecentSessions(500);
        const tbody = document.getElementById('history-tbody');
        
        if (tbody) {
            const tableRows = sessions.map(session => {
                const date = new Date(session.timestamp);
                const drill = this.progressTracker.getDrillProgress(session.levelKey);
                const isBest = drill && session.time === drill.bestTime;
                
                const dateStr = date.toLocaleString();
                const drillName = this.progressChart.getLevelNameFromKey(session.levelKey);
                const timeStr = this.progressShare.formatTime(session.time);
                const performanceStr = isBest ? '⭐ Personal Best!' : `${session.averageTimePerQuestion.toFixed(1)}s/question`;
                
                return `<tr class=''>` +
                    `<td class="date-column">${dateStr}</td>` +
                    `<td class="drill-column">${drillName}</td>` +
                    `<td class="time-column">${timeStr}</td>` +
                    `<td class="performance-column">${performanceStr}</td>` +
                    `</tr>`;
            }).join('');
            
            tbody.innerHTML = tableRows;
        }
    }

    // Confirm data clear
    confirmClearData() {
        if (confirm('Are you sure you want to clear all progress data? This action cannot be undone.')) {
            if (confirm('This will permanently delete all your progress. Are you absolutely sure?')) {
                // Clear progress tracking data
                this.progressTracker.resetData();
                
                // Clear individual best times (game state system)
                this.clearBestTimes();
                
                alert('All progress data has been cleared.');
                this.updateContent();
                this.populateSelectors();
            }
        }
    }
    
    // Clear all best time records from localStorage
    clearBestTimes() {
        const prefix = window.CONFIG?.STORAGE_PREFIX || 'algebra_bestTime_v1_';
        const keys = [];
        
        // Collect all localStorage keys that match the prefix
        for (let i = 0; i < localStorage.length; i++) {
            const key = localStorage.key(i);
            if (key && key.startsWith(prefix)) {
                keys.push(key);
            }
        }
        
        // Remove all matching keys
        keys.forEach(key => {
            localStorage.removeItem(key);
        });
        
        console.log(`Cleared ${keys.length} best time records`);
    }
}