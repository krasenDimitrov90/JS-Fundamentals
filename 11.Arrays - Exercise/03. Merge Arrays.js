function solve(arr1 , arr2) {
    let newArr = []
    for (let i = 0; i < arr1.length; i++) {
        let currentNum1 = arr1[i] 
        let currentNum2 = arr2[i] 
        if (i % 2 === 0) {
            currentNum1 = Number(currentNum1)
            currentNum2 = Number(currentNum2)
            newArr.push(Number(currentNum1 + currentNum2))
        } else {
            newArr.push(currentNum1 + currentNum2)
        }
        
    }
    console.log(newArr.join(' - '));
}
solve(['5', '15', '23', '56', '35'],
      ['17', '22', '87', '36', '11'])

solve(['13', '12312', '5', '77', '4'],
      ['22', '333', '5', '122', '44'])