function foodForAMonth(input) {
    let pigWeight = +input.pop() * 1000;
    let arr = input.map(Number)
    let provisions = arr.map(x => x * 1000);

    let foodIndex = 0;
    let hayIndex = 1;
    let coverIndex = 2;
    let coverToPut = pigWeight / 3;
    let isProvisionsEnough = true//(currentValue) => currentValue > 0;
    let days = 1;
    while (days <= 30 && isProvisionsEnough) {
        if (provisions[foodIndex] - 300 <= 0) {
            isProvisionsEnough = false;
            break
        }
        provisions[foodIndex] -= 300;
        if (days % 2 === 0) {
            let quantityHay = provisions[foodIndex] * 0.05;
            if (provisions[hayIndex] - quantityHay <= 0) {
                isProvisionsEnough = false;
                break
            }
            provisions[hayIndex] -= quantityHay;
        }
        if (days % 3 === 0) {
            if (provisions[coverIndex] - coverToPut <= 0) {
                isProvisionsEnough = false;
                break
            }
            provisions[coverIndex] -= coverToPut
        }
        days++
    }
    if (!isProvisionsEnough) {
        console.log(`Merry must go to the pet store!`);
    } else {
        let food = (provisions[0] / 1000).toFixed(2);
        let hey = (provisions[1] / 1000).toFixed(2);
        let cover = (provisions[2] / 1000).toFixed(2);
    
        console.log(`Everything is fine! Puppy is happy! Food: ${food}, Hay: ${hey}, Cover: ${cover}.`);
    }

}
foodForAMonth(["1",
    "1.5",
    "3",
    "1.5"
])
