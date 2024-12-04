import buildRing from "./buildring.js";


function exponentialGrowth(x, maxX, maxY) {
    const k = 0.005;
    return maxY * (Math.exp(-k * x) - Math.exp(-k * maxX)) / (1 - Math.exp(-k * maxX));
}

function generateBody(numRings, sunDiameter) {
    const diameter_list = []
    for (let i = 0; i < numRings; i++) {
        diameter_list.push(sunDiameter + (i * 8))
    }
    let divisor = 2
    const ringspace = diameter_list.map((m, i) => {
        if (i % 2 == 0) {
            divisor += 0.5
        }
        return buildRing(m, 10, Math.floor(divisor), exponentialGrowth(i, numRings, diameter_list.length) + 1)
    })
    return ringspace
}

export default generateBody