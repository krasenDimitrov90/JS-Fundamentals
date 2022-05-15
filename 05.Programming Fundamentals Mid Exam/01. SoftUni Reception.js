function timeToAnserStudentsQuestions(input) {
    let studentsCount = Number(input.pop());
    let arrAsNumbers = input.map(Number)
    let studentsAnsweredAtOnes = arrAsNumbers.reduce((sum,el) => sum + el)
    let totalTimeNeeded = 0
    while (studentsCount > 0) {
        studentsCount -= studentsAnsweredAtOnes;
        totalTimeNeeded++;
        if (totalTimeNeeded % 4 === 0) {
            totalTimeNeeded++;
        }
    }
    console.log(`Time needed: ${totalTimeNeeded}h.`);
}
timeToAnserStudentsQuestions(['5','6','4','20']);
timeToAnserStudentsQuestions(['1','2','3','45'])
timeToAnserStudentsQuestions(['3','2','5','40'])
timeToAnserStudentsQuestions(['1','1','1','10'])