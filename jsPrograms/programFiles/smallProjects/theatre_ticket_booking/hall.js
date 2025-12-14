const createTheatre = (height = 10, width = 10) =>
  Array.from(
    { length: height },
    (_) => Array.from({ length: width }, (_) => " "),
  );

const showScreen = (theatre) =>
  console.log(theatre.map((x) => x.join("")).join("\n"));

const theatre = createTheatre();

showScreen(theatre);
