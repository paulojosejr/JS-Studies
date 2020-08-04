const fs = require('fs')

const path1 = __dirname + '/file1.json'

//synchronous
const content = fs.readFileSync(path1, 'UTF-8')
console.log(content)

//asynchronous
fs.readFile(path1, 'UTF-8', (err, content) => {
    const config = JSON.parse(content)
    console.log(`${config.db.host}:${config.db.port}`)
})