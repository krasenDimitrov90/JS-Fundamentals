function solve(num) {
    let numAsString = num.toString()
    let sum = 0
    for (let i = 0; i < numAsString.length; i++) {
        sum += Number(numAsString[i])
    }
    console.log(sum);
}
solve (245678)
solve (97561)
solve (543)