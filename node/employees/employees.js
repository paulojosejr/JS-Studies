const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const chinese = f => f.pais === 'China'
const women = f => f.genero === 'F'
const lowestSalary = (func, currentFunction) => {
    return func.salario < currentFunction.salario ? func : currentFunction
}

axios.get(url).then(response => {
    const funcionarios = response.data
    //console.log(funcionarios)

    const func = funcionarios
    .filter (chinese)
    .filter (women)
    .reduce (lowestSalary)

    console.log(func)
})