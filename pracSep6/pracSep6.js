function makeFrequencyTable(arr) { 
        myHash = {};
        for(var i = 0; i < arr.length; i++){
            key = arr[i];
            if(!(key in myHash)){
                myHash[key] = 0
            }
            myHash[key]++;
        }
        return myHash;
    }



const arr1 = ["a", "a", "a"];
const expected1 = {
    a: 3,
};
console.log(makeFrequencyTable(arr1));
