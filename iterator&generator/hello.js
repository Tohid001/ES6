var obj = { a: 10, b: 20, c: 30 };
let entries = Object.entries(obj);
let length = entries.length;

Object.prototype[Symbol.iterator] = function () {
  //   let entries = Object.entries(this);
  //   let length = entries.length;
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
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());
console.log(iterate.next());

for (let pair of obj) {
  console.log(pair);
}
