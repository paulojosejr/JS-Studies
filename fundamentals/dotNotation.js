console.log(Math.ceil(6.1))

const obj1 = {}
obj1.name = 'ball'
//obj1[name] = 'ball2'
console.log(obj1.name)

function Obj(name){
    this.name = name
    this.Run = function() {
        console.log('Run....')
    }
}
const obj2 = new Obj('chair')
const obj3 = new Obj('table')
console.log(obj2.name)
console.log(obj3.name)
obj3.exec()