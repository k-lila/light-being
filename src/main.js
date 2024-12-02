import * as THREE from 'three';
import ringSpace from './ringspace.js';
import sunCamera from './camera.js';

function main() {
    const canvas = document.querySelector('#sol');
    const renderer = new THREE.WebGLRenderer({antialias: true, canvas});
    renderer.setSize( window.innerWidth, window.innerHeight );

    const camera = sunCamera()
    const scene = new THREE.Scene();
    const space = ringSpace(150, 50);
    space.forEach((ring, i) => {
        ring.forEach((piece, j) => {
            scene.add(piece)
        })
    })


    const ambientLight = new THREE.AmbientLight(0x404040, 100);
    scene.add(ambientLight);


    renderer.render(scene, camera);

    let counter = 0
    function animate() {
        const waveSpeed = 0.01; 
        const waveOffset = 0.1;
        const waveAmplitude = 0.075;

        space.forEach((ring, i) => {
            const rand = Math.random()
            const minus = i % 2 == 0 ? 1 : -1
            const wavePhase = Math.sin(counter * waveSpeed - i * waveOffset) * waveAmplitude;
            ring.forEach((piece, j) => {
                piece.position.y += wavePhase
                piece.rotation.z -= 0.0001
            });
        });

        counter++;
        
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    }
    animate();
}

main();
