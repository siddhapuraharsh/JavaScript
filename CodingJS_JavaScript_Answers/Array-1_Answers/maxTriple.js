function maxTriple(nums){
  len = nums.length
  mid = (len-1)/2;
  max = Math.max(nums[0],nums[len-1],nums[mid]);
  return max;
}