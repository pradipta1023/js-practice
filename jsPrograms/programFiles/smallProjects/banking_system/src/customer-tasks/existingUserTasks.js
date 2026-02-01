import { input, select } from "@inquirer/prompts";
import { getInput, getPassword, inputHeader } from "../UI/UI.js";
import { validateCredentials } from "../handler/validations.js";
import {
  balanceEnquiry,
  depositMoney,
  loan,
  moneyTransfer,
  transactions,
  withdrawMoney,
} from "./transactions.js";
import { findAccount } from "../UI/bank.js";

const selectObj = (name, value, description, disabled = false) => ({
  name,
  value,
  description,
  disabled,
});

const login = async () => {
  inputHeader("Enter your credentials", 45);
  const credentials = {};
  credentials.accountNumber = await getInput(input, "Account number: ");
  credentials.password = await getPassword();
  return credentials;
};

const processRequest = async (account, { accounts }) => {
  let toRun = true;
  while (toRun) {
    const command = await select({
      message: "Select your choice",
      choices: [
        selectObj("1. Deposit", depositMoney, "Deposit in your account"),
        selectObj("2. Withdraw", withdrawMoney, "Withdraw from your account"),
        selectObj("3. Transfer", moneyTransfer, "Transfer from your account"),
        selectObj("4. Loan", loan, "Take loan against your account", true),
        selectObj("5. Balance Enquiry", balanceEnquiry, "Check your balance"),
        selectObj("6. Transaction", transactions, "Transaction history"),
        selectObj("7. Back", () => toRun = false, "Go back to previous menu"),
      ],
    });

    await command(account, { accounts });
  }
};

export const existingAccount = async ({ accounts }) => {
  const loginCredentials = await login();

  if (!validateCredentials(loginCredentials, accounts)) return;

  const userAccount = findAccount(loginCredentials, accounts);

  return await processRequest(userAccount, { accounts });
};
