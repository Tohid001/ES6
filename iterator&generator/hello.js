let a = 10;
let obj = {
  next() {
    return {
      done: a++,
    };
  },
};
console.log(obj.next());
console.log(a);
console.log(obj.next());
