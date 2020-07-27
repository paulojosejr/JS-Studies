// Object.preventExtensions
const product = Object.preventExtensions({
    name: 'Any', price: 1.99, tag: 'sale'
})
console.log('Extensible', Object.isExtensible(product))

product.name = 'Rubber'
product.description = 'White ereaser'
delete product.tag
console.log(product)

//Object.seal
const person = {name: 'Juliana', age: 35}
Object.seal(person)
console.log('Sealed:', Object.isSealed(person))

person.surname = 'Silvie'
delete person.name
person.age = 29
console.log(person)

//Object.freeze = sealed + constant values