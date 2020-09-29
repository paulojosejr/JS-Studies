function mult(array, integer) {
    let vector = array.map(function (e) {
        return e * integer
    })
    console.log(vector)
}
mult([2.2, 3.3, 4.5, 5], 5)

function mult2(array, integer) {
        let vector1 = array.map(function (e) {
            if (e > 5) {
            return e * integer
            }else {
                return e
            }
        })
        console.log(vector1)
    }
mult2([2.2, 3.3, 4.5, 5, 6], 5)