function shopingList(input) {
    let listProducts = input.shift().split('!')
    

    let tokens = input.shift()

    while (tokens !== 'Go Shopping!') {
        tokens = tokens.split(' ')
        let priority = tokens[0]
        let product = tokens[1]
        if (priority === 'Urgent') {
            add(listProducts, product)
        } else if (priority === 'Unnecessary') {
            remove(listProducts, product)
        } else if (priority === 'Correct') {
            let newProduct = tokens[2]
            modifiy(listProducts, product, newProduct)
        } else if (priority === 'Rearrange') {
            moveAtLastPosiocion(listProducts, product)
        }
        tokens = input.shift()
    }

    console.log(listProducts.join(', '));

    function add(listProducts, item) {
        if (!listProducts.includes(item)) {
            listProducts.unshift(item)
        }
    }
    function remove(listProducts, item) {
        if (listProducts.includes(item)) {
            let index = listProducts.indexOf(item)
            listProducts.splice(index, 1)
        }
    }
    function modifiy(listProducts, item, newItem) {
        if (listProducts.includes(item)) {
            let index = listProducts.indexOf(item)
            // listProducts.splice(index,1,newItem)

            listProducts[index] = newItem;
        }
    }
    function moveAtLastPosiocion(listProducts, item) {
        if (listProducts.includes(item)) {
            let index = listProducts.indexOf(item)
            let itemToMove = listProducts.splice(index, 1)
            listProducts.push(itemToMove)
        }
    }
}
shopingList(["Milk!Pepper!Salt!Water!Banana",
"Correct Pepper Onion",
"Urgent Salt",
"Unnecessary Grapes",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"])
