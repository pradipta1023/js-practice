import client from "./db.js";

const data = () => {
  const firstName = "Nick";
  const lastName = "Jones";
  const entryTime = new Date();
  const phoneNumber = "9383625272";
  return { firstName, lastName, entryTime, phoneNumber };
};

async function visitors() {
  try {
    await client.connect();
    console.log("✅ Connected");
    const result = await client.queryObject`SELECT * FROM visitor`;
    console.log("<====== Visitors Details ======>");
    for (const row of result.rows) {
      console.table(row);
    }
  } catch (error) {
    console.log("❌ Failed to connect", error);
  } finally {
    await client.end();
  }
}

async function resetEntries() {
  try {
    await client.connect();
    console.log("✅ Connected");
    await client.queryObject`DELETE FROM visitor`;
    console.log("Deleted succesfully");
  } catch (error) {
    console.log("❌ Failed to connect", error);
  } finally {
    await client.end();
  }
}

async function entryVisitor() {
  const user = data();
  try {
    await client.connect();
    console.log("✅ Connected");

    const result = await client.queryObject`
    INSERT INTO visitor(first_name, last_name, entry_time, phone_number)
    VALUES(${user.firstName}, ${user.lastName}, ${user.entryTime}, ${user.phoneNumber})
    RETURNING *
    `;
    console.table(result.rows);
  } catch (error) {
    console.log("❌ Failed to connect", error);
  } finally {
    await client.end();
  }
}

// await resetEntries();
await entryVisitor();
await visitors();
