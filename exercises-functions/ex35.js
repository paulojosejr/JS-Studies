const stackVector = [1, 2, 3, 4, 5]
const addVector = [6, 7, 8, 9, 10]

stackVector.push(...addVector)
console.log(stackVector)
console.log(addVector)