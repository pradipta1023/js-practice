console.log("Turning the oven on"); //1

setTimeout(() => {
  console.log("Turning the oven off");
}, 0); // 8 turning the oven off

const p1 = new Promise((resolve, reject) => {
  console.log("Cutting onions"); //2
  resolve("Chopped onions");
});

const p2 = new Promise((resolve, reject) => {
  console.log("Start boiling milk"); //3
  resolve("Boiled milk");
});

const p3 = new Promise((resolve, reject) => {
  console.log("Start boiling water"); //4
  resolve("Boiled water");
});

p1.then((a) => {
  console.log(`Frying ${a}`); // 5 Frying chopped onion
  return "Onions";
}).then((a) => console.log(`Fried ${a}`)); // 6 Fried onions

const all = Promise.all([p2, p3]);

all.then((each) => console.log(each)); // 7 [boiled Milk, boiled water]
