import * as THREE from 'three';

function sunCamera() {

    const fov = 75;
    const aspect = window.innerWidth / window.innerHeight;
    const near = 0.1;
    const far = 2000;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(
        100,
        -200,
        500
    );

    camera.lookAt( 100, -200, 0 );

    return camera
}

export default sunCamera