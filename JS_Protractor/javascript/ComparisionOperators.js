let x = 2;
let y = 2;
let z = "2"
let p = 20;

console.log("Verify values are equal " + (x==y));
console.log("Verify values are equal " + (x==z));
console.log("Verify values are equal along with DT " + (x===y));
console.log("Verify values are equal along with DT " + (x===z));


console.log("Verify values are NOT equal " + (x!=y));
console.log("Verify values are NOT equal " + (x!=z));
console.log("Verify values are NOT equal along with DT " + (x!==y));
console.log("Verify values are NOT equal along with DT " + (x!==z));

console.log("x is greater then p " + (x>p));

console.log("x is less then p " + (x<p));

console.log("Ternary : " + ((x>p)?"X is Greater " : "P is greater "));