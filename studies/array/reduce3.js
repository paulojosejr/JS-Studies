Array.prototype.reduce2 = function(callback, initialValue){
    const initialIndex = initialValue ? 0 : 1
    let acumulattor = initialValue || this[0]
    for (let i = initialIndex; i < this.length; i++){
        acumulattor = callback (acumulattor, this[i], this)
    }
    return acumulattor
}

const sum = (total, value) => total+ value
const nums = [1, 2, 3, 4, 5, 6]
console.log(nums.reduce2(sum, 21))