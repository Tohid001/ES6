// let obj = {
//     a: 10,
//     b: 100,
//     [Symbol.iterator]: function* () {
//       let current = this.a;
//       while (current <= this.b) {
//         yield current;
//         current++;
//       }
//     },
//   };
//   let arr = [...obj];
//   let newObj = { ...obj };
//   console.log(arr);
//   console.log(newObj);

// let obj = { a: 10, b: 20, c: 30 };
// function* generator(obj) {
//   let current = obj.a;
//   while (current <= obj.c) {
//     yield current;
//     current++;
//   }
// }
// let iterator = generator(obj);
// let arr = [...iterator];
// console.log(arr);

// function* generator(obj) {
//   let entries = Object.entries(obj);
//   let length = entries.length;
//   let i = 0;
//   for (let element of entries) {
//     yield element[1];
//   }
// }
// let obj = { a: 10, b: 20, c: 30 };
// let iterator = generator(obj);
// console.log(iterator.next());
// console.log(iterator.next());

// function* generator(obj) {
//   let entries = Object.entries(obj);
//   for (let element of entries) {
//     yield element;
//   }
// }
// let obj = { a: 10, b: 20, c: 30 };
// let iterator = generator(obj);
// console.log(iterator.next());
// function* generator(arr) {
//   for (let element of arr) {
//     yield element;
//   }
// }
// let iterator = generator([1, 2, 3, 4, 5]);
// console.log(iterator.next());
// console.log(iterator.next());

// function* generator(start, end, step) {
//   let current = start;
//   while (!(current >= end)) {
//     yield current;
//     current = current + step;
//   }
// }
// let iterator = generator(1, 2000, 3);
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// let arr = [...iterator];
// console.log(arr);
