function addressBook(input) {
    let book = new Map();
    for (const line of input) {
        let [name , address] = line.split(':')
        book.set(name,address);
    }
    let sortedBook = Array.from(book);
    sortedBook.sort((a,b) => a[0].localeCompare(b[0]))
    sortedBook.forEach(a => console.log(`${a[0]} -> ${a[1]}`))
}
addressBook([
'Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd'])