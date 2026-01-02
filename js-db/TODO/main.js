import { promptSecret } from "@std/cli";
import client from "./db.js";

const dataNeeded = ["First name", "Last name", "Phone number"];

const getPassword = () => {
  const password = promptSecret("Enter your password:", {
    mask: "#",
    clear: true,
  });
  const confirmPassword = promptSecret("Confirm your password:", {
    mask: "#",
    clear: true,
  });
  if (password !== confirmPassword) return getPassword();
  return password;
};

const createAccount = () => {
  const details = {};

  for (const data of dataNeeded) {
    const input = prompt(`${data}:`);
    details[data] = input;
  }

  details["password"] = getPassword();

  return details;
};

async function insertData(userDetails) {
  const d = userDetails;
  try {
    await client.connect();
    console.log("✅ Connected");
    const result = await client.queryObject`
    INSERT INTO users(first_name, last_name, phone_number, password)
    VALUES(${d["First name"]}, ${d["Last name"]}, ${d["Phone number"]}, 
    ${d["password"]})`;
    console.log(result);
  } catch (error) {
    console.log("❌ Connection failed", error);
  }
  await client.end();
}

async function runTodo() {
  while (true) {
    const input = prompt(" 1. Create new account\n 2. Existing account:");
    if (input === "1") {
      const userDetails = createAccount();
      await insertData(userDetails);
      console.log("Account created successfully");
    }
    if (input === "2") {
    }
  }
}

const main = () => {
  runTodo();
};

main();
