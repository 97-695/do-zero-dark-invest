import { useEffect, useRef } from "react";

export const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let animationFrameId: number;
    let time = 0;

    const drawCandle = (x: number, y: number, height: number, isGreen: boolean) => {
      ctx.fillStyle = isGreen 
        ? "rgba(16, 185, 129, 0.3)" 
        : "rgba(239, 68, 68, 0.3)";
      ctx.fillRect(x - 8, y - height, 16, height);
      
      ctx.strokeStyle = isGreen 
        ? "rgba(16, 185, 129, 0.6)" 
        : "rgba(239, 68, 68, 0.6)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(x, y - height - 10);
      ctx.lineTo(x, y + 10);
      ctx.stroke();
    };

    const drawLine = () => {
      ctx.strokeStyle = "rgba(16, 185, 129, 0.2)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      
      const points = 50;
      for (let i = 0; i < points; i++) {
        const x = (canvas.width / points) * i;
        const y = canvas.height / 2 + Math.sin(i * 0.2 + time) * 50 + Math.cos(i * 0.1 - time * 0.5) * 30;
        
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw animated line
      drawLine();
      
      // Draw candlesticks
      const candleSpacing = 80;
      const numCandles = Math.floor(canvas.width / candleSpacing);
      
      for (let i = 0; i < numCandles; i++) {
        const x = i * candleSpacing + 40;
        const baseY = canvas.height * 0.7;
        const height = 40 + Math.sin(time + i) * 20;
        const isGreen = Math.sin(time * 0.5 + i) > 0;
        
        drawCandle(x, baseY, height, isGreen);
      }
      
      // Floating particles
      for (let i = 0; i < 20; i++) {
        const x = (i * canvas.width / 20 + time * 20) % canvas.width;
        const y = 100 + Math.sin(time + i) * 50;
        
        ctx.fillStyle = "rgba(253, 224, 71, 0.3)";
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, Math.PI * 2);
        ctx.fill();
      }
      
      time += 0.01;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-30 pointer-events-none"
    />
  );
};
