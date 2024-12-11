import * as THREE from 'three';
import customMaterial from '../custommaterial.js';

function tailBone(width, height, depth) {
    const randA = (Math.random() * 5) / 10
    const randB = (Math.random() * 5) / 10
    const rectangle_shape = new THREE.Shape();
    rectangle_shape.moveTo(0, 0);
    rectangle_shape.lineTo(width, 0);
    rectangle_shape.lineTo(width, (height * randA));
    rectangle_shape.lineTo(width / 1.5, height);
    rectangle_shape.lineTo(width / 2.5, height);
    rectangle_shape.lineTo(0, (height * randB));
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