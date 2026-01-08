// 1. Pehle Images load karein (Inhe code ke shuruat mein likhein)
const playerImg = new Image();
playerImg.src = 'https://cdn-icons-png.flaticon.com/512/1079/1079201.png'; // Blue Spaceship

const enemyImg = new Image();
enemyImg.src = 'https://cdn-icons-png.flaticon.com/512/573/573030.png'; // Red Asteroid

// 2. Player ko draw karne ka naya tarika (animate function ke andar)
function drawPlayer() {
    ctx.save();
    // Shadow aur Glow effect
    ctx.shadowBlur = 20;
    ctx.shadowColor = '#00d4ff';
    // Image draw karna (mouse center mein rahe isliye -15 kiya hai)
    ctx.drawImage(playerImg, mouse.x - 20, mouse.y - 20, 40, 40);
    ctx.restore();
}

// 3. Enemy class ke andar draw() function badal dein
class Enemy {
    // ... baaki code wahi rahega ...
    draw() {
        ctx.save();
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#ff3333';
        // Red asteroid image
        ctx.drawImage(enemyImg, this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
        ctx.restore();
    }
}

