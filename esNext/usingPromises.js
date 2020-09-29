//with promise...
const http = require('http')

const getCla = letter => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letter}.json`
    return new Promise((resolve, reject) => {
        http.get(url, res => {
            let result = ''

            res.on('data', data => {
                result += data
            })

            res.on('end', () => {
                try {
                    resolve(JSON.parse(result))
                } catch (e) {
                    reject(e)
                }
            })
        })
    })
}

// let names = []
// getCla('A').then(students => {
//     names = names.concat(students.map(a => `A: ${a.nome}`))
//     getCla('B').then (students => {
//         names = names.concat(students.map(a => `B: ${a.nome}`))
//         getCla('C').then(students => {
//             names = names.concat(students.map(a => `C: ${a.nome}`))
//             console.log(names)
//         })
//     })
// })

Promise.all([getCla('A'), getCla('B'), getCla('C')])
    .then(clas => [].concat(...clas))
    .then(students => students.map(student => student.nome))
    .then(students => console.log(students))

getCla('D').catch(e => console.log(e.message))