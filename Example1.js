var Employee = /** @class */ (function () {
    function Employee(firstName, lastName, jobTitle) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.jobTitle = jobTitle;
        Employee.headCount++;
    }
    Employee.headCount = 0;
    return Employee;
}());
var john = new Employee("John", "Doe", "FrontEndDeveloper");
var jane = new Employee("Jane", "Sakxena", "Java Developer");
console.log(Employee.headCount);
console.log(john);
console.log(jane);
