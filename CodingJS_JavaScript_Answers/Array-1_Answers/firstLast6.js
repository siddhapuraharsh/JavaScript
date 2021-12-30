function firstLast6(nums){
  len = nums.length
  if(nums[0]==6 || nums[len-1]==6) return true;
  else return false;
}