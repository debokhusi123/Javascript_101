const subarraySum = (arr, s, n) => {
  for (i = 0; i < n; i++) {
    var sum = arr[i];
    for (j = i + 1; j < n; j++) {
      sum = sum + arr[j];

      if (sum == s) {
        console.log(
          "The sum is " +
            sum +
            "at 1st" +
            arr.indexOf(arr[i + 1]) +
            "to last" +
            arr.indexOf(arr[j + 1])
        );
       arr = arr.push(arr.indexOf(arr[i + 1]),arr.indexOf(arr[j + 1]));
      }
    }
  }

};
subarraySum([1,2,3,7,5], 12, 5);
