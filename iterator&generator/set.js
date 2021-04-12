let set1 = new Set();
console.log(set1.add("munna").add("john").add("5")); //Set(3) { 'munna', 'john', '5' }
console.log(set1.size); //3
///////////////////////
let set2 = new Set([1, 2, 3]); //set from array
console.log(set2); //Set(3) { 1, 2, 3 }
let set3 = new Set("bangladesh"); //set from string
console.log(set3); //Set(9) { 'b', 'a', 'n', 'g', 'l', 'd', 'e', 's', 'h' }
let arr = [...set2, ...set3]; //array from set
console.log(arr); //[1,   2,   3,   'b', 'a','n', 'g', 'l', 'd', 'e','s', 'h']
for (let value of set2) {
  console.log(value); //set is iterable
}
////////////////////
let union = new Set([...[1, 2, 3], ...[2, 3, 5]]); //union
console.log(union); //Set(4) { 1, 2, 3, 5 }
let intersection = new Set(
  [...[1, 2, 3, 10, 50]].filter((value) => {
    return union.has(value);
  })
);
console.log(intersection); //Set(3) { 1, 2, 3 }
let difference = new Set(
  [...[1, 2, 3, 10, 50]].filter((value) => {
    return !union.has(value);
  })
);
console.log(difference); //Set(2) { 10, 50 }
