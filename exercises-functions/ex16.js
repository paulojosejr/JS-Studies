function Calculator(num1, sinal, num2) {
    let count = 0
    switch (sinal) {
        case '+':
            count = (num1 + num2)
            console.log(count)
            break;
        case '-':
            count = (num1 - num2)
            console.log(count)
            break;
        case '*':
            count = (num1 * num2)
            console.log(count)
            break;
        case '/':
            count = (num1 / num2)
            console.log(count)
            break;
        default:
            console.log('Invalid')
    }
}
Calculator(2, '+', 3)
Calculator(2, '***', 3)
Calculator(2, '/', 3)
Calculator(2, '*', 3)