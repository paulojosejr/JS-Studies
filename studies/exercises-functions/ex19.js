function Menu(code, quantity) {
    let HowMuchToPay
    switch (code) {
        case 100:
            HowMuchToPay = quantity * 3
            console.log(HowMuchToPay)
            break;
        case 200:
            HowMuchToPay = quantity * 4
            console.log(HowMuchToPay)
            break;
        case 300:
            HowMuchToPay = quantity * 5.5
            console.log(HowMuchToPay)
            break;
        case 400:
            HowMuchToPay = quantity * 7.5
            console.log(HowMuchToPay)
            break;
        case 500:
            HowMuchToPay = quantity * 3.5
            console.log(HowMuchToPay)
            break;
        case 600:
            HowMuchToPay = quantity * 2.8
            console.log(HowMuchToPay)
            break;
        default:
            console.log('Invalid Command')
    }
}
Menu(300, 3)