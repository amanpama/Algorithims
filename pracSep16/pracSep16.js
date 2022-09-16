input = [3,4,3,1,1,5,1]

function findOccurance(arr){
    count4=0
    countObj={}
    for(i in arr){ //for (var i=0; i<arr.length;i++)
        if(arr[i]==4){
            count4++
        }
        countObj[i]=count4
        // console.log(arr[i])
    }


return countObj
}

console.log(findOccurance(input))