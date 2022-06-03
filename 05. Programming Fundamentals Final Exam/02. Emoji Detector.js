function solve(input) {

    let text = input.pop();
    let emojiPattern = /(::|\*\*)(?<emoji>[A-Z][a-z]{2,})\1/g
    let numbers = text.match(/[0-9]/g).map(Number);
    let threshold = numbers.reduce((acc, el) => acc *= el, 1)
    let emojis = text.match(emojiPattern);

    let coolEmojis = [];
    for (let emoji of emojis) {
        let chars = emoji
            .match(/\w+/g)
            .shift()
            .split('')
        let sum = 0;
        for (let char of chars) {
            let number = char.charCodeAt(0);
            sum += number;
        }
        if (sum >= threshold) {
            coolEmojis.push(emoji);
        }
    }
    console.log(`Cool threshold: ${threshold}`);
    console.log(`${emojis.length} emojis found in the text. The cool ones are:`);
    console.log(coolEmojis.join('\n'));
}

solve(["5, 4, 3, 2, 1, go! The 1-th consecutive banana-eating contest has begun! ::Joy:: **Banana** ::Wink:: **Vali** ::valid_emoji::"])