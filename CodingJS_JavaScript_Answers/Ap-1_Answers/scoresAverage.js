function scoresAverage(scores){
  let len = scores.length;
  let mid = (len/2);
  sum_a = 0;
  sum_b = 0;
  for(let i=0; i<mid; i++){
    sum_a += scores[i];
    sum_b += scores[mid+i];
  }
  return Math.ceil(Math.max(sum_a/mid, sum_b/mid));
}