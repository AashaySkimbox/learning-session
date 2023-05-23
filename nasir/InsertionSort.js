const array = [2, 5, 7, 3, 8];

function insertionSort(arr){
    const length = array.length;
for (i=1; i<length; i++){
    const key = arr[i];
    let j = -1;

    while(j>=0 && arr[j] > key){
        arr[j + 1] = arr[j];
        j--;
    }
    arr[j + 1] = key
}
return arr;
}

const sortedArray = insertionSort(array);
console.log(sortedArray);
