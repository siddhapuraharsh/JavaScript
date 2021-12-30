function rotateLeft3(nums){
  nums.push(nums.shift());
  return nums;
}