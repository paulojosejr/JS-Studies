// storing a function in a variable
const printSum = function (a, b){
    console.log(a + b)
}

printSum(2, 3)
console.log()

// storing a arrow function in a variable
const sum = (a,b) => {
    return a + b
}

console.log(sum(2, 3))
console.log()

//implicit return
const sub = (a, b) => a-b
console.log(sub(2, 3))
console.log()

const print2 = a => console.log(a)
print2('Cool~~!!!')