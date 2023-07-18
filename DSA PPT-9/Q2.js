function searchRange(nums, target) {
  let left = findFirstPosition(nums, target);
  let right = findLastPosition(nums, target);

  return [left, right];
}

function findFirstPosition(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let firstPosition = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] >= target) {
      right = mid - 1;
      if (nums[mid] === target) {
        firstPosition = mid;
      }
    } else {
      left = mid + 1;
    }
  }

  return firstPosition;
}

function findLastPosition(nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let lastPosition = -1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] <= target) {
      left = mid + 1;
      if (nums[mid] === target) {
        lastPosition = mid;
      }
    } else {
      right = mid - 1;
    }
  }

  return lastPosition;
}

const nums = [5, 7, 7, 8, 8, 10];
const target = 8;

const result = searchRange(nums, target);
console.log(result); // Output: [3, 4]
