function treasuryItems(input) {
    let tresury = input.shift().split('|')

    let tokens = input.shift()

    while (tokens !== 'Yohoho!') {

        tokens = tokens.split(' ')
        let command = tokens.shift()
        if (command === 'Loot') {
            let itemsToAdd = tokens;
            addItems(itemsToAdd, tresury)

        } else if (command === 'Drop') {
            let index = +tokens;
            moveToLastPosition(tresury, index)

        } else if (command === 'Steal') {
            let count = +tokens;
            removeItems(tresury, count)
        }
        tokens = input.shift()
    }

    if (tresury.length === 0) {
        console.log(`Failed treasure hunt.`);
    } else {
        let sum = tresury.reduce((acc, el) => acc + el.length, 0)
        sum /= tresury.length;
        console.log(`Average treasure gain: ${sum.toFixed(2)} pirate credits.`);
    }






    function addItems(arrItems, tresury) {
        for (const item of arrItems) {
            if (!tresury.includes(item)) {
                tresury.unshift(item)
            }
        }
    }

    function moveToLastPosition(tresury, index) {
        if (tresury[index] !== undefined) {
            let itemToMove = tresury.splice(index, 1).join()
            tresury.push(itemToMove)
        }
    }

    function removeItems(tresury, itemsCountToPop) {
        let removedItems = []
        while (tresury.length > 0) {
            if (itemsCountToPop === 0) {
                break
            }
            let removedItem = tresury.pop();
            removedItems.unshift(removedItem)
            itemsCountToPop--;
        }
        if (removedItems !== 0) {
            console.log(removedItems.join(', '));
        }
        return tresury
    }
}
treasuryItems(["Diamonds|Silver|Shotgun|Gold",
    "Loot Silver Medals Coal",
    "Drop -1",
    "Drop 1",
    "Steal 6",
    "Yohoho!"])
