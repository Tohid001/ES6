async function asyncFunction(url) {
  const res1 = await fetch(url);
  const res2 = await res1.json();
  console.log(res2);
}

asyncFunction("https://jsonplaceholder.typicode.com/todos/1");
