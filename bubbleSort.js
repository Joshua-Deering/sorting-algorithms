function bubbleSort(array) {
    if(idx >= array.length) {
        return;
    }
    if(jx > array.length - idx - 1) {
        jx = 0;
        idx++;
    }
    if (array[jx] > array[jx+1])
    {
        bubbleSwap(array,jx,jx+1);
        highlighted[jx] = 1;
        highlighted[jx+1] = 1;
    }
    jx++;
}

function bubbleSwap(arr, i, j) {
    let temp = arr[j];
    arr[j] = arr[i];
    arr[i] = temp;
}