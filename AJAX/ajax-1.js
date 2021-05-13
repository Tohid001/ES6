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

const promiseArray = [
  getData("https://jsonplaceholder.typicode.com/posts"),
  getData("https://jsonplaceholder.typicode.com/posts/10"),
  getData("https://jsonplaceholder.typicode.com/posts/3"),
];
Promise.race(promiseArray).then((fastetsResponse) => {
  console.log(fastetsResponse);
});
