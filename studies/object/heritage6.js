function Lesson (name, videoID) {
    this.name = name
    this.videoID = videoID
}

const lesson1 = new Lesson('Welcome', 123)
const lesson2 = new Lesson('See Ya', 456)
console.log(lesson1, lesson2)

function little(f, ...params){
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const lesson3 = little(Lesson, 'Welcome', 123)
const lesson4 = little(Lesson, 'See Ya', 456)
console.log(lesson3, lesson4)