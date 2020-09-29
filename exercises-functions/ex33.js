intVector = [1, 2, 3, 4]
stringVector = ['a','b','c','d']
doubleVector = [1.1, 2.2, 3.3, 4.4]
const all = intVector.concat(stringVector, doubleVector)

console.log([].concat(intVector, stringVector, doubleVector))

console.log([].concat([1, 2, 3, 4], ['a','b','c','d'], [1.1, 2.2, 3.3, 4.4]))

console.log(all)