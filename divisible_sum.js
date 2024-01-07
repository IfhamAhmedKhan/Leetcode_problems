const array = [];
let start = 1;
let end = 7;
let sum = 0;

for (let i = start; i <= end; i++) {
    array.push(i)  
}
console.log("Range is from "+start+" to "+end)

for (let i = 0; i < array.length; i++) {
    if (array[i] % 3 === 0 || array[i] % 5 === 0 || array[i] % 7 === 0) {
        sum += array[i];
    } 
}

console.log("The sum of Numbers which are divisible by 3, 4, 5 are : "+ sum)