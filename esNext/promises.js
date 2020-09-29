function speakAfter(seconds, word) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(word, 'abc')
        }, seconds * 1000)
    })
}

speakAfter(3, 'Cool!!!')
    .then(word => word.concat('?!?'))
    .then(anotherWord => console.log(anotherWord))
    .catch(e => console.log(e))