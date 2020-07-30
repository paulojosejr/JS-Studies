const pupils = [
    {name: 'Josa', grade: 7.3, scholarship: false},
    {name: 'Maria', grade: 9.2, scholarship: true},
    {name: 'Cahin', grade: 9.8, scholarship: false},
    {name: 'Ana', grade: 8.7, scholarship: true}
]

//all students are scholarship holders
const allScholarship = (result, scholarship) => result && scholarship
console.log(pupils.map(a => a.scholarship).reduce(allScholarship))

//any student is a scholarship holder?
const someScholarship = (result, scholarship) => result || scholarship
console.log(pupils.map(a => a.scholarship).reduce(someScholarship))