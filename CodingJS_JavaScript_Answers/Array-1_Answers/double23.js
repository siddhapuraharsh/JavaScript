function double23(nums){
  let count_2 = 0;
  let count_3 = 0;
  
  for(let x of nums){
    if(x==2) count_2 += 1;
    if(x==3) count_3 += 1;
  }
  
  if(count_2==2 || count_3==2) return true;
  else return false;
}