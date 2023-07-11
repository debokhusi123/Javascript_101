//Debo method
const missingNumber = (num, N) => {
  let c = 1;
  let sortArray = num.sort(function (a, b) {
    return a - b;
  });
  for (let i = 0; i < N; i++) {
    if (sortArray[i + 1] - sortArray[i] == 1) {
    } else {
      console.log("Missing elemt" + (sortArray[i] + c));
      break;
    }
  }
};
missingNumber([1, 2, 3, 5], 5);

//Ripan method
const missingNumberTwo = (num, N) => {
  minValue = Math.min(...num);
  maxValue = Math.max(...num);
  for (i = minValue; i <= maxValue; i++) {
    if (!num.includes(i)) {
      console.log(i);
    }
  }
};
missingNumberTwo([6, 1, 2, 8, 3, 4, 7, 10, 5], 10);