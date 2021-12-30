function maxEnd3(nums){
  max = Math.max(nums[0],nums[2]);
  return nums.fill(max);
}