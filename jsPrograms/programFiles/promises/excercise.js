setTimeout(() => console.log("From set interval, 8"), 0);

const QUEUE = [];

console.log("Before first promise | LOG");

const _p1 = new Promise((resolve, _reject) => {
  QUEUE.push("first then of first promise");
  return resolve(5);
}).then((_x) => {
  console.log({ QUEUE });
  QUEUE.shift();
  console.log({ QUEUE });
  QUEUE.push("second then of first promise");
})
  .then((_x) => {
    console.log({ QUEUE });
    QUEUE.shift();
  });

console.log("After first promise | LOG");

const _p2 = new Promise((resolve, _reject) => {
  console.log({ QUEUE });
  QUEUE.push("first then of second promise");
  return resolve(5);
}).then((_x) => {
  console.log({ QUEUE });
  QUEUE.shift();
  console.log({ QUEUE });
  QUEUE.push("second then of second promise");
})
  .then((_x) => {
    console.log({ QUEUE });
    QUEUE.shift();
    console.log({ QUEUE });
  });

console.log("After second promise | LOG");

console.log("We four LOGS are from call stack\n");
