function roundGrades (grade){
    if(grade < 38){
        console.log(`disapproved with ${grade}`)
    }else if ((grade % 5) <= 3){
        let roundGradeUp = grade + (5-(grade % 5))
        console.log(`Approved with ${roundGradeUp}`)
    }
}
roundGrades(38)