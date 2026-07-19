// function palindrome(str) {
//     for (let i = 0, j = str.length - 1; i < j; i++, j--) {
//         if (str[i] !== str[j]) return false;
//     }
//     return true;
// }

// let result = palindrome("monom")
// console.log(result);

// ________________________________________IsPalindrome


function vowels(str) {
    let j = ""

    for(let i=0; i<str.length; i++){
        if(!"aeiouAEIOU".includes(str[i])){
            j+=str[i];
        }
    }

    return j
}
let result = vowels("jupitor");
console.log(result);




