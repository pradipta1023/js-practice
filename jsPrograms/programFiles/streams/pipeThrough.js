const decoder = new TextDecoder();
const encoder = new TextEncoder();
const upperCase = new TransformStream({
  transform(chunk, controller) {
    const value = decoder.decode(chunk);
    controller.enqueue(encoder.encode(value.toUpperCase()));
  },
});

Deno.stdin.readable.pipeThrough(upperCase).pipeTo(Deno.stdout.writable);
