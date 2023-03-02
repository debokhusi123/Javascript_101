//To use reducer function to find occurences
// Code was done by me in this way first 
var topKFrequent = function (nums, k) {
    const occurrences = nums.reduce(function (acc, curr) {//accumulator - It accumulates the callback's return values.
     // currentValue - The current element being passed from the array.
      return acc[curr] ? ++acc[curr] : (acc[curr] = 1), acc;
    }, {});
    console.log(occurrences)
  
  //to find the top occurence (failing in some scenarios so avoid this logic)
    if (Object.keys(occurrences).length > k) {
      const ar = Object.keys(occurrences);
      const dis = ar.pop();
      return ar;
    }
    if ((nums.length = 1 && k == 1)) {
      return nums;
    }
  };
    topKFrequent([1, 1, 1, 2, 2, 3], 2);
  
  
  
  //To use Datastructure Hashmap to find the occurences of each number in array . This is for space optimization and time optimization
  //Just using a hashmap will give extra space of O(1) and O(N)
  //Solution 1(only for getting occurences of value in array )
  var topKFrequent = function(nums, k) {
    const hash = {};
    for (const num of nums) {
      hash[num] ? hash[num]++ : (hash[num] = 1);
    }
    return Object.entries(hash)
      .sort((a, b) => a[1] - b[1])
      .slice(-k)
      .map((item) => item[0]);
  };
  
  topKFrequent([1, 1, 1, 2, 2, 3], 2);
  //After you get the occurences , and you return the Object.entries in sorted order->you will be getting the array broken in keys and values pair 
  //(3) [Array(2), Array(2), Array(2)]
  
  // (2) ['3', 1]
  
  // (2) ['2', 2]
  
  // (2) ['1', 3]
  //After this when we slice it its only showing  first two entries as k=2
  //mapping over the obeject item[0] will give the keys of the object and hence we get 1,2 in the array 
  
  
  
  //Solution 2 using map 
  var topKFrequent = function (nums,k) {
    // Create a map, set the elements to be the keys and the freq to be the values
    let map = new Map();
    for (let i = 0; i < nums.length; i++) {
      if (map.has(nums[i])) {
        map.set(nums[i], map.get(nums[i]) + 1); //map.set(key, value) – stores the value by the key
        //map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
        //So here the map is setting its key and value as nums[i] and adding the count of that nums[i] as value
      } else {
        map.set(nums[i], 1);
      }
    };
   let sortArr = [...map.keys()].sort((a, b) => map.get(b) - map.get(a)).slice(0, k)
  
  return sortArr};
  //To find the top occurences for the consecutive number in array
  topKFrequent([1, 1, 1, 2, 2, 3],2);
  
  
  
  
  