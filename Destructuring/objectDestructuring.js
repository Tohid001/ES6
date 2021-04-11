////////////////////basic assignment////////////////////////////////
const user = {
  id: 42,
  is_verified: true,
};

const { id, is_verified } = user;

console.log(id); // 42
console.log(is_verified); // true
//////////////////////////////Assigning to new variable names////////////////////////////////
const o = { p: 42, q: true };
const { p: foo, q: bar } = o;

console.log(foo); // 42
console.log(bar); // true
////////////////////////////////Default values ~1////////////////////////////////
const { a = 10, b = 5 } = { a: 3 };

console.log(a); // 3
console.log(b); // 5
////////////////////////////////Default values ~2////////////////////////////////////////////
const { a: aa = 10, b: bb = 5 } = { a: 3 };

console.log(aa); // 3
console.log(bb); // 5
//////////////////////nested object+Default values ~3///////////////////////////////
const user = {
  id: 42,
  displayName: "jdoe",
  //   fullName: {
  //     firstName: "John",
  //     lastName: "Doe",
  //   },
};
const { displayName = "Mr.", fullName: { firstName: name } = {} } = user;
console.log(displayName, name);
/////////////////////////////////////////objects passed as a function parameter////////////////////////////////
const user = {
  id: 42,
  displayName: "jdoe",
  fullName: {
    firstName: "John",
    lastName: "Doe",
  },
};

function userId({ id }) {
  return id;
}

function whois({ displayName, fullName: { firstName: name } }) {
  return `${displayName} is ${name}`;
}

console.log(userId(user)); // 42
console.log(whois(user)); // "jdoe is John"
/////////////////////////////////Setting a function parameter's default value////////////////////////////////
function drawChart({
  size = "big",
  coords = { x: 0, y: 0 },
  radius = 25,
} = {}) {
  console.log(size, coords, radius);
  // do some chart drawing
}

drawChart({
  coords: { x: 18, y: 30 },
  radius: 30,
});
//////////////////////////////Object inside Array~1////////////////
const props = [
  { id: 1, name: "Fizz" },
  { id: 2, name: "Buzz" },
  { id: 3, name: "FizzBuzz" },
];

const [, , { name }] = props;

console.log(name); // "FizzBuzz"
// ///////////////////////////Object inside Array~2///////////////////////////////
const people = [
  {
    name: "Mike Smith",
    family: {
      mother: "Jane Smith",
      father: "Harry Smith",
      sister: "Samantha Smith",
    },
    age: 35,
  },
  {
    name: "Tom Jones",
    family: {
      mother: "Norah Jones",
      father: "Richard Jones",
      brother: "Howard Jones",
    },
    age: 25,
  },
];
const [
  {
    name: n,
    family: { father: f },
  },
  {
    name: N,
    family: { father: F },
  },
] = people;
console.log("Name: " + n + ", Father: " + f);
console.log("Name: " + N + ", Father: " + F);
//////////////////////////Array inside Object/////////////////////////
const metadata = {
  title: "Scratchpad",
  translations: [
    {
      locale: "de",
      localization_tags: [],
      last_edit: "2014-04-14T08:43:37",
      url: "/de/docs/Tools/Scratchpad",
      title: "JavaScript-Umgebung",
    },
  ],
  url: "/en-US/docs/Tools/Scratchpad",
};

let {
  title: englishTitle, // rename
  translations: [
    {
      title: localeTitle, // rename
    },
  ],
} = metadata;

console.log(englishTitle); // "Scratchpad"
console.log(localeTitle); // "JavaScript-Umgebung"

///////////////////////////////////////////////Rest in Object Destructuring///////////////////
let { a, b, ...rest } = { a: 10, b: 20, c: 30, d: 40 };
a; // 10
b; // 20
rest; // { c: 30, d: 40 }
//////////////////////////The prototype chain is looked up when the object is deconstructed//////////////////////////
let obj = { self: "123" };
obj.__proto__.prot = "456";
const { self, prot } = obj;
// self "123"
// prot "456"（Access to the prototype chain）
