function quickSort(array, left, right) {
    if(left < right) {
      let pivot = partition(array, left, right);
      sortQueue.push([left, pivot - 1]);
      sortQueue.push([pivot + 1, right]);
    }
}
  
function partition(array, left, right) {
    let pivot = array[right];
    let stored = left - 1;
    for(let i = left; i < right; i++) {
        if(array[i] < pivot) {
        stored++;
        swap(array, i, stored);
        highlighted[stored] = 1;
        highlighted[i] = 1;
        }
    }
    swap(array, stored + 1, right);
    highlighted[stored] = 1;
    highlighted[right] = 1;
    return stored + 1;
}

function swap(arr, i, j) {
    let temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
}