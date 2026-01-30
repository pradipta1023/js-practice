import { input, number, password, select } from "@inquirer/prompts";

let accounts = [];
let totalTransaction = 0;
const getInput = async (promptFn, message, type = "default", value = null) =>
  await promptFn({ message, required: true, [type]: value });

const getPassword = async () =>
  await password({
    message: "Enter your password: ",
    mask: true,
    validate: (p) => p.length === 0 ? "Password can't be undefined" : true,
  });

const phNoRegex = /^[0-9]+$/;

const inputHeader = (text, length = 30, emoji = "=") =>
  console.log(
    `${emoji.repeat(length)}\n    ${text} -->\n${emoji.repeat(length)}`,
  );

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
  console.log(
    `\n  Account created successfully!
  Account number: ${accountNumber}\n`,
  );
};

const createAccount = async () => {
  let account = await getUserDetails();

  account = defaultDetails(account);
  successMessage(account.accountNumber);
  footer(45);
  return account;
};

const login = async () => {
  inputHeader("Enter your credentials", 45);
  const credentials = {};
  credentials.accountNumber = await getInput(input, "Account number: ");
  credentials.password = await getPassword();
  return credentials;
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

const updateFile = async () =>
  await Deno.writeTextFile("./data/storage.txt", JSON.stringify(accounts));

const depositTasks = async (account, amount) => {
  totalTransaction += amount;
  account.transactions.push(depositDetails(amount, account));
  removeEmptyStringFromStart(account);
  await updateFile();
  console.log(`\n    Updated balance -> ₹${account.balance}`);
};

const depositMoney = async (account) => {
  console.clear();
  inputHeader("MONEY DEPOSIT", 45);
  const amount = await getInput(number, "Deposit amount: ", "min", 1);
  account.balance += amount;

  await depositTasks(account, amount);
  footer(45);
};

const matchPassword = (storedPassword, password) => {
  const isNotMatched = !areSamePasswords(storedPassword, password);

  if (isNotMatched) {
    console.log("\n❌    Incorrect password");
  }

  return isNotMatched;
};

const isInsufficientBalance = (balance, money) => {
  const isInsufficient = balance - money < 0;

  if (isInsufficient) {
    console.log(`\n Balance: ${balance}\nTransaction wanted: ${money}`);
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
  totalTransaction += moneyToWithdraw;
  account.balance -= moneyToWithdraw;
  account.transactions.push(withdrawDetails(account, moneyToWithdraw));
  removeEmptyStringFromStart(account);
  updateFile();
  console.log(`\n    Updated balance ->  ₹${account.balance}`);
};

const withdrawMoney = async (account) => {
  console.clear();
  inputHeader("WITHDRAW MONEY", 45);
  const amount = await getInput(number, "Amount to withdraw: ", "min", 1);
  const pass = await getPassword();

  const isError = matchPassword(account.password, pass) ||
    isInsufficientBalance(account.balance, amount);

  if (isError) {
    return;
  }

  withdrawTasks(account, amount);
  footer(45);
};

const encrypter = (password) => password;

const areSamePasswords = (storedPassword, password) => {
  if (!password) {
    return false;
  }

  return encrypter(storedPassword) === password;
};

const balanceEnquiry = async (account) => {
  console.clear();
  inputHeader("BALANCE ENQUIRY", 45);
  const pass = await getPassword();

  if (!(areSamePasswords(account.password, pass))) {
    console.log("\n❌    Wrong password");
    return;
  }

  const balanceStatement = `\n    Current balance: ${account.balance}`;
  console.log(balanceStatement);
  footer(45);
  return balanceStatement;
};

const findAccount = ({ accountNumber }) =>
  accounts.find((account) => account.accountNumber === accountNumber);

const receiverDetails = async () => {
  inputHeader("Enter receiver details", 45, "*");
  const details = {};
  details.name = await getInput(input, "Name: ");
  details.accountNumber = await getInput(input, "Account number: ");
  return details;
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

const transfer = async (amount, account) => {
  const detailsOfReceiver = await receiverDetails();

  const receiverAccount = findAccount(detailsOfReceiver);

  if (!receiverAccount) return false;

  receiverAccount.balance += amount;
  account.balance -= amount;
  setTransactions(amount, account, receiverAccount, "transfered", "to");
  setTransactions(amount, receiverAccount, account, "recieved", "from");

  console.log(`    Successfully transfered ₹${amount}`);
  totalTransaction += amount;
  return true;
};

const moneyTransfer = async (account) => {
  console.clear();
  inputHeader("MONEY TRANSFER", 45);
  const amount = await getInput(number, "Amount to transfer: ", "min", 1);
  const pass = await getPassword();

  const isError = matchPassword(account.password, pass) ||
    isInsufficientBalance(account.balance, amount);

  if (isError) return;
  const isSuccess = await transfer(amount, account);
  if (!isSuccess) {
    console.log("❌    receiver not found!!");
    return;
  }

  updateFile();
  console.log(`    Your current balance is: ${account.balance}`);
  footer(45);
};

const loan = () => {
  console.log("Loan feature will be available soon");
};

const footer = (length = 30) => console.log("-".repeat(length));

const transactions = (account) => {
  console.clear();
  inputHeader("TRANSACTIONS", 42);
  if (account.transactions.length === 0) {
    console.log("No transactions yet");
    footer();
    return;
  }
  for (const transaction of account.transactions) {
    console.table(transaction);
  }
  footer(42);
};

const selectObj = (name, value, description, disabled = false) => ({
  name,
  value,
  description,
  disabled,
});

const processRequest = async (account) => {
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

    await command(account);
  }
};

const validateCredentials = (loginCredentials) => {
  const userAccount = findAccount(loginCredentials);
  if (!userAccount) {
    console.log("    Account not found");
    return false;
  }
  const isMatched = areSamePasswords(
    userAccount.password,
    loginCredentials.password,
  );

  if (!isMatched) {
    console.log("\n❌    Incorrect password\n");
    return false;
  }

  return true;
};

const existingAccount = async () => {
  const loginCredentials = await login();

  if (!validateCredentials(loginCredentials)) return;

  const userAccount = findAccount(loginCredentials);

  return await processRequest(userAccount);
};

const close = () => {
  const stringified = JSON.stringify(accounts);
  Deno.writeTextFileSync("./data/storage.txt", stringified);
  console.log("Bank has been closed");
  console.log(`Today's total transaction: ${totalTransaction}`);
  return { isClosed: true };
};

const getManagerDetails = async () => {
  const details = {};
  details.id = await getInput(input, "Enter Id: ", "default", null);
  details.password = await getPassword();
  return details;
};

const manager = async () => {
  inputHeader("MANAGER SECTION", 45);
  const managerDetails = await getManagerDetails();
  console.log(managerDetails);

  console.log("Manager feature will be available soon");
};

const manageCustomerInput = async () => {
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
      "1": async () => {
        accounts.push(await createAccount());
        const stringified = JSON.stringify(accounts);
        Deno.writeTextFileSync("./data/storage.txt", stringified);
      },
      "2": async () => await existingAccount(),
      "back": () => toRun = false,
    };

    await manageCustomer[choice]();
  }
};

const open = async () => {
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
    await manage();
  }
  return { isClosed: false };
};

const manageBank = async () => {
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
    const result = await onAction();
    isClosed = result.isClosed;
  }
};

const main = async () => {
  const storedAccounts = await Deno.readTextFile("./data/storage.txt");
  const parsedAccounts = storedAccounts ? JSON.parse(storedAccounts) : [];
  accounts = parsedAccounts;
  await manageBank();
};

await main();
