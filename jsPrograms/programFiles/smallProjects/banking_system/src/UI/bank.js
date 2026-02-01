import { select } from "@inquirer/prompts";
import { manageCustomerInput } from "../handler/handleCustomer.js";
import { manager } from "../handler/handleManager.js";

export const findAccount = ({ accountNumber }, accounts) =>
  accounts.find((account) => account.accountNumber === accountNumber);

const close = ({ accounts }) => {
  const stringified = JSON.stringify(accounts);
  Deno.writeTextFileSync("./data/storage.txt", stringified);
  console.log("Bank has been closed");

  return { isClosed: true };
};

const open = async ({ accounts }) => {
  let goBackFlag = false;
  while (!goBackFlag) {
    const manage = await select({
      message: "Select one choice",
      choices: [
        {
          name: "Customer",
          value: manageCustomerInput,
          description: "Go to customer section",
        },
        {
          name: "Manager",
          value: manager,
          description: "Go to manager section",
          disabled: true,
        },
        {
          name: "Back",
          value: () => goBackFlag = true,
          description: "Go to manager section",
        },
      ],
    });
    await manage({ accounts });
  }
  return { isClosed: false };
};

export const manageBank = async ({ accounts }) => {
  let isClosed = false;
  while (!isClosed) {
    const onAction = await select({
      message: "Select your choice",
      choices: [
        {
          name: "Open bank",
          value: open,
          description: "Open the bank",
        },
        {
          name: "Close bank",
          value: close,
          description: "Close the bank",
        },
      ],
    });
    const result = await onAction({ accounts });
    isClosed = result.isClosed;
  }
};
