function heroInfo(input) {
    class Hero {
        constructor (name,level,items) {
            this.name = name,
            this.level = level,
            this.items = items
        }
    }
    let allHeros = [];
    for (const line of input) {
        let heroArrInfo = line.split(' / ');
        let items = heroArrInfo.pop().split(', ');
        //items.sort((a,b) => a.localeCompare(b))
        let [name , level] = heroArrInfo;
        allHeros.push(new Hero(name,level,items))
    }
    allHeros.sort((a,b) => a.level - b.level)
    allHeros.forEach(hero => {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items.join(', ')}`);
    })
    
}
heroInfo([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ])