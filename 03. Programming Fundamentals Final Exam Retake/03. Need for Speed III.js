function carsMileage(input) {

    let countCars = +input.shift();
    let cars = [];

    for (let i = 0; i < countCars; i++) {

        let tokens = input
            .shift()
            .split('|');
        let car = tokens.shift();
        let [mileage , fuel] = tokens.map(Number);
        let carData = {
            carName: car,
            mileage,
            fuel
        }
        cars.push(carData);
    }

    while (input[0] !== "Stop") {

        let tokens = input.shift().split(' : ')
        let command = tokens.shift();
        let car = tokens.shift();

        if (command === 'Drive') {

            let [distance , fuelNeeded] = tokens.map(Number);
            drive(car , distance , fuelNeeded);

        } else if (command === 'Refuel') {

            let fuelRefuel = +tokens.shift();
            refuel(car , fuelRefuel);

        } else if (command === 'Revert') {

            let kilometers = +tokens.shift();
            revert(car , kilometers)
        }
    }

    for (let car of cars) {
        console.log(`${car.carName} -> Mileage: ${car.mileage} kms, Fuel in the tank: ${car.fuel} lt.`);
    }

    function drive(car , distance , fuelNeeded) {

        let index = cars.findIndex(obj => obj.carName === car);
        let currentFuel = cars[index].fuel;

        if (currentFuel - fuelNeeded < 0) {
            console.log(`Not enough fuel to make that ride`);
        } else {
            cars[index].mileage += distance;
            cars[index].fuel -= fuelNeeded;
            console.log(`${car} driven for ${distance} kilometers. ${fuelNeeded} liters of fuel consumed.`);
        } 

        let currentMileage = cars[index].mileage;
        if (currentMileage > 100000) {
            console.log(`Time to sell the ${car}!`);
            cars.splice(index,1)
        }
    }

    function refuel(car , fuelRefuel) {

        let index = cars.findIndex(obj => obj.carName === car);
        let currentFuel = cars[index].fuel;

        if (currentFuel + fuelRefuel > 75) {

            let fuelRefueled = 75 - currentFuel;
            cars[index].fuel += fuelRefueled;
            console.log(`${car} refueled with ${fuelRefueled} liters`);

        } else {
            cars[index].fuel += fuelRefuel;
            console.log(`${car} refueled with ${fuelRefuel} liters`);
        }
    }

    function revert(car , kilometers) {

        let index = cars.findIndex(obj => obj.carName === car);
        let currentMileage = cars[index].mileage;

        if (currentMileage - kilometers < 10000) {
            cars[index].mileage = 10000;
        } else {
            cars[index].mileage -= kilometers;
            console.log(`${car} mileage decreased by ${kilometers} kilometers`);
        }
    }
}

carsMileage([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
  ]
)