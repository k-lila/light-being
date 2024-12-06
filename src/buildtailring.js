import * as THREE from 'three';
import tailBone from './tailbone.js';
import exponentialNum from './exponentialnum.js';

function buildTailRing(radius, sides, tailNum) {
    const rad = (Math.PI * 2) / 360
    const max_size = radius * 2 * Math.sin(Math.PI / sides)
    const bone_list = []
    for (let i=0; i < sides; i++) {
        const rand = Math.random()
        const multiplier = rand > 0.5 ? rand : 0.5
        const height = exponentialNum(tailNum, 1000, 350, 0.07) + (Math.random() * 250)
        const bone = tailBone(
            max_size * multiplier,
            height,
            5
        )
        bone_list.push(bone)
    }
    const tailring = bone_list.map((bone, i) => {
        bone.geometry.translate(0, radius, 0)
        const angleZ = (rad * (360 / sides) * i);
        const rotationZMatrix = new THREE.Matrix4().makeRotationZ(angleZ);
        const transformMatrix = new THREE.Matrix4();
        transformMatrix.multiply(rotationZMatrix)
        bone.applyMatrix4(transformMatrix);
        return bone;
    });
    return tailring

}

export default buildTailRing