function fix23(nums){
  let index = -1;
  
  for(let i=0; i<2; i++){
    if(nums[i]==2 && nums[i+1]==3){
      index = i+1;
    }
  }
  
  if(index!=-1) nums[index] = 0;
  return nums;
}