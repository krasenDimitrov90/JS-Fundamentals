function solve(text) {
    let index = text.lastIndexOf('\\');
    let cutText = text.substring(index + 1);
    cutText = cutText.split('.');
    let extension = cutText.pop();
    let fileName = cutText.join('.');
    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
}
solve('C:\\Internal\\training-internal\\Template.sgsg.pptx')