Object.prototype.attr0 = '0'    //Don't do it

const grandFa = {attr1: 'A'}
const dad = {__proto__: grandFa, attr2: 'B'}
const son = {__proto__: dad, attr3: 'C'}
console.log(son.attr0, son.attr1, son.attr2, son.attr3)

const car = {
    currentSpeed: 0,
    maxSpeed:200,
    speedUP(delta){
        if(this.currentSpeed + delta <= this.maxSpeed){
            this.currentSpeed += delta
        }else{
            this.currentSpeed = this.maxSpeed
        }
    },
    status(){
        return `${this.currentSpeed}Km/h of ${this.maxSpeed}Km/h`
    }
}
const ferrari = {
    model: 'F40',
    maxSpeed: 324   //shadowing
}

const volvo = {
    model: 'V40',
    status(){
        return `${this.model}: ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari, car)
Object.setPrototypeOf(volvo, car)

console.log(ferrari)
console.log(volvo)

volvo.speedUP(100)
console.log(volvo.status())

ferrari.speedUP(300)
console.log(ferrari.status())