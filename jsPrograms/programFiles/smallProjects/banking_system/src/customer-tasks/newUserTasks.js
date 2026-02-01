import { input, number } from "@inquirer/prompts";
import {
  display,
  footer,
  getInput,
  getPassword,
  inputHeader,
} from "../UI/UI.js";
import { updateFile } from "./transactionHelpers.js";

const phNoRegex = /^[0-9]+$/;

const getUserDetails = async () => {
  console.clear();
  inputHeader("CREATE NEW ACCOUNT", 45);
  inputHeader("Enter your details", 45, "*");
  const details = {};

  details.name = await getInput(input, "Name: ");
  details.contact = await getInput(
    input,
    "Mobile number: ",
    "validate",
    (phNo) => phNo.length === 10 && phNoRegex.test(phNo),
  );
  details.password = await getPassword();
  details.balance = await getInput(
    number,
    "Deposit amount (Minimum -> 1000): ",
    "min",
    1000,
  );

  return details;
};

const generateAccountNumber = () => {
  const firstPart = parseInt(Date.now().toString().slice(4));
  const random = Math.random() + 1 * 100;
  const randomAccountNumber = (firstPart * random).toString().slice(0, 10);

  return randomAccountNumber;
};

const defaultDetails = (account) => {
  account.accountNumber = generateAccountNumber();
  account.hasLoan = false;
  account.loanAmount = 0;
  account.transactions = [];

  return account;
};

const successMessage = (accountNumber) => {
  display(
    `\n  Account created successfully!
  Account number: ${accountNumber}\n`,
  );
};

export const createAccount = async ({ accounts }) => {
  let account = await getUserDetails();

  account = defaultDetails(account);
  successMessage(account.accountNumber);
  footer(45);
  updateFile(accounts);
  return account;
};
