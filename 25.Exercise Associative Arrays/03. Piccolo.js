function parckingLot(input) {
    let carsInParking = {};
    for (const line of input) {
        let [state , carNum] = line.split(', ')
        if (state === 'IN') {
            carsInParking[carNum] = 'IN';
        }else {
            delete carsInParking[carNum];
        }
    }
    let sortedCarsInParking = Object.entries(carsInParking).sort((a , b) => a[0].localeCompare(b[0]))
    sortedCarsInParking.forEach(a => console.log(a[0]))
}
parckingLot(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
)