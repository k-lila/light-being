import buildRing from "./buildring.js";

function ringSpace(numRings, sunDiameter) {
    let _num = 0
    const diameter_list = []
    for (let i = 0; i < numRings; i++) {
        diameter_list.push(sunDiameter + (i * 4))
    }
    const ringspace = diameter_list.map((m, i) => {
        return buildRing(m, 4, i + 10)
    })

    return ringspace
}

export default ringSpace