import * as THREE from 'three';

const vertexShader = `
    varying vec3 vPosition;
    uniform vec3 uReferencePosition;

    uniform float uTime;

    void main() {
        vec3 modifiedPosition = position;

        float distance = length(modifiedPosition - uReferencePosition);

        // modifiedPosition.z += sin(uTime * 0.05 + distance * 0.01) * 10.0; 

        vPosition = modifiedPosition;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(modifiedPosition, 1.0);
    }
`;

export const fragmentShader = `
    uniform vec3 uReferencePosition;
    varying vec3 vPosition;
    uniform float randNum;

    void main() {
        float distance = length(vPosition - uReferencePosition);
        float randomSubtraction = mix(0.1, 0.6, randNum);
        distance -= distance * randomSubtraction;
        float intensity = smoothstep(2000.0, 0.0, distance);
        vec3 emissiveColor = vec3(intensity * 0.8, intensity * 0.8, intensity * 0.8);
        gl_FragColor = vec4(emissiveColor, 1.0);
    }
`;

function customMaterial() {
    const referencePosition = new THREE.Vector3(0, 0, 0);

    const material = new THREE.ShaderMaterial({
        vertexShader,
        fragmentShader,
        uniforms: {
            uReferencePosition: { value: referencePosition },
            randNum: { value: Math.random() },
            uTime: {value: 0.0}
        }
    });
    return material
}

export default customMaterial