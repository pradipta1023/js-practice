import { Client } from "@db/postgres";
import { promptSecret } from "@std/cli";

const password = promptSecret("Enter password: ", { mask: "#" });
const client = new Client({
  user: "postgres",
  database: "Digital_Visitor_Book",
  hostname: "localhost",
  port: 5432,
  password: password,
});

// async function checkConnection() {
//   try {
//     console.log("Testing connection");
//     await client.connect();
//     console.log("✅ Connected");
//   } catch (error) {
//     console.log("❌ Connection failed", error);
//   } finally {
//     await client.end();
//   }
// }

// checkConnection();

export default client;
