// operator ... rest/spread
//use rest with a function parameter

//use spread with object
const employeer = { name: 'Maria', salary: 12345.99}
const clone = { active: true, ...employeer}
console.log(clone)

//using spread with array
const groupA = ['João', 'Paulo', 'Ana']
const finalGroup = ['Maria', ...groupA, 'Rafael']
console.log(finalGroup)