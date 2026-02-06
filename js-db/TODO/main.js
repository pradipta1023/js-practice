import { select } from "@inquirer/prompts";
import { createAccount, existingAccount } from "./src/db_utils.js";
import { init } from "./src/db.js";

const main = async () => {
  let toRun = true;
  const client = await init();

  try {
    await client.connect();
    console.log(" ✅ Connected");
  } catch (error) {
    console.log("Error : ", error.message);
    return;
  }

  while (toRun) {
    const command = await select({
      message: "Select your choice",
      choices: [
        {
          name: "New user",
          value: createAccount,
          description: "Create a new account",
        },
        {
          name: "Existing user",
          value: existingAccount,
          description: "Open your existing account",
        },
        {
          name: "Back",
          value: () => toRun = false,
          description: "Close",
        },
      ],
    });
    await command(client);
  }
};

main();
