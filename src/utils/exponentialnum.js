function exponentialNum(x, maxX, maxY, k) {
    return maxY * (Math.exp(-k * x) - Math.exp(-k * maxX)) / (1 - Math.exp(-k * maxX));
}

export default exponentialNum