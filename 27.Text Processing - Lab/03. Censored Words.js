function censorTheWord(str , wordToHide) {
    let wordToHideL = wordToHide.length;
    let result = str.replace(wordToHide , '*'.repeat(wordToHideL));
    while (result.includes(wordToHide)) {
        result = result.replace(wordToHide , '*'.repeat(wordToHideL));
    }
    console.log(result);
}
censorTheWord('A small sentence with some words', 'small')
censorTheWord('a small fafa small sdaad small', 'small')