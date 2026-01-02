import { Image } from "jsr:@matmen/imagescript";

const main = async () => {
  const imageBuffer = await Deno.readFile("./image.jpeg");

  const pixels = await Image.decode(imageBuffer);
  pixels.resize(80, Image.RESIZE_AUTO);
  console.log(pixels.getPixelAt(1, 2));
  // console.log({ pixels });
};

main();
