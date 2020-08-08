function generateNumbers (min, max, repeatedNumbers){
    if (min > max) [max, min] = [min, max]
    return new Promise((resolve, reject) => {
        const factor = max - min + 1
        const random = parseInt(Math.random() * factor) + min
        if (repeatedNumbers.includes(random)) {
            reject ('Repeated number!')
        }else{
            resolve(random)
        }
    })
}

async function generateLottery(qtyNumbers, attempts = 1){
    try{
        const numbers = []
        for(let _ of Array (qtyNumbers).fill()){
            numbers.push(await generateNumbers(1, 60, numbers))
        }
        return numbers
    }catch(e){
        if (attempts > 5){
            throw "Did not Work"
        }else{
            return generateLottery(qtyNumbers, attempts + 1)
        }
    }
}
generateLottery(15)
    .then(console.log)
    .catch(console.log)