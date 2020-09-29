//without promise...
const http = require('http')

const getCla = (letter, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letter}.json`
    http.get(url, res => {
        let result = ''

        res.on('data', data => {
            result += data
        })

        res.on('end', () => {
            callback(JSON.parse(result))
        })
    })
}

let names = []
getCla('A', students => {
    names = names.concat(students.map(a => `A: ${a.nome}`))
    getCla('B', students => {
        names = names.concat(students.map(a => `B: ${a.nome}`))
        getCla('C', students => {
            names = names.concat(students.map(a => `C: ${a.nome}`))
            console.log(names)
        })
    })
})