function generateNumbers (min, max){
    if (min > max){
        [max, min] = [min, max]
    }
    return new Promise(resolve => {
        const factor = max - min + 1
        const random = parseInt(Math.random() * factor) + min
        resolve(random)
    })
}
generateNumbers(1, 60)
    .then(num => num * 10)
    .then( numx10 => `The number generated was ${numx10}`)
    .then(console.log)