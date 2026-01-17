const getUsers = (countOfUsers) => {
  const users = [];

  for (let i = 0; i < countOfUsers; i++) {
    const name = prompt("Enter name: ");
    users.push({ name, purseRemaining: 4000, players: [] });
  }

  return users;
};

const getNoOfUsers = () => {
  const noOfUsers = Number(prompt("Enter the number of users"));
  return Number.isInteger(noOfUsers) ? noOfUsers : getNoOfUsers();
};

const main = () => {
  const countOfUsers = getNoOfUsers();
  const users = getUsers(countOfUsers);
  console.log({ users });
};

main();
