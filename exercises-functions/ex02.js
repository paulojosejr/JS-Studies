function triangle(side1, side2, side3){
    if (side1 == side2 && side2 == side3){
        console.log(`The type of the triangle is: equilateral`)
    }
    else if(side1 == side2 || side2 == side3 || side1 == side3){
        console.log(`The type of the triangle is: isosceles`)
    }else{
        console.log(`The type of the triangle is: scalene`)
    }
}
triangle(2,2,2)
triangle(2,2,3)
triangle(1,2,3)