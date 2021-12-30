function makeLast(nums){
  arr = [];
  len = nums.length;
  for(let i=0; i<2*len-1; i++){
    arr.push(0);
  }
  arr.push(nums[len-1]);
  return arr;
}