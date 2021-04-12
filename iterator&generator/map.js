let map = new Map();
map.set("a", 10).set("b", 20);
console.log(map); //Map(2) { 'a' => 10, 'b' => 20 }
console.log(map.get("a")); //10
console.log(map.has("a")); //true
console.log(map.keys()); //[Map Iterator] { 'a', 'b' }
console.log(map.values()); //[Map Iterator] { 10, 20 }
console.log(map.entries()); //[Map Entries] { [ 'a', 10 ], [ 'b', 20 ] }
// /////////
let map2 = new Map([
  ["k1", 10],
  ["k2", 50],
]);
console.log(map2);
let arr = [...map2];
console.log(arr);
for (let [k, v] of map2) {
  //   console.log(`key:${k} & value:${v}`);
} //etao korte partam> for (let [k, v] of map2.entries()) {console.log(`key:${k} & value:${v}`);}
/////////////////
let union = new Map([...map2, ["k1", 10], ["k2", 20], ["f", 100]]);
console.log(union); //Map(3) { 'k1' => 20, 'k2' => 50, 'f' => 100 }
/////////////////
let intersection = new Map(
  [
    ["k1", 10],
    ["k1", 20],
    ["f", 100],
  ].filter((kvp) => {
    return union.has(kvp[0]);
  })
);
console.log(intersection); //Map(2) { 'k1' => 20, 'f' => 100 }
////////////////
let differnece = new Map(
  [
    ["l", 10],
    ["k1", 20],
    ["f", 100],
  ].filter((kvp) => {
    return !union.has(kvp[0]);
  })
);
console.log(differnece); //Map(1) { 'l' => 10 }
///////////////
let kArr = [...intersection.keys()];
let vArr = [...intersection.values()];
console.log(kArr, vArr);
