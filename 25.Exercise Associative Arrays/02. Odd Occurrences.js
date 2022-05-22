function solve(input) {
    let words = input.toLowerCase().split(' ')
    let wordsList = new Map();
    for (const word of words) {
        let num = 0 
        if (wordsList.has(word)) {
            num = wordsList.get(word)
        }
        num++
        wordsList.set(word , num)
    }
    
    let sorted = Array.from(wordsList).filter(a => a[1] %2 !== 0)
    let result = '';
    for (const [key , value] of sorted) {
        result += key +' ';
    }
    console.log(result);
}
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')