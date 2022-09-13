// Problem 1: Given a sorted array of n non - repeating elements, write a function to search a given element x in and return the index of x in the array.

function binarySearch( arr, n){
    let first = 0
    let last = arr.length-1

    while (first < last-1){
        let mid = Math.floor((first+last)/2)

        if(arr[mid]==n){
            return mid
        }
        else if(arr[mid] > n){
            first = mid+1
        }
        else if (arr[mid]> n){
            last = mid - 1
        }
    }
    return -1
}
var input = [1, 2, 4, 5, 6, 8, 9, 12, 13, 14]
console.log(binarySearch(input,4))

// input: [1, 2, 4, 5, 6, 8, 9, 12, 13, 14], 10
// there is no 10 in the input, so the expected output will be - 1
// ---------------------------------------

//     Prolem 2: Solve binary search for sorted array of repeating elements. 

// Return the last the index of last occurrence of the

// Examples:

// input: [2, 2, 2, 2, 2, 2, 4, 5, 7, 8, 8, 8, 8, 9], 7
// expected output: 8

// input: [2, 2, 2, 2, 2, 2, 4, 5, 7, 8, 8, 8, 8, 9], 3
// The index for the last 2 is 5, so the expected result is 5 