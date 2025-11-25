const myWC = (fileName) => {
  const fileContent = Deno.readTextFileSync(fileName);
  const noOfChars = fileContent.split("").length;
  const lines = fileContent.split("\n");
  const noOfLines = lines.length;
  const noOfWords = lines.flatMap((line) => line.split(" ")).length;
  console.log(`${noOfLines}\t${noOfWords}\t${noOfChars}\t${fileName}`);
};

console.log("\nMYWC\n");
myWC("./somefile.txt");

const myHead = (fileName, noOfLines = 1) => {
  const fileContent = Deno.readTextFileSync(fileName);
  const linesOfContent = fileContent.split("\n");
  const headLines = linesOfContent.slice(0, noOfLines).join("\n");
  console.log(headLines);
};

console.log("\nMYHEAD\n");
myHead("./somefile.txt", 34);

const myTail = (fileName, noOfLines = 1) => {
  const fileContent = Deno.readTextFileSync(fileName);
  const linesOfContent = fileContent.split("\n");
  const tailLines = linesOfContent
    .slice(linesOfContent.length - noOfLines)
    .join("\n");
  console.log(tailLines);
};

console.log("\nMYTAIL\n");
myTail("./somefile.txt");
