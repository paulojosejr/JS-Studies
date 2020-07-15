let value //uninitialized
console.log (value)

console.log()
value = null //absence of value
console.log(value)

//console.log(value.toString()) //Error!

console.log()
const product = {}
console.log(product.price)
console.log(product)

console.log()
product.price = 3.50
console.log(product)

console.log()
product.price = undefined //avoid assigning undefined
console.log(!!product.price)
//delete product.price
console.log(product)

console.log()
product.price = null //without price
console.log(!!product.price)
console.log(product)