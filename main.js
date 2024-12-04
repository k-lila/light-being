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
        antialias: true,
        canvas
    });

    renderer.setSize( window.innerWidth, window.innerHeight );
    const camera = customCamera(0, -1500, 1000);

    const scene = new THREE.Scene();

    let test = 0
    const body = generateBody(125, 250);
    body.forEach((ring, i) => {
        ring.forEach((piece, j) => {
            scene.add(piece);
            test += 1
        });
    });

    console.log(test)

    renderer.render(scene, camera);

    let counter = 0;
    const waveSpeed = 0.02; 
    const waveOffset = 0.04;
    const waveAmplitude = 1;
    let cameraAngle = 0; 
    const cameraOrbitRadius = 2000;
    const cameraOrbitSpeed = 0.001; 
    let cameraZToggler = false


    function animate() {
        body.forEach((ring, i) => {
            const wavePhase = Math.sin(counter * waveSpeed - i * waveOffset) * waveAmplitude;
            ring.forEach((piece, j) => {               
                piece.position.z += wavePhase;
                piece.material.emissiveIntensity += wavePhase * 0.01;
                if (i % 2 == 0) {
                    piece.rotation.z += 0.001
                } else {
                    piece.rotation.z -= 0.001
                }
            });
        });
        cameraAngle += cameraOrbitSpeed;
        const x = cameraOrbitRadius * Math.cos(cameraAngle);
        const y = cameraOrbitRadius * Math.sin(cameraAngle);
        camera.position.set(x, y, camera.position.z);
        if (cameraZToggler) {
            camera.position.z -= 0.1
            if (camera.position.z < -4000) {
                cameraZToggler = !cameraZToggler
            }
        } else {
            camera.position.z += 0.1
            if (camera.position.z > 2000) {
                cameraZToggler = !cameraZToggler
            }
        }
        camera.lookAt(0, 0, 0)

        counter++;
        renderer.render(scene, camera);
        logFPS();
        requestAnimationFrame(animate);
    }
    animate();
}

main();
