function perfectNum(number) {
    let halfNum = number / 2;
    let sum = 0;
    for (let i = 1; i <= halfNum; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }

    if (sum === number) {
        console.log(`We have a perfect number!`);
    }else {
        console.log(`It's not so perfect.`);
    }
}
perfectNum(6)
perfectNum(28)
perfectNum(1236498)