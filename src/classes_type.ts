class Employee{
    name:string;
    age: number;
    department:string

    constructor(name:string, age:number, department:string){
this.name=name;
this.age=age;
this.department=department;
    }
    employeDetails(){
        console.log('employee name is ${this.name} from ${this.department}')
    }
}

const employee =  new Employee("mahes", 23,"hello")
    employee.employeDetails()