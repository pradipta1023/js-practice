const getFile = () => Deno.readTextFileSync("hello.txt");

const getBackup = () => Deno.readTextFileSync("backup.txt");

const main = () => {
  try {
    const content = getFile();
    console.log("File contents are: ", content);
  } catch {
    try {
      const content = getBackup();
      console.log("Backup file contents are: ", content);
    } catch (error) {
      console.error(error.toString());
    }
  }
};

main();
