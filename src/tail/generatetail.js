import buildTailRing from "./buildtailring.js"

function generateTail(numRings=25, numSides=5, radius=250) {
    let tail = []
    for (let i=1; i<numRings; i++) {
        const ring = buildTailRing(radius - (i * 3), numSides, i)
        ring.forEach((r, j) => {
            r.position.z -= 150 *(i + 1)
        })
        tail.push(ring)
    }
    return tail
}

export default generateTail