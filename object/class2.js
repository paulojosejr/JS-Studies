class GrandFather {
    constructor(surname){
        this.surname = surname
    }
}

class Dad extends GrandFather {
    constructor(surname, profession = 'Teacher'){
        super(surname)
        this.profession = profession
    }
}

class Son extends Dad {
    constructor(){
        super ('Van')
    }
}

const son = new Son
console.log(son)