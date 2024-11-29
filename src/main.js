import * as THREE from 'three';
import ringSpace from './ringspace.js';
import vitor from './ringGen_v.js';


function main() {


    const canvas = document.querySelector('#sol');

    const renderer = new THREE.WebGLRenderer({antialias: true, canvas});
    renderer.setSize( window.innerWidth, window.innerHeight );

    const fov = 100;
    const aspect = window.innerWidth / window.innerHeight;
    const near = 0.1;
    const far = 2000;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set( 0, 0, 1000 );
    camera.lookAt( 0, 0, 0 );


    
    const scene = new THREE.Scene();

    const space = vitor();
    
    space.forEach((e) => {
        scene.add(e);
    });


    // space.forEach((e) => {
    //     e.forEach((ee) => {
    //         scene.add(ee)
    //     })
    // })


    renderer.render(scene, camera);

    let lastTime = Date.now();
    let counter = 0
    const delay = 10;

    function animate() {
        const time = Date.now()
        space.forEach((e, i) => {
            if (time - lastTime >= delay) {
                if (i == counter) {
                    e.rotation.z += 0.1
                }
            }
            e.rotation.x += 0.001
            e.rotation.y += 0.001 * i * 0.005
            e.rotation.z += 0.001
        });
        if (time - lastTime >= delay) {
            counter += 1
            lastTime = time
        }
        if (counter > space.length + 100) {
            counter = 0
        }
        renderer.render( scene, camera );
        requestAnimationFrame(animate);
    }
    animate();

}

main();
