import curvedBlock from "./curvedblock.js"

function ringGenerator(radius, size, divisor) {
    const perimeter = 2 * Math.PI * radius


    const num = (perimeter / divisor) / 2
    const divisions_list = []
    let random_sum = 0     
    while (random_sum < perimeter) {
        const length = (Math.random() * num) + num
        divisions_list.push(random_sum)
        random_sum += length
    }
    if (perimeter - divisions_list.at(-1) > num) {
        divisions_list.push(perimeter)
    } else {
        divisions_list[0] = (perimeter - divisions_list.at(-1)) * -1
    }


    const angles_list = divisions_list.map((m, i) => {
        return [(m * 360) / perimeter, ((divisions_list[i + 1] - 5) * 360) / perimeter ]
    })


    // const randNum = Math.random() * 90
    // const randDir = Math.random() > 0.5 ? -1 : 1
    // const rotate = angles_list.map((m) => {
    //     return m + (randNum * randDir)
    // })

    const mesh_list = []
    for (let i=0; i<angles_list.length - 1; i++) {
        mesh_list.push(curvedBlock(radius, size, angles_list[i][0], angles_list[i][1]))
    }
    return mesh_list
}

export default ringGenerator