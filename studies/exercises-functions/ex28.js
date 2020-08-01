const vector = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const even = vector => vector % 2 == 0
const odd = vector => vector % 2 == 1

const evenNumbers = vector.filter(even)
const oddNumbers = vector.filter(odd)

console.log(`the even numbers are ${evenNumbers}`)
console.log(`the odd numbers are ${oddNumbers}`)