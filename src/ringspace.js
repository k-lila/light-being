import ringGenerator from "./ringgenerator.js";

function ringSpace() {
    const sunDiameter = 10
    const numRings = 50
    let _num = 0
    const diameter_list = []
    for (let i = 0; i < numRings; i++) {
        diameter_list.push(sunDiameter + (i * 4))
    }
    const ringspace = diameter_list.map((m, i) => {
        return ringGenerator(m, 2, i + 1)
    })

    return ringspace
}

export default ringSpace