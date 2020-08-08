function workOrNot(value, errorChance) {
    return new Promise((resolve, reject) => {
        try {
            con.log('temp')
            if (Math.random() < errorChance) {
                reject('An error was ocurred!')
            } else {
                resolve(value)
            }
        } catch (e) {
            reject(e)
        }
    })
}

workOrNot('Testing...', 0.5)
    .then(v => `Value: ${v}`)
    .then(
        v => consol.log(v),
        err => console.log(`Specific error: ${err}`)
    )
    .then(() => console.log('Almost end!'))
    .catch(err => console.log(`General error: ${err}`))
    .then(() => console.log('End!'))