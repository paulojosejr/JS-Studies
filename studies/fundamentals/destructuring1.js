const person = {
    name: 'Jack',
    age: 5,
    adress:{
        street: 'Baggot Street',
        number: 1000
    }
}
const { name, age} = person
console.log(name,age)

const{name: n, age: i} = person
console.log(n, i)

const { surname, nice = true} = person
console.log(surname, nice)

const { adress: { street, number, postalcode}} = person
console.log(street, number, postalcode)