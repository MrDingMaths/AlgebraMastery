// algebra-modules/confetti.js
class Confetti {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.pieces = [];
        this.animationFrame = null;
        this.resizeCanvas();
        window.addEventListener('resize', () => this.resizeCanvas());
    }
    
    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    trigger(count) {
        for (let i = 0; i < count; i++) {
            this.pieces.push(this.createPiece());
        }
        if (!this.animationFrame) {
            this.animate();
        }
    }
    
    createPiece() {
        const x = this.canvas.width * Math.random();
        const y = -20;
        const size = Math.random() * 10 + 5;
        const colors = ['#fde047', '#facc15', '#a3e635', '#4ade80', '#34d399', '#2dd4bf', '#67e8f9', '#7dd3fc', '#93c5fd', '#a5b4fc', '#c4b5fd', '#d8b4fe', '#f0abfc', '#f9a8d4'];
        return {
            x, y, size,
            color: colors[Math.floor(Math.random() * colors.length)],
            vx: Math.random() * 10 - 5,
            vy: Math.random() * 5 + 2,
            angle: Math.random() * Math.PI * 2,
            spin: Math.random() * 0.2 - 0.1
        };
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.pieces.forEach((p, index) => {
            p.x += p.vx;
            p.y += p.vy;
            p.angle += p.spin;
            this.ctx.save();
            this.ctx.translate(p.x, p.y);
            this.ctx.rotate(p.angle);
            this.ctx.fillStyle = p.color;
            this.ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
            this.ctx.restore();
            if (p.y > this.canvas.height) {
                this.pieces.splice(index, 1);
            }
        });
        if (this.pieces.length > 0) {
            this.animationFrame = requestAnimationFrame(() => this.animate());
        } else {
            this.animationFrame = null;
        }
    }
}