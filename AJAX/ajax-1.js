const promiseArray = [
  fetch("https://jsonplaceholder.typicode.com/posts"),
  fetch("https://jsonplaceholder.typicode.com/posts/10"),
  fetch("https://jsonplaceholder.typicode.com/posts/3"),
];

async function asyncFunction(arr) {
  const res1 = await Promise.all(arr);
  const res2 = await Promise.all(
    res1.map((v) => {
      return v.json();
    })
  );
  console.log(res2);
}

asyncFunction(promiseArray);
