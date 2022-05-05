function solve(arr1 , arr2) {
    let sum = 0
    let isEqual = true
    let index = 0
    for (let i = 0; i < arr1.length; i++) {
        
        if (arr1[i] === arr2[i]) {
            sum += Number(arr1[i])
        }else {
            isEqual = false
            break;
        }
        index++
        
    }
    if (isEqual) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    } else {
        console.log(`Arrays are not identical. Found difference at ${index} index`)
    }
}
solve(['10','20','30'], ['10','20','30'])
solve(['1','2','3','4','5'], ['1','2','4','4','5'])
solve(['1'], ['10'])