/*
    function functionName(arguments)
    {
    
    }

*/
//function definition
function add(a=5, b=5)
{
    console.log(arguments);
    console.log(`Sum of two numbers is ${a+b}`);
}

add(22,33);

add(2,33);

add();

// function Expression
let avg2 = function(a,b) {
    let c = (a + b ) / 2
    return c

}

console.log(avg2(5,5));

// Arrow function
let avg3 = (a,b) => {
    let c = (a + b ) / 2
    return c
}
console.log(`Average of numbers using Arrow function : ${avg2(52,50)}`);
