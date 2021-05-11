const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/todos");
xhr.send();
xhr.onload = function () {
  const res = JSON.parse(xhr.response);
  console.log(res);
};
