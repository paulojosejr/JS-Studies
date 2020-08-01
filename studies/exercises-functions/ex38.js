function oddNumbers (start, end){
    if(start > end){
        let swap = start
        start = end
        end = swap
    }
    for(let i = start; i <= end ; i ++){
        if (i % 2 != 0){
            console.log(i)
        }
    }
}
oddNumbers(10, 6)