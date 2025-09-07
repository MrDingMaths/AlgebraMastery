// progressShare.js - Sharing functionality
class ProgressShare {
    constructor(progressTracker, progressChart) {
        this.progressTracker = progressTracker;
        this.progressChart = progressChart;
    }

    // Generate shareable summary
    generateSummary(levelKey = null) {
        const summary = this.progressTracker.getProgressSummary();
        let text = `📊 Algebra Challenge Progress Report\n`;
        text += `📅 Generated: ${new Date().toLocaleDateString()}\n\n`;
        
        if (levelKey) {
            const drill = this.progressTracker.getDrillProgress(levelKey);
            if (drill) {
                text += `📚 Drill: ${this.progressChart.getLevelNameFromKey(levelKey)}\n`;
                text += `✅ Total Attempts: ${drill.totalAttempts}\n`;
                text += `⏱️ Best Time: ${this.formatTime(drill.bestTime)}\n`;
                text += `📈 Average Time: ${this.formatTime(Math.round(drill.averageTime))}\n`;
                
                if (drill.improvements.length > 0) {
                    const totalImprovement = drill.improvements.reduce((sum, i) => sum + parseFloat(i.percentImprovement), 0);
                    text += `📈 Total Improvement: ${totalImprovement.toFixed(1)}%\n`;
                }
            }
        } else {
            text += `📚 Total Drills Practiced: ${summary.totalDrills}\n`;
            text += `✅ Total Attempts: ${summary.totalAttempts}\n`;
            text += `⏱️ Total Time Spent: ${this.formatTime(summary.totalTimeSpent)}\n`;
            text += `📈 Drills Improved: ${summary.drillsWithImprovement}\n`;
            if (summary.averageImprovement > 0) {
                text += `📈 Average Improvement: ${summary.averageImprovement}%\n`;
            }
        }
        
        return text;
    }

    // Download chart as image
    downloadChartImage(dataUrl = null, levelKey = null) {
        const imageData = dataUrl || this.progressChart.exportAsImage();
        if (!imageData) {
            console.error('No chart available to export');
            return;
        }
        
        const link = document.createElement('a');
        link.download = `math-progress-${levelKey || 'summary'}-${new Date().toISOString().split('T')[0]}.png`;
        link.href = imageData;
        link.click();
    }

    // Copy summary to clipboard
    async copyToClipboard(levelKey = null) {
        const summary = this.generateSummary(levelKey);
        
        try {
            await navigator.clipboard.writeText(summary);
            return true;
        } catch (err) {
            // Fallback for older browsers
            const textArea = document.createElement('textarea');
            textArea.value = summary;
            textArea.style.position = 'fixed';
            textArea.style.left = '-999999px';
            document.body.appendChild(textArea);
            textArea.select();
            
            try {
                document.execCommand('copy');
                document.body.removeChild(textArea);
                return true;
            } catch (err) {
                document.body.removeChild(textArea);
                return false;
            }
        }
    }

    // Generate printable report
    generatePrintableReport() {
        const summary = this.progressTracker.getProgressSummary();
        const allProgress = this.progressTracker.getAllProgress();
        
        const printWindow = window.open('', '_blank');
        const html = `
            <!DOCTYPE html>
            <html>
            <head>
                <title>Math Facts Progress Report</title>
                <style>
                    body { font-family: 'Inter', Arial, sans-serif; padding: 20px; max-width: 800px; margin: 0 auto; }
                    h1 { color: #1f2937; border-bottom: 2px solid #e5e7eb; padding-bottom: 10px; }
                    h2 { color: #374151; margin-top: 30px; }
                    .summary-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; margin: 20px 0; }
                    .summary-card { background: #f9fafb; border-radius: 8px; padding: 15px; }
                    .summary-card h3 { margin-top: 0; color: #4b5563; font-size: 14px; text-transform: uppercase; }
                    .summary-card .value { font-size: 24px; font-weight: bold; color: #1f2937; }
                    .drill-table { width: 100%; border-collapse: collapse; margin-top: 20px; }
                    .drill-table th, .drill-table td { padding: 10px; text-align: left; border-bottom: 1px solid #e5e7eb; }
                    .drill-table th { background: #f3f4f6; font-weight: 600; }
                    .improvement { color: #10b981; font-weight: bold; }
                    @media print { 
                        body { padding: 0; }
                        .no-print { display: none; }
                    }
                </style>
            </head>
            <body>
                <h1>Maths Facts Progress Report</h1>
                <p>Generated: ${new Date().toLocaleString()}</p>
                
                <div class="summary-grid">
                    <div class="summary-card">
                        <h3>Total Drills</h3>
                        <div class="value">📚${summary.totalDrills}</div>
                    </div>
                    <div class="summary-card">
                        <h3>Total Attempts</h3>
                        <div class="value">✅${summary.totalAttempts}</div>
                    </div>
                    <div class="summary-card">
                        <h3>Time Spent</h3>
                        <div class="value">⏱️${this.formatTime(summary.totalTimeSpent)}</div>
                    </div>
                    <div class="summary-card">
                        <h3>Average Improvement</h3>
                        <div class="value">📈${summary.averageImprovement || 0}%</div>
                    </div>
                </div>
                
                <h2>Drill Details</h2>
                <table class="drill-table">
                    <thead>
                        <tr>
                            <th>Drill</th>
                            <th>Attempts</th>
                            <th>Best Time</th>
                            <th>Average</th>
                            <th>Improvement</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${Object.entries(allProgress).map(([key, drill]) => `
                            <tr>
                                <td>${this.progressChart.getLevelNameFromKey(key)}</td>
                                <td>${drill.totalAttempts}</td>
                                <td>${this.formatTime(drill.bestTime)}</td>
                                <td>${this.formatTime(Math.round(drill.averageTime))}</td>
                                <td class="improvement">
                                    ${drill.improvements.length > 0
									? drill.improvements.reduce((sum, i) => sum + parseFloat(i.percentImprovement), 0).toFixed(1) + '%'
                                       : '-'}
                               </td>
                           </tr>
                       `).join('')}
                   </tbody>
               </table>
               
               <div class="no-print" style="margin-top: 40px;">
                   <button onclick="window.print()" style="padding: 10px 20px; background: #4f46e5; color: white; border: none; border-radius: 6px; cursor: pointer;">Print Report</button>
               </div>
           </body>
           </html>
       `;
       
       printWindow.document.write(html);
       printWindow.document.close();
   }

   // Helper function to format time
   formatTime(seconds) {
       if (!seconds || seconds === 0) return '0:00';
       const hours = Math.floor(seconds / 3600);
       const minutes = Math.floor((seconds % 3600) / 60);
       const secs = seconds % 60;
       
       if (hours > 0) {
           return `${hours}h ${minutes}m`;
       } else if (minutes > 0) {
           return `${minutes}:${secs.toString().padStart(2, '0')}`;
       } else {
           return `${secs}s`;
       }
   }
}