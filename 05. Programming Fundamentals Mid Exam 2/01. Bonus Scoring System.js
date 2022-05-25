function maxBonusPointsStudent(input) {
    let studentsCount = Number(input.shift());
    let lecturesCount = Number(input.shift());
    let initialBonus = Number(input.shift());
    let maxBonusForStudent = 0;
    let maxAttendancesFromStudent = 0;

    for (let i = 0; i < studentsCount; i++) {

        let attendancesFromStudent = Number(input[i]);
        let currentBonusForStudent =
            (attendancesFromStudent / lecturesCount) * (5 + initialBonus);

            
        if (currentBonusForStudent > maxBonusForStudent) {
            maxBonusForStudent = currentBonusForStudent;
            maxAttendancesFromStudent = attendancesFromStudent;
        }
    }
    console.log(`Max Bonus: ${Math.ceil(maxBonusForStudent)}.`);
    console.log(
        `The student has attended ${maxAttendancesFromStudent} lectures.`
    );
}
maxBonusPointsStudent()