const person = {
    salute: 'Good Morning!',
    speak(){
        console.log(this.salute)
    }
}
person.speak()
const speak = person.speak
speak()

const talkAboutPerson = person.speak.bind(person)
talkAboutPerson()


