const technologies = new Map()
technologies.set('React', { framework: false })
technologies.set('Angular', { framework: true })

console.log(technologies.React)
console.log(technologies.get('React').framework)
console.log()

const randomKeys = new Map ([
    [function () {}, 'Function'],
    [{}, 'Object'],
    [123, 'Number'],
])

randomKeys.forEach((vl,k) => {
    console.log(vl, k)
})
console.log(randomKeys.has(123))
randomKeys.delete(123)
console.log(randomKeys.has(123))
console.log(randomKeys.size)
console.log()

randomKeys.set(123, 'a')
randomKeys.set(123, 'b')
randomKeys.set(456, 'b')
console.group(randomKeys)