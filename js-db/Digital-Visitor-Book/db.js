import { Client } from "jsr:@db/postgres";

const client = new Client({
  user: "postgres",
  database: "Digital_Visitor_Book",
  hostname: "localhost",
  port: 5432,
  password: "Pradipta@2005",
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
