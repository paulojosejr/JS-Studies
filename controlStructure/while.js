function getRandom(min, max) {
    const value = Math.random() * (max - min) + min
    return Math.floor(value)
}
let option = 0
while (option != -1){
    option = getRandom(-1,10)
    console.log(`chosen option was ${option}.`)
}
console.log('See Ya!')