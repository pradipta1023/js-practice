import { manageBank } from "./src/UI/bank.js";

const main = async () => {
  const storedAccounts = await Deno.readTextFile("./data/storage.json");
  const parsedAccounts = storedAccounts ? JSON.parse(storedAccounts) : [];
  const accounts = parsedAccounts;
  await manageBank({ accounts });
};

main();
