function sumHeights(heights, start, end){
  let sum = 0;
  for(let i=start; i<end; i++){
    sum += Math.abs(heights[i]-heights[i+1]);
  }
  return sum;
}