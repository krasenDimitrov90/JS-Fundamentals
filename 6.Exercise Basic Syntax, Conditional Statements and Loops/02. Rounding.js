function rounding(N1,N2) {
    if (N2 > 15) {
        N2 = 15;
    }
    N1 = N1.toFixed(N2)
    N1 = parseFloat(N1);
    console.log(N1);
}