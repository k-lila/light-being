import buildRing from "./buildring.js";

function ringSpace(numRings, sunDiameter) {
    let _num = 0
    const diameter_list = []
    for (let i = 0; i < numRings; i++) {
        diameter_list.push(sunDiameter + (i * 5))
    }
    const ringspace = diameter_list.map((m, i) => {
        return buildRing(m, 3, i + 10)
    })

    return ringspace
}

export default ringSpace