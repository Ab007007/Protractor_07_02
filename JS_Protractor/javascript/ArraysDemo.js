let numbers = [1,2,3,4,5,6,7,8]


let fruits = ['Apple', 'Orange', 'Butterfruit', 'Chikoo']

console.log(fruits);

fruits.push('Cherry')
console.log(`Array after using push method : ${fruits}`);
console.log(`Length of an array ${fruits.length}`);

fruits.pop();
console.log(`Array after using pop method : ${fruits}`);
console.log(`Length of an array ${fruits.length}`);

fruits.unshift('Lemon')
console.log(`Array after using unshift method : ${fruits}`);
console.log(`Length of an array ${fruits.length}`);

fruits.shift();
console.log(`Array after using shift method : ${fruits}`);
console.log(`Length of an array ${fruits.length}`);

delete fruits[1]
console.log(`Array after using delete method : ${fruits}`);
console.log(`Length of an array ${fruits.length}`);
fruits[1] = 'New Orange'
console.log(`Array after using Insert : ${fruits}`);
console.log(`Length of an array ${fruits.length}`);

fruits.splice(0,2);
console.log(`Array after using Splice : ${fruits}`);
console.log(`Length of an array ${fruits.length}`);

fruits.splice(2,0,'OOOOOORAnge','GGGGrapes')
console.log(`Array after using Splice : ${fruits}`);
console.log(`Length of an array ${fruits.length}`);


let citricFruits = fruits.slice(1,3);
console.log(`Array after using Sub Array : ${citricFruits}`);


let evenmum = [2,4,6,8]
let oddnum = [1,3,5,7]

let nums = evenmum.concat(oddnum)
console.log(nums);

console.log(nums.join(", "));