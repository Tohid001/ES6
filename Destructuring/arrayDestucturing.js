// //////////////Basic variable assignment////////////////////////
const foo = ["one", "two", "three"];

const [a, b, c] = foo;
console.log(a); // "one"
console.log(b); // "two"
console.log(c); // "three"
// //////////////Default values///////////////////////
// let a, b;

// [a = 5, b = 7] = [1];
// console.log(a); // 1
// console.log(b); // 7
// ////////////////////////////////Swapping variables////////////////////////////////
// let a = 1;
// let b = 3;

// [a, b] = [b, a];
// console.log(a); // 3
// console.log(b); // 1

// const arr = [1, 2, 3];
// [arr[2], arr[1]] = [arr[1], arr[2]];
// console.log(arr); // [1,3,2]
// //////////////////Ignoring some returned values/////////////////////
// function f() {
//   return [1, 2, 3];
// }

// const [a, , b] = f();
// console.log(a); // 1
// console.log(b); // 3

// const [c] = f();
// console.log(c); // 1
// ////////////////////////////////////////////Assigning the rest of an array to a variable////////////////////////////////
// const [a, ...b] = [1, 2, 3];
// console.log(a); // 1
// console.log(b); // [2, 3]
// /////////////Array inside array////////////////////////////////
// let arr = [1, 2, [5, 6, 7], 789];
// let [, , [, , c]] = arr;
// console.log(c);
