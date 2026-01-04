import client from "./db.js";

const detailsToFill = [
  "firstName",
  "lastName",
  "phoneNumber",
  "person_to_meet",
  "room_no",
];

const RESET_PASSWORD = "444888";

const userDetails = () => {
  const user = {};
  for (const detail of detailsToFill) {
    user[detail] = prompt(` Fill ${detail}: `);
  }
  user["entryTime"] = new Date();
  return user;
};

const dateTime = (result) => {
  for (const row of result.rows) {
    row["entry_time"] = row["entry_time"].toString();
    row["exit_time"] = row["exit_time"] ? row["exit_time"].toString() : null;
  }
  return result;
};

const listEntries = async () => {
  try {
    await client.connect();
    console.log(" ✅ Connected");
    const result = await client
      .queryObject`SELECT entry_id,first_name, last_name, phone_number, room_no, to_meet FROM visitor`;
    console.log("<====== Visitors Details ======>");
    for (const row of result.rows) {
      console.table(row);
    }
  } catch (error) {
    console.log("❌ Failed to connect", error);
  } finally {
    await client.end();
  }
};

const listEntriesWithTimes = async () => {
  const password = prompt(" Enter password to check: ");
  if (password !== RESET_PASSWORD) return console.log(" Wrong password");
  try {
    await client.connect();
    console.log(" ✅ Connected");
    const result = await client
      .queryObject`SELECT first_name || ' ' || last_name as full_name, phone_number, room_no, entry_time, exit_time FROM visitor`;
    console.log("<====== Visitors Details ======>");
    const resultWithFormattedDate = dateTime(result);
    for (const row of resultWithFormattedDate.rows) {
      console.table(row);
    }
  } catch (error) {
    console.log("❌ Failed to connect", error);
  } finally {
    await client.end();
  }
};

const resetEntries = async () => {
  const password = prompt(" Enter password to reset: ");
  if (password !== RESET_PASSWORD) return console.log(" Wrong password");
  try {
    await client.connect();
    console.log(" ✅ Connected");
    await client.queryObject`DELETE FROM visitor`;
    console.log("Deleted succesfully");
  } catch (error) {
    console.log("❌ Failed to connect", error);
  } finally {
    await client.end();
  }
};

const entryVisitor = async () => {
  const user = userDetails();
  try {
    await client.connect();
    console.log(" ✅ Connected");

    const result = await client.queryObject`
    INSERT INTO visitor(first_name, last_name, entry_time, phone_number, room_no, to_meet)
    VALUES(${user.firstName}, ${user.lastName}, ${user.entryTime}, ${user.phoneNumber}, 
    ${user["room_no"]}, ${user["person_to_meet"]})
    RETURNING entry_id,first_name, last_name, phone_number, room_no, to_meet
    `;
    console.log("Remember your entry id. It will be needed while exiting.");
    console.table(result.rows);
  } catch (error) {
    console.log("❌ Failed to connect", error);
  } finally {
    await client.end();
  }
};

const exitVisitor = async () => {
  const entry_id = prompt(" Enter your entry id: ");
  try {
    await client.connect();
    console.log(" ✅ Connected");
    const data = await client.queryObject`
    UPDATE visitor
    SET exit_time = ${new Date()}
    WHERE entry_id = ${entry_id}
    RETURNING entry_id,first_name, last_name, phone_number, room_no, to_meet
    `;
    console.log(" Exit time updated\n");
    console.table(data.rows);
  } catch (error) {
    console.log("An error occured", error.name);
  } finally {
    await client.end();
  }
};

const main = async () => {
  while (true) {
    const input = prompt(
      "\n 1. Entry\n 2. List visitors\n 3. Exit\n 4. Reset\n 5.List visitors with timings\n Enter your choice: ",
    );
    if (input === "1") await entryVisitor();
    if (input === "2") await listEntries();
    if (input === "3") await exitVisitor();
    if (input === "4") await resetEntries();
    if (input === "5") await listEntriesWithTimes();
  }
};

main();
