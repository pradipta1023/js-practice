import { Client } from "jsr:@db/postgres";

const client = new Client({
  user: "postgres",
  database: "TODO",
  hostname: "localhost",
  port: 5432,
  password: "Pradipta@2005",
});

// async function testConnection() {
//   try {
//     await client.connect();
//     console.log("✅ Connected");
//   } catch (error) {
//     console.log("❌ Connection failed", error);
//   } finally {
//     await client.end();
//   }
// }

// testConnection();

export default client;
