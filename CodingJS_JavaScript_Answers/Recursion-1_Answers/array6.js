function array6(nums, i){
  if(i==nums.length) return false;
  
  if(nums[i]==6) return true;
  else return array6(nums, i+1)
}