function division(N) {
    let divNumber = 0;
    if (N % 2 === 0) {
        divNumber = 2;
    }if (N % 3 === 0) {
        divNumber = 3;
    }if (N % 6 === 0) {
        divNumber = 6;
    }if (N % 7 === 0) {
        divNumber = 7;
    }if (N % 10 === 0) {
        divNumber = 10;
    }
    if (divNumber != 0) {
        console.log(`The number is divisible by ${divNumber}`);
    }else {
        console.log("Not divisible");
    }
}