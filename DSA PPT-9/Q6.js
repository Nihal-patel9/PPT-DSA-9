function firstBadVersion(n) {
  let left = 1;
  let right = n;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (isBadVersion(mid)) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
}

// Example usage
const n = 5;
const bad = 4;

function isBadVersion(version) {
  return version >= bad;
}

const firstBad = firstBadVersion(n);
console.log(firstBad); // Output: 4
