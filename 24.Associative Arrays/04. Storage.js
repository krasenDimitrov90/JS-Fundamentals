function storage(input) {
    let storageList = new Map();
    for (const line of input) {
        let tokens = line.split(' ');
        let item = tokens[0];
        let quantity = Number(tokens[1]);
        if (!storageList.has(item)) {
            storageList.set(item,quantity);
        }else {
            let currentQuantity = storageList.get(item);
            currentQuantity += quantity;
            storageList.set(item,currentQuantity)
        }
    }
    for (const [item , quantity] of storageList) {
        console.log(`${item} -> ${quantity}`);
    }
}
storage([
'tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40'])