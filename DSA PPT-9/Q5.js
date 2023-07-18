function majorityElement(nums) {
  let candidate;
  let count = 0;

  for (let num of nums) {
    if (count === 0) {
      candidate = num;
      count++;
    } else if (num === candidate) {
      count++;
    } else {
      count--;
    }
  }

  return candidate;
}

const nums = [3, 3, 4, 2, 4, 4, 2, 4, 4];
const majority = majorityElement(nums);
console.log(majority); // Output: 4
