function no23(nums){
  for(let i=0; i<2; i++){
    if(nums[i]==2 || nums[i]==3) return false;
  }
  return true;
}