import { Client } from "jsr:@db/postgres";
import { password } from "@inquirer/prompts";

export const init = async () => {
  const dbPassword = await password({
    message: "Enter db password: ",
    mask: true,
  });
  return new Client({
    user: "postgres",
    database: "TODO",
    hostname: "localhost",
    port: 5432,
    password: dbPassword,
  });
};

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
