const almostArray = {0: 'Rafael', 1: 'Maria', 2: 'Jose'}
console.log(almostArray)
Object.defineProperty(almostArray, 'toString',{
    value: function(){ return Object.values(this)},
    enumerable: false
})

console.log(almostArray[0])

const myArray = ['Rafael', 'Maria', 'Jose']
console.log(almostArray.toString(), myArray)