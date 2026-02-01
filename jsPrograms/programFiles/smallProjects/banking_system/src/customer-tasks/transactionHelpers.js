import { findAccount } from "../UI/bank.js";
import { display } from "../UI/UI.js";

const currentDate = () => {
  const date = new Date();
  return date.toDateString();
};

const currentTime = () => {
  const date = new Date();
  return date.toTimeString().slice(0, 8);
};

export const updateFile = async (accounts) =>
  await Deno.writeTextFile("./data/storage.json", JSON.stringify(accounts));

export const isInsufficientBalance = (balance, money) => {
  const isInsufficient = balance - money < 0;

  if (isInsufficient) {
    display(`\n Balance: ${balance}\nTransaction wanted: ${money}`);
  }

  return isInsufficient;
};

const setTransactions = (amount, account1, account2, key1, key2) => {
  const transactionDetails = {
    [key1]: amount,
    currentBalance: account1.balance,
    [key2]: account2.accountNumber,
    date: currentDate(),
    time: currentTime(),
  };
  account1.transactions.push(transactionDetails);
};

export const transfer = (amount, account, accounts, detailsOfReceiver) => {
  const receiverAccount = findAccount(detailsOfReceiver, accounts);

  if (!receiverAccount) return false;

  receiverAccount.balance += amount;
  account.balance -= amount;
  setTransactions(amount, account, receiverAccount, "transfered", "to");
  setTransactions(amount, receiverAccount, account, "recieved", "from");

  display(`\n    Successfully transfered ₹${amount}`);
  updateFile(accounts);
  return true;
};

const withdrawDetails = (account, moneyToWithdraw) => {
  return {
    withdraw: moneyToWithdraw,
    currentBalance: account.balance,
    date: currentDate(),
    time: currentTime(),
  };
};

export const withdrawTasks = (account, moneyToWithdraw, accounts) => {
  account.balance -= moneyToWithdraw;
  account.transactions.push(withdrawDetails(account, moneyToWithdraw));

  updateFile(accounts);
  display(`\n    Updated balance ->  ₹${account.balance}`);
};

const depositDetails = (amount, account) => {
  return {
    deposit: amount,
    currentBalance: account.balance,
    date: currentDate(),
    time: currentTime(),
  };
};

export const depositTasks = async (account, amount, accounts) => {
  account.transactions.push(depositDetails(amount, account));
  await updateFile(accounts);
  display(`\n    Updated balance -> ₹${account.balance}`);
  return;
};
