function workPlan(salary, workplan) {
    let newSalary
    switch (workplan) {
        case 'A':
            newSalary = salary * 1.1
            console.log(newSalary)
            break;
        case 'B':
            newSalary = salary * 1.15
            console.log(newSalary)
            break;
        case 'C':
            newSalary = salary * 1.20
            console.log(newSalary)
            break;
        default:
            console.log('Invalid Plan')
    }
}
workPlan(700, 'A')