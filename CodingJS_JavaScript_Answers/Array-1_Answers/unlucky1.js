function unlucky1(nums){
  len = nums.length;
  if(nums[0]==1 && nums[1]==3) return true;
  else if(nums[1]==1 && nums[2]==3) return true;
  else if(nums[len-2]==1 && nums[len-1]==3) return true;
  else return false;
}