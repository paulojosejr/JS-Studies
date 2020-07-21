const x = 'Global'

function out(){
    const x = 'Local'
    function inside(){
        return x
    }
    return inside
}

const myFunction = out()
console.log(myFunction())