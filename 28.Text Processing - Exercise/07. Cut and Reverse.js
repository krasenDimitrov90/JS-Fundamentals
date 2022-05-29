function cutInHalfAndReverseString(text) {
    let halfLengthOfText = text.length / 2;
    let firstHalf = text.substring(0, halfLengthOfText);
    let secondHalf = text.substring(halfLengthOfText);

    firstHalf = firstHalf
        .split('')
        .reverse()
        .join('');

    secondHalf = secondHalf
        .split('')
        .reverse()
        .join('');

    console.log(firstHalf);
    console.log(secondHalf);
}
cutInHalfAndReverseString('tluciffiDsIsihTgnizamAoSsIsihT')