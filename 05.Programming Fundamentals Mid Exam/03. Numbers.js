function topFiveGreatNumbers(input) {
  let arrOfNumbers = input.split(" ").map(Number);

  let sumOfNumbers = arrOfNumbers.reduce((sum, el) => {
    return (sum += el);
  }, 0);
  let averageNum = sumOfNumbers / arrOfNumbers.length;
  let sortedArrOfNumbers = arrOfNumbers.sort((a, b) => b - a);

  if (sortedArrOfNumbers.length > 5) {
    sortedArrOfNumbers.splice(5);
  }

  let arrOfFiveGreatNums = sortedArrOfNumbers.filter((el) => {
    if (el > averageNum) {
      return el;
    }
  });
  if (arrOfFiveGreatNums.length === 0) {
    console.log("No");
  } else {
    console.log(arrOfFiveGreatNums.join(" "));
  }
}
topFiveGreatNumbers("5 2 3 4 -10 30 40 50 20 50 60 60 51");
topFiveGreatNumbers("10 20 30 40 50");
topFiveGreatNumbers("1");
topFiveGreatNumbers("-1 -2 -3 -4 -5 -6");
