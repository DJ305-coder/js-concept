// Remove duplicate element from array

const arr = [4,13,8,3,2,9,2,4,23,1,4, 10];

const newArr = [...new Set(arr)];

console.log(newArr);
 