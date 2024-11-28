import * as THREE from 'three';
import curvedBlock from './curvedblock.js';

function main() {


    const canvas = document.querySelector('#sol');

    const renderer = new THREE.WebGLRenderer({antialias: true, canvas});
    renderer.setSize( window.innerWidth, window.innerHeight );

    const fov = 45;
    const aspect = window.innerWidth / window.innerHeight;
    const near = 0.1;
    const far = 100;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set( 0, 0, 40 );
    camera.lookAt( 0, 0, 0 );


    
    const scene = new THREE.Scene();

    const teste = curvedBlock(7, 0, Math.PI * 2)
    const teste2 = curvedBlock(10, 0, Math.PI / 2)
    const teste3 = curvedBlock(13, 0, Math.PI / 2)

    scene.add(teste);

    scene.add(teste2);

    scene.add(teste3);
    

    teste.rotation.x = 0;
    teste.rotation.y = 0;

    renderer.render(scene, camera);

    function animate() {
        teste.rotation.x += 0.01;
        teste.rotation.y += 0.01;
        teste.rotation.z += 0.01;
        teste2.rotation.x += 0.0025;
        teste2.rotation.y += 0.0025;
        teste2.rotation.z += 0.0025;
        teste3.rotation.x += 0.005;
        teste3.rotation.y += 0.005;
        teste3.rotation.z += 0.001;


        renderer.render( scene, camera );
        requestAnimationFrame(animate);
    }
    animate()

}

main()
