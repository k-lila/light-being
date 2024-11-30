import * as THREE from 'three';
import ringSpace from './ringspace.js';

function main() {
    const canvas = document.querySelector('#sol');
    const renderer = new THREE.WebGLRenderer({antialias: true, canvas});
    renderer.setSize( window.innerWidth, window.innerHeight );

    const aspect = window.innerWidth / window.innerHeight;
    const frustumSize = 500;
    const camera = new THREE.OrthographicCamera(
        -frustumSize * aspect / 2,
        frustumSize * aspect / 2,
        frustumSize / 2,
        -frustumSize / 2,
        0.1,
        5000
    );
    camera.position.set(50, 50, 1000);
    camera.lookAt(50, -150, 0);

    const scene = new THREE.Scene();
    const space = ringSpace();
    space.forEach((ring) => {
        ring.forEach((piece) => {
            scene.add(piece)
        })
    })
    renderer.render(scene, camera);

    let lastTime = Date.now();
    let counter = 0
    const delay = 10;
    let toggler = true
    function animate() {
        const now = Date.now()
        space.forEach((ring, i) => {
            if (i % 2 == 0) {
                if (toggler) {
                    ring.forEach((piece) => {
                        piece.rotation.z += 0.0002
                    })
                }
            } else {
                if (!toggler) {
                    ring.forEach((piece) => {
                        piece.rotation.z -= 0.0002
                    })
                }
            }
        })
        if (counter > 250) {
            counter = 0
            toggler = Math.random() > 0.5
        }
        if (now - lastTime >= delay) {
            counter += 1
            lastTime = now
        }
        renderer.render( scene, camera );
        requestAnimationFrame(animate);
    }
    animate();
}

main();
