const person = {name: 'Paulo'}
person.name = 'Michael'
console.log(person)

// person = {name: 'Ana'}

Object.freeze(person)

person.name = 'Matheus'
person.adress = 'abc street'
delete person.name

console.log(person.name)
console.log(person)

const personConstant = Object.freeze({name: 'Richard'})
personConstant.name = 'Maria'
console.log(personConstant)