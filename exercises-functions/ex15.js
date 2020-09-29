let car = "Hatch"
switch(car){
    case "Hatch":
        console.log(`Successful purchase`)
        break;
    case "Sedans": case "Sedan":case "Motorcycle": case"Pickup":
        console.log('Are you sure you prefer this model?')
        break;
    default:
        console.log('Model not available')
}