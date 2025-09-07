// algebra-modules/timer.js
class Timer {
    constructor(displayElement) { 
        this.display = displayElement; 
        this.reset(); 
    }
    
    reset() { 
        clearInterval(this.interval);
        this.startTime = 0; 
        this.interval = null; 
        this.seconds = 0; 
        if(this.display) this.display.textContent = this.formatTime(0);
    }
    
    start() {
        this.reset();
        this.startTime = Date.now();
        if(this.display) this.display.textContent = this.formatTime(0);
        this.interval = setInterval(() => {
            if (this.startTime > 0) {
                this.seconds = Math.floor((Date.now() - this.startTime) / 1000);
                if(this.display) this.display.textContent = this.formatTime(this.seconds);
            }
        }, 1000);
    }
    
    stop() { 
        clearInterval(this.interval); 
    }
    
    getSeconds() { 
        return this.seconds; 
    }
    
    formatTime(sec) {
        // Ensure sec is a valid positive number
        if (isNaN(sec) || sec < 0) sec = 0;
        
        const minutes = Math.floor(sec / 60).toString().padStart(2, '0');
        const seconds = (sec % 60).toString().padStart(2, '0');
        return `${minutes}:${seconds}`;
    }
}