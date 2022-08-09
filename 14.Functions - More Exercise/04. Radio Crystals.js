function cristalReform(input) {

    let counters = {
        cut: 0,
        lap: 0,
        grind: 0,
        etch: 0,
        xRay: 0,
    }

    let countersKeys = Object.keys(counters);

    let desireTickness = input.shift();

    for (let crystal of input) {
        console.log(`Processing chunk ${crystal} microns`);
        let cutCrystal = Math.floor(cut(crystal));
        let lapCrystal = Math.floor(lap(cutCrystal));
        let grindCrystal = (grind(lapCrystal));
        let etchCrystal = (etch(grindCrystal));
        let xRayCrystal = (xRay(etchCrystal));

        countersKeys.forEach(key => {
            if (counters[key] > 0 && key !== 'xRay') {
                let method = key.charAt(0).toUpperCase() + key.slice(1);
                console.log(`${method} x${counters[key]}`);
                console.log(`Transporting and washing`);
            } 
            if (key === 'xRay' && counters[key] > 0) {
                console.log(`X-ray x${counters.xRay}`);
            }
        })

        console.log(`Finished crystal ${xRayCrystal} microns`);
        countersKeys.forEach(key => counters[key] = 0)


    }

    function cut(crystal) {
        if ((crystal / 4) < desireTickness) {
            return crystal;
        }
        counters.cut++
        return cut(crystal / 4);
    }

    function lap(crystal) {
        if (crystal - crystal * 0.2 < desireTickness) {
            return crystal;
        }
        counters.lap++;
        return lap(crystal - crystal * 0.2);
    }

    function grind(crystal) {
        if (crystal - 20 < desireTickness) {
            return crystal;
        }
        counters.grind++
        return grind(crystal - 20);

    }

    function etch(crystal) {
        if (crystal - 2 < desireTickness - 1) {
            return crystal;
        }
        counters.etch++;
        return etch(crystal - 2);

    }

    function xRay(crystal) {
        if (crystal + 1 > desireTickness) {
            return crystal;
        }
        counters.xRay++;
        return xRay(crystal + 1)
    }
}

cristalReform([1375, 50000])