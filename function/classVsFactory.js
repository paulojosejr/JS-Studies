class Person{
    constructor(name){
        this.name = name
    }
    talk(){
        console.log(`My name is ${this.name}`)
    }
}
const p1 = new Person ('Arianna')
p1.talk()

const createPerson = name => {
    return {
        talk: () => console.log(`My name is ${name}`)
    }
}
const p2 = createPerson('Paulo')
p2.talk()