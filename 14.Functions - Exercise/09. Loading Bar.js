function loadingBar(number) {
    let numToStopAt = number / 10;
    let loadingArr = Array(10).fill('.');
    for (let i = 0; i < numToStopAt; i++) {
        loadingArr[i] = '%'
    }
    
    if (number === 100) {
        console.log(`100% Complete!`);
        console.log(`[${loadingArr.join('')}]`);
    }else {
        console.log(`${number}% [${loadingArr.join('')}]`);
        console.log(`Still loading...`);
    }
}
loadingBar(30)
loadingBar(50)
loadingBar(100)