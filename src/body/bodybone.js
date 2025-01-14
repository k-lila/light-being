import * as THREE from 'three';
import customMaterial from '../material/custommaterial.js';

function bodyBone(radius, size, depth, angleA, angleB) {
    const rad = (Math.PI * 2) / 360;
    const radA = rad * angleA;
    const radB = rad * angleB;
    const curved_shape = new THREE.Shape();
    curved_shape.absarc(0, 0, radius, radB, radA, true);
    curved_shape.absarc(0, 0, radius + size, radA, radB, false);
    const extrudeSettings = {
        steps: 1,
        depth: depth,
        curveSegments: 16
    };
    const geometry = new THREE.ExtrudeGeometry( curved_shape, extrudeSettings );
    const material = customMaterial();
    return new THREE.Mesh(geometry, material);
}

export default bodyBone