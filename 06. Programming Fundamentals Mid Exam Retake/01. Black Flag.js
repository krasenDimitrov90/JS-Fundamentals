function solve(input) {
    let [days , dailyPlunder , expectedPlunder ] = input.map(Number)
    let totalPlunder = 0;

    for (let i = 1; i <= days; i++) {
        totalPlunder += dailyPlunder;
        if (i % 3 === 0) {
            totalPlunder += dailyPlunder * 0.50;
        }
        if (i % 5 === 0) {
            totalPlunder -= totalPlunder * 0.30;
        }
    }
    if (expectedPlunder > totalPlunder) {
        let percent = (totalPlunder / expectedPlunder) * 100
        console.log(`Collected only ${percent.toFixed(2)}% of the plunder.`);
    }else {
        console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    }
}
solve(["10",
"20",
"380"])

