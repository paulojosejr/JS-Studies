const vector = [1, 2, 3, 4, 10, 15, 16, 19, 20, 30, 40]
let inside = 0
let outside = 0

for (let i = 0; i < vector.length; i++ ){
    if ( vector[i] >= 10 && vector[i] <= 20){
        inside++
    }else{
        outside++
    }
}
console.log(inside)
console.log(outside)