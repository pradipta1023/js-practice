const createPromise = (taskName, time) =>
  new Promise((resolve, reject) => {
    const start = Date.now();
    setTimeout(() => {
      const end = Date.now();
      resolve({ name: taskName, start, end, duration: end - start });
    }, time);
  });

const executeJob = (taskName, time) => {
  const tasks = taskName.split(",");
  const tasksToRun = tasks.map((task) => createPromise(task, time));
  return Promise.all(tasksToRun);
};

const extractTasks = (paths) => {
  const tasks = [];
  for (const path of paths) {
    const task = Deno.readTextFile(path);
    tasks.push(task);
  }
  return Promise.all(tasks);
};

const executeTask = async (task) => {
  for (const job of task.split("\n")) {
    const taskData = await executeJob(job, 100);
    console.log(taskData);
  }
};

const run = async (files) => {
  for (const file of files) {
    const paths = file.split(",");
    const tasks = await extractTasks(paths);
    console.log({ tasks });

    for (const task of tasks) {
      await executeTask(task);
    }
  }
};

const main = async () => {
  const files = (await Deno.readTextFile("./manifest.txt")).split("\n");
  run(files);
};

main();
