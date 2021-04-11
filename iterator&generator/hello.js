var obj = { a: 10, b: 20, c: 30 };
// let entries = Object.values(obj);
// let length = entries.length;

Object.prototype[Symbol.iterator] = function () {
  let entries = Object.entries(this);
  let length = entries.length;
  let i = 0;
  return {
    next() {
      return {
        done: i >= length,
        value: entries[i++],
      };
    },
  };
};
let iterate = obj[Symbol.iterator]();
console.log(iterate.next()); //[ 'a', 10 ]
console.log(iterate.next()); //[ 'b', 20 ]
console.log(iterate.next()); //[ 'c', 30 ]
console.log(iterate.next()); //undefimed
console.log(iterate.next()); //undefimed

let arr = [...obj]; //[ [ 'a', 10 ], [ 'b', 20 ], [ 'c', 30 ] ]
console.log(arr); //[ [ 'a', 10 ], [ 'b', 20 ], [ 'c', 30 ] ]
for (let value of obj) {
  console.log(value); //[ 'a', 10 ] [ 'b', 20 ] [ 'c', 30 ]
}
