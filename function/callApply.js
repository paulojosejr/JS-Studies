function getPrice(tax = 0, currency = '€'){
    return `${currency} ${this.price * (1 - this.discount) * (1 + tax)}`
}
const product = {
    name: 'notebook',
    price: 4589,
    discount: 0.15,
    getPrice
}

global.price = 20
global.discount = 0.1
console.log(getPrice())
console.log(product.getPrice())

const car = {price: 49990, discount: 0.20}

console.log(getPrice.call(car))
console.log(getPrice.apply(car))

console.log(getPrice.call(car, 0.17, '€'))
console.log(getPrice.apply(global, [0.17, '€']))