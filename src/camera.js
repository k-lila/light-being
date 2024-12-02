import * as THREE from 'three';

function sunCamera() {


    const teste = window.innerWidth > 500 ? 500 : 1000

    const fov = 45;
    const aspect = window.innerWidth / window.innerHeight;
    const near = 0.1;
    const far = 2000;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(
        0,
        0,
        teste
    );

    camera.lookAt( 0, 0, 0 );

    return camera
}

export default sunCamera