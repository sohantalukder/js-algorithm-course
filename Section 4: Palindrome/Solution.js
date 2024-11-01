function palindrome(str) {
    return str === str.split("").reverse().join("");
}

console.log(palindrome("racecar"));
// function palindrome(str){
//     return str.split("").every((char, i)=>
//          char === str[str.length-i]
//     )
// }