function searchInsert(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
}

const nums = [1, 3, 5, 6];
const target1 = 5;
const target2 = 7;

const index1 = searchInsert(nums, target1);
console.log(index1); // Output: 2

const index2 = searchInsert(nums, target2);
console.log(index2); // Output: 4
