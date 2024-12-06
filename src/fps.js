let lastFrameTime = performance.now();
let frameCount = 0;
let fpsSum = 0;

function FPS() {
    const now = performance.now();
    const delta = now - lastFrameTime;
    lastFrameTime = now;
    const fps = 1000 / delta;
    fpsSum += fps;
    frameCount++;

    if (frameCount >= 60) {
        const averageFPS = fpsSum / frameCount;
        console.log(`FPS Médio: ${averageFPS.toFixed(2)}`);
        fpsSum = 0;
        frameCount = 0;
    }
}

export default FPS