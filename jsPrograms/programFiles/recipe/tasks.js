const createPromise = (taskName, time) =>
  new Promise((resolve, reject) => {
    const start = Date.now();
    setTimeout(() => {
      const end = Date.now();
      resolve({ name: taskName, start, end, duration: end - start });
    }, time);
  });

const executeTask = (taskName, time) => {
  const tasks = taskName.split(",");
  if (tasks.length === 1) return Promise.resolve(createPromise(taskName, time));

  const parallelTasks = tasks.map((task) => createPromise(task, time));
  return Promise.all(parallelTasks);
};

const main = async () => {
  const taskData = await Deno.readTextFile("./recipe1.txt");
  const allTasks = taskData.split("\n");
  for (const task of allTasks) {
    const taskData = await executeTask(task, 1000);
    console.log(taskData);
  }
};

main();
