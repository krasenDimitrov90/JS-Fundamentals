function solve(arr1 , arr2) {
    for (let i = 0; i < arr1.length; i++) {
        let currentLetter = arr1[i]
        for (const letter of arr2) {
            if (currentLetter === letter) {
                console.log(letter);
            }
        }
    }
}
solve(['Hey', 'hello', 2, 4, 'Peter', 'e'],
      ['Petar', 10, 'hey', 4, 'hello', '2'])
solve(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
      ['s', 'o', 'c', 'i', 'a', 'l'])