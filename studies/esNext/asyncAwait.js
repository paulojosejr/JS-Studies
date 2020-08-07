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

let takeStudents = async () => {
    const classA = await getCla ('A')
    const classB = await getCla ('B')
    const classC = await getCla ('C')
    return [].concat (classA, classB, classC)
}

takeStudents()
.then(students => students.map( a => a.nome))
.then(names => console.log(names))