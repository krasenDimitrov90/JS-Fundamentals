function phoneBook(input) {
    let book = new Map();
    for (const line of input) {
        let [name , phone] = line.split(' ')
        if (!book.has(name)) {
            book.set(name)
        }
        book.set(name,phone)
    }
    for (const [name , phone] of book) {
        console.log(`${name} -> ${phone}`);
    }
}
phoneBook([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344",
]);
