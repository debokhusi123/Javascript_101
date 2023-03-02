//Duplicate in array (Sorting)

const duplicates = function (nums){
nums.sort();
for(let i = 0;i<nums.length-1;i++){
    if(nums[i]===nums[i++]){
        return true
    }
}
}
return false

//Duplicates using Set Data Structure Sol 1

const duplicatesSetLogic1 = function(nums){
   const set = new Set();
   for(let i = 0;i<nums.length;i++){
    if(set.has(nums[i])){//returns true if the key exists, false otherwise.
        return true
    } 
    set.add(nums[i]);
}
return false
}
duplicatesSetLogic1([1,1,1,2,2,3]);

//Duplicates using Set Data Structure Sol 2
const duplicatesSetLogic2 = function(nums){
   return (new Set(nums)).size !== nums.length
}



