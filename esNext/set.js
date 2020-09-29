const teams = new Set()
teams.add(['Barcelona'])
teams.add('Porto').add('Real Madrid').add('PSG')
teams.add('Juventos')
teams.add('Barcelona')

console.log (teams)
console.log(teams.size)
console.log(teams.has('barcelona'))
console.log(teams.has('Barcelona'))
teams.delete('Juventos')
console.log(teams.has('Real Madrid'))
console.log()

const names = ['Charl', 'Michael', 'Maria', 'Michael']
const namesSet = new Set(names)
console.log(namesSet)