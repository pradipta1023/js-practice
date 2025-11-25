import { Table } from "@sauber/table";

const validChoices = [
  "apple",
  "orange",
  "mango",
  "banana",
  "kgs",
  "kg",
  "gram",
  "grams",
];

const validUnits = ["kgs", "kg", "gram", "grams"];

let totalRevenue = 0;

const shopItems = {
  apple: 120,
  orange: 50,
  mango: 60,
  banana: 30,
};

const itemsLeft = {
  apple: 10,
  orange: 12,
  mango: 18,
  banana: 24,
};

const icons = {
  apple: "🍎",
  orange: "🍊",
  mango: "🥭",
  banana: "🍌",
};

let cart = {};

let currentTime;
const closingTime = Date.now() + 10000;

const bgGreen = (text) => {
  return "\x1B[42m" + text + "\x1B[0m";
};

const bgRed = (text) => {
  return "\x1B[41m" + text + "\x1B[0m";
};

const messages = (cartDetails, functionToUse) => functionToUse(cartDetails);

const insuficientItemMsg = (cartDetails) =>
  `\n  ${
    bgRed(
      `Sorry ! ${cartDetails.quantity} kgs of ${cartDetails.item} is not available`,
    )
  }\n`;

const addedInCartMsg = (cartDetails) =>
  `\n  ${
    bgGreen(
      `${cartDetails.quantity} ${cartDetails.unit} of ${cartDetails.item} added to cart`,
    )
  }\n`;

const addToCart = (cartDetails) => {
  if (!(cartDetails.item in cart)) {
    cart[cartDetails.item] = 0;
  }

  if (itemsLeft[cartDetails.item] - cartDetails.quantity < 0) {
    return messages(cartDetails, insuficientItemMsg);
  }

  itemsLeft[cartDetails.item] -= cartDetails.quantity;
  cart[cartDetails.item] += cartDetails.quantity;

  return messages(cartDetails, addedInCartMsg);
};

const printBill = (billAmount) => {
  console.log("-".repeat(20));
  console.log(`\n Your bill is: ₹${billAmount}\n`);
  totalRevenue += billAmount;
};

const getBill = () => {
  let billAmount = 0;
  console.log("\n");

  console.log(" ", cart, "\n");
  for (const cartItem of Object.entries(cart)) {
    const item = cartItem[0];
    const noOfKgs = cartItem[1];
    console.log(` ${item} -> ${shopItems[item]} x ${noOfKgs}`);
    billAmount += shopItems[item] * noOfKgs;
  }

  cart = {};
  printBill(billAmount);
};

const showShopItems = () => {
  const items = Object.keys(shopItems).map((item) =>
    ` |  ${icons[item]}  |\t${shopItems[item]}\t|`
  ).join("\n");
  console.log("\n");
  console.log(" | Items|\tPrice\t|");
  console.log("", "-".repeat(24));
  console.log(items + "\n");
};

const takePrompt = () => {
  const key = prompt(
    "\n Enter quantity and name of item to buy\n Enter 0 to get bill\n\n Enter your choice: ",
  );

  if (key === "0") return key;

  const input = key.split(" ");
  let [quantity, unit, item] = input;
  quantity = parseInt(quantity);

  if (!(validUnits.includes(unit))) {
    console.log(bgRed(
      "\n Unit isn't properly defined\n Please define properly using kgs or grams",
    ));
    return takePrompt();
  }

  return { quantity, unit, item };
};

const apologyLog = (key) => {
  const apoLogyMessage = bgRed(
    `Sorry! currently ${key} is not available. Please visit later for this.`,
  );
  console.log(`\n ${apoLogyMessage}\n`);
};

const setUnit = (cartDetails) => {
  // console.log(cartDetails.unit, cartDetails.quantity, "Inside setUnit");

  if (!(["kg", "kgs"].includes(cartDetails.unit))) {
    cartDetails.unit = "kgs";
    cartDetails.quantity = cartDetails.quantity / 1000;
  }
  return cartDetails;
};

const shoper = () => {
  while (true) {
    showShopItems();
    let cartDetails = takePrompt();
    if (typeof cartDetails === "object") {
      cartDetails = setUnit(cartDetails);
    }

    if (cartDetails === "0") {
      return getBill();
    } else if ((!validChoices.includes(cartDetails.item))) {
      apologyLog(cartDetails.item);
    } else {
      console.log(addToCart(cartDetails));
    }
  }
};

const showStock = () => {
  // console.log(` ${"-".repeat(15)} ITEMS IN STOCK ${"-".repeat(15)}\n`);
  // const items = Object.entries(itemsLeft)
  //   .map(([item, value]) => ` |  ${icons[item]}  |\t${value}\t|`)
  //   .join("\n");
  // console.log("\n");
  // console.log(" | Items|   Items Left  |");
  // console.log("", "-".repeat(24));
  // console.log(items + "\n");

  const t = new Table();
  t.theme = Table.roundTheme;
  t.headers = ["Items", "Items Left"];
  t.rows = Object.entries(icons).map(([name, icon]) => [icon, itemsLeft[name]]);
  console.log(t.toString());
};

const reStock = ([item, quantity, price]) => {
  quantity = parseInt(quantity);
  price = parseInt(price);

  if (isNaN(quantity) && isNaN(price)) {
    console.log("\n Please enter the quantity or price in number to store\n");
    return shop();
  }

  if (!(item in itemsLeft)) {
    itemsLeft[item] = 0;
    shopItems[item] = price;
  }
  itemsLeft[item] += quantity;
};

const isClosingTime = () => {
  currentTime = Date.now();
  return closingTime - currentTime <= 0;
};

const shop = () => {
  while (true) {
    if (isClosingTime()) return;
    showStock();

    const shopKeeperInput = prompt(
      " Enter item with quantity and price in sequence to add\n Enter 0 to allow shopping \n\n Enter your choice: ",
    );

    if (shopKeeperInput === "0") {
      shoper();
      continue;
    }

    reStock(shopKeeperInput.split(" "));
  }
};

const showRevenue = () => {
  console.log(` Your today's revenue: ₹${totalRevenue}`);
};

const main = () => {
  shop();
  showRevenue();
  console.log(" Closing...");
};

main();
