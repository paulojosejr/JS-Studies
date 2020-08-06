{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a)
//console.log(b) b is not defined

//Template String
const product = 'iPad'
console.log(`${product} is expensive!`)

//Destructuring

const [w, r, ...ite] = "Coder"
console.log(w, r, ite)

const [x, ,y] = [1, 2, 3]
console.log(x, y)

const {age, name} = {name: 'Paulo', age: 24}
console.log(age, name)