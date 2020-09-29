const vector = [9, 10, 8.5, 9.2]
let sum = 0

for (let i = 0;i < vector.length; i++){
    sum += vector[i]
}
let average = sum / vector.length
console.log(average)