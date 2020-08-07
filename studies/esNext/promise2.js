/*setTimeout (function (){
    console.log('Running...')
    
    setTimeout(function(){
        console.log('Running...')
        
        setTimeout(function() {
            console.log('Running...')
            
        }, 2000)
    }, 2000)
}, 2000)
*/

function waitFor(time = 2000) {
    return new Promise(function (resolve){
        setTimeout(function(){
            console.log('Running primise...')
            resolve()
        }, time)
    })
}

waitFor(3000)
    .then(() => waitFor())
    .then(waitFor)