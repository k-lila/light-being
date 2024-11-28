import * as THREE from 'three';

function curvedBlock(radius, startAngle, endAngle) {
    const shape = new THREE.Shape();
    shape.absarc(0, 0, radius, endAngle, startAngle, true);
    shape.absarc(0, 0, radius -2, startAngle, endAngle, false);
    const extrudeSettings = {
        steps: 1,
        depth: 2,
        curveSegments: 64
    };
    const geometry = new THREE.ExtrudeGeometry( shape, extrudeSettings );
    const material = new THREE.MeshBasicMaterial( { color: 0xffffff, wireframe: true } );
    const mesh = new THREE.Mesh( geometry, material ) ;
    return mesh
}

export default curvedBlock