function solve(number) {
    let days = ["Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday" , "Sunday"]
    if (number < 1 || number > 7) {
        console.log('Invalid day!')
    } else {
        switch (number) {
            case 1: console.log(days[0]);break;
            case 2: console.log(days[1]);break;
            case 3: console.log(days[2]);break;
            case 4: console.log(days[3]);break;
            case 5: console.log(days[4]);break;
            case 6: console.log(days[5]);break;
            case 7: console.log(days[6]);break;
        }
    }
}
solve(3)
solve(6)
solve(11)