const pupils = [
    {name: 'João', grade: 7.9},
    {name: 'Maria', grade: 9.2}
]

let total1 = 0
for (let i = 0; i < pupils.length; i++){
    total1 += pupils[i].grade
}
console.log(total1/ pupils.length)
console.log()

const getGrade = pupils => pupils.grade
const sum = (total, current) => total + current
const total2 = pupils.map(getGrade).reduce(sum)
console.log(total2 / pupils.length)