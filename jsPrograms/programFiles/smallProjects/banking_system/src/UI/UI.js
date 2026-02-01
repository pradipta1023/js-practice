import { input, password } from "@inquirer/prompts";

export const inputHeader = (text, length = 30, emoji = "=") =>
  console.log(
    `${emoji.repeat(length)}\n    ${text} -->\n${emoji.repeat(length)}`,
  );

export const footer = (length = 30) => console.log("-".repeat(length));

export const display = (message, logger = console.log) => logger(message);

export const getReceiverDetails = async () => {
  inputHeader("Enter receiver details", 45, "*");
  const details = {};
  details.name = await getInput(input, "Name: ");
  details.accountNumber = await getInput(input, "Account number: ");
  return details;
};

export const getInput = async (
  promptFn,
  message,
  type = "default",
  value = null,
) => await promptFn({ message, required: true, [type]: value });

export const getPassword = async () =>
  await password({
    message: "Enter your password: ",
    mask: true,
    validate: (p) => p.length === 0 ? "Password can't be undefined" : true,
  });
