const products = [
    {name: 'Notebook', price: 2499, fragile: true},
    {name: ' iPad Pro', price: 4199, fragile: true},
    {name: 'Glass Cup', price: 12.49, fragile: true},
    {name: 'Plastic Cup', price: 18.99, fragile: false}
]

console.log(products.filter(function(p){
    return false
}))

const expensive = products => products.price >= 500
const fragile = products => products.fragile

const result = products.filter(expensive).filter(fragile)
console.log(result)