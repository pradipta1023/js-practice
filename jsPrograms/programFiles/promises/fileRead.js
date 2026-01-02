import { readFile } from "node:fs";

const readFilePromise = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf-8", (error, result) => {
      if (error) {
        reject(error);
      } else {
        resolve(result);
      }
    });
    console.log("Inside");
  });
};

console.log("Outside");

readFilePromise("./files.txt")
  .then((result) => console.log(result))
  .catch((error) => console.error("Failed to read data"));
