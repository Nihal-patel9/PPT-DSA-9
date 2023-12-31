function findCommonElements(arr1, arr2, arr3) {
  let i = 0; // Pointer for arr1
  let j = 0; // Pointer for arr2
  let k = 0; // Pointer for arr3

  const commonElements = [];

  while (i < arr1.length && j < arr2.length && k < arr3.length) {
    if (arr1[i] === arr2[j] && arr2[j] === arr3[k]) {
      commonElements.push(arr1[i]);
      i++;
      j++;
      k++;
    } else if (arr1[i] < arr2[j]) {
      i++;
    } else if (arr2[j] < arr3[k]) {
      j++;
    } else {
      k++;
    }
  }

  return commonElements;
}

const arr1 = [1, 5, 10, 20, 40, 80];
const arr2 = [6, 7, 20, 80, 100];
const arr3 = [3, 4, 15, 20, 30, 70, 80, 120];

const commonElements = findCommonElements(arr1, arr2, arr3);
console.log(commonElements); // Output: [20, 80]
