//Object.values/Object.entries
const obj = { a:1, b:2, c:3}
console.log(Object.values(obj))
console.log(Object.entries(obj))

// literal notation
const name = 'Juliana'
const person = {
    name,
    hello() {
        return 'hello!!!'
    }
}
console.log(person.name, person.hello())

//Class
class Animal{}
class Dog extends Animal{
    talk(){
        return 'Roof!'
    }
}

console.log(new Dog().talk())