function smallestBiggestNumber(input) {
    //let arrayOfNumbers = input;
    let sortedArray = input.sort((a,b) => a - b);
    let smallBigNumSequence = [];
    while (sortedArray.length !== 0) {
        let biggestNum = sortedArray.pop();
        let smallestNum = sortedArray.shift();
        
        smallBigNumSequence.push(biggestNum);
        smallBigNumSequence.push(smallestNum);
    }
    console.log(smallBigNumSequence.join(' '));
}
smallestBiggestNumber([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])
smallestBiggestNumber([34, 2, 32, 45, 690, 6, 32, 7, 19, 47])