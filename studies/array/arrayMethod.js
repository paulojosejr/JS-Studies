const pilot = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilot.pop() // remove the last element
console.log(pilot)

pilot.push('Verstappen') //add new last element
console.log(pilot)

pilot.shift() // remove the first
console.log(pilot)

pilot.unshift('Hamilton') //add the first element
console.log(pilot)

// splice can add or remove element

//add
pilot.splice(2,0, 'Bottas', 'Massa')
console.log(pilot)

//remove
pilot.splice(3, 1) // massa broke again
console.log(pilot)

const somePilots1 = pilot.slice(2) //create new array
console.log(somePilots1)

const somePilots2 = pilot.slice(1, 4)
console.log(somePilots2)