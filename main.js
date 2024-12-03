import * as THREE from 'three';
import customCamera from './src/camera.js';
import generateBody from './src/generatebody.js';

let lastFrameTime = performance.now();
let frameCount = 0;
let fpsSum = 0;

function logFPS() {
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

function main() {
    const canvas = document.querySelector('#sol');
    const renderer = new THREE.WebGLRenderer({
        context: canvas.getContext('webgl2'),
        antialias: false,
        canvas
    });
    renderer.setSize( window.innerWidth, window.innerHeight );


    const camera = customCamera(0, -1500, 1000);
    const scene = new THREE.Scene();

    const body = generateBody(75, 100);
    body.forEach((ring, i) => {
        ring.forEach((piece, j) => {
            scene.add(piece);
        });
    });

    renderer.render(scene, camera);

    let counter = 0;
    const waveSpeed = 0.025; 
    const waveOffset = 0.06;
    const waveAmplitude = 1;
    let angle = 0; // Ângulo inicial em radianos
    const orbitRadius = 2000; // Distância da câmera ao centro
    const orbitSpeed = 0.001; // Velocidade de rotação (radianos por quadro)
    let cameraZToggler = false
    function animate() {
        body.forEach((ring, i) => {
            const wavePhase = Math.sin(counter * waveSpeed - i * waveOffset) * waveAmplitude;
            ring.forEach((piece, j) => {               
                piece.position.z += wavePhase;
                piece.material.emissiveIntensity += wavePhase * 0.01;

            });
        });
        angle += orbitSpeed;
        const x = orbitRadius * Math.cos(angle);
        const y = orbitRadius * Math.sin(angle);
        camera.position.set(x, y, camera.position.z);
        // camera.position.z -= 1
        if (cameraZToggler) {
            camera.position.z -= 1
            if (camera.position.z < -4000) {
                cameraZToggler = !cameraZToggler
            }
        } else {
            camera.position.z += 1
            if (camera.position.z > 2000) {
                cameraZToggler = !cameraZToggler
            }
        }
        console.log(camera.position.z)
        camera.lookAt(0, 0, 0)

        counter++;
        renderer.render(scene, camera);
        // logFPS();
        requestAnimationFrame(animate);
    }
    animate();
}

main();
