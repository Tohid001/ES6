var s = `    dsfsdfdsf`;
var t = s.trim();
console.log(t);

console.log(t.padStart(15, "*"));
console.log(t.padEnd(15, "a"));
console.log(t.repeat(10));
t.padStart();
