function schoolGrades(input) {
    let gradesOfStudents = new Map();
    for (const line of input) {
        let tokens = line.split(' ')
        let currentStudent = tokens.shift();
        
        if (!gradesOfStudents.has(currentStudent)) {
            let arrOfGrades = [];
            gradesOfStudents.set(currentStudent,arrOfGrades)
        }
        let currentArrOfGrades = gradesOfStudents.get(currentStudent)
        for (const grade of tokens) {
            let currentGrade = +grade;
            currentArrOfGrades.push(currentGrade);
        }
        gradesOfStudents.set(currentStudent,currentArrOfGrades)
    }
    for (const [student , grades] of gradesOfStudents) {
        let averageGrade = grades.reduce((a,b) => a+b,0)
        averageGrade /= grades.length;
        gradesOfStudents.set(student,averageGrade)
    }
    let sortedStudents = Array.from(gradesOfStudents);
    sortedStudents.sort((a,b) => a[0].localeCompare(b[0]))
    sortedStudents.forEach(a => console.log(`${a[0]}: ${a[1].toFixed(2)}`))
}
schoolGrades(['Steven 3 5 6 4',
'George 4 6',
'Tammy 2 5 3',
'Steven 6 3']
)