function insertionSort(arr) {
    // Counter 1: outer loop
    for (let i = 1; i < arr.length; i++) {

        let key = arr[i];     // element to insert
        let j = i - 1;        // Counter 2: inner loop

        // Move elements greater than key one position ahead
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Insert the key in the correct position
        arr[j + 1] = key;
    }

    return arr;
}

// Example usage
let numbers = [5, 2, 9, 1, 6];
console.log(insertionSort(numbers));
