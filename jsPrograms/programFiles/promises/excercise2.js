const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 3000);
  console.log("First");
});

promise1.then((value) => {
  console.log(value);
});

promise1.then((value) => console.log(value)).then((x) =>
  console.log("After first promise then")
);
console.log("Hi");
promise1.then((value) => console.log(value)).then((x) =>
  console.log("After second promise then and first promise then")
);
