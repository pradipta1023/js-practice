import { findAccount } from "../UI/bank.js";
import { areSamePasswords } from "../handler/passwordUtils.js";

export const validateCredentials = (loginCredentials, accounts) => {
  const userAccount = findAccount(loginCredentials, accounts);
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
