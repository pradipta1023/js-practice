const writer = new WritableStream({
  write(chunk) {
    Deno.stdout.write(chunk);
  },
});

const obj = {
  start() {
    this.i = 0;
  },
  transform(chunk, controller) {
    this.i++;
    controller.enqueue(chunk);
    if (this.i === 3) close();
  },
};

const nTimes = new TransformStream(obj);

await Deno.stdin.readable.pipeThrough(nTimes).pipeTo(writer);
