import { useEffect, useRef } from 'react';
import './ParticleBackground.css';

function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    const COLORS = ['#EA4335', '#4285F4', '#34A853', '#FBBC04'];
    let W, H, mouse = { x: -999, y: -999 };
    let particles = [];
    let animationId;

    const resize = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
    };
    resize();

    class Particle {
      constructor() { this.reset(true); }
      reset(initial) {
        this.x = Math.random() * W;
        this.y = initial ? Math.random() * H : H + 20;
        this.ox = this.x;
        this.oy = this.y;
        this.vx = (Math.random() - 0.5) * 0.3;
        this.vy = -Math.random() * 0.5 - 0.1;
        this.r = Math.random() * 2.5 + 1;
        this.alpha = Math.random() * 0.5 + 0.1;
        this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
      }
      update() {
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const influenceR = 180;

        if (dist < influenceR) {
          const force = (influenceR - dist) / influenceR;
          const angle = Math.atan2(dy, dx);
          const strength = force * force * 2.8;
          this.vx -= Math.cos(angle) * strength * 0.12;
          this.vy -= Math.sin(angle) * strength * 0.12;
        }

        this.vx += (this.ox - this.x) * 0.012;
        this.vy += (this.oy - this.y) * 0.012;

        this.vx *= 0.88;
        this.vy *= 0.88;
        this.x += this.vx;
        this.y += this.vy;

        if (this.y < -20) this.reset(false);
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fillStyle = this.color + Math.round(this.alpha * 255).toString(16).padStart(2,'0');
        ctx.fill();
      }
    }

    for (let i = 0; i < 140; i++) particles.push(new Particle());

    const drawLines = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx*dx + dy*dy);
          if (d < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            const a = (1 - d / 100) * 0.12;
            ctx.strokeStyle = `rgba(255,255,255,${a})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -999;
      mouse.y = -999;
    };

    const animate = () => {
      ctx.clearRect(0, 0, W, H);
      drawLines();
      for (const p of particles) {
        p.update();
        p.draw();
      }
      animationId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} className="particle-canvas" />;
}

export default ParticleBackground;
