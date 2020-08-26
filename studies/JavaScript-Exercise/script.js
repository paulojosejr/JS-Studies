function loading (){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('image')
    var date = new Date()
    var hour =  date.getHours()
    msg.innerHTML = `It's now ${hour} O'clock.`
    if (hour >= 0 && hour < 12){
        img.src = 'morning.png'
        document.body.style.background = '#dea96d'
    }else if (hour >= 12 && hour < 18){
        img.src = 'afternoon.png'
        document.body.style.background = '#fca443'
    }else {
        img.src = 'night.png'
        document.body.style.background = '#584361'
    }
}
