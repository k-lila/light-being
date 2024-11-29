import * as THREE from 'three';
import curvedBlock from './curvedblock.js';
import ringGenerator from './ringgenerator.js';


function main() {


    const canvas = document.querySelector('#sol');

    const renderer = new THREE.WebGLRenderer({antialias: true, canvas});
    renderer.setSize( window.innerWidth, window.innerHeight );

    const fov = 45;
    const aspect = window.innerWidth / window.innerHeight;
    const near = 0.1;
    const far = 1000;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set( 0, 0, 75 );
    camera.lookAt( 0, 0, 0 );


    
    const scene = new THREE.Scene();

    const mathPi = (Math.PI * 2) / 360


    const ring = ringGenerator(20, 2, 5)
    const ring2 = ringGenerator(24, 2, 3)
    const ring3 = ringGenerator(28, 2, 3)

    ring.forEach((e) => {
        scene.add(e)
    })


    ring2.forEach((e) => {
        scene.add(e)
    })
    ring3.forEach((e) => {
        scene.add(e)
    })


    renderer.render(scene, camera);



    function animate() {
        ring.forEach((e, i) => {
            e.rotation.z += 0.001
        })
        ring3.forEach((e, i) => {
            e.rotation.z -= 0.001
        })
        renderer.render( scene, camera );
        requestAnimationFrame(animate);
    }
    // animate()

}

main()
