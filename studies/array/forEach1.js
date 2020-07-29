const approved = ['Agatha', 'Akdi', 'Daniel', 'Raquel']

approved.forEach(function(name, indice){
    console.log(`${indice + 1}) ${name}`)
})
console.log()

approved.forEach(name => console.log(name))
console.log()

const showApproved = approveds => console.log(approveds)
approved.forEach(showApproved)