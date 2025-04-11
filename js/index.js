let mouseX = 0, mouseY = 0;
let trailX = 0, trailY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.pageX;
    mouseY = e.pageY;
});

function animateCursor() {
    const speed = 0.5;
    trailX += (mouseX - trailX) * speed;
    trailY += (mouseY - trailY) * speed;
    
    const trail = document.querySelector('.mouse-trail');
    trail.style.left = `${trailX}px`;
    trail.style.top = `${trailY}px`;
    
    requestAnimationFrame(animateCursor);
}

animateCursor();