const manufactures = ["Mercedes", "Audi", "BMW"]

function print(name, index){
    console.log(`${index + 1}. ${name}`)
}

manufactures.forEach(print)
manufactures.forEach(manufactures => console.log(manufactures))