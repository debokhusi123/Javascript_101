// Anagram means words which are made on shuffling once

//This approach is n log times slower

var isAnagram = function (s, t) {
  return s.split("").sort().join("") === t.split("").sort().join("");
};
isAnagram("anagram", "nagaram");

//2nd approach is much more better both in terms of time complexity and space complexity
//DS Representation
//Hashmap

var isAnagramHM = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }
  // const sCount ={};
  // const Tcount = {};
  //sCount - Tcount =>0 for it to be anagram
  const count = {};

  for (i = 0; i < s.length; i++) {
    if (!count[s[i]]) count[s[i]] = 0;
    if (!count[t[i]]) count[t[i]] = 0;
    count[s[i]]++;
    count[t[i]]--;
  }
  for (ch of count) {
    // if(count[s[i]] !== count[t[i]]){
    if (count[ch] !== 0) {
      return false;
    }
  }
  return true;
};

//sCount and Tcount are two hashmaps which are containing the occurences
// of each character in that word . This logic checks if the occurence are similiar in both hashmaps then it is anagram
//this will give us a linear optimization code but to optimise more we can use only one hashmap
