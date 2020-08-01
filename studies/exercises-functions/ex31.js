const vector = [-3, -4, -5, -10, 1, 2, 3, 4, 5]
let negative = 0

for (let i = 0; i < vector.length; i++ ){
    if ( vector[i] < 0){
        negative++
    }
}
console.log(negative)