function arrayFront9(nums){
  len = Math.min(4,nums.length);
  
  for(let i=0; i<len; i++){
    if(nums[i]==9){
      return true;
    }
  }
  return false;
}