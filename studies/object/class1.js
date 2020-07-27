class Release {
    constructor(name = 'Generic', value = 0){
        this.name = name
        this.value = value
    }
}

class FinancialCycle{
    constructor(month, year){
        this.month = month
        this.year = year
        this.release = []
    }

    addRelease(...release){
        release.forEach(r => this.release.push(r))
    }

    summary() {
        let consolidatedValue = 0
        this.release.forEach(r =>{
            consolidatedValue += r.value
        })
        return consolidatedValue
    }
}

const salary = new Release('Salary', 45000)
const electricityBill = new Release('Electricity', -220)

const bills = new FinancialCycle(6, 2018)
bills.addRelease(salary, electricityBill)
console.log(bills.summary())