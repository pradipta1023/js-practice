//Write a function that can take an array of sentences and return all the words that start with 'a' (regardless of case)

const sentences = [
  'just a phrase',
  'also another phrase',
  'arbitrary phrase',
  'An interesting phrase'
];

//Output: [ "a", "also", "another", "arbitrary", "An" ]

// const wordStartsWithA = (sentences) => {
//   sentences.reduce((wordsWithA,element) => {
//   wordsWithA.push(element.split(" ").filter((word) => {
//     word = word.toLowerCase();
//     return word.startsWith("a");
//   }));
//   return wordsWithA.flatMap((item) => item);
// }, []);
// };

// const findStartsWithA = (wordsStartedWithA, word) => {
//   return word.toLowerCase().startsWith("a") ? wordsStartedWithA.push(word) && wordsStartedWithA : wordsStartedWithA;
// }

const wordStartsWithA = (sentences, matching) => sentences
  .flatMap(x => x.split(" "))
  .filter(ele => ele.toLowerCase().startsWith(matching));

const result = wordStartsWithA(sentences, "a");

console.log(result);;