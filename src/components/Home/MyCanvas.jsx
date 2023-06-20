import React, { useEffect, useRef, useState } from 'react';


function MyCanvas() {
    const [isWindowWide, setIsWindowWide] = useState(window.innerWidth > 768);
    const canvasRef = useRef(null);

    const images = [];
    const imagePaths = ["/js.png", "/react.png", "/css.png", "/html.png"];

    imagePaths.forEach((path) => {
        const img = new Image();
        img.src = path;
        images.push(img);
    });

    useEffect(() => {
        // Handler for window resize
        const handleResize = () => {
          setIsWindowWide(window.innerWidth > 768);
        };
        
        // Event listener for window resize
        window.addEventListener("resize", handleResize);
        
        // Cleanup function
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);
    

    useEffect(() => {
         // If the window is not wide enough, don't run the effect
         if (!isWindowWide) {
            return;
        }

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        
        let particles = [];
        let spawnTimer = 0;
        let type = 0;
        const spawnInterval = 40;
        const gravityStrength = 10;
        let time = 0;
        let mouse = { x: canvas.width / 2, y: canvas.height / 2, out: false };

        const resize = () => {
            canvas.width = canvas.clientWidth;
            canvas.height = canvas.clientHeight;
        };

        const mouseMove = (e) => {
            const rect = canvas.getBoundingClientRect();
            mouse = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top,
                out: false
            };
        };

        const mouseOut = () => {
            mouse.out = true;
        };

        const newParticle = () => {
            type = type ? 0 : 1;
            particles.push({
              x: mouse.x,
              y: mouse.y,
              xv: type ? 18 * Math.random() - 9 : 24 * Math.random() - 12,
              yv: type ? 18 * Math.random() - 9 : 24 * Math.random() - 12,
              c: type ? 'rgb(255,' + ((200 * Math.random()) | 0) + ',' + ((80 * Math.random()) | 0) + ')' : 'rgb(255,255,255)',
              s: type ? 30 + 10 * Math.random() : 1,
              a: 1,
              img: images[Math.floor(Math.random() * images.length)]  // Elige una imagen al azar
            });
          };
          
          

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particles.length; i++) {
              let p = particles[i];
              ctx.globalAlpha = p.a;
              ctx.drawImage(p.img, p.x, p.y, p.s, p.s);   // Dibuja la imagen en lugar del círculo
            }
          };

        const calculate = (newTime) => {
            const dt = newTime - time;
            time = newTime;
            
            let particleCounter = 0;
            if (!mouse.out) {
                spawnTimer += (dt < 100) ? dt : 100;
                for (; spawnTimer > 0; spawnTimer -= spawnInterval) {
                    if (particleCounter++ >= 5) break; // Aquí se genera un máximo de 5 partículas por fotograma
                    newParticle();
                  }
            }

            const particleOverflow = particles.length - 700;
            if (particleOverflow > 0) {
                particles.splice(0, particleOverflow);
            }

            for (let i = 0; i < particles.length; i++) {
                let p = particles[i];
                if (!mouse.out) {
                    const x = mouse.x - p.x;
                    const y = mouse.y - p.y;
let a = x * x + y * y;
a = a > 100 ? gravityStrength / a : gravityStrength / 100;
p.xv = (p.xv + a * x) * 0.99;
p.yv = (p.yv + a * y) * 0.99;
}
p.x += p.xv;
p.y += p.yv;
p.a *= 0.99;
}
};

const loop = (newTime) => {
draw();
calculate(newTime);
requestAnimationFrame(loop);
};

canvas.addEventListener('mousemove', mouseMove);
canvas.addEventListener('mouseout', mouseOut);
window.addEventListener('resize', resize);
resize();
requestAnimationFrame(loop);

// Cleanup function
return () => {
canvas.removeEventListener('mousemove', mouseMove);
canvas.removeEventListener('mouseout', mouseOut);
window.removeEventListener('resize', resize);
};
}, []);

return <canvas ref={canvasRef} style={{ position: "absolute", width: "100%", height: "100%", }} />;
}

export default MyCanvas;

