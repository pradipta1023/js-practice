import { number } from "@inquirer/prompts";
import { matchPassword } from "../handler/passwordUtils.js";
import {
  display,
  footer,
  getInput,
  getPassword,
  getReceiverDetails,
  inputHeader,
} from "../UI/UI.js";
import {
  depositTasks,
  isInsufficientBalance,
  transfer,
  withdrawTasks,
} from "./transactionHelpers.js";

export const depositMoney = async (account, { accounts }) => {
  console.clear();
  inputHeader("MONEY DEPOSIT", 45);
  const amount = await getInput(number, "Deposit amount: ", "min", 1);
  account.balance += amount;

  await depositTasks(account, amount, accounts);
  footer(45);
  return amount;
};

export const moneyTransfer = async (account, { accounts }) => {
  console.clear();
  inputHeader("MONEY TRANSFER", 45);
  const amount = await getInput(number, "Amount to transfer: ", "min", 1);
  const pass = await getPassword();

  const isError = matchPassword(account.password, pass) ||
    isInsufficientBalance(account.balance, amount);

  if (isError) return;
  const receiverDetails = await getReceiverDetails();
  const isSuccess = transfer(amount, account, accounts, receiverDetails);
  if (!isSuccess) return display("❌    receiver not found!!");

  display(`    Your current balance is: ${account.balance}\n`);
  footer(45);
  return amount;
};

export const withdrawMoney = async (account, { accounts }) => {
  console.clear();
  inputHeader("WITHDRAW MONEY", 45);
  const amount = await getInput(number, "Amount to withdraw: ", "min", 1);
  const pass = await getPassword();

  const isError = matchPassword(account.password, pass) ||
    isInsufficientBalance(account.balance, amount);

  if (isError) {
    footer(45);
    return;
  }

  withdrawTasks(account, amount, accounts);
  footer(45);
  return amount;
};

export const balanceEnquiry = async (account, { _storageFns }) => {
  console.clear();
  inputHeader("BALANCE ENQUIRY", 45);
  const pass = await getPassword();

  if (matchPassword(account.password, pass)) {
    footer(45);
    return;
  }

  const balanceStatement = `\n    Current balance: ${account.balance}`;
  display(balanceStatement);
  footer(45);
  return balanceStatement;
};

export const transactions = (account, { _storageFns }) => {
  console.clear();
  inputHeader("TRANSACTIONS", 42);
  if (account.transactions.length === 0) {
    display("No transactions yet");
    footer();
    return;
  }
  for (const transaction of account.transactions) {
    display(transaction, console.table);
  }
  footer(42);
};

export const loan = () => {
  display("Loan feature will be available soon");
};
