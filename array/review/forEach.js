const approveds = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

approveds.forEach(function(name, index) {
    console.log(` ${index}) ${name}`)
})

approveds.forEach((name, index) => console.log(index, name))

const showApproved = approved => console.log(approved)
approveds.forEach(showApproved)