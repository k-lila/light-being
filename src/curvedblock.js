import * as THREE from 'three';

export function curvedBlock(radius, size, angleA, angleB) {
    const rad = (Math.PI * 2) / 360
    const radA = rad * angleA
    const radB = rad * angleB

    const curved_shape = new THREE.Shape();
    curved_shape.absarc(0, 0, radius, radB, radA, true);
    curved_shape.absarc(0, 0, radius + size, radA, radB, false);

    const extrudeSettings = {
        steps: 1,
        depth: 10,
        curveSegments: 4
    };

    const geometry = new THREE.ExtrudeGeometry( curved_shape, extrudeSettings );

    const material = new THREE.MeshNormalMaterial()

    material.transparent = true
    material.opacity = 0.5

    return new THREE.Mesh( geometry, material )
}

export default curvedBlock