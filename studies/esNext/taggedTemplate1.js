// tagged templates - process the template within a function
function tag (parts, ...values){
    console.log(parts)
    console.log(values)
    return 'Another string'
}

const student = 'Gui'
const situation = 'Approved'

console.log(tag`${student} is ${situation}.`)