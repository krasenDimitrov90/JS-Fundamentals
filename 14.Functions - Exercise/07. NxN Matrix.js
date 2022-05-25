function printNxNMatrix(size) {
    
    let myArray = Array(size).fill( Array(size).fill(size) );
    
    for (const arr of myArray) {
        console.log(arr.join(' '));
    }
}
printNxNMatrix()
