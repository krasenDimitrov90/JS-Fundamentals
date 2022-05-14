function wallConstructionTracker(arr) {
  let counter = 0;
  let isLessFrom30 = (a) => a >= 30;
  let concreteArr = [];

  while (!arr.every(isLessFrom30)) {
    let element = 0;
    let currentArr = arr.map((a) => {
      if (a + 1 <= 30) {
        a += 1;
        element += 195;
      }
      return a;
    });
    concreteArr.push(element);
    arr = currentArr;
  }

  let sumConcrete = concreteArr.reduce((a, b) => {
    return a + b;
  }, 0);

  let sumForPaying = sumConcrete * 1900;
  console.log(concreteArr.join(", "));
  console.log(`${sumForPaying} pesos`);
}
wallConstructionTracker([21, 25, 28]);
wallConstructionTracker([17]);
wallConstructionTracker([17, 22, 17, 19, 17]);
