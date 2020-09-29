for (let letter of "Coder") {
    console.log(letter)
}
console.log()

const subEcma = ['Map', 'Set', 'Promise']
for (let i in subEcma){
    console.log(i)
}
console.log()

for (let subjects of subEcma){
    console.log(subjects)
}
console.log()

const subMap = new Map([
    ['Map', { addressed: true}],
    ['Set', { addressed: true}],
    ['Promise', { addressed: false}]
])

for(let subjects of subMap) {
    console.log(subjects)
}
console.log()

for (let key of subMap.keys()){
    console.log(key)
}
console.log()

for(let value of subMap.values()){
    console.log(value)
}
console.log()

for (let [k, vl] of subMap.entries()){
    console.log(k, vl)
    console.log()
}

const s = new Set(['a', 'b', 'c'])
for(let letter of s){
    console.log(letter)
}