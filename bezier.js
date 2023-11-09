document.addEventListener('DOMContentLoaded', (event) => {
    const canvas = document.getElementById('bezierCanvas');
    const ctx = canvas.getContext('2d');
    let points = [];
    let draggingPoint = null;

    /* 
    Esta função desenha um ponto no canvas. 
    O ponto é representado por um círculo preenchido com o centro nas coordenadas (point.x, point.y) e um raio fixo de 5 pixels.
    Matematicamente, isso é representado pela equação: (x - point.x)² + (y - point.y)² = raio².
    */ 
    function drawPoint(point, color = 'black') {
        ctx.fillStyle = color;
        ctx.beginPath();
        ctx.arc(point.x, point.y, 5, 0, Math.PI * 2);
        ctx.fill();
    }

    /*
    Esta função desenha uma linha reta no canvas.
    A linha começa no ponto start e termina no ponto end, com uma cor especificada pelo parâmetro color ou azul por padrão.
    A equação matemática de uma linha reta entre dois pontos (x1, y1) e (x2, y2) pode ser expressa como y - y1 = ((y2 - y1) / (x2 - x1)) * (x - x1).
    */
    function drawLine(start, end, color = 'blue') {
        ctx.strokeStyle = color;
        ctx.beginPath();
        ctx.moveTo(start.x, start.y);
        ctx.lineTo(end.x, end.y);
        ctx.stroke();
    }

    /*
    Esta função desenha uma curva de Bézier quadrática.
    A curva começa no ponto start, passa pelo ponto de controle control, e termina no ponto end. A cor da curva é determinada pelo parâmetro color ou verde por padrão.
    A curva de Bézier quadrática é definida pela equação paramétrica:
    B(t) = (1 - t)² * start + 2 * (1 - t) * t * control + t² * end, onde t varia de 0 a 1.
    */
    function drawQuadraticBezier(start, control, end, color = 'green') {
        ctx.strokeStyle = color;
        ctx.beginPath();
        ctx.moveTo(start.x, start.y);
        ctx.quadraticCurveTo(control.x, control.y, end.x, end.y);
        ctx.stroke();
    }

    /*
    Desenha uma curva de Bézier cúbica no canvas.
    A curva começa no ponto start, é guiada pelos pontos de controle control1 e control2, e termina no ponto end. A cor é definida pelo parâmetro color ou vermelho por padrão.
    A curva de Bézier cúbica é dada pela equação:
    B(t) = (1 - t)³ * start + 3 * (1 - t)² * t * control1 + 3 * (1 - t) * t² * control2 + t³ * end.
    */
    function drawCubicBezier(start, control1, control2, end, color = 'red') {
        ctx.strokeStyle = color;
        ctx.beginPath();
        ctx.moveTo(start.x, start.y);
        ctx.bezierCurveTo(control1.x, control1.y, control2.x, control2.y, end.x, end.y);
        ctx.stroke();
    }

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    
        if (points.length >= 2) {
            drawLine(points[0], points[1]);
        }
    
        if (points.length >= 3) {
            drawQuadraticBezier(points[0], points[1], points[2]);
        }
    
        if (points.length === 4) {
            drawCubicBezier(points[0], points[1], points[2], points[3]);
        }
    
        points.forEach(point => {
            drawPoint(point);
        });
    }

    /*
    Esta função verifica se um ponto com coordenadas (x, y) está próximo de um ponto alvo target dentro de um determinado raio.
    É uma verificação de proximidade que usa o teorema de Pitágoras para calcular a distância entre dois pontos.
    Matematicamente, isso é verificado pela desigualdade (x - target.x)² + (y - target.y)² < raio².
    */
    function isNearPoint(x, y, target, radius = 5) {
        return Math.sqrt((target.x - x) ** 2 + (target.y - y) ** 2) < radius;
    }

    canvas.addEventListener('mousedown', (event) => {
        const rect = canvas.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        
        /*
        Atribui o ponto a ser arrastado caso o usuário esteja clicando proximo a um ponto definido.
        */
        draggingPoint = points.find(point => isNearPoint(x, y, point));

        /*
        Permite adicionar novos pontos caso o usuário esteja clicando em areas vazias do canvas e o numero de pontos for menor que 4.
        */
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

document.getElementById('reloadButton').addEventListener('click', function() {
    window.location.reload();
});
