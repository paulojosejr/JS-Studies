const counterA = require('./instanceSingle')
const counterB = require('./instanceSingle')

const counterC = require('./instanceNew')()
const counterD = require('./instanceNew')()

counterA.inc()
counterA.inc()
console.log(counterB.value)

counterC.inc()
counterC.inc()
console.log(counterC.value, counterD.value)