function meetings(input) {
    let schedule = new Map();
    for (const line of input) {
        let [weekDay , name] = line.split(' ');
        if (!schedule.has(weekDay)) {
            schedule.set(weekDay,name)
            console.log(`Scheduled for ${weekDay}`);
        }else {
            console.log(`Conflict on ${weekDay}!`);
        }
    }
    for (const [day , name] of schedule) {
        console.log(`${day} -> ${name}`);
    }
}
meetings([
 "Monday Peter",
 "Wednesday Bill", 
 "Monday Tim",
 "Friday Tim"]);
