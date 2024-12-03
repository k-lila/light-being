import * as THREE from 'three';

function sunCamera(x, y, z) {
    const fov = 45;
    const aspect = window.innerWidth / window.innerHeight;
    const near = 0.1;
    const far = 5000;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.set(
        x,
        y,
        z
    );

    camera.lookAt( 0, 0, 0 );

    return camera
}

export default sunCamera


// function sunCamera(x, y, z) {
//     const aspect = window.innerWidth / window.innerHeight;
//     const frustumSize = 500; // Tamanho do frustum

//     // Define os limites do frustum ortográfico
//     const left = (-frustumSize * aspect) / 2;
//     const right = (frustumSize * aspect) / 2;
//     const top = frustumSize / 2;
//     const bottom = -frustumSize / 2;
//     const near = 0.1;
//     const far = 1000;

//     // Cria a câmera ortográfica
//     const camera = new THREE.OrthographicCamera(left, right, top, bottom, near, far);

//     // Define a posição da câmera
//     camera.position.set(x, y, z);

//     // Faz a câmera olhar para um ponto específico
//     camera.lookAt(0, 0, 0);

//     return camera;
// }

// export default sunCamera;