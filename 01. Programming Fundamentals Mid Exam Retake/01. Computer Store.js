function priceForAllParts(input) {
    let token = input.shift();
    let partsPricies = [];
    while (token !== 'special' && token !== 'regular') {
        let price = +token;
        if (price < 0) {
            console.log('Invalid price!');
            token = input.shift();
            continue;
        }

        partsPricies.push(price);
        token = input.shift();
    }

    let sum = partsPricies.reduce((sum, el) => sum += el, 0)
    let taxes = sum * 0.20;
    let totalPrice = sum + taxes;
    let discount = 0.10;
    if (token === 'special') {
        totalPrice -= totalPrice * discount;
    }
    if (totalPrice === 0) {
        console.log("Invalid order!");
    } else {
        console.log("Congratulations you've just bought a new computer!");
        console.log(`Price without taxes: ${sum.toFixed(2)}$`);
        console.log(`Taxes: ${taxes.toFixed(2)}$`);
        console.log('-----------');
        console.log(`Total price: ${totalPrice.toFixed(2)}$`);
    }
}
priceForAllParts([
    '1023', 
    '15', 
    '-20',
    '-5.50',
    '450', 
    '20', 
    '17.66', 
    '19.30', 'regular'
    ])
    