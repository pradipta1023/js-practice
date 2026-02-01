import { getInput, getPassword, inputHeader } from "../UI/UI.js";

const getManagerDetails = async () => {
  const details = {};
  details.id = await getInput(input, "Enter Id: ", "default", null);
  details.password = await getPassword();
  return details;
};

export const manager = async (accounts) => {
  inputHeader("MANAGER SECTION", 45);
  const managerDetails = await getManagerDetails();
  console.log(managerDetails);

  console.log("Manager feature will be available soon", accounts);
};
