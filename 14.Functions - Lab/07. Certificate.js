function printCertificate(grade, name) {
  let fullName = nameOfPerson(name[0], name[1]);
  if (grade < 3) {
    console.log(`${fullName} does not qulify`);
  } else {
    printHeader();
    console.log(fullName);
    gradeResult(grade);
  }
}
printCertificate(5.55, ["Krasen", "Dimitrov"]);
printCertificate(5.7, ["Miroslav", "Dimitrov"]);
function nameOfPerson(firstName, lasName) {
  return `${firstName} ${lasName}`;
}
function printHeader() {
  console.log("~~~-   {@}   -~~~");
  console.log("~- Certificate -~");
  console.log("~~~-  ~---~  -~~~");
}
function gradeResult(grade) {
  if (grade < 3) {
    console.log(`Fail (2)`);
  } else if (grade < 3.5) {
    console.log(`Poor (${grade.toFixed(2)})`);
  } else if (grade < 4.5) {
    console.log(`Good (${grade.toFixed(2)})`);
  } else if (grade < 5.5) {
    console.log(`Very good (${grade.toFixed(2)})`);
  } else {
    console.log(`Excellent (${grade.toFixed(2)})`);
  }
}
