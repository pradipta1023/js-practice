const main = async () => {
  const reader = Deno.stdin.readable.getReader();
  const chunk = await reader.read();
  const decoder = new TextDecoder();
  console.log(chunk);
  console.log(decoder.decode(chunk.value));
  const chunk1 = await reader.read();
  console.log(chunk1);
  console.log(decoder.decode(chunk1.value));
  reader.cancel();
};

main();

// const something = async () => {
//   const decoder = new TextDecoder();
//   for await (const chunk of Deno.stdin.readable) {
//     const value = await decoder.decode(chunk);
//     console.log(value);
//   }
// };

// something();
