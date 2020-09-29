function verifyLeapYear (year){
    if(year % 400 == 0){
        console.log('true')
        
    }else if (year % 100 == 0){
        console.log('false')
        
    }else if(year % 4 == 0){
        console.log('true')
    }else{
        console.log('false')
    }
}
verifyLeapYear(2100)
verifyLeapYear(2400)
verifyLeapYear(2004)
verifyLeapYear(2003)