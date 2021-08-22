const pilots = ['Vettel', 'Allonso', 'Raikkonen', 'Massa']
pilots.pop()
console.log(pilots)

pilots.push('Verstappen')
console.log(pilots)

pilots.shift()
console.log(pilots)

pilots.unshift('Hamilton')
console.log(pilots)

pilots.splice(2, 0, 'Bottas', 'Massa')
console.log(pilots)

const pilots2 = pilots.slice(2)
console.log(pilots2)

const pilots3 = pilots.slice(1, 5)
console.log(pilots3)