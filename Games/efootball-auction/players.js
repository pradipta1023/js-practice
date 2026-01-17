const validateMV = /^[0-9]+$/;

const getMarketValue = (name) => {
  let mv = prompt(`Enter market value for ${name}: `);
  if (!(validateMV.test(mv))) {
    console.log("It should be an integer value\nEnter market value again");
    mv = getMarketValue(name);
  }
  return parseInt(mv);
};
const playerDetails = (position) => {
  const name = prompt("\nEnter name of the player: ");
  const mv = getMarketValue(name);

  return { name, mv, position };
};

const totalPlayersWanted = (position) => {
  console.clear();
  const totalNoOfPlayers = prompt(
    `Give the number of ${position}s you want in market`,
  );
  return Number.isInteger(parseInt(totalNoOfPlayers))
    ? totalNoOfPlayers
    : totalPlayersWanted(position);
};

const getPlayersForPosition = (position) => {
  const players = [];
  const noOfPlayers = totalPlayersWanted(position);
  for (let idx = 0; idx < noOfPlayers; idx++) {
    players.push(playerDetails(position));
  }
  return players;
};

const getPlayers = () => {
  const playersData = {};
  const positions = [
    "GK",
    "LB",
    "RB",
    "CB",
    "DMF",
    "CMF",
    "RMF",
    "AMF",
    "LMF",
    "SS",
    "RWF",
    "LWF",
    "CF",
  ];

  for (const position of positions) {
    playersData[position] = getPlayersForPosition(position);
  }

  return playersData;
};

const main = async () => {
  const players = getPlayers();
  await Deno.writeTextFile("players.txt", JSON.stringify(players));
  console.log(players);
};

await main();
