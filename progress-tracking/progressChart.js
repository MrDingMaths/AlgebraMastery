// progressChart.js - Chart visualization with Chart.js
class ProgressChart {
    constructor(canvasId, progressTracker) {
        this.canvasId = canvasId;
        this.canvas = null;
        this.ctx = null;
        this.progressTracker = progressTracker;
        this.chart = null;
        this.currentDrill = null;
        // Don't auto-initialize canvas here, let UI handle it
    }

    // Initialize chart for a specific drill with animation
    initChart(levelKey, levelName) {
        console.log('InitChart called for:', levelKey, levelName);
        
        // Make sure we have a canvas
        if (!this.canvas) {
            this.canvas = document.getElementById('progress-chart');
            if (this.canvas) {
                this.ctx = this.canvas.getContext('2d');
            }
        }
        
        if (!this.ctx) {
            console.error('Canvas context not found');
            return;
        }
        
        // Add transition effect when switching drills
        if (this.currentDrill && this.currentDrill !== levelKey) {
            this.addTransitionEffect(() => {
                this.loadNewChart(levelKey, levelName);
            });
        } else {
            this.loadNewChart(levelKey, levelName);
        }
    }
    
    // Add transition effect
    addTransitionEffect(callback) {
        if (!this.chart) {
            callback();
            return;
        }
        
        // Fade out existing chart
        this.chart.options.animation = {
            duration: 500,
            easing: 'easeInQuart',
            onComplete: () => {
                // Callback after fade out completes
                setTimeout(callback, 100);
            }
        };
        
        // Trigger fade out by updating with empty data
        this.chart.data.datasets.forEach(dataset => {
            dataset.data = [];
        });
        this.chart.update();
    }
    
    // Load new chart data
    loadNewChart(levelKey, levelName) {
        this.currentDrill = levelKey;
        const drillData = this.progressTracker.getDrillProgress(levelKey);
        
        console.log('Drill data:', drillData);
        
        if (!drillData || !drillData.attempts || drillData.attempts.length === 0) {
            this.showNoDataMessage();
            return;
        }
        
        const chartData = this.prepareChartData(drillData, levelName);
        console.log('Chart data prepared:', chartData);
        
        this.createChart(chartData);
    }

    // Prepare data for chart
    prepareChartData(drillData, levelName) {
        return {
            levelName: levelName,
            attempts: drillData.attempts,
            improvements: drillData.improvements || []
        };
    }


    // Create Chart.js chart
    createChart(chartData) {
        console.log('Creating chart with data:', chartData);
        
        // Destroy existing chart if it exists
        if (this.chart) {
            console.log('Destroying existing chart');
            try {
                this.chart.destroy();
            } catch (e) {
                console.warn('Error destroying chart:', e);
            }
            this.chart = null;
        }
        
        // Also check for any existing Chart.js instances on this canvas
        if (this.canvas && Chart.getChart) {
            const existingChart = Chart.getChart(this.canvas);
            if (existingChart) {
                console.log('Found existing chart instance, destroying it');
                existingChart.destroy();
            }
        }
        
        // Make sure Chart.js is loaded
        if (typeof Chart === 'undefined') {
            console.error('Chart.js is not loaded!');
            return;
        }
        
        // Ensure responsive canvas dimensions
        if (this.canvas && this.canvas.parentElement) {
            const container = this.canvas.parentElement;
            const rect = container.getBoundingClientRect();
            const containerWidth = rect.width - 40; // Account for padding
            const containerHeight = rect.height - 40;
            
            // Calculate responsive dimensions
            const minWidth = 300;
            const minHeight = 250;
            const maxHeight = window.innerHeight * 0.6; // Max 60% of viewport height
            
            const width = Math.max(containerWidth, minWidth);
            const height = Math.min(Math.max(containerHeight, minHeight), maxHeight);
            
            // Set responsive canvas dimensions
            this.canvas.style.position = 'relative';
            this.canvas.style.display = 'block';
            this.canvas.style.width = '100%';
            this.canvas.style.height = `${height}px`;
            this.canvas.style.maxHeight = `${maxHeight}px`;
            this.canvas.style.zIndex = '1';
            
            // Update container height to match
            container.style.height = `${height + 40}px`;
        }
        
        try {
            // Convert data to use attempt numbers instead of dates
            const drillData = this.progressTracker.getDrillProgress(this.currentDrill);
            
            // Prepare data points with performance colors
            const bestTimesData = [];
            const actualTimesData = [];
            let currentBest = Infinity;
            
            drillData.attempts.forEach((attempt, index) => {
                
                // Track actual times
                actualTimesData.push({
                    x: index + 1,
                    y: attempt.time
                });
                
                // Track best times (cumulative best)
                if (attempt.time < currentBest) {
                    currentBest = attempt.time;
                }
                bestTimesData.push({
                    x: index + 1,
                    y: currentBest
                });
            });
            
            
            this.chart = new Chart(this.ctx, {
                type: 'line',
                data: {
                    datasets: [
                        {
                            label: '⭐ Best Time',
                            data: bestTimesData,
                            borderColor: '#3b82f6',
                            backgroundColor: '#3b82f6',
                            tension: 0,
                            fill: false,
                            pointRadius: 6,
                            pointHoverRadius: 8,
                            borderWidth: 3,
                            pointBorderWidth: 2,
                            pointBorderColor: '#ffffff',
                            pointStyle: 'circle',
                            shadowOffsetX: 3,
                            shadowOffsetY: 3,
                            shadowBlur: 6,
                            shadowColor: 'rgba(0, 0, 0, 0.3)'
                        },
                        {
                            label: 'Actual Time',
                            data: actualTimesData,
                            borderColor: '#60a5fa',
                            backgroundColor: '#60a5fa',
                            borderDash: [5, 5],
                            tension: 0,
                            fill: false,
                            pointRadius: 3,
                            pointHoverRadius: 6,
                            borderWidth: 2,
                            pointBorderWidth: 1,
                            pointBorderColor: '#ffffff'
                        }
                    ]
                },
                plugins: [],
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    resizeDelay: 100,
                    animation: false,
                    layout: {
                        padding: {
                            left: 15,
                            right: 15,
                            top: 15,
                            bottom: 15
                        }
                    },
                    interaction: {
                        mode: 'index',
                        intersect: false
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: `Progress: ${chartData.levelName}`,
                            font: {
                                size: 16,
                                weight: 'bold'
                            }
                        },
                        legend: {
                            display: true,
                            position: 'top',
                            labels: {
                                usePointStyle: true,
                                pointStyle: 'circle',
                                boxWidth: 8,
                                boxHeight: 8,
                                font: {
                                    size: 13,
                                    weight: '500'
                                },
                                color: '#374151',
                                padding: 15
                            }
                        },
                        tooltip: {
                            backgroundColor: 'rgba(0, 0, 0, 0.8)',
                            titleColor: '#ffffff',
                            bodyColor: '#ffffff',
                            borderColor: '#ffffff',
                            borderWidth: 1,
                            cornerRadius: 8,
                            displayColors: true,
                            callbacks: {
                                title: function(context) {
                                    return `📚 Attempt #${context[0].parsed.x}`;
                                },
                                label: function(context) {
                                    const time = context.parsed.y;
                                    const minutes = Math.floor(time / 60);
                                    const seconds = time % 60;
                                    const timePerQuestion = time / (window.CONFIG?.REQUIRED_STREAK || 15);
                                    const zone = context.raw.zone || 'Unknown';
                                    return [
                                        `${context.dataset.label}: ${minutes}:${seconds.toString().padStart(2, '0')}`,
                                        `⏱️ ${timePerQuestion.toFixed(1)}s per question`,
                                    ];
                                },
                                afterLabel: function(context) {
                                    // Add date info if available
                                    if (context.datasetIndex === 1) { // Actual time dataset
                                        const attemptIndex = context.parsed.x - 1;
                                        const drillData = window.progressTracker.getDrillProgress(window.progressChart.currentDrill);
                                        if (drillData && drillData.attempts[attemptIndex]) {
                                            const date = new Date(drillData.attempts[attemptIndex].timestamp);
                                            return `Date: ${date.toLocaleDateString()}`;
                                        }
                                    }
                                    
                                    // Add improvement info for best time points
                                    if (context.datasetIndex === 0) { // Best time dataset
                                        const attemptIndex = context.parsed.x - 1;
                                        const drillData = window.progressTracker.getDrillProgress(window.progressChart.currentDrill);
                                        if (drillData && attemptIndex > 0) {
                                            const currentTime = context.parsed.y;
                                            const previousBest = bestTimesData[attemptIndex - 1]?.y;
                                            if (previousBest && currentTime < previousBest) {
                                                const improvement = previousBest - currentTime;
                                                const percentImprovement = ((improvement / previousBest) * 100).toFixed(1);
                                                return `Improved by ${improvement}s (${percentImprovement}%)`;
                                            }
                                        }
                                    }
                                    return '';
                                }
                            }
                        }
                    },
                    scales: {
                        x: {
                            type: 'linear',
                            title: {
                                display: true,
                                text: 'Attempt Number'
                            },
                            ticks: {
                                stepSize: 1,
                                precision: 0
                            }
                        },
                        y: {
                            title: {
                                display: true,
                                text: 'Time (seconds)'
                            },
                            ticks: {
                                callback: function(value) {
                                    const minutes = Math.floor(value / 60);
                                    const seconds = value % 60;
                                    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
                                }
                            },
                            beginAtZero: false
                        }
                    }
                }
            });
            
            console.log('Chart created successfully');
        } catch (error) {
            console.error('Error creating chart:', error);
        }
    }

    // Export chart as image
    exportAsImage() {
        if (!this.chart) return null;
        
        return this.canvas.toDataURL('image/png', 1.0);
    }

    // Show no data message
    showNoDataMessage() {
        console.log('Showing no data message');
        
        if (this.chart) {
            this.chart.destroy();
            this.chart = null;
        }
        
        if (!this.canvas) {
            console.error('No canvas for no data message');
            return;
        }
        
        // Make canvas visible
        this.canvas.style.display = 'block';
        this.canvas.width = 500;
        this.canvas.height = 400;
        
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.font = '20px Inter, sans-serif';
        this.ctx.fillStyle = '#9ca3af';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('No data available for this drill yet', this.canvas.width / 2, this.canvas.height / 2);
    }

    // Helper to get level name from key
    getLevelNameFromKey(key) {
        // Special case for practice mistakes level
        if (key === 'practiceAllMistakes') {
            return 'Practise Mistakes';
        }
        
        // Use CONFIG.LEVEL_GROUPS to dynamically find the level name
        const config = CONFIG || window.CONFIG;
        if (!config || !config.LEVEL_GROUPS) {
            return key; // Fallback to key if CONFIG not available
        }
        
        // Search through all level groups
        for (const [groupName, levels] of Object.entries(config.LEVEL_GROUPS)) {
            const level = levels.find(level => level.key === key);
            if (level) {
                // Remove HTML tags (like <br>) from the name
                return level.name.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim();
            }
        }
        
        return key; // Fallback to key if not found
    }

    // Destroy chart
    destroy() {
        if (this.chart) {
            this.chart.destroy();
            this.chart = null;
        }
    }
}