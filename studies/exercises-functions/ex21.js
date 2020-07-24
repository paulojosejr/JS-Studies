let healthPlanPrice = 100
let personAge = 10

if(personAge < 10){
    healthPlanPrice += 80
    console.log(healthPlanPrice)
}else if (personAge >= 10 && personAge < 30){
    healthPlanPrice += 50
    console.log(healthPlanPrice)
}else if(personAge >= 30 && personAge <= 60){
    healthPlanPrice += 95
    console.log(healthPlanPrice)
}else {
    healthPlanPrice +=130
    console.log(healthPlanPrice)
}