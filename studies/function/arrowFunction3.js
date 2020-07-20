let comperesWithThis = function (param){
    console.log (this === param)
}
comperesWithThis(global)

const obj = {}
comperesWithThis = comperesWithThis.bind(obj)
comperesWithThis(global)
comperesWithThis(obj)

let comperesWithThisArrow = param => console.log(this === param)
comperesWithThisArrow(global)
comperesWithThisArrow(module.exports)

comperesWithThisArrow = comperesWithThisArrow.bind(obj)
comperesWithThisArrow(obj)
comperesWithThisArrow(module.exports)