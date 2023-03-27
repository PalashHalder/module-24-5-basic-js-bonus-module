
//incremental way

/*
let sum = 0;
for(let i = 1; i <= 5; i++){
    sum = sum + i;
}

console.log(sum);
*/

// Decremental way

/*
let sum = 0;
for (let i = 5; i >= 1; i--) {
    sum = sum + i;
}

console.log(sum);

*/

// Doing the same thing with function

function sum(i) {
    console.log(i);
    return i + sum(i-1);
}
const result = sum(5);
console.log(result);

