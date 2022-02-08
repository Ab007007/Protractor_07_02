let num = 5;

for (let index = 1; index <=10 ; index++) 
{
    console.log(`${num} * ${index} = ${num * index}`);
    
}


let fruits = ['Apple', 'Orange', 'Butterfruit', 'Chikoo']

for (let index = 0; index < fruits.length; index++) {
    console.log(`Fruit at index ${index} is ${fruits[index]}`);
    
}

for (const i in fruits)
{
 console.log(fruits[i]);   
}



for (let fruit of fruits)
{
    console.log(`Fruits using forof ${fruit}`);
    
}

///TBD :  For EACH

fruits.forEach(function(fruit){
    console.log(`Using foreach ${fruit}`);
})