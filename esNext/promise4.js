function generateNumbers (min, max, time){
    if (min > max){
        [max, min] = [min, max]
    }
    return new Promise(resolve => {
        setTimeout(function() {
            const factor = max - min + 1
            const random = parseInt(Math.random() * factor) + min
            resolve(random)

        }, time)
    })
}

function generateSeveralNumbers() {
    return Promise.all([
        generateNumbers(1, 60, 4000),
        generateNumbers(1, 60, 1000),
        generateNumbers(1, 60, 500),
        generateNumbers(1, 60, 3000),
        generateNumbers(1, 60, 100),
        generateNumbers(1, 60, 1500),
    ])
}

console.time('Time')
generateSeveralNumbers()
    .then(numbers => console.log(numbers))
    .then(() => {
        console.timeEnd('Time')
    })
