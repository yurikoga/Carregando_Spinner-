// Opcional: Controlar a velocidade da orbita
const ball = document.querySelector('.orbiting-ball');

function setSpeed(seconds) {
    ball.style.animationDuration = `${seconds}s`;
}

// Exemplo: Deixar o dobro de rápido após 5 segundos
// setTimeout(() => setSpeed(1.25), 5000);
