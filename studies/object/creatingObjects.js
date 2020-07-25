// using literal notation
const obj1 = {}
console.log(obj1)

//object in JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)

//Constuction functions
function Product(name, price, disc) {
    this.name = name
    this.getPriceWithDiscount = () => {
        return price * (1 - disc)
    }
}
const p1 = new Product('Pen', 7.99, 0.15)
const p2 = new Product('Notebook', 2998.99, 0.25)
console.log(p1.getPriceWithDiscount().toFixed(2), p2.getPriceWithDiscount().toFixed(2))

// Factory function
function createEmployee (name, baseSalary, faults){
    return{
        name,
        baseSalary,
        faults,
        getSalary(){
            return(baseSalary / 30) * (30 - faults)
        }
    }
}
const f1 = createEmployee('Paulo', 7980, 4)
const f2 = createEmployee('Marcus', 11400, 1)
console.log(f1.getSalary(), f2.getSalary())

//Object.create
const child = Object.create(null)
child.name = 'Eliza'
console.log(child)

const fromJSON = JSON.parse('{"info" : "Im a JSON"}')
console.log(fromJSON.info)