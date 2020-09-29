Number.prototype.between = function (start, end){
    return this >= start && this <= end
}

const printResult = function (grade){
    if (grade.between(9, 10)){
        console.log('Honor Board')
    }else if(grade.between(7, 8.99)){
        console.log('Approved')
    }else if(grade.between (4, 6.99)){
        console.log('Appeal')
    }else if (grade.between(0, 3.99)){
        console.log('Disapproved')
    }else{
        console.log('Invalide Note')
    }
}

printResult(10)
printResult(8.9)
printResult(6.55)
printResult(2.3)
printResult(-1)
printResult(11)