import * as THREE from 'three';
import customCamera from './src/camera.js';
import generateBody from './src/body/generatebody.js';
import FPS from './src/utils/fps.js';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';



function main() {
    const rad = (Math.PI * 2) / 360
    const canvas = document.querySelector('#sol');
    const renderer = new THREE.WebGLRenderer({
        antialias: true,
        canvas
    });
    renderer.setSize( window.innerWidth, window.innerHeight );
    const camera = customCamera(1500, 0, 0);
    // camera.position.z = 1000
    camera.lookAt(0, 0, 0)

    // const camera = customCamera();

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog( 0x000000, 1, 6000 );

    const body = generateBody(100, 100, 1);
    body.forEach((ring, i) => {
        ring.forEach((piece, j) => {
            // piece.position.x -= 200
            // piece.position.y += window.innerHeight
            scene.add(piece);
        });
    });

    renderer.render(scene, camera);

    const controls = new OrbitControls( camera, renderer.domElement );
	controls.target.set( 0, 1, 0 );
	controls.update();

    function animate() {
        body.forEach((ring, i) => {
            ring.forEach((piece, j) => {
                piece.material.uniforms.uTime.value += 1;
            });
        });

        // cameraAngle += cameraOrbitSpeed;
        // const x = cameraOrbitRadius * Math.cos(cameraAngle);
        // const y = cameraOrbitRadius * Math.sin(cameraAngle);
        // const z = cameraOrbitRadius * Math.sin(cameraAngle);
        // camera.position.set(x, y, z);
        // camera.lookAt(0, 0, 0)


        renderer.render(scene, camera);
        FPS();
        requestAnimationFrame(animate);
    }
    animate();
}

main();
