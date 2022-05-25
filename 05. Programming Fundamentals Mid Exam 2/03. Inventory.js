function manipulatingArray(input) {
    let items = input.shift().split(', ')

    let tokens = input.shift()

    while (tokens !== 'Craft!') {
        tokens = tokens.split(' - ')

        let command = tokens[0];
        let item = tokens[1]

        if (command === 'Collect') {
            add(items, item)
        } else if (command === 'Drop') {
            remove(items, item)
        } else if (command === 'Combine Items') {
            let [oldItem, newItem] = item.split(':')
            modify(items, oldItem, newItem)

        } else if (command === 'Renew') {
            putItemOnLastIndex(items, item)
        }
        tokens = input.shift()
    }

    console.log(items.join(', '));

    function add(arrItems, item) {
        if (!arrItems.includes(item)) {
            arrItems.push(item)
        }
        return arrItems
    }

    function remove(arrItems, item) {
        if (arrItems.includes(item)) {
            let indexToRemove = arrItems.indexOf(item)
            arrItems.splice(indexToRemove, 1)
        }
        return arrItems
    }

    function modify(arrItems, oldItem, newItem) {
        if (arrItems.includes(oldItem)) {
            let indexToRemove = arrItems.indexOf(oldItem)
            arrItems.splice(indexToRemove + 1, 0, newItem)
        }
        return arrItems
    }

    function putItemOnLastIndex(arrItems, item) {
        if (arrItems.includes(item)) {
            let indexToRemove = arrItems.indexOf(item)
            let newItem = arrItems.splice(indexToRemove, 1)
            arrItems.push(newItem)
        }
        return arrItems
    }
}
manipulatingArray([
    'Iron, Wood, Sword', 
    'Collect - Gold', 
    'Drop - Wood', 
    'Craft!'
  ]
  
)