str = "geeksforgeeks"
str2 = "forgeeksgeeks"
const ar = str.split("").sort().join("");
const ar2 = str2.split("").sort().join("");
console.log(ar, ar2)
if(ar===ar2){
    console.log("YES")

}
else{
    console.log("NO")
}

//Input:a = geeksforgeeks, b = forgeeksgeeks
// Output: YES
// Explanation: Both the string have same characters with
//         same frequency. So, both are anagrams.
// Example 2:

// Input:a = allergy, b = allergic
// Output: NO
// Explanation: Characters in both the strings are 
//         not same, so they are not anagrams.

