const getRequest = (url, callback) => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.send();

  xhr.onreadystatechange = (e) => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        const users = JSON.parse(xhr.response);
        callback(null, users);
      } else {
        callback(xhr.status, null);
      }
    }
  };
};
getRequest("https://jsonplaceholder.typicode.com/todos", (err, res) => {
  if (err) {
    console.log(err);
  } else {
    res.forEach((res) => console.log(res.title));
  }
});
