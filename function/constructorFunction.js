class Car {
    constructor(maxSpeed = 200, delta = 5) {
        let currentSpeed = 0
        this.SpeedUp = function () {
            if (currentSpeed + delta <= maxSpeed) {
                currentSpeed += delta
            }
            else {
                currentSpeed = maxSpeed
            }
        }
        this.getCurrentSpeed = function () {
            return currentSpeed
        }
    }
}

const uno = new Car
uno.SpeedUp()
console.log(uno.getCurrentSpeed())

const ferrari = new Car (350, 20)
ferrari.SpeedUp()
ferrari.SpeedUp()
ferrari.SpeedUp()
console.log(ferrari.getCurrentSpeed())

console.log(typeof Car)
console.log(typeof ferrari)