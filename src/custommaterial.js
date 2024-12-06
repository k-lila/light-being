import * as THREE from 'three';

function customMaterial() {
    const rand = Math.random()
    const opacity = rand < 0.2 ? 0.2 : rand
    const material = new THREE.MeshLambertMaterial({
        color: 'rgba(0, 0, 0)',
        emissive: `rgba(${Math.floor(rand * 155) + 100}, ${Math.floor(rand * 155) + 100}, ${Math.floor(rand * 155) + 100})`,
        emissiveIntensity: 0.3,
        transparent: true,
        opacity: opacity
    });
    return material
}

export default customMaterial