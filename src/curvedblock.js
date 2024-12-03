import * as THREE from 'three';

export function curvedBlock(radius, size, depth, angleA, angleB) {
    const rad = (Math.PI * 2) / 360
    const radA = rad * angleA
    const radB = rad * angleB
    const curved_shape = new THREE.Shape();
    curved_shape.absarc(0, 0, radius, radB, radA, true);
    curved_shape.absarc(0, 0, radius + size, radA, radB, false);
    const extrudeSettings = {
        steps: 1,
        depth: depth,
        curveSegments: 2
    };
    const geometry = new THREE.ExtrudeGeometry( curved_shape, extrudeSettings );
    geometry.translate(0, 0, -depth / 2);

    const rand = Math.random()
    const opacity = rand < 0.2 ? 0.2 : rand

    const material = new THREE.MeshLambertMaterial({
        color: 'rgba(0, 0, 0)',
        emissive: `rgba(100, ${Math.floor(rand * 255)}, 100)`,
        emissiveIntensity: 0.3,
        transparent: true,
        opacity: opacity
    });


    const mesh = new THREE.Mesh(geometry, material)
    mesh.userData.angles = [angleA, angleB]
    return mesh
}

export default curvedBlock