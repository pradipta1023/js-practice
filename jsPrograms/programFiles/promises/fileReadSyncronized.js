// Deno

// const files = Deno.readTextFile("./files.txt");
// files.then((fileNames) => {
//   const contents = fileNames.split("\n");
//   Deno.readTextFile(contents[0])
//     .then((contentOfF1) =>
//       Deno.readTextFile(contents[1])
//         .then((contentOfF2) => console.log(contentOfF1 + " and " + contentOfF2))
//     );
// });

// console.log("outside");

// Node
import * as fs from "node:fs";

fs.readFile("./files.txt", "utf-8", (_err, data) => {
  const fileNames = data.split("\n");
  fs.readFile(fileNames[0], "utf-8", (_err, contentsOfF1) => {
    fs.readFile(fileNames[1], "utf-8", (_err, contentsOfF2) => {
      console.log(contentsOfF1 + " and " + contentsOfF2);
    });
  });
});
