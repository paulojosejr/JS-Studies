const vector = [1, 2, 3, 4, 5, 6]

let minimum = Math.min.apply(null, vector)
let maximum = Math.max.apply(null, vector)

console.log(`The minimum number of the vector is ${minimum}`)
console.log(`The maximum number of the vector is ${maximum}`)