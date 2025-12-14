// "this\nis\ngood" => ['this','is','good']

function* lineIterator(paragraph) {
  let index = 0;

  while (index < paragraph.length) {
    const endOfLineIndex = paragraph.indexOf("\n", index);

    if (endOfLineIndex === -1) {
      return yield paragraph.slice(index);
    }

    const line = paragraph.slice(index, endOfLineIndex);
    index = endOfLineIndex + 1;
    yield line;
  }
}

const lines = lineIterator("this\nis\ngood");
