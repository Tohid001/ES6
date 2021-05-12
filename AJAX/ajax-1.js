const getRequest = (url) => {
  return (promise = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", url);
    xhr.send();
    xhr.onreadystatechange = (e) => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const users = JSON.parse(xhr.response);
          resolve(users);
        } else {
          reject(xhr.status);
        }
      }
    };
  }));
};

getRequest("https://jsonplaceholder.typicode.com/todos")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
