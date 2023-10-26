class Employee{

     static headCount:number=0;

     constructor( private firstName:string,private lastName:string,private jobTitle:string){

            Employee.headCount++;


     }
}

let john=new Employee("John","Doe","FrontEndDeveloper");
let jane=new Employee("Jane","Sakxena","Java Developer");
console.log(Employee.headCount);
console.log(john);
console.log(jane);