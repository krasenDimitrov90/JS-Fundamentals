function printAndSum(N1, N2) {
    let sum = 0;
    let text = "";
    for (let i = N1; i <= N2; i++) {
        text += i + " ";
        sum += i;
    }
    console.log(text);
    console.log(`Sum: ${sum}`);
}