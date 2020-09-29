console.log(typeof Array, typeof new Array, typeof [])

let approved = new Array ('Bya', 'Maria', 'Jose')
console.log(approved)

approved = ['Bya', 'Carlos', 'Christina']
console.log(approved[0])
console.log(approved[1])
console.log(approved[2])
console.log(approved[3])

approved [3] = 'Paulo'
approved.push('Abia')
console.log(approved.length)

approved[9] = 'Rafael'
console.log(approved.length)
console.log(approved[8] === undefined)

console.log(approved)
approved.sort()
console.log(approved)

delete approved [1]
console.log(approved[1])
console.log(approved[2])

approved = ['Bya', 'Carlos', 'Ana']
approved.splice(1, 2, 'person1', 'person2')
console.log(approved)