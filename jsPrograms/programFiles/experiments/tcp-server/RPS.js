const PORT = 8000;

const ROCK = "rock";
const PAPER = "paper";
const SCISSOR = "scissor";

const MOVES = [SCISSOR, ROCK, PAPER];

const listener = Deno.listen({ port: PORT });

const buffer = new Uint8Array(1024);
const encoder = new TextEncoder();
const decoder = new TextDecoder();

let players = [];

const getResponse = async (conn) => {
  const bytesRead = await conn.read(buffer);
  if (bytesRead === null) return { isClosed: true };
  const data = decoder.decode(buffer.subarray(0, bytesRead));
  return { data };
};

const broadcast = async (message) => {
  for (const player of players) {
    await player.conn.write(encoder.encode(message));
  }
};

const deleteUser = (conn) => {
  const leftUserIdx = players.findIndex((user) => user.conn === conn);
  players.splice(leftUserIdx, 1);
};

const closeConnections = async () => {
  for (const player of players) {
    await player.conn.close();
  }
};

const isDraw = () => players[0].move === players[1].move;

const handleWinner = async () => {
  await broadcast(`\x1b[2J`);
  await broadcast(`\x1b[H`);
  await broadcast(
    `\n${players[0].name} : ${players[0].move}\n${players[1].name} : ${
      players[1].move
    }\n`,
  );
  if (isDraw()) {
    await broadcast("\Same move\n");
    return;
  }
  const firstPlayer = players[0];
  const secondPlayer = players[1];
  if (
    (firstPlayer.move === ROCK && secondPlayer.move === PAPER) ||
    (firstPlayer.move === SCISSOR && secondPlayer.move === ROCK) ||
    (firstPlayer.move === PAPER && secondPlayer.move === SCISSOR)
  ) {
    await broadcast(`\n${secondPlayer.name}'s point\n`);
    secondPlayer.point++;
  } else {
    await broadcast(`\n${firstPlayer.name}'s point\n`);
    firstPlayer.point++;
  }
};

const getMove = async (conn) => {
  const bytesRead = await conn.read(buffer);
  if (bytesRead === null) return { isClosed: true };
  const move = decoder.decode(buffer.subarray(0, bytesRead)).toLowerCase()
    .trim();
  if (!MOVES.includes(move)) {
    conn.write(encoder.encode("Invalid move!\nEnter move again : "));
    return getMove(conn);
  }
  return { move };
};

const decideWinner = async () => {
  if (players[0].point >= players[1].point) {
    await broadcast(`\n${players[0].name} has won the match\n`);
    return;
  }
  if (players[0].point <= players[1].point) {
    await broadcast(`\n${players[1].name} has won the match\n`);
    return;
  }
  await broadcast(`\nMatch has drawn\n`);
};

const start = async () => {
  for (let round = 0; round < 5; round++) {
    for (const player of players) {
      await player.conn.write(encoder.encode("Enter your move : "));
      const response = await getMove(player.conn);
      if (response.isClosed) {
        await broadcast(`${player.name} left the game`);
        await closeConnections();
        return;
      }
      player["move"] = response.move;
      await broadcast(`${player.name} has given a move\n`);
    }
    await handleWinner();
  }
  await decideWinner();
  await closeConnections();
};

const listen = async () => {
  console.log(`Listening on port : ${PORT}`);
  for await (const conn of listener) {
    await conn.write(encoder.encode("Please enter name: "));
    const response = await getResponse(conn);
    if (response.isClosed) {
      console.log("Player closed connection");
      continue;
    }
    if (players.length <= 2) {
      players.push({ name: response.data.trim(), conn, point: 0 });
      await broadcast(`\nWelcome to the game ${response.data.trim()}\n`);
      if (players.length === 1) await broadcast("Waiting for another player");
      console.log("One player joined");
    }
    if (players.length === 2) {
      console.log("Starting the game");
      await start();
      console.log("Game finished\nStarting a new one");
      players = [];
    }
  }
};

listen();
