const fs = require('fs')
const path = require ('path')


function readFile(way) {
    return new Promise(resolve => {
        fs.readFile(way, function (_, content) {
            resolve(content.toString())
        })
        console.log('After reading')
    })
}

const way = path.join(__dirname, 'data.txt')

readFile(way)
    .then(content => content.split('\n'))
    .then(lines => lines.join(','))
    .then(content => `The final value is: ${content}`)
    .then(console.log)