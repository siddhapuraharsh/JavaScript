function copyEvens(nums, count){
  let temp = 0;
  let arr = [];
  
  for(let i=0; i<nums.length; i++){
    if(nums[i]%2 == 0 && temp!=count){
      temp += 1;
      arr.push(nums[i]);
    }
  }
  return arr;
}