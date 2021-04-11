function greet(name = "HM Nayem", msg = "Hello") {
  console.log(name.length);
  console.log(`${msg}! ${name}`);
}

greet(undefined, "Hello");
