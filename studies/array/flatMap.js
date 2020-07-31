const school = [{
    name: 'Class M1',
    pupils: [{
        name: 'Gustavo',
        grade: 8.1
    }, {
        name: 'Ana',
        grade: 9.3
    }]
}, {
    name: 'Class M2',
    pupils: [{
        name: 'Rebeca',
        grade: 8.9
    }, {
        name: 'Roberto',
        grade: 7.3
    }]
}]

const getGradePupils = pupils => pupils.grade
const getGradeClass = class1 => class1.pupils.map(getGradePupils)

const grades2 = school.map(getGradeClass)
console.log(grades2)

console.log([].concat([ 8.1, 9.3 ], [ 8.9, 7.3 ]))

Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([], this.map(callback))
}

const grades3 = school.flatMap(getGradeClass)
console.log(grades3)