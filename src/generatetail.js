import buildTailRing from "./buildtailring.js"

function generateTail(numRings, radius) {
    let tail = []
    for (let i=1; i<numRings; i++) {
        const ring = buildTailRing(radius - (i * 3), 7, i)
        ring.forEach((r, j) => {
            r.position.z -= 60 *(i + 1)
        })
        tail.push(ring)
    }
    return tail
}

export default generateTail