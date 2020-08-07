const firstElement = array => array[0]
const lowerCase = letter => letter.toLowerCase()

let p = new Promise(function (resolve) {
    resolve(['Ana', 'Bia', 'Carlos', 'Daniel'])
})
    .then(firstElement)
    .then(firstElement)
    .then(lowerCase)
    .then(console.log)