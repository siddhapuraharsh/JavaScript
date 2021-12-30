function sum2(nums){
  len = nums.length;
  
  if(len==0) return 0;
  else if(len==1) return nums[0];
  else return nums[0]+nums[1];
}