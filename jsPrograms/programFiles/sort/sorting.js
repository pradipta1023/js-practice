const VIRAT_ODI_RUNS = [74, 0, 0, 1, 84, 11, 100, 22, 52, 5, 20, 14, 24, 54, 117, 51, 101, 88, 0, 95, 103, 16, 55, 85, 56, 3, 122, 4, 54, 31, 4, 36, 11, 8, 166, 4, 113, 113, 5, 9, 17, 16, 0, 18, 8, 65, 0, 51, 7, 66, 56, 63, 89, 21, 9, 15, 51, 89, 78, 16, 85, 0, 4, 114, 120];

const ODI_RUNS_OF_VIRAT = [
  67, 5, 31, 89, 12, 44, 2, 76, 14, 58, 3, 39, 101, 7, 22, 65, 0, 48, 9, 33,
  82, 16, 29, 4, 51, 18, 37, 6, 45, 11, 64, 2, 28, 75, 13, 40, 1, 52, 19, 36,
  117, 55, 8, 95, 4, 61, 0, 34, 71, 10,
  117, 55, 8, 95, 4, 61, 0, 34, 71, 10, 82, 16, 29, 4, 51, 18, 37, 6, 45, 11,
  64, 2, 28, 75, 13, 40, 1, 52, 19, 36, 117, 55, 8, 95, 4, 61, 0, 34, 71, 10,
  82, 16, 29, 4, 51, 18, 37, 6, 45, 11
];

const TEST_RUNS_OF_SACHIN = [74, 7, 100, 106, 0, 12, 31, 28, 92, 67, 94, 35, 45, 14, 100, 122, 82, 34, 56, 52, 12, 32, 91, 32, 8, 7, 15, 62, 34, 88, 7, 100, 23, 80, 27, 22, 14, 67, 61, 20, 52, 41, 8, 100, 62, 88, 34, 10, 41, 100, 8, 34, 7, 100, 9, 17, 34, 52, 100, 34, 0, 100, 17, 34, 52, 100, 34, 0, 100, 17, 34, 52, 100, 34, 0, 100, 17, 34, 52, 100, 34, 0, 100, 17, 34, 52, 100, 34, 0, 100];

const TEST_RUNS_OF_VIRAT = [79, 8, 50, 20, 4, 76, 19, 186, 72, 13, 30, 6, 45, 17, 0, 18, 7, 149, 81, 72, 15, 44, 51, 103, 40, 13, 62, 9, 3, 6, 14, 72, 141, 15, 4, 13, 62, 9, 3, 6, 14, 72, 141, 15, 4, 13, 62, 9, 3, 6, 14, 72, 141, 15, 4, 13, 62, 9, 3, 6, 14, 72, 141, 15, 4, 13, 62, 9, 3, 6, 14, 72, 141, 15, 4, 13, 62, 9, 3, 6, 14, 72, 141, 15, 4, 13, 62, 9, 3, 6];

const IPL_RUNS_OF_SACHIN = [
  19, 48, 3, 32, 69, 5, 48, 71, 0, 8, 45, 54, 12, 73, 61, 10, 0, 4, 44, 1,
  61, 12, 37, 4, 19, 46, 0, 21, 55, 1, 24, 59, 6, 29, 12, 35, 8, 18, 42, 9,
  23, 56, 0, 11, 37, 14, 5, 100, 0, 14
];

const IPL_RUNS_OF_VIRAT = [
  73, 11, 42, 5, 28, 64, 0, 39, 17, 52, 8, 31, 66, 4, 20, 48, 9, 35, 71, 2,
  59, 13, 36, 1, 47, 10, 26, 58, 14, 30, 6, 42, 18, 35, 8, 51, 23, 7, 39, 64,
  11, 28, 3, 40, 15, 22, 55, 9, 31, 66
];

const ODI_RUNS_OF_SACHIN = [
  4, 76, 32, 98, 7, 12, 4, 53, 16, 2, 0, 175, 73, 3, 85, 200, 14, 120, 32, 53,
  0, 2, 16, 25, 163, 12, 18, 99, 53, 2, 12, 114, 52, 0, 92, 7, 32, 76, 4, 48,
  12, 56, 3, 8, 62, 0, 45, 14, 94, 7, 44, 21, 6, 41, 98, 0, 8, 7, 4, 12,
  32, 175, 73, 3, 85, 200, 14, 120, 32, 53, 0, 2, 16, 25, 163, 12, 18, 99, 53, 2,
  12, 114, 52, 0, 92, 7, 32, 76, 4, 48, 12, 56, 3, 8, 62, 0, 45, 14, 94, 7
];

function sort(data) {
  const sortedData = data.slice();
  for (let i = 0; i < sortedData.length - 1; i++) {
    for (let j = i + 1; j < sortedData.length; j++) {
      if (sortedData[i] > sortedData[j]) {
        const temp = sortedData[i];
        sortedData[i] = sortedData[j];
        sortedData[j] = temp;
      }
    }
  }
  return sortedData;
}

function sumOf(data) {
  let sum = 0;

  for (let index = 0; index < data.length; index++) {
    sum = sum + data[index];
  }

  return sum;
}

function meanOf(data) {
  return sumOf(data) / data.length;
}

function medianOf(data) {
  const sortedData = sort(data);
  const indexOfMedian = Math.floor(sortedData.length / 2);
  return sortedData[indexOfMedian];
}

function varianceOf(data, mean) {
  let sum = 0;

  for (let index = 0; index < data.length; index++) {
    const difference = data[index] - mean;
    sum = sum + Math.pow(difference, 2);
  }

  return Math.sqrt(sum / data.length);
}

function calculateStats(runs) {
  const median = medianOf(runs);
  
  const mean = meanOf(runs);
  
  const variance = varianceOf(runs, mean);
  
  return `Median: ${median} | Mean: ${mean} | Variants:${variance}`;
}

function statsByPlayerName(runs, playerName) {
  return `${playerName} => ${calculateStats(runs)}`;
}

function main() {
  console.log("TEST STATS\n\n");
  console.log(statsByPlayerName(TEST_RUNS_OF_VIRAT, 'Virat Kohli'));
  console.log(statsByPlayerName(TEST_RUNS_OF_SACHIN, 'Sachin Tendulkar'));
  console.log("\nODI STATS\n\n");
  console.log(statsByPlayerName(ODI_RUNS_OF_VIRAT, 'Virat Kohli'));
  console.log(statsByPlayerName(ODI_RUNS_OF_SACHIN, 'Sachin Tendulkar'));
  console.log("\nT20 STATS\n\n");
  console.log(statsByPlayerName(IPL_RUNS_OF_VIRAT, 'Virat Kohli'));
  console.log(statsByPlayerName(IPL_RUNS_OF_SACHIN, 'Sachin Tendulkar'));
}

main();