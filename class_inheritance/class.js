// class Rectangle {
//   // constructor(width, height) {
//   //   this.width = width;
//   //   this.height = height;
//   //   this.another = function () {};
//   }

//   test2 = function () {};

//   draw() {
//     console.log("Drawing...");
//   }

//   test() {}
//   static create(str) {
//     let person = JSON.parse(str);
//     return new Person(person.name, person.email);
//   }
// }
// let obj=new Rectangle();
// console.log(obj)

// // ////////////////////////////////////////////////////////////////symbols in class/////////////////
// // const _radius = Symbol();
// // const _name = Symbol();
// // const _draw = Symbol();
// // class Circle {
// //   constructor(radius, name) {
// //     this[_radius] = radius;
// //     this[_name] = name;
// //   }

// //   [_draw]() {
// //     console.log("Drawing...");
// //   }
// // }

// // let c1 = new Circle(2, "CRED");
// // console.log(c1);

// // let key = Object.getOwnPropertySymbols(c1)[1];
// // console.log(c1[key]);

// // /////////////////////////////////////////////
// // //////////////////////////////////////Weakmap/////////////////////////////
// // const _radius = new WeakMap();
// // const _name = new WeakMap();
// // const _resize = new WeakMap();

// // class Circle {
// //   constructor(radius, name) {
// //     this.size = 100;
// //     _radius.set(this, radius);
// //     _name.set(this, name);
// //     _resize.set(this, () => {
// //       console.log(this.size);
// //     });
// //   }

// //   get radius() {
// //     return _radius.get(this);
// //   }

// //   set radius(v) {
// //     _radius.set(this, v);
// //   }

// //   draw() {
// //     console.log("Drawing...");
// //     console.log(_radius.get(this), _name.get(this));
// //     _resize.get(this)();
// //   }
// // }

// // let c1 = new Circle(2, "CRED");
// // c1.draw();
// // c1.radius = 100;
// // console.log(c1.radius);

// // // class Shape {
// // //   constructor(color) {
// // //     this.color = color;
// // //   }
// // //   common() {
// // //     console.log(`i am ${this.num}`);
// // //   }
// // // }

// // // class Square extends Shape {
// // //   constructor(color) {
// // //     super(color);
// // //   }
// // //   num = 1000;
// // //   draw() {
// // //     console.log(`color is:${this.num}`);
// // //   }
// // // }
// // // // var shape = new Shape();
// // // var sqr = new Square("green");
// // // console.log(sqr.draw());
// // // console.log(sqr.common());

//////////////////////////////////////////////////////////
// class Bio {
//   constructor(props) {
//     this.props = props == undefined ? {} : props;
//   }
//   context = {};
//   refs = {};
//   state = 0;
// }
// let obj = new Bio();
// console.log(obj);
