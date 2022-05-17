function catsInfo(input) {
    let cats = [];
    class Cat {
        constructor (name,age) {
            this.catName = name;
            this.catAge = age;
            this.meow = () => {
                console.log(`${this.catName}, age ${this.catAge} says Meow`);
            }
        }
    }

    let arrInputL = input.length;
    for (let i = 0; i < arrInputL; i++) {
        let catData = input[i].split(' ');
        let catName = catData[0];
        let catAge = catData[1];
        cats.push(new Cat(catName,catAge))
        
    }
    cats.forEach(cat => cat.meow())
}
catsInfo(['Mellow 2', 'Tom 5'])