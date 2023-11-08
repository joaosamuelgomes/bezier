document.addEventListener('DOMContentLoaded', (event) => {
    const canvas = document.getElementById('bezierCanvas');
    const ctx = canvas.getContext('2d');
    let points = [];
    let draggingPoint = null;

    function drawPoint(point, color = 'black') {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(point.x, point.y, 5, 0, Math.PI * 2);
        ctx.fill();
    }

    function drawLine(start, end, color = 'blue') {
        ctx.strokeStyle = color;
        ctx.beginPath();
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);
        ctx.stroke();
    }

    function drawQuadraticBezier(start, control, end, color = 'green') {
        ctx.strokeStyle = color;
        ctx.beginPath();
        ctx.moveTo(start.x, start.y);
        ctx.quadraticCurveTo(control.x, control.y, end.x, end.y);
        ctx.stroke();
    }
    
    function drawCubicBezier(start, control1, control2, end, color = 'red') {
        ctx.strokeStyle = color;
        ctx.beginPath();
        ctx.moveTo(start.x, start.y);
        ctx.bezierCurveTo(control1.x, control1.y, control2.x, control2.y, end.x, end.y);
        ctx.stroke();
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    
        // Desenhar a linha reta
        if (points.length >= 2) {
            drawLine(points[0], points[1]);
        }
    
        // Desenhar a curva quadrática de Bézier com o terceiro ponto como controle
        if (points.length >= 3) {
            drawQuadraticBezier(points[0], points[1], points[2]);
        }
    
        // Desenhar a curva cúbica de Bézier com o terceiro e quarto pontos como controles
        if (points.length === 4) {
            drawCubicBezier(points[0], points[1], points[2], points[3]);
        }
    
        // Desenhar os pontos
        points.forEach(point => {
            drawPoint(point);
        });
    }

    function isNearPoint(x, y, target, radius = 5) {
        return Math.sqrt((target.x - x) ** 2 + (target.y - y) ** 2) < radius;
    }

    canvas.addEventListener('mousedown', (event) => {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        
        draggingPoint = points.find(point => isNearPoint(x, y, point));

        if (!draggingPoint && points.length < 4) {
            const newPoint = { x, y };
            points.push(newPoint);
            draggingPoint = newPoint;
        }
        
        draw();
    });

    canvas.addEventListener('mousemove', (event) => {
        if (draggingPoint) {
            const rect = canvas.getBoundingClientRect();
            draggingPoint.x = event.clientX - rect.left;
            draggingPoint.y = event.clientY - rect.top;
            draw();
        }
    });

    canvas.addEventListener('mouseup', (event) => {
        draggingPoint = null;
    });

    canvas.addEventListener('mouseleave', (event) => {
        draggingPoint = null;
    });

    draw();
});
