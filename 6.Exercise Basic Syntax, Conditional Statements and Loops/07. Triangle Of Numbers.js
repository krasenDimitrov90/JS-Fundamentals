function triangleOfNumbers(N1) {
    let string = "";
    for (let i = 1; i <= N1; i++) {
        for (let j = 1; j <= i; j++) {
            string += i + " ";
        }
        string += "\n";
    }
    console.log(string);
}