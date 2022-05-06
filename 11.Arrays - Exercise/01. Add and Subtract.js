function solve(arr) {
    let arrSum = 0
    let newArrSum = 0
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        let currentNum = Number(arr[i])
        arrSum += currentNum
        if (currentNum % 2 === 0) {
            newArr.push(currentNum + i)
            newArrSum += currentNum + i
        } else {
            newArr.push(currentNum - i)
            newArrSum += currentNum - i
        }
    }
    console.log(newArr);
    console.log(arrSum);
    console.log(newArrSum);
}
solve([5, 15, 23, 56, 35])
solve([-5, 11, 3, 0, 2])