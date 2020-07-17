function getRandom (min, max){
    const value = Math.random() * (max - min) + min
    return Math.floor(value)
}

let option = -1
let counter = 0

do{
    option = getRandom(-1, 1000)
    console.log(`Random number: ${option}`)
    counter++
}while(option != -1)

console.log(`This program ran ${counter} times.`)
console.log('See Ya!')