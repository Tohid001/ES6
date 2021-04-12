////Custom build iterator(nayem)/////////
// var arr = [10, 22, 35]

// function createIterator(collection) {
//   let i = 0;
//   return {
//     next() {
//       return {
//         done: i >= collection.length,
//         value: collection[i++],
//       }

//     }

//   }
// }

// let iterate = createIterator(arr);
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());

////////////////////////////////custom iterator 2(sumit)////////////////////////////////
// function range(start, end, step) {
//   let current = start;
//   return {
//     [Symbol.iterator]: function () {
//       return {
//         next() {
//           let result = {
//             done: current > end,
//             value: current > end ? undefined : current,
//           };
//           current = current + step;
//           return result;
//         },
//       };
//     },
//   };
// }
// console.log(...range(1, 50000, 2));

////////////////////////////////custom iterator 3(sumit)////////////////////////////////
// var obj = { a: 10, b: 20, c: 30 };
// let entries = Object.values(obj);
// let length = entries.length;

// Object.prototype[Symbol.iterator] = function () {
//   //   let entries = Object.entries(this);
//   //   let length = entries.length;
//   let i = 0;
//   return {
//     next() {
//       return {
//         done: i >= length,
//         value: entries[i++],
//       };
//     },
//   };
// };
// let iterate = obj[Symbol.iterator]();
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());
// console.log(iterate.next());

// let arr = [...obj]; //[ 10, 20, 30 ]
// console.log(arr); //[ 10, 20, 30 ]
// for (let value of obj) {
//   console.log(value);//10 20 30

// }

////////////////////////////////custom iterator 4(sumit)////////////////////////////////
// var obj = { a: 10, b: 20, c: 30 };
// // let entries = Object.values(obj);
// // let length = entries.length;

// Object.prototype[Symbol.iterator] = function () {
//   let entries = Object.entries(this);
//   let length = entries.length;
//   let i = 0;
//   return {
//     next() {
//       return {
//         done: i >= length,
//         value: entries[i++],
//       };
//     },
//   };
// };
// let iterate = obj[Symbol.iterator]();
// console.log(iterate.next()); //[ 'a', 10 ]
// console.log(iterate.next()); //[ 'b', 20 ]
// console.log(iterate.next()); //[ 'c', 30 ]
// console.log(iterate.next()); //undefimed
// console.log(iterate.next()); //undefimed

// let arr = [...obj]; //[ [ 'a', 10 ], [ 'b', 20 ], [ 'c', 30 ] ]
// console.log(arr); //[ [ 'a', 10 ], [ 'b', 20 ], [ 'c', 30 ] ]
// for (let value of obj) {
//   console.log(value); //[ 'a', 10 ] [ 'b', 20 ] [ 'c', 30 ]
// }

/////////////symbol iterator//////////////////////////
// var arr = [10, 22, 35]
// let _iterate = arr[Symbol.iterator]();
// console.log(_iterate.next());
// console.log(_iterate.next());
// console.log(_iterate.next());
// console.log(_iterate.next());
// console.log(_iterate.next());

// let str = "TEXT";
// let iterateText = str[Symbol.iterator]();

// console.log(iterateText.next());
// console.log(iterateText.next());
// console.log(iterateText.next());
// console.log(iterateText.next());
// console.log(iterateText.next());

//////////////////////iterator in object////////////////////////////////
// let obj = {
//   start: 1,
//   end: 5,
//   [Symbol.iterator]: function () {
//     let currentValue = this.start;
//     const self = this;
//     return {
//       next() {
//         return {
//           done: currentValue > self.end,
//           value: currentValue > self.end ? undefined : currentValue++,
//         };
//       },
//     };
//   },
// };
// let iterateObject = obj[Symbol.iterator]();
// console.log(iterateObject.next());
// console.log(iterateObject.next());
// console.log(iterateObject.next());
// console.log(iterateObject.next());
// console.log(iterateObject.next());
// console.log(iterateObject.next());
// console.log(iterateObject.next());
////////////////////////////////////////////////////////////////

// function isIterable(obj) {
//     return typeof obj[Symbol.iterator] === 'function'
// }

// console.log(isIterable({}))
// console.log(isIterable(obj))
// console.log(isIterable([]))
// console.log(isIterable('test'))
// console.log(isIterable(new Number(45)))
// console.log(isIterable(new Map()))
// console.log(isIterable(new Set()))

// let set = new Set([1, 2, 3])
// let set = new Set([1, 2, 3])
// set.add(5)
// set.add(6)
// set.add(1)
// set.add(2)
// console.log(set)
// console.log(set.size)

// console.log(set.has(5))
// console.log(set)
// console.log(set.keys())
// console.log(set.values())

// let keyIterate = set.values()
// console.log(keyIterate.next())
// console.log(keyIterate.next())

// console.log(isIterable(set))

// for (let v of set) {
//     console.log(v)
// }

// console.log(set.entries())

// let map = new Map([
//     ['a', 10],
//     ['b', 20],
//     ['c', 30]
// ])

// map.set('d', 40)
// map.set({name: 'HM Nayem'}, 45)

// map.delete('c')

// console.log(map.size)
// console.log(map)
// console.log(map.get('b'))
// console.log(map.values())
// console.log(map.keys())
// console.log(map.entries())

// for (let [k, v] of map) {
//     console.log(v, k)
// }

// map.forEach((v, k) => {
//     console.log(k, v)
// })

// class Rectangle {
//   constructor(width, height) {
//     this.width = width;
//     this.height = height;
//     this.another = function () {};
//   }

//   name = "HM Nayem";
//   test2 = function () {};

//   draw() {
//     console.log("Drawing...");
//   }

//   test() {}
// }

// let rect1 = new Rectangle(45, 23);
// console.log(rect1);

// class Person {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }

//   print() {
//     console.log(this.name, this.email);
//   }

//   test() {
//     console.log(this);
//   }

//   static create(str) {
//     let person = JSON.parse(str);
//     return new Person(person.name, person.email);
//   }
// }

// let str = '{"name": "HM Nayem", "email": "hasan.m.nayem"}';

// let p1 = Person.create(str);
// console.log(p1);
// console.log(p1 instanceof Person);
// p1.print();

// function Shape() {
//   this.draw = function () {
//     console.log(this);
//   };
// }

// let s1 = new Shape();
// let anotherDraw = s1.draw;
// anotherDraw();

// let test = p1.test;

// test();

// const _radius = Symbol();
// const _name = Symbol();
// const _draw = Symbol();
// class Circle {
//   constructor(radius, name) {
//     this[_radius] = radius;
//     this[_name] = name;
//   }

//   [_draw]() {
//     console.log("Drawing...");
//   }
// }

// let c1 = new Circle(2, "CRED");
// console.log(c1);

// console.log(Object.getOwnPropertyNames(c1));
// let key = Object.getOwnPropertySymbols(c1)[1];
// console.log(c1[key]);

// const _radius = new WeakMap();
// const _name = new WeakMap();
// const _resize = new WeakMap();

// class Circle {
//   constructor(radius, name) {
//     this.size = 100;
//     _radius.set(this, radius);
//     _name.set(this, name);
//     _resize.set(this, () => {
//       console.log(this.size);
//     });
//   }

//   get radius() {
//     return _radius.get(this);
//   }

//   set radius(v) {
//     _radius.set(this, v);
//   }

//   draw() {
//     console.log("Drawing...");
//     console.log(_radius.get(this), _name.get(this));
//     _resize.get(this)();
//   }
// }

// let c1 = new Circle(2, "CRED");
// c1.draw();
// c1.radius = 100;
// console.log(c1.radius);

// class Shape {
//   constructor(color) {
//     this.color = color;
//   }
//   draw() {
//     console.log("Drawing...");
//   }
// }

// class Rectangle extends Shape {
//   constructor(color, width, height) {
//     super(color);
//     this.width = width;
//     this.height = height;
//   }

//   draw() {
//     console.log("Drawing a Rectangle....");
//   }

//   calculate() {
//     return this.width * this.height;
//   }
// }

// import Rectangle from "./Rectangle";

// let r = new Rectangle("Green", 4, 5);
// console.log(r)
// r.draw();
let a = { a: 10 },
  b = { b: 20 };
let set = new Set([a, b]);

a = null;

console.log(set);

let arr = [...set.values()];
console.log(arr);
