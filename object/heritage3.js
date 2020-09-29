const dad = {name: ' Richard', hairColor: 'black'}

const daughter1 = Object.create(dad)
daughter1.name = 'Ana'
console.log(daughter1.hairColor)

const daughter2 = Object.create(dad, {
    name: {value: 'Maria', writable: false, enumerable: true}
})

console.log(daughter2.name)
daughter2.name = 'Sheila'
console.log(`${daughter2.name} have a hair ${daughter2.hairColor}`)

console.log(Object.keys(daughter1))
console.log(Object.keys(daughter2))

for(let key in daughter2){
    daughter2.hasOwnProperty(key) ?
        console.log(key) : console.log(`by inheritance: ${key}`)
}