const lineIterator = function (text) {
  let index = 0;
  return {
    next() {
      if (index === text.length) {
        return { done: true };
      }
      const nextIndex = text.indexOf("\n", index);
      if (nextIndex === -1) {
        const portion = text.slice(index);
        index = text.length;
        return { value: portion, done: false };
      }
      const portion = text.slice(index, nextIndex);
      index = nextIndex + 1;
      return { value: portion, done: false };
    },
    [Symbol.iterator]() {
      return this;
    },
  };
};

const main = () => {
  const text = Deno.readTextFileSync("./text.txt");
  const line = lineIterator(text);
  const intervalId = setInterval(() => {
    const nextLine = line.next();
    if (nextLine.done === true) clearInterval(intervalId);
    console.log(`${nextLine.value}\n`);
  }, 10000);
};

main();
