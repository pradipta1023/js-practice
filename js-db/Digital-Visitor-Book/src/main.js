import { promptSecret } from "@std/cli";
import client from "./db.js";

const detailsToFill = {
  "firstName": "first name",
  "lastName": "last name",
  "phoneNumber": "phone number",
  "personToMeet": "person you're going to meet",
  "roomNo": "room number",
};

const RESET_PASSWORD = "444888";

const userDetails = () => {
  const user = {};
  for (const detail in detailsToFill) {
    user[detail] = prompt(` Fill ${detailsToFill[detail]}: `);
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
    const result = await client
      .queryObject`SELECT entry_id,first_name, last_name, phone_number, room_no, to_meet FROM visitor`;
    console.log("<====== Visitors Details ======>");
    for (const row of result.rows) {
      console.table(row);
    }
  } catch (error) {
    console.log("❌ Failed to connect", error);
  }
};

const listEntriesWithTimes = async () => {
  const password = promptSecret(" Enter passwor here to check: ");
  if (password !== RESET_PASSWORD) return console.log(" Wrong password");
  try {
    const result = await client
      .queryObject`SELECT first_name || ' ' || last_name as full_name, phone_number, room_no, entry_time, exit_time FROM visitor`;
    console.log("<====== Visitors Details ======>");
    const resultWithFormattedDate = dateTime(result);
    for (const row of resultWithFormattedDate.rows) {
      console.table(row);
    }
  } catch (error) {
    console.log("❌ Failed to connect", error);
  }
};

const resetEntries = async () => {
  const password = prompt(" Enter password to reset: ");
  if (password !== RESET_PASSWORD) return console.log(" Wrong password");
  try {
    await client.queryObject`DELETE FROM visitor`;
    console.log("Deleted succesfully");
  } catch (error) {
    console.log("❌ Failed to connect", error);
  }
};

const entryVisitor = async () => {
  const user = userDetails();
  try {
    const result = await client.queryObject`
    INSERT INTO visitor(first_name, last_name, entry_time, phone_number, room_no, to_meet)
    VALUES(${user.firstName}, ${user.lastName}, ${user.entryTime}, ${user.phoneNumber}, 
    ${user["roomNo"]}, ${user["personToMeet"]})
    RETURNING entry_id,first_name, last_name, phone_number, room_no, to_meet
    `;
    console.log("Remember your entry id. It will be needed while exiting.");
    console.table(result.rows);
  } catch (error) {
    console.log("❌ Failed to connect", error);
  }
};

const exitVisitor = async () => {
  const entry_id = prompt(" Enter your entry id: ");
  try {
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
  }
};

const main = async () => {
  const commands = [
    entryVisitor,
    listEntries,
    exitVisitor,
    resetEntries,
    listEntriesWithTimes,
  ];

  const commandNames = [
    "Entry",
    "List Visitors",
    "Exit",
    "Reset",
    "List visitors with timings",
  ]
    .map((name, index) => `${index + 1}. ${name}`)
    .join("\n");

  try {
    await client.connect();
    console.log(" ✅ Connected");
  } catch (error) {
    console.log("Some error occured", error);
    return;
  }

  while (true) {
    const input = prompt(`${commandNames}\n   Enter your choice: `);
    const commandId = parseInt(input) - 1;
    const command = commands[commandId];
    if (command) {
      await commands[commandId]();
    }
  }
};

main();
