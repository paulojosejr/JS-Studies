let isActive = false
console.log(isActive)

isActive = true
console.log(isActive)

isActive = 1
console.log(!!isActive)
console.log(!isActive)

console.log()
console.log('true types...')
console.log(!!3)
console.log(!!-1)
console.log(!!' ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isActive = true))

console.log()
console.log('false types...')
console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isActive = false))

console.log()
console.log('to finish')
console.log(!!('' || null || 0 || ' '))

console.log()
let nome = 'Ariana'
console.log(nome || 'unknown')