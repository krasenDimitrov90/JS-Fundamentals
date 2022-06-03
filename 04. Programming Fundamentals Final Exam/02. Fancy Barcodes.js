function barcodesGrouping(input) {

    let pattern = /@#+([A-Z][A-Za-z0-9]{4,}[A-Z])@#+/
    let number = +input.shift();
    for (let line of input) {

        if (line.match(pattern) !== null) {
            let barcode = line.match(/\w+/).join('')
            if (barcode.match(/[0-9]/)) {
                let numbers = barcode.match(/[0-9]/g).join('')
                console.log(`Product group: ${numbers}`);
            } else {
                console.log(`Product group: 00`);
            }
            
        } else {
            console.log(`Invalid barcode`);
        }
    }
}

barcodesGrouping(["3",
"@#FreshFisH@#",
"@###Brea0D@###",
"@##Che4s6E@##"])
