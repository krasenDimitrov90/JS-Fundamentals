function solve(startYield) {
    let dayCounter = 0;
    let spiceExtract = 0;
    while (startYield >= 100) {
        spiceExtract += startYield;
        dayCounter++;
        startYield -= 10;
        if (spiceExtract >= 26) {
            spiceExtract -= 26;
        }
    }
    if (spiceExtract >= 26) {
        spiceExtract -= 26;
    }
    
    console.log(dayCounter);
    console.log(spiceExtract)
}
solve(111)
solve(450)