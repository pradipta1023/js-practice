import { select } from "@inquirer/prompts";
import { createAccount } from "../customer-tasks/newUserTasks.js";
import { existingAccount } from "../customer-tasks/existingUserTasks.js";

export const manageCustomerInput = async ({ accounts }) => {
  let toRun = true;
  while (toRun) {
    const choice = await select({
      message: "Select your choice",
      choices: [
        {
          name: "Open new account",
          value: "1",
          description: "Create a new account for yourself",
        },
        {
          name: "Open existing account",
          value: "2",
          description: "Go to your existing account",
        },
        {
          name: "Back",
          value: "back",
          description: "Go back to previous menu",
        },
      ],
    });

    const manageCustomer = {
      "1": async () => accounts.push(await createAccount({ accounts })),
      "2": async () => await existingAccount({ accounts }),
      "back": () => toRun = false,
    };

    await manageCustomer[choice]();
  }
};
