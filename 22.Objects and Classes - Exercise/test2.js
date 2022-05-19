function uniquePINCodes(input) {
    let text = '';
    let counter = 0;
    for (let i = 1; i <= 3; i++) {
        for (let j = 1; j <= 3; j++) {
            for (let k = 1; k <= 3; k++) {
                if (i !==2 &&j !== 2 && k !== 2) {
                    text += i +','+ j +',' + k+'  ';
                    counter++
                }
            }
        }
        
    }
    console.log(text);
    console.log(counter);
}
uniquePINCodes([3,5,5])