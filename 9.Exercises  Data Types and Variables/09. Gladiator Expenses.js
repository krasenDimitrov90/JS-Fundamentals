function solve (lostFights , helmetPrice , swordPrice , shieldPrice , armorPrice) {
    let helmetCosts = Math.floor(lostFights / 2) * helmetPrice;
    let swordCosts = Math.floor(lostFights / 3) * swordPrice;
    let shieldCosts = Math.floor(lostFights / 6) * shieldPrice;
    let armorCosts = Math.floor(lostFights / 12) * armorPrice;
    let totalCosts = helmetCosts + swordCosts + shieldCosts + armorCosts;

    console.log(`Gladiator expenses: ${totalCosts.toFixed(2)} aureus`);
}
solve (7,2,3,4,5)
solve (23,12.50,21.50,40,200)