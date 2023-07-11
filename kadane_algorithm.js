const maxSubarraySum = (arr, N) => {
  // code here
  let sum = arr[0]; // -1
  let max = arr[0]; // -1

  for (let i = 1; i < arr.length; i++) {
    // sum = sum+arr[i]
    sum = Math.max(arr[i], sum + arr[i]);

    max = Math.max(sum, max);
    console.log(max);
  }

  console.log(max);
};

maxSubarraySum([-1, -2, -3, -4], 4);


//kadane algorithm is finding the maximum subarray in sum
//in case of positive numbers , just the sum of array elements will work but in case of negative we need to find the max
 //so better to do for both
 