// Example for deduping sorted array: 

// Example for deduping of unsorted array:

// Dedupe of [ 3, 4, 1, 4, 4, 5, 3, 4 ] will be [ 1, 3, 4, 5 ]

let arr =  [ 1, 1, 1, 3, 4, 4, 4, 7, 8, 8 ] ;
// will be  [ 1, 3, 4, 7, 8 ]

let firstArr = arr.filter((i,index) => {
    return arr.indexOf(i) === index;
});

console.log(firstArr);
