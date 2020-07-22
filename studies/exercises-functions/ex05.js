function precise(x) {
    let num = x.toFixed(2).replace(/\./g, ',')
    console.log(`€ ${num}`)
  }
  precise(0.300000000000000000000000004)
  