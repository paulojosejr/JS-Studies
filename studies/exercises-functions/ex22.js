function calculateValue(month, annuity){
    let amount = annuity *(1+0.05)**(month - 1)
    console.log(amount)
}
calculateValue(3, 200)