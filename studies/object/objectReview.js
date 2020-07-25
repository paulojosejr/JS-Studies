const product = new Object
product.name = 'Chair'
product ['product brand'] = 'Generic'
product.price = 220

console.log(product)
delete product.price
delete product['product brand']
console.log(product)

const car = {
    model: 'A4',
    value: 89000,
    owner: {
        name:'Paulo',
        age: 25,
        adress: {
            street: 'Abbey Street',
            number: 123
        }
    },
    conductor: [{
        name: 'Richard',
        age: 19
    }, {
        name: 'Chris',
        age: 42
    }],
    calculateInsuranceValue: function (){
        // ...
    }
}
car.owner.adress.number = 1000
car['owner']['adress']['street'] = 'Ailesbury Road'
console.log(car)

// delete car.conductor
delete car.owner.adress
delete car.calculateInsuranceValue
console.log(car)
console.log(car.conductor)
console.log(car.conductor.length)