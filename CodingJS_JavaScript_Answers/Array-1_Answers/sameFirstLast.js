function sameFirstLast(nums){
  len = nums.length;
  if(len==0) return false;
  else if(nums[0]==nums[len-1]) return true;
  else return false;
}