var str1 = "hello";
var expected1 = "olleh";
console.log(reverseWords(str1));


function reverseWords(str) {
    var newStr=" ";
    for(var i= str.length - 1;i >= 0; i--){
        newStr += str[i];
    }
    return newStr;
}