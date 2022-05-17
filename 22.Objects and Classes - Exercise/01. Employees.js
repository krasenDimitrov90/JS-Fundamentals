function employeInfo(input) {
    class Employee {
        constructor (name , number) {
            this.name = name;
            this.personalNumber = number;
            this.printInfo = () => {
                console.log(`Name: ${this.name} -- Personal Number: ${this.personalNumber}`);
            }
        }
    }
    let employeesArr = [];
    for (const line of input) {
        let employeeName = line;
        let number = employeeName.length;
        employeesArr.push(new Employee(employeeName,number))
    }
    employeesArr.forEach(employee => employee.printInfo());
}
employeInfo([
  "Silas Butler",
  "Adnaan Buckley",
  "Juan Peterson",
  "Brendan Villarreal",
]);
