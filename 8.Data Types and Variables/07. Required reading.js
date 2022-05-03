function solve(numOfPages , pagesPerHour , countDays) {
    let totalHours = numOfPages / pagesPerHour;
    let hoursForADay = totalHours / countDays;
    console.log(hoursForADay);
}
solve(212,20 ,2)
solve(432,15 ,4)