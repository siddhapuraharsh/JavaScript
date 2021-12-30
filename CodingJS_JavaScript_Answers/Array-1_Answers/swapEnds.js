function swapEnds(nums){
  len = nums.length;
  
  temp = nums[0];
  nums[0] = nums[len-1];
  nums[len-1] = temp;
  
  return nums;
}