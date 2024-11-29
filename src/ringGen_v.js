import curvedBlock from "./curvedblock.js"

function vitor() {
    const raio = [100, 90, 80, 70, 30, 20, 10]
    const theta_i = [0, 10, 20, 30, 40, 50, 60];
    const theta_f = [15, 20, 35, 35,35, 35, 35];
    const size = [9, 8, 7, 6, 5];       // Nova lista para os tamanhos
    const l = [];
    // const times = 2
    
    for (let i = 1; i < 1000; i++) {
        // const theta2 = theta_i[i] + theta_f[i]
        const theta1 = raio[i]*0.035


        const teste_raio = 1 * i

        const start = 0
        const end = 350

        l.push(curvedBlock(teste_raio, 0.5, start+teste_raio, end-teste_raio))

        // l.push(curvedBlock(raio[i], 9, theta_i[i], theta_i[i] + theta2));
        // l.push(curvedBlock(raio[i] - 10, size[i], theta_i[i], theta_i[i] + theta_f[i]));
    }

    // const mudadepois = r.map((m, i) => {
    //     // return curvedBlock(m[0], m[1], m[2], m[3])
    //     // console.log(m)
    //     return curvedBlock(100, 5, m-5, m)
    // })

        // const bloco = curvedBlock(1, 0.05, 0, i)    

    // const bloco = curvedBlock(1, 0.05, 0, 90)
    // console.log(bloco)





    return l

}

export default vitor