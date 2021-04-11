let arr = [1, 2, 3];
function func([a, ...b]) {
  console.log(a, b);
}
func(arr);
