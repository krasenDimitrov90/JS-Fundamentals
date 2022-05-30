function calculateProductsPrice(input) {

    //let pattern = /%(?<name>[A-Z][a-z]+)%<(?<product>\w+)>\|(?<qty>\d+)\|(?<price>\d+\.?\d+)\$/;
    let customerPattern = /%(?<name>[A-Z][a-z]+)%/
    let productPattern = /<(?<product>\w+)>/
    let qtyPattern = /\|(?<qty>\d+)\|/
    let pricePattern = /(?<price>\d+\.?\d+)\$/

    let tokens = input.shift();
    let customer = '';
    let product = '';
    let quantity = 0;
    let price = 0;
    let totalSum = 0

    let validName;
    let validProduct;
    let validQuantity;
    let validPrice


    while (tokens !== 'end of shift') {

        validName = customerPattern.exec(tokens)
        validProduct = productPattern.exec(tokens)
        validQuantity = qtyPattern.exec(tokens)
        validPrice = pricePattern.exec(tokens)

        if (validName !== null && validProduct !== null && validQuantity !== null && validPrice !== null) {

            customer = validName.groups['name'];
            product = validProduct.groups['product'];
            quantity = +validQuantity.groups['qty'];
            price = +validPrice.groups['price'];
            let totalPrice = quantity * price;
            totalSum += totalPrice
            console.log(`${customer}: ${product} - ${totalPrice.toFixed(2)}`);
        }

        tokens = input.shift();
    }

    console.log(`Total income: ${totalSum.toFixed(2)}`);

}
calculateProductsPrice(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift']

)