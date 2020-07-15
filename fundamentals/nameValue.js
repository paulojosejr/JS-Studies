const hello = 'Yo' // lexical contest 1

function exec(){
    const hello = 'yooooo' // lexical contest 2
    return hello
}

//objects are nested groups of pairs name/value
const client = {
    name: 'Hector',
    age:32,
    weight:90,
    adress: {
        street: 'Bayside Boulevard',
        number: 123
    }
}
console.log(hello)
console.log(exec())
console.log(client)