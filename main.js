import * as THREE from 'three';
import customCamera from './src/camera.js';
import generateBody from './src/generatebody.js';
import generateTail from './src/generatetail.js';
import FPS from './src/fps.js';


const rad = (Math.PI * 2) / 360


function main() {

    const canvas = document.querySelector('#sol');
    const renderer = new THREE.WebGLRenderer({
        antialias: true,
        canvas
    });
    renderer.setSize( window.innerWidth, window.innerHeight );
    const camera = customCamera(2000, -2500, 1000);
    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog( 0x000000, 0, 7000 );

    const body = generateBody(100, 250, 0.2);
    body.forEach((ring, i) => {
        ring.forEach((piece, j) => {
            scene.add(piece);
        });
    });
    const tail = generateTail(75, 250)
    tail.forEach((ring, i) => {
        ring.forEach((piece, j) => {
            piece.position.z += 200
            piece.geometry.rotateX(rad * (30 + (i / 3)) * -1)
            piece.rotation.z += rad * i
            scene.add(piece)
        })
    })

    renderer.render(scene, camera);

    let counter = 0;
    const waveSpeed = 0.02; 
    const waveOffset = 0.04;
    const waveAmplitude = 1;

    let cameraAngle = 0; 
    const cameraOrbitRadius = 2000;
    const cameraOrbitSpeed = 0.001; 
    let cameraZToggler = true    

    function animate() {
        body.forEach((ring, i) => {
            const wavePhase = Math.sin(counter * waveSpeed - i * waveOffset) * waveAmplitude;
            ring.forEach((piece, j) => {
                piece.position.z += wavePhase;
                piece.material.emissiveIntensity += wavePhase * 0.02;
                if (i % 2 == 0) {
                    piece.rotation.z += 0.001
                } else {
                    piece.rotation.z -= 0.001
                }
            });
        });
        tail.forEach((t, i) => {
            const wavePhase = Math.sin(counter * waveSpeed - i * (waveOffset * 2)) * waveAmplitude;
            t.forEach((b, j) => {
                b.material.emissiveIntensity = ((wavePhase + 1) / 2) - 0.2
                b.geometry.rotateX(rad * wavePhase * 45 * 0.01 * -1)
                b.rotation.z += 0.01 * ((wavePhase + 1) / 2)
            })
        })

        cameraAngle += cameraOrbitSpeed;
        const x = cameraOrbitRadius * Math.cos(cameraAngle);
        const y = cameraOrbitRadius * Math.sin(cameraAngle);
        camera.position.set(x, y, camera.position.z);
        if (cameraZToggler) {
            camera.position.z -= 1
            if (camera.position.z < 0) {
                camera.position.z -= 1
            }
            if (camera.position.z < -5000) {
                cameraZToggler = !cameraZToggler
            }
        } else {
            camera.position.z += 1
            if (camera.position.z < -50) {
                camera.position.z += 1.5
            }
            if (camera.position.z >2000) {
                cameraZToggler = !cameraZToggler
            }
        }
        camera.lookAt(0, 0, 0)

        counter++;
        renderer.render(scene, camera);
        // FPS();
        requestAnimationFrame(animate);
    }
    animate();
}

main();
