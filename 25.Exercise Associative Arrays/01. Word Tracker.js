function wordTracker(input) {
    let wordsToFind = input.shift().split(" ");
    let wordsTrackerList = {};
    for (const word of wordsToFind) {
        wordsTrackerList[word] = 0
    }
    for (const word of input) {
        if (wordsTrackerList.hasOwnProperty(word)) {
            wordsTrackerList[word]++;
        }
    }
    let sortedList = Object.entries(wordsTrackerList);
    sortedList.sort((a , b) => b[1] - a[1])
    for (const [word , count] of sortedList) {
        console.log(`${word} - ${count}`);
    }
}
wordTracker([
    "this sentence",
    "In",
    "this",
    "sentence",
    "you",
    "have",
    "to",
    "count",
    "the",
    "occurrences",
    "of",
    "the",
    "words",
    "this",
    "and",
    "sentence",
    "because",
    "this",
    "is",
    "your",
    "task",
]);
