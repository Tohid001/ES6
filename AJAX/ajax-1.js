function getData(url) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();
    xhr.onload = () => {
      if (xhr.response) {
        resolve(JSON.parse(xhr.response));
      } else {
        reject("Failed!");
      }
    };
  });
}

async function asyncFunction(url) {
  const res = await getData(url);
  console.log(res);
}

asyncFunction("https://jsonplaceholder.typicode.com/todos/1");
