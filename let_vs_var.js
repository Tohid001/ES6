for (var i = 0; i < 3; i++) {}
// i += 10;
console.log(i); //3
//////
for (let i = 0; i < 3; i++) {}
console.log(i); //i is not defined
//////
let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function () {
      return i;
    };
  }
}
console.log(printNumTwo()); //2
console.log(i); //i is not defined
/////////
let printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function () {
      return i;
    };
  }
}
console.log(printNumTwo()); //3
console.log(i); //3
