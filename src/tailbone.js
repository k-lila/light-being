import * as THREE from 'three';
import customMaterial from './custommaterial.js';

function tailBone(width, height, depth) {
    const rectangle_shape = new THREE.Shape();
    rectangle_shape.moveTo(0, 0);
    rectangle_shape.lineTo(width, 0);
    rectangle_shape.lineTo(width, height);
    rectangle_shape.lineTo(0, height);
    rectangle_shape.lineTo(0, 0);
    const extrudeSettings = {
        steps: 1,
        depth: depth,
        curveSegments: 2
    };
    const geometry = new THREE.ExtrudeGeometry( rectangle_shape, extrudeSettings );
    geometry.translate(-width / 2, 0, 0)
    const material = customMaterial()
    return new THREE.Mesh(geometry, material)
}

export default tailBone