const array = [10,20,30,40,50,60,70,80];
const searchedElement = 12;

function binarySearch(arr, searchedElement) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (arr[mid] === searchedElement) {
      return mid; // searchedElement found, return the index
    } else if (arr[mid] < searchedElement) {
      low = mid + 1; // searchedElement is in the right half
    } else {
      high = mid - 1; // searchedElement is in the left half
    }
  }

  return -1; // searchedElement not found
}

const result = binarySearch(array, searchedElement);

if (result !== -1) {
  console.log(`searchedElement ${searchedElement} found at index ${result}.`);
} else {
  console.log(`searchedElement ${searchedElement} not found.`);
}
