function splitWordsByUperLetter(text) {
    text = text.match(/[A-Z][a-z]*/g)
    console.log(text.join(', '));
}
splitWordsByUperLetter('ThisIsSoAnnoyingToDo')