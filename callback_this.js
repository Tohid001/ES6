// let obj = {
//   name: "tohid",
//   method: function () {
//     console.log(this.name);
//   },
//   func: function () {
//     setInterval(this.method.bind(this), 1000);
//   },
// };
// obj.func();

// ///////////////////
// let obj2 = {
//   name: "tohid",
//   method: function () {
//     console.log(this.name);
//   },
//   func: function () {
//     function random() {
//       console.log(this.name);
//     }
//     random.call(this);
//   },
// };
// obj2.func();

//////////
// function func(f) {
//   f();
// }
// let obj = {
//   x: 10,
//   y: function () {
//     console.log(this.x);
//   },
//   z() {
//     func(this.y.bind(this));
//   },
// };
// obj.z();
