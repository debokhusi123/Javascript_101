var productExceptSelf = function (nums) {
    const res = [];
    let product = 1;
  
    for (let i = 0; i < nums.length; i++) {
      res.push(product);
    // alert("array"+res);
      product *= nums[i];
    //   alert("pro"+product);

    }
  
    product = 1;
  
    for (let j = nums.length - 1; j >= 0; j--) {
      res[j] *= product;
    //   alert("array2"+res)
      product *= nums[j];
    //   alert("pro2"+product);
    }
  
    return res;
  };
  productExceptSelf([1,2,3,4])
