function extractFoodInfo(input) {

    class foodInfo {
        constructor (item , date , calories) {
            this.item = item;
            this.date = date;
            this.calories = calories;
            this.printInfo = () => {
                console.log(`Item: ${this.item}, Best before: ${this.date}, Nutrition: ${this.calories}`);
            }
        }
    }

    let foods = [];
    let sum = 0;

    let pattern = /(#|\|)(?<item>[A-Za-z ]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<cal>\d+)\1/g

    let match;

    while ((match = pattern.exec(input)) !== null) {
         
        sum += +match.groups['cal'];
        foods.push(new foodInfo (match.groups['item'] , match.groups['date'] , +match.groups['cal']))
    }

    let daysEnoughFood = Math.floor(sum / 2000);
    console.log(`You have food to last you for: ${daysEnoughFood} days!`);
    foods.forEach((food) => food.printInfo())
}
extractFoodInfo([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
    ]
    )