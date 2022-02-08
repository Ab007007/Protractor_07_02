class Employee {
    constructor(name, id)
    {   
        this.name = name;
        this.id = id;
        this.calAge = function (birthYear) {
            console.log(2022 - birthYear);
        }
    }   

}
let emp1 = new Employee("Employee1","emp123")

console.log(`Employee Name ${emp1.name}`);
console.log(`Employee ID ${emp1['id']}`);
emp1.calAge(1990);


let emp2 = class {
    
}