import { encrypter, hasher } from "./hash.js";
import { parse, stringify } from "./stringify_parse.js";
const numbers = "1234567890";

let accounts = [];

const isValidChoice = (choice, validChoice) => {
  if (!choice) {
    return false;
  }
  return validChoice.includes(choice.toLowerCase());
};

const messages = [
  "\n    Enter your name:",
  "    Enter your mobile number:",
  "    Enter your password:",
  "    Deposit amount:",
];

const getUserDetails = () => {
  const details = [];

  for (const message of messages) {
    const information = prompt(message);
    details.push(information);
  }

  console.clear();

  return details;
};

const isInValidContact = (contact) =>
  contact.length !== 10 || "12345".includes(contact[0]);

const buildAccountInfo = (userDetails) => {
  const [name, contact, password, balance] = userDetails;
  const hashedPassword = hasher(password);
  const account = { name, contact, hashedPassword, balance };

  return account;
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

const msg = () => {
  console.log(
    "\n    Please deposit the minimum amount\n    Minimum deposit amount is 500\n",
  );
};

const isLessAmount = (amount) => {
  const isLessThan500 = amount < 500;

  if (isLessThan500) {
    msg();
  }

  return isLessThan500;
};

const isInvalidAmount = (details) => {
  if (!details) {
    return true;
  }

  return [].some.call(details, (detail) => !(numbers.includes(detail)));
};

const deposit = () => {
  const depositAmount = prompt("    Enter amount to deposit:");
  return isInvalidAmount(depositAmount) || isLessAmount(parseInt(depositAmount))
    ? deposit()
    : parseInt(depositAmount);
};

const successMessage = (accountNumber) => {
  console.log(
    `\n    Account created successfully!
    ${accountNumber} is your account number`,
  );
};

const userContact = () => {
  const contactNumber = prompt("    Please enter valid mobile number:");
  return isInValidContact(contactNumber) ? userContact() : contactNumber;
};

const checkDetails = (account) => {
  account.contact = isInValidContact(account.contact)
    ? userContact()
    : account.contact;

  if (isInvalidAmount(account.balance)) {
    console.log("\n\n    Please deposit the valid amount\n");
    account.balance = deposit();
  }

  if (!account.hashedPassword) {
    account.hashedPassword = hasher(prompt("\n    Please enter a password"));
  }

  if (isLessAmount(account.balance)) {
    console.log("    Minimum deposit amount is 500");
    account.balance = deposit();
  }

  return;
};

const createAccount = () => {
  const userDetails = getUserDetails();
  let account = buildAccountInfo(userDetails);

  checkDetails(account);

  account.balance = parseInt(account.balance);
  account = defaultDetails(account);
  successMessage(account.accountNumber);

  return account;
};

const messagesToLogin = [
  "\n    Please enter your account number:",
  "    Please enter your password:",
];

const login = () => {
  const credentials = [];

  for (const message of messagesToLogin) {
    const credential = prompt(message);
    credentials.push(credential);
  }

  return credentials;
};

const withdraw = () => {
  const withdrawAmount = prompt("\n    Enter the amount:");
  return isInvalidAmount(withdrawAmount)
    ? withdraw()
    : parseInt(withdrawAmount);
};

const amountDeposit = () => {
  const amountToDeposit = prompt("\n    Enter amount to deposit:");
  if (amountToDeposit < 0 || isInvalidAmount(deposit)) amountDeposit();
  return parseInt(amountToDeposit);
};

const currentDate = () => {
  const date = new Date();
  return date.toDateString();
};

const currentTime = () => {
  const date = new Date();
  return date.toTimeString().slice(0, 8);
};

const depositDetails = (amount, account) => {
  return {
    deposit: amount,
    currentBalance: account.balance,
    date: currentDate(),
    time: currentTime(),
  };
};

const removeEmptyStringFromStart = (account) => {
  if (account.transactions[0] === "") {
    account.transactions = account.transactions.slice(1);
  }
};

const depositTasks = (account, amount) => {
  account.transactions.push(depositDetails(amount, account));
  removeEmptyStringFromStart(account);
  console.log(`\n    Updated balance -> ₹${account.balance}`);
};

const depositMoney = (account) => {
  const amount = amountDeposit();
  account.balance += amount;

  depositTasks(account, amount);
};

const matchPassword = (hashedPassword, password) => {
  const isNotMatched = !areSamePasswords(hashedPassword, password);

  if (isNotMatched) {
    console.log("\n    Incorrect password");
  }

  return isNotMatched;
};

const isInsufficientBalance = (balance, money) => {
  const isInsufficient = balance - money < 0;

  if (isInsufficient) {
    console.log("\n    Not enough money");
  }

  return isInsufficient;
};

const withdrawDetails = (account, moneyToWithdraw) => {
  return {
    withdraw: moneyToWithdraw,
    currentBalance: account.balance,
    date: currentDate(),
    time: currentTime(),
  };
};

const withdrawTasks = (account, moneyToWithdraw) => {
  account.balance -= moneyToWithdraw;
  account.transactions.push(withdrawDetails(account, moneyToWithdraw));
  removeEmptyStringFromStart(account);
  console.log(`\n    Updated balance ->  ₹${account.balance}`);
};

const withdrawMoney = (account) => {
  const moneyToWithdraw = withdraw();
  const password = prompt("\n    Please enter password to withdraw:");

  const isError = matchPassword(account.hashedPassword, password) ||
    isInsufficientBalance(account.balance, moneyToWithdraw);

  if (isError) {
    return;
  }

  withdrawTasks(account, moneyToWithdraw);
};

const areSamePasswords = (hashedPassword, password) => {
  if (!password) {
    return false;
  }

  return encrypter(hashedPassword) === password;
};

const balanceEnquiry = (account) => {
  const password = prompt("\n    Enter your password to check balance:");

  if (!(areSamePasswords(account.hashedPassword, password))) {
    console.log("\n    Please enter correct password");
    balanceEnquiry(account);
  }

  return `\n    Current balance: ${account.balance}`;
};

const findAccount = ({ accountNumber }) =>
  accounts.find((account) => account.accountNumber === accountNumber);

const receiverDetails = () => {
  const messages = [
    "\n    Enter receiver's name:",
    "    Enter receiver's account number:",
  ];
  const details = [];

  for (const message of messages) {
    const detail = prompt(message);
    details.push(detail);
  }

  return details;
};

const senderTransaction = (amount, account, receiverAccount) => {
  const transactionDetailsForSender = {
    transfer: amount,
    currentBalance: account.balance - amount,
    to: receiverAccount.accountNumber,
    date: currentDate(),
    time: currentTime(),
  };

  account.transactions.push(transactionDetailsForSender);
};

const receiverTransaction = (amount, receiverAccount, account) => {
  const transactionDetailsForReceiver = {
    received: amount,
    currentBalance: receiverAccount.balance,
    from: account.accountNumber,
    date: currentDate(),
    time: currentTime(),
  };

  receiverAccount.transactions.push(transactionDetailsForReceiver);
};

const setTransactions = (amount, account, receiverAccount) => {
  senderTransaction(amount, account, receiverAccount);
  receiverTransaction(amount, receiverAccount, account);
};

const transfer = (amount, account) => {
  const [name, accountNumber] = receiverDetails();
  const detailsOfReceiver = { name, accountNumber };

  if (!detailsOfReceiver.accountNumber || !detailsOfReceiver.name) {
    console.log("    Please enter the details properly");
    return transfer();
  }

  const receiverAccount = findAccount(detailsOfReceiver);

  if (!receiverAccount) {
    return false;
  }

  receiverAccount.balance += amount;
  setTransactions(amount, account, receiverAccount);
  removeEmptyStringFromStart(account);
  removeEmptyStringFromStart(receiverAccount);

  console.log(`    Successfully transfered ₹${amount}`);
  return true;
};

const moneyTransfer = (account) => {
  const amountToTransfer = withdraw();
  const password = prompt("\n    Please enter password to transfer:");

  const isError = matchPassword(account.hashedPassword, password) ||
    isInsufficientBalance(account.balance, moneyToWithdraw);

  if (isError) {
    return;
  }

  if (!transfer(amountToTransfer, account)) {
    console.log("    receiver not found!!");
    return;
  }

  account.balance -= amountToTransfer;

  console.log(`    Your current balance is: ${account.balance}`);
};

const loan = () => {
  console.log("Loan feature will be available soon");
};

const transactions = (account) => {
  if (account.transactions.length === 1) {
    "No transactions yet";
  }
  console.log(account.transactions.slice(0));
};

const processRequest = (account) => {
  while (true) {
    const choice = prompt(
      "\n 1. Deposit\n 2. Withdraw\n 3. Transfer\n 4. Loan\n 5. Check balance\n 6. Transactions\n 7. Exit",
    );

    if (choiceValidation(choice, "01234567")) return processRequest();

    const operations = {
      "1": () => depositMoney(account),
      "2": () => withdrawMoney(account),
      "3": () => moneyTransfer(account),
      "4": () => loan(),
      "5": () => console.log(balanceEnquiry(account)),
      "6": () => transactions(account),
    };

    if (choice === "7") return;

    operations[choice]();
  }
};

const existingAccount = () => {
  const [accountNumber, password] = login();
  const loginCredentials = { accountNumber, password };

  const userAccount = findAccount(loginCredentials);

  if (!userAccount) {
    console.log("    Account not found");
    return;
  }

  const isMatched = areSamePasswords(userAccount.hashedPassword, password);
  if (!isMatched) {
    console.log("    Incorrect password");
    return;
  }

  return processRequest(userAccount);
};

const close = () => {
  const stringified = stringify(accounts);
  Deno.writeTextFileSync("./storage.txt", stringified);
  console.log("Bank has been closed");
  return;
};

const choiceValidation = (choice, validChoice) => {
  const isInvalid = !isValidChoice(choice, validChoice);

  if (isInvalid) {
    console.log("\n    Please enter a valid choice\n");
  }

  return isInvalid;
};

const manager = () => {
  console.log("Manager feature will be available soon");
};

const manageCustomerInput = () => {
  while (true) {
    const choice = prompt(
      "\n 1. Open new account\n 2. Existing account\n 3. Exit\n    Enter your choice:",
    );

    if (choiceValidation(choice, "123")) return manageCustomerInput();

    if (choice === "3") return;

    const manageCustomer = {
      "1": () => {
        accounts.push(createAccount());
        const stringified = stringify(accounts);
        Deno.writeTextFileSync("./storage.txt", stringified);
      },
      "2": () => existingAccount(),
    };

    manageCustomer[choice]();
  }
};

const open = () => {
  const openingTime = Date.now();
  const choice = prompt("\n    Customer\n    Manager\n    Enter your choice:");

  if (choiceValidation(choice, ["customer", "manager"])) {
    return open();
  }

  const user = {
    customer: manageCustomerInput,
    manager: manager,
  };

  user[choice.toLowerCase()]();
};

const manageBank = () => {
  while (true) {
    const choice = prompt(
      " 1. Open bank\n 2. Close Bank\n    Enter your choice:",
    );
    if (choiceValidation(choice, "12")) {
      return manageBank();
    }

    if (choice === "2") {
      return close();
    }

    open();
  }
};

const main = () => {
  const storedAccounts = Deno.readTextFileSync("./storage.txt");
  const parsedAccounts = parse(storedAccounts);
  accounts = parsedAccounts;
  manageBank();
};

main();
