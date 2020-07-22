function simpleInterest (capital,rate, time){
    let interest = capital * rate * time
    let balance = interest + capital
    console.log(`The calculated interest is ${interest} and you amount is ${balance}`)
    console.log()
}
simpleInterest(100, 0.2,3)

function compoundInterest (capital, rate, time){
    let balance = capital*(1+rate)**time
    console.log(`Your amount is €${balance.toFixed(2)}`)
}
compoundInterest(100, 0.2,3)