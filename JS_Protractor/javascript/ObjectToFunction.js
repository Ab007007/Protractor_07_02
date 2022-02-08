const person = function(name, birthYear)
{
    this.name = name;
    this.birthYear = birthYear;
 
}

person.prototype.age = function () {
    
    console.log(`Age of a person is ${2022 - this.birthYear}`);
}
let p = new person('Aravinda',1980)
console.log(p);
p.age();