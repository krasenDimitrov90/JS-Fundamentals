function solve(input) {
    let hero = {
        name: 'Axie',
        level: 24,
        items: {
            item1: 'sword',
            item2:'knife'
        }
    }

hero.items.item3 = 'ball'
hero.cloutes = {}
console.log(hero.items);
hero.cloutes.shirt = 'black'
console.log(hero.cloutes);
console.log(hero);

let str = 'Isacc / 25 / Apple, GravityGun'
let arr = str.split(' / ',', ')
console.log(arr);

}
solve(['Krasen','32','Miro','28','Donika','28'])