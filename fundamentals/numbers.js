const weight1 = 1.0
const weight2 = Number('2.0')

console.log(weight1, weight2)
console.log(Number.isInteger(weight1))
console.log(Number.isInteger(weight2))

const rating1 = 9.871
const rating2 = 6.871

const total = rating1 * weight1 + rating2 * weight2
const avarage = total / (weight1 + weight2)

console.log(avarage.toFixed(2))
console.log(avarage.toString(2)) //binary
console.log(typeof avarage)
console.log(typeof Number)