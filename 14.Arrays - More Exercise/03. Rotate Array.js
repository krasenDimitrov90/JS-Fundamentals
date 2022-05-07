function rotatedArray(arr) {
    let rotations = Number(arr[arr.length - 1])
    let arrayForRotating = arr
    arrayForRotating.pop()
    let arrayForRotatingLength = arrayForRotating.length
    for (let i = 0; i < rotations; i++) {
        let lastEl = arrayForRotating[arrayForRotatingLength - 1]
        arrayForRotating.pop()
        arrayForRotating.unshift(lastEl)
    }
    console.log(arrayForRotating.join(' '));
    
}
rotatedArray(['1', '2', '3', '4', '2'])
rotatedArray(['Banana', 'Orange', 'Coconut', 'Apple', '15'])