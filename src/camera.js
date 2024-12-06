import * as THREE from 'three';

function customCamera(x, y, z) {
    const fov = 100;
    const aspect = window.innerWidth / window.innerHeight;
    const near = 0.1;
    const far = 6000;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(
        x,
        y,
        z
    );
    camera.lookAt( 0, 0, 0 );

    return camera
}

export default customCamera;