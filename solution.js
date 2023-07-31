const solve = (n) => {
    let transaction = []
    if (n % 10 !== 0) {
        return -1
    }
    while (n > 0) {
        if (n >= 500) {
            transaction.push('a')
            n = n - 500
        } if (n < 500 && n >= 200) {
            transaction.push('b')
            n = n - 200
        } if (n < 200 && n >= 100) {
            transaction.push('c')
            n = n - 100
        } if (n < 100 && n >= 50) {
            transaction.push('d')
            n = n - 50
        } if (n < 50 && n >= 20) {
            transaction.push('e')
            n = n - 20
        } if (n < 20 && n >= 10) {
            transaction.push('f')
            n = n - 10
        }
    } 
    // cool way to remove duplicates from array
    // return [...new Set(transaction)].length
    return transaction.length
}

console.log(solve(125)) // -1
console.log(solve(1500)) // 1
console.log(solve(770)) // 4
console.log(solve(10)) // 1
console.log(solve(1250)) // 3