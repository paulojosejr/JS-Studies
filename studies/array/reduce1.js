const pupils = [
    {name: 'Josa', grade: 7.3, scholarship: false},
    {name: 'Maria', grade: 9.2, scholarship: true},
    {name: 'Cahin', grade: 9.8, scholarship: false},
    {name: 'Ana', grade: 8.7, scholarship: true}
]

console.log(pupils.map(a => a.grade))
console.log()
const result = pupils.map(a => a.grade).reduce(function(accumulator, current){
    console.log(accumulator, current)
    return accumulator + current
}, 0)

console.log(result)