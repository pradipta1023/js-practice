const p = Promise.resolve(5);

console.log(p);

p.then((x) => console.log(x)).then((a) => console.log("Hello"));
p.then((x) => console.log(x)).then((a) => console.log("Hi"));
