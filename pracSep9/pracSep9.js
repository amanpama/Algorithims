//   String: Rotate String
//   Create a standalone function that accepts a string and an integer,
//   and rotates the characters in the string to the right by that given
//   integer amount.

// an input value that sends the last element of the string to the start
// function rotateInt(str, n) {
//     var result=""
//     for ( var i=0; i<str.length;i++){
//         result+= str[i]
//     }
//     return result
// }
// console.log(rotateInt("Shde",2))
// result 'edhS'




function words(str) {
    if (str.length > 1)
    {
        return str.slice(-1) +
        str.slice(0, -1);
    }
    return str;
}
console.log(words("Hello World"))


const str = "Hello World";

const rotateAmnt1 = 0;
const expected1 = "Hello World";

const rotateAmnt2 = 1;
const expected2 = "dHello Worl";

const rotateAmnt3 = 2;
const expected3 = "ldHello Wor";

const rotateAmnt4 = 4;
const expected4 = "orldHello W";

const rotateAmnt5 = 13;
const expected5 = "ldHello Wor";

// Explanation: this is 2 more than the length so it ends up being the same
// as rotating it 2 characters because after rotating every letter it gets back
// to the original position.

