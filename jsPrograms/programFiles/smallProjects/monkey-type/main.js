Deno.stdin.setRaw(true, { cbreak: true });
const decoder = new TextDecoder();
const isDelete = (buffer) => buffer[0] === 127;

const decodeBuffer = (buffer) => {
  console.clear();
  return decoder.decode(buffer);
};

const writer = (text) =>
  Deno.stdout.write(new TextEncoder().encode(text + "\n\n"));

const store = (decoded, userInput) => {
  userInput.push(decoded);
  console.log(userInput.join(""));
};

const pop = (userInputToShow, userInput) => {
  userInputToShow.pop();
  userInput.pop();
  console.clear();
  console.log(userInputToShow.join(""));
};

const isSame = (test, decoded, currentChar) => test[currentChar] === decoded;

const underLine = (char) => `\x1b[4;33m${char}\x1b[0m`;

const yellow = (char) => `\x1b[35m${char}\x1b[0m`;

const initialise = (text) => {
  const correctLetters = 0;
  const currentChar = 0;
  const startTime = Date.now();
  const test = text.split("");
  const buffer = new Uint8Array(5);
  return {
    startTime,
    test,
    buffer,
    decoder,
    correctLetters,
    currentChar,
  };
};

const isEnd = (userInput, text) => userInput.length === text.length;

const formatOutput = (state, userInput) => ({
  correctLetters: state.correctLetters,
  startTime: state.startTime,
  endTime: Date.now(),
  userInput,
});

const write = async (text) => {
  const state = initialise(text);
  const userInputToShow = [];
  const userInput = [];
  try {
    while (true) {
      writer(text);
      const bytesRead = await Deno.stdin.read(state.buffer);
      let decoded = decodeBuffer(state.buffer.subarray(0, bytesRead));

      if (isDelete(state.buffer)) {
        pop(userInputToShow, userInput);
        state.currentChar--;
        continue;
      }
      userInput.push(decoded);
      if (!isSame(state.test, decoded, state.currentChar)) {
        decoded = underLine(decoded);
      } else {
        state.correctLetters++;
        decoded = yellow(decoded);
      }

      store(decoded, userInputToShow);

      if (isEnd(userInputToShow, text)) break;
      state.currentChar++;
    }
    return formatOutput(state, userInput);
  } catch (_e) {
    console.log(_e);
  }
};

const isCorrectWord = (word, userInput, currentChar) => {
  for (const letter of word) {
    if (userInput[currentChar++] !== letter) return false;
  }
  return true;
};

const generateReport = (text, userInput, timeTaken) => {
  const listOfWords = text.split(" ");
  console.log({ listOfWords });
  let currentChar = 0;
  const numberOfCorrectWords = listOfWords.reduce((acc, word) => {
    if (isCorrectWord(word, userInput, currentChar)) {
      acc++;
    }
    currentChar += word.length + 1;
    return acc;
  }, 0);
  const report = {};
  const timeInMinutes = timeTaken / 60;

  report["Raw WPM"] = (userInput.length / 5) / timeInMinutes;
  report["Gross WPM"] = listOfWords.length / timeInMinutes;
  report.WPM = numberOfCorrectWords / timeInMinutes;
  report.accuracy = (numberOfCorrectWords / listOfWords.length) * 100;
  return report;
};

const randomText = () => {
  const text = "This is a sample text for testing this program";
  return text;
};

const main = async () => {
  const text = randomText();
  const details = await write(text);
  const timeTaken = (details.endTime - details.startTime) / 1000;

  const report = generateReport(text, details.userInput, timeTaken);
  console.log(report);
};

await main();
