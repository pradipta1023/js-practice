const result = Deno.readTextFile("./files.txt");
const files = result.then((file) => {
  const files = file.split("\n");
  const promises = files.map((file) => Deno.readTextFile(file));
  const contents = Promise.all(promises);
  contents.then((x) => console.log(x));
});

console.log("outside ", files);
