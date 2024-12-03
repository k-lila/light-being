import buildRing from "./buildring.js";


function exponentialGrowth(x, maxX, maxY) {
    const k = 0.005;
    return maxY * (Math.exp(-k * x) - Math.exp(-k * maxX)) / (1 - Math.exp(-k * maxX));
}



function buildSpace(numRings, sunDiameter) {
    let _num = 0
    const diameter_list = []
    for (let i = 0; i < numRings; i++) {
        diameter_list.push(sunDiameter + (i * 8))
    }
    const ringspace = diameter_list.map((m, i) => {
        return buildRing(m, 8, i + 10, exponentialGrowth(i, numRings, diameter_list.length) + 1)
    })

    return ringspace
}

export default buildSpace