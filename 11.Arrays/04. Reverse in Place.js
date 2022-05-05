function reverse(arr) {
    let revArr = []
    for (let i = arr.length -1; i >= 0 ; i--) {
        revArr.push(arr[i]);
        
    }
    console.log(revArr.join(" "));
}
reverse(['a', 'b', 'c', 'd', 'e'])
reverse(['abc', 'def', 'hig', 'klm', 'nop'])
reverse(['33', '123', '0', 'dd'])