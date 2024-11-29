import * as THREE from 'three';
import ringSpace from './ringspace.js';


function main() {


    const canvas = document.querySelector('#sol');

    const renderer = new THREE.WebGLRenderer({antialias: true, canvas});
    renderer.setSize( window.innerWidth, window.innerHeight );

    const fov = 45;
    const aspect = window.innerWidth / window.innerHeight;
    const near = 0.1;
    const far = 1000;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set( 0, 0, 500 );
    camera.lookAt( 0, 0, 0 );


    
    const scene = new THREE.Scene();

    const space = ringSpace()

    space.forEach((e) => {
        e.forEach((ee) => {
            scene.add(ee)
        })
    })


    renderer.render(scene, camera);


    let toggle = true
    let counter = 1

    function animate() {
        space.forEach((e, i) => {
            e.forEach((ee) => {
                const teste = `0.00${i}`
                if (toggle) {
                    ee.rotation.x += Number(teste)
                    // ee.rotation.y += Number(teste) / 20
                    // ee.rotation.z += Number(teste) * 3
                } else {
                    ee.rotation.x -= Number(teste)
                    ee.rotation.y -= Number(teste)
                    ee.rotation.z -= Number(teste)
                }
            })
        })
        if (toggle) {
            counter += 1
        } else {
            counter -= 1
        }
        if (counter == 500) {
            toggle = false
        } else if (counter == 0) {
            toggle = true
        }
        renderer.render( scene, camera );
        requestAnimationFrame(animate);
    }
    animate()

}

main()
