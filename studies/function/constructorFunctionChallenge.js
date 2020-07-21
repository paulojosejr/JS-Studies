function Person (name){
    this.name = name

    this.talk = function (){
        console.log(`My name is ${this.name}`)     
    }
}

const p1 = new Person ('Arianna')
p1.talk()
console.log(p1.name)

const p2 = new Person ('Paulo')
p2.talk()
console.log(p2.name)