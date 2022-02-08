const resto = new Map();

resto.set('name', 'Nandana')
resto.set('address', 'Bangalore')
resto.set(1, "asdklfj sdlkjflkdjsf lsdkjfsaf")
resto
.set('categories', ['Indian','Hydrabadi','chinees'])
.set('open',11)
.set('close',23)
.set(true, "we are open")
.set(false, 'We are closed')

console.log(resto.get('name'));

console.log(...resto);

console.log(resto.has('name'));

resto.delete(1)
console.log(resto.has(1));

resto.forEach(ele =>{
    console.log(ele);
})