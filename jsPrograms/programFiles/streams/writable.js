// const writer = Deno.stdout.writable.getWriter();
// await writer.write(new TextEncoder().encode("abc"));

const writer = Deno.stdout.writable.getWriter();

for await (const chunk of Deno.stdin.readable) {
  writer.write(chunk);
}
