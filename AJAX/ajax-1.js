const promiseArray = [
  fetch("https://jsonplaceholder.typicode.com/posts"),
  fetch("https://jsonplaceholder.typicode.com/posts/10"),
  fetch("https://jsonplaceholder.typicode.com/posts/3"),
];

async function asyncFunction(arr) {
  const res1 = await Promise.race(arr);
  const res2 = await res1.json();
  console.log(res2);
}

asyncFunction(promiseArray);
