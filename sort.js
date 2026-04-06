function insertionSort(arr) {
    let n = arr.length;

    // Start from the second element (index 1)
    for (let i = 1; i < n; i++) {
        
        // Element to be inserted
        let key = arr[i];

        // Previous index
        let j = i - 1;

        // Move elements of arr[0..i-1] that are greater than key
        // to one position ahead of their current position
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }

        // Insert key at correct position
        arr[j + 1] = key;
    }

    return arr;
}

// Example usage
let array = [8, 2, 9, 1, 5, 6, 0];
console.log("Sorted array:", insertionSort(array));
