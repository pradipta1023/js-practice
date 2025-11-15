const nums = [0, 1, 2, 4, 5, 7];

var summaryRanges = function (nums) {
  let range = 0;
  let minRange = nums[0];
  const summary = [];
  for (let index = 0; index < nums.length; index++) {
    if (minRange + range + 1 !== nums[index + 1]) {
      minRange !== nums[index]
        ? summary.push(`${minRange}->${nums[index]}`)
        : summary.push(`${minRange}`);
      minRange = nums[index + 1];
      range = 0;
    } else {
      range++;
    }
  }

  return summary;
};

const summaryOfRanges = summaryRanges(nums);

console.log(summaryOfRanges);
