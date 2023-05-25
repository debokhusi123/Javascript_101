var longestConsecutive = function(nums) {
    sortArray=nums.sort();
    console.log(sortArray);
};

longestConsecutive([[100,4,200,1,3,2]])
//1, 100, 2, 200, 3, 4

const array1 = [100,4,200,1,3,2];
array1.sort();
console.log(array1);
let newarray;
for (let i = 0; i < array1.length; i++) {
  if(array1[i+1]-array1[i]==1){
 console.log(array1[i],array1[i+1]);
  }
  else if(array1[i]%2===0 && array1[i]%2 ===1){
    console.log(array1[i]);
    newarray=array1[i];
  }
};
