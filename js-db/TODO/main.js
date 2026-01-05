import { promptSecret } from "@std/cli";
import client from "./db.js";

const detailsNeeded = ["First name", "Last name", "phone number"];

const fillDetails = () => {
  const user = {};
  for (const detail of detailsNeeded) {
    user[detail] = prompt(` Fill ${detail}: `);
  }
  user["password"] = promptSecret(" Fill password: ", { mask: "#" });
  return user;
};

const successMsg = (result) => {
  console.log(" Data inserted successfully");
  console.table(result.rows);
};

const createAccount = async () => {
  const user = fillDetails();
  try {
    await client.connect();
    console.log(" ✅ Connected");
    const result = await client.queryObject`
    INSERT INTO users(first_name, last_name, phone_number, password)
    VALUES(${user["First name"]}, ${user["Last name"]}, 
    ${user["phone number"]}, ${user["password"]})
    RETURNING *
    `;
    successMsg(result);
  } catch (error) {
    console.log(` An error occured ${error}`);
  } finally {
    await client.end();
  }
};

const getPassword = () => {
  const password = promptSecret(" Enter your password: ", { mask: "#" });
  const confirmPassword = promptSecret(" Enter your password: ", { mask: "#" });
  return password === confirmPassword ? password : getPassword();
};

const getLoginDetails = () => {
  const user = {};
  user["user id"] = parseInt(prompt(" Fill user id: "));
  user["password"] = getPassword();
  return user;
};

const login = async () => {
  const user = getLoginDetails();
  try {
    await client.connect();
    console.log(" ✅ Connected");
    const result = await client.queryObject`
    SELECT * FROM users
    WHERE user_id = ${user["user id"]} AND password = ${user["password"]}
    `;
    return result.rows[0];
  } catch (error) {
    console.log(` An error occured ${error}`);
  } finally {
    await client.end();
  }
};

const detailsToFill = ["todo name", "description"];

const todoDetails = (userId) => {
  const todo = {};
  for (const detail of detailsToFill) {
    todo[detail] = prompt(` Fill ${detail}: `);
  }
  todo["isActive"] = true;
  todo["user id"] = userId;
  return todo;
};

const addTodo = async (userId) => {
  const todo = todoDetails(userId);
  try {
    await client.connect();
    console.log(" ✅ Connected");
    const result = await client.queryObject`
    INSERT INTO todo (todo_name, is_active, created_at, user_id, description)
    VALUES(${todo["todo name"]}, ${todo.isActive}, ${new Date()}, 
    ${todo["user id"]}, ${todo.description})
    RETURNING todo_name, is_active, created_at, user_id
    `;
    console.log(" Todo created");
    console.table(result.rows);
  } catch (error) {
    console.log(" An error occured", error);
  } finally {
    await client.end();
  }
};

const finishTodo = async (userId) => {
  const todoId = prompt("Enter todo id to delete: ");
  try {
    await client.connect();
    console.log(" ✅ Connected");
    const result = await client.queryObject`
    UPDATE todo
    SET is_active = false
    WHERE todo_id = ${todoId} AND user_id = ${userId}
    RETURNING todo_id, todo_name, is_active, user_id
    `;
    for (const row of result.rows) {
      console.table(row);
    }
  } catch (error) {
    console.log(` An error occured ${error}`);
  } finally {
    await client.end();
  }
};

const viewAll = async (userId) => {
  try {
    await client.connect();
    console.log(" ✅ Connected");
    const result = await client.queryObject`
    SELECT * FROM todo
    WHERE user_id = ${userId}
    `;
    if (!(result.rows.length)) return console.log(" No active todos to show");
    for (const row of result.rows) {
      row["created_at"] = row["created_at"].toString();
      row["updated_at"] = row["updated_at"]
        ? row["updated_at"].toString()
        : null;
      console.table(row);
    }
  } catch (error) {
    console.log(` An error occured ${error}`);
  } finally {
    await client.end();
  }
};

const editName = async (userId, todoId) => {
  const todoName = prompt("Enter new name: ");
  try {
    await client.connect();
    console.log(" ✅ Connected");
    const result = await client.queryObject`
    UPDATE todo
    SET todo_name = ${todoName},
    updated_at = ${new Date()}
    WHERE user_id = ${userId} AND todo_id = ${todoId}
    RETURNING todo_name, todo_id, user_id, updated_at
    `;
    result.rows[0]["updated_at"] = result.rows[0]["updated_at"]
      ? result.rows[0]["updated_at"].toString()
      : null;
    console.table(result.rows);
  } catch (error) {
    console.log(` An error occured ${error}`);
  } finally {
    await client.end();
  }
};

const editDescription = async (userId, todoId) => {
  const description = prompt("Enter new description: ");
  try {
    await client.connect();
    console.log(" ✅ Connected");
    const result = await client.queryObject`
    UPDATE todo
    SET description = ${description},
    updated_at = ${new Date()}
    WHERE user_id = ${userId} AND todo_id = ${todoId}
    RETURNING description, updated_at
    `;
    result.rows[0]["updated_at"] = result.rows[0]["updated_at"]
      ? result.rows[0]["updated_at"].toString()
      : null;
    for (const row of result.rows) {
      console.table(row);
    }
  } catch (error) {
    console.log(` An error occured ${error}`);
  } finally {
    await client.end();
  }
};

const editBoth = async (userId, todoId) => {
  const todoName = prompt("Enter new name: ");
  const description = prompt("Enter new description: ");
  try {
    await client.connect();
    console.log(" ✅ Connected");
    const result = await client.queryObject`
    UPDATE todo
    SET description = ${description},
    todo_name = ${todoName},
    updated_at = ${new Date()}
    WHERE user_id = ${userId} AND todo_id = ${todoId}
    RETURNING todo_name, description, updated_at
    `;
    result.rows[0]["updated_at"] = result.rows[0]["updated_at"]
      ? result.rows[0]["updated_at"].toString()
      : null;
    for (const row of result.rows) {
      console.table(row);
    }
  } catch (error) {
    console.log(` An error occured ${error}`);
  } finally {
    await client.end();
  }
};

const editTodo = async (userId) => {
  const input = prompt(
    " 1. Edit name\n 2. Edit description\n 3. Edit both\n Enter your choice: ",
  );
  const todoId = prompt("Enter todo id to edit: ");
  if (input === "1") return await editName(userId, todoId);
  if (input === "2") return await editDescription(userId, todoId);
  if (input === "3") return await editBoth(userId, todoId);
  return;
};

const existingAccount = async () => {
  const user = await login();
  if (!user) {
    console.log(" No account found");
    return;
  }
  while (true) {
    const input = prompt(
      " 1. Add todo \n 2. Finish todo\n 3. Edit todo\n 4. View all\n 5. Exit\n Enter your choice:",
    );
    if (input === "1") await addTodo(user["user_id"]);
    if (input === "2") await finishTodo(user["user_id"]);
    if (input === "3") await editTodo(user["user_id"]);
    if (input === "4") await viewAll(user["user_id"]);
    if (input === "5") return console.log(" Thank you for being with us");
  }
};

const main = async () => {
  while (true) {
    const input = prompt(
      " \n 1. New user\n 2. Existing user\n Enter your choice: ",
    );
    if (input === "1") await createAccount();
    if (input === "2") await existingAccount();
  }
};

main();
