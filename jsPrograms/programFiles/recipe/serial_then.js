const createTask = (taskName, time) =>
  new Promise((resolve, reject) => {
    const start = Date.now();
    setTimeout(() => {
      const end = Date.now();
      console.log({ name: taskName, start, end, duration: end - start });
      resolve({ name: taskName, start, end, duration: end - start });
    }, time);
  });

const t1 = { name: "File Reading", time: 2000 };
const t2 = { name: "File Writting", time: 1000 };

const tasks = [t1, t2];

let p = Promise.resolve(5);

for (const task of tasks) {
  p = p.then((x) => createTask(task.name, task.time));
}

tasks.reduce(
  (acc, task) => acc.then((x) => createTask(task.name, task.time)),
  Promise.resolve(5),
);
