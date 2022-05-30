function calculatePrice(input) {
    
    let pattern = />>(?<furn>\w+)<<(?<pr>\d+(\.\d+)?)!(?<quan>\d+)/;
    let furnitureArr = [];
    let furniture = ''
    let price = 0
    let quantity = 0
    let sum = 0;
    let tokens = input.shift();


    while (tokens !== 'Purchase') {
        let match = pattern.exec(tokens);

        if (match !== null) {

            furniture = match.groups['furn'];
            price = +match.groups['pr'];
            quantity = +match.groups['quan'];
            furnitureArr.push(furniture);
            sum += (price * quantity);
        }

        tokens = input.shift();
    }

    console.log(`Bought furniture:`);
    furnitureArr.forEach(el => console.log(el))
    console.log(`Total money spend: ${sum.toFixed(2)}`);
}
calculatePrice(['>>Laptop<<312.2323!3',
    '>>TV<<300.21314!5',
    '>Invalid<<!5',
    '>>TV<<300.21314!20',
    '>>Invalid<!5',
    '>>TV<<30.21314!5',
    '>>Invalid<<!!5',
    'Purchase']


)