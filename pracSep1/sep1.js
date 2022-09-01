function isPalindrome(str) {
    var len = str.length;
    for(i = 0; i < len/2; i++){
        if(str[i] !== str[len - 1 - i]){
            return false;
        }
    }
    return true;
}


const str1 = "a x a";
const expected1 = true;
console.log(isPalindrome(str1));

const str2 = "racecar";
const expected2 = true;
console.log(isPalindrome(str2));

const str3 = "Dud";
const expected3 = false;
console.log(isPalindrome(str3));

const str4 = "oho!";
const expected4 = false;
console.log(isPalindrome(str4));


