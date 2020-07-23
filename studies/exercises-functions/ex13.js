let day = 1
switch(day){
    case 2: case 3: case 4: case 5: case 6:
        console.log('Business day')
        break;
    case 1: case 7:
        console.log('Weekend')
        break;
    default:
        console.log('Invalid Day')
}