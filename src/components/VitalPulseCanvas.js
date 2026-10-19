/**
 * VitalPulseCanvas.js - Libro Aleja
 * Fondo animado de latidos de luz, corazoncitos flotantes y calidez afectiva.
 */

export class VitalPulseCanvas {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.hearts = [];
    this.motes = [];
    this.numHearts = 18;
    this.numMotes = 35;
    this.active = true;

    this.resize = this.resize.bind(this);
    this.animate = this.animate.bind(this);

    window.addEventListener('resize', this.resize);
    this.resize();
    this.initElements();
    this.animate();
  }

  resize() {
    this.width = this.canvas.width = window.innerWidth;
    this.height = this.canvas.height = window.innerHeight;
  }

  initElements() {
    this.hearts = [];
    for (let i = 0; i < this.numHearts; i++) {
      this.hearts.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        size: Math.random() * 10 + 6,
        speedY: Math.random() * 0.6 + 0.3,
        speedX: (Math.random() - 0.5) * 0.3,
        alpha: Math.random() * 0.4 + 0.15,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.03 + 0.02
      });
    }

    this.motes = [];
    for (let i = 0; i < this.numMotes; i++) {
      this.motes.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        r: Math.random() * 2 + 0.8,
        speedY: Math.random() * 0.4 + 0.2,
        alpha: Math.random() * 0.5 + 0.2,
        pulse: Math.random() * Math.PI * 2
      });
    }
  }

  drawHeart(x, y, size, alpha) {
    this.ctx.save();
    this.ctx.translate(x, y);
    this.ctx.beginPath();
    const topCurveHeight = size * 0.3;
    this.ctx.moveTo(0, topCurveHeight);
    // curva izquierda
    this.ctx.bezierCurveTo(-size / 2, -topCurveHeight, -size, size / 3, 0, size);
    // curva derecha
    this.ctx.bezierCurveTo(size, size / 3, size / 2, -topCurveHeight, 0, topCurveHeight);
    this.ctx.fillStyle = `rgba(235, 148, 160, ${alpha})`;
    this.ctx.shadowBlur = 6;
    this.ctx.shadowColor = `rgba(235, 148, 160, 0.4)`;
    this.ctx.fill();
    this.ctx.restore();
  }

  animate() {
    if (!this.active) return;
    this.ctx.clearRect(0, 0, this.width, this.height);

    // 1. Dibujar corazoncitos que flotan suavemente hacia arriba
    this.hearts.forEach(h => {
      h.y -= h.speedY;
      h.x += h.speedX;
      h.pulse += h.pulseSpeed;

      if (h.y < -20) {
        h.y = this.height + 20;
        h.x = Math.random() * this.width;
      }

      const currentAlpha = h.alpha * (0.7 + 0.3 * Math.sin(h.pulse));
      this.drawHeart(h.x, h.y, h.size, currentAlpha);
    });

    // 2. Dibujar motas de luz sanadora
    this.motes.forEach(m => {
      m.y -= m.speedY;
      m.pulse += 0.03;
      if (m.y < -10) {
        m.y = this.height + 10;
        m.x = Math.random() * this.width;
      }

      const currentAlpha = m.alpha * (0.6 + 0.4 * Math.sin(m.pulse));
      this.ctx.beginPath();
      this.ctx.arc(m.x, m.y, m.r, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(255, 235, 220, ${currentAlpha})`;
      this.ctx.shadowBlur = 4;
      this.ctx.shadowColor = 'rgba(255, 200, 200, 0.5)';
      this.ctx.fill();
    });

    requestAnimationFrame(this.animate);
  }
}
