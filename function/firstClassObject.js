function fun1 () {}

const fun2 = function () {}

const array = [function (a ,b){ return a + b}, fun1, fun2]
console.log(array[0] (2, 3))

const obj = {}
obj.talk = function(){ return 'yo'}
console.log(obj.talk())

function run (fun){
    fun()
}
run(function() {console.log('running')})

function sum (a, b) {
    return function (c){
        console.log(a + b+ c)
    }
}

sum(2, 3)(4)
const fivePlus = sum(2,3)
fivePlus(4)