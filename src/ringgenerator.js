import curvedBlock from "./curvedblock.js"

function ringGenerator(radius, size, divisor) {
    const circumference = 2 * Math.PI * radius
    const num = (circumference / divisor) / 2
    const divisions_list = []
    let random_sum = 0     
    while (random_sum < circumference) {
        const length = (Math.random() * num) + num
        divisions_list.push(random_sum)
        random_sum += length
    }
    if (circumference - divisions_list.at(-1) > num) {
        divisions_list.push(circumference)
    } else {
        divisions_list[0] = (circumference - divisions_list.at(-1)) * -1
    }
    const angles_list = divisions_list.map((m) => {
        return (m * 360) / circumference 
    })

    const randNum = Math.random() * 360
    const randDir = Math.random() > 0.5 ? -1 : 1
    const rotate = angles_list.map((m) => {
        return m + (randNum * randDir)
    })

    const mesh_list = []
    for (let i=0; i<rotate.length - 1; i++) {
        mesh_list.push(curvedBlock(radius, size, rotate[i], rotate[i + 1] - 3))
    }
    return mesh_list
}

export default ringGenerator