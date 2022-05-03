function leapYear(year) {
    let condition = "no";
    if (year % 4 === 0 && year % 10 !== 0) {
        condition = "yes";
    } else if (year % 400 === 0) {
        condition = "yes";
    }
    console.log(condition);
}