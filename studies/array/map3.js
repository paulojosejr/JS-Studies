Array.prototype.map2 = function (callback){
    const newArray = []
    for (let i = 0; i <this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const cart = [
    '{ "name": "Eraser", "price": 3.45}',
    '{ "name": "Notebook", "price": 13.95}',
    '{ "name": "Pencil", "price": 41.22}',
    '{ "name": "Pen", "price": 7.45}'
]

const forObject = json => JSON.parse(json)
const justPrice = product => product.price

const result = cart.map2(forObject).map2(justPrice)
console.log(result)