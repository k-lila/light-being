import * as THREE from 'three';
import sunCamera from './src/camera.js';
import buildSpace from './src/buildspace.js';

function main() {
    const canvas = document.querySelector('#sol');
    const renderer = new THREE.WebGLRenderer({antialias: true, canvas});
    renderer.setSize( window.innerWidth, window.innerHeight );

    const camera = sunCamera(0, -1500, 1000);
    const scene = new THREE.Scene();

    const space = buildSpace(75, 150);
    space.forEach((ring, i) => {
        ring.forEach((piece, j) => {
            scene.add(piece);
        });
    });

    const sphereGeometry = new THREE.SphereGeometry(20, 16, 16); 
    const sphereMaterial = new THREE.MeshBasicMaterial({ color: 0xffaaaa });
    const lightSphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    lightSphere.position.set(0, 0, 150);
    scene.add(lightSphere);

    renderer.render(scene, camera);

    let counter = 0
    function animate() {
        const waveSpeed = 0.025; 
        const waveOffset = 0.06;
        const waveAmplitude = 1;
        space.forEach((ring, i) => {
            const even = i % 2 == 0
            const wavePhase = Math.sin(counter * waveSpeed - i * waveOffset) * waveAmplitude;
            ring.forEach((piece, j) => {                
                piece.position.z += wavePhase
                piece.material.emissiveIntensity += wavePhase * 0.01
                if (even) {
                    piece.rotation.z += 0.001
                } else {
                    piece.rotation.z -= 0.001
                }
            });
        });
        counter++;

        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    }
    animate();
}

main();
