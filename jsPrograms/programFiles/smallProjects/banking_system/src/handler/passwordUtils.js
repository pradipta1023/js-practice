export const matchPassword = (storedPassword, password) => {
  const isNotMatched = !areSamePasswords(storedPassword, password);

  if (isNotMatched) {
    console.log("\n❌    Incorrect password");
  }

  return isNotMatched;
};

const encrypter = (password) => password;

export const areSamePasswords = (storedPassword, password) => {
  if (!password) {
    return false;
  }

  return encrypter(storedPassword) === password;
};
