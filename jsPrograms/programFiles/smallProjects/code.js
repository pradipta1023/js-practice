const validChoices = ["apple", "orange", "mango", "0"];

const bgGreen = (text) => {
  return "\x1B[42m" + text + "\x1B[0m";
};

const shopItems = {
  apple: 120,
  orange: 50,
  mango: 60,
};

const cart = {};

const addToCart = (key) => {
  if (!(key in cart)) {
    cart[key] = 0;
  }

  cart[key]++;

  return `\n ${bgGreen(`${key} added to cart`)}\n`;
};

const printBill = (billAmount) => {
  console.log("-".repeat(20));
  console.log(`\n Your bill is: ${billAmount}`);
};

const getBill = () => {
  let billAmount = 0;
  console.log("\n");

  for (const cartItem of Object.entries(cart)) {
    const key = cartItem[0];
    const noOfKgs = cartItem[1];
    console.log(` ${key} -> ${shopItems[key]} x ${noOfKgs}`);
    billAmount = billAmount + shopItems[key] * noOfKgs;
  }

  printBill(billAmount);
};

const showShopItems = () => {
  console.log(shopItems);
  console.log("\n");
};

const takePrompt = () => {
  const key = prompt(
    " Enter name to buy 1kg\n Enter 0 to get bill\n Enter your choice: ",
  );
  return key.toLowerCase();
};

const apologyLog = (key) => {
  console.log(
    `\n Sorry! currently ${key} is not available. Please visit later for this.\n`,
  );
};

const shoper = () => {
  while (true) {
    showShopItems();
    const key = takePrompt();

    if ((!validChoices.includes(key))) {
      apologyLog(key);
      continue;
    } else if (key !== "0") {
      console.log(addToCart(key));
    } else {
      return getBill();
    }
  }
};

const main = () => {
  shoper();
};

main();
