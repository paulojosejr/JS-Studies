function fixError(error){
    //throw new Error ('...')
    //throw 10
    //throw true
    //throw 'message'
    throw{
        name: error.name,
        msg: error.message,
        date: new Date
    }
}


function printName(obj){
    try{
    console.log(obj.name.toUpperCase() + '!!!')
    }catch (e){
        fixError(e)
    }finally {
        console.log('final')
    }
}
const obj = {name: 'robert'}
printName(obj)