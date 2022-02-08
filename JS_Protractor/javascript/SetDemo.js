let grade = new Set()

grade.add("A")
grade.add("B")
grade.add("C")
console.log(grade.size);

console.log(grade.values());

grade.forEach(function(element){
    console.log(`Collection Contains ${element}`);
})