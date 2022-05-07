function numbersInIncreasingOrder(numbers) {
    let arrayOfNumbers = numbers
    let arrayInOrder = []
    arrayInOrder.push(arrayOfNumbers[0])
    let arrayLength = arrayOfNumbers.length
    for (let i = 1; i < arrayLength; i++) {
        let currentNum = Number(arrayInOrder[arrayInOrder.length - 1])
        let nextNum = Number(arrayOfNumbers[i])
        if (nextNum >= currentNum) {
            arrayInOrder.push(nextNum)
        }
    }
    console.log(arrayInOrder.join(' '));
}
numbersInIncreasingOrder([ 1, 3, 8, 4, 10, 12, 3, 2, 24])
numbersInIncreasingOrder([ 1, 2, 3, 4])
numbersInIncreasingOrder([ 20, 3, 2, 15, 6, 1])